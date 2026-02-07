"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bru.js";

describe("Localized book Gen (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bru)", () => {
		expect(p.parse("Saráq Tễ Dâu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bru)", () => {
		expect(p.parse("Loŏh Tễ Ê-yip-tô 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bru)", () => {
		expect(p.parse("Lê-vi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bru)", () => {
		expect(p.parse("Ngih Proai 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bru)", () => {
		expect(p.parse("Santoiq Cuclỗiq 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bru)", () => {
		expect(p.parse("Sapáh Baih 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bru)", () => {
		expect(p.parse("Patâp Loah 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bru)", () => {
		expect(p.parse("Yô-sũa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bru)", () => {
		expect(p.parse("Cũai Rasữq 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bru)", () => {
		expect(p.parse("Rutỡ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bru)", () => {
		expect(p.parse("Ê-sai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bru)", () => {
		expect(p.parse("Samu-ễl Muoi 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bru)", () => {
		expect(p.parse("Samu-ễl Bar 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bru)", () => {
		expect(p.parse("Puo Muoi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bru)", () => {
		expect(p.parse("Puo Bar 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bru)", () => {
		expect(p.parse("Ruaih Loah Muoi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bru)", () => {
		expect(p.parse("Ruaih Loah Bar 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bru)", () => {
		expect(p.parse("Ê-sara 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bru)", () => {
		expect(p.parse("Nê-hamia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bru)", () => {
		expect(p.parse("Ê-satơ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bru)", () => {
		expect(p.parse("Yop 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bru)", () => {
		expect(p.parse("Ũat Khễn 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bru)", () => {
		expect(p.parse("Pali Panha 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bru)", () => {
		expect(p.parse("Santoiq Rangoaiq 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bru)", () => {
		expect(p.parse("Cansái Ũat 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bru)", () => {
		expect(p.parse("Yê-ramia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bru)", () => {
		expect(p.parse("Ê-sakiel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bru)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bru)", () => {
		expect(p.parse("Hô-sĩa 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bru)", () => {
		expect(p.parse("Yô-el 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bru)", () => {
		expect(p.parse("Amôt 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bru)", () => {
		expect(p.parse("Ô-badia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bru)", () => {
		expect(p.parse("Yô-na 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bru)", () => {
		expect(p.parse("Mi-ca 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bru)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bru)", () => {
		expect(p.parse("Ha-bacúc 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bru)", () => {
		expect(p.parse("Sê-phania 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bru)", () => {
		expect(p.parse("Hacai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bru)", () => {
		expect(p.parse("Sa-chari 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bru)", () => {
		expect(p.parse("Ma-laki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bru)", () => {
		expect(p.parse("Mathia 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bru)", () => {
		expect(p.parse("Mac 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bru)", () => {
		expect(p.parse("Luca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bru)", () => {
		expect(p.parse("Yang Muoi 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bru)", () => {
		expect(p.parse("Yang Bar 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bru)", () => {
		expect(p.parse("Yang Pái 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bru)", () => {
		expect(p.parse("Yang 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bru)", () => {
		expect(p.parse("Ranáq Táq 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bru)", () => {
		expect(p.parse("Rô-ma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bru)", () => {
		expect(p.parse("Côr-ntô Muoi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bru)", () => {
		expect(p.parse("Côr-ntô Bar 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bru)", () => {
		expect(p.parse("Cô-lusê 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bru)", () => {
		expect(p.parse("Ca-lati 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bru)", () => {
		expect(p.parse("Ê-phê-sô 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bru)", () => {
		expect(p.parse("Phi-lip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bru)", () => {
		expect(p.parse("Tê-salô-naca Muoi 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bru)", () => {
		expect(p.parse("Tê-salô-naca Bar 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bru)", () => {
		expect(p.parse("Ti-muthê Muoi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bru)", () => {
		expect(p.parse("Ti-muthê Bar 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bru)", () => {
		expect(p.parse("Atĩt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bru)", () => {
		expect(p.parse("Phi-lamôn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bru)", () => {
		expect(p.parse("Hê-brơ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bru)", () => {
		expect(p.parse("Yacỡ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bru)", () => {
		expect(p.parse("Phi-er Muoi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bru)", () => {
		expect(p.parse("Phi-er Bar 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bru)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bru)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yang Muoi - Yang Pái").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yang Muoi – Yang Pái").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yang Muoi — Yang Pái").osis()).toEqual("1John.1-3John.1");
	});
});
