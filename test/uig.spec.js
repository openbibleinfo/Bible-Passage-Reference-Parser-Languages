"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/uig.js";

describe("Localized book Gen (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (uig)", () => {
		expect(p.parse("ئالەمنىڭ يارىتىلىشى 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Аләмниң яритилиши 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (uig)", () => {
		expect(p.parse("Мисирдин чиқиш 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("مىسىردىن چىقىش 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (uig)", () => {
		expect(p.parse("لاۋىيلار 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (uig)", () => {
		expect(p.parse("چۆلدە 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (uig)", () => {
		expect(p.parse("مەرسىيەلەر 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (uig)", () => {
		expect(p.parse("Вәһийләр 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ۋەھىيلەر 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (uig)", () => {
		expect(p.parse("قانۇننىڭ تەكرارى 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (uig)", () => {
		expect(p.parse("يوشۇۋا 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (uig)", () => {
		expect(p.parse("سەردارلار 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (uig)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رۇت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (uig)", () => {
		expect(p.parse("يەشايا 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (uig)", () => {
		expect(p.parse("سامۇئىل بىرىنچى قىسىم 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (uig)", () => {
		expect(p.parse("سامۇئىل ئىككىنچى قىسىم 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (uig)", () => {
		expect(p.parse("پادىشاھلار بىرىنچى قىسىم 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (uig)", () => {
		expect(p.parse("پادىشاھلار ئىككىنچى قىسىم 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (uig)", () => {
		expect(p.parse("بىرىنچى قىسىم 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (uig)", () => {
		expect(p.parse("ئىككىنچى قىسىم 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (uig)", () => {
		expect(p.parse("ئەزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (uig)", () => {
		expect(p.parse("نەخەمىيا 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (uig)", () => {
		expect(p.parse("ئەستىر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Әстир 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Әст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (uig)", () => {
		expect(p.parse("ئايۇپ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (uig)", () => {
		expect(p.parse("زەبۇر 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (uig)", () => {
		expect(p.parse("پەند-نەسىھەتلەر 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (uig)", () => {
		expect(p.parse("ھېكمەتلەر 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (uig)", () => {
		expect(p.parse("نەزمىلەر شاھى 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (uig)", () => {
		expect(p.parse("يەرەمىيا 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (uig)", () => {
		expect(p.parse("ئەزەكىئەل 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (uig)", () => {
		expect(p.parse("دانىيال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (uig)", () => {
		expect(p.parse("ھوشىيا 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (uig)", () => {
		expect(p.parse("يوئېل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (uig)", () => {
		expect(p.parse("ئاموس 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (uig)", () => {
		expect(p.parse("ئوبادىيا 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (uig)", () => {
		expect(p.parse("يۇنۇس 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (uig)", () => {
		expect(p.parse("مىكاھ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (uig)", () => {
		expect(p.parse("ناھۇم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (uig)", () => {
		expect(p.parse("خاباقۇق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (uig)", () => {
		expect(p.parse("زىفانىيا 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (uig)", () => {
		expect(p.parse("ھاگاي 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (uig)", () => {
		expect(p.parse("زىكىرىيا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (uig)", () => {
		expect(p.parse("مالاكى 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (uig)", () => {
		expect(p.parse("مەتتا بايان قىلغان خۇش خەۋەر 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мәтта баян қилған Хуш Хәвәр 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (uig)", () => {
		expect(p.parse("ماركۇس بايان قىلغان خۇش خەۋەر 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Маркус баян қилған Хуш Хәвәр 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (uig)", () => {
		expect(p.parse("لۇقا بايان قىلغان خۇش خەۋەر 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луқа баян қилған Хуш Хәвәр 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (uig)", () => {
		expect(p.parse("يۇھاننا يازغان بىرىنچى خەت 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Юһанна язған биринчи хәт 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (uig)", () => {
		expect(p.parse("يۇھاننا يازغان ئىككىنچى خەت 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Юһанна язған иккинчи хәт 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (uig)", () => {
		expect(p.parse("يۇھاننا يازغان ئۈچىنچى خەت 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Юһанна язған үчинчи хәт 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (uig)", () => {
		expect(p.parse("يۇھاننا بايان قىلغان خۇش خەۋەر 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юһанна баян қилған Хуш Хәвәр 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (uig)", () => {
		expect(p.parse("Һәзрити Әйса әлчилириниң паалийәтлири 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ئەلچىلەرنىڭ پائالىيەتلىرى 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (uig)", () => {
		expect(p.parse("Римлиқларға йезилған хәт 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رىملىقلارغا يېزىلغان خەت 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (uig)", () => {
		expect(p.parse("Коринтлиқларға йезилған биринчи хәт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كورىنتلىقلارغا يېزىلغان بىرىنچى خەت 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (uig)", () => {
		expect(p.parse("كورىنتلىقلارغا يېزىلغان ئىككىنچى خەت 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Коринтлиқларға йезилған иккинчи хәт 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (uig)", () => {
		expect(p.parse("Колосилиқларға йезилған хәт 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كولوسىلىقلارغا يېزىلغان خەت 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (uig)", () => {
		expect(p.parse("گالاتىيالىقلارغا يېزىلغان خەت 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатиялиқларға йезилған хәт 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (uig)", () => {
		expect(p.parse("ئەفەسلىكلەرگە يېزىلغان خەت 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Әфәсликләргә йезилған хәт 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (uig)", () => {
		expect(p.parse("Филипиликләргә йезилған хәт 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فىلىپىلىكلەرگە يېزىلغان خەت 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (uig)", () => {
		expect(p.parse("Салоникилиқларға йезилған биринчи хәт 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سالونىكالىقلارغا يېزىلغان بىرىنچى خەت 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (uig)", () => {
		expect(p.parse("سالونىكالىقلارغا يېزىلغان ئىككىنچى خەت 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Салоникилиқларға йезилған иккинчи хәт 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (uig)", () => {
		expect(p.parse("Тимотийға йезилған биринчи хәт 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تىموتىيغا يېزىلغان بىرىنچى خەت 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (uig)", () => {
		expect(p.parse("تىموتىيغا يېزىلغان ئىككىنچى خەت 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Тимотийға йезилған иккинчи хәт 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (uig)", () => {
		expect(p.parse("Титусқа йезилған хәт 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تىتۇسقا يېزىلغان خەت 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (uig)", () => {
		expect(p.parse("Филимунға йезилған хәт 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فىلىمۇنغا يېزىلغان خەت 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (uig)", () => {
		expect(p.parse("ئىبرانىيلارغا يېزىلغان خەت 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибранийларға йезилған хәт 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (uig)", () => {
		expect(p.parse("ياقۇپ يازغان خەت 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яқуп язған хәт 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (uig)", () => {
		expect(p.parse("پېترۇس يازغان بىرىنچى خەت 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Петрус язған биринчи хәт 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (uig)", () => {
		expect(p.parse("پېترۇس يازغان ئىككىنچى خەت 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Петрус язған иккинчи хәт 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (uig)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (uig)", () => {
		expect(p.parse("يەھۇدا يازغان خەت 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Йәһуда язған хәт 1:1").osis()).toEqual("Jude.1.1");
	});
});
