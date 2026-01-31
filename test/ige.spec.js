"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ige.js";

describe("Localized book Gen (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ige)", () => {
		expect(p.parse("Ọmwụ Ọdada 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ige)", () => {
		expect(p.parse("Ehe Ọkpụkpụ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ehe 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ige)", () => {
		expect(p.parse("Ala Ilivayị 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ige)", () => {
		expect(p.parse("Ọwawa 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ige)", () => {
		expect(p.parse("Ida Ọbaba 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ige)", () => {
		expect(p.parse("Ọwụrụụ-wụrụ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ige)", () => {
		expect(p.parse("Ehile Ọmada 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ehile 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ige)", () => {
		expect(p.parse("Ijochuwa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ige)", () => {
		expect(p.parse("Angịleje 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ige)", () => {
		expect(p.parse("Irutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ige)", () => {
		expect(p.parse("Ayịsaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ige)", () => {
		expect(p.parse("1 Ịsamwẹlụ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ịsamwẹlụ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ige)", () => {
		expect(p.parse("2 Ịsamwẹlụ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ịsamwẹlụ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ige)", () => {
		expect(p.parse("1 Ịdịrịhụ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ịdịrịhụ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ige)", () => {
		expect(p.parse("2 Ịdịrịhụ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ịdịrịhụ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ige)", () => {
		expect(p.parse("1 Ego Ogbegbe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ego Ogbegbe 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ige)", () => {
		expect(p.parse("2 Ego Ogbegbe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ego Ogbegbe 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ige)", () => {
		expect(p.parse("Ẹsịra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ige)", () => {
		expect(p.parse("Inehemaya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ige)", () => {
		expect(p.parse("Ẹsịta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ige)", () => {
		expect(p.parse("Ijobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ige)", () => {
		expect(p.parse("Eje Ọnyịịla 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ige)", () => {
		expect(p.parse("Etu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ige)", () => {
		expect(p.parse("ỌngọliryaỌngọ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ige)", () => {
		expect(p.parse("Eje Ọ-gụ Eje 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ige)", () => {
		expect(p.parse("Ijeremaya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ige)", () => {
		expect(p.parse("Isikẹlụ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ige)", () => {
		expect(p.parse("Ịdanẹlụ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ige)", () => {
		expect(p.parse("Ihoseya 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ige)", () => {
		expect(p.parse("Ijuwẹlụ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ige)", () => {
		expect(p.parse("EmọsịEmọ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ige)", () => {
		expect(p.parse("ObadayaOba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ige)", () => {
		expect(p.parse("Ijona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ige)", () => {
		expect(p.parse("Ịmayịka 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ige)", () => {
		expect(p.parse("Ịnahụm 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ige)", () => {
		expect(p.parse("Ịhabakuku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ige)", () => {
		expect(p.parse("Ịsẹfaniya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ige)", () => {
		expect(p.parse("Ịhagayị 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ige)", () => {
		expect(p.parse("Ịsẹkaraya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ige)", () => {
		expect(p.parse("Ịmalakayị 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ige)", () => {
		expect(p.parse("Ịmatiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ige)", () => {
		expect(p.parse("Ịmakị 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ige)", () => {
		expect(p.parse("iLuku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ige)", () => {
		expect(p.parse("1 Ịjọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ịjọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ige)", () => {
		expect(p.parse("2 Ịjọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ịjọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ige)", () => {
		expect(p.parse("3 Ịjọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ịjọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ige)", () => {
		expect(p.parse("Ịjọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ige)", () => {
		expect(p.parse("Ụkụrwọ nya Alẹrụ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ụkụr 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ige)", () => {
		expect(p.parse("Ala Irom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ige)", () => {
		expect(p.parse("1 Ala Ịkọrịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ala Ịkọrịntị 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ige)", () => {
		expect(p.parse("2 Ala Ịkọrịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ala Ịkọrịntị 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ige)", () => {
		expect(p.parse("Ala Ikọlosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ige)", () => {
		expect(p.parse("Ala Ịgaletiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ige)", () => {
		expect(p.parse("Ala Efesọsị 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ige)", () => {
		expect(p.parse("Ala Ifilipayị 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ige)", () => {
		expect(p.parse("1 Ala Ịtẹsalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ala Ịtẹsalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ige)", () => {
		expect(p.parse("2 Ala Ịtẹsalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ala Ịtẹsalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ige)", () => {
		expect(p.parse("1 Itimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Itimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ige)", () => {
		expect(p.parse("2 Itimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Itimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ige)", () => {
		expect(p.parse("Ịtayịtọsị 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ige)", () => {
		expect(p.parse("Ifilimọn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ige)", () => {
		expect(p.parse("Ala Ihiburu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ige)", () => {
		expect(p.parse("Ijemsi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ige)", () => {
		expect(p.parse("1 Ipita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ipita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ige)", () => {
		expect(p.parse("2 Ipita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ipita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ige)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ige)", () => {
		expect(p.parse("iJudu 1:1").osis()).toEqual("Jude.1.1");
	});
});
