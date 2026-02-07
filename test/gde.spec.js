"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gde.js";

describe("Localized book Rev (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gde)", () => {
		expect(p.parse("Səniinə 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gde)", () => {
		expect(p.parse("Ruuta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Matt (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gde)", () => {
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gde)", () => {
		expect(p.parse("Marəkusə 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gde)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gde)", () => {
		expect(p.parse("1 Yoohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yooh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yooh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gde)", () => {
		expect(p.parse("2 Yoohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yooh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yooh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gde)", () => {
		expect(p.parse("3 Yoohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yooh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yooh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gde)", () => {
		expect(p.parse("Yoohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yooh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gde)", () => {
		expect(p.parse("Slənə 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gde)", () => {
		expect(p.parse("Rooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gde)", () => {
		expect(p.parse("1 Koorintiya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koorintiya 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gde)", () => {
		expect(p.parse("2 Koorintiya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koorintiya 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gde)", () => {
		expect(p.parse("Kwalasiya 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kwal. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gde)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gde)", () => {
		expect(p.parse("Afisa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Af. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gde)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gde)", () => {
		expect(p.parse("1 Teesaloonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tees. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teesaloonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tees. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gde)", () => {
		expect(p.parse("2 Teesaloonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tees. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teesaloonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tees. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gde)", () => {
		expect(p.parse("1 Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gde)", () => {
		expect(p.parse("2 Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gde)", () => {
		expect(p.parse("Titusə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gde)", () => {
		expect(p.parse("Filimanə 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gde)", () => {
		expect(p.parse("Ibəraaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibər. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gde)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gde)", () => {
		expect(p.parse("1 Piita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gde)", () => {
		expect(p.parse("2 Piita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gde)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahu. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gde)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohana - 3 Yoohana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohana – 3 Yoohana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohana — 3 Yoohana").osis()).toEqual("1John.1-3John.1");
	});
});
