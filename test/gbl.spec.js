"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gbl.js";

describe("Localized book Rev (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gbl)", () => {
		expect(p.parse("પ્રકટીકરણ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રક. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gbl)", () => {
		expect(p.parse("માથ્થી 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gbl)", () => {
		expect(p.parse("માર્ક 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gbl)", () => {
		expect(p.parse("લુક. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લુક 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gbl)", () => {
		expect(p.parse("1 યોહા. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહા. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહાન 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gbl)", () => {
		expect(p.parse("2 યોહા. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહા. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહાન 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gbl)", () => {
		expect(p.parse("3 યોહા. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહા. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહાન 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gbl)", () => {
		expect(p.parse("યોહા. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહાન 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gbl)", () => {
		expect(p.parse("પ્રેષિતોનાં ક્રત્યો 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રેષિ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gbl)", () => {
		expect(p.parse("રોમનોને પત્ર 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમિ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gbl)", () => {
		expect(p.parse("1 કરિંથીઓને 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કરિં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિંથીઓને 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિં. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gbl)", () => {
		expect(p.parse("2 કરિંથીઓને 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કરિં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિંથીઓને 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિં. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gbl)", () => {
		expect(p.parse("કલોસ્સીઓને પત્ર 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલો. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gbl)", () => {
		expect(p.parse("ગલાતીઓને પત્ર 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલા. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gbl)", () => {
		expect(p.parse("એફેસીઓને પત્ર 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફે. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gbl)", () => {
		expect(p.parse("ફિલિપ્પીઓને પત્ર 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલિ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gbl)", () => {
		expect(p.parse("1 થેસ્સલોનિકીઓને 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસ્સ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સલોનિકીઓને 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gbl)", () => {
		expect(p.parse("2 થેસ્સલોનિકીઓને 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસ્સ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સલોનિકીઓને 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gbl)", () => {
		expect(p.parse("1 તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમો. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમો. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gbl)", () => {
		expect(p.parse("2 તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમો. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમો. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gbl)", () => {
		expect(p.parse("તિતસનં પત્ર 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("તિતસ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gbl)", () => {
		expect(p.parse("ફિલેમોને પત્ર 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલે. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gbl)", () => {
		expect(p.parse("હિબ્રૂઓને પત્ર 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ્રૂ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gbl)", () => {
		expect(p.parse("યાકૂબનો 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકૂ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gbl)", () => {
		expect(p.parse("1 પિતરનો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિતરનો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિત. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gbl)", () => {
		expect(p.parse("2 પિતરનો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિતરનો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિત. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gbl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gbl)", () => {
		expect(p.parse("યહૂદાનો પત્ર 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહૂદા. 1:1").osis()).toEqual("Jude.1.1");
	});
});
