"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nwb.js";

describe("Localized book Rev (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nwb)", () => {
		expect(p.parse("ꞌꞌDukuyrilizadɩ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nwb)", () => {
		expect(p.parse("Matiee 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nwb)", () => {
		expect(p.parse("Maakɩ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nwb)", () => {
		expect(p.parse("Luukɩ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nwb)", () => {
		expect(p.parse("1 ꞌZaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ꞌZaan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nwb)", () => {
		expect(p.parse("2 ꞌZaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ꞌZaan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nwb)", () => {
		expect(p.parse("3 ꞌZaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ꞌZaan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nwb)", () => {
		expect(p.parse("ꞌZaan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nwb)", () => {
		expect(p.parse("Nʋnʋkpli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kpli 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nwb)", () => {
		expect(p.parse("ꞌWlɔmʋkɔmʋ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nwb)", () => {
		expect(p.parse("1 Kɔlɛɛtɩkɔmʋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlɛɛtɩkɔmʋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nwb)", () => {
		expect(p.parse("2 Kɔlɛɛtɩkɔmʋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlɛɛtɩkɔmʋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nwb)", () => {
		expect(p.parse("Kolɔsʋkɔmʋ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nwb)", () => {
		expect(p.parse("Galasiikɔmʋ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nwb)", () => {
		expect(p.parse("Efɛɛzɩkɔmʋ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nwb)", () => {
		expect(p.parse("Filiipʋkɔmʋ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nwb)", () => {
		expect(p.parse("1 Tesalonikɩkɔmʋ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikɩkɔmʋ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nwb)", () => {
		expect(p.parse("2 Tesalonikɩkɔmʋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikɩkɔmʋ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nwb)", () => {
		expect(p.parse("1 Timotee 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotee 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nwb)", () => {
		expect(p.parse("2 Timotee 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotee 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nwb)", () => {
		expect(p.parse("Tiitɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nwb)", () => {
		expect(p.parse("Filemɔɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nwb)", () => {
		expect(p.parse("Eblee 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nwb)", () => {
		expect(p.parse("Zaakɩ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nwb)", () => {
		expect(p.parse("1 ꞌPiɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ꞌPiɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nwb)", () => {
		expect(p.parse("2 ꞌPiɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ꞌPiɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nwb)", () => {
		expect(p.parse("Ziidɩ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nwb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nwb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ꞌZaan - 3 ꞌZaan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ꞌZaan – 3 ꞌZaan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ꞌZaan — 3 ꞌZaan").osis()).toEqual("1John.1-3John.1");
	});
});
