"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xcl.js";

describe("Localized book Gen (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (xcl)", () => {
		expect(p.parse("Ծնունդք 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (xcl)", () => {
		expect(p.parse("Ելք 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (xcl)", () => {
		expect(p.parse("Ղեւտական 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (xcl)", () => {
		expect(p.parse("Թիւք 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (xcl)", () => {
		expect(p.parse("Ողբք 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xcl)", () => {
		expect(p.parse("Սրբոյն Յովհաննու Առաքելոյ Եւ Աստուածաբան Աւետարանչի՝՝ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (xcl)", () => {
		expect(p.parse("Երկրորդումն Օրինաց 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (xcl)", () => {
		expect(p.parse("Գիրք Յեսուայ Որդւոյ Նաւեայ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (xcl)", () => {
		expect(p.parse("Դատաւորք 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xcl)", () => {
		expect(p.parse("Հռութ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Եսայեայ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (xcl)", () => {
		expect(p.parse("Առ Երրորդ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Առ. Երրորդ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Թագաւորութեանց Երրորդ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Թագաւորութեանց. Երրորդ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (xcl)", () => {
		expect(p.parse("Առ Չորրորդ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Առ. Չորրորդ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Թագաւորութեանց Չորրորդ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Թագաւորութեանց. Չորրորդ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (xcl)", () => {
		expect(p.parse("Մնացորդաց Առաջին 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (xcl)", () => {
		expect(p.parse("Մնացորդաց Երկրորդ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (xcl)", () => {
		expect(p.parse("Եզր 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (xcl)", () => {
		expect(p.parse("Գիրք Նէեմեայ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (xcl)", () => {
		expect(p.parse("Գիրք Յոբայ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (xcl)", () => {
		expect(p.parse("Գիրք Սաղմոսաց 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (xcl)", () => {
		expect(p.parse("Առակք Սողոմոնի 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (xcl)", () => {
		expect(p.parse("Ժողովօղ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (xcl)", () => {
		expect(p.parse("Երգ Երգոց Օրհնութիւն Օրհնութեանց 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Երեմեայ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Եզեկիելի 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Ովսեայ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Յովելայ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Ամովսայ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Աբդիու 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Յովնանու 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Միքիայ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Նաւումայ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Ամբակումայ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Սոփոնիայ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Անգեայ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Զաքարեայ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (xcl)", () => {
		expect(p.parse("Մարգարէութիւն Մաղաքիայ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xcl)", () => {
		expect(p.parse("Աւետարան Ըստ Մատթէոսի 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xcl)", () => {
		expect(p.parse("Աւետարան Ըստ Մարկոսի 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xcl)", () => {
		expect(p.parse("Աւետարան Ըստ Ղուկասու 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xcl)", () => {
		expect(p.parse("Յովհաննու Առաջին՝՝ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xcl)", () => {
		expect(p.parse("Յովհաննու Երկրորդ՝՝ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xcl)", () => {
		expect(p.parse("Յովհաննու Երրորդ՝՝ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xcl)", () => {
		expect(p.parse("Աւետարան Ըստ Յովհաննու 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xcl)", () => {
		expect(p.parse("Գործք Առաքելոց 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xcl)", () => {
		expect(p.parse("Պաւղոսի Առաքելոյ Առ Հռովմայեցիս Թուղթ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xcl)", () => {
		expect(p.parse("Առ Կորնթացիս Առաջին Թուղթ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Առ. Կորնթացիս Առաջին Թուղթ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Թագաւորութեանց Կորնթացիս Առաջին Թուղթ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Թագաւորութեանց. Կորնթացիս Առաջին Թուղթ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xcl)", () => {
		expect(p.parse("Առ Կորնթացիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Առ. Կորնթացիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Թագաւորութեանց Կորնթացիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Թագաւորութեանց. Կորնթացիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xcl)", () => {
		expect(p.parse("Առ Կողոսացիս Թուղթ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xcl)", () => {
		expect(p.parse("Առ Գաղատացիս Թուղթ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xcl)", () => {
		expect(p.parse("Առ Եփեսացիս Թուղթ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xcl)", () => {
		expect(p.parse("Առ Փիլիպեցիս Թուղթ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xcl)", () => {
		expect(p.parse("Առ Թեսաղոնիկեցիս Առաջին Թուղթ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Առ. Թեսաղոնիկեցիս Առաջին Թուղթ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Թագաւորութեանց Թեսաղոնիկեցիս Առաջին Թուղթ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Թագաւորութեանց. Թեսաղոնիկեցիս Առաջին Թուղթ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xcl)", () => {
		expect(p.parse("Առ Թեսաղոնիկեցիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Առ. Թեսաղոնիկեցիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Թագաւորութեանց Թեսաղոնիկեցիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Թագաւորութեանց. Թեսաղոնիկեցիս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xcl)", () => {
		expect(p.parse("Առ Տիմոթէոս Առաջին Թուղթ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Առ. Տիմոթէոս Առաջին Թուղթ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Թագաւորութեանց Տիմոթէոս Առաջին Թուղթ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Թագաւորութեանց. Տիմոթէոս Առաջին Թուղթ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Sam (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (xcl)", () => {
		expect(p.parse("Առ Առաջին 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Առ. Առաջին 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Թագաւորութեանց Առաջին 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Թագաւորութեանց. Առաջին 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Tim (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xcl)", () => {
		expect(p.parse("Առ Տիմոթէոս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Առ. Տիմոթէոս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Թագաւորութեանց Տիմոթէոս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Թագաւորութեանց. Տիմոթէոս Երկրորդ Թուղթ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xcl)", () => {
		expect(p.parse("Առ Տիտոս Թուղթ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xcl)", () => {
		expect(p.parse("Եւ Առ Արքիպպոս Սարկաւագ Եւ Առ Ապփիա Թուղթ՝՝ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xcl)", () => {
		expect(p.parse("Առ Եբրայեցիս Թուղթ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xcl)", () => {
		expect(p.parse("Սրբոյ Առաքելոյն Յակովբայ Կաթողիկէ՝՝ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xcl)", () => {
		expect(p.parse("Պետրոսի Առաջին՝՝ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xcl)", () => {
		expect(p.parse("Թուղթ Պետրոսի Երկրորդ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Sam (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (xcl)", () => {
		expect(p.parse("Առ Երկրորդ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Առ. Երկրորդ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Թագաւորութեանց Երկրորդ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Թագաւորութեանց. Երկրորդ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Jude (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xcl)", () => {
		expect(p.parse("Թուղթ Յուդայի Առաքելոյ Կաթողիկէ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (xcl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xcl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Յովհաննու Առաջին՝՝ - Յովհաննու Երրորդ՝՝").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Յովհաննու Առաջին՝՝ – Յովհաննու Երրորդ՝՝").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Յովհաննու Առաջին՝՝ — Յովհաննու Երրորդ՝՝").osis()).toEqual("1John.1-3John.1");
	});
});
