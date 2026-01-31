"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/otq.js";

describe("Localized book Rev (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (otq)", () => {
		expect(p.parse("Ya Nthandi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (otq)", () => {
		expect(p.parse("Ar Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (otq)", () => {
		expect(p.parse("Ar Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (otq)", () => {
		expect(p.parse("Ar Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (otq)", () => {
		expect(p.parse("Ár Hñu Ar Xuwa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (otq)", () => {
		expect(p.parse("1 Ndu̱i Ar Xuwa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ndu̱i Ar Xuwa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ár Ndu̱i Ar Xuwa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ár Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ár. Ndu̱i Ar Xuwa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ár. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (otq)", () => {
		expect(p.parse("2 Ñoho Ar Xuwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ñoho Ar Xuwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ár Ñoho Ar Xuwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ár Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ár. Ñoho Ar Xuwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ár. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (otq)", () => {
		expect(p.parse("Ar Xuwa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (otq)", () => {
		expect(p.parse("Ya ꞌBE̱FI 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (otq)", () => {
		expect(p.parse("Ar Romanu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (otq)", () => {
		expect(p.parse("1 Ndu̱i Ar Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ndu̱i Ar Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ár Ndu̱i Ar Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ár Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ár. Ndu̱i Ar Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ár. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (otq)", () => {
		expect(p.parse("2 Ñoho Ar Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ñoho Ar Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ár Ñoho Ar Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ár Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ár. Ñoho Ar Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ár. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (otq)", () => {
		expect(p.parse("Ar Kolosense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (otq)", () => {
		expect(p.parse("Ar Galata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (otq)", () => {
		expect(p.parse("Ar Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (otq)", () => {
		expect(p.parse("Ar Filipense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (otq)", () => {
		expect(p.parse("1 Ndu̱i Ar Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ndu̱i Ar Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ár Ndu̱i Ar Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ár Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ár. Ndu̱i Ar Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ár. Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (otq)", () => {
		expect(p.parse("2 Ñoho Ar Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ñoho Ar Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ár Ñoho Ar Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ár Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ár. Ñoho Ar Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ár. Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (otq)", () => {
		expect(p.parse("1 Ndu̱i Ar Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ndu̱i Ar Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ár Ndu̱i Ar Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ár Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ár. Ndu̱i Ar Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ár. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (otq)", () => {
		expect(p.parse("2 Ñoho Ar Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ñoho Ar Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ár Ñoho Ar Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ár Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ár. Ñoho Ar Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ár. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (otq)", () => {
		expect(p.parse("Ar Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (otq)", () => {
		expect(p.parse("Ar Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (otq)", () => {
		expect(p.parse("Ar Ebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (otq)", () => {
		expect(p.parse("Ar Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (otq)", () => {
		expect(p.parse("1 Ndu̱i Ar Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ndu̱i Ar Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ár Ndu̱i Ar Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ár P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ár. Ndu̱i Ar Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ár. P. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (otq)", () => {
		expect(p.parse("2 Ñoho Ar Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ñoho Ar Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ár Ñoho Ar Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ár P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ár. Ñoho Ar Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ár. P. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (otq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (otq)", () => {
		expect(p.parse("Ar Huda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
