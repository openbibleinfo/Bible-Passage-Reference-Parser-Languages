"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bsw.js";

describe("Localized book Rev (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bsw)", () => {
		expect(p.parse("Raaga Kayaannisa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራጋ ካያንሳ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rag. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራጋ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bsw)", () => {
		expect(p.parse("Matoosa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶ. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶሳ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bsw)", () => {
		expect(p.parse("Mark'oosa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆሳ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bsw)", () => {
		expect(p.parse("Luk'k'aasa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk'. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃሳ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bsw)", () => {
		expect(p.parse("1 ያን. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ያንሳ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ያን. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ያንሳ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bsw)", () => {
		expect(p.parse("2 ያን. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ያንሳ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ያን. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ያንሳ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bsw)", () => {
		expect(p.parse("3 ያን. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ያንሳ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ያን. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ያንሳ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bsw)", () => {
		expect(p.parse("Yaannisa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yan. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ያን. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ያንሳ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bsw)", () => {
		expect(p.parse("Ofarameeraankonገi felo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ኦፋራሜራንኮኒዕ ፈሎ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ofa. Fe. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ኦፋ. ፈ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bsw)", () => {
		expect(p.parse("ካሮም ቶስ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮመ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bsw)", () => {
		expect(p.parse("1 ቆሮንቶሳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶሳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bsw)", () => {
		expect(p.parse("2 ቆሮንቶሳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶሳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bsw)", () => {
		expect(p.parse("K'ollasiyaasa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("K'ol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላስያሳ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bsw)", () => {
		expect(p.parse("Gelaatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gel. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bsw)", () => {
		expect(p.parse("Efesoona 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፈሶን 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፈ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bsw)", () => {
		expect(p.parse("Filp'isiyosa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፍልጲስዮሳ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፍል. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bsw)", () => {
		expect(p.parse("1 ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተስ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተስ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bsw)", () => {
		expect(p.parse("2 ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተስ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተስ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bsw)", () => {
		expect(p.parse("1 ጢሞቶሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞቶሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bsw)", () => {
		expect(p.parse("2 ጢሞቶሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞቶሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bsw)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bsw)", () => {
		expect(p.parse("Filmoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፍልሞ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፍልሞና 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bsw)", () => {
		expect(p.parse("Ibirawwii 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብራዊ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bsw)", () => {
		expect(p.parse("Yayik'ooba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yay. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይቆባ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bsw)", () => {
		expect(p.parse("1 ጴጢሮሳ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴጢ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጢሮሳ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጢ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bsw)", () => {
		expect(p.parse("2 ጴጢሮሳ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴጢ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጢሮሳ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጢ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bsw)", () => {
		expect(p.parse("Yihuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bsw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bsw)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ያን. - 3 ያን.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ያን. – 3 ያን.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ያን. — 3 ያን.").osis()).toEqual("1John.1-3John.1");
	});
});
