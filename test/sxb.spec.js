"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sxb.js";

describe("Localized book Rev (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sxb)", () => {
		expect(p.parse("Owusasuko 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Owus 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sxb)", () => {
		expect(p.parse("Mathaayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sxb)", () => {
		expect(p.parse("Mariiko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mari 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sxb)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sxb)", () => {
		expect(p.parse("1Yow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sxb)", () => {
		expect(p.parse("2Yow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sxb)", () => {
		expect(p.parse("3 Yowaana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sxb)", () => {
		expect(p.parse("1 Yowaana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowaana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sxb)", () => {
		expect(p.parse("2 Yowaana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowaana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sxb)", () => {
		expect(p.parse("Yowaana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sxb)", () => {
		expect(p.parse("Awatumwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Awat 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sxb)", () => {
		expect(p.parse("Awaruumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Awaru 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sxb)", () => {
		expect(p.parse("1 Awakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Awakorintho 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sxb)", () => {
		expect(p.parse("2 Awakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Awakorintho 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sxb)", () => {
		expect(p.parse("1Kori 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sxb)", () => {
		expect(p.parse("2Kori 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sxb)", () => {
		expect(p.parse("Awacolosaai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sxb)", () => {
		expect(p.parse("Awagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sxb)", () => {
		expect(p.parse("Awaefeeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efee 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sxb)", () => {
		expect(p.parse("Awafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filiip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sxb)", () => {
		expect(p.parse("1 Awathesaloniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Awathesaloniika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sxb)", () => {
		expect(p.parse("1Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sxb)", () => {
		expect(p.parse("2 Awathesoloniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Awathesoloniika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sxb)", () => {
		expect(p.parse("2Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sxb)", () => {
		expect(p.parse("1 Awatimtheeo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Awatimtheeo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sxb)", () => {
		expect(p.parse("1Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sxb)", () => {
		expect(p.parse("2 Awatimotheeo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Awatimotheeo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sxb)", () => {
		expect(p.parse("2Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sxb)", () => {
		expect(p.parse("Awatiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sxb)", () => {
		expect(p.parse("Awafilemooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sxb)", () => {
		expect(p.parse("Awaibrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Awaib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sxb)", () => {
		expect(p.parse("Awayakoobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sxb)", () => {
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sxb)", () => {
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sxb)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sxb)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sxb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sxb)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
