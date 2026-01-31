"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kde.js";

describe("Localized book Gen (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kde)", () => {
		expect(p.parse("Ntandiliko 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kde)", () => {
		expect(p.parse("Uhunulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Maono 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kde)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kde)", () => {
		expect(p.parse("Malukushi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kde)", () => {
		expect(p.parse("Lukashi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kde)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kde)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kde)", () => {
		expect(p.parse("III Nshuwau 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kde)", () => {
		expect(p.parse("1 Nshuwau 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Nshuwau 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Nshuwau 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Nshuwau 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kde)", () => {
		expect(p.parse("2 Nshuwau 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Nshuwau 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Nshuwau 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Nshuwau 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kde)", () => {
		expect(p.parse("Nshuwau 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kde)", () => {
		expect(p.parse("Matendo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Vitendo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kde)", () => {
		expect(p.parse("VaLoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kde)", () => {
		expect(p.parse("1 Vakolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vakolintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakolintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vakolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vakolintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vakolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vakolintu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kde)", () => {
		expect(p.parse("2 Vakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vakolintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakolintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vakolintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vakolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vakolintu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kde)", () => {
		expect(p.parse("1Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kde)", () => {
		expect(p.parse("2Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kde)", () => {
		expect(p.parse("Vakolosayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Vakoloshu 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kde)", () => {
		expect(p.parse("Vagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Vagalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kde)", () => {
		expect(p.parse("Vaepeshu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("VaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kde)", () => {
		expect(p.parse("Vafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Vapilipo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kde)", () => {
		expect(p.parse("1 Vateshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Vasesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vateshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vasesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vateshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vasesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vateshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vasesalonike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kde)", () => {
		expect(p.parse("2 Vateshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Vasesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vateshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vasesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vateshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vasesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vateshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vasesalonike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kde)", () => {
		expect(p.parse("1Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kde)", () => {
		expect(p.parse("2Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kde)", () => {
		expect(p.parse("1 Timoseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoseo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kde)", () => {
		expect(p.parse("2 Timoseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoseo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kde)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kde)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kde)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kde)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kde)", () => {
		expect(p.parse("Vabalaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Vaeblaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kde)", () => {
		expect(p.parse("Tiyagu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kde)", () => {
		expect(p.parse("1 Patulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petulo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Patulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petulo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Patulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petulo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Patulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petulo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kde)", () => {
		expect(p.parse("2 Patulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petulo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Patulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petulo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Patulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petulo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Patulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petulo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kde)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kde)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kde)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kde)", () => {
		expect(p.parse("Yudashi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
