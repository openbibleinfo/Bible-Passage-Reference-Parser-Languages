"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/huv.js";

describe("Localized book Rev (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (huv)", () => {
		expect(p.parse("Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (huv)", () => {
		expect(p.parse("San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (huv)", () => {
		expect(p.parse("San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (huv)", () => {
		expect(p.parse("San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (huv)", () => {
		expect(p.parse("3ª Carta de San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (huv)", () => {
		expect(p.parse("1 carta de San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. carta de San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ª carta de San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ª Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ª. carta de San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ª. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (huv)", () => {
		expect(p.parse("2 Carta de San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Carta de San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ª Carta de San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ª Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ª. Carta de San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ª. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (huv)", () => {
		expect(p.parse("San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (huv)", () => {
		expect(p.parse("Los Hechos de los Apóstoles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (huv)", () => {
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (huv)", () => {
		expect(p.parse("1 Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ª Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ª Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ª. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ª. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (huv)", () => {
		expect(p.parse("2 Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ª Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ª Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ª. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ª. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (huv)", () => {
		expect(p.parse("Colosenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (huv)", () => {
		expect(p.parse("Gálatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (huv)", () => {
		expect(p.parse("Efesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (huv)", () => {
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (huv)", () => {
		expect(p.parse("1 Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ª Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ª Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ª. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ª. Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (huv)", () => {
		expect(p.parse("2 Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ª Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ª Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ª. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ª. Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (huv)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ª Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ª Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ª. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ª. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (huv)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ª Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ª Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ª. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ª. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (huv)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (huv)", () => {
		expect(p.parse("Filemn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (huv)", () => {
		expect(p.parse("Hebreos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (huv)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (huv)", () => {
		expect(p.parse("1 Carta de San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Carta de San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ª Carta de San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ª Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ª. Carta de San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ª. Pedro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (huv)", () => {
		expect(p.parse("2 Carta de San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Carta de San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ª Carta de San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ª Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ª. Carta de San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ª. Pedro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (huv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (huv)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
	});
});
