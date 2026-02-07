"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/iqw.js";

describe("Localized book Gen (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (iqw)", () => {
		expect(p.parse("Mbụlembu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mbụ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (iqw)", () => {
		expect(p.parse("Awụfu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Awụ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (iqw)", () => {
		expect(p.parse("Livítikọsu 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Liv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (iqw)", () => {
		expect(p.parse("Ọ́gú 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (iqw)", () => {
		expect(p.parse("Egvu-Aphụ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aphụ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (iqw)", () => {
		expect(p.parse("Àphụ̀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Àph 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (iqw)", () => {
		expect(p.parse("Ditoronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (iqw)", () => {
		expect(p.parse("Jóshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jós 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (iqw)", () => {
		expect(p.parse("Ndu Ikpe 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ikpe 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (iqw)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (iqw)", () => {
		expect(p.parse("Azáya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Azá 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (iqw)", () => {
		expect(p.parse("1 Sámẹlu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámẹlu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sám 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (iqw)", () => {
		expect(p.parse("2 Sámẹlu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámẹlu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sám 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (iqw)", () => {
		expect(p.parse("1 Iphe e meru l'oge ndu Eze 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Iphe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iphe e meru l'oge ndu Eze 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iphe 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (iqw)", () => {
		expect(p.parse("2 Iphe e meru l'oge ndu Eze 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Iphe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iphe e meru l'oge ndu Eze 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iphe 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (iqw)", () => {
		expect(p.parse("1 Ndu Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ndu Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Eze 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (iqw)", () => {
		expect(p.parse("2 Ndu Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ndu Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Eze 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (iqw)", () => {
		expect(p.parse("Ẹ́zura 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹ́zu 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (iqw)", () => {
		expect(p.parse("Nehemáya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (iqw)", () => {
		expect(p.parse("Ẹ́suta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹ́su 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (iqw)", () => {
		expect(p.parse("Jobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (iqw)", () => {
		expect(p.parse("Ẹtu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (iqw)", () => {
		expect(p.parse("O-zi-iphe 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("O-zi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (iqw)", () => {
		expect(p.parse("Egvu Sólomọnu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sól 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (iqw)", () => {
		expect(p.parse("Egvu-Ọma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Egvu 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (iqw)", () => {
		expect(p.parse("Jeremáya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (iqw)", () => {
		expect(p.parse("Ezekẹlu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (iqw)", () => {
		expect(p.parse("Dánẹlu 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dán 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (iqw)", () => {
		expect(p.parse("Hosáya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (iqw)", () => {
		expect(p.parse("Jówẹlu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jów 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (iqw)", () => {
		expect(p.parse("Émọsu 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Émọ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (iqw)", () => {
		expect(p.parse("Obedáya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obe 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (iqw)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (iqw)", () => {
		expect(p.parse("Mayịka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("May 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (iqw)", () => {
		expect(p.parse("Náhumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Náh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (iqw)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (iqw)", () => {
		expect(p.parse("Zefanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (iqw)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (iqw)", () => {
		expect(p.parse("Zekaráya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (iqw)", () => {
		expect(p.parse("Malakayi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (iqw)", () => {
		expect(p.parse("Mátiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mát 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (iqw)", () => {
		expect(p.parse("Maku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (iqw)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (iqw)", () => {
		expect(p.parse("1 Jọnu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọnu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (iqw)", () => {
		expect(p.parse("2 Jọnu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọnu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (iqw)", () => {
		expect(p.parse("3 Jọnu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọnu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (iqw)", () => {
		expect(p.parse("Jọnu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (iqw)", () => {
		expect(p.parse("Ozi, Ndu Ishi-Ozi Jeru 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ndu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (iqw)", () => {
		expect(p.parse("Rómu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (iqw)", () => {
		expect(p.parse("1 Kọ́rintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọ́r 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọ́rintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọ́r 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (iqw)", () => {
		expect(p.parse("2 Kọ́rintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọ́r 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọ́rintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọ́r 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (iqw)", () => {
		expect(p.parse("Kọlósi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (iqw)", () => {
		expect(p.parse("Galéshiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (iqw)", () => {
		expect(p.parse("Éfesọsu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éfe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (iqw)", () => {
		expect(p.parse("Fílipayi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fíl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (iqw)", () => {
		expect(p.parse("1 Tesalonáyika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonáyika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (iqw)", () => {
		expect(p.parse("2 Tesalonáyika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonáyika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (iqw)", () => {
		expect(p.parse("1 Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (iqw)", () => {
		expect(p.parse("2 Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (iqw)", () => {
		expect(p.parse("Táyitọsu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (iqw)", () => {
		expect(p.parse("Fayilímọnu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fay 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (iqw)", () => {
		expect(p.parse("Híburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Híb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (iqw)", () => {
		expect(p.parse("Jémusu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jém 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (iqw)", () => {
		expect(p.parse("1 Pyita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pyit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (iqw)", () => {
		expect(p.parse("2 Pyita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pyit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (iqw)", () => {
		expect(p.parse("Judu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (iqw)", () => {
		expect(p.parse("1 Kọ́rintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọ́r 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("2 Kọ́rintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọ́r 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ẹ́suta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹ́su 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹ́zura 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹ́zu 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ọ́gú 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Àphụ̀ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Parser helper should handle book ranges (iqw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (iqw)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jọnu - 3 Jọnu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jọnu – 3 Jọnu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jọnu — 3 Jọnu").osis()).toEqual("1John.1-3John.1");
	});
});
