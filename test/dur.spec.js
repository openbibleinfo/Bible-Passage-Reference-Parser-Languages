"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dur.js";

describe("Localized book Matt (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dur)", () => {
		expect(p.parse("Matío 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ma 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dur)", () => {
		expect(p.parse("Márkus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Má 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dur)", () => {
		expect(p.parse("Lúg 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lú 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dur)", () => {
		expect(p.parse("1 Yoohá̧na 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohá̧na 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dur)", () => {
		expect(p.parse("2 Yoohá̧na 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohá̧na 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dur)", () => {
		expect(p.parse("3 Yoohá̧na 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohá̧na 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dur)", () => {
		expect(p.parse("Yoohá̧na 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dur)", () => {
		expect(p.parse("Debtere ba'ad waa ba'ad voo nɔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("De Ba'ad 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rev (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dur)", () => {
		expect(p.parse("Debtere Hȩn Ho̧lȩ́ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("De 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Rom (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dur)", () => {
		expect(p.parse("Nán Róma Vʉ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ná Róma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book Col (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dur)", () => {
		expect(p.parse("Nán Kolosíi Vʉ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ná Kolosíi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dur)", () => {
		expect(p.parse("Nán Galád Vʉ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ná Galád 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dur)", () => {
		expect(p.parse("Nán Ɛfɛ́ɛz Vʉ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ná Ɛfɛ́ɛz 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dur)", () => {
		expect(p.parse("Nán Filíb Vʉ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ná Filíb 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dur)", () => {
		expect(p.parse("1 Nán Tesaloníi Vʉ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ná Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Nán Tesaloníi Vʉ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ná Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dur)", () => {
		expect(p.parse("2 Nán Tesaloníi Vʉ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ná Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Nán Tesaloníi Vʉ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ná Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dur)", () => {
		expect(p.parse("1 Timɔtée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔtée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dur)", () => {
		expect(p.parse("2 Timɔtée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔtée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dur)", () => {
		expect(p.parse("Tíd 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tí 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dur)", () => {
		expect(p.parse("Filmóŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dur)", () => {
		expect(p.parse("Nán Eebərә́ə Vʉ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ná Eebərә́ə 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book 1Cor (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dur)", () => {
		expect(p.parse("1 Nán Koríńti vu̵ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ná 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Nán Koríńti vu̵ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ná 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dur)", () => {
		expect(p.parse("2 Nán Koríńti Vʉ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ná 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Nán Koríńti Vʉ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ná 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Jas (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dur)", () => {
		expect(p.parse("Yaakúbu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ya 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dur)", () => {
		expect(p.parse("1 Piɛ́r 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛ́r 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dur)", () => {
		expect(p.parse("2 Piɛ́r 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛ́r 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dur)", () => {
		expect(p.parse("Yúúda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yú 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (dur)", () => {
		expect(p.parse("DEBTERE HȨN HO̧LȨ́ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Parser helper should handle book ranges (dur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dur)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohá̧na - 3 Yoohá̧na").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohá̧na – 3 Yoohá̧na").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yoohá̧na — 3 Yoohá̧na").osis()).toEqual("1John.1-3John.1");
	});
});
