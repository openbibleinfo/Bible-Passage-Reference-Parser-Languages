"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lnl.js";

describe("Localized book Rev (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lnl)", () => {
		expect(p.parse("Apökälîbïchi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lnl)", () => {
		expect(p.parse("Matiyə̈ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lnl)", () => {
		expect(p.parse("Mâreke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lnl)", () => {
		expect(p.parse("Lûke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lnl)", () => {
		expect(p.parse("Vötaâ Jâan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lnl)", () => {
		expect(p.parse("1 Jâan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jâan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Dokʉ̈ Jâan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Dokʉ̈ Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Dokʉ̈. Jâan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Dokʉ̈. Jan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lnl)", () => {
		expect(p.parse("2 Jâan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jâan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bïchuû Jâan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bïchuû Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bïchuû. Jâan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bïchuû. Jan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lnl)", () => {
		expect(p.parse("Jâan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lnl)", () => {
		expect(p.parse("Abadjângele 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Abdj 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lnl)", () => {
		expect(p.parse("Rômo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lnl)", () => {
		expect(p.parse("1 Körɛ̂nte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Körɛ̂nte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Dokʉ̈ Körɛ̂nte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Dokʉ̈ Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Dokʉ̈. Körɛ̂nte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Dokʉ̈. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lnl)", () => {
		expect(p.parse("2 Körɛ̂nte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Körɛ̂nte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bïchuû Körɛ̂nte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bïchuû Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bïchuû. Körɛ̂nte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bïchuû. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lnl)", () => {
		expect(p.parse("Kölôse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lnl)", () => {
		expect(p.parse("Gälâte 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lnl)", () => {
		expect(p.parse("Ëfêze 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lnl)", () => {
		expect(p.parse("Fïlîpe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lnl)", () => {
		expect(p.parse("1 Tësälönîke 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tësälönîke 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Dokʉ̈ Tësälönîke 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Dokʉ̈ Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Dokʉ̈. Tësälönîke 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Dokʉ̈. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lnl)", () => {
		expect(p.parse("2 Tësälönîke 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tësälönîke 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bïchuû Tësälönîke 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bïchuû Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bïchuû. Tësälönîke 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bïchuû. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lnl)", () => {
		expect(p.parse("1 Timotë 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotë 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Dokʉ̈ Timotë 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Dokʉ̈ Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Dokʉ̈. Timotë 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Dokʉ̈. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lnl)", () => {
		expect(p.parse("2 Timotë 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotë 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Bïchuû Timotë 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Bïchuû Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Bïchuû. Timotë 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Bïchuû. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lnl)", () => {
		expect(p.parse("Tîte 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lnl)", () => {
		expect(p.parse("Filemön 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lnl)", () => {
		expect(p.parse("Aheborö 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("aHe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lnl)", () => {
		expect(p.parse("Jâke 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lnl)", () => {
		expect(p.parse("1 Pîêre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pie 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pîêre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pie 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Dokʉ̈ Pîêre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Dokʉ̈ Pie 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Dokʉ̈. Pîêre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Dokʉ̈. Pie 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lnl)", () => {
		expect(p.parse("2 Pîêre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pie 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pîêre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pie 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bïchuû Pîêre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bïchuû Pie 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bïchuû. Pîêre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bïchuû. Pie 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lnl)", () => {
		expect(p.parse("Jûde 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (lnl)", () => {
		expect(p.parse("Dokʉ̈ Körɛ̂nte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Dokʉ̈ Jâan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Dokʉ̈ Pîêre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Dokʉ̈ Tësälönîke 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Dokʉ̈ Timotë 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bïchuû Körɛ̂nte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Bïchuû Jâan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Bïchuû Pîêre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bïchuû Tësälönîke 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Bïchuû Timotë 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Vötaâ Jâan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Abadjângele 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kölôse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ëfêze 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Gälâte 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Aheborö 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jâke 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jâan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jûde 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lûke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mâreke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Fïlîpe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filemön 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Apökälîbïchi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rômo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tîte 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (lnl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lnl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâan - Vötaâ Jâan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâan – Vötaâ Jâan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jâan — Vötaâ Jâan").osis()).toEqual("1John.1-3John.1");
	});
});
