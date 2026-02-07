"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gor.js";

describe("Localized book Gen (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gor)", () => {
		expect(p.parse("Iloowali 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ilo. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gor)", () => {
		expect(p.parse("Pilotimua̒ta 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pilot. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gor)", () => {
		expect(p.parse("Imaamati 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Im. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gor)", () => {
		expect(p.parse("Yia̒apo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Yi. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gor)", () => {
		expect(p.parse("Hiyongo Mopoilaalo Suusa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Hi. Mo. Su. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gor)", () => {
		expect(p.parse("Wah. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wahi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gor)", () => {
		expect(p.parse("Tinguli 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tin. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gor)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gor)", () => {
		expect(p.parse("Mongo Hakimu 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mon. Hak. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gor)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gor)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gor)", () => {
		expect(p.parse("1 Semuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sem. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Semuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sem. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Boh. Semuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Boh. Sem. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bohulo Semuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bohulo Sem. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bohulo. Semuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bohulo. Sem. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gor)", () => {
		expect(p.parse("2 Lo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sem. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Lo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sem. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ol. Lo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ol. Sem. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Oluo Lo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Oluo Sem. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Oluo. Lo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Oluo. Sem. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gor)", () => {
		expect(p.parse("1 Mongo Olongia 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mo. Ol. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mongo Olongia 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mo. Ol. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Boh. Mongo Olongia 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Boh. Mo. Ol. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bohulo Mongo Olongia 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bohulo Mo. Ol. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bohulo. Mongo Olongia 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bohulo. Mo. Ol. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gor)", () => {
		expect(p.parse("2 Mongo Olongia 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mo. Ol. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mongo Olongia 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mo. Ol. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ol. Mongo Olongia 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ol. Mo. Ol. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Oluo Mongo Olongia 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Oluo Mo. Ol. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Oluo. Mongo Olongia 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Oluo. Mo. Ol. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gor)", () => {
		expect(p.parse("1 Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Taw. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Taw. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Boh. Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Boh. Taw. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bohulo Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bohulo Taw. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bohulo. Tawari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bohulo. Taw. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gor)", () => {
		expect(p.parse("2 Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Taw. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Taw. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ol. Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ol. Taw. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Oluo Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Oluo Taw. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Oluo. Tawari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Oluo. Taw. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gor)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Es. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gor)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gor)", () => {
		expect(p.parse("Esteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gor)", () => {
		expect(p.parse("Ayuba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ay. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gor)", () => {
		expect(p.parse("Jaburu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jab. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gor)", () => {
		expect(p.parse("Pohumaya 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Poh. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gor)", () => {
		expect(p.parse("Tamoo-hutubawa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tamohut. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gor)", () => {
		expect(p.parse("Lahu Molamahu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lah. Mol. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gor)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gor)", () => {
		expect(p.parse("Yeheskiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gor)", () => {
		expect(p.parse("Daniali 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gor)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gor)", () => {
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yl. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gor)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gor)", () => {
		expect(p.parse("Obaja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gor)", () => {
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yunu 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gor)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gor)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gor)", () => {
		expect(p.parse("Habaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gor)", () => {
		expect(p.parse("Jepanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Jep. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gor)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gor)", () => {
		expect(p.parse("Jakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gor)", () => {
		expect(p.parse("Maleakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gor)", () => {
		expect(p.parse("Matiusi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gor)", () => {
		expect(p.parse("Markusi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gor)", () => {
		expect(p.parse("Lukasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gor)", () => {
		expect(p.parse("Ot. Yah. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yahya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gor)", () => {
		expect(p.parse("1 Yahya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yah. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yahya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yah. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Boh. Yahya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Boh. Yah. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bohulo Yahya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bohulo Yah. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bohulo. Yahya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bohulo. Yah. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gor)", () => {
		expect(p.parse("2 Yahya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yah. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yahya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yah. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ol. Yahya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ol. Yah. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Oluo Yahya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Oluo Yah. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Oluo. Yahya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Oluo. Yah. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gor)", () => {
		expect(p.parse("Yahya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yah. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gor)", () => {
		expect(p.parse("Wungguli Lomongo Rasulu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mong. Ras. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gor)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gor)", () => {
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Boh. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Boh. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bohulo Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bohulo Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bohulo. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bohulo. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gor)", () => {
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ol. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ol. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Oluo Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Oluo Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Oluo. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Oluo. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gor)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gor)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gor)", () => {
		expect(p.parse("Epesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gor)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gor)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Boh. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Boh. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bohulo Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bohulo Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bohulo. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bohulo. Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gor)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ol. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ol. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Oluo Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Oluo Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Oluo. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Oluo. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gor)", () => {
		expect(p.parse("1 Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Boh. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Boh. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bohulo Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bohulo Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bohulo. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bohulo. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gor)", () => {
		expect(p.parse("2 Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ol. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ol. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Oluo Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Oluo Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Oluo. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Oluo. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gor)", () => {
		expect(p.parse("Titusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gor)", () => {
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gor)", () => {
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gor)", () => {
		expect(p.parse("Yakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gor)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Boh. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Boh. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bohulo Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bohulo Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bohulo. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bohulo. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gor)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ol. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ol. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Oluo Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Oluo Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Oluo. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Oluo. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gor)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gor)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yahya - Ot. Yah.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yahya – Ot. Yah.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yahya — Ot. Yah.").osis()).toEqual("1John.1-3John.1");
	});
});
