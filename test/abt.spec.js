"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/abt.js";

describe("Localized book Rev (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (abt)", () => {
		expect(p.parse("Revelesen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Re 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (abt)", () => {
		expect(p.parse("Matyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (abt)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (abt)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (abt)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (abt)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (abt)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (abt)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (abt)", () => {
		expect(p.parse("Aposel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (abt)", () => {
		expect(p.parse("Romba 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (abt)", () => {
		expect(p.parse("1 Korinba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (abt)", () => {
		expect(p.parse("2 Korinba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (abt)", () => {
		expect(p.parse("Kolosiba 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (abt)", () => {
		expect(p.parse("Galesiaba 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (abt)", () => {
		expect(p.parse("Epesasba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (abt)", () => {
		expect(p.parse("Pilipaiba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (abt)", () => {
		expect(p.parse("1 Tesalonaikaba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaikaba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (abt)", () => {
		expect(p.parse("2 Tesalonaikaba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaikaba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (abt)", () => {
		expect(p.parse("1 Timotiké 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiké 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (abt)", () => {
		expect(p.parse("2 Timotiké 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiké 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (abt)", () => {
		expect(p.parse("Taitaské 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ta 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (abt)", () => {
		expect(p.parse("Pailimonké 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (abt)", () => {
		expect(p.parse("Yibruna 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (abt)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Je 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (abt)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (abt)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (abt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (abt)", () => {
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
