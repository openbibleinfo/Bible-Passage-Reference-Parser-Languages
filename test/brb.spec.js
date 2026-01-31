"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/brb.js";

describe("Localized book Gen (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (brb)", () => {
		expect(p.parse("បាត់ អន់នួរៗ ពន់ឋើម 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("បអ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Ruth (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (brb)", () => {
		expect(p.parse("រូត 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("រត 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Ps (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (brb)", () => {
		expect(p.parse("ព្រតឹះ ព្រនែ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ពព 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jonah (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (brb)", () => {
		expect(p.parse("យ៉ូណះ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("យណ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (brb)", () => {
		expect(p.parse("ម៉ាថាយ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("មថ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (brb)", () => {
		expect(p.parse("ម៉ាកុះ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("មក 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (brb)", () => {
		expect(p.parse("លូកា 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("លក 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (brb)", () => {
		expect(p.parse("កាន ពហាយ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("កព 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (brb)", () => {
		expect(p.parse("រ៉ូម 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (brb)", () => {
		expect(p.parse("១ កូរិនថុះ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. កូរិនថុះ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (brb)", () => {
		expect(p.parse("២ កូរិនថុះ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. កូរិនថុះ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (brb)", () => {
		expect(p.parse("១ករ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (brb)", () => {
		expect(p.parse("២ករ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (brb)", () => {
		expect(p.parse("កូឡុះ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូឡ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Eph (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (brb)", () => {
		expect(p.parse("អ៊ែភែសូ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អភ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (brb)", () => {
		expect(p.parse("ភីលីប 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ភីល 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (brb)", () => {
		expect(p.parse("១ ធែសាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១ ធស 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ធែសាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ធស 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (brb)", () => {
		expect(p.parse("២ ធែសាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២ ធស 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ធែសាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ធស 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (brb)", () => {
		expect(p.parse("១ ធីម៉ូធែ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១ ធម 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. ធីម៉ូធែ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. ធម 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (brb)", () => {
		expect(p.parse("២ ធីម៉ូធែ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២ ធម 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. ធីម៉ូធែ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. ធម 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (brb)", () => {
		expect(p.parse("ទីតុះ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ទត 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (brb)", () => {
		expect(p.parse("ភីលែម៉ូន 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ភល 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Jas (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (brb)", () => {
		expect(p.parse("យ៉ាគ់ យ៉ាកុប 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យក 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (brb)", () => {
		expect(p.parse("១ ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១. ពត្រ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (brb)", () => {
		expect(p.parse("២ ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២. ពត្រ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (brb)", () => {
		expect(p.parse("តើម ប៊ឹង យ៉ាគ់ ពែត្រុះ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (brb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (brb)", () => {
		expect(p.parse("២ពែត្រុះ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
