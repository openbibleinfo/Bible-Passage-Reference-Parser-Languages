"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/box.js";

describe("Localized book Rev (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (box)", () => {
		expect(p.parse("Bè-sànkanii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bè. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (box)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (box)", () => {
		expect(p.parse("Maaki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maa. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (box)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (box)", () => {
		expect(p.parse("Zãn nín-yání 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Zã. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (box)", () => {
		expect(p.parse("Zãn ɲun níi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zã. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (box)", () => {
		expect(p.parse("Zãn tĩn níi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Zã. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (box)", () => {
		expect(p.parse("Zãn. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zãn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (box)", () => {
		expect(p.parse("Bè-wénia 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bwn. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (box)", () => {
		expect(p.parse("Oroomusa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (box)", () => {
		expect(p.parse("Korɛntesa nín-yání 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (box)", () => {
		expect(p.parse("Korɛntesa ɲun níi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (box)", () => {
		expect(p.parse("Koloosisa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (box)", () => {
		expect(p.parse("Kalasiisa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (box)", () => {
		expect(p.parse("Efɛɛzesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (box)", () => {
		expect(p.parse("Filiipusa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (box)", () => {
		expect(p.parse("Tesaloniikisa nín-yání 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (box)", () => {
		expect(p.parse("Tesaloniikisa ɲun níi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (box)", () => {
		expect(p.parse("Timɔtee nín-yání 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (box)", () => {
		expect(p.parse("Timɔtee ɲun níi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (box)", () => {
		expect(p.parse("Tiite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tii. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (box)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (box)", () => {
		expect(p.parse("Hebere 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (box)", () => {
		expect(p.parse("Zaaki 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zaa. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (box)", () => {
		expect(p.parse("Piɛre nín-yání 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Piɛ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (box)", () => {
		expect(p.parse("Piɛre ɲun níi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Piɛ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (box)", () => {
		expect(p.parse("Zud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (box)", () => {
		expect(p.parse("Korɛntesa nín-yání 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Zãn nín-yání 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Zã. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Piɛre nín-yání 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tesaloniikisa nín-yání 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Timɔtee nín-yání 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Korɛntesa ɲun níi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zãn ɲun níi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zã. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Piɛre ɲun níi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tesaloniikisa ɲun níi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Timɔtee ɲun níi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zãn tĩn níi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Zã. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Bè-wénia 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Zãn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zãn. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Bè-sànkanii 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bè. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Parser helper should handle book ranges (box)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (box)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zãn nín-yání - Zãn tĩn níi").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zãn nín-yání – Zãn tĩn níi").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zãn nín-yání — Zãn tĩn níi").osis()).toEqual("1John.1-3John.1");
	});
});
