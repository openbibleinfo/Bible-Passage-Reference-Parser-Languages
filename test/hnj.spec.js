"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hnj.js";

describe("Localized book Gen (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hnj)", () => {
		expect(p.parse("Chiv Keeb 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chivkeeb 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ch.K. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Chk 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hnj)", () => {
		expect(p.parse("Tsiv Dlim 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tswv Dim 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ts.D. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tsd 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hnj)", () => {
		expect(p.parse("Levi Tej Kevcai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levis Kevcai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("L.Kc. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lek 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hnj)", () => {
		expect(p.parse("Xwm Txheej Taug Kev 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Teev Npe 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("X.Txh. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tnp 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hnj)", () => {
		expect(p.parse("Nkauj Quaj Ntsuag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Zaaj Nkauj Ntsuag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nk.Nts. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nqn 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hnj)", () => {
		expect(p.parse("Qha Tshwm 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tshwmsim 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Qtsh. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tsm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hnj)", () => {
		expect(p.parse("2 Kevcai 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kevcai 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("2 Kev 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kc. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hnj)", () => {
		expect(p.parse("Yausuas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yausua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ys. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hnj)", () => {
		expect(p.parse("Cov Thawjtswj 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Cov Thawj 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("C.Th. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ctt 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hnj)", () => {
		expect(p.parse("Luv 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hnj)", () => {
		expect(p.parse("Yaxayas 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yaxaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yxy. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yay 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hnj)", () => {
		expect(p.parse("1 Xamuyees 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Xamuyee 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Xam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xamuyees 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xamuyee 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hnj)", () => {
		expect(p.parse("2 Xamuyees 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Xamuyee 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Xam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xamuyees 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xamuyee 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hnj)", () => {
		expect(p.parse("1Xmy. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hnj)", () => {
		expect(p.parse("2Xmy. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hnj)", () => {
		expect(p.parse("1Vntx. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hnj)", () => {
		expect(p.parse("2Vntx. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hnj)", () => {
		expect(p.parse("1 Xwmtxheej Vaajntxwv 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Vaaj Keeb Kwm 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Xvn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Xwmtxheej Vaajntxwv 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Vaaj Keeb Kwm 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Xvn 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hnj)", () => {
		expect(p.parse("2 Xwmtxheej Vaajntxwv 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Vaaj Keeb Kwm 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Xvn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Xwmtxheej Vaajntxwv 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Vaaj Keeb Kwm 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Xvn 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hnj)", () => {
		expect(p.parse("1 Vaajntxwv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Vnt 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Vaajntxwv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Vnt 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hnj)", () => {
		expect(p.parse("2 Vaajntxwv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Vnt 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Vaajntxwv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Vnt 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hnj)", () => {
		expect(p.parse("1Vkk. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hnj)", () => {
		expect(p.parse("2Vkk. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hnj)", () => {
		expect(p.parse("Exalas 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exala 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exl. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exa 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hnj)", () => {
		expect(p.parse("Nehemis 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nhm. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hnj)", () => {
		expect(p.parse("Exethaws 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Exathaw 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Exth. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ext 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hnj)", () => {
		expect(p.parse("Yauj 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yaj 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hnj)", () => {
		expect(p.parse("Phoo Ntawv Nkauj 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ntawv Nkauj 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nt.Nk. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pnk 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hnj)", () => {
		expect(p.parse("Paaj Lug 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Paajlug 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("P.L. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Plg 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hnj)", () => {
		expect(p.parse("Laaj Lim Tswvyim 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tej Lug Qha 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("L.Tsy. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tlq 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hnj)", () => {
		expect(p.parse("Xalaumoo Zaaj Nkauj 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Xalumoos Tej Nkauj 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Xlm. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Xtn 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hnj)", () => {
		expect(p.parse("Yelemis 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yelemi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ylm. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hnj)", () => {
		expect(p.parse("Exekees 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Exekhee 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Exkh. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Exk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hnj)", () => {
		expect(p.parse("Daniyees 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Taniyee 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tny. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hnj)", () => {
		expect(p.parse("Hauxeyas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hauxeya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hxy. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hau 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hnj)", () => {
		expect(p.parse("Yau-Ees 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yau-ee 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Y-ee 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yau 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hnj)", () => {
		expect(p.parse("Amaus 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amau 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ama 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hnj)", () => {
		expect(p.parse("Aunpadiyas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aunpantiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aunpy. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Aun 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hnj)", () => {
		expect(p.parse("Yaunas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yauna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yan 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yn. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hnj)", () => {
		expect(p.parse("Mikhas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mkh. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hnj)", () => {
		expect(p.parse("Nahus 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nh. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hnj)", () => {
		expect(p.parse("Hanpakus 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hanpaku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hnpk. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Han 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hnj)", () => {
		expect(p.parse("Xefaniyas 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xfny. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hnj)", () => {
		expect(p.parse("Hakais 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hak 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hk. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hnj)", () => {
		expect(p.parse("Xakaliyas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xekhaliya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xkhy. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hnj)", () => {
		expect(p.parse("Malakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakis 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mlkh. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hnj)", () => {
		expect(p.parse("Mathais 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mth. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hnj)", () => {
		expect(p.parse("Malakaus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Malakau 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hnj)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hnj)", () => {
		expect(p.parse("1Yh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hnj)", () => {
		expect(p.parse("2Yh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hnj)", () => {
		expect(p.parse("3 Yauhaas 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yauhaa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yhs 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hnj)", () => {
		expect(p.parse("1 Yauhaas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yauhaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yhs 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yauhaas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yauhaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yhs 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hnj)", () => {
		expect(p.parse("2 Yauhaas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yauhaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yhs 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yauhaas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yauhaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yhs 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hnj)", () => {
		expect(p.parse("Yauhaas 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yauhaa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yhs 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hnj)", () => {
		expect(p.parse("Tubkhai Teg Num 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Teg Num 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tkh. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ten 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hnj)", () => {
		expect(p.parse("Loos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hnj)", () => {
		expect(p.parse("1 Kauleethaus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Khaulee 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Klt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kauleethaus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Khaulee 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Klt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hnj)", () => {
		expect(p.parse("2 Kauleethaus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Khaulee 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Klt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kauleethaus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Khaulee 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Klt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hnj)", () => {
		expect(p.parse("1Khl. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hnj)", () => {
		expect(p.parse("2Khl. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hnj)", () => {
		expect(p.parse("Kaulauxais 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khaulauxi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Khx. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Klx 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hnj)", () => {
		expect(p.parse("Kalatias 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Klt. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hnj)", () => {
		expect(p.parse("Efexaus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efexau 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efx. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hnj)", () => {
		expect(p.parse("Filipis 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hnj)", () => {
		expect(p.parse("1 Thexalaunikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thexalaunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thexalaunikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thexalaunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hnj)", () => {
		expect(p.parse("2 Thexalaunikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thexalaunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thexalaunikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thexalaunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hnj)", () => {
		expect(p.parse("1Thxk. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hnj)", () => {
		expect(p.parse("2Thxk. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hnj)", () => {
		expect(p.parse("1 Timautes 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timaute 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timautes 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timaute 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hnj)", () => {
		expect(p.parse("2 Timautes 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timaute 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timautes 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timaute 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hnj)", () => {
		expect(p.parse("1Tmt. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hnj)", () => {
		expect(p.parse("2Tmt. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hnj)", () => {
		expect(p.parse("Titau 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hnj)", () => {
		expect(p.parse("Filemoos 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hnj)", () => {
		expect(p.parse("Henplais 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hnpl. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hen 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hnj)", () => {
		expect(p.parse("Yakaunpaus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakaunpau 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yknp. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hnj)", () => {
		expect(p.parse("1 Petus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hnj)", () => {
		expect(p.parse("2 Petus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hnj)", () => {
		expect(p.parse("1Pt. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hnj)", () => {
		expect(p.parse("2Pt. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hnj)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yt. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (hnj)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (hnj)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (hnj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hnj)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yh. - 3 Yauhaas").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yh. – 3 Yauhaas").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yh. — 3 Yauhaas").osis()).toEqual("1John.1-3John.1");
	});
});
