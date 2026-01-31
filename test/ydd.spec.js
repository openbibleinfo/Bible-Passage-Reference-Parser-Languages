"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ydd.js";

describe("Localized book Gen (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ydd)", () => {
		expect(p.parse("Bereshis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ברֵאשִית 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ydd)", () => {
		expect(p.parse("Shemot 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("שְמוֹת 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ydd)", () => {
		expect(p.parse("וַיִּקְרָא 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Vayikra 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ydd)", () => {
		expect(p.parse("Bamidbar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("במִדְבר 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ydd)", () => {
		expect(p.parse("אֵיכָה 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ydd)", () => {
		expect(p.parse("di antplekung 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("די אנטפלעקונג 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ydd)", () => {
		expect(p.parse("דְבָֿרִים 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Devarim 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ydd)", () => {
		expect(p.parse("יְהוֹשועַ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ydd)", () => {
		expect(p.parse("שוֹפֿטִים 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ydd)", () => {
		expect(p.parse("רוּת 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ydd)", () => {
		expect(p.parse("יְשַעְיָה 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ydd)", () => {
		expect(p.parse("שְמוּאֵל א 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ydd)", () => {
		expect(p.parse("שְמוּאֵל ב 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ydd)", () => {
		expect(p.parse("מְלָכִים א 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ydd)", () => {
		expect(p.parse("מְלָכִים ב 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ydd)", () => {
		expect(p.parse("דִבֿרֵי הַיָמִים א 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ydd)", () => {
		expect(p.parse("דִבֿרֵי הַיָמִים ב 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ydd)", () => {
		expect(p.parse("עֶזְרָא 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ydd)", () => {
		expect(p.parse("נְחֶמְיָה 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ydd)", () => {
		expect(p.parse("אֶסתֵּר 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ydd)", () => {
		expect(p.parse("אִיובֿ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ydd)", () => {
		expect(p.parse("תְּהִלִּים 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ydd)", () => {
		expect(p.parse("מִשלֵי 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ydd)", () => {
		expect(p.parse("קהלת 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ydd)", () => {
		expect(p.parse("שִיר הַשִירִים 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ydd)", () => {
		expect(p.parse("יִרְמְיָה 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ydd)", () => {
		expect(p.parse("יחֶזקֵאל 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ydd)", () => {
		expect(p.parse("דָניאֵל 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ydd)", () => {
		expect(p.parse("הוֹשֵעַ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ydd)", () => {
		expect(p.parse("יוֹאֵל 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ydd)", () => {
		expect(p.parse("עָמוֹס 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ydd)", () => {
		expect(p.parse("עוֹבֿדיָה 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ydd)", () => {
		expect(p.parse("יוֹנָה 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ydd)", () => {
		expect(p.parse("מִיכָה 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ydd)", () => {
		expect(p.parse("נַחום 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ydd)", () => {
		expect(p.parse("חֲבַֿקוּק 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ydd)", () => {
		expect(p.parse("צפַֿניָה 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ydd)", () => {
		expect(p.parse("חַגַי 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ydd)", () => {
		expect(p.parse("זכַריָה 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ydd)", () => {
		expect(p.parse("מַלאָכי 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ydd)", () => {
		expect(p.parse("Mattityahu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("מתתיהו 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ydd)", () => {
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("מארקוס 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ydd)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("לוקאס 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ydd)", () => {
		expect(p.parse("g Yochanan briv 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ג יוחנן בריוו 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ydd)", () => {
		expect(p.parse("a Yochanan briv 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("a יוחנן בריוו 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("a. Yochanan briv 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("a. יוחנן בריוו 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("א Yochanan briv 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("א יוחנן בריוו 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("א. Yochanan briv 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("א. יוחנן בריוו 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ydd)", () => {
		expect(p.parse("b Yochanan briv 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("b יוחנן בריוו 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("b. Yochanan briv 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("b. יוחנן בריוו 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ב Yochanan briv 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ב יוחנן בריוו 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ב. Yochanan briv 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ב. יוחנן בריוו 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ydd)", () => {
		expect(p.parse("Yochanan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("יוחנן 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ydd)", () => {
		expect(p.parse("di shlichim geshichte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("די שליחים געשיכטע 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ydd)", () => {
		expect(p.parse("רוימער בריוו 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roymer briv 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roymer 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ydd)", () => {
		expect(p.parse("a קארינטער בריוו 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("a Korinter briv 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("a. קארינטער בריוו 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("a. Korinter briv 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("א קארינטער בריוו 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("א Korinter briv 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("א. קארינטער בריוו 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("א. Korinter briv 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ydd)", () => {
		expect(p.parse("b קארינטער בריוו 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("b Korinter briv 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("b. קארינטער בריוו 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("b. Korinter briv 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ב קארינטער בריוו 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ב Korinter briv 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ב. קארינטער בריוו 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ב. Korinter briv 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ydd)", () => {
		expect(p.parse("קאלאסער בריוו 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloser briv 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ydd)", () => {
		expect(p.parse("Galater 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("גאלאטער 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ydd)", () => {
		expect(p.parse("Efezer 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("עפעזער 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ydd)", () => {
		expect(p.parse("Filiper 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("פיליפער 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ydd)", () => {
		expect(p.parse("a טעסאלאניקער בריוו 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("a Tesaloniker briv 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("a. טעסאלאניקער בריוו 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("a. Tesaloniker briv 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("א טעסאלאניקער בריוו 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("א Tesaloniker briv 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("א. טעסאלאניקער בריוו 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("א. Tesaloniker briv 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ydd)", () => {
		expect(p.parse("b טעסאלאניקער בריוו 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("b Tesaloniker briv 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("b. טעסאלאניקער בריוו 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("b. Tesaloniker briv 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ב טעסאלאניקער בריוו 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ב Tesaloniker briv 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ב. טעסאלאניקער בריוו 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ב. Tesaloniker briv 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ydd)", () => {
		expect(p.parse("a Timotiyos briv 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("a טימאטעוס בריוו 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("a. Timotiyos briv 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("a. טימאטעוס בריוו 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("א Timotiyos briv 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("א טימאטעוס בריוו 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("א. Timotiyos briv 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("א. טימאטעוס בריוו 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ydd)", () => {
		expect(p.parse("b Timotiyos briv 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("b טימאטעוס בריוו 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("b. Timotiyos briv 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("b. טימאטעוס בריוו 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ב Timotiyos briv 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ב טימאטעוס בריוו 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ב. Timotiyos briv 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ב. טימאטעוס בריוו 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ydd)", () => {
		expect(p.parse("טיטוס בריוו 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus briv 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ydd)", () => {
		expect(p.parse("פילעמאן בריוו 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon briv 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ydd)", () => {
		expect(p.parse("briv tsu di Yidn 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("בריוו צו די יידן 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ydd)", () => {
		expect(p.parse("Yaakovs briv 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("יעקבס בריוו 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ydd)", () => {
		expect(p.parse("a פעטרוס בריוו 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("a Petros briv 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("a. פעטרוס בריוו 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("a. Petros briv 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("א פעטרוס בריוו 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("א Petros briv 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("א. פעטרוס בריוו 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("א. Petros briv 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ydd)", () => {
		expect(p.parse("b פעטרוס בריוו 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("b Petros briv 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("b. פעטרוס בריוו 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("b. Petros briv 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ב פעטרוס בריוו 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ב Petros briv 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ב. פעטרוס בריוו 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ב. Petros briv 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ydd)", () => {
		expect(p.parse("Kefa Alef 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ydd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ydd)", () => {
		expect(p.parse("Yehudes briv 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("יהודהס בריוו 1:1").osis()).toEqual("Jude.1.1");
	});
});
