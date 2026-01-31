"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/izz.js";

describe("Localized book Gen (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (izz)", () => {
		expect(p.parse("Mbụlembu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mbụ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (izz)", () => {
		expect(p.parse("Awụfu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Awụ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (izz)", () => {
		expect(p.parse("Ndu Uke 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Uke 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (izz)", () => {
		expect(p.parse("Ọ́gú 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (izz)", () => {
		expect(p.parse("Ebvu Aphụ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aphụ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (izz)", () => {
		expect(p.parse("Ọphulenya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ọphu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (izz)", () => {
		expect(p.parse("Ditoronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (izz)", () => {
		expect(p.parse("Jioshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jios 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (izz)", () => {
		expect(p.parse("Ikpe 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (izz)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (izz)", () => {
		expect(p.parse("Azáya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Azá 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (izz)", () => {
		expect(p.parse("1 Sámẹlu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sámẹlu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (izz)", () => {
		expect(p.parse("2 Sámẹlu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sámẹlu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (izz)", () => {
		expect(p.parse("1Sám 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (izz)", () => {
		expect(p.parse("2Sám 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (izz)", () => {
		expect(p.parse("1Ndu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (izz)", () => {
		expect(p.parse("2Ndu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (izz)", () => {
		expect(p.parse("1 Iphe, ndu eze meru 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iphe, ndu eze meru 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (izz)", () => {
		expect(p.parse("2 Iphe, ndu eze meru 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iphe, ndu eze meru 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (izz)", () => {
		expect(p.parse("1 Ndu Eze 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ndu Eze 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (izz)", () => {
		expect(p.parse("2 Ndu Eze 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ndu Eze 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (izz)", () => {
		expect(p.parse("1Iphe 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (izz)", () => {
		expect(p.parse("2Iphe 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (izz)", () => {
		expect(p.parse("Ẹzura 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹzu 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (izz)", () => {
		expect(p.parse("Nehemaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (izz)", () => {
		expect(p.parse("Ẹsuta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹsu 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (izz)", () => {
		expect(p.parse("Jiobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jio 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (izz)", () => {
		expect(p.parse("Ẹtu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (izz)", () => {
		expect(p.parse("Oziphe 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ozi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (izz)", () => {
		expect(p.parse("Ebvu Sólomọnu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("EbvuSól 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (izz)", () => {
		expect(p.parse("Ebvu-ọma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ebvu 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (izz)", () => {
		expect(p.parse("Jieremaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jier 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (izz)", () => {
		expect(p.parse("Ezekẹlu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (izz)", () => {
		expect(p.parse("Danẹlu 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (izz)", () => {
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (izz)", () => {
		expect(p.parse("Jiowẹlu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jiow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (izz)", () => {
		expect(p.parse("Émọsu 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Émọ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (izz)", () => {
		expect(p.parse("Obedaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obed 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (izz)", () => {
		expect(p.parse("Jiona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jion 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (izz)", () => {
		expect(p.parse("Mayịka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mayị 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (izz)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (izz)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (izz)", () => {
		expect(p.parse("Zefanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (izz)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (izz)", () => {
		expect(p.parse("Zekaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (izz)", () => {
		expect(p.parse("Malakayi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (izz)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (izz)", () => {
		expect(p.parse("Maku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (izz)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (izz)", () => {
		expect(p.parse("1Jiọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (izz)", () => {
		expect(p.parse("2Jiọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (izz)", () => {
		expect(p.parse("3 Jiọnu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jiọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (izz)", () => {
		expect(p.parse("1 Jiọnu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jiọnu 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (izz)", () => {
		expect(p.parse("2 Jiọnu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jiọnu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (izz)", () => {
		expect(p.parse("Jiọnu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jiọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (izz)", () => {
		expect(p.parse("Ndu-ishi-ozi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ndu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (izz)", () => {
		expect(p.parse("Romu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (izz)", () => {
		expect(p.parse("1 Kọrentu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọrentu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (izz)", () => {
		expect(p.parse("2 Kọrentu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọrentu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (izz)", () => {
		expect(p.parse("1Kọr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (izz)", () => {
		expect(p.parse("2Kọr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (izz)", () => {
		expect(p.parse("Kọlosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kọl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (izz)", () => {
		expect(p.parse("Galeshiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (izz)", () => {
		expect(p.parse("Efesọsu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (izz)", () => {
		expect(p.parse("Filipayi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (izz)", () => {
		expect(p.parse("1 Tesalonayika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonayika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (izz)", () => {
		expect(p.parse("2 Tesalonayika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonayika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (izz)", () => {
		expect(p.parse("1Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (izz)", () => {
		expect(p.parse("2Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (izz)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (izz)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (izz)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (izz)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (izz)", () => {
		expect(p.parse("Tayitọsu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (izz)", () => {
		expect(p.parse("Fayilimọnu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fay 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (izz)", () => {
		expect(p.parse("Hiburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (izz)", () => {
		expect(p.parse("Jiemusu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jiem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (izz)", () => {
		expect(p.parse("1 Pyịta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyịta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (izz)", () => {
		expect(p.parse("2 Pyịta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyịta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (izz)", () => {
		expect(p.parse("1Pyị 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (izz)", () => {
		expect(p.parse("2Pyị 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (izz)", () => {
		expect(p.parse("Jiudu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jiud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (izz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (izz)", () => {
		expect(p.parse("Ọ́gú 1:1").osis()).toEqual("Num.1.1");
	});
});
