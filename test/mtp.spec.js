"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mtp.js";

describe("Localized book Rev (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mtp)", () => {
		expect(p.parse("'Aapokalipsis 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mtp)", () => {
		expect(p.parse("Maatewoh Yààmeh 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mtp)", () => {
		expect(p.parse("Mààlhkos Yààmeh 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mtp)", () => {
		expect(p.parse("Luukas Yààmeh 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mtp)", () => {
		expect(p.parse("Jwàành Yààmeh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mtp)", () => {
		expect(p.parse("1 Jwàành 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jwàành 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mtp)", () => {
		expect(p.parse("2 Jwàành 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jwàành 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mtp)", () => {
		expect(p.parse("3 Jwàành 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jwàành 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mtp)", () => {
		expect(p.parse("'Aapostolhlhayis- Lhenhayh 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mtp)", () => {
		expect(p.parse("Loomalheleyh 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mtp)", () => {
		expect(p.parse("1 Koolintolheleyh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koolintolheleyh 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mtp)", () => {
		expect(p.parse("2 Koolintolheleyh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koolintolheleyh 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mtp)", () => {
		expect(p.parse("Koolosaslheleyh 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mtp)", () => {
		expect(p.parse("Waalasyalheleyh 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mtp)", () => {
		expect(p.parse("'Eejwesolheleyh 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mtp)", () => {
		expect(p.parse("Jwiiliposlheleyh 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mtp)", () => {
		expect(p.parse("1 Teesalonikalheleyh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teesalonikalheleyh 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mtp)", () => {
		expect(p.parse("2 Teesalonikalheleyh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teesalonikalheleyh 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mtp)", () => {
		expect(p.parse("1 Tiimotewoh 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiimotewoh 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mtp)", () => {
		expect(p.parse("2 Tiimotewoh 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiimotewoh 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mtp)", () => {
		expect(p.parse("Tiitoh 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mtp)", () => {
		expect(p.parse("Jwiilemonh 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mtp)", () => {
		expect(p.parse("'Eewlewolhayis 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mtp)", () => {
		expect(p.parse("Jwaakowoh 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mtp)", () => {
		expect(p.parse("1 Tuuntehen' 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Tuuntehen' 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mtp)", () => {
		expect(p.parse("2 Tuuntehen' 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Tuuntehen' 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mtp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mtp)", () => {
		expect(p.parse("Jwuulas 1:1").osis()).toEqual("Jude.1.1");
	});
});
