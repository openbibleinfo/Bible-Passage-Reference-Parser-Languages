"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nus.js";

describe("Localized book Gen (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nus)", () => {
		expect(p.parse("Tuk 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nus)", () => {
		expect(p.parse("Ɣöth 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nus)", () => {
		expect(p.parse("Liib 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nus)", () => {
		expect(p.parse("Kuen 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nus)", () => {
		expect(p.parse("Jiɛth 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nus)", () => {
		expect(p.parse("Nyuuth 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nus)", () => {
		expect(p.parse("Ŋuɔ̱t 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nus)", () => {
		expect(p.parse("Jɔc 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nus)", () => {
		expect(p.parse("Ruëëc 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nus)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nus)", () => {
		expect(p.parse("I-ca-yaa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nus)", () => {
		expect(p.parse("1 Tham 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Tham 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nus)", () => {
		expect(p.parse("2 Tham 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Tham 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nus)", () => {
		expect(p.parse("1 Kua̱r 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kua̱r 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nus)", () => {
		expect(p.parse("2 Kua̱r 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kua̱r 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nus)", () => {
		expect(p.parse("1 Kuɛ̈n 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kuɛ̈n 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nus)", () => {
		expect(p.parse("2 Kuɛ̈n 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kuɛ̈n 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nus)", () => {
		expect(p.parse("Ɛdh 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nus)", () => {
		expect(p.parse("Nɛm 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nus)", () => {
		expect(p.parse("Ɛth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nus)", () => {
		expect(p.parse("I-yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nus)", () => {
		expect(p.parse("Diit 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nus)", () => {
		expect(p.parse("Pɛl 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nus)", () => {
		expect(p.parse("Ŋi̱i̱c 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nus)", () => {
		expect(p.parse("Thɔl 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nus)", () => {
		expect(p.parse("Yir 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nus)", () => {
		expect(p.parse("Yɛdh 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nus)", () => {
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nus)", () => {
		expect(p.parse("Ɣocä 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nus)", () => {
		expect(p.parse("Yo-el 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nus)", () => {
		expect(p.parse("A-mɔth 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nus)", () => {
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nus)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nus)", () => {
		expect(p.parse("Mikaa 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nus)", () => {
		expect(p.parse("Nɛ̈m 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nus)", () => {
		expect(p.parse("Ɣäb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nus)", () => {
		expect(p.parse("Dhɛp 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nus)", () => {
		expect(p.parse("Ɣag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nus)", () => {
		expect(p.parse("Dhɛk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nus)", () => {
		expect(p.parse("Mɛ̈l 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nus)", () => {
		expect(p.parse("Mɛ̈t 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nus)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nus)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nus)", () => {
		expect(p.parse("1 Jɔ̱ɔ̱n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jɔ̱ɔ̱n 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nus)", () => {
		expect(p.parse("2 Jɔ̱ɔ̱n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jɔ̱ɔ̱n 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nus)", () => {
		expect(p.parse("3 Jɔ̱ɔ̱n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jɔ̱ɔ̱n 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nus)", () => {
		expect(p.parse("Jɔ̱ɔ̱n 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nus)", () => {
		expect(p.parse("Lät 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nus)", () => {
		expect(p.parse("Röm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nus)", () => {
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nus)", () => {
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nus)", () => {
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nus)", () => {
		expect(p.parse("Gäl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nus)", () => {
		expect(p.parse("Ɛpɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nus)", () => {
		expect(p.parse("Pil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nus)", () => {
		expect(p.parse("1 Thɛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nus)", () => {
		expect(p.parse("2 Thɛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nus)", () => {
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nus)", () => {
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nus)", () => {
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nus)", () => {
		expect(p.parse("Pay 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nus)", () => {
		expect(p.parse("Ɣib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nus)", () => {
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nus)", () => {
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nus)", () => {
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nus)", () => {
		expect(p.parse("Juud 1:1").osis()).toEqual("Jude.1.1");
	});
});
