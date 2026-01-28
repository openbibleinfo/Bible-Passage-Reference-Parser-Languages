type BookEntry = {
	osis: string | string[] | BookOsisObject[];
	texts: TextSpec[];
	combine?: boolean;
};

type BookOsisObject = {
	osis: string;
	before?: string;
	after?: string;
	join?: string;
};

type MergedLanguageData = {
	variables: Record<string, any>;
	ordinals?: any;
	options: Record<string, any>;
	books: any[];
};

type ExpandedBook = {
	osis: string | string[];
	texts: TextSpec[];
	combine: boolean;
	groupKey: string;
	sourceId: number;
	hasBefore: boolean;
};

type ProcessedBook = {
	osis: string | string[];
	texts: TextSpec[];
	groupKey: string;
	sourceId: number;
	hasBefore: boolean;
};

type TextSpec = {
	text: string;
	normalize?: "none";
};

function normalizeBookTextItem(item: any): TextSpec {
	if (typeof item === "string" || typeof item === "number") {
		return { text: String(item) };
	}
	if (item && typeof item === "object" && "text" in item) {
		const text = String((item as any).text);
		const keys = Object.keys(item);
		const extraKeys = keys.filter((k) => k !== "text" && k !== "normalize");
		if (extraKeys.length > 0) {
			throw new Error(`Unsupported book text item: ${JSON.stringify(item)}`);
		}
		const normalize = (item as any).normalize;
		if (normalize == null) {
			return { text };
		}
		if (normalize !== "none") {
			throw new Error(`Unsupported book text item: ${JSON.stringify(item)}`);
		}
		return { text, normalize: "none" };
	}
	throw new Error(`Invalid book text item: ${JSON.stringify(item)}`);
}

function normalizeBookTexts(raw: any): TextSpec[] {
	if (!Array.isArray(raw)) {
		throw new Error(`Invalid book texts: ${JSON.stringify(raw)}`);
	}
	return raw.map((item) => normalizeBookTextItem(item));
}

function textSpecKey(spec: TextSpec): string {
	return `${spec.text}\u0000${spec.normalize ?? ""}`;
}

function addTextSpec(map: Map<string, TextSpec>, spec: TextSpec) {
	const key = textSpecKey(spec);
	if (!map.has(key)) map.set(key, spec);
}

export function expandBookNames(
	book: BookEntry,
	sourceId: number,
	trailingDotsMode: "optional" | "as_is"
): ExpandedBook[] {
	const expandedBooks: ExpandedBook[] = [];
	const combine = book.combine !== false; // Default to true unless explicitly false
	const texts = book.texts;
	
	// Handle different osis types
	if (typeof book.osis === 'string') {
		expandedBooks.push({
			osis: book.osis,
			texts,
			combine,
			groupKey: "",
			sourceId,
			hasBefore: false
		});
	} else if (Array.isArray(book.osis)) {
		if (book.osis.length > 0 && typeof book.osis[0] === 'string') {
			expandedBooks.push({
				osis: book.osis as string[],
				texts,
				combine,
				groupKey: "",
				sourceId,
				hasBefore: false
			});
		} else {
			const osisObjects = book.osis as BookOsisObject[];
			const groupMap = new Map<string, { osis: string[]; texts: Map<string, TextSpec>; groupKey: string; hasBefore: boolean }>();
			const orderedGroups: Array<{ osis: string[]; texts: Map<string, TextSpec>; groupKey: string; hasBefore: boolean }> = [];

			const withAffix = osisObjects.filter((osisObj) => osisObj.before || osisObj.after);
			const withoutAffix = osisObjects.filter((osisObj) => !osisObj.before && !osisObj.after);
			for (const osisObj of [...withAffix, ...withoutAffix]) {
				let finalNames: TextSpec[] = [];
				const hasBefore = Boolean(osisObj.before);
				if (osisObj.before) {
					const joinStr = typeof osisObj.join === 'string' ? osisObj.join : " ";
					const beforeValues = expandTrailingDotVariants(
						Array.isArray(osisObj.before) ? osisObj.before : [osisObj.before],
						trailingDotsMode
					);
					for (const beforeValue of beforeValues) {
						for (const spec of texts) {
							finalNames.push({ text: `${beforeValue}${joinStr}${spec.text}`, normalize: spec.normalize });
						}
					}
				} else if (osisObj.after) {
					const joinStr = typeof osisObj.join === 'string' ? osisObj.join : " ";
					const afterValues = expandTrailingDotVariants(
						Array.isArray(osisObj.after) ? osisObj.after : [osisObj.after],
						trailingDotsMode
					);
					for (const afterValue of afterValues) {
						for (const spec of texts) {
							finalNames.push({ text: `${spec.text}${joinStr}${afterValue}`, normalize: spec.normalize });
						}
					}
				} else {
					finalNames = texts.map((spec) => ({ ...spec }));
				}

				const key = `${osisObj.before ?? ""}|${osisObj.after ?? ""}|${osisObj.join ?? ""}`;
				const existing = groupMap.get(key);
				if (!existing) {
					const entry = { osis: [osisObj.osis], texts: new Map<string, TextSpec>(), groupKey: key, hasBefore };
					for (const spec of finalNames) addTextSpec(entry.texts, spec);
					groupMap.set(key, entry);
					orderedGroups.push(entry);
				} else {
					if (!existing.osis.includes(osisObj.osis)) {
						existing.osis.push(osisObj.osis);
					}
					for (const spec of finalNames) addTextSpec(existing.texts, spec);
				}
			}

			for (const group of orderedGroups) {
				expandedBooks.push({
					osis: group.osis.length === 1 ? group.osis[0] : group.osis,
					texts: [...group.texts.values()],
					combine,
					groupKey: group.groupKey,
					sourceId,
					hasBefore: group.hasBefore
				});
			}
		}
	}
	
	return expandedBooks;
}

export function mergeBooks(yamlData: MergedLanguageData): ProcessedBook[] {
	const expandedBooks: ExpandedBook[] = [];
	const trailingDotsMode = (yamlData.options?.trailing_dots_in_variables ?? "as_is") as "optional" | "as_is";
	
	// First pass: expand all book names
	let sourceId = 0;
	for (const bookEntry of yamlData.books) {
		// Handle special start_language marker
		if (bookEntry.start_language) {
			continue;
		}
		
		const rawTexts = bookEntry.texts ?? bookEntry.names;
		if (rawTexts == null) {
			throw new Error("Book entry missing texts");
		}
		const texts = normalizeBookTexts(rawTexts);
		const book = {
			...bookEntry,
			texts
		} as BookEntry;
		if (!book.texts) {
			throw new Error("Book entry missing texts");
		}
		const expanded = expandBookNames(book, sourceId, trailingDotsMode);
		expandedBooks.push(...expanded);
		sourceId += 1;
	}
	
	// Second pass: merge entries by groupKey + OSIS list while preserving first-seen order
	const processedBooks: ProcessedBook[] = [];
	const groupIndex = new Map<string, number>();

	for (const expandedBook of expandedBooks) {
		const osisList = Array.isArray(expandedBook.osis) ? expandedBook.osis : [expandedBook.osis];
		const groupKey = `${expandedBook.sourceId}|${expandedBook.groupKey}|${osisList.join("|")}`;
		const existingIndex = groupIndex.get(groupKey);
		if (existingIndex == null) {
			groupIndex.set(groupKey, processedBooks.length);
			processedBooks.push({
				osis: expandedBook.osis,
				texts: [...expandedBook.texts],
				groupKey: expandedBook.groupKey,
				sourceId: expandedBook.sourceId,
				hasBefore: expandedBook.hasBefore
			});
		} else {
			const entry = processedBooks[existingIndex];
			const existing = new Map(entry.texts.map((spec) => [textSpecKey(spec), spec]));
			for (const spec of expandedBook.texts) {
				addTextSpec(existing, spec);
			}
			entry.texts = [...existing.values()];
			entry.hasBefore = entry.hasBefore || expandedBook.hasBefore;
		}
	}
	return processedBooks;
}

function expandTrailingDotVariants(values: string[], mode: "optional" | "as_is"): string[] {
	if (mode !== "optional") return values;
	const out = new Set<string>();
	for (const value of values) {
		out.add(value);
		if (value.endsWith(".") || value.length === 0) continue;
		out.add(`${value}.`);
	}
	return [...out];
}
