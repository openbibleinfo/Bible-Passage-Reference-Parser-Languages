"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ubu.js";

describe("Localized book Rev (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ubu)", () => {
		expect(p.parse("Lipa Ora Sirimu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lipe Ora Sirimu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Los 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ubu)", () => {
		expect(p.parse("Mateyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ubu)", () => {
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ubu)", () => {
		expect(p.parse("Lluko 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lluku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lluk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ubu)", () => {
		expect(p.parse("Jono Kumbi Lepamo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Jono Kumbi-Lepamo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ubu)", () => {
		expect(p.parse("Jono Talo Sipemo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Jono Talo-Sipemo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("JonoTalo-Sipamo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ubu)", () => {
		expect(p.parse("Jono Yepoko Sipemo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Jono Yepoko-Sipemo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Jono Yopoko-Sipamo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ubu)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ou Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ou. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ubu)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pe Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pe. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ubu)", () => {
		expect(p.parse("Jono 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ubu)", () => {
		expect(p.parse("Lipa Mundorumu Yema 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lipe Mundorumu Yema 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lipe Mundurumu Yema 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lip 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lmy 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ubu)", () => {
		expect(p.parse("Romo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ron 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ubu)", () => {
		expect(p.parse("1 Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ou Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ou Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ou. Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ou. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ubu)", () => {
		expect(p.parse("2 Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pe Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pe Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pe. Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pe. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ubu)", () => {
		expect(p.parse("Ou-Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("U-Korini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ubu)", () => {
		expect(p.parse("Pe-Korini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ubu)", () => {
		expect(p.parse("Kollosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ubu)", () => {
		expect(p.parse("Gallesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ubu)", () => {
		expect(p.parse("Epesasi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ubu)", () => {
		expect(p.parse("Pillipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ubu)", () => {
		expect(p.parse("1 Tesallonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesallonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ou Tesallonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ou Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ou. Tesallonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ou. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ubu)", () => {
		expect(p.parse("2 Tesallonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesallonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pe Tesallonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pe Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pe. Tesallonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pe. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ubu)", () => {
		expect(p.parse("Ou-Tesallonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("U-Tesallonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ubu)", () => {
		expect(p.parse("Pe-Tesallonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ubu)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ou Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ou Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ou. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ou. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ubu)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pe Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pe Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pe. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pe. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ubu)", () => {
		expect(p.parse("Ou-Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("U-Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ubu)", () => {
		expect(p.parse("Pe-Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ubu)", () => {
		expect(p.parse("Taitasi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ubu)", () => {
		expect(p.parse("Pillimono 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ubu)", () => {
		expect(p.parse("Ipuru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ipu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ubu)", () => {
		expect(p.parse("Jemisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ubu)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ou Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ou Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ou. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ou. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ubu)", () => {
		expect(p.parse("Ou-Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("U-Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ubu)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pe Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pe Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pe. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pe. Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ubu)", () => {
		expect(p.parse("Pe-Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ubu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ubu)", () => {
		expect(p.parse("Jutu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
	});
});
