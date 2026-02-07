"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dru.js";

describe("Localized book Gen (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dru)", () => {
		expect(p.parse("Tabekacane 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dru)", () => {
		expect(p.parse("Takatwasane Izipiti 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dru)", () => {
		expect(p.parse("Lrivi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dru)", () => {
		expect(p.parse("Taasipane 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (dru)", () => {
		expect(p.parse("Silringau 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dru)", () => {
		expect(p.parse("Nipadrelane 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dru)", () => {
		expect(p.parse("Tapelane Drekase 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (dru)", () => {
		expect(p.parse("Yesua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (dru)", () => {
		expect(p.parse("Tamagarange 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (dru)", () => {
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (dru)", () => {
		expect(p.parse("Isaiya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dru)", () => {
		expect(p.parse("1 Samuile 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuile 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dru)", () => {
		expect(p.parse("2 Samuile 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuile 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dru)", () => {
		expect(p.parse("1 Latalialalai 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Latalialalai 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dru)", () => {
		expect(p.parse("2 Latalialalai 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Latalialalai 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dru)", () => {
		expect(p.parse("1 Lacaili 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Lacaili 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dru)", () => {
		expect(p.parse("2 Lacaili 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Lacaili 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (dru)", () => {
		expect(p.parse("Izera 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (dru)", () => {
		expect(p.parse("Nihimi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (dru)", () => {
		expect(p.parse("Isetire 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (dru)", () => {
		expect(p.parse("Yubu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (dru)", () => {
		expect(p.parse("Lasenai 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (dru)", () => {
		expect(p.parse("Kavagavagane 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (dru)", () => {
		expect(p.parse("Wabulru 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (dru)", () => {
		expect(p.parse("Senai 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (dru)", () => {
		expect(p.parse("Yerimia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (dru)", () => {
		expect(p.parse("Izikile 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (dru)", () => {
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (dru)", () => {
		expect(p.parse("Husia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (dru)", () => {
		expect(p.parse("Yuile 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (dru)", () => {
		expect(p.parse("Amuse 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (dru)", () => {
		expect(p.parse("Ubadaiya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (dru)", () => {
		expect(p.parse("Yuna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (dru)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (dru)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (dru)", () => {
		expect(p.parse("Habakuke 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (dru)", () => {
		expect(p.parse("Zipania 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (dru)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (dru)", () => {
		expect(p.parse("Zakaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (dru)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dru)", () => {
		expect(p.parse("Matai 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dru)", () => {
		expect(p.parse("Maruku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dru)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dru)", () => {
		expect(p.parse("1 Yuhani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dru)", () => {
		expect(p.parse("2 Yuhani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dru)", () => {
		expect(p.parse("3 Yuhani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhani 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dru)", () => {
		expect(p.parse("Yuhani 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dru)", () => {
		expect(p.parse("Nisikawlane 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dru)", () => {
		expect(p.parse("Ruma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dru)", () => {
		expect(p.parse("1 Kurintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurintu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dru)", () => {
		expect(p.parse("2 Kurintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurintu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dru)", () => {
		expect(p.parse("Kulusia 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dru)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dru)", () => {
		expect(p.parse("Ipisu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dru)", () => {
		expect(p.parse("Pilripi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dru)", () => {
		expect(p.parse("1 Tisaruniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tisaruniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dru)", () => {
		expect(p.parse("2 Tisaruniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tisaruniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dru)", () => {
		expect(p.parse("1 Timuthi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timuthi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dru)", () => {
		expect(p.parse("2 Timuthi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timuthi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dru)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dru)", () => {
		expect(p.parse("Pilrimunge 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dru)", () => {
		expect(p.parse("Hiburu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dru)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dru)", () => {
		expect(p.parse("1 Pitiru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitiru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dru)", () => {
		expect(p.parse("2 Pitiru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitiru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dru)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (dru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dru)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuhani - 3 Yuhani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuhani – 3 Yuhani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuhani — 3 Yuhani").osis()).toEqual("1John.1-3John.1");
	});
});
