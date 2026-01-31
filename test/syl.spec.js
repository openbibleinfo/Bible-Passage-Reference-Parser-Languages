"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/syl.js";

describe("Localized book Gen (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (syl)", () => {
		expect(p.parse("Tourat 1: Foeda Nama 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("তৌরাত ১: পয়দা নামা 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ꠔꠃꠞꠣꠔ ১: ꠙꠄꠖꠣ ꠘꠣꠝꠣ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Foeda 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("পয়দা 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ꠙꠄꠖꠣ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (syl)", () => {
		expect(p.parse("Tourat 2: Hizrot 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("তৌরাত ২: হিজরত 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ꠔꠃꠞꠣꠔ ২: ꠢꠤꠎꠞꠔ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Hiz 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("হিজ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ꠢꠤꠎ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (syl)", () => {
		expect(p.parse("তৌরাত ৩: লেবিয়ান 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tourat 3: Lebian 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ꠔꠃꠞꠣꠔ ৩: ꠟꠦꠛꠤꠀꠘ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lebi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবি 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ꠟꠦꠛꠤ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (syl)", () => {
		expect(p.parse("Tourat 4: Shumari 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("তৌরাত ৪: শুমারি 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ꠔꠃꠞꠣꠔ ৪: ꠡꠥꠝꠣꠞꠤ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Shumari 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("শুমারি 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ꠡꠥꠝꠣꠞꠤ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (syl)", () => {
		expect(p.parse("Zaira Kalam 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("জাইরা কালাম 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ꠎꠣꠁꠞꠣ ꠇꠣꠟꠣꠝ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("জাইরা 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zair 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ꠎꠣꠁꠞ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (syl)", () => {
		expect(p.parse("Tourat 5: Dusra-Boyani 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("তৌরাত ৫: দুছরা-বয়ানি 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ꠔꠃꠞꠣꠔ ৫: ꠖꠥꠍꠞꠣ-ꠛꠄꠀꠘꠤ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("2Boyani 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("২বয়ানি 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("২ꠛꠄꠀꠘꠤ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (syl)", () => {
		expect(p.parse("Asmani Kitab: Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("আছমানি কিতাব: রুত 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ꠀꠍꠝꠣꠘꠤ ꠇꠤꠔꠣꠛ: ꠞꠥꠔ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("রুত 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ꠞꠥꠔ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Ps (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (syl)", () => {
		expect(p.parse("Zobur Shorif 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("জবুর শরিফ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ꠎꠛꠥꠞ ꠡꠞꠤꠚ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zobur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("জবুর 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ꠎꠛꠥꠞ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jonah (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (syl)", () => {
		expect(p.parse("Asmani Kitab: Iunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("আছমানি কিতাব: ইউনুছ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ꠀꠍꠝꠣꠘꠤ ꠇꠤꠔꠣꠛ: ꠁꠃꠘꠥꠍ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ইউনুছ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ꠁꠃꠘꠥꠍ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mal (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (syl)", () => {
		expect(p.parse("Asmani Kitab: Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("আছমানি কিতাব: মালাখি 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মালাখি 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (syl)", () => {
		expect(p.parse("Moti 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ꠝꠕꠤ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (syl)", () => {
		expect(p.parse("মার্কুছ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ꠝꠣꠞ꠆ꠇꠥꠍ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ꠝꠣꠞ꠆ꠇ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (syl)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("লুক 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ꠟꠥꠇ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (syl)", () => {
		expect(p.parse("১-হান্নান 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১-ꠢꠣꠘ꠆ꠘꠣꠘ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-Hannan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১হান্ন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ꠢꠣꠘ꠆ꠘ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Han 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (syl)", () => {
		expect(p.parse("২-হান্নান 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২-ꠢꠣꠘ꠆ꠘꠣꠘ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-Hannan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২হান্ন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ꠢꠣꠘ꠆ꠘ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Han 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (syl)", () => {
		expect(p.parse("৩-হান্নান 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩-ꠢꠣꠘ꠆ꠘꠣꠘ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-Hannan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩হান্ন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ꠢꠣꠘ꠆ꠘ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Han 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (syl)", () => {
		expect(p.parse("হান্নান 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ꠢꠣꠘ꠆ꠘꠣꠘ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Hannan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("হান্ন 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ꠢꠣꠘ꠆ꠘ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Hann 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (syl)", () => {
		expect(p.parse("Sahabi Nama 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("সাহাবি নামা 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ꠍꠣꠢꠣꠛꠤ ꠘꠣꠝꠣ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("সাহাবি 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sah 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ꠍꠣꠢ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (syl)", () => {
		expect(p.parse("Ruman 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোমান 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ꠞꠥꠝꠣꠘ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোম 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ꠞꠥꠝ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (syl)", () => {
		expect(p.parse("১-করিন্থিয়া 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-Korintia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১-ꠇꠞꠤꠘ꠆ꠔꠤꠀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১কর 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ꠇꠞ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (syl)", () => {
		expect(p.parse("২-করিন্থিয়া 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-Korintia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২-ꠇꠞꠤꠘ꠆ꠔꠤꠀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২কর 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ꠇꠞ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (syl)", () => {
		expect(p.parse("কলোছিয়া 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ꠇꠟ꠆ꠟꠍꠤꠀ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ꠇꠟ꠆ꠟꠍ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কলছ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (syl)", () => {
		expect(p.parse("গালাতিয়া 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ꠉꠣꠟꠣꠔꠤꠀ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ꠉꠣꠟꠣ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (syl)", () => {
		expect(p.parse("ইফিছিয়া 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ifisia 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ꠁꠚꠤꠍꠤꠀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("iFis 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফিছ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ꠁꠚꠤꠍ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (syl)", () => {
		expect(p.parse("ফিলিপিয়া 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filifia 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ꠚꠤꠟꠤꠙꠤꠀ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flf 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফলপ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ꠚꠟꠙ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (syl)", () => {
		expect(p.parse("১-ꠕꠤꠡꠟꠘꠤꠇꠤꠀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-Tishol: 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১-থিষল: 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tis 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১থিষ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ꠕꠤꠡ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (syl)", () => {
		expect(p.parse("২-ꠕꠤꠡꠟꠘꠤꠇꠤꠀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-Tishol: 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২-থিষল: 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tis 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২থিষ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ꠕꠤꠡ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (syl)", () => {
		expect(p.parse("1-Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১-তিমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১-ꠔꠤꠝꠕꠤ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১তিম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ꠔꠤꠝ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (syl)", () => {
		expect(p.parse("2-Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২-তিমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২-ꠔꠤꠝꠕꠤ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২তিম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ꠔꠤꠝ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (syl)", () => {
		expect(p.parse("Titas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীতাছ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ꠔꠤꠔꠣꠍ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ꠔꠤꠔ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (syl)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলিমন 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ꠚꠤꠟꠤꠝꠘ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফলম 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ꠚꠟꠝ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (syl)", () => {
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইবরানি 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ꠁꠛꠞꠣꠘꠤ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইবর 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ꠁꠛꠞ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (syl)", () => {
		expect(p.parse("ইয়াকুব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iakub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ꠁꠀꠇꠥꠛ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ꠁꠀꠇ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (syl)", () => {
		expect(p.parse("1-Fitor 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১-পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১-ꠙꠤꠔꠞ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Fit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১পিত 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১ꠙꠤꠔ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (syl)", () => {
		expect(p.parse("2-Fitor 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২-পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২-ꠙꠤꠔꠞ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Fit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২পিত 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২ꠙꠤꠔ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (syl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (syl)", () => {
		expect(p.parse("Ehuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("এহুদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ꠄꠢꠥꠖꠣ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ꠄꠢꠥꠖ 1:1").osis()).toEqual("Jude.1.1");
	});
});
