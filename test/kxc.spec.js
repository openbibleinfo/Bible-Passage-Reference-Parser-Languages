"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kxc.js";

describe("Localized book Gen (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kxc)", () => {
		expect(p.parse("Mataafa Uumata 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("uuma 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kxc)", () => {
		expect(p.parse("Mataafa Sooketa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("sooka 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kxc)", () => {
		expect(p.parse("Mataafa orra Lewi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kxc)", () => {
		expect(p.parse("Mataafa Dikoota 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("dikoota 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kxc)", () => {
		expect(p.parse("Pooyta Ermiyaasi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("pooyi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kxc)", () => {
		expect(p.parse("Keleshaata 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("kele 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kxc)", () => {
		expect(p.parse("Mataafa oppa' Ooreta 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ooreta 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kxc)", () => {
		expect(p.parse("Mataafa Iyyaasu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iyya 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kxc)", () => {
		expect(p.parse("Mataafa Taanynyada 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("taanynya 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kxc)", () => {
		expect(p.parse("Mataafa Rutti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rutti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kxc)", () => {
		expect(p.parse("Xuuma Issayyaasi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Issa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kxc)", () => {
		expect(p.parse("Mataafa Saamu'eeli a paayyota 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Mataafa. Saamu'eeli a paayyota 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kxc)", () => {
		expect(p.parse("Saamu a 1ta 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kxc)", () => {
		expect(p.parse("Mataafa Saamu'eeli a lammatta 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Mataafa. Saamu'eeli a lammatta 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kxc)", () => {
		expect(p.parse("Saamu a 2ta 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kxc)", () => {
		expect(p.parse("Mataafa a Nuqussa a paayyota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Mataafa. a Nuqussa a paayyota 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kxc)", () => {
		expect(p.parse("nuqu a 1ta 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kxc)", () => {
		expect(p.parse("Mataafa a Nuqussa a lammatta 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Mataafa. a Nuqussa a lammatta 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kxc)", () => {
		expect(p.parse("nuqu a 2ta 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kxc)", () => {
		expect(p.parse("Mataafa Otoowwa a paayyota 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Mataafa. Otoowwa a paayyota 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kxc)", () => {
		expect(p.parse("otoo a 1ta 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kxc)", () => {
		expect(p.parse("Mataafa Otoowwa a lammatta 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Mataafa. Otoowwa a lammatta 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kxc)", () => {
		expect(p.parse("otoo a 2ta 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kxc)", () => {
		expect(p.parse("Mataafa Isira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Isi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kxc)", () => {
		expect(p.parse("Mataafa a Nehimya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kxc)", () => {
		expect(p.parse("Mataafa Asteeri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("As 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kxc)", () => {
		expect(p.parse("Mataafa Iyyoopi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyyo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kxc)", () => {
		expect(p.parse("Mataafa Masmuureta 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mas 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kxc)", () => {
		expect(p.parse("Mataafa Pahana 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("phana 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kxc)", () => {
		expect(p.parse("Mataafa Dehaamta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("deha 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kxc)", () => {
		expect(p.parse("Masmuureta a masmuurewwa piisa qara jaallitto 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("jaala 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kxc)", () => {
		expect(p.parse("Xuuma Ermiyaasi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Er 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kxc)", () => {
		expect(p.parse("Xuuma Hisqeeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("His 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kxc)", () => {
		expect(p.parse("Xuuma Taani'eeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Taani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kxc)", () => {
		expect(p.parse("Hoose'i 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kxc)", () => {
		expect(p.parse("Xuuma Iyyu'eeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyyu 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kxc)", () => {
		expect(p.parse("Xuuma Amoosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kxc)", () => {
		expect(p.parse("Xuuma Aptiyu 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Apti 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kxc)", () => {
		expect(p.parse("Xuuma Yoonaasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kxc)", () => {
		expect(p.parse("Xuuma Mikkiyaasi 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikki 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kxc)", () => {
		expect(p.parse("Xuuma Nahoomi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naho 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kxc)", () => {
		expect(p.parse("Xuuma Inpaqoomi 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Inpa 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kxc)", () => {
		expect(p.parse("Xuuma Sofooniyaasi 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kxc)", () => {
		expect(p.parse("Xuuma Hake 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hake 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kxc)", () => {
		expect(p.parse("Xuuma Sakkaariyaasi 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kxc)", () => {
		expect(p.parse("Xuuma Milkiyaasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kxc)", () => {
		expect(p.parse("Maatiyoosi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maati 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kxc)", () => {
		expect(p.parse("Mariqoosi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maari 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kxc)", () => {
		expect(p.parse("Luqaasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kxc)", () => {
		expect(p.parse("Yohaannisi a paayyota 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yoha 1ta 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kxc)", () => {
		expect(p.parse("Yohaannisi a lammatta 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yoha 2ta 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kxc)", () => {
		expect(p.parse("Yohaannisi a sessatta 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yoha 3ta 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kxc)", () => {
		expect(p.parse("Yohaannisi 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kxc)", () => {
		expect(p.parse("Kodampaya 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("koda 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kxc)", () => {
		expect(p.parse("Roomi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kxc)", () => {
		expect(p.parse("Qorontoosi a paayyota 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Qoro 1ta 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kxc)", () => {
		expect(p.parse("Qorontoosi a lammatta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Qoro 2ta 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kxc)", () => {
		expect(p.parse("Qolaasiisi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qola 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kxc)", () => {
		expect(p.parse("Kelaatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kelaati 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kxc)", () => {
		expect(p.parse("Efesooni 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kxc)", () => {
		expect(p.parse("Filippisiyuusi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kxc)", () => {
		expect(p.parse("Teseloonqe a paayyota 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tese a 1ta 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kxc)", () => {
		expect(p.parse("Teseloonqe a lammatta 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tese a 2ta 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kxc)", () => {
		expect(p.parse("Timotoosi a paayyota 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timo 1ta 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kxc)", () => {
		expect(p.parse("Timotoosi a lammatta 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timo 2ta 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kxc)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kxc)", () => {
		expect(p.parse("Filmoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kxc)", () => {
		expect(p.parse("ipro 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ip 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kxc)", () => {
		expect(p.parse("Yayqoopi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yay 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kxc)", () => {
		expect(p.parse("Petroosi a paayyota 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Peti 1ta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kxc)", () => {
		expect(p.parse("Petiroosi a lammatta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Peti 2ta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kxc)", () => {
		expect(p.parse("Yihuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kxc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kxc)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannisi a paayyota - Yohaannisi a sessatta").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannisi a paayyota – Yohaannisi a sessatta").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaannisi a paayyota — Yohaannisi a sessatta").osis()).toEqual("1John.1-3John.1");
	});
});
