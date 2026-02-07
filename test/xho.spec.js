"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xho.js";

describe("Localized book Gen (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (xho)", () => {
		expect(p.parse("I‐Genesise 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Eyeziqalo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesise 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("iGenesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ZiQalo 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (xho)", () => {
		expect(p.parse("Eyemfuduko 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("I‐Kesodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("iEksodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kesodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mfud 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (xho)", () => {
		expect(p.parse("I‐Levitikusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("iLevitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitikusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Eyonqulo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Nqulo 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (xho)", () => {
		expect(p.parse("Eyasentlango 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Imibalo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("iNumeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ntlango 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (xho)", () => {
		expect(p.parse("iZililo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ziLilo 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xho)", () => {
		expect(p.parse("Isityilo sika‐Johane 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("IsiThyilelo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Isityhilelo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Isityilo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("SiTyh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (xho)", () => {
		expect(p.parse("Uhlaziyo-mnqophiso 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("I‐Duteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("iDuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Idut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Hlaz 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (xho)", () => {
		expect(p.parse("U‐Yoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("uYoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (xho)", () => {
		expect(p.parse("Iinkokheli 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abagwebi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Nkokh 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xho)", () => {
		expect(p.parse("U‐Rute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("uRute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (xho)", () => {
		expect(p.parse("U‐Yisaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("uIsaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yisaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (xho)", () => {
		expect(p.parse("1 ka‐Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Kasamweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ka‐Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Kasamweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala ka‐Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala Kasamweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala. ka‐Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala. Kasamweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala. Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eyokuqala. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. ka‐Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Kasamweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samyali 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (xho)", () => {
		expect(p.parse("2 ka‐Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Kasamweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ka‐Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Kasamweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini ka‐Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini Kasamweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini. ka‐Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini. Kasamweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini. Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Eyesibini. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. ka‐Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Kasamweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samyali 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (xho)", () => {
		expect(p.parse("uSamuweli 1 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Usamuweli I 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (xho)", () => {
		expect(p.parse("Usamuweli II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("uSamuweli 2 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Usam. II 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (xho)", () => {
		expect(p.parse("1 Yookumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Yookumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala Yookumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala Yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala Kum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala. Yookumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala. yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala. Yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eyokuqala. Kum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Yookumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Yokumkani 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kum 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (xho)", () => {
		expect(p.parse("2 Yookumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Yookumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini Yookumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini Yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini Kum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini. Yookumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini. yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini. Yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Eyesibini. Kum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Yookumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Yokumkani 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kum 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (xho)", () => {
		expect(p.parse("OOKumkani 1 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ookumkani I 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (xho)", () => {
		expect(p.parse("Ookumkani II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("OOKumkani 2 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (xho)", () => {
		expect(p.parse("1 yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Yeziganeko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Gan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Yeziganeko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Gan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala Yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala Yeziganeko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala Gan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala. yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala. Yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala. Yeziganeko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eyokuqala. Gan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Yezikronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Yeziganeko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Gan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (xho)", () => {
		expect(p.parse("2 yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Yeziganeko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Gan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Yeziganeko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Gan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini Yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini Yeziganeko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini Gan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini. yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini. Yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini. Yeziganeko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Eyesibini. Gan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Yezikronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Yeziganeko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Gan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (xho)", () => {
		expect(p.parse("IziKronike 1 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Izikronike I 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (xho)", () => {
		expect(p.parse("Izikronike II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("IziKronike 2 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (xho)", () => {
		expect(p.parse("U‐Ezera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("uEzra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (xho)", () => {
		expect(p.parse("U‐Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("uNehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (xho)", () => {
		expect(p.parse("U‐Esetere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esetere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("uEstere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (xho)", () => {
		expect(p.parse("U‐Jobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("uYobhi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Uyobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yobi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (xho)", () => {
		expect(p.parse("Iindumiso 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Amaculo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Indum. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ndum 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (xho)", () => {
		expect(p.parse("iMizekeliso 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ImiZek. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Izafobe 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Zaf 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (xho)", () => {
		expect(p.parse("Amava Engqondi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("iNtshumayeli 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("UmShumayeli 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mava 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (xho)", () => {
		expect(p.parse("iNgoma yazo iiNgoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ingoma ka‐Solomone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Uncuthu Lwengoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ingoma 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ngoma 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (xho)", () => {
		expect(p.parse("U‐Jeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ujeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("uYeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Uyer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (xho)", () => {
		expect(p.parse("U‐Hezekile 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("uHezekile 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hezekile 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (xho)", () => {
		expect(p.parse("U‐Danyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("uDaniyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (xho)", () => {
		expect(p.parse("U‐Hosheha 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosheha 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("uHoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Uhosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Uhos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (xho)", () => {
		expect(p.parse("U‐Joweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ujoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("uYoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Uyow. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (xho)", () => {
		expect(p.parse("U‐Hamose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Hamose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("uAmosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Uamos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Uam. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (xho)", () => {
		expect(p.parse("U‐Hobadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("uObhadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Hobadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obhad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xho)", () => {
		expect(p.parse("U‐Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("uJona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("uYona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (xho)", () => {
		expect(p.parse("U‐Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("uMika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (xho)", () => {
		expect(p.parse("U‐Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("uNahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (xho)", () => {
		expect(p.parse("U‐Habakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("uHabhakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Uhabh. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habh 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (xho)", () => {
		expect(p.parse("U‐Tsefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tsefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("uZefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefan 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (xho)", () => {
		expect(p.parse("U‐Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("uHagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (xho)", () => {
		expect(p.parse("U‐Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Uzakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("uZekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Uzek. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakar 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (xho)", () => {
		expect(p.parse("U‐Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("uMalaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Umal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xho)", () => {
		expect(p.parse("Ivangeli ka‐Mateyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Umatewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("uMateyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Umat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xho)", () => {
		expect(p.parse("Ivangeli ka‐Maraki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maraki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("uMarko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xho)", () => {
		expect(p.parse("Ivangeli ka‐Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("uLuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xho)", () => {
		expect(p.parse("KaYohane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kayohane I 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xho)", () => {
		expect(p.parse("Kayohane II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("KaYohane 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xho)", () => {
		expect(p.parse("Eyesitatu incwadi ka‐Johane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kayohane III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Johane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Kayohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("KaYohane 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xho)", () => {
		expect(p.parse("1 incwadi ka‐Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Kayohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. incwadi ka‐Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Kayohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala incwadi ka‐Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala Kayohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala. incwadi ka‐Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala. Kayohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eyokuqala. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. incwadi ka‐Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Kayohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xho)", () => {
		expect(p.parse("2 incwadi ka‐Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Kayohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. incwadi ka‐Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Kayohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini incwadi ka‐Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini Kayohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini. incwadi ka‐Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini. Kayohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Eyesibini. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. incwadi ka‐Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Kayohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xho)", () => {
		expect(p.parse("Ivangeli ka‐Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("uYohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Uyoh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xho)", () => {
		expect(p.parse("Umsebenzi Wabathunywa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Izenzo zabapostile 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("IzEnzo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mseb 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi kuma‐Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("KwabaseRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xho)", () => {
		expect(p.parse("KwabaseKorinte 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kwabasekorinte I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("kwabaseKor. I 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xho)", () => {
		expect(p.parse("Kwabasekorinte II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("KwabaseKorinte 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xho)", () => {
		expect(p.parse("1 incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala. incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala. Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala. Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eyokuqala. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xho)", () => {
		expect(p.parse("2 incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini. incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini. Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini. Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Eyesibini. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. incwadi ka‐Paulusi kuma‐Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi kuma‐Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("KwabaseKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi kuma‐Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("KumaGalati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi kuma‐Efese 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Kwabase-Efese 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efese 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi kuma‐Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("KwabaseFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xho)", () => {
		expect(p.parse("KwabaseTesalonika 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("kwabaseTesalonika I 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xho)", () => {
		expect(p.parse("Kwabasetesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("KwabaseTesalonika 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xho)", () => {
		expect(p.parse("1 incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala. incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala. Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eyokuqala. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Kwabasetesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xho)", () => {
		expect(p.parse("2 incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini. incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini. Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Eyesibini. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. incwadi ka‐Paulusi kuma‐Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Kwabasetesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xho)", () => {
		expect(p.parse("KuTimoti 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kutimoti I 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xho)", () => {
		expect(p.parse("Kutimoti II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("KuTimoti 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xho)", () => {
		expect(p.parse("1 incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Kutimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Kutimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala Kutimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala. incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala. Kutimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eyokuqala. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Kutimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xho)", () => {
		expect(p.parse("2 incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Kutimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Kutimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini Kutimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini. incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini. Kutimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Eyesibini. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. incwadi ka‐Paulusi ku‐Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Kutimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi ku‐Titusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("KuTito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi ku‐Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("KuFilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Kufilmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filmon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xho)", () => {
		expect(p.parse("Incwadi ka‐Paulusi kuma‐Hebere 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("KumaHebhere 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebere 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebh 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xho)", () => {
		expect(p.parse("Incwadi ka‐Yakobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("EkaJakobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ekayakobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xho)", () => {
		expect(p.parse("KaPetros 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kapetros I 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xho)", () => {
		expect(p.parse("Kapetros II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("KaPetros 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xho)", () => {
		expect(p.parse("1 incwadi ka‐Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Kapetros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. incwadi ka‐Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Kapetros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala incwadi ka‐Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala Kapetros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala. incwadi ka‐Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala. Kapetros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala. Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eyokuqala. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. incwadi ka‐Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Kapetros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xho)", () => {
		expect(p.parse("2 incwadi ka‐Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Kapetros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. incwadi ka‐Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Kapetros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini incwadi ka‐Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini Kapetros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini. incwadi ka‐Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini. Kapetros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini. Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Eyesibini. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. incwadi ka‐Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Kapetros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xho)", () => {
		expect(p.parse("Incwadi ka‐Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("EkaJuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("EkaYuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (xho)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xho)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("KaYohane 1 - Eyesitatu incwadi ka‐Johane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("KaYohane 1 – Eyesitatu incwadi ka‐Johane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("KaYohane 1 — Eyesitatu incwadi ka‐Johane").osis()).toEqual("1John.1-3John.1");
	});
});
