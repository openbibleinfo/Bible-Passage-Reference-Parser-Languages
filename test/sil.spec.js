"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sil.js";

describe("Localized book Gen (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sil)", () => {
		expect(p.parse("Wɩaa Dɩ-suomuŋ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sil)", () => {
		expect(p.parse("Mosis Kɛŋ Iziral Tɩŋŋaa Lɩɩ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sil)", () => {
		expect(p.parse("Levi Doho Nɩaa 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sil)", () => {
		expect(p.parse("Nambaba 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sil)", () => {
		expect(p.parse("Jembiee 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sil)", () => {
		expect(p.parse("Jɔɔŋ Wʋnaalaa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sil)", () => {
		expect(p.parse("Mosis Bɩra Wulli Wɩa Wombiiŋ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sil)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sil)", () => {
		expect(p.parse("Sɩpaalaaraa 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sil)", () => {
		expect(p.parse("Ruf 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sil)", () => {
		expect(p.parse("Azaaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sil)", () => {
		expect(p.parse("1 Samʋɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samʋɛl 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sil)", () => {
		expect(p.parse("2 Samʋɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samʋɛl 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sil)", () => {
		expect(p.parse("1 Kuoroo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kuoroo 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sil)", () => {
		expect(p.parse("2 Kuoroo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kuoroo 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sil)", () => {
		expect(p.parse("1 Iziral Tɩŋŋaa Naabarɩŋ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iziral Tɩŋŋaa Naabarɩŋ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sil)", () => {
		expect(p.parse("2 Iziral Tɩŋŋaa Naabarɩŋ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iziral Tɩŋŋaa Naabarɩŋ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sil)", () => {
		expect(p.parse("Ɛzɩra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sil)", () => {
		expect(p.parse("Nɛhɩmaaya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sil)", () => {
		expect(p.parse("Ɛsɩta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sil)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sil)", () => {
		expect(p.parse("Wɩa Yɩɩlaa 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sil)", () => {
		expect(p.parse("Namagaba 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sil)", () => {
		expect(p.parse("Tɩɩcha 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sil)", () => {
		expect(p.parse("Solomoŋ Yɩɩl-sɩmɩŋ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sil)", () => {
		expect(p.parse("Jɛrɩmaaya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sil)", () => {
		expect(p.parse("Ɛzɩkɩɛl 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sil)", () => {
		expect(p.parse("Danɩɛl 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sil)", () => {
		expect(p.parse("Hosia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sil)", () => {
		expect(p.parse("Jowɛl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sil)", () => {
		expect(p.parse("Amɔs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sil)", () => {
		expect(p.parse("Obadaaya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sil)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sil)", () => {
		expect(p.parse("Mɩka 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sil)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sil)", () => {
		expect(p.parse("Habaku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sil)", () => {
		expect(p.parse("Zefanaaya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sil)", () => {
		expect(p.parse("Hagaɩ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sil)", () => {
		expect(p.parse("Zɛkarɩya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sil)", () => {
		expect(p.parse("Malakaɩ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sil)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sil)", () => {
		expect(p.parse("Maak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sil)", () => {
		expect(p.parse("Luuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sil)", () => {
		expect(p.parse("1 Jɔɔŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔɔŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sil)", () => {
		expect(p.parse("2 Jɔɔŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔɔŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sil)", () => {
		expect(p.parse("3 Jɔɔŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jɔɔŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sil)", () => {
		expect(p.parse("Jɔɔŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sil)", () => {
		expect(p.parse("Yesu nanz. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tɩntɩŋŋaa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sil)", () => {
		expect(p.parse("Rom Tɩŋŋaa 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sil)", () => {
		expect(p.parse("1 Kɔrɩntɩ Nɩaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrɩntɩ Nɩaa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔr. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sil)", () => {
		expect(p.parse("2 Kɔrɩntɩ Nɩaa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrɩntɩ Nɩaa 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sil)", () => {
		expect(p.parse("Koloosi Nɩaa 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sil)", () => {
		expect(p.parse("Galiisia Nɩaa 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sil)", () => {
		expect(p.parse("Ɛfɛsɩs Nɩaa 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sil)", () => {
		expect(p.parse("Fɩlɩpa Nɩaa 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sil)", () => {
		expect(p.parse("1 Tɛsalonaaka Nɩaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonaaka Nɩaa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sil)", () => {
		expect(p.parse("2 Tɛsalonaaka Nɩaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonaaka Nɩaa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sil)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sil)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sil)", () => {
		expect(p.parse("Taatɩs 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sil)", () => {
		expect(p.parse("Fɩlɩmɔŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sil)", () => {
		expect(p.parse("Hiburu Tɩŋŋaa 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sil)", () => {
		expect(p.parse("Jeems 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sil)", () => {
		expect(p.parse("1 Pɩɩta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩɩta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sil)", () => {
		expect(p.parse("2 Pɩɩta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩɩta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sil)", () => {
		expect(p.parse("Juud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (sil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sil)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jɔɔŋ - 3 Jɔɔŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jɔɔŋ – 3 Jɔɔŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jɔɔŋ — 3 Jɔɔŋ").osis()).toEqual("1John.1-3John.1");
	});
});
