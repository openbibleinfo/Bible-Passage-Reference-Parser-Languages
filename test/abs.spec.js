"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/abs.js";

describe("Localized book Rev (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (abs)", () => {
		expect(p.parse("Apokalipsis Joannes 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kanjataän rahasija 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yohanis Dapa Tanda 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wahhju Jahhja 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ydt 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (abs)", () => {
		expect(p.parse("Indjil Mattheus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (abs)", () => {
		expect(p.parse("Indjil Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (abs)", () => {
		expect(p.parse("Indjil Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (abs)", () => {
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (abs)", () => {
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (abs)", () => {
		expect(p.parse("Surat Joannes, jang katiga 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohanis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (abs)", () => {
		expect(p.parse("Indjil Joannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohanis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (abs)", () => {
		expect(p.parse("1 Joannes, jang pertama 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohanis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joannes, jang pertama 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kapada Joannes, jang pertama 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kapada Joannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kapada Yohanis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kapada. Joannes, jang pertama 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kapada. Joannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kapada. Yohanis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Surat Joannes, jang pertama 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Surat Joannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Surat Yohanis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Surat. Joannes, jang pertama 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Surat. Joannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Surat. Yohanis 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (abs)", () => {
		expect(p.parse("2 Joannes, jang kaduwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohanis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joannes, jang kaduwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kapada Joannes, jang kaduwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kapada Joannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kapada Yohanis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kapada. Joannes, jang kaduwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kapada. Joannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Kapada. Yohanis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Surat Joannes, jang kaduwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Surat Joannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Surat Yohanis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Surat. Joannes, jang kaduwa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Surat. Joannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Surat. Yohanis 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (abs)", () => {
		expect(p.parse("Perbowatan Rasul‐rasul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Utusang pung Carita 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Perb 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Upc 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (abs)", () => {
		expect(p.parse("Kapada awrang Rawma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rawma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (abs)", () => {
		expect(p.parse("1 awrang Korinthus, jang pertama 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. awrang Korinthus, jang pertama 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kapada awrang Korinthus, jang pertama 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kapada Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kapada Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kapada. awrang Korinthus, jang pertama 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kapada. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kapada. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Surat awrang Korinthus, jang pertama 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Surat Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Surat Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Surat. awrang Korinthus, jang pertama 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Surat. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Surat. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (abs)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (abs)", () => {
		expect(p.parse("2 awrang Korinthus, jang kaduwa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. awrang Korinthus, jang kaduwa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kapada awrang Korinthus, jang kaduwa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kapada Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kapada Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kapada. awrang Korinthus, jang kaduwa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kapada. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kapada. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Surat awrang Korinthus, jang kaduwa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Surat Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Surat Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Surat. awrang Korinthus, jang kaduwa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Surat. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Surat. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (abs)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (abs)", () => {
		expect(p.parse("Kapada awrang Kolossa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (abs)", () => {
		expect(p.parse("Kapada awrang Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (abs)", () => {
		expect(p.parse("Kapada awrang Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (abs)", () => {
		expect(p.parse("Kapada awrang Filippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (abs)", () => {
		expect(p.parse("1 awrang Thessalonike, jang pertama 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. awrang Thessalonike, jang pertama 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kapada awrang Thessalonike, jang pertama 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kapada Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kapada Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kapada. awrang Thessalonike, jang pertama 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kapada. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kapada. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Surat awrang Thessalonike, jang pertama 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Surat Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Surat Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Surat. awrang Thessalonike, jang pertama 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Surat. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Surat. Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (abs)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (abs)", () => {
		expect(p.parse("2 awrang Thessalonike, jang kaduwa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. awrang Thessalonike, jang kaduwa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kapada awrang Thessalonike, jang kaduwa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kapada Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kapada Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kapada. awrang Thessalonike, jang kaduwa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kapada. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Kapada. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Surat awrang Thessalonike, jang kaduwa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Surat Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Surat Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Surat. awrang Thessalonike, jang kaduwa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Surat. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Surat. Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (abs)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (abs)", () => {
		expect(p.parse("1 Timotheus, jang pertama 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheus, jang pertama 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kapada Timotheus, jang pertama 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kapada Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kapada Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kapada. Timotheus, jang pertama 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kapada. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kapada. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Surat Timotheus, jang pertama 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Surat Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Surat Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Surat. Timotheus, jang pertama 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Surat. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Surat. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (abs)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (abs)", () => {
		expect(p.parse("2 Timotheus, jang kaduwa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheus, jang kaduwa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kapada Timotheus, jang kaduwa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kapada Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kapada Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kapada. Timotheus, jang kaduwa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kapada. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Kapada. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Surat Timotheus, jang kaduwa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Surat Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Surat Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Surat. Timotheus, jang kaduwa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Surat. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Surat. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (abs)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (abs)", () => {
		expect(p.parse("Kapada Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (abs)", () => {
		expect(p.parse("Kapada Filémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (abs)", () => {
		expect(p.parse("Kapada awrang Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (abs)", () => {
		expect(p.parse("Surat Jakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (abs)", () => {
		expect(p.parse("1 Petrus, jang pertama 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus, jang pertama 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kapada Petrus, jang pertama 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kapada Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kapada. Petrus, jang pertama 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kapada. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Surat Petrus, jang pertama 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Surat Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Surat. Petrus, jang pertama 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Surat. Petrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (abs)", () => {
		expect(p.parse("1Ptr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (abs)", () => {
		expect(p.parse("2 Petrus, jang kaduwa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus, jang kaduwa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kapada Petrus, jang kaduwa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kapada Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kapada. Petrus, jang kaduwa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Kapada. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Surat Petrus, jang kaduwa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Surat Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Surat. Petrus, jang kaduwa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Surat. Petrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (abs)", () => {
		expect(p.parse("2Ptr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (abs)", () => {
		expect(p.parse("Surat Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (abs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (abs)", () => {
		expect(p.parse("Apokalipsis Joannes, ija itu: Kanjataän rahasija (ataw Wahhju Jahhja.) 1:1").osis()).toEqual("Rev.1.1");
	});
});
