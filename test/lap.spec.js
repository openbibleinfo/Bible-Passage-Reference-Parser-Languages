"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lap.js";

describe("Localized book Rev (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lap)", () => {
		expect(p.parse("Lo kila gəl ne 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalypse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lkg 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lap)", () => {
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lap)", () => {
		expect(p.parse("Marəke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lap)", () => {
		expect(p.parse("Lugu 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lug 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lap)", () => {
		expect(p.parse("1Ja̰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lap)", () => {
		expect(p.parse("2Ja̰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lap)", () => {
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ja̰ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lap)", () => {
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lap)", () => {
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lap)", () => {
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ja̰ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lap)", () => {
		expect(p.parse("Kula ɗa Njeka̰ykulaje 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Koula 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kɗn 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lap)", () => {
		expect(p.parse("Romaindjé 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lap)", () => {
		expect(p.parse("1 Corinthiendjé 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Nje gə Kɔrɛnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiendjé 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Nje gə Kɔrɛnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lap)", () => {
		expect(p.parse("2 Corinthiendjé 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Nje gə Kɔrɛnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiendjé 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Nje gə Kɔrɛnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lap)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lap)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lap)", () => {
		expect(p.parse("Nje gə Kɔlɔsə 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossiendjé 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lap)", () => {
		expect(p.parse("Nje gə Galat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatedjé 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lap)", () => {
		expect(p.parse("Ephésiendjé 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Nje gə Epɛs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lap)", () => {
		expect(p.parse("Nje gə Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippiendjé 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lap)", () => {
		expect(p.parse("1 Nje gə Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessaloniciendjé 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Nje gə Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciendjé 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lap)", () => {
		expect(p.parse("2 Nje gə Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessaloniciendjé 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Nje gə Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciendjé 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lap)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lap)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lap)", () => {
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoce 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoce 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lap)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lap)", () => {
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoce 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoce 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lap)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lap)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lap)", () => {
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philém 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilimo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lap)", () => {
		expect(p.parse("Hébreudjé 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebərəje 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebə 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Héb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lap)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jagə 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jac 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jag 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lap)", () => {
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lap)", () => {
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lap)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lap)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lap)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lap)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
