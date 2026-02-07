"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gax.js";

describe("Localized book Gen (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gax)", () => {
		expect(p.parse("Seera Uumamaa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ser. Uma. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Uumama 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Uum 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gax)", () => {
		expect(p.parse("Seera Bayu'uu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ser. Ba'u. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Bahisa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Bah 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gax)", () => {
		expect(p.parse("Seera Leewwotaa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ser. Lew. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lawi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Law 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gax)", () => {
		expect(p.parse("Seera Laakkobsaa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ser. Lak. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Henna 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Hen 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (gax)", () => {
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (gax)", () => {
		expect(p.parse("Qarooma Solomoni 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Qarooma 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gax)", () => {
		expect(p.parse("Kitaaba Faaruu Ermiyaasii 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Far. Erm. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Boha 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Boh 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gax)", () => {
		expect(p.parse("Waan Yohaanisitti mullisani 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Waan Yohanati Mullisani 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mul'dhata Yohaannisii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mudhata Yohaannisii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mudhii Yohaannisii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mudh. Yoh. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mudh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mul. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mul 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gax)", () => {
		expect(p.parse("Seera Keessa Deebii 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Qaabacha Seera 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kes. Deb. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Qab-Ser 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gax)", () => {
		expect(p.parse("Kitaaba Iyyaasu'uu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iyya. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gax)", () => {
		expect(p.parse("Abboota Murti'ii 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jaallaboota 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abbo. Mur. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jal 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gax)", () => {
		expect(p.parse("Kitaaba Ruutii 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gax)", () => {
		expect(p.parse("Raajii Isaayyaasii 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gax)", () => {
		expect(p.parse("1 Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ergaa Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ergaa Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ergaa Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ergaa. Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ergaa. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ergaa. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Gara Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Gara Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Gara Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Gara. Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Gara. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Gara. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kitaaba Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kitaaba Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kitaaba Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kitaaba. Saamu'eelii ka 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kitaaba. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kitaaba. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gax)", () => {
		expect(p.parse("Sam. 1ffaa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gax)", () => {
		expect(p.parse("2 Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ergaa Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ergaa Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ergaa Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ergaa. Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ergaa. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ergaa. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Gara Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Gara Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Gara Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Gara. Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Gara. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Gara. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kitaaba Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kitaaba Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kitaaba Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kitaaba. Saamu'eelii ka 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kitaaba. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Kitaaba. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gax)", () => {
		expect(p.parse("Sam. 2ffaa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gax)", () => {
		expect(p.parse("1 Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ergaa Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ergaa Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ergaa Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ergaa. Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ergaa. Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ergaa. Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Gara Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Gara Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Gara Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Gara. Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Gara. Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Gara. Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kitaaba Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kitaaba Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kitaaba Hay 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kitaaba. Moototaa ka 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kitaaba. Hayyoota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kitaaba. Hay 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gax)", () => {
		expect(p.parse("Mot. 1ffaa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gax)", () => {
		expect(p.parse("2 Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ergaa Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ergaa Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ergaa Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ergaa. Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ergaa. Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ergaa. Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Gara Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Gara Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Gara Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Gara. Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Gara. Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Gara. Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kitaaba Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kitaaba Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kitaaba Hay 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kitaaba. Mootota ka 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kitaaba. Hayyoota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Kitaaba. Hay 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gax)", () => {
		expect(p.parse("Mot. 2ffaa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gax)", () => {
		expect(p.parse("1 Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ergaa Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ergaa Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ergaa Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ergaa. Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ergaa. Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ergaa. Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Gara Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Gara Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Gara Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Gara. Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Gara. Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Gara. Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kitaaba Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kitaaba Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kitaaba Od-dur 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kitaaba. Seena'aa ka 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kitaaba. Odu duri 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kitaaba. Od-dur 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gax)", () => {
		expect(p.parse("Sen. 1ffaa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gax)", () => {
		expect(p.parse("2 Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ergaa Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ergaa Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ergaa Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ergaa. Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ergaa. Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ergaa. Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Gara Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Gara Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Gara Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Gara. Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Gara. Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Gara. Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kitaaba Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kitaaba Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kitaaba Od-dur 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kitaaba. Seena'aa ka 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kitaaba. Odu duri 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kitaaba. Od-dur 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gax)", () => {
		expect(p.parse("Sen. 2ffaa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gax)", () => {
		expect(p.parse("Kitaaba Izra'aa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gax)", () => {
		expect(p.parse("Kitaaba Naahimiya'aa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gax)", () => {
		expect(p.parse("Kitaaba Iyyoobii 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Aayubu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyyo. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gax)", () => {
		expect(p.parse("Kitaaba Mammaakaa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mammaasa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mam. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mam 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gax)", () => {
		expect(p.parse("Kitaaba Lallabaa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Abba herega 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Abb-Her 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Lal. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gax)", () => {
		expect(p.parse("Kitaaba Weedduu Weedduu Caalu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Faaru solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wed. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gax)", () => {
		expect(p.parse("Kitaaba Faaru'uu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Faaru 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Far. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Far 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gax)", () => {
		expect(p.parse("Raajii Ermiyaasii 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gax)", () => {
		expect(p.parse("Raajii Hisqeelii 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("His. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gax)", () => {
		expect(p.parse("Raajii Daani'eelii 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gax)", () => {
		expect(p.parse("Raajii Hose'ee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hose. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gax)", () => {
		expect(p.parse("Raajii Iyyu'eelii 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyyu. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gax)", () => {
		expect(p.parse("Raajii Amootsii 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gax)", () => {
		expect(p.parse("Raajii Abdiyyuu 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gax)", () => {
		expect(p.parse("Raajii Yoonaasii 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gax)", () => {
		expect(p.parse("Raajii Miikiyaasii 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gax)", () => {
		expect(p.parse("Raajii Naahoomii 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naho. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gax)", () => {
		expect(p.parse("Raajii Imbaaqoomii 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Imba. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gax)", () => {
		expect(p.parse("Raajii Sofoniyaasii 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gax)", () => {
		expect(p.parse("Raajii Hage'ee 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gax)", () => {
		expect(p.parse("Raajii Zakkaariyaasii 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakk. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gax)", () => {
		expect(p.parse("Raajii Milkiyaasii 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gax)", () => {
		expect(p.parse("Dubbii Nagayaa Ka Maatewoosii 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Oduu Nagayaa Ka Maatewoosii 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Wongeela Maatewoosii 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Wongeela Maatewos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maatewos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gax)", () => {
		expect(p.parse("Dubbii Nagayaa Ka Maarqoosii 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Oduu Nagayaa Ka Maarqoosii 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Wongeela Maarqoosii 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Wongeela Maarqoos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maarqoos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gax)", () => {
		expect(p.parse("Dubbii Nagayaa Ka Luqaasii 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Oduu Nagayaa Ka Luuqaasii 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Wongeela Luqaasii 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Wongeela Luqaas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqaas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gax)", () => {
		expect(p.parse("Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yoh. 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gax)", () => {
		expect(p.parse("Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yoh. 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gax)", () => {
		expect(p.parse("Ergaa Yohaannisii Ka 3ffaa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yohaannisii Ka 3ffaa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ergaa Yohaannisii 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ergaa Yohaannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yohaannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yoh. 3ffaa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohona 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gax)", () => {
		expect(p.parse("1 Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa. Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa. Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa. Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa. Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ergaa. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara. Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara. Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara. Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara. Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Gara. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba. Yohaannisii Ka 1ffaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba. Ergaa Yohaannisii 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba. Ergaa Yohaannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba. Yohona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kitaaba. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gax)", () => {
		expect(p.parse("2 Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa. Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa. Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa. Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa. Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ergaa. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara. Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara. Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara. Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara. Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Gara. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba. Yohaannisii Ka 2ffaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba. Ergaa Yohaannisii 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba. Ergaa Yohaannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba. Yohona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kitaaba. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gax)", () => {
		expect(p.parse("Dubbii Nagayaa Ka Yohaannisii 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Oduu Nagayaa Ka Yohaannisii 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Wongeela Yohaannisii 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Wongeela Yohaannis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohaannis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gax)", () => {
		expect(p.parse("Hujii Ergamittootaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hujii Ergantootaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hujii Ergamootaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Huji Ergamtoota 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Huji Ergattu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hu. Er. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Huji. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Huji 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("HuE 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Worra Rooma'aa Erge 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Gara Worra Rooma'aa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Worra Rooma'aa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomaa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gax)", () => {
		expect(p.parse("1 Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa. Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa. Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa. Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa. Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa. Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ergaa. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara. Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara. Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara. Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara. Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara. Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Gara. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba. Phaawuloos Gara worra Qorontoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba. Worra Qorontoosii 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba. Gara Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba. Worra Qorontoosii 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba. Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kitaaba. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gax)", () => {
		expect(p.parse("1Qorontoos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Qor. 1ffaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gax)", () => {
		expect(p.parse("2 Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa. Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa. Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa. Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa. Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa. Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ergaa. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara. Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara. Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara. Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara. Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara. Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Gara. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba. Phaawuloos Gara Worra Qorontoosii Erge Ka 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba. Worra Qorontoosii 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba. Gara Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba. Worra Qorontoosii 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba. Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kitaaba. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gax)", () => {
		expect(p.parse("2Qorontoos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Qor. 2ffaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Worra Qolaasiyaasii Erge 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gara Worra Qolaasiyaasii 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gara Worra Qolasaayisii 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Worra Qolosaayisii 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qolasaayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Worra Galaatiya'aa Erge 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gara Worra Galaatiya'aa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gara Worra Galaatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Worra Galaatiya'aa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Worra Efesoonii Erge 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Gara Worra Efesoonii 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Worra Efesoonii 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efessoon 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Worra Filiphisiyuusii Erge 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Gara Worra Filiphisiiyusii 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Gara Worra Filiphisiyuusii 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Worra Filiphisiiyusii 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filiphiyus 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filph. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gax)", () => {
		expect(p.parse("1 Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa. Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa. Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa. Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa. Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ergaa. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara. Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara. Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara. Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara. Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Gara. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba. Worra Tasolonqe'ee 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba. Gara Worra Tasaloonqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba. Worra Tasalonqe'ee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba. Thesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kitaaba. Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gax)", () => {
		expect(p.parse("1Tasaloonqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tas. 1ffaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tas. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gax)", () => {
		expect(p.parse("2 Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa. Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa. Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa. Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa. Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ergaa. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara. Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara. Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara. Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara. Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Gara. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba. Phaawuloos Gara Worra Tasolonqe'ee Erge ka 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba. Worra Tasolonqe'ee 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba. Gara Worra Tasaloonqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba. Worra Tasalonqe'ee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba. Thesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kitaaba. Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gax)", () => {
		expect(p.parse("2Tasaloonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tas. 2ffaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tas. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gax)", () => {
		expect(p.parse("1 Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa. Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa. Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa. Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa. Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ergaa. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara. Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara. Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara. Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara. Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Gara. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba. Phaawuloos Gara Ximootewoosii Erge ka 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba. Ximootewoosii 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba. Gara Ximotewoosii 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba. Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kitaaba. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gax)", () => {
		expect(p.parse("1Ximootewoos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Xim. 1ffaa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gax)", () => {
		expect(p.parse("2 Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa. Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa. Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa. Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa. Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ergaa. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara. Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara. Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara. Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara. Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Gara. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba. Phaawuloos Gara Ximootewoosii Erge ka 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba. Ximootewoosii 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba. Gara Ximotewoosii 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba. Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kitaaba. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gax)", () => {
		expect(p.parse("2Ximootewoos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Xim. 2ffaa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Tiito'oo Erge 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Gara Tiitoosii 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Gara Tiito'oo 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiitoos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiitoo 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gax)", () => {
		expect(p.parse("Ergaa Phaawuloos Gara Filimoona'aa Erge 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Gara Filimoona'aa 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Gara Filiimona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gax)", () => {
		expect(p.parse("Ergaa Gara Worra Ibrootaa Ergame 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Gara Worra Ibrootaa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Gara Ibirootaa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hibraawii 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibroota 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gax)", () => {
		expect(p.parse("Ergaa Yaaqoob Erge 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ergaa Yaaqoobii 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ergaa Yaaqoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaaqoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaaq 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gax)", () => {
		expect(p.parse("1 Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa. Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa. Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa. Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ergaa. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara. Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara. Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara. Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Gara. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba. Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba. Ergaa Pheexroosii 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba. Ergaa Phexiros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kitaaba. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gax)", () => {
		expect(p.parse("Pheexroosii Ka 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Phex. 1ffaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phexros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phex. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phex 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gax)", () => {
		expect(p.parse("2 Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa. Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa. Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa. Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ergaa. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara. Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara. Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara. Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Gara. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba. Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba. Ergaa Pheexroosii 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba. Ergaa Phexiros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kitaaba. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gax)", () => {
		expect(p.parse("Pheexroosii Ka 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Phex. 2ffaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phexros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phex. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phex 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gax)", () => {
		expect(p.parse("Ergaa Yihuudaan Erge 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ergaa Yihuuda'aa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ergaa Yihuda'aa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ergaa Yihudaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihudaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihu. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (gax)", () => {
		expect(p.parse("Tobiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (gax)", () => {
		expect(p.parse("Yudithi 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudi 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (gax)", () => {
		expect(p.parse("Baruku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (gax)", () => {
		expect(p.parse("1 Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ergaa Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ergaa Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ergaa. Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ergaa. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Gara Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Gara Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Gara. Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Gara. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kitaaba Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kitaaba Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kitaaba. Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kitaaba. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (gax)", () => {
		expect(p.parse("2 Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ergaa Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ergaa Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ergaa. Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ergaa. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Gara Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Gara Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Gara. Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Gara. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Kitaaba Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Kitaaba Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Kitaaba. Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Kitaaba. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gax)", () => {
		expect(p.parse("Kitaaba Asteerii 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Parser helper should handle book ranges (gax)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gax)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannisii Ka 1ffaa - Ergaa Yohaannisii Ka 3ffaa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannisii Ka 1ffaa – Ergaa Yohaannisii Ka 3ffaa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannisii Ka 1ffaa — Ergaa Yohaannisii Ka 3ffaa").osis()).toEqual("1John.1-3John.1");
	});
});
