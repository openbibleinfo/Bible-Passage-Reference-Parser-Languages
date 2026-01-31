"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mpe.js";

describe("Localized book Rev (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mpe)", () => {
		expect(p.parse("Dɛnɛɛ Pɛrka Yowanisik 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Dpy 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mpe)", () => {
		expect(p.parse("Maatiyoos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maa. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mpe)", () => {
		expect(p.parse("Markoos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mpe)", () => {
		expect(p.parse("Lukaas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mpe)", () => {
		expect(p.parse("Jiiteen Yowanisik 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mpe)", () => {
		expect(p.parse("1 Yowanisik 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowanisik 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Omoŋ Yowanisik 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Omoŋ Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Omoŋ. Yowanisik 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Omoŋ. Yow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mpe)", () => {
		expect(p.parse("2 Yowanisik 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowanisik 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pɛɛyeen Yowanisik 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pɛɛyeen Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pɛɛyeen. Yowanisik 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pɛɛyeen. Yow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mpe)", () => {
		expect(p.parse("Yowanis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mpe)", () => {
		expect(p.parse("Ijaag Wosɛytaanakoŋk 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ija. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mpe)", () => {
		expect(p.parse("Roome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mpe)", () => {
		expect(p.parse("1 Korontoosuk 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korontoosuk 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Omoŋ Korontoosuk 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Omoŋ Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Omoŋ. Korontoosuk 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Omoŋ. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mpe)", () => {
		expect(p.parse("2 Korontoosuk 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korontoosuk 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pɛɛyeen Korontoosuk 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pɛɛyeen Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pɛɛyeen. Korontoosuk 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pɛɛyeen. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mpe)", () => {
		expect(p.parse("Kolasiis 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mpe)", () => {
		expect(p.parse("Gɛlatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gɛl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mpe)", () => {
		expect(p.parse("Epesoon 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mpe)", () => {
		expect(p.parse("Pilipisiyoos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mpe)", () => {
		expect(p.parse("1 Tɛsɛlonkeek 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsɛlonkeek 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Omoŋ Tɛsɛlonkeek 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Omoŋ Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Omoŋ. Tɛsɛlonkeek 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Omoŋ. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mpe)", () => {
		expect(p.parse("2 Tɛsɛlonkeek 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsɛlonkeek 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pɛɛyeen Tɛsɛlonkeek 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pɛɛyeen Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pɛɛyeen. Tɛsɛlonkeek 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pɛɛyeen. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mpe)", () => {
		expect(p.parse("1 Timotiyoosuk 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiyoosuk 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Omoŋ Timotiyoosuk 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Omoŋ Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Omoŋ. Timotiyoosuk 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Omoŋ. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mpe)", () => {
		expect(p.parse("2 Timotiyoosuk 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiyoosuk 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pɛɛyeen Timotiyoosuk 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pɛɛyeen Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pɛɛyeen. Timotiyoosuk 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pɛɛyeen. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mpe)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tii 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mpe)", () => {
		expect(p.parse("Pilimoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mpe)", () => {
		expect(p.parse("Ibirawiyaan 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mpe)", () => {
		expect(p.parse("Yaykoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yay 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mpe)", () => {
		expect(p.parse("1 Petrosuk 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrosuk 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Omoŋ Petrosuk 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Omoŋ Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Omoŋ. Petrosuk 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Omoŋ. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mpe)", () => {
		expect(p.parse("2 Petrosuk 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrosuk 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pɛɛyeen Petrosuk 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pɛɛyeen Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pɛɛyeen. Petrosuk 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pɛɛyeen. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mpe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mpe)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuu 1:1").osis()).toEqual("Jude.1.1");
	});
});
