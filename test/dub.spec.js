"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dub.js";

describe("Localized book Rev (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dub)", () => {
		expect(p.parse("પ્રકટીકરણ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રક. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dub)", () => {
		expect(p.parse("માથ્થી 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("માથ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dub)", () => {
		expect(p.parse("માર્ક. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("માર્ક 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dub)", () => {
		expect(p.parse("લુક.ની સુવાર્તા 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લુક. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dub)", () => {
		expect(p.parse("1 યોહાન પત્રો 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહાન પત્રો 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dub)", () => {
		expect(p.parse("2 યોહાન પત્રો 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહાન પત્રો 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dub)", () => {
		expect(p.parse("3 યોહાન પત્રો 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહાન પત્રો 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. યોહ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dub)", () => {
		expect(p.parse("યોહાન 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dub)", () => {
		expect(p.parse("પ્રેરિત કેલે કામે 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રેરિત 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dub)", () => {
		expect(p.parse("રોમન પત્રો 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dub)", () => {
		expect(p.parse("1 કુરિંથીઓ પત્રો 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કુરિ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કુરિંથીઓ પત્રો 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કુરિ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dub)", () => {
		expect(p.parse("2 કુરિંથીઓ પત્રો 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કુરિ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કુરિંથીઓ પત્રો 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કુરિ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dub)", () => {
		expect(p.parse("કલોસ્સીઓ પત્રો 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલો. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dub)", () => {
		expect(p.parse("ગલાતિઓ પત્રો 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલા. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dub)", () => {
		expect(p.parse("એફેસીઓ પત્રો 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફે. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dub)", () => {
		expect(p.parse("ફિલિપ્પીઓ પત્રો 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફીલી. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dub)", () => {
		expect(p.parse("1 થેસ્સલોનિકીઓ પત્રો 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સલોનિકીઓ પત્રો 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dub)", () => {
		expect(p.parse("2 થેસ્સલોનિકા પત્રો 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સલોનિકા પત્રો 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dub)", () => {
		expect(p.parse("1 તિમોથી પત્રો 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમોથી પત્રો 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dub)", () => {
		expect(p.parse("2 તિમોથી પત્રો 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમોથી પત્રો 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dub)", () => {
		expect(p.parse("તિતસ પત્રો 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("તિતુ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dub)", () => {
		expect(p.parse("ફિલેમોનુલે પત્રો 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલેમોનુ પત્રો 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dub)", () => {
		expect(p.parse("હિબ્રૂઓને પત્રો 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ્ર. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dub)", () => {
		expect(p.parse("યાકુબુ પત્રો 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકુ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dub)", () => {
		expect(p.parse("1 પિત્તરુ પત્રો 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિત્તરુ પત્રો 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dub)", () => {
		expect(p.parse("1પિત. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dub)", () => {
		expect(p.parse("2 પિત્તર પત્રો 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિત્તર પત્રો 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિત. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dub)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dub)", () => {
		expect(p.parse("યહુદાનો પત્રો 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહુ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
