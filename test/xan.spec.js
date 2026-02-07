"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xan.js";

describe("Localized book Rev (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xan)", () => {
		expect(p.parse("ይዃንስት እትለ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("እት. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xan)", () => {
		expect(p.parse("ማቲወስት ወንጌል 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቲ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xan)", () => {
		expect(p.parse("ማርቈስት ወንጌል 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xan)", () => {
		expect(p.parse("ሉቃስት ወንጌል 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xan)", () => {
		expect(p.parse("1ይዃንስት እፃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይዃ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xan)", () => {
		expect(p.parse("2ይዃንስት እፃ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይዃ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xan)", () => {
		expect(p.parse("3ይዃንስት እፃ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ይዃ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xan)", () => {
		expect(p.parse("ይዃንስት ወንጌል 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ይዃ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xan)", () => {
		expect(p.parse("ኻወርየታኒዙ ሰቭ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ኻወ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xan)", () => {
		expect(p.parse("ረውምየት እቂዝ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ረው. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xan)", () => {
		expect(p.parse("1ቈረንተውስት እቂዝ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቈረ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xan)", () => {
		expect(p.parse("2ቈረንተውስት እቂዝ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቈረ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xan)", () => {
		expect(p.parse("ቈላስይስት እቂዝ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xan)", () => {
		expect(p.parse("ገላትየት እቂዝ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xan)", () => {
		expect(p.parse("እፊሰውንት እቂዝ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("እፊ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xan)", () => {
		expect(p.parse("ፍልብስዩስት እቂዝ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፍልብ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xan)", () => {
		expect(p.parse("1ተሰለቅየት እቂዝ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xan)", () => {
		expect(p.parse("2ተሰለቅየት እቂዝ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xan)", () => {
		expect(p.parse("1ጢመቲወስስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ጢመ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xan)", () => {
		expect(p.parse("2ጢመቲወስስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ጢመ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xan)", () => {
		expect(p.parse("ቲተውስ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲተ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xan)", () => {
		expect(p.parse("ፊልሙነስ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊልሙ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xan)", () => {
		expect(p.parse("እቭራውያኒዝ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እቭ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xan)", () => {
		expect(p.parse("ያይቈቭት እፃ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xan)", () => {
		expect(p.parse("1ቢጥሮስት እፃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ቢጥ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xan)", () => {
		expect(p.parse("2ቢጥሮስት እፃ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ቢጥ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xan)", () => {
		expect(p.parse("ይዅዳት እፃ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይዅ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (xan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xan)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ይዃንስት እፃ - 3ይዃንስት እፃ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ይዃንስት እፃ – 3ይዃንስት እፃ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ይዃንስት እፃ — 3ይዃንስት እፃ").osis()).toEqual("1John.1-3John.1");
	});
});
