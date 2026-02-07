"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mri.js";

describe("Localized book Gen (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mri)", () => {
		expect(p.parse("Kenehi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kene 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mri)", () => {
		expect(p.parse("Ekoruhe 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekor 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mri)", () => {
		expect(p.parse("Rewitikuha 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Rewi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mri)", () => {
		expect(p.parse("Tauanga 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Taua 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mri)", () => {
		expect(p.parse("Ngā Tangi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tangi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tang 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mri)", () => {
		expect(p.parse("Whakakitenga 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kite 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mri)", () => {
		expect(p.parse("Tiuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tiut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mri)", () => {
		expect(p.parse("Hohua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Hohu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mri)", () => {
		expect(p.parse("Kaiwhakariterite 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kwhk 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mri)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mri)", () => {
		expect(p.parse("Ihaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ihāia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ihai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ihāi 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mri)", () => {
		expect(p.parse("1 Hamuera 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Hamuera 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mri)", () => {
		expect(p.parse("2 Hamuera 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Hamuera 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mri)", () => {
		expect(p.parse("1Ham 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mri)", () => {
		expect(p.parse("2Ham 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mri)", () => {
		expect(p.parse("1 Kingi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kīngi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kingi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kīngi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mri)", () => {
		expect(p.parse("2 Kingi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kīngi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kingi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kīngi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mri)", () => {
		expect(p.parse("1Kng 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mri)", () => {
		expect(p.parse("2Kng 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mri)", () => {
		expect(p.parse("1 Whakapapa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Whakapapa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mri)", () => {
		expect(p.parse("2 Whakapapa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Whakapapa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mri)", () => {
		expect(p.parse("1Wkp 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mri)", () => {
		expect(p.parse("2Wkp 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mri)", () => {
		expect(p.parse("Etera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eter 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mri)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mri)", () => {
		expect(p.parse("Ehetere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ehet 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mri)", () => {
		expect(p.parse("Hopa 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mri)", () => {
		expect(p.parse("Whakatauki 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Wtki 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mri)", () => {
		expect(p.parse("Kaikauwhau 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kkwh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mri)", () => {
		expect(p.parse("Waiata a Horomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Waih 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mri)", () => {
		expect(p.parse("Waiata 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Waia 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mri)", () => {
		expect(p.parse("Heremaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Here 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mri)", () => {
		expect(p.parse("Ehekiera 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ehek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mri)", () => {
		expect(p.parse("Raniera 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Rani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mri)", () => {
		expect(p.parse("Hohea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hōhea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hohe 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hōhe 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mri)", () => {
		expect(p.parse("Hoera 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Hoer 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mri)", () => {
		expect(p.parse("Amoho 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Āmoho 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amoh 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Āmoh 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mri)", () => {
		expect(p.parse("Oparia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Opāria 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Opar 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Opār 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mri)", () => {
		expect(p.parse("Hona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mri)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mri)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mri)", () => {
		expect(p.parse("Hapakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hapa 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mri)", () => {
		expect(p.parse("Tepania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tepa 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mri)", () => {
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hākai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haka 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hāka 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mri)", () => {
		expect(p.parse("Hakaraia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Hakr 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mri)", () => {
		expect(p.parse("Maraki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mara 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mri)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mati 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mri)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Māka 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mri)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mri)", () => {
		expect(p.parse("1Hoa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mri)", () => {
		expect(p.parse("2Hoa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mri)", () => {
		expect(p.parse("3 Hoani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Hoa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mri)", () => {
		expect(p.parse("1 Hoani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Hoani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mri)", () => {
		expect(p.parse("2 Hoani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Hoani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mri)", () => {
		expect(p.parse("Hoani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Hoan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mri)", () => {
		expect(p.parse("Ngā Mahi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mahi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mri)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rōma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mri)", () => {
		expect(p.parse("1 Koriniti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koriniti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mri)", () => {
		expect(p.parse("2 Koriniti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koriniti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mri)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mri)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mri)", () => {
		expect(p.parse("Korohe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koro 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mri)", () => {
		expect(p.parse("Karatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kara 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mri)", () => {
		expect(p.parse("Epeha 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epeh 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mri)", () => {
		expect(p.parse("Piripai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pirp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mri)", () => {
		expect(p.parse("1 Teharonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teharonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mri)", () => {
		expect(p.parse("2 Teharonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teharonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mri)", () => {
		expect(p.parse("1Teh 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mri)", () => {
		expect(p.parse("2Teh 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mri)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mri)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mri)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mri)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mri)", () => {
		expect(p.parse("Taituha 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tait 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mri)", () => {
		expect(p.parse("Pirimona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Prmn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mri)", () => {
		expect(p.parse("Ngā Hiperu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hiperu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hepe 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hipe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mri)", () => {
		expect(p.parse("Hemi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Hēmi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mri)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mri)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mri)", () => {
		expect(p.parse("1Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mri)", () => {
		expect(p.parse("2Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mri)", () => {
		expect(p.parse("Hura 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Hūrā 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mri)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Hoa - 3 Hoani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Hoa – 3 Hoani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Hoa — 3 Hoani").osis()).toEqual("1John.1-3John.1");
	});
});
