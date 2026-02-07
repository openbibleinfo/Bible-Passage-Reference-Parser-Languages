"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kze.js";

describe("Localized book Rev (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kze)", () => {
		expect(p.parse("paárurain-kwasai 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("paá 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kze)", () => {
		expect(p.parse("Mátíyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kze)", () => {
		expect(p.parse("Mááka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kze)", () => {
		expect(p.parse("Árúku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Árú 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kze)", () => {
		expect(p.parse("1Yó 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kze)", () => {
		expect(p.parse("2Yó 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kze)", () => {
		expect(p.parse("3 Yóni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yó 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kze)", () => {
		expect(p.parse("1 Yóni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yóni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kze)", () => {
		expect(p.parse("2 Yóni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yóni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kze)", () => {
		expect(p.parse("Yóni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yó 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kze)", () => {
		expect(p.parse("aantá-kwaasi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("aan 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kze)", () => {
		expect(p.parse("Árómáa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Áró 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kze)", () => {
		expect(p.parse("1 Kórínti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kórínti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kze)", () => {
		expect(p.parse("2 Kórínti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kórínti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kze)", () => {
		expect(p.parse("1Kó 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kze)", () => {
		expect(p.parse("2Kó 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kze)", () => {
		expect(p.parse("Kórósi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kór 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kze)", () => {
		expect(p.parse("Kárésiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kár 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kze)", () => {
		expect(p.parse("Évésasi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Év 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kze)", () => {
		expect(p.parse("Vírípai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Vrp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kze)", () => {
		expect(p.parse("1 Tésárónaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tésárónaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kze)", () => {
		expect(p.parse("2 Tésárónaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tésárónaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kze)", () => {
		expect(p.parse("1Té 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kze)", () => {
		expect(p.parse("2Té 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kze)", () => {
		expect(p.parse("1 Tímóti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímóti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kze)", () => {
		expect(p.parse("2 Tímóti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímóti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kze)", () => {
		expect(p.parse("1Tí 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kze)", () => {
		expect(p.parse("2Tí 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kze)", () => {
		expect(p.parse("Táítási 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tái 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kze)", () => {
		expect(p.parse("Vírímóni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Vrm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kze)", () => {
		expect(p.parse("Ípíru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Íp 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kze)", () => {
		expect(p.parse("Yémési 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yém 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kze)", () => {
		expect(p.parse("1 Pítaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pítaa 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kze)", () => {
		expect(p.parse("2 Pítaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pítaa 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kze)", () => {
		expect(p.parse("1Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kze)", () => {
		expect(p.parse("2Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kze)", () => {
		expect(p.parse("Yúte 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yút 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kze)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kze)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yó - 3 Yóni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yó – 3 Yóni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yó — 3 Yóni").osis()).toEqual("1John.1-3John.1");
	});
});
