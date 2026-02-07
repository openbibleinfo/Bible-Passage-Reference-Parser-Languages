"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hye.js";

describe("Localized book Gen (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hye)", () => {
		expect(p.parse("Ծննդոց 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ծնունդ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ծնն. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hye)", () => {
		expect(p.parse("Ելք 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hye)", () => {
		expect(p.parse("Ղեվտական 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ղևտ. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hye)", () => {
		expect(p.parse("Թվեր 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Թվ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (hye)", () => {
		expect(p.parse("Իմաստություն Սիրաքի 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Սրք. 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (hye)", () => {
		expect(p.parse("Իմաստություն Սողոմոնի 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Իմս. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hye)", () => {
		expect(p.parse("Երեմիայի Ողբերը 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ողբ Երեմիայի 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ողբ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hye)", () => {
		expect(p.parse("Հայտնություն 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Հտն. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hye)", () => {
		expect(p.parse("Բ Օրենք 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Բ Օր. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hye)", () => {
		expect(p.parse("Հեսու 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Հես. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hye)", () => {
		expect(p.parse("Դատավորներ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Դատ. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hye)", () => {
		expect(p.parse("Հռութ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Հռթ. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hye)", () => {
		expect(p.parse("Եսայի 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ես. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hye)", () => {
		expect(p.parse("Գ Թագավորների 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Գ Թագ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hye)", () => {
		expect(p.parse("Դ Թագավորների 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Դ Թագ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hye)", () => {
		expect(p.parse("Ա Թագավորների 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա Թագ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա. Թագավորների 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ա. Թագ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hye)", () => {
		expect(p.parse("Բ Թագավորների 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ Թագ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ. Թագավորների 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Բ. Թագ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hye)", () => {
		expect(p.parse("Ա Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա Մն. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա. Մնացորդաց 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ա. Մն. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hye)", () => {
		expect(p.parse("Բ Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ Մն. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ. Մնացորդաց 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Բ. Մն. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hye)", () => {
		expect(p.parse("Բ Եզրաս 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Բ Եզր. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Եզրաս 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Եզր. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book 1Esd (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hye)", () => {
		expect(p.parse("Ա Եզրաս 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ա Եզր. 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ա. Եզրաս 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ա. Եզր. 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book Neh (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hye)", () => {
		expect(p.parse("Նեեմիա 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Նեմ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hye)", () => {
		expect(p.parse("Եսթեր 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Եսթ. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hye)", () => {
		expect(p.parse("Հոբ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hye)", () => {
		expect(p.parse("Սաղմոսներ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Սաղ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hye)", () => {
		expect(p.parse("Առակներ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Առկ. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hye)", () => {
		expect(p.parse("Ժողովող 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ժող. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hye)", () => {
		expect(p.parse("Երգ Երգոց 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Երգ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hye)", () => {
		expect(p.parse("Երեմիա 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Երմ. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hye)", () => {
		expect(p.parse("Եզեկիել 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Եզկ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hye)", () => {
		expect(p.parse("Դանիել 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Դան. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hye)", () => {
		expect(p.parse("Ովսեե 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ովս. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hye)", () => {
		expect(p.parse("Հովել 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Հվլ. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hye)", () => {
		expect(p.parse("Ամովս 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ամս. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hye)", () => {
		expect(p.parse("Աբդիու 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Աբդիա 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Աբդ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hye)", () => {
		expect(p.parse("Հովնան 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Հվն. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hye)", () => {
		expect(p.parse("Միքիա 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Միք. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hye)", () => {
		expect(p.parse("Նավում 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Նաում 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Նվմ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Նմ. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hye)", () => {
		expect(p.parse("Ամբակում 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ամբ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hye)", () => {
		expect(p.parse("Սոփոնիա 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Սոփ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hye)", () => {
		expect(p.parse("Անգեոս 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Անգ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Անգե 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hye)", () => {
		expect(p.parse("Զաքարիա 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Զաք. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hye)", () => {
		expect(p.parse("Մաղաքիա 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Մղք. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hye)", () => {
		expect(p.parse("Մատթեոս 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Մտթ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hye)", () => {
		expect(p.parse("Մարկոս 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Մրկ. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hye)", () => {
		expect(p.parse("Ղուկաս 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ղուկ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hye)", () => {
		expect(p.parse("Ա Հովհաննես 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա Հովհ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա. Հովհաննես 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ա. Հովհ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hye)", () => {
		expect(p.parse("Բ Հովհաննես 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ Հովհ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ. Հովհաննես 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Բ. Հովհ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hye)", () => {
		expect(p.parse("Գ Հովհաննես 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Գ Հովհ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Գ. Հովհաննես 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Գ. Հովհ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hye)", () => {
		expect(p.parse("Հովհաննես 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Հովհ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hye)", () => {
		expect(p.parse("Գործք Առաքելոց 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Գրծ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hye)", () => {
		expect(p.parse("Հռոմեացիներին 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Հռմ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hye)", () => {
		expect(p.parse("Ա Կորնթացիներին 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա Կրնթ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա. Կորնթացիներին 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ա. Կրնթ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hye)", () => {
		expect(p.parse("Բ Կորնթացիներին 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ Կրնթ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ. Կորնթացիներին 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Բ. Կրնթ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hye)", () => {
		expect(p.parse("Կողոսացիներին 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Կղս. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hye)", () => {
		expect(p.parse("Գաղատացիներին 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Գղտ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hye)", () => {
		expect(p.parse("Եփեսացիներին 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Եփս. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hye)", () => {
		expect(p.parse("Փիլիպպեցիներին 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Փլպ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hye)", () => {
		expect(p.parse("Ա Թեսաղոնիկեցիներին 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա Թսղ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա. Թեսաղոնիկեցիներին 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ա. Թսղ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hye)", () => {
		expect(p.parse("Բ Թեսաղոնիկեցիներին 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ Թսղ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ. Թեսաղոնիկեցիներին 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Բ. Թսղ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hye)", () => {
		expect(p.parse("Ա Տիմոթեոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա Տմթ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա. Տիմոթեոսին 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ա. Տմթ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hye)", () => {
		expect(p.parse("Բ Տիմոթեոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ Տմթ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ. Տիմոթեոսին 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Բ. Տմթ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hye)", () => {
		expect(p.parse("Տիտոսին 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Տիտ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hye)", () => {
		expect(p.parse("Փիլիմոնին 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Փլմ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hye)", () => {
		expect(p.parse("Եբրայեցիներին 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Եբր. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hye)", () => {
		expect(p.parse("Հակոբոս 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Հկբ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hye)", () => {
		expect(p.parse("Ա Պետրոս 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա Պտ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա. Պետրոս 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ա. Պտ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hye)", () => {
		expect(p.parse("Բ Պետրոս 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ Պտ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ. Պետրոս 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Բ. Պտ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hye)", () => {
		expect(p.parse("Հուդ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Հուդա 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (hye)", () => {
		expect(p.parse("Տովբիթ 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Տոբ. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (hye)", () => {
		expect(p.parse("Հուդիթ 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Հդթ. 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (hye)", () => {
		expect(p.parse("Բարուք 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Բրք. 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (hye)", () => {
		expect(p.parse("Ա Մակաբայեցիներ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ա Մկբ. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ա. Մակաբայեցիներ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ա. Մկբ. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (hye)", () => {
		expect(p.parse("Բ Մակաբայեցիներ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Բ Մկբ. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Բ. Մակաբայեցիներ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Բ. Մկբ. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (hye)", () => {
		expect(p.parse("Գ Մակաբայեցիներ 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Գ Մկբ. 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Գ. Մակաբայեցիներ 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Գ. Մկբ. 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Parser helper should handle book ranges (hye)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hye)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Ա Հովհաննես - Գ Հովհաննես").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Ա Հովհաննես – Գ Հովհաննես").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Ա Հովհաննես — Գ Հովհաննես").osis()).toEqual("1John.1-3John.1");
	});
});
