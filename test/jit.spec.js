"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jit.js";

describe("Localized book Rev (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jit)", () => {
		expect(p.parse("Okuswerurirwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Obhusweruro 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jit)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jit)", () => {
		expect(p.parse("Maariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jit)", () => {
		expect(p.parse("Ruuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jit)", () => {
		expect(p.parse("1 Yowana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yo. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yo. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jit)", () => {
		expect(p.parse("2 Yowana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yo. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yo. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jit)", () => {
		expect(p.parse("3 Yowana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yo. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yo. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jit)", () => {
		expect(p.parse("Yowana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yo. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jit)", () => {
		expect(p.parse("Ebhikorwa bhya Jitumwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebikorwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jit)", () => {
		expect(p.parse("Abharuumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Barumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jit)", () => {
		expect(p.parse("1 Abhakoriito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abhakoriito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jit)", () => {
		expect(p.parse("2 Abhakoriito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abhakoriito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jit)", () => {
		expect(p.parse("Abhakorosaayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bakol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jit)", () => {
		expect(p.parse("Abhagaraatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("BaGalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bagal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jit)", () => {
		expect(p.parse("Abhayefeeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("BaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Baef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jit)", () => {
		expect(p.parse("Abhafiriipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("BaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bafil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jit)", () => {
		expect(p.parse("1 Abhatesaroonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Batesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bates. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abhatesaroonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Batesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bates. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jit)", () => {
		expect(p.parse("2 Abhatesaroonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Batesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bates. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abhatesaroonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Batesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bates. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jit)", () => {
		expect(p.parse("1 Timoteewo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteewo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jit)", () => {
		expect(p.parse("2 Timoteewo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteewo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jit)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jit)", () => {
		expect(p.parse("Firemooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jit)", () => {
		expect(p.parse("Abhayebhuraniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Baeburania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Baeb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jit)", () => {
		expect(p.parse("Yakobho 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakob. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jit)", () => {
		expect(p.parse("1 Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jit)", () => {
		expect(p.parse("2 Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (jit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jit)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
