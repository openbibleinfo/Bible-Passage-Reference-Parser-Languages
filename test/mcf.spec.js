"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mcf.js";

describe("Localized book Rev (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mcf)", () => {
		expect(p.parse("Esusën Uan ismiaid 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("E.U.I. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mcf)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mcf)", () => {
		expect(p.parse("Madcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Madc. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mcf)", () => {
		expect(p.parse("Ducas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Duc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mcf)", () => {
		expect(p.parse("Uan 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Uan1. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mcf)", () => {
		expect(p.parse("Uan 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Uan2. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mcf)", () => {
		expect(p.parse("Uan 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Uan3. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mcf)", () => {
		expect(p.parse("Uan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mcf)", () => {
		expect(p.parse("E.Ch.N. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hechos 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mcf)", () => {
		expect(p.parse("Dom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Doma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mcf)", () => {
		expect(p.parse("Codinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Cod.1. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mcf)", () => {
		expect(p.parse("Codinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Cod.2. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mcf)", () => {
		expect(p.parse("Codosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Codos. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mcf)", () => {
		expect(p.parse("Cadasia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Cad. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mcf)", () => {
		expect(p.parse("Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mcf)", () => {
		expect(p.parse("Pidipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pid. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mcf)", () => {
		expect(p.parse("Tesadonica 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tes.1. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mcf)", () => {
		expect(p.parse("Tesadonica 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes.2. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mcf)", () => {
		expect(p.parse("Timoteo 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tim.1. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mcf)", () => {
		expect(p.parse("Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tim.2. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mcf)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mcf)", () => {
		expect(p.parse("Pidemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pidem. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mcf)", () => {
		expect(p.parse("Ebedeo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebed. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mcf)", () => {
		expect(p.parse("Santiaco 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("San. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mcf)", () => {
		expect(p.parse("Petedo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pet.1. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mcf)", () => {
		expect(p.parse("Petedo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pet.2. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mcf)", () => {
		expect(p.parse("Udas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mcf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mcf)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Uan 1 - Uan 3").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Uan 1 – Uan 3").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Uan 1 — Uan 3").osis()).toEqual("1John.1-3John.1");
	});
});
