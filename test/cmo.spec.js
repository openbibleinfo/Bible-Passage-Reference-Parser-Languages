"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cmo.js";

describe("Localized book Gen (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (cmo)", () => {
		expect(p.parse("Nau Ntơm 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("នាវ​នតើម 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ntơm 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Nnt 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("នន 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (cmo)", () => {
		expect(p.parse("Nau Ngluh Êjipt 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ngluh 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (cmo)", () => {
		expect(p.parse("Kan Lêvi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lêvi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (cmo)", () => {
		expect(p.parse("Nau Kơp Bunuyh 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kơp 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (cmo)", () => {
		expect(p.parse("Nau Nhĭm Vơl 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nhĭm Vơl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cmo)", () => {
		expect(p.parse("Nau Tâm Mpơl 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("នាវ​តឹម​មពើល 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mpơl 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ntm 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("នតម 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (cmo)", () => {
		expect(p.parse("Nau Vay Nkah Tay 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Nkah 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (cmo)", () => {
		expect(p.parse("Yôsuê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yôs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (cmo)", () => {
		expect(p.parse("Phung Kôranh Phat Dôih 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Phat Dôih 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (cmo)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("រូត 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("រត 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (cmo)", () => {
		expect(p.parse("Êsai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (cmo)", () => {
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (cmo)", () => {
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (cmo)", () => {
		expect(p.parse("I Phung Hađăch 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Hađăch 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Phung Hađăch 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Hađăch 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (cmo)", () => {
		expect(p.parse("II Phung Hađăch 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Hađăch 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Phung Hađăch 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Hađăch 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (cmo)", () => {
		expect(p.parse("I Nau Rêh Jêng 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Rêh Jêng 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Nau Rêh Jêng 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Rêh Jêng 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (cmo)", () => {
		expect(p.parse("II Nau Rêh Jêng 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Rêh Jêng 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Nau Rêh Jêng 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Rêh Jêng 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (cmo)", () => {
		expect(p.parse("Êsra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Êsr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (cmo)", () => {
		expect(p.parse("Nêhêmi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nêh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (cmo)", () => {
		expect(p.parse("Êsther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Êst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (cmo)", () => {
		expect(p.parse("Yôp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (cmo)", () => {
		expect(p.parse("Nau Mprơ Ơm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mprơ Ơm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (cmo)", () => {
		expect(p.parse("Nau Hôr 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Hôr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (cmo)", () => {
		expect(p.parse("Nơm Nti 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nti 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (cmo)", () => {
		expect(p.parse("Nau Mprơ Ueh 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Mprơ Ueh 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (cmo)", () => {
		expect(p.parse("Yêrêmi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yêr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (cmo)", () => {
		expect(p.parse("Êsêkiêl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Êsê 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (cmo)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (cmo)", () => {
		expect(p.parse("Ôsê 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (cmo)", () => {
		expect(p.parse("Yôel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (cmo)", () => {
		expect(p.parse("Amôt 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (cmo)", () => {
		expect(p.parse("Apdia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (cmo)", () => {
		expect(p.parse("យោនាយ្ស 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yônais 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yôna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yôn 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("យោន 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (cmo)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (cmo)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (cmo)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (cmo)", () => {
		expect(p.parse("Sôphôni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (cmo)", () => {
		expect(p.parse("Agê 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (cmo)", () => {
		expect(p.parse("Sakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (cmo)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cmo)", () => {
		expect(p.parse("Mathay 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathiơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("មាថាយ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("មថ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cmo)", () => {
		expect(p.parse("Markôs 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("មារកោស 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("មក 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cmo)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("លូកា 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("លក 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cmo)", () => {
		expect(p.parse("Yôhan Rơh 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("យោហាន​រើស ១ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yô 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១យហ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cmo)", () => {
		expect(p.parse("Yôhan Rơh 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("យោហាន​រើស ២ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yô 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២យហ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cmo)", () => {
		expect(p.parse("Yôhan Rơh 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("យោហាន​រើស ៣ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yôhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yôh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yô 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣យហ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cmo)", () => {
		expect(p.parse("I Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yôh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yôh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cmo)", () => {
		expect(p.parse("II Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yôh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yôh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cmo)", () => {
		expect(p.parse("Yôhan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យោហាន 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yôh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("យហ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cmo)", () => {
		expect(p.parse("Kan Kôranh Oh Mon 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kôranh Oh Mon 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("កោរាញ​អ៝ស​ម៝ន 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ការ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cmo)", () => {
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("រោម 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("រម 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cmo)", () => {
		expect(p.parse("I Kôrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kôrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cmo)", () => {
		expect(p.parse("II Kôrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kôrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cmo)", () => {
		expect(p.parse("Kôrĭntô Rơh 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("កោរិនតោ​រើស ១ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១កោ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cmo)", () => {
		expect(p.parse("Kôrĭntô Rơh 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("កោរិនតោ​រើស ២ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២កោ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cmo)", () => {
		expect(p.parse("Kôlôh 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôlôs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កោលោស 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("កោល 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cmo)", () => {
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("កាលាតី 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("កាល 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cmo)", () => {
		expect(p.parse("Êphêsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អេផេឆោ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("អេផ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cmo)", () => {
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ផីលីប 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ផល 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cmo)", () => {
		expect(p.parse("Têsalônik Rơh 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("តេឆាលោនិក​រើស ១ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១តេ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cmo)", () => {
		expect(p.parse("Têsalônik Rơh 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("តេឆាលោនិក​រើស ២ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២តេ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cmo)", () => {
		expect(p.parse("I Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cmo)", () => {
		expect(p.parse("II Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cmo)", () => {
		expect(p.parse("Timôthê Rơh 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("តីមោថេ​រើស ១ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១តម 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cmo)", () => {
		expect(p.parse("Timôthê Rơh 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("តីមោថេ​រើស ២ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២តម 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cmo)", () => {
		expect(p.parse("I Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cmo)", () => {
		expect(p.parse("II Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cmo)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("តីតុស 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("តត 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cmo)", () => {
		expect(p.parse("Philêmôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ផីលេមោន 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ផលម 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cmo)", () => {
		expect(p.parse("ហេឞ្រើ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hêbrơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hêb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ហេឞ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cmo)", () => {
		expect(p.parse("Yakơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យាកើ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("យាក 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cmo)", () => {
		expect(p.parse("ពេត្រោស​រើស ១ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pêtrôs Rơh 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pê 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១ពេ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cmo)", () => {
		expect(p.parse("ពេត្រោស​រើស ២ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pêtrôs Rơh 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pê 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២ពេ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cmo)", () => {
		expect(p.parse("I Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pê 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pê 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cmo)", () => {
		expect(p.parse("II Pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pê 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pê 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cmo)", () => {
		expect(p.parse("Yuđas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("យូដាស 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuđ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yut 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("យដ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (cmo)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (cmo)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle verses (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (cmo)", () => {
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (cmo)", () => {
		expect(p.parse("Phlm 2 & 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle book ranges (cmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (cmo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yôhan Rơh 1 - Yôhan Rơh 3").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yôhan Rơh 1 – Yôhan Rơh 3").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yôhan Rơh 1 — Yôhan Rơh 3").osis()).toEqual("1John.1-3John.1");
	});
});
