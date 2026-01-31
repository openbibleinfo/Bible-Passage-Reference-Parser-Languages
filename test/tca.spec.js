"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tca.js";

describe("Localized book Gen (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tca)", () => {
		expect(p.parse("Naanearü ügüchiga 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tca)", () => {
		expect(p.parse("Ínachoxü̃xü̃chiga 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Éx. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tca)", () => {
		expect(p.parse("Lebítanüxü̃arü puracüchiga 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tca)", () => {
		expect(p.parse("Iraétanüxü̃arü muxchiga 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tca)", () => {
		expect(p.parse("Auxexü̃chiga 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lm. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tca)", () => {
		expect(p.parse("Yema Cuáü̃ nüxü̃ dauxü̃ i yixcüra tá ngupetüxü̃chiga 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tca)", () => {
		expect(p.parse("Wenaxarü naxümatü ga Tupanaarü mugü 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tca)", () => {
		expect(p.parse("Yochué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tca)", () => {
		expect(p.parse("Ãẽ̱xgacügü ga guxchaxü̃güarü mexẽxẽruü̃gü 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jue. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tca)", () => {
		expect(p.parse("Rt. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rux 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tca)", () => {
		expect(p.parse("Ichaía 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tca)", () => {
		expect(p.parse("1 Chamué 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Chamué 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. S. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Chamué 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ S. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Chamué 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. S. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tca)", () => {
		expect(p.parse("2 Chamué 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Chamué 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. S. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Norü Chamué 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Norü S. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Norü. Chamué 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Norü. S. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Kgs (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tca)", () => {
		expect(p.parse("2 taxre ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. taxre ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. R. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Norü taxre ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Norü R. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Norü. taxre ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Norü. R. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Chr (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tca)", () => {
		expect(p.parse("2 taxre ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. taxre ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Norü taxre ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Norü Cr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Norü. taxre ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Norü. Cr. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tca)", () => {
		expect(p.parse("1 ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Cr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga to ga popera ga ãẽ̱xgacügüchiga ümatüxü̃ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Cr. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Kgs (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tca)", () => {
		expect(p.parse("1 ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. R. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ R. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga popera ga ãẽ̱xgacügüchiga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. R. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book Ezra (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tca)", () => {
		expect(p.parse("Édra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tca)", () => {
		expect(p.parse("Neemía 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tca)", () => {
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ité 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tca)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yox 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tca)", () => {
		expect(p.parse("Wiyaegü 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tca)", () => {
		expect(p.parse("Ucu̱xẽgüchiga 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tca)", () => {
		expect(p.parse("Ngu̱xẽẽtaeruü̃arü ore 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tca)", () => {
		expect(p.parse("Charumóü̃arü wiyae 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cnt. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tca)", () => {
		expect(p.parse("Yeremía 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tca)", () => {
		expect(p.parse("Echequié 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tca)", () => {
		expect(p.parse("Danié 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tca)", () => {
		expect(p.parse("Ochéa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tca)", () => {
		expect(p.parse("Jl. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoé 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tca)", () => {
		expect(p.parse("Amúx 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tca)", () => {
		expect(p.parse("Abdía 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tca)", () => {
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoná 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tca)", () => {
		expect(p.parse("Miquéa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tca)", () => {
		expect(p.parse("Naúü̃ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tca)", () => {
		expect(p.parse("Abacú 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tca)", () => {
		expect(p.parse("Chofonía 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tca)", () => {
		expect(p.parse("Aguéu 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tca)", () => {
		expect(p.parse("Chacaría 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tca)", () => {
		expect(p.parse("Maraquía 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tca)", () => {
		expect(p.parse("Ore i mexü̃ ga Matéu ümatüxü̃ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tca)", () => {
		expect(p.parse("Ore i mexü̃ ga Márcu ümatüxü̃ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tca)", () => {
		expect(p.parse("Ore i mexü̃ ga Luca ümatüxü̃ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tca)", () => {
		expect(p.parse("Norü tomaepü̱x ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tca)", () => {
		expect(p.parse("2 taxre ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. taxre ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Norü taxre ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Norü Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Norü. taxre ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Norü. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 1John (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tca)", () => {
		expect(p.parse("1 ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga popera ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tca)", () => {
		expect(p.parse("Ore i mexü̃ ga Cuáü̃ ümatüxü̃ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tca)", () => {
		expect(p.parse("Ngechuchuarü ngúexü̃gü ga yamugüxü̃arü puracüchiga 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tca)", () => {
		expect(p.parse("Popera ga Rómawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tca)", () => {
		expect(p.parse("2 taxre ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. taxre ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Norü taxre ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Norü Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Norü. taxre ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Norü. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tca)", () => {
		expect(p.parse("1 ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga popera ga Coríntiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Col (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tca)", () => {
		expect(p.parse("Popera ga Coróchawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tca)", () => {
		expect(p.parse("Popera ga Gárataanewa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tca)", () => {
		expect(p.parse("Popera ga Epéchiuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tca)", () => {
		expect(p.parse("Popera ga Pirípuwa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tca)", () => {
		expect(p.parse("2 taxre ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. taxre ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Norü taxre ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Norü Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Norü. taxre ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Norü. Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tca)", () => {
		expect(p.parse("1 ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga popera ga Techarónicawa yexmagüxü̃ ga yaxõgüxü̃tanüwa namuxü̃ ga Pauru 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tca)", () => {
		expect(p.parse("2 taxre ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. taxre ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Norü taxre ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Norü Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Norü. taxre ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Norü. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tca)", () => {
		expect(p.parse("1 ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga popera ga Timutéuca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tca)", () => {
		expect(p.parse("Popera ga Títoca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tca)", () => {
		expect(p.parse("Popera ga Filemúü̃ca̱x naxümatüxü̃ ga Pauru 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tca)", () => {
		expect(p.parse("Popera ga Yudíugü ga yaxõgüxü̃ca̱x ümatüxü̃ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tca)", () => {
		expect(p.parse("Popera ga Chantiágu ümatüxü̃ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tca)", () => {
		expect(p.parse("2 taxre ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. taxre ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Norü taxre ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Norü Pe. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Norü. taxre ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Norü. Pe. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tca)", () => {
		expect(p.parse("1 ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Nüxíraxü̃xü̃ Pe. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. ga popera ga Pedru ümatüxü̃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Nüxíraxü̃xü̃. Pe. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (tca)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tca)", () => {
		expect(p.parse("Popera ga Yúda ümatüxü̃ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
