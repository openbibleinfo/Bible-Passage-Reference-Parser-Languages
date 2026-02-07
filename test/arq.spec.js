"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/arq.js";

describe("Localized book Rev (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (arq)", () => {
		expect(p.parse("رُؤْيَا يُوحَنَّا ٱللَّاهُوتِيِّ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (arq)", () => {
		expect(p.parse("إِنْجِيلُ مَتَّى 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (arq)", () => {
		expect(p.parse("إِنْجِيلُ مَرْقُسَ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (arq)", () => {
		expect(p.parse("إِنْجِيلُ لُوقَا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (arq)", () => {
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (arq)", () => {
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلتَّانِيَةُ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ. يُوحَنَّا ٱلرَّسُولِ ٱلتَّانِيَةُ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (arq)", () => {
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلتَّالِتَةُ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (arq)", () => {
		expect(p.parse("إِنْجِيلُ يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (arq)", () => {
		expect(p.parse("أَعْمَالُ ٱلرُّسُلِ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ رُومِيَةَ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ كُورِنْتُوسَ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ كُورِنْتُوسَ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى أَهْلِ كُورِنْتُوسَ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى أَهْلِ كُورِنْتُوسَ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ غَلَاطِيَّةَ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ أَفَسُسَ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ. بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى أَهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ. بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى أَهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلْأُولَى إِلَى تِيمُوتَاوُسَ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ. بُولُسَ ٱلرَّسُولِ ٱلْأُولَى إِلَى تِيمُوتَاوُسَ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى تِيمُوتَاوُسَ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ. بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى تِيمُوتَاوُسَ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى تِيطُسَ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى فِلِيمُونَ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (arq)", () => {
		expect(p.parse("اَلرِّسَالَةُ إِلَى ٱلْعِبْرَانِيِّينَ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (arq)", () => {
		expect(p.parse("رِسَالَةُ يَعْقُوبَ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (arq)", () => {
		expect(p.parse("رِسَالَةُ بُطْرُسَ ٱلرَّسُولِ ٱلْأُولَى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. بُطْرُسَ ٱلرَّسُولِ ٱلْأُولَى 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (arq)", () => {
		expect(p.parse("رِسَالَةُ بُطْرُسَ ٱلرَّسُولِ ٱلتَّانِيَةُ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ. بُطْرُسَ ٱلرَّسُولِ ٱلتَّانِيَةُ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (arq)", () => {
		expect(p.parse("رِسَالَةُ يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (arq)", () => {
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ كُورِنْتُوسَ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ بُطْرُسَ ٱلرَّسُولِ ٱلْأُولَى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلأُولَى إِلَى أَهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلْأُولَى إِلَى تِيمُوتَاوُسَ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى أَهْلِ كُورِنْتُوسَ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى أَهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ ٱلتَّانِيةُ إِلَى تِيمُوتَاوُسَ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("أَعْمَالُ ٱلرُّسُلِ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ أَفَسُسَ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ غَلَاطِيَّةَ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("اَلرِّسَالَةُ إِلَى ٱلْعِبْرَانِيِّينَ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("إِنْجِيلُ يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("إِنْجِيلُ لُوقَا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("إِنْجِيلُ مَرْقُسَ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("إِنْجِيلُ مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى فِلِيمُونَ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("رُؤْيَا يُوحَنَّا ٱللَّاهُوتِيِّ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى أَهْلِ رُومِيَةَ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رِسَالَةُ بُولُسَ ٱلرَّسُولِ إِلَى تِيطُسَ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (arq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (arq)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى - رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلتَّالِتَةُ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى – رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلتَّالِتَةُ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلْأُولَى — رِسَالَةُ يُوحَنَّا ٱلرَّسُولِ ٱلتَّالِتَةُ").osis()).toEqual("1John.1-3John.1");
	});
});
