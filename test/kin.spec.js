"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kin.js";

describe("Localized book Gen (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kin)", () => {
		expect(p.parse("Intangiriro 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Itangiriro 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Intang 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Itang 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Intg 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kin)", () => {
		expect(p.parse("Ukuvanwa mu Misri 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Iyimukamisiri 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Iyim 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kuva 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kuv 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (kin)", () => {
		expect(p.parse("IbDan 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Beli 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kin)", () => {
		expect(p.parse("Abalevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Abalewi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kin)", () => {
		expect(p.parse("Ibarura 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kubara 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ibar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kub 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kin)", () => {
		expect(p.parse("Mwene Siraki 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kin)", () => {
		expect(p.parse("Ubuhanga 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ubuh 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Buh 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kin)", () => {
		expect(p.parse("Amaganya ya Yeremiya 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Amaganya 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Amag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mag 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (kin)", () => {
		expect(p.parse("Ibaruwa ya Yeremiya 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("IbarYer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kin)", () => {
		expect(p.parse("Ibyahishuwe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ibyahisuwe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ibyah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Hish 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kin)", () => {
		expect(p.parse("Gutegeka kwa kabiri 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ivugururamategeko 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Guteg 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ivug 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kin)", () => {
		expect(p.parse("Yosuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yozuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kin)", () => {
		expect(p.parse("Abacamanza 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abac 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kin)", () => {
		expect(p.parse("Rusi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kin)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kin)", () => {
		expect(p.parse("1 mbere cya Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. mbere cya Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Icya mbere cya Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Icya Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Icya Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Icya. mbere cya Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Icya. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Icya. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kin)", () => {
		expect(p.parse("2 kabiri cya Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. kabiri cya Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Icya kabiri cya Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Icya Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Icya Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Icya. kabiri cya Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Icya. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Icya. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kin)", () => {
		expect(p.parse("1 mbere cy'Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. mbere cy'Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Icya mbere cy'Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Icya Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Icya Bami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Icya. mbere cy'Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Icya. Abami 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Icya. Bami 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kin)", () => {
		expect(p.parse("2 kabiri cy'Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. kabiri cy'Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Icya kabiri cy'Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Icya Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Icya Bami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Icya. kabiri cy'Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Icya. Abami 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Icya. Bami 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kin)", () => {
		expect(p.parse("1 mbere cy'Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Matek 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ngoma 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. mbere cy'Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Matek 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ngoma 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya mbere cy'Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya Matek 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya Ngoma 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya. mbere cy'Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya. Amateka 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya. Matek 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Icya. Ngoma 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kin)", () => {
		expect(p.parse("2 kabiri cy'Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Matek 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ngoma 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. kabiri cy'Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Matek 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ngoma 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya kabiri cy'Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya Matek 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya Ngoma 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya. kabiri cy'Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya. Amateka 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya. Matek 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Icya. Ngoma 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kin)", () => {
		expect(p.parse("Ezira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kin)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kin)", () => {
		expect(p.parse("Yobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kin)", () => {
		expect(p.parse("Zaburi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kin)", () => {
		expect(p.parse("Imigani 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Imig 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kin)", () => {
		expect(p.parse("Umubwiriza 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Umubw 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mubw 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kin)", () => {
		expect(p.parse("Indirimbo ya Salomo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Indirimbo ihebuje 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ind 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kin)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kin)", () => {
		expect(p.parse("Ezekeiyeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiyeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kin)", () => {
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hozeya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kin)", () => {
		expect(p.parse("Yoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kin)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kin)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kin)", () => {
		expect(p.parse("Yonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kin)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kin)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kin)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kin)", () => {
		expect(p.parse("Sofoniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kin)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kin)", () => {
		expect(p.parse("Zakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kin)", () => {
		expect(p.parse("Malakiya 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kin)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kin)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kin)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kin)", () => {
		expect(p.parse("Yohani, iya 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kin)", () => {
		expect(p.parse("Yohani, iya 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kin)", () => {
		expect(p.parse("Yohani, iya 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kin)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya Yh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya. Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Icya. Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kin)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya Yh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya. Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Icya. Yh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kin)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kin)", () => {
		expect(p.parse("Ibyakozwe n'Intumwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ibyakozwe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ibyak 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Intu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kin)", () => {
		expect(p.parse("AbanyaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Abaroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kin)", () => {
		expect(p.parse("1 Abanyakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Abakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abanyakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Icya Abanyakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Icya Abakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Icya Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Icya. Abanyakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Icya. Abakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Icya. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kin)", () => {
		expect(p.parse("2 Abanyakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Abakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abanyakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Icya Abanyakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Icya Abakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Icya Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Icya. Abanyakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Icya. Abakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Icya. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kin)", () => {
		expect(p.parse("Abanyakorinti, iya 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kin)", () => {
		expect(p.parse("Abanyakorinti, iya 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kin)", () => {
		expect(p.parse("Abanyakolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Abakolosayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kin)", () => {
		expect(p.parse("Abanyagalati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Abagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kin)", () => {
		expect(p.parse("Abanyefezi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Abefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kin)", () => {
		expect(p.parse("AbanyaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Abafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kin)", () => {
		expect(p.parse("1 Abanyatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abanyatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Icya Abanyatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Icya Abatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Icya Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Icya. Abanyatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Icya. Abatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Icya. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kin)", () => {
		expect(p.parse("2 Abanyatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abanyatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Icya Abanyatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Icya Abatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Icya Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Icya. Abanyatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Icya. Abatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Icya. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kin)", () => {
		expect(p.parse("Abanyatesaloniki, iya 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kin)", () => {
		expect(p.parse("Abanyatesaloniki, iya 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kin)", () => {
		expect(p.parse("1 Timoteyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Icya Timoteyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Icya Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Icya. Timoteyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Icya. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kin)", () => {
		expect(p.parse("2 Timoteyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Icya Timoteyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Icya Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Icya. Timoteyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Icya. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kin)", () => {
		expect(p.parse("Timote, iya 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kin)", () => {
		expect(p.parse("Timote, iya 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kin)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kin)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kin)", () => {
		expect(p.parse("Abeheburayi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abeheburayo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abehebureyi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kin)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kin)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Icya Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Icya Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Icya. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Icya. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kin)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Icya Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Icya Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Icya. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Icya. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kin)", () => {
		expect(p.parse("Petero, iya 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kin)", () => {
		expect(p.parse("Petero, iya 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kin)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kin)", () => {
		expect(p.parse("Tobiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobi 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kin)", () => {
		expect(p.parse("Yudita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ydt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kin)", () => {
		expect(p.parse("Baruki 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (kin)", () => {
		expect(p.parse("Suzana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("lbSus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kin)", () => {
		expect(p.parse("1 mbere cy'Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. mbere cy'Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Icya mbere cy'Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Icya Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Icya Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Icya. mbere cy'Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Icya. Abamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Icya. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kin)", () => {
		expect(p.parse("2 kabiri cy'Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. kabiri cy'Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Icya kabiri cy'Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Icya Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Icya Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Icya. kabiri cy'Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Icya. Abamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Icya. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kin)", () => {
		expect(p.parse("Daniyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kin)", () => {
		expect(p.parse("Esiteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esit 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (kin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kin)", () => {
		expect(p.parse("Ibyongewe ku gitabo cya Daniyeli 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("lbYon 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
