"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sin.js";

describe("Localized book Gen (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sin)", () => {
		expect(p.parse("උත්පත්ති 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("උත් 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sin)", () => {
		expect(p.parse("නික්මයාම 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("නික්ම 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sin)", () => {
		expect(p.parse("ලෙවී ව්‍යවස්ථාව 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ලෙවී කථාව 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ලෙවී 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sin)", () => {
		expect(p.parse("ගණන් කථාව 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ගණන් 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (sin)", () => {
		expect(p.parse("උපදේශකයා හෙවත් සිරාක් 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("සිරාක් 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (sin)", () => {
		expect(p.parse("සලමොන්ගේ ප්‍රඥාව 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("සලමො 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sin)", () => {
		expect(p.parse("විලාප ගී 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("විලාප 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sin)", () => {
		expect(p.parse("එළිදරව්ව 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("එළිදරවු 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("එළිදරව් 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("එළිද 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("එළි 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sin)", () => {
		expect(p.parse("ද්විතීය නීති සංග්‍රහය 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ද්වීතීය කථාව 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ද්වි.නී. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ද්වී.නි. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sin)", () => {
		expect(p.parse("ජෝෂුවා 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("යෝෂුවා 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ජෝෂු 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("යෝෂු 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sin)", () => {
		expect(p.parse("විනිශ්චයකාරයන්ගේ පොත 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("වීරාවලිය 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("විනිශ් 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("වීරා 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sin)", () => {
		expect(p.parse("රූත්ගේ කථාව 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("රූත් 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sin)", () => {
		expect(p.parse("යෙසායා 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("යෙසා 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sin)", () => {
		expect(p.parse("1 සාමුවෙල් 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 සාමු 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. සාමුවෙල් 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. සාමු 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sin)", () => {
		expect(p.parse("2 සාමුවෙල් 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 සාමු 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. සාමුවෙල් 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. සාමු 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sin)", () => {
		expect(p.parse("1 රාජාවලියේ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 රාජාවලිය 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 රාජා 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. රාජාවලියේ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. රාජාවලිය 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. රාජා 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sin)", () => {
		expect(p.parse("2 රාජාවලියේ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 රාජාවලිය 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 රාජා 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. රාජාවලියේ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. රාජාවලිය 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. රාජා 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Chr (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sin)", () => {
		expect(p.parse("2 1 වංශාවලිය 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 වංශාවලියේ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 වංශාවලිය 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 වංශා 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. 1 වංශාවලිය 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. වංශාවලියේ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. වංශාවලිය 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. වංශා 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sin)", () => {
		expect(p.parse("1 වංශාවලියේ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 වංශාවලිය 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 වංශා 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. වංශාවලියේ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. වංශාවලිය 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. වංශා 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sin)", () => {
		expect(p.parse("එස්රා 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sin)", () => {
		expect(p.parse("නෙහෙමියා 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("නෙහෙ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sin)", () => {
		expect(p.parse("ජෝබ් 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sin)", () => {
		expect(p.parse("ගීතාවලිය 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ගීතා 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sin)", () => {
		expect(p.parse("හිතෝපදේශ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("හිතෝ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sin)", () => {
		expect(p.parse("ධර්මදේශකයා 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ධර්ම 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sin)", () => {
		expect(p.parse("ප්‍රේම ගී 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ප්‍රේම 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sin)", () => {
		expect(p.parse("ජෙරෙමියා 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ජෙරමියා 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ජෙර 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sin)", () => {
		expect(p.parse("එසකියෙල්ගේ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("එසකියෙල් 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("එසකි 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sin)", () => {
		expect(p.parse("දානියෙල් 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("දානි 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sin)", () => {
		expect(p.parse("හොසියා 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("හොසි 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sin)", () => {
		expect(p.parse("ජෝවෙල් 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ජෝවෙ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sin)", () => {
		expect(p.parse("අාමොස් 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ආමොස් 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ආමො 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sin)", () => {
		expect(p.parse("ඔබදියා 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ඔබදි 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sin)", () => {
		expect(p.parse("ජෝනා 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sin)", () => {
		expect(p.parse("මීකා 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sin)", () => {
		expect(p.parse("නාහුම් 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("නාහූම් 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sin)", () => {
		expect(p.parse("හබක්කුක් 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("හබ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sin)", () => {
		expect(p.parse("ශෙපනියා 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ශෙප 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sin)", () => {
		expect(p.parse("හග්ගයි 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("හග් 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sin)", () => {
		expect(p.parse("සෙකරියා 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("සෙකරි 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sin)", () => {
		expect(p.parse("මලාකි 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("මලාකී 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sin)", () => {
		expect(p.parse("ශුද්ධවර මතෙව් 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ශු. මතෙව් 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("මතෙව් 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("මතෙ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sin)", () => {
		expect(p.parse("ශුද්ධවර මාක් 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ශු. මාර්ක් 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("මාර්ක් 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("මාක් 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("මාර් 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sin)", () => {
		expect(p.parse("ශුද්ධවර ලූක් 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ශු. ලූක් 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ලූක් 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sin)", () => {
		expect(p.parse("ශුද්ධවර ජොහන් 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ශු. යොහන් 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("යොහන් 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ජොහ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("යොහ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sin)", () => {
		expect(p.parse("1 ජොහන් 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 යොහන් 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ජොහ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 යොහ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ජොහන් 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. යොහන් 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ජොහ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. යොහ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sin)", () => {
		expect(p.parse("2 ජොහන් 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 යොහන් 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ජොහ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 යොහ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ජොහන් 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. යොහන් 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ජොහ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. යොහ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sin)", () => {
		expect(p.parse("3 ජොහන් 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 යොහන් 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ජොහ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 යොහ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ජොහන් 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. යොහන් 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ජොහ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. යොහ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sin)", () => {
		expect(p.parse("අපෝස්තුලුවරුන්ගේ ක්‍රියා 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ක්‍රියා 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sin)", () => {
		expect(p.parse("රෝම හසුන 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("රාේම 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("රෝම 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("රෝ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sin)", () => {
		expect(p.parse("1 කොරින්ති 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 කොරි 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. කොරින්ති 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. කොරි 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sin)", () => {
		expect(p.parse("2 කොරින්ති 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 කොරි 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. කොරින්ති 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. කොරි 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sin)", () => {
		expect(p.parse("කොලොස්සි 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("කොලො 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sin)", () => {
		expect(p.parse("ගලාති 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ගලා 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sin)", () => {
		expect(p.parse("එපීස 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("එපී 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sin)", () => {
		expect(p.parse("පිලිප්පි 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("පිලිප් 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sin)", () => {
		expect(p.parse("1 තෙසලෝනික 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 තෙස 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. තෙසලෝනික 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. තෙස 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sin)", () => {
		expect(p.parse("2 තෙසලෝනික 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 තෙස 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. තෙසලෝනික 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. තෙස 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sin)", () => {
		expect(p.parse("1 තිමෝති 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 තිමෝ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. තිමෝති 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. තිමෝ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sin)", () => {
		expect(p.parse("2 තිමෝති 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 තිමෝ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. තිමෝති 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. තිමෝ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sin)", () => {
		expect(p.parse("තීතස් 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sin)", () => {
		expect(p.parse("පිලෙමොන් 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("පිලෙමො 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("පිලෙ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sin)", () => {
		expect(p.parse("හෙබ්‍රෙව් 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("හෙබ්‍රෙ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sin)", () => {
		expect(p.parse("ජාකොබ් 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("යාකොබ් 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ජාකො 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("යාකො 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sin)", () => {
		expect(p.parse("1 පේතෘස් 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 පේදුරු 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 පේතෘ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 පේදු 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. පේතෘස් 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. පේදුරු 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. පේතෘ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. පේදු 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sin)", () => {
		expect(p.parse("2 පේතෘස් 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 පේදුරු 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 පේතෘ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 පේදු 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. පේතෘස් 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. පේදුරු 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. පේතෘ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. පේදු 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sin)", () => {
		expect(p.parse("යූදස් 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ජූද් 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("යූද් 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (sin)", () => {
		expect(p.parse("තෝබිත් 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (sin)", () => {
		expect(p.parse("ජුදිත් 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (sin)", () => {
		expect(p.parse("බාරුක් 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (sin)", () => {
		expect(p.parse("1 මකබිවරු 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 මකබි 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. මකබිවරු 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. මකබි 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (sin)", () => {
		expect(p.parse("2 මකබිවරු 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 මකබි 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. මකබිවරු 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. මකබි 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sin)", () => {
		expect(p.parse("එස්තර් 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("එස්ත 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (sin)", () => {
		expect(p.parse("1 කොරි 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 යොහ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 පේතෘ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 තිමෝ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 කොරි 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 යොහ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 පේතෘ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 තිමෝ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 ජොහ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 යොහ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("අාමොස් 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("කොලො 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("යාකො 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("යොහ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("යෝෂු 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("යූදස් (යූද්) 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("රාේම 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Parser helper should handle book ranges (sin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sin)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ජොහන් - 3 ජොහන්").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ජොහන් – 3 ජොහන්").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ජොහන් — 3 ජොහන්").osis()).toEqual("1John.1-3John.1");
	});
});
