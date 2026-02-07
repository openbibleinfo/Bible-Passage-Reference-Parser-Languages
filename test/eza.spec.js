"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/eza.js";

describe("Localized book Gen (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (eza)", () => {
		expect(p.parse("Mbụlembu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mbụ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (eza)", () => {
		expect(p.parse("Awụfu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Awụ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (eza)", () => {
		expect(p.parse("Livitikọsu 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Liv. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (eza)", () => {
		expect(p.parse("Ọ́gú 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (eza)", () => {
		expect(p.parse("Egvu-Áwhụ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Áwhụ. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (eza)", () => {
		expect(p.parse("Ọwhulenya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ọwhu. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (eza)", () => {
		expect(p.parse("Ditoronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (eza)", () => {
		expect(p.parse("Jóshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jósh. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (eza)", () => {
		expect(p.parse("Ndu Ikpe 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ikpe. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (eza)", () => {
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (eza)", () => {
		expect(p.parse("Ayizáya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aza. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (eza)", () => {
		expect(p.parse("1 Sámuwẹlu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sám. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámuwẹlu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sám. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (eza)", () => {
		expect(p.parse("2 Sámuwẹlu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sám. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámuwẹlu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sám. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (eza)", () => {
		expect(p.parse("1 Iwhe e meru l'oge ndu eze 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Iwhe. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iwhe e meru l'oge ndu eze 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iwhe. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (eza)", () => {
		expect(p.parse("2 Iwhe e meru l'oge ndu eze 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Iwhe. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iwhe e meru l'oge ndu eze 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iwhe. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (eza)", () => {
		expect(p.parse("1 Ndu Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Eze. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ndu Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Eze. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (eza)", () => {
		expect(p.parse("2 Ndu Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Eze. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ndu Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Eze. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (eza)", () => {
		expect(p.parse("Ẹzura 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹzu. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (eza)", () => {
		expect(p.parse("Nehemaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (eza)", () => {
		expect(p.parse("Ẹsuta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹsu. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (eza)", () => {
		expect(p.parse("Job. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (eza)", () => {
		expect(p.parse("Egvu-Ọma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Egvu. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (eza)", () => {
		expect(p.parse("Ẹtu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (eza)", () => {
		expect(p.parse("O-zhi-iwhe 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("O-zhi. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (eza)", () => {
		expect(p.parse("Egvu Sólomọnu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sól. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (eza)", () => {
		expect(p.parse("Jeremáya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (eza)", () => {
		expect(p.parse("Izikẹlu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izk. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (eza)", () => {
		expect(p.parse("Daníyelu 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (eza)", () => {
		expect(p.parse("Hosíya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (eza)", () => {
		expect(p.parse("Jowelu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jow. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (eza)", () => {
		expect(p.parse("Émọsu 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Émọ. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (eza)", () => {
		expect(p.parse("Obedaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obe. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (eza)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (eza)", () => {
		expect(p.parse("Mayịka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("May. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (eza)", () => {
		expect(p.parse("Néhumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Hụm. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (eza)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (eza)", () => {
		expect(p.parse("Zéfanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zéf. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (eza)", () => {
		expect(p.parse("Hágayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hág. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (eza)", () => {
		expect(p.parse("Zakaráya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (eza)", () => {
		expect(p.parse("Malakayi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (eza)", () => {
		expect(p.parse("Mátiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mát. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (eza)", () => {
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Makụ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (eza)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (eza)", () => {
		expect(p.parse("1 Jọn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jọnu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọnu 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (eza)", () => {
		expect(p.parse("2 Jọn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jọnu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jọnu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (eza)", () => {
		expect(p.parse("3 Jọn. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jọnu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọn. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jọnu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (eza)", () => {
		expect(p.parse("Jọn. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jọnu 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (eza)", () => {
		expect(p.parse("Ozhi ndu ishi-ozhi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ndu. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (eza)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romu 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (eza)", () => {
		expect(p.parse("1 Kọ́rintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọ́r. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọ́rintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọ́r. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (eza)", () => {
		expect(p.parse("2 Kọ́rintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọ́r. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọ́rintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọ́r. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (eza)", () => {
		expect(p.parse("Kọlósi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (eza)", () => {
		expect(p.parse("Galéshiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (eza)", () => {
		expect(p.parse("Éfesọsu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éfe. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (eza)", () => {
		expect(p.parse("Fílipayi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fíl. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (eza)", () => {
		expect(p.parse("1Tesalonáyika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (eza)", () => {
		expect(p.parse("2 Tesalonáyika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonáyika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (eza)", () => {
		expect(p.parse("1 Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tím. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tím. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (eza)", () => {
		expect(p.parse("2 Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tím. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tím. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (eza)", () => {
		expect(p.parse("Táyitọsu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (eza)", () => {
		expect(p.parse("Fayilímọnu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fay. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (eza)", () => {
		expect(p.parse("Híburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Híb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (eza)", () => {
		expect(p.parse("Jémusu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jém. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (eza)", () => {
		expect(p.parse("1 Pyit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pyita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (eza)", () => {
		expect(p.parse("2 Pyit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pyita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (eza)", () => {
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (eza)", () => {
		expect(p.parse("1 Kọ́rintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọ́r. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("2 Kọ́rintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọ́r. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ọ́gú 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Parser helper should handle book ranges (eza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (eza)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jọn. - 3 Jọn.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jọn. – 3 Jọn.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jọn. — 3 Jọn.").osis()).toEqual("1John.1-3John.1");
	});
});
