"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xbr.js";

describe("Localized book Gen (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (xbr)", () => {
		expect(p.parse("Dedi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("De. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (xbr)", () => {
		expect(p.parse("Luhu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lu. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (xbr)", () => {
		expect(p.parse("Paratu 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Part. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (xbr)", () => {
		expect(p.parse("Diha 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Di. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (xbr)", () => {
		expect(p.parse("Padudurungu 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pddr. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xbr)", () => {
		expect(p.parse("Pabowangu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pabw. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (xbr)", () => {
		expect(p.parse("Belingu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Bel. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (xbr)", () => {
		expect(p.parse("Yuhua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yuh. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (xbr)", () => {
		expect(p.parse("Da Hakimu 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hak. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xbr)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (xbr)", () => {
		expect(p.parse("Yahaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yhya. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (xbr)", () => {
		expect(p.parse("1 Hamuilu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ham. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Hamuilu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ham. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (xbr)", () => {
		expect(p.parse("2 Hamuilu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ham. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Hamuilu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ham. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (xbr)", () => {
		expect(p.parse("1 Hanganji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Hang. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hanganji 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hang. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (xbr)", () => {
		expect(p.parse("2 Hanganji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Hang. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hanganji 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hang. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (xbr)", () => {
		expect(p.parse("1 Lii Ndai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 L Nd. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Lii Ndai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. L Nd. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (xbr)", () => {
		expect(p.parse("2 Lii Ndai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 L Nd. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Lii Ndai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. L Nd. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (xbr)", () => {
		expect(p.parse("Ehira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ehra. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (xbr)", () => {
		expect(p.parse("Nahemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nhma. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (xbr)", () => {
		expect(p.parse("Etiru 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Etru. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (xbr)", () => {
		expect(p.parse("Na Mbukuna I Ayupu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Aypu. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (xbr)", () => {
		expect(p.parse("Pamalangungu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Paml. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (xbr)", () => {
		expect(p.parse("Pangerangu 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pangr. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (xbr)", () => {
		expect(p.parse("Ma-pabobarungu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mapb. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (xbr)", () => {
		expect(p.parse("Ludu Bokulu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("L Bkl. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (xbr)", () => {
		expect(p.parse("Yerimia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yerm. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (xbr)", () => {
		expect(p.parse("Yahakialu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yhkl. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (xbr)", () => {
		expect(p.parse("Ndanialu 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ndan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (xbr)", () => {
		expect(p.parse("Hohia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ho. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (xbr)", () => {
		expect(p.parse("Yoilu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yo. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (xbr)", () => {
		expect(p.parse("Amuhu 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (xbr)", () => {
		expect(p.parse("Ombanja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Omb. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xbr)", () => {
		expect(p.parse("Yunuhu 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (xbr)", () => {
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (xbr)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nhmu. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (xbr)", () => {
		expect(p.parse("Hambakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hamb. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (xbr)", () => {
		expect(p.parse("Hapanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Hap. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (xbr)", () => {
		expect(p.parse("Hanggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hngg. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (xbr)", () => {
		expect(p.parse("Hakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Hakr. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (xbr)", () => {
		expect(p.parse("Maliaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xbr)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xbr)", () => {
		expect(p.parse("Màruku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xbr)", () => {
		expect(p.parse("Lukahu 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xbr)", () => {
		expect(p.parse("1 Yuhani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuhn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xbr)", () => {
		expect(p.parse("2 Yuhani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuhn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xbr)", () => {
		expect(p.parse("3 Yuhani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuhn. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xbr)", () => {
		expect(p.parse("Yuhani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xbr)", () => {
		expect(p.parse("Na Rukuda Da Pa-pahurungu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pphr. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xbr)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xbr)", () => {
		expect(p.parse("1 Korinitu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinitu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xbr)", () => {
		expect(p.parse("2 Korinitu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinitu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xbr)", () => {
		expect(p.parse("Kolohi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xbr)", () => {
		expect(p.parse("Nggalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngga. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xbr)", () => {
		expect(p.parse("Epihu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xbr)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xbr)", () => {
		expect(p.parse("1 Tehalunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teh. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tehalunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teh. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xbr)", () => {
		expect(p.parse("2 Tehalunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teh. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tehalunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teh. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xbr)", () => {
		expect(p.parse("1 Timutiu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutiu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xbr)", () => {
		expect(p.parse("2 Timutiu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutiu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xbr)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xbr)", () => {
		expect(p.parse("Pilemungu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xbr)", () => {
		expect(p.parse("Imbarani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Imbr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xbr)", () => {
		expect(p.parse("Yakombu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xbr)", () => {
		expect(p.parse("1 Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xbr)", () => {
		expect(p.parse("2 Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xbr)", () => {
		expect(p.parse("Yund. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yunda 1:1").osis()).toEqual("Jude.1.1");
	});
});
