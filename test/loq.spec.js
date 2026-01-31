"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/loq.js";

describe("Localized book Rev (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (loq)", () => {
		expect(p.parse("Iwɛninyama 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Iwɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (loq)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (loq)", () => {
		expect(p.parse("Malako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (loq)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (loq)", () => {
		expect(p.parse("1Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (loq)", () => {
		expect(p.parse("2Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (loq)", () => {
		expect(p.parse("3 Yoane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (loq)", () => {
		expect(p.parse("1 Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (loq)", () => {
		expect(p.parse("2 Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (loq)", () => {
		expect(p.parse("Yoane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (loq)", () => {
		expect(p.parse("Bitoma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bit 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (loq)", () => {
		expect(p.parse("Ɓaloma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɓal 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (loq)", () => {
		expect(p.parse("1 Ɓakoliti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓakoliti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (loq)", () => {
		expect(p.parse("2 Ɓakoliti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓakoliti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (loq)", () => {
		expect(p.parse("1Ɓk 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (loq)", () => {
		expect(p.parse("2Ɓk 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (loq)", () => {
		expect(p.parse("Ɓakolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ɓak 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (loq)", () => {
		expect(p.parse("Ɓagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ɓag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (loq)", () => {
		expect(p.parse("Ɓaefese 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɓef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (loq)", () => {
		expect(p.parse("Ɓafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ɓaf 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (loq)", () => {
		expect(p.parse("1 Ɓatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ɓatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (loq)", () => {
		expect(p.parse("2 Ɓatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ɓatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (loq)", () => {
		expect(p.parse("1Ɓt 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (loq)", () => {
		expect(p.parse("2Ɓt 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (loq)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (loq)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (loq)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (loq)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (loq)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (loq)", () => {
		expect(p.parse("Filemɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (loq)", () => {
		expect(p.parse("Ɓaebele 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɓeb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (loq)", () => {
		expect(p.parse("Zake 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (loq)", () => {
		expect(p.parse("1 Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (loq)", () => {
		expect(p.parse("2 Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (loq)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (loq)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (loq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (loq)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
