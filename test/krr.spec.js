"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/krr.js";

describe("Localized book Gen (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (krr)", () => {
		expect(p.parse("កណើត ពដិះ គ្រែ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ពគ្រ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (krr)", () => {
		expect(p.parse("កាន ប៉ើក ពដៃ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("បព. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (krr)", () => {
		expect(p.parse("ណាង រូត 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("រូត 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (krr)", () => {
		expect(p.parse("ណាង អ៊ែសថើរ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("អថ. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Matt (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (krr)", () => {
		expect(p.parse("ម៉ាថាយ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("មថ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (krr)", () => {
		expect(p.parse("ម៉ាកុះ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("មក. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (krr)", () => {
		expect(p.parse("លូកា 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("លក. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krr)", () => {
		expect(p.parse("១យហ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krr)", () => {
		expect(p.parse("២យហ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (krr)", () => {
		expect(p.parse("៣ យ៉ូហាន 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣យហ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krr)", () => {
		expect(p.parse("១ យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១. យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krr)", () => {
		expect(p.parse("២ យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២. យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (krr)", () => {
		expect(p.parse("យ៉ូហាន 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យហ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (krr)", () => {
		expect(p.parse("ហណាយ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ហណ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (krr)", () => {
		expect(p.parse("រ៉ូម 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krr)", () => {
		expect(p.parse("១ កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krr)", () => {
		expect(p.parse("២ កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krr)", () => {
		expect(p.parse("១ករ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krr)", () => {
		expect(p.parse("២ករ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (krr)", () => {
		expect(p.parse("កូឡូស 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កូឡ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (krr)", () => {
		expect(p.parse("ឝ៉ាឡាទី 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ឝ៉ាឡ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (krr)", () => {
		expect(p.parse("អ៊ែភីសូ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អភ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (krr)", () => {
		expect(p.parse("ភីលីប 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ភីល. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krr)", () => {
		expect(p.parse("១ ធែសាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ធែសាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krr)", () => {
		expect(p.parse("២ ធែសាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ធែសាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krr)", () => {
		expect(p.parse("១ធស. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krr)", () => {
		expect(p.parse("២ធស. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krr)", () => {
		expect(p.parse("១ ធីម៉ូធែ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. ធីម៉ូធែ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krr)", () => {
		expect(p.parse("២ ធីម៉ូធែ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. ធីម៉ូធែ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krr)", () => {
		expect(p.parse("១ធម. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krr)", () => {
		expect(p.parse("២ធម. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (krr)", () => {
		expect(p.parse("ទីតុះ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ទត. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (krr)", () => {
		expect(p.parse("ភីលីម៉ូន 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ភីម. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (krr)", () => {
		expect(p.parse("ហ៊ែប្រ៊ឺ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហប. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (krr)", () => {
		expect(p.parse("យ៉ាកុប 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យក. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krr)", () => {
		expect(p.parse("១ ពីត្រុះ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១. ពីត្រុះ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krr)", () => {
		expect(p.parse("២ ពីត្រុះ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២. ពីត្រុះ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krr)", () => {
		expect(p.parse("១ពត្រ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krr)", () => {
		expect(p.parse("២ពត្រ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (krr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (krr)", () => {
		expect(p.parse("យូដាស 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("យដ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
