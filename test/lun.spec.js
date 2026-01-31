"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lun.js";

describe("Localized book Gen (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lun)", () => {
		expect(p.parse("Kutachika 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kutach 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lun)", () => {
		expect(p.parse("Kwidika 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exoda 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kwi 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lun)", () => {
		expect(p.parse("Livitike 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Alevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Liv. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lun)", () => {
		expect(p.parse("Kuchinda 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numere 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kuch 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lun)", () => {
		expect(p.parse("Malilo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mukeŋa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mali. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lun)", () => {
		expect(p.parse("Chimwekeshu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sinulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Chim 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sin. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lun)", () => {
		expect(p.parse("Deuteronoma 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kuhituluka 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kuhit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lun)", () => {
		expect(p.parse("Yoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lun)", () => {
		expect(p.parse("Ansompeshi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Baatuli 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ansomp 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Baat. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lun)", () => {
		expect(p.parse("Luti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lun)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lun)", () => {
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lun)", () => {
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lun)", () => {
		expect(p.parse("1 Anyanta 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Malena 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Anya 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mal. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Anyanta 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Malena 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Anya 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mal. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lun)", () => {
		expect(p.parse("2 Anyanta 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Malena 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Anya 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mal. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Anyanta 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Malena 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Anya 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mal. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lun)", () => {
		expect(p.parse("1 Kushindulula 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Makolonika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Makol. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kush 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kushindulula 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Makolonika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Makol. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kush 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lun)", () => {
		expect(p.parse("2 Kushindulula 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Makolonika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Makol. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kush 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kushindulula 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Makolonika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Makol. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kush 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lun)", () => {
		expect(p.parse("Ezera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezi. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lun)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lun)", () => {
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lun)", () => {
		expect(p.parse("Jobo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yoba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lun)", () => {
		expect(p.parse("Lisamu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Masamu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Samu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mas 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lun)", () => {
		expect(p.parse("Liproverbia 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Liprov. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Yishimu 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Yish 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lun)", () => {
		expect(p.parse("Mukwakutaŋisha 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Muekelesia 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Muek. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mukwa 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lun)", () => {
		expect(p.parse("Pina ya Lipina 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kamina 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pina. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kam 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lun)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lun)", () => {
		expect(p.parse("Ezekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lun)", () => {
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lun)", () => {
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lun)", () => {
		expect(p.parse("Yoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lun)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lun)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lun)", () => {
		expect(p.parse("Jonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lun)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lun)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nehumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lun)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lun)", () => {
		expect(p.parse("Zefwaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lun)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lun)", () => {
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lun)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lun)", () => {
		expect(p.parse("Matewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lun)", () => {
		expect(p.parse("Mareka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mare. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lun)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lun)", () => {
		expect(p.parse("1 Yowanu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joa. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowanu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joa. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lun)", () => {
		expect(p.parse("2 Yowanu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joa. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowanu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joa. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lun)", () => {
		expect(p.parse("3 Yowanu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joa. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yow 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowanu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joa. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lun)", () => {
		expect(p.parse("Yowanu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joa. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lun)", () => {
		expect(p.parse("Likezo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Yililu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Lik. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Yil 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lun)", () => {
		expect(p.parse("Maroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("aRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Maro. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lun)", () => {
		expect(p.parse("1 Makorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Akorinda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Makor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Makorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorinda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Makor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lun)", () => {
		expect(p.parse("2 Makorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Akorinda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Makor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Makorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorinda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Makor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lun)", () => {
		expect(p.parse("Makolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Makolo. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lun)", () => {
		expect(p.parse("Magalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Aŋalija 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Magal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ŋal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lun)", () => {
		expect(p.parse("Efwesesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Maefese 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Maef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efw 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lun)", () => {
		expect(p.parse("Afwilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mafil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fwi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lun)", () => {
		expect(p.parse("1 Matesalinika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mates. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Matesalinika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mates. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lun)", () => {
		expect(p.parse("2 Matesalinika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mates. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Matesalinika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mates. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lun)", () => {
		expect(p.parse("1 Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lun)", () => {
		expect(p.parse("2 Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lun)", () => {
		expect(p.parse("Titusa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lun)", () => {
		expect(p.parse("Fwilemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fwile 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lun)", () => {
		expect(p.parse("Maheberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aheberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Maheb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lun)", () => {
		expect(p.parse("Jakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakoba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lun)", () => {
		expect(p.parse("1 Pitrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lun)", () => {
		expect(p.parse("2 Pitrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lun)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lun)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
