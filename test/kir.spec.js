"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kir.js";

describe("Localized book Gen (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kir)", () => {
		expect(p.parse("Башталыш 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Баш. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kir)", () => {
		expect(p.parse("Аян 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kir)", () => {
		expect(p.parse("Жашыя 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Жаш. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kir)", () => {
		expect(p.parse("Бийлер 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Бий. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kir)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kir)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Jonah (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kir)", () => {
		expect(p.parse("Жунус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Жун. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kir)", () => {
		expect(p.parse("Матай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kir)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kir)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kir)", () => {
		expect(p.parse("1Жкн. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kir)", () => {
		expect(p.parse("2Жкн. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kir)", () => {
		expect(p.parse("3 Жакан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Жкн. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kir)", () => {
		expect(p.parse("1 Жакан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Жакан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kir)", () => {
		expect(p.parse("2 Жакан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Жакан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kir)", () => {
		expect(p.parse("Жакан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Жкн. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kir)", () => {
		expect(p.parse("Элчилер 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Элч. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kir)", () => {
		expect(p.parse("Римдиктерге 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kir)", () => {
		expect(p.parse("1 Корунттуктар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Корунттуктар 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kir)", () => {
		expect(p.parse("2 Корунттуктар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Корунттуктар 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kir)", () => {
		expect(p.parse("1Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kir)", () => {
		expect(p.parse("2Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kir)", () => {
		expect(p.parse("Колостуктар 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kir)", () => {
		expect(p.parse("Галатиялыктар 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kir)", () => {
		expect(p.parse("Эфестиктер 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kir)", () => {
		expect(p.parse("Филипиялыктар 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kir)", () => {
		expect(p.parse("1 Тесалоникалыктар 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тесалоникалыктар 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kir)", () => {
		expect(p.parse("2 Тесалоникалыктар 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тесалоникалыктар 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kir)", () => {
		expect(p.parse("1Тес. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kir)", () => {
		expect(p.parse("2Тес. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kir)", () => {
		expect(p.parse("1 Тиметей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тиметей 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kir)", () => {
		expect(p.parse("2 Тиметей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тиметей 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kir)", () => {
		expect(p.parse("1Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kir)", () => {
		expect(p.parse("2Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kir)", () => {
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kir)", () => {
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kir)", () => {
		expect(p.parse("Эврейлер 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Эвр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kir)", () => {
		expect(p.parse("Жакып 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Жкп. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kir)", () => {
		expect(p.parse("1 Петир 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петир 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kir)", () => {
		expect(p.parse("2 Петир 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петир 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kir)", () => {
		expect(p.parse("1Пет. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kir)", () => {
		expect(p.parse("2Пет. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kir)", () => {
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
