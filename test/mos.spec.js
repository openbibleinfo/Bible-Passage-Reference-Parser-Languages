"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mos.js";

describe("Localized book Gen (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mos)", () => {
		expect(p.parse("Sɩngre 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sɩngrẽ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sɩng 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bs 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mos)", () => {
		expect(p.parse("Ezipt yiib kibare 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Yikri 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Yik 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ey 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mos)", () => {
		expect(p.parse("Maan-kʋʋr sebre 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Maan‑kʋʋre 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mos)", () => {
		expect(p.parse("Sõadga 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sõdbo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sõd 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ss 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (mos)", () => {
		expect(p.parse("Sira biiga 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Si 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (mos)", () => {
		expect(p.parse("Yam vẽenem 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Yv 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mos)", () => {
		expect(p.parse("A Zeremi wiisgu 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kʋʋr yɩɩla 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Wiis 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ky 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (mos)", () => {
		expect(p.parse("A zeremi seb bila 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Zrsb 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mos)", () => {
		expect(p.parse("Yɛl pukr sebre 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vẽnegre 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vẽn 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mos)", () => {
		expect(p.parse("Yaoolem 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tõodo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yao 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tõ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mos)", () => {
		expect(p.parse("A Zozoe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zozuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mos)", () => {
		expect(p.parse("Bʋ-kaoodba 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bʋ‑kaoodba 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bk 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bʋ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mos)", () => {
		expect(p.parse("A Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mos)", () => {
		expect(p.parse("A izayi sebre 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("A Ezayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mos)", () => {
		expect(p.parse("1 Sãmwɛlle 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sãmwɛlle 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mos)", () => {
		expect(p.parse("2 Sãmwɛlle 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sãmwɛlle 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mos)", () => {
		expect(p.parse("1Samwɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sãm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mos)", () => {
		expect(p.parse("2Samwɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sãm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mos)", () => {
		expect(p.parse("1 Rĩm-dãmbã 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rĩm-dãmbã 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mos)", () => {
		expect(p.parse("1Dĩm Dãmba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Dĩm 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Rĩm 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mos)", () => {
		expect(p.parse("2 Rĩm-dãmba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rĩm-dãmba 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mos)", () => {
		expect(p.parse("2Dĩm Dãmba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Dĩm 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Rĩm 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mos)", () => {
		expect(p.parse("1 Kibayã 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kibayã 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mos)", () => {
		expect(p.parse("2 Kibayã 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kibayã 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mos)", () => {
		expect(p.parse("1Na-rot 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Kib 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Nar 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mos)", () => {
		expect(p.parse("2Na-rot 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Kib 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Nar 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mos)", () => {
		expect(p.parse("A Ɛsdraase 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mos)", () => {
		expect(p.parse("A Neemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neem 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mos)", () => {
		expect(p.parse("A Ɛstɛɛre 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mos)", () => {
		expect(p.parse("A. Zoobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Zoob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Zob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mos)", () => {
		expect(p.parse("Yel‑bũna 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Yelbũna 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mos)", () => {
		expect(p.parse("Koɛɛg Soaba 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kowelɛt 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koɛɛ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ko 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mos)", () => {
		expect(p.parse("Yɩɩn-noog menga 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("A Salmo yɩɩla 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Salm 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Yɩn 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mos)", () => {
		expect(p.parse("Yɩɩn‑sõamyã 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Yɩɩla 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Yɩɩn 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Yɩ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mos)", () => {
		expect(p.parse("A Zeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mos)", () => {
		expect(p.parse("A Ezekɩyɛlle 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiyɛl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mos)", () => {
		expect(p.parse("A Dãniyɛlle 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dãn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mos)", () => {
		expect(p.parse("A Ooze 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ooz 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oze 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mos)", () => {
		expect(p.parse("A Zowɛlle 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zowɛl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zow 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mos)", () => {
		expect(p.parse("A Amoose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mos)", () => {
		expect(p.parse("A Abdyaase 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("A abdiyas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mos)", () => {
		expect(p.parse("A Zonaase 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zon 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zo 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mos)", () => {
		expect(p.parse("A Miise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miis 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mos)", () => {
		expect(p.parse("A Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nawum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mos)", () => {
		expect(p.parse("A Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mos)", () => {
		expect(p.parse("A Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mos)", () => {
		expect(p.parse("A Aaze 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aaz 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aze 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Az 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mos)", () => {
		expect(p.parse("A Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zki 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mos)", () => {
		expect(p.parse("A Malasɩ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ml 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mos)", () => {
		expect(p.parse("A Matye koe‑noogo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("A Matiye Sõng 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mos)", () => {
		expect(p.parse("A Mark koe‑noogo 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("A Mark Sõng 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mos)", () => {
		expect(p.parse("A Luk koe‑noogo 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("A Luk Sõng 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mos)", () => {
		expect(p.parse("1Zã 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mos)", () => {
		expect(p.parse("2Zã 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mos)", () => {
		expect(p.parse("3 Zã 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Zã 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mos)", () => {
		expect(p.parse("A Zã koe‑noogo 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("A Zã Sõng 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zã 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mos)", () => {
		expect(p.parse("1 Zã 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zã 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mos)", () => {
		expect(p.parse("2 Zã 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zã 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mos)", () => {
		expect(p.parse("Tẽn‑tʋmdbã tʋʋmã 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tʋʋm-tʋmdba vɩɩm 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tʋʋma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tʋʋm 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tv 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mos)", () => {
		expect(p.parse("Rom Dãmba 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom rãmba 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom‑dãmbã 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mos)", () => {
		expect(p.parse("1Korẽnt Rãmba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mos)", () => {
		expect(p.parse("2 Korẽnt‑rãmbã sebre 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korẽnt rãmba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korẽnt‑rãmbã sebre 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korẽnt rãmba 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mos)", () => {
		expect(p.parse("1 Korẽnt rãmba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korẽnt‑rãmbã 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korẽnt rãmba 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korẽnt‑rãmbã 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mos)", () => {
		expect(p.parse("2Korẽnt Rãmba 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mos)", () => {
		expect(p.parse("Koloos‑rãmba 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosẽ rãmbã 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolos Rãmba 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mos)", () => {
		expect(p.parse("Galat Rãmba 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat‑rãmba 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mos)", () => {
		expect(p.parse("Efɛɛs rãmba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛɛs‑rãmba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛɛz Rãmba 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mos)", () => {
		expect(p.parse("Filip Tẽng Rãmba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip rãmba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip‑rãmba 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mos)", () => {
		expect(p.parse("1 Tesalonik rãmba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonik‑rãmba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik rãmba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik‑rãmba 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mos)", () => {
		expect(p.parse("2 Tesalonik rãmba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonik‑rãmba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik rãmba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik‑rãmba 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mos)", () => {
		expect(p.parse("1Tesalonik Rãmba 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mos)", () => {
		expect(p.parse("2Tesalonik Rãmba 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mos)", () => {
		expect(p.parse("1 Tɩmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tɩmote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mos)", () => {
		expect(p.parse("2 Tɩmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tɩmote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mos)", () => {
		expect(p.parse("1Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tɩm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tɩ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mos)", () => {
		expect(p.parse("2Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tɩm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tɩ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mos)", () => {
		expect(p.parse("A Titi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("A Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mos)", () => {
		expect(p.parse("A Filemo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("A Fɩlmo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fɩlmo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fɩl 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mos)", () => {
		expect(p.parse("Ebre rãmba 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebre‑rãmba 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebre 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mos)", () => {
		expect(p.parse("Zake 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mos)", () => {
		expect(p.parse("1 Pɩyɛɛre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pɩyɛɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩyɛɛre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩyɛɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mos)", () => {
		expect(p.parse("2 Pɩyɛɛre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pɩyɛɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩyɛɛre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩyɛɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mos)", () => {
		expect(p.parse("1Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pɩy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mos)", () => {
		expect(p.parse("2Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pɩy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mos)", () => {
		expect(p.parse("A Zʋʋde 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zɩɩd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zuud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zʋʋ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zɩ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (mos)", () => {
		expect(p.parse("Tobi 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (mos)", () => {
		expect(p.parse("Zudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Zt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (mos)", () => {
		expect(p.parse("A Barʋk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Ba 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (mos)", () => {
		expect(p.parse("1Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1M 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (mos)", () => {
		expect(p.parse("2Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2M 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Parser helper should handle book ranges (mos)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mos)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Zã - 3 Zã").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Zã – 3 Zã").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Zã — 3 Zã").osis()).toEqual("1John.1-3John.1");
	});
});
