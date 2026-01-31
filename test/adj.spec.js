"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/adj.js";

describe("Localized book Rev (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (adj)", () => {
		expect(p.parse("Ów eke Jan ɛkn es ɛkn ɛm 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Es Ɛkn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (adj)", () => {
		expect(p.parse("Matie e lɛl 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (adj)", () => {
		expect(p.parse("Mark e lɛl 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (adj)", () => {
		expect(p.parse("Luk e lɛl 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (adj)", () => {
		expect(p.parse("Jan e lɛl krɛkrɛ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (adj)", () => {
		expect(p.parse("Jan e lɛl yony ɛm 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (adj)", () => {
		expect(p.parse("Jan e lɛl nyahan ɛm 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (adj)", () => {
		expect(p.parse("Jan e lɛl 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (adj)", () => {
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (adj)", () => {
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (adj)", () => {
		expect(p.parse("Ɛrm ɛsɛl ecʼob kok e lɛl 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ob Kok 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (adj)", () => {
		expect(p.parse("Rom eyŋ e lɛl 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (adj)", () => {
		expect(p.parse("Korɛnt eyŋ e lɛl krɛkrɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (adj)", () => {
		expect(p.parse("Korɛnt eyŋ e lɛl yony ɛm 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (adj)", () => {
		expect(p.parse("1 Korɛnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛnt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (adj)", () => {
		expect(p.parse("2 Korɛnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛnt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (adj)", () => {
		expect(p.parse("Kolↄs eyŋ e lɛl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolↄs 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (adj)", () => {
		expect(p.parse("Galat eyŋ e lɛl 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (adj)", () => {
		expect(p.parse("Efɛs eyŋ e lɛl 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (adj)", () => {
		expect(p.parse("Filip eyŋ e lɛl 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (adj)", () => {
		expect(p.parse("Tesaloni eyŋ e lɛl krɛkrɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (adj)", () => {
		expect(p.parse("Tesaloni eyŋ e lɛl yony ɛm 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (adj)", () => {
		expect(p.parse("1 Tesaloni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloni 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (adj)", () => {
		expect(p.parse("2 Tesaloni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloni 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (adj)", () => {
		expect(p.parse("Timote e lɛl krɛkrɛ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (adj)", () => {
		expect(p.parse("Timote e lɛl yony ɛm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (adj)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (adj)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (adj)", () => {
		expect(p.parse("Tit e lɛl 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (adj)", () => {
		expect(p.parse("Filemↄ e lɛl 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemↄ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (adj)", () => {
		expect(p.parse("Ebre eyŋ e lɛl 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebre 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (adj)", () => {
		expect(p.parse("Jak e lɛl 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (adj)", () => {
		expect(p.parse("Piɛr e lɛl krɛkrɛ yony ɛm 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (adj)", () => {
		expect(p.parse("Piɛr e lɛl krɛkrɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (adj)", () => {
		expect(p.parse("1 Piɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (adj)", () => {
		expect(p.parse("2 Piɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (adj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (adj)", () => {
		expect(p.parse("Jud e lɛl ekʼawŋ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
