"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zul.js";

describe("Localized book Gen (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (zul)", () => {
		expect(p.parse("Igenesisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ugenesise 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Igen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (zul)", () => {
		expect(p.parse("I-Eksodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("U-Eksodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ueksodusi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("I-Eks. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (zul)", () => {
		expect(p.parse("Ilevithikhusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ulevitikusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ilev. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (zul)", () => {
		expect(p.parse("iNumeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Unumeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Inum. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (zul)", () => {
		expect(p.parse("IsiLilo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Isil. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (zul)", () => {
		expect(p.parse("IsAmbulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("IsAmb. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Isam. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (zul)", () => {
		expect(p.parse("Idutheronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Uduteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Idut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (zul)", () => {
		expect(p.parse("Ujoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ujos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (zul)", () => {
		expect(p.parse("AbAhluleli 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abehluleli 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("AbAhl. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abehl. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (zul)", () => {
		expect(p.parse("uRuthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Uruthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Urut. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (zul)", () => {
		expect(p.parse("U-Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("U-Izaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("U-Iza. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (zul)", () => {
		expect(p.parse("1 Usamuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Usam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Usamuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Usam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (zul)", () => {
		expect(p.parse("2 Usamuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Usam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Usamuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Usam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (zul)", () => {
		expect(p.parse("1 Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 AmaKh. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Amak. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amakhosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. AmaKh. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amak. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (zul)", () => {
		expect(p.parse("2 Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 AmaKh. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Amak. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Amakhosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. AmaKh. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Amak. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (zul)", () => {
		expect(p.parse("1 Izikhronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 IziKronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 IziKr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Izik. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Izikhronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. IziKronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. IziKr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Izik. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (zul)", () => {
		expect(p.parse("2 Izikhronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 IziKronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 IziKr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Izik. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Izikhronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. IziKronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. IziKr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Izik. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (zul)", () => {
		expect(p.parse("U-Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("U-Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (zul)", () => {
		expect(p.parse("uNehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Uneh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (zul)", () => {
		expect(p.parse("U-Esteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("U-Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (zul)", () => {
		expect(p.parse("Ujob. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ujobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobe 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (zul)", () => {
		expect(p.parse("AmaHubo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("AmaH. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (zul)", () => {
		expect(p.parse("Izaga zikaSolomoni 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Izag. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("IzAga 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("IzA. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (zul)", () => {
		expect(p.parse("UmShumayeli 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Shum. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Umsh. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (zul)", () => {
		expect(p.parse("Isihlabelelelo Sezihlabelelo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("IsiHlabelelo seziHlabelelo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("IsiHlab. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Isihl. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (zul)", () => {
		expect(p.parse("Ujeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ujer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (zul)", () => {
		expect(p.parse("Uhezekeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Uhez. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (zul)", () => {
		expect(p.parse("uDaniyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Udan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (zul)", () => {
		expect(p.parse("uHoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Uhoziya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Uhoz. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (zul)", () => {
		expect(p.parse("Ujoweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joweli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ujow. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (zul)", () => {
		expect(p.parse("U-Amose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("U-Amo. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (zul)", () => {
		expect(p.parse("U-Obhadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("U-Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("U-Obh. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (zul)", () => {
		expect(p.parse("Ujon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("uJona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (zul)", () => {
		expect(p.parse("Umikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Umik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("uMika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (zul)", () => {
		expect(p.parse("uNahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Unahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Unah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (zul)", () => {
		expect(p.parse("uHabhakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Uhabakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Uhab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (zul)", () => {
		expect(p.parse("uZefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Uzef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (zul)", () => {
		expect(p.parse("uHagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Uhag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (zul)", () => {
		expect(p.parse("Uzakhariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Uzakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Uzak. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (zul)", () => {
		expect(p.parse("Umalakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("uMalaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Umal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (zul)", () => {
		expect(p.parse("NgokukaMathewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zul)", () => {
		expect(p.parse("NgokukaMakhu 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("NgokukaMarku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zul)", () => {
		expect(p.parse("NgokukaLuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zul)", () => {
		expect(p.parse("3 Kajohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zul)", () => {
		expect(p.parse("1 KaJohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. KaJohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zul)", () => {
		expect(p.parse("2 Kajohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Kajohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (zul)", () => {
		expect(p.parse("NgokukaJohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (zul)", () => {
		expect(p.parse("IzEnzo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Izen. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("IzE. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (zul)", () => {
		expect(p.parse("Kwabase Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("KwabaseRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zul)", () => {
		expect(p.parse("1 KwabaseKhorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kho. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. KwabaseKhorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kwabasekorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kho. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zul)", () => {
		expect(p.parse("2 KwabaseKhorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kho. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. KwabaseKhorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kwabasekorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kho. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (zul)", () => {
		expect(p.parse("KwabaseKholose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("KwabaseKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zul)", () => {
		expect(p.parse("KwabaseGalathiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zul)", () => {
		expect(p.parse("Kwabase-Efesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zul)", () => {
		expect(p.parse("Kwabase-Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("KwabaseFiliphi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("KwabaseFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zul)", () => {
		expect(p.parse("1 KwabaseThesalonikha 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 kwabaseThesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 The. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. KwabaseThesalonikha 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. kwabaseThesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. The. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zul)", () => {
		expect(p.parse("2 KwabaseThesalonikha 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 kwabaseThesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 The. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. KwabaseThesalonikha 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. kwabaseThesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. The. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zul)", () => {
		expect(p.parse("1 KuThimothewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Thi. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. KuThimothewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Thi. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zul)", () => {
		expect(p.parse("2 KuThimothewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Thim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Thi. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. KuThimothewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Thi. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (zul)", () => {
		expect(p.parse("KuThithu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Thith. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Thit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zul)", () => {
		expect(p.parse("KuFilemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (zul)", () => {
		expect(p.parse("KumaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("KumaHeberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (zul)", () => {
		expect(p.parse("EkaJakobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("EkaJokobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zul)", () => {
		expect(p.parse("1 KaPhethro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 kaPetru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phe. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. KaPhethro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. kaPetru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phe. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zul)", () => {
		expect(p.parse("2 KaPhethro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 kaPetru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phe. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. KaPhethro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. kaPetru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phe. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (zul)", () => {
		expect(p.parse("EkaJuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (zul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (zul)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 KaJohane - 3 Kajohane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 KaJohane – 3 Kajohane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 KaJohane — 3 Kajohane").osis()).toEqual("1John.1-3John.1");
	});
});
