"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/igb.js";

describe("Localized book Gen (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (igb)", () => {
		expect(p.parse("Oyinyima 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Oyn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (igb)", () => {
		expect(p.parse("Ọyịkụra 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kụra 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (igb)", () => {
		expect(p.parse("Ireevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ire 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (igb)", () => {
		expect(p.parse("Ịrịka 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ịrị 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (igb)", () => {
		expect(p.parse("Arụwẹ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Arụ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (igb)", () => {
		expect(p.parse("Ẹtore 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ẹtẹ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (igb)", () => {
		expect(p.parse("Ọda 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (igb)", () => {
		expect(p.parse("Ijosuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ijos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (igb)", () => {
		expect(p.parse("Ọdọvịdị 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ọdọ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (igb)", () => {
		expect(p.parse("Iruutu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Iru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (igb)", () => {
		expect(p.parse("Ayịsaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ayị 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (igb)", () => {
		expect(p.parse("1 Ịsamụwẹrị 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ịsa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ịsamụwẹrị 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ịsa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (igb)", () => {
		expect(p.parse("2 Ịsamụwẹrị 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ịsa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ịsamụwẹrị 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ịsa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (igb)", () => {
		expect(p.parse("1 Ohinọyị 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ohi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ohinọyị 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ohi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (igb)", () => {
		expect(p.parse("2 Ohinọyị 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ohi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ohinọyị 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ohi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (igb)", () => {
		expect(p.parse("1 Ịtọpa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ịtọ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ịtọpa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ịtọ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (igb)", () => {
		expect(p.parse("2 Ịtọpa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ịtọ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ịtọpa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ịtọ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (igb)", () => {
		expect(p.parse("Ẹzịra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹzị 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (igb)", () => {
		expect(p.parse("Inehemaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ine 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (igb)", () => {
		expect(p.parse("Ẹsịta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹsị 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (igb)", () => {
		expect(p.parse("Ijoovu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ijov 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (igb)", () => {
		expect(p.parse("Ụhịrẹyị 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ụhị 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (igb)", () => {
		expect(p.parse("Ịrẹyị Ọzwọzịsa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ọzw 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (igb)", () => {
		expect(p.parse("Ahẹ Isoromọnị 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Iso 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (igb)", () => {
		expect(p.parse("Ahẹ Ụgama 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ahẹ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (igb)", () => {
		expect(p.parse("Ijeremaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ijer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (igb)", () => {
		expect(p.parse("Ezikẹẹrị 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (igb)", () => {
		expect(p.parse("Ịdanịyẹrị 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ịda 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (igb)", () => {
		expect(p.parse("Ihoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Iho 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (igb)", () => {
		expect(p.parse("Ijowẹrị 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ijow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (igb)", () => {
		expect(p.parse("Emọsị 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emọ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (igb)", () => {
		expect(p.parse("Ọbadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ọba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (igb)", () => {
		expect(p.parse("Ijona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ijon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (igb)", () => {
		expect(p.parse("Imika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Imi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (igb)", () => {
		expect(p.parse("Ịnahụmị 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Ịna 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (igb)", () => {
		expect(p.parse("Ihabaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Iha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (igb)", () => {
		expect(p.parse("Ịzẹhwanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ịzhw 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (igb)", () => {
		expect(p.parse("Ịhagayị 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ihg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (igb)", () => {
		expect(p.parse("Ịzakaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Iza 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (igb)", () => {
		expect(p.parse("Ịmarakayị 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ịma 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (igb)", () => {
		expect(p.parse("Imatiwu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Imt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (igb)", () => {
		expect(p.parse("Ịmaakị 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ịmk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (igb)", () => {
		expect(p.parse("Iruuku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Irk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (igb)", () => {
		expect(p.parse("1 Ịjọọnụ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ịjọ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ịjọọnụ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ịjọ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (igb)", () => {
		expect(p.parse("2 Ịjọọnụ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ịjọ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ịjọọnụ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ịjọ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (igb)", () => {
		expect(p.parse("3 Ịjọọnụ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ịjọ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ịjọọnụ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ịjọ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (igb)", () => {
		expect(p.parse("Ịjọọnụ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ịjọ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (igb)", () => {
		expect(p.parse("Odeyi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ụkọ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (igb)", () => {
		expect(p.parse("Aniroomi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Iro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (igb)", () => {
		expect(p.parse("1 Anịkọrịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ịkọ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Anịkọrịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ịkọ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (igb)", () => {
		expect(p.parse("2 Anịkọrịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ịkọ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Anịkọrịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ịkọ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (igb)", () => {
		expect(p.parse("Anikorasi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ikor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (igb)", () => {
		expect(p.parse("Anigaratiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Iga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (igb)", () => {
		expect(p.parse("Anẹhwẹsọsị 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹhw 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (igb)", () => {
		expect(p.parse("Anihwiripi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ihwi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (igb)", () => {
		expect(p.parse("1 Anịtẹsaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ịtẹ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Anịtẹsaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ịtẹ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (igb)", () => {
		expect(p.parse("2 Anịtẹsaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ịtẹ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Anịtẹsaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ịtẹ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (igb)", () => {
		expect(p.parse("1 Itimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Itim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Itimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Itim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (igb)", () => {
		expect(p.parse("2 Itimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Itim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Itimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Itim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (igb)", () => {
		expect(p.parse("Ịtayịtọsị 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ịta 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (igb)", () => {
		expect(p.parse("Ihwirimọnị 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ihwm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (igb)", () => {
		expect(p.parse("Anihiburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ihib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (igb)", () => {
		expect(p.parse("Ijemiisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ije 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (igb)", () => {
		expect(p.parse("1 Ipi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ipi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (igb)", () => {
		expect(p.parse("2 Ipi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ipi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (igb)", () => {
		expect(p.parse("1Ipita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (igb)", () => {
		expect(p.parse("2Ipita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (igb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (igb)", () => {
		expect(p.parse("Ijudi 1:1").osis()).toEqual("Jude.1.1");
	});
});
