"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kxp.js";

describe("Localized book Rev (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kxp)", () => {
		expect(p.parse("પ્રકટીકરણ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રકટી. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kxp)", () => {
		expect(p.parse("માથ્થી 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kxp)", () => {
		expect(p.parse("માર્ક 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kxp)", () => {
		expect(p.parse("લૂક 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kxp)", () => {
		expect(p.parse("1 યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kxp)", () => {
		expect(p.parse("2 યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kxp)", () => {
		expect(p.parse("3 યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kxp)", () => {
		expect(p.parse("યોહાન 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kxp)", () => {
		expect(p.parse("પ્રેરિતોનાં કૃત્યો 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રે.કૃ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kxp)", () => {
		expect(p.parse("રોમનોને પત્ર 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kxp)", () => {
		expect(p.parse("1 કરિંથીઓને પત્ર 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કરિં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિંથીઓને પત્ર 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિં. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kxp)", () => {
		expect(p.parse("2 કરિંથીઓને પત્ર 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કરિં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિંથીઓને પત્ર 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિં. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kxp)", () => {
		expect(p.parse("કલોસ્સીઓને પત્ર 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલો. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kxp)", () => {
		expect(p.parse("ગલાતીઓને પત્ર 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલા. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kxp)", () => {
		expect(p.parse("એફેસીઓને પત્ર 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફે. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kxp)", () => {
		expect(p.parse("ફિલિપ્પીઓને પત્ર 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલિ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kxp)", () => {
		expect(p.parse("1 થેસ્સાલોનિકીઓને પત્ર 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસ્સ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સાલોનિકીઓને પત્ર 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kxp)", () => {
		expect(p.parse("2 થેસ્સાલોનિકીઓને પત્ર 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસ્સ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સાલોનિકીઓને પત્ર 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kxp)", () => {
		expect(p.parse("1 તિમોથીને પત્ર 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમો. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમોથીને પત્ર 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમો. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kxp)", () => {
		expect(p.parse("2 તિમોથીને પત્ર 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમો. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમોથીને પત્ર 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમો. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kxp)", () => {
		expect(p.parse("તિતસને પત્ર 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kxp)", () => {
		expect(p.parse("ફીલેમોન ને પત્ર 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફીલે. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kxp)", () => {
		expect(p.parse("હિબ્રૂઓને પત્ર 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ્રૂ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kxp)", () => {
		expect(p.parse("યાકૂબનો પત્ર 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકૂ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kxp)", () => {
		expect(p.parse("1 પિતરનો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિતરનો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિત. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kxp)", () => {
		expect(p.parse("2 પિતરનો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિતરનો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિત. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kxp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kxp)", () => {
		expect(p.parse("યહૂદાનો પત્ર 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહૂ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
