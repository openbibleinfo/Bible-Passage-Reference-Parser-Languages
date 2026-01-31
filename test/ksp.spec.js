"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ksp.js";

describe("Localized book Rev (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ksp)", () => {
		expect(p.parse("Neje Ke Ddutu Ndɔ Te 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalisi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ddn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ksp)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ksp)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Jonah (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ksp)", () => {
		expect(p.parse("Jonase 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ksp)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ksp)", () => {
		expect(p.parse("Marke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markə 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ksp)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ksp)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ksp)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ksp)", () => {
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ksp)", () => {
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ksp)", () => {
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ksp)", () => {
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ksp)", () => {
		expect(p.parse("Kulaje 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kula 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ksp)", () => {
		expect(p.parse("Rɔmɛnje 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ksp)", () => {
		expect(p.parse("1 Kɔrɛntinyɛje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrɛntinyɛje 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ksp)", () => {
		expect(p.parse("2 Kɔrɛntinyɛje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrɛntinyɛje 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ksp)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ksp)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ksp)", () => {
		expect(p.parse("Kolosinyɛje 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ksp)", () => {
		expect(p.parse("Galatəje 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ksp)", () => {
		expect(p.parse("Epɛjinyɛje 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ksp)", () => {
		expect(p.parse("Pilipinyɛje 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ksp)", () => {
		expect(p.parse("1 Tesalonisinyɛje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisinyɛje 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ksp)", () => {
		expect(p.parse("2 Tesalonisinyɛje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisinyɛje 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ksp)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ksp)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ksp)", () => {
		expect(p.parse("1 Timɔte 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔte 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ksp)", () => {
		expect(p.parse("2 Timɔte 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔte 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ksp)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ksp)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ksp)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ksp)", () => {
		expect(p.parse("Pilemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ksp)", () => {
		expect(p.parse("Ebərəje 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebə 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ksp)", () => {
		expect(p.parse("Jakə 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ksp)", () => {
		expect(p.parse("1 Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ksp)", () => {
		expect(p.parse("2 Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ksp)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ksp)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ksp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ksp)", () => {
		expect(p.parse("Judə 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
