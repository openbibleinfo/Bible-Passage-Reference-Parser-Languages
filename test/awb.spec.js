"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/awb.js";

describe("Localized book Rev (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (awb)", () => {
		expect(p.parse("Sokigi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sok 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (awb)", () => {
		expect(p.parse("Mátíyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (awb)", () => {
		expect(p.parse("Máhka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (awb)", () => {
		expect(p.parse("Árúka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ár 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (awb)", () => {
		expect(p.parse("1Sn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (awb)", () => {
		expect(p.parse("2Sn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (awb)", () => {
		expect(p.parse("3 Sóni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Sn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (awb)", () => {
		expect(p.parse("1 Sóni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sóni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (awb)", () => {
		expect(p.parse("2 Sóni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sóni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (awb)", () => {
		expect(p.parse("Sóni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (awb)", () => {
		expect(p.parse("Eqmaro 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Eq 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (awb)", () => {
		expect(p.parse("aRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("aRom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (awb)", () => {
		expect(p.parse("1 Kórína 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kórína 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (awb)", () => {
		expect(p.parse("2 Kórína 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kórína 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (awb)", () => {
		expect(p.parse("1Kór 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (awb)", () => {
		expect(p.parse("2Kór 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (awb)", () => {
		expect(p.parse("Kórósía 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kór 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (awb)", () => {
		expect(p.parse("Kárétía 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kár 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (awb)", () => {
		expect(p.parse("Épésa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ép 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (awb)", () => {
		expect(p.parse("Pírípái 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pír 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (awb)", () => {
		expect(p.parse("1 Tésárónáíka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tésárónáíka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (awb)", () => {
		expect(p.parse("2 Tésárónáíka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tésárónáíka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (awb)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (awb)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (awb)", () => {
		expect(p.parse("1 Tímóti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímóti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (awb)", () => {
		expect(p.parse("2 Tímóti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímóti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (awb)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (awb)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (awb)", () => {
		expect(p.parse("Táítása 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Táí 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (awb)", () => {
		expect(p.parse("Pírémóna 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Prm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (awb)", () => {
		expect(p.parse("Íbaru Ke 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Íb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (awb)", () => {
		expect(p.parse("Sémísi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sém 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (awb)", () => {
		expect(p.parse("1 Píta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Píta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (awb)", () => {
		expect(p.parse("2 Píta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Píta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (awb)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (awb)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (awb)", () => {
		expect(p.parse("Súta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Sút 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (awb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (awb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Sn - 3 Sóni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Sn – 3 Sóni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Sn — 3 Sóni").osis()).toEqual("1John.1-3John.1");
	});
});
