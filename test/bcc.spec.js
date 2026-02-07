"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bcc.js";

describe("Localized book Gen (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bcc)", () => {
		expect(p.parse("Pédáesh 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پێدایش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Péd 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bcc)", () => {
		expect(p.parse("Dargwaz 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("دَرگوَز 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bcc)", () => {
		expect(p.parse("اِلهام 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Elhám 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bcc)", () => {
		expect(p.parse("Zabur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زَبور 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Dan (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bcc)", () => {
		expect(p.parse("Dányál 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Matt (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bcc)", () => {
		expect(p.parse("Mattá 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتّا 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bcc)", () => {
		expect(p.parse("Markás 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرکاس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bcc)", () => {
		expect(p.parse("Luká 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوکا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bcc)", () => {
		expect(p.parse("Yuhannáay Awali Kágad 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یوهَنّائے ائولی کاگد 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یوهَنّا1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yuh1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bcc)", () => {
		expect(p.parse("Yuhannáay Domi Kágad 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یوهَنّائے دومی کاگد 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یوهَنّا2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yuh2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bcc)", () => {
		expect(p.parse("Yuhannáay Saymi Kágad 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یوهَنّائے سئیمی کاگد 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یوهَنّا3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yuh3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bcc)", () => {
		expect(p.parse("Yuhanná 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوهَنّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bcc)", () => {
		expect(p.parse("Kásedáni Kár 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("کاسِدانی کار 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kár 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("کار 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bcc)", () => {
		expect(p.parse("Pulosay kágad pa Rumián 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("پولُسئے کاگد په رومیان 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومیان 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book Gal (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bcc)", () => {
		expect(p.parse("Pa Galátián Pulosay kágad 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("په گَلاتیان پولُسئے کاگد 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galátián 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گَلاتیان 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Phil (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bcc)", () => {
		expect(p.parse("Pa Pilipián Pulosay kágad 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("په پیلیپیان پولُسئے کاگد 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipián 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("پیلیپیان 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bcc)", () => {
		expect(p.parse("Pa Tesálunikián Pulosay domi kágad 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pa تِسالونیکیان پولُسئے دومی کاگد 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pa. Tesálunikián Pulosay domi kágad 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pa. تِسالونیکیان پولُسئے دومی کاگد 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("په Tesálunikián Pulosay domi kágad 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("په تِسالونیکیان پولُسئے دومی کاگد 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("په. Tesálunikián Pulosay domi kágad 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("په. تِسالونیکیان پولُسئے دومی کاگد 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bcc)", () => {
		expect(p.parse("2 Tesálunikián 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تِسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bcc)", () => {
		expect(p.parse("1 Tesálunikián Pulosay awali kágad 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تِسالونیکیان پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesálunikián 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تِسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesálunikián Pulosay awali kágad 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تِسالونیکیان پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesálunikián 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تِسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa Tesálunikián Pulosay awali kágad 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa تِسالونیکیان پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa Tesálunikián 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa تِسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa. Tesálunikián Pulosay awali kágad 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa. تِسالونیکیان پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa. Tesálunikián 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pa. تِسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په Tesálunikián Pulosay awali kágad 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په تِسالونیکیان پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په Tesálunikián 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په تِسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په. Tesálunikián Pulosay awali kágad 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په. تِسالونیکیان پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په. Tesálunikián 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("په. تِسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bcc)", () => {
		expect(p.parse("1 Timutáusá Pulosay awali kágad 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تیموتاووسا پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timutáus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutáusá Pulosay awali kágad 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تیموتاووسا پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutáus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pa Timutáusá Pulosay awali kágad 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pa تیموتاووسا پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pa Timutáus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pa. Timutáusá Pulosay awali kágad 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pa. تیموتاووسا پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pa. Timutáus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("په Timutáusá Pulosay awali kágad 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("په تیموتاووسا پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("په Timutáus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("په. Timutáusá Pulosay awali kágad 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("په. تیموتاووسا پولُسئے ائولی کاگد 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("په. Timutáus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bcc)", () => {
		expect(p.parse("1تیموتاووس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bcc)", () => {
		expect(p.parse("Pa Timutáusá Pulosay domi kágad 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pa تیموتاووسا پولُسئے دومی کاگد 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pa. Timutáusá Pulosay domi kágad 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pa. تیموتاووسا پولُسئے دومی کاگد 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("په Timutáusá Pulosay domi kágad 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("په تیموتاووسا پولُسئے دومی کاگد 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("په. Timutáusá Pulosay domi kágad 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("په. تیموتاووسا پولُسئے دومی کاگد 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bcc)", () => {
		expect(p.parse("2تیموتاووس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Timutáus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bcc)", () => {
		expect(p.parse("Pa Titusá Pulosay kágad 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("په تیتوسا پولُسئے کاگد 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bcc)", () => {
		expect(p.parse("Pa Pilimuná Pulosay kágad 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("په پیلیمونا پولُسئے کاگد 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("پیلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Jas (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bcc)", () => {
		expect(p.parse("Ákub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("آکوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bcc)", () => {
		expect(p.parse("پِتْرُسئے ائولی کاگد 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petrosay Awal Kágad 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("پِتْرُس1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pet1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bcc)", () => {
		expect(p.parse("Petrosay Domi Kágad 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("پِتْرُسئے دومی کاگد 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("پِتْرُس2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pet2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bcc)", () => {
		expect(p.parse("Yahudáay Kágad 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یَهودائے کاگد 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یَهودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bcc)", () => {
		expect(p.parse("آکوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Parser helper should handle ranges (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (bcc)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (bcc)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (bcc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bcc)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yuhannáay Awali Kágad - Yuhannáay Saymi Kágad").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yuhannáay Awali Kágad – Yuhannáay Saymi Kágad").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yuhannáay Awali Kágad — Yuhannáay Saymi Kágad").osis()).toEqual("1John.1-3John.1");
	});
});
