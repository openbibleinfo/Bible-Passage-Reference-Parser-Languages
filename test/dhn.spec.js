"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dhn.js";

describe("Localized book Rev (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dhn)", () => {
		expect(p.parse("प्रकाशितवाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રકટીકરણ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રક. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dhn)", () => {
		expect(p.parse("માથ્થી 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("માથ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dhn)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("માર્ક 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dhn)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લુક. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લુક 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dhn)", () => {
		expect(p.parse("1 यहुन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यहुन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dhn)", () => {
		expect(p.parse("2 यहुन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यहुन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dhn)", () => {
		expect(p.parse("3 यहुन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यहुन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dhn)", () => {
		expect(p.parse("यहुन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહાન 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dhn)", () => {
		expect(p.parse("પ્રેરિતસા કરેલ કામ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितन 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રે.કૃ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dhn)", () => {
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dhn)", () => {
		expect(p.parse("1 कुरन्थियो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કોરિંથી 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કોરિં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरन्थियो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કોરિંથી 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કોરિં. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dhn)", () => {
		expect(p.parse("2 कुरन्थियो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કોરિંથી 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કોરિં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरन्थियो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કોરિંથી 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કોરિં. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dhn)", () => {
		expect(p.parse("कुलुस्सियो 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલોસી 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલો. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dhn)", () => {
		expect(p.parse("गलातिया 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલાતી 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dhn)", () => {
		expect(p.parse("इफिसियो 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફેસી 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફે. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dhn)", () => {
		expect(p.parse("फिलिप्पियो 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલિપી 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલિ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dhn)", () => {
		expect(p.parse("1 थिस्सलुनीकियो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસલોનિકી 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસલોનિકી 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dhn)", () => {
		expect(p.parse("2 थिस्सलुनीकियो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસલોનિકી 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસલોનિકી 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dhn)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dhn)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dhn)", () => {
		expect(p.parse("तितुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("તિત. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("તિતસ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dhn)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલેમોન 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલે. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dhn)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ્રૂ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dhn)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકુબ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકૂ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dhn)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 પિતર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિતર 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dhn)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પિતર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિતર 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dhn)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહૂદા 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહૂ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (dhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dhn)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 यहुन्ना - 3 यहुन्ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 यहुन्ना – 3 यहुन्ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 यहुन्ना — 3 यहुन्ना").osis()).toEqual("1John.1-3John.1");
	});
});
