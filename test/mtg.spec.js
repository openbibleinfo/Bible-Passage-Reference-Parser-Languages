"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mtg.js";

describe("Localized book Gen (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mtg)", () => {
		expect(p.parse("Kejadian Uram 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kej. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mtg)", () => {
		expect(p.parse("Keluaran Uram 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kel. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mtg)", () => {
		expect(p.parse("Imamat Uram 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Im. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mtg)", () => {
		expect(p.parse("Bilangan Uram 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bil. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mtg)", () => {
		expect(p.parse("Ratapan Uram 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Rat. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mtg)", () => {
		expect(p.parse("Wahyu Uram 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Why. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mtg)", () => {
		expect(p.parse("Ulangan Uram 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ul. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mtg)", () => {
		expect(p.parse("Yosua Uram 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mtg)", () => {
		expect(p.parse("Hakim-hakim Uram 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hak. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mtg)", () => {
		expect(p.parse("Rut Uram 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mtg)", () => {
		expect(p.parse("Yesaya Uram 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mtg)", () => {
		expect(p.parse("1Samuel Uram 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mtg)", () => {
		expect(p.parse("2Samuel Uram 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mtg)", () => {
		expect(p.parse("1Raja-raja Uram 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Raj. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mtg)", () => {
		expect(p.parse("2Raja-raja Uram 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Raj. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mtg)", () => {
		expect(p.parse("1Tawarikh Uram 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Taw. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mtg)", () => {
		expect(p.parse("2Tawarikh Uram 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Taw. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mtg)", () => {
		expect(p.parse("Ezra Uram 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mtg)", () => {
		expect(p.parse("Nehemia Uram 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mtg)", () => {
		expect(p.parse("Ester Uram 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mtg)", () => {
		expect(p.parse("Ayub Uram 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayb. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mtg)", () => {
		expect(p.parse("Mazmur Uram 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mzm. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mtg)", () => {
		expect(p.parse("Amsal Uram 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ams. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mtg)", () => {
		expect(p.parse("Pengkhotbah Uram 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pkh. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mtg)", () => {
		expect(p.parse("Kidung Agung Uram 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kid. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mtg)", () => {
		expect(p.parse("Yeremia Uram 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mtg)", () => {
		expect(p.parse("Yehezkiel Uram 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mtg)", () => {
		expect(p.parse("Daniel Uram 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mtg)", () => {
		expect(p.parse("Hosea Uram 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mtg)", () => {
		expect(p.parse("Yoel Uram 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yl. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mtg)", () => {
		expect(p.parse("Amos Uram 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mtg)", () => {
		expect(p.parse("Obaja Uram 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mtg)", () => {
		expect(p.parse("Yunus Uram 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mtg)", () => {
		expect(p.parse("Mikha Uram 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mtg)", () => {
		expect(p.parse("Nahum Uram 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mtg)", () => {
		expect(p.parse("Habakuk Uram 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mtg)", () => {
		expect(p.parse("Zefanya Uram 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mtg)", () => {
		expect(p.parse("Hagai Uram 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mtg)", () => {
		expect(p.parse("Zakharia Uram 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mtg)", () => {
		expect(p.parse("Maleakhi Uram 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mtg)", () => {
		expect(p.parse("Matius Uram 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mtg)", () => {
		expect(p.parse("Markus Uram 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mtg)", () => {
		expect(p.parse("Lukas Uram 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mtg)", () => {
		expect(p.parse("1Yohanes Uram 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mtg)", () => {
		expect(p.parse("2Yohanes Uram 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mtg)", () => {
		expect(p.parse("3Yohanes Uram 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mtg)", () => {
		expect(p.parse("Yohanes Uram 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mtg)", () => {
		expect(p.parse("Kisah Para Rasul Uram 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kis. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mtg)", () => {
		expect(p.parse("Roma Uram 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mtg)", () => {
		expect(p.parse("1Korintus Uram 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mtg)", () => {
		expect(p.parse("2Korintus Uram 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mtg)", () => {
		expect(p.parse("Kolose Uram 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mtg)", () => {
		expect(p.parse("Galatia Uram 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mtg)", () => {
		expect(p.parse("Efesus Uram 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mtg)", () => {
		expect(p.parse("Filipi Uram 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mtg)", () => {
		expect(p.parse("1Tesalonika Uram 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mtg)", () => {
		expect(p.parse("2Tesalonika Uram 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mtg)", () => {
		expect(p.parse("1Timotius Uram 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mtg)", () => {
		expect(p.parse("2Timotius Uram 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mtg)", () => {
		expect(p.parse("Titus Uram 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mtg)", () => {
		expect(p.parse("Filemon Uram 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mtg)", () => {
		expect(p.parse("Ibrani Uram 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mtg)", () => {
		expect(p.parse("Yakobus Uram 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mtg)", () => {
		expect(p.parse("1Petrus Uram 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Ptr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mtg)", () => {
		expect(p.parse("2Petrus Uram 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Ptr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mtg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mtg)", () => {
		expect(p.parse("Yudas Uram 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
