"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/blt.js";

describe("Localized book Exod (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (blt)", () => {
		expect(p.parse("ꞌPai sia ꞌmướng 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (blt)", () => {
		expect(p.parse("Nả ꞌviạk ꞌchí ꞌchọ pên ók 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (blt)", () => {
		expect(p.parse("ꞌLụt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Matt (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (blt)", () => {
		expect(p.parse("ꞌMặt‑ꞌthai 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (blt)", () => {
		expect(p.parse("ꞌMa‑ꞌla‑cô 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (blt)", () => {
		expect(p.parse("ꞌLu‑ca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (blt)", () => {
		expect(p.parse("1 Dô‑ꞌhăn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Dô‑ꞌhăn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (blt)", () => {
		expect(p.parse("2 Dô‑ꞌhăn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Dô‑ꞌhăn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (blt)", () => {
		expect(p.parse("3 Dô‑ꞌhăn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Dô‑ꞌhăn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (blt)", () => {
		expect(p.parse("Dô‑ꞌhăn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (blt)", () => {
		expect(p.parse("Nả ꞌviạk ꞌpứng ꞌlam ꞌchạư 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (blt)", () => {
		expect(p.parse("Lôm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (blt)", () => {
		expect(p.parse("1 Cô‑ꞌlin‑ꞌthô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cô‑ꞌlin‑ꞌthô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (blt)", () => {
		expect(p.parse("2 Cô‑ꞌlin‑ꞌthô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cô‑ꞌlin‑ꞌthô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (blt)", () => {
		expect(p.parse("Cô‑ꞌlô‑ꞌsai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (blt)", () => {
		expect(p.parse("ꞌKha‑ꞌla‑tia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (blt)", () => {
		expect(p.parse("Ê‑ꞌphê‑ꞌsô 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (blt)", () => {
		expect(p.parse("ꞌPhi‑ꞌlịp‑poi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (blt)", () => {
		expect(p.parse("1 ꞌThê‑ꞌsa‑ꞌlôn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ꞌThê‑ꞌsa‑ꞌlôn 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (blt)", () => {
		expect(p.parse("2 ꞌThê‑ꞌsa‑ꞌlôn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ꞌThê‑ꞌsa‑ꞌlôn 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (blt)", () => {
		expect(p.parse("1 Ti‑ꞌmô‑ꞌthiêu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti‑ꞌmô‑ꞌthiêu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (blt)", () => {
		expect(p.parse("2 Ti‑ꞌmô‑ꞌthiêu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti‑ꞌmô‑ꞌthiêu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (blt)", () => {
		expect(p.parse("Ti‑tô 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (blt)", () => {
		expect(p.parse("ꞌPhi‑ꞌlê‑ꞌmôn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (blt)", () => {
		expect(p.parse("ꞌHệp‑ꞌlơ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (blt)", () => {
		expect(p.parse("Da‑cô‑bô 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (blt)", () => {
		expect(p.parse("1 Pê‑tô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pê‑tô 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (blt)", () => {
		expect(p.parse("2 Pê‑tô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pê‑tô 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (blt)", () => {
		expect(p.parse("Du‑đe 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (blt)", () => {
		expect(p.parse("1 Cô‑ꞌlin‑ꞌthô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Dô‑ꞌhăn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Pê‑tô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ꞌThê‑ꞌsa‑ꞌlôn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ti‑ꞌmô‑ꞌthiêu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Cô‑ꞌlin‑ꞌthô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Dô‑ꞌhăn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Pê‑tô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ꞌThê‑ꞌsa‑ꞌlôn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ti‑ꞌmô‑ꞌthiêu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Dô‑ꞌhăn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Nả ꞌviạk ꞌpứng ꞌlam ꞌchạư 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Cô‑ꞌlô‑ꞌsai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ê‑ꞌphê‑ꞌsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ꞌPai sia ꞌmướng 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ꞌHệp‑ꞌlơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Da‑cô‑bô 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Dô‑ꞌhăn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ꞌMa‑ꞌla‑cô 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ꞌMặt‑ꞌthai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ꞌPhi‑ꞌlịp‑poi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ꞌPhi‑ꞌlê‑ꞌmôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Nả ꞌviạk ꞌchí ꞌchọ pên ók 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lôm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ꞌLụt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ti‑tô 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (blt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (blt)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Dô‑ꞌhăn - 3 Dô‑ꞌhăn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Dô‑ꞌhăn – 3 Dô‑ꞌhăn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Dô‑ꞌhăn — 3 Dô‑ꞌhăn").osis()).toEqual("1John.1-3John.1");
	});
});
