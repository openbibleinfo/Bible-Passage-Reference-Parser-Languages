"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sus.js";

describe("Localized book Gen (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sus)", () => {
		expect(p.parse("Fe Fɔlɔ Fɔlɛ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("قْلّ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Fɔl 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("قْل 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sus)", () => {
		expect(p.parse("Yɛtɛ sɔtɔɛ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("يّتّ سْتْي 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Yɛt 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("يّت 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sus)", () => {
		expect(p.parse("Lewi Sɛrɛxɛdubɛ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لٍوِ سّرّشّدُبّ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لٍو 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sus)", () => {
		expect(p.parse("Kɔnti tife 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("كْنتِ تِقٍ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kɔn 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("كْن 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sus)", () => {
		expect(p.parse("عَننَبِ يٍرٍ مِ قِرِن ندٍ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentations 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("2Ye 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("٢يٍ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sus)", () => {
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("وَشَيِ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("وَش 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sus)", () => {
		expect(p.parse("Masenyi Dɔnxɔɛ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("مَسٍنيِ دْنشْي 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dɔn 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("دْن 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sus)", () => {
		expect(p.parse("Yosuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يٌسُوٍ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يٌس 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sus)", () => {
		expect(p.parse("كِيتِسَيٍ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kiitisae 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kit 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("كِت 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sus)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رُتِ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رُت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sus)", () => {
		expect(p.parse("عَننَبِ عٍسَيِ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Annabi Esayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("عٍسَ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sus)", () => {
		expect(p.parse("Samuweli I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سَمُوٍلِ ١ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Sam I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سَم١ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sus)", () => {
		expect(p.parse("Samuweli II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سَمُوٍلِ ٢ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sam II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سَم٢ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sus)", () => {
		expect(p.parse("عِسِرَيِلَ مَنفّيٍ ١ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Isirayila Mangɛe I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Man I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("مَن١ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sus)", () => {
		expect(p.parse("عِسِرَيِلَ مَنفّيٍ ٢ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Isirayila Mangɛe II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Man II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("مَن٢ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sus)", () => {
		expect(p.parse("يُدَيَ مَنفّيٍ ١ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Yudaya Mangɛe I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ym I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("يم١ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sus)", () => {
		expect(p.parse("Yudaya Mangɛe II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("يُدَيَ مَنفّيٍ ٢ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ym II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("يم٢ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sus)", () => {
		expect(p.parse("عَننَبِ عٍسِدِرَ سِ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Annabi Esidirasi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عٍسِ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sus)", () => {
		expect(p.parse("عَننَبِ نٍهٍمِ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Annabi Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نٍه 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sus)", () => {
		expect(p.parse("عٍسِتَ شَ تَرُشُي 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esita xa Taruxui 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("عٍست 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sus)", () => {
		expect(p.parse("عَيُبَ شَ تَرُشُِ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("عَيُ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yub 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sus)", () => {
		expect(p.parse("Yabura Dawuda 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("يَبُرَ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Yab 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("يَب 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sus)", () => {
		expect(p.parse("Proverbs 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("تَالِيٍ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Taa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("تَا 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sus)", () => {
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("كَوَندِلَ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kaw 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("كَو 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sus)", () => {
		expect(p.parse("Song of Songs 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("سُوكِ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Suu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("سُو 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sus)", () => {
		expect(p.parse("عَننَبِ يٍرٍ مِ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Annabi Yeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("يٍر 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sus)", () => {
		expect(p.parse("عَننَبِ عٍسٍكِيٍلِ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("عٍسٍ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ese 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sus)", () => {
		expect(p.parse("عَننَبِ دَنِيّلِ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel (Hebrew) 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دَن 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sus)", () => {
		expect(p.parse("عَننَبِ هٌسٍ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هٌس 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sus)", () => {
		expect(p.parse("عَننَبِ يٌوٍلِ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يٌو 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sus)", () => {
		expect(p.parse("عَننَبِ عَمٌسِ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عَمٌ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sus)", () => {
		expect(p.parse("عَننَبِ عَبَدِيَسِ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عَبَ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sus)", () => {
		expect(p.parse("عَننَبِ يُنُسَ تٌء١ عَلَ شَ مَسٍنيِ عَننَبِ يُنُسَ بّ تٌء٢ يُنُسَ تٌء٣ يُن 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yunusa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يُن 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sus)", () => {
		expect(p.parse("عَننَبِ مِكَ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مِك 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sus)", () => {
		expect(p.parse("عَننَبِ نَشُمُ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nax 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نَش 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sus)", () => {
		expect(p.parse("عَننَبِ هَبَكُكُ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("هَب 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sus)", () => {
		expect(p.parse("عَننَبِ سٌقٌنِ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("سٌق 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sus)", () => {
		expect(p.parse("عَننَبِ هَفٍ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("هَف 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sus)", () => {
		expect(p.parse("عَننَبِ سَكَرِ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("سَك 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sus)", () => {
		expect(p.parse("عَننَبِ مَلَكِ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مَل 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sus)", () => {
		expect(p.parse("Lingjili Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتِي 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sus)", () => {
		expect(p.parse("Maraki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرَكِ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَر 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sus)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُكِ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sus)", () => {
		expect(p.parse("يَيَ عِ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يَ عِ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sus)", () => {
		expect(p.parse("يَيَ عِِ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يَ عِِ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sus)", () => {
		expect(p.parse("يَيَ عِِِ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يَ عِِِ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sus)", () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sus)", () => {
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sus)", () => {
		expect(p.parse("Yaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يَيَ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يَي 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sus)", () => {
		expect(p.parse("Taruxui 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("تَرُشُي 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("تَر 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sus)", () => {
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رْ مَ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رْ م 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sus)", () => {
		expect(p.parse("كٌرِنتِ عِ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Korinti I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كٌ ١ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sus)", () => {
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sus)", () => {
		expect(p.parse("كٌرِنتِ عِِ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كٌ عِِ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sus)", () => {
		expect(p.parse("Colossians 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كْلْسِ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sus)", () => {
		expect(p.parse("Galatians 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("فَلَتِ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("فَل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sus)", () => {
		expect(p.parse("Ephesians 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("عٍقّسّ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sus)", () => {
		expect(p.parse("Philippians 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("قِلِثِ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("قِل 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sus)", () => {
		expect(p.parse("1 Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sus)", () => {
		expect(p.parse("2 Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sus)", () => {
		expect(p.parse("تّسَلٌنِكِ عِ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تّ عِ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sus)", () => {
		expect(p.parse("تّسَلٌنِكِ عِِ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تّ عِِ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sus)", () => {
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sus)", () => {
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sus)", () => {
		expect(p.parse("تِمٌتٍ عِ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تِ عِ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sus)", () => {
		expect(p.parse("تِمٌتٍ عِِ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تِ عِِ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sus)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِتٌ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِت 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sus)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("قِلٍمٌن 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("قِم 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sus)", () => {
		expect(p.parse("Hebrews 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عٍبُرُ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عٍبُ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sus)", () => {
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَكِ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَك 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sus)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sus)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sus)", () => {
		expect(p.parse("ثِيّرِ عِ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ثِ عِ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sus)", () => {
		expect(p.parse("ثِيّرِ عِِ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ثِ عِِ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sus)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يُدٍ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يُد 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (sus)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (sus)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (sus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sus)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يَيَ عِ - يَيَ عِِِ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يَيَ عِ – يَيَ عِِِ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يَيَ عِ — يَيَ عِِِ").osis()).toEqual("1John.1-3John.1");
	});
});
