"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gas.js";

describe("Localized book Rev (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gas)", () => {
		expect(p.parse("પ્રકટીકરણ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રકા. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gas)", () => {
		expect(p.parse("મત્તિ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gas)", () => {
		expect(p.parse("માર્ક 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("મર. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gas)", () => {
		expect(p.parse("લુક. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લુક 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gas)", () => {
		expect(p.parse("1 યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યૂહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યૂહ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gas)", () => {
		expect(p.parse("2 યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યૂહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યૂહ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gas)", () => {
		expect(p.parse("3 યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યૂહ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યૂહ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gas)", () => {
		expect(p.parse("યોહાન 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યૂહ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gas)", () => {
		expect(p.parse("પ્રેરિતોનાં ક્રત્યો 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રેરિ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gas)", () => {
		expect(p.parse("રોમનોનેં પત્ર 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gas)", () => {
		expect(p.parse("1 કરિંથીઓને 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કુરિ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિંથીઓને 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કુરિ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gas)", () => {
		expect(p.parse("2 કરિંથીઓને 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કુરિ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિંથીઓને 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કુરિ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gas)", () => {
		expect(p.parse("કલોસ્સીઓને પત્ર 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કુલુસી. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gas)", () => {
		expect(p.parse("ગલાતીઓનેં પત્ર 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલાતિ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gas)", () => {
		expect(p.parse("એફેસીઓને પત્ર 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ઇફી. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gas)", () => {
		expect(p.parse("ફિલિપ્પીઓનેં પત્ર 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલી. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gas)", () => {
		expect(p.parse("1 થેસ્સલોનિકીઓનેં 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થિસ્લુ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સલોનિકીઓનેં 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થિસ્લુ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gas)", () => {
		expect(p.parse("2 થેસ્સલોનિકીઓનેં 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થિસ્લુ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સલોનિકીઓનેં 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થિસ્લુ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gas)", () => {
		expect(p.parse("1 તિમોથીને 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમુ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમોથીને 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમુ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gas)", () => {
		expect(p.parse("2 તિમોથીને 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમુ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમોથીને 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમુ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gas)", () => {
		expect(p.parse("તિતસનં પત્ર 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gas)", () => {
		expect(p.parse("ફિલેમોનનેં પત્ર 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલે. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gas)", () => {
		expect(p.parse("હિબ્રૂઓનેં પત્ર 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ઈબ્રાનિ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gas)", () => {
		expect(p.parse("યાકૂબ નો 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકુ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gas)", () => {
		expect(p.parse("1 પિતરનો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 પત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિતરનો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પત. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gas)", () => {
		expect(p.parse("2 પિતરનો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિતરનો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પત. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gas)", () => {
		expect(p.parse("યહૂદાનો પત્ર 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહૂદા 1:1").osis()).toEqual("Jude.1.1");
	});
});
