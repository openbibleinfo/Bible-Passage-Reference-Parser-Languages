"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ndz.js";

describe("Localized book Rev (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ndz)", () => {
		expect(p.parse("Có Kóó 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ndz)", () => {
		expect(p.parse("Màtéyò 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ndz)", () => {
		expect(p.parse("Márìkò 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ndz)", () => {
		expect(p.parse("Lúkà 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndz)", () => {
		expect(p.parse("1 Jòvánì 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jòvánì 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndz)", () => {
		expect(p.parse("2 Jòvánì 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jòvánì 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ndz)", () => {
		expect(p.parse("3 Jòvánì 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jòvánì 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ndz)", () => {
		expect(p.parse("Jòvánì 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ndz)", () => {
		expect(p.parse("Ndâ Nèté 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ndz)", () => {
		expect(p.parse("Rómà 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ndz)", () => {
		expect(p.parse("1 Kòríndì 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòríndì 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ndz)", () => {
		expect(p.parse("2 Kòríndì 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòríndì 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ndz)", () => {
		expect(p.parse("Kòlósìyà 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ndz)", () => {
		expect(p.parse("Gàlátì 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ndz)", () => {
		expect(p.parse("Éfàsù 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ndz)", () => {
		expect(p.parse("Fìlípì 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndz)", () => {
		expect(p.parse("1 Tèsàlónìkà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlónìkà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndz)", () => {
		expect(p.parse("2 Tèsàlónìkà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlónìkà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ndz)", () => {
		expect(p.parse("1 Tìmàtéyò 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tìmàtéyò 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndz)", () => {
		expect(p.parse("2 Tìmàtéyò 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tìmàtéyò 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ndz)", () => {
		expect(p.parse("Títò 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ndz)", () => {
		expect(p.parse("Fílímònì 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ndz)", () => {
		expect(p.parse("Ìbìráyò 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ndz)", () => {
		expect(p.parse("Jákòmò 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndz)", () => {
		expect(p.parse("1 Pìyétòrò 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pìyétòrò 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ndz)", () => {
		expect(p.parse("2 Pìyétòrò 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pìyétòrò 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ndz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ndz)", () => {
		expect(p.parse("Júdà 1:1").osis()).toEqual("Jude.1.1");
	});
});
