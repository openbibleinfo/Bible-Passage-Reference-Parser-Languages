"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mww.js";

describe("Localized book Gen (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mww)", () => {
		expect(p.parse("Chiv Keeb 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chivkeeb 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ch.K. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chk 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mww)", () => {
		expect(p.parse("Khiav Dim 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kh.D. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Khd 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mww)", () => {
		expect(p.parse("Levi Tej Kevcai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levis Kevcai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("L.Kc. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lek 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mww)", () => {
		expect(p.parse("Xwm Txheej Taug Kev 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Teev Npe 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("X.Txh. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tnp 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mww)", () => {
		expect(p.parse("Nkauj Quaj Ntsuag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Zaj Nkauj Ntsuag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nk.Nts. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nqn 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mww)", () => {
		expect(p.parse("Qhia Tshwm 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tshwmsim 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Qtsh. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tsm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mww)", () => {
		expect(p.parse("2 Kevcai 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kevcai 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("2 Kev 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kc. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mww)", () => {
		expect(p.parse("Yausuas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yausua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ys. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mww)", () => {
		expect(p.parse("Cov Thawjtswj 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Cov Thawj 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("C.Th. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ctt 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mww)", () => {
		expect(p.parse("Luv 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mww)", () => {
		expect(p.parse("Yaxayas 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yaxaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yxy. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yay 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mww)", () => {
		expect(p.parse("1 Xamuyees 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Xamuyee 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Xam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xamuyees 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xamuyee 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mww)", () => {
		expect(p.parse("2 Xamuyees 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Xamuyee 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Xam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xamuyees 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xamuyee 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mww)", () => {
		expect(p.parse("1Xmy. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mww)", () => {
		expect(p.parse("2Xmy. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mww)", () => {
		expect(p.parse("1Vntx. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mww)", () => {
		expect(p.parse("2Vntx. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mww)", () => {
		expect(p.parse("1 Xwmtxheej Vajntxwv 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Vaj Keeb Kwm 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Xvn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Xwmtxheej Vajntxwv 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Vaj Keeb Kwm 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Xvn 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mww)", () => {
		expect(p.parse("2 Xwmtxheej Vajntxwv 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Vaj Keeb Kwm 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Xvn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Xwmtxheej Vajntxwv 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Vaj Keeb Kwm 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Xvn 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mww)", () => {
		expect(p.parse("1 Vajntxwv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Vnt 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Vajntxwv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Vnt 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mww)", () => {
		expect(p.parse("2 Vajntxwv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Vnt 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Vajntxwv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Vnt 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mww)", () => {
		expect(p.parse("1Vkk. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mww)", () => {
		expect(p.parse("2Vkk. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mww)", () => {
		expect(p.parse("Exalas 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exala 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exl. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exa 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mww)", () => {
		expect(p.parse("Nehemis 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nhm. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mww)", () => {
		expect(p.parse("Exethaws 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Exathaw 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Exth. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ext 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mww)", () => {
		expect(p.parse("Yauj 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yaj 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mww)", () => {
		expect(p.parse("Phau Ntawv Nkauj 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ntawv Nkauj 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nt.Nk. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pnk 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mww)", () => {
		expect(p.parse("Paj Lug 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pajlug 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("P.L. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Paj 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mww)", () => {
		expect(p.parse("Laj Lim Tswvyim 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tej Lus Qhia 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("L.Tsy. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tlq 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mww)", () => {
		expect(p.parse("Xalaumoo Zaj Nkauj 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Xalumoos Tej Nkauj 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Xlm. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Xtn 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mww)", () => {
		expect(p.parse("Yelemis 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yelemi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ylm. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mww)", () => {
		expect(p.parse("Exekees 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Exekhee 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Exkh. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Exk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mww)", () => {
		expect(p.parse("Daniyees 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniyee 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dny. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mww)", () => {
		expect(p.parse("Hauxeyas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hauxeya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hxy. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hau 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mww)", () => {
		expect(p.parse("Yau-Ees 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yau‑ee 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Y‑ee 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yau 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mww)", () => {
		expect(p.parse("Amaus 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amau 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ama 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mww)", () => {
		expect(p.parse("Aunpadiyas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aunpadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aunpy. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aun 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mww)", () => {
		expect(p.parse("Yaunas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yauna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yan 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yn. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mww)", () => {
		expect(p.parse("Mikhas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mkh. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mww)", () => {
		expect(p.parse("Nahus 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nh. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mww)", () => {
		expect(p.parse("Hanpakus 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hanpaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hnpk. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Han 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mww)", () => {
		expect(p.parse("Xefaniyas 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xfny. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mww)", () => {
		expect(p.parse("Hakais 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hak 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hk. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mww)", () => {
		expect(p.parse("Xakhaliyas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xekhaliya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xkhy. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mww)", () => {
		expect(p.parse("Malakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakis 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mlkh. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mww)", () => {
		expect(p.parse("Mathais 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mth. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mww)", () => {
		expect(p.parse("Malakaus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Malakau 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mww)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mww)", () => {
		expect(p.parse("1Yh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mww)", () => {
		expect(p.parse("2Yh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mww)", () => {
		expect(p.parse("3 Yauhas 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yhs 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mww)", () => {
		expect(p.parse("1 Yauhas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yhs 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yauhas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yhs 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mww)", () => {
		expect(p.parse("2 Yauhas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yhs 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yauhas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yhs 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mww)", () => {
		expect(p.parse("Yauhas 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yhs 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mww)", () => {
		expect(p.parse("Tubtxib Tes Haujlwm 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tes Haujlwm 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ttx. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Teh 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mww)", () => {
		expect(p.parse("Loos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mww)", () => {
		expect(p.parse("1 Kauleethaus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Khaulee 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Klt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kauleethaus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Khaulee 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Klt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mww)", () => {
		expect(p.parse("2 Kauleethaus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Khaulee 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Klt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kauleethaus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Khaulee 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Klt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mww)", () => {
		expect(p.parse("1Khl. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mww)", () => {
		expect(p.parse("2Khl. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mww)", () => {
		expect(p.parse("Kaulauxais 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khaulauxi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khx. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Klx 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mww)", () => {
		expect(p.parse("Kalatias 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Klt. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mww)", () => {
		expect(p.parse("Efexau 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efexus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efx. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mww)", () => {
		expect(p.parse("Filipis 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mww)", () => {
		expect(p.parse("1 Thexalaunikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thexalaunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thexalaunikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thexalaunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mww)", () => {
		expect(p.parse("2 Thexalaunikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thexalaunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thexalaunikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thexalaunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mww)", () => {
		expect(p.parse("1Thxk. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mww)", () => {
		expect(p.parse("2Thxk. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mww)", () => {
		expect(p.parse("1 Timautes 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timaute 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timautes 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timaute 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mww)", () => {
		expect(p.parse("2 Timautes 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timaute 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timautes 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timaute 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mww)", () => {
		expect(p.parse("1Tmt. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mww)", () => {
		expect(p.parse("2Tmt. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mww)", () => {
		expect(p.parse("Titau 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mww)", () => {
		expect(p.parse("Filemoos 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mww)", () => {
		expect(p.parse("Henplais 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hnpl. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hen 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mww)", () => {
		expect(p.parse("Yakaunpaus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakaunpau 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yknp. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mww)", () => {
		expect(p.parse("1 Petus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mww)", () => {
		expect(p.parse("2 Petus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mww)", () => {
		expect(p.parse("1Pt. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mww)", () => {
		expect(p.parse("2Pt. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mww)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (mww)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (mww)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (mww)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mww)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yh. - 3 Yauhas").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yh. – 3 Yauhas").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yh. — 3 Yauhas").osis()).toEqual("1John.1-3John.1");
	});
});
