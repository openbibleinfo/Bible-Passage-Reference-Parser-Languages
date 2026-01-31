"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bky.js";

describe("Localized book Gen (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bky)", () => {
		expect(p.parse("Jénésis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bky)", () => {
		expect(p.parse("Ézódos 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bky)", () => {
		expect(p.parse("Lyívyítyíkus 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bky)", () => {
		expect(p.parse("Nómba 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bky)", () => {
		expect(p.parse("Lamantéshan 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bky)", () => {
		expect(p.parse("Revelíshon 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bky)", () => {
		expect(p.parse("Dyitorónómyi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dyitórónómyi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bky)", () => {
		expect(p.parse("Jóshwa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bky)", () => {
		expect(p.parse("Jójis 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bky)", () => {
		expect(p.parse("Nkyi to ké Rût 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rût 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bky)", () => {
		expect(p.parse("Azáya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bky)", () => {
		expect(p.parse("1 Sámwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámwel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bky)", () => {
		expect(p.parse("2 Sámwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámwel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bky)", () => {
		expect(p.parse("1 Kyîng 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kyîng 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bky)", () => {
		expect(p.parse("2 Kyîng 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kyîng 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bky)", () => {
		expect(p.parse("1 Korónyíkil 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Korónyíkil 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bky)", () => {
		expect(p.parse("2 Korónyíkil 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Korónyíkil 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bky)", () => {
		expect(p.parse("Ézara 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bky)", () => {
		expect(p.parse("Nehemyâ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bky)", () => {
		expect(p.parse("Esitá 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bky)", () => {
		expect(p.parse("Jôp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bky)", () => {
		expect(p.parse("Sâm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bky)", () => {
		expect(p.parse("Póróvep 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bky)", () => {
		expect(p.parse("Ekyilyizátes 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bky)", () => {
		expect(p.parse("Okwan 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bky)", () => {
		expect(p.parse("Jeryimáya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bky)", () => {
		expect(p.parse("Ezékyel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bky)", () => {
		expect(p.parse("Dányel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bky)", () => {
		expect(p.parse("Hozáya 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bky)", () => {
		expect(p.parse("Jówel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bky)", () => {
		expect(p.parse("Émos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bky)", () => {
		expect(p.parse("Obadyâ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bky)", () => {
		expect(p.parse("Jóna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bky)", () => {
		expect(p.parse("Máka 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bky)", () => {
		expect(p.parse("Náhum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bky)", () => {
		expect(p.parse("Habákuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bky)", () => {
		expect(p.parse("Zefanyâ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bky)", () => {
		expect(p.parse("Hágya 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bky)", () => {
		expect(p.parse("Zákaryâ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bky)", () => {
		expect(p.parse("Máláka 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bky)", () => {
		expect(p.parse("Mátyuu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bky)", () => {
		expect(p.parse("Mâk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bky)", () => {
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bky)", () => {
		expect(p.parse("1 Jǒn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jǒn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bky)", () => {
		expect(p.parse("2 Jǒn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jǒn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bky)", () => {
		expect(p.parse("3 Jǒn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jǒn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bky)", () => {
		expect(p.parse("Jǒn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bky)", () => {
		expect(p.parse("Âak 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bky)", () => {
		expect(p.parse("Rúman 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bky)", () => {
		expect(p.parse("1 Koríntyan 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koríntyan 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bky)", () => {
		expect(p.parse("2 Koríntyan 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koríntyan 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bky)", () => {
		expect(p.parse("Kolóshan 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bky)", () => {
		expect(p.parse("Galíshan 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bky)", () => {
		expect(p.parse("Efyíshan 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bky)", () => {
		expect(p.parse("Fyilyípyan 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bky)", () => {
		expect(p.parse("1 Tesalónyan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalónyan 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bky)", () => {
		expect(p.parse("2 Tesalónyan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalónyan 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bky)", () => {
		expect(p.parse("1 Tyímótyi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tyímótyi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bky)", () => {
		expect(p.parse("2 Tyímótyi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tyímótyi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bky)", () => {
		expect(p.parse("Tátus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bky)", () => {
		expect(p.parse("Fyílyímon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bky)", () => {
		expect(p.parse("Hyíburus 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bky)", () => {
		expect(p.parse("Jêmsyi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bky)", () => {
		expect(p.parse("1 Pyíta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyíta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bky)", () => {
		expect(p.parse("2 Pyíta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyíta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bky)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bky)", () => {
		expect(p.parse("Jût 1:1").osis()).toEqual("Jude.1.1");
	});
});
