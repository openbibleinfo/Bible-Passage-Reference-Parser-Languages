"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xrb.js";

describe("Localized book Rev (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xrb)", () => {
		expect(p.parse("Kayar 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xrb)", () => {
		expect(p.parse("Matɛhɛ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xrb)", () => {
		expect(p.parse("Marɛkɛ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xrb)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xrb)", () => {
		expect(p.parse("Nsãn saba cir 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xrb)", () => {
		expect(p.parse("Nsãn saba syãŋ wuhu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xrb)", () => {
		expect(p.parse("Nsãn saba tãã wuhu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xrb)", () => {
		expect(p.parse("Nsãn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xrb)", () => {
		expect(p.parse("Yesu tẽnlɛhɛ tẽŋ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tẽnl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xrb)", () => {
		expect(p.parse("Wormefa 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xrb)", () => {
		expect(p.parse("Kɔrntifa cir 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xrb)", () => {
		expect(p.parse("Kɔrntifa saba syãŋ wuhu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xrb)", () => {
		expect(p.parse("Kolosyifa 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xrb)", () => {
		expect(p.parse("Galasyifa 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xrb)", () => {
		expect(p.parse("Yefɛsyifa 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xrb)", () => {
		expect(p.parse("Filipefa 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xrb)", () => {
		expect(p.parse("Tesalonifa saba cir 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xrb)", () => {
		expect(p.parse("Tesalonifa saba syãŋ wuhu 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xrb)", () => {
		expect(p.parse("Timuti saba cir 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xrb)", () => {
		expect(p.parse("Timuti saba syãŋ wuhu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xrb)", () => {
		expect(p.parse("Tyite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xrb)", () => {
		expect(p.parse("Filemu 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xrb)", () => {
		expect(p.parse("Yebɛrɛfa 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xrb)", () => {
		expect(p.parse("Syake 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xrb)", () => {
		expect(p.parse("Pyar saba cir 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xrb)", () => {
		expect(p.parse("Pyar saba syãŋ wuhu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pyar syãŋ wuhu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xrb)", () => {
		expect(p.parse("Yudi saba 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (xrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xrb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Nsãn saba cir - Nsãn saba tãã wuhu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Nsãn saba cir – Nsãn saba tãã wuhu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Nsãn saba cir — Nsãn saba tãã wuhu").osis()).toEqual("1John.1-3John.1");
	});
});
