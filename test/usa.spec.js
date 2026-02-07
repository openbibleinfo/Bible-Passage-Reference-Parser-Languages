"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/usa.js";

describe("Localized book Rev (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (usa)", () => {
		expect(p.parse("Arébárétiani 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Aré 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (usa)", () => {
		expect(p.parse("Máátiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mát 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (usa)", () => {
		expect(p.parse("Mááki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mák 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (usa)", () => {
		expect(p.parse("Arúke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Arú 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (usa)", () => {
		expect(p.parse("1 Yóáane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yóá 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yóáane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yóá 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (usa)", () => {
		expect(p.parse("2 Yóáane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yóá 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yóáane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yóá 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (usa)", () => {
		expect(p.parse("3 Yóáane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yóá 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yóáane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yóá 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (usa)", () => {
		expect(p.parse("Yóáane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yóá 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (usa)", () => {
		expect(p.parse("Apótoro 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apó 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (usa)", () => {
		expect(p.parse("Arómani 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Aró 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (usa)", () => {
		expect(p.parse("1 Korítiani 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korítiani 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (usa)", () => {
		expect(p.parse("2 Korítiani 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korítiani 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (usa)", () => {
		expect(p.parse("Koráátiani 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (usa)", () => {
		expect(p.parse("Karétiani 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (usa)", () => {
		expect(p.parse("Ipítiani 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ipí 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (usa)", () => {
		expect(p.parse("Pirípiani 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pir 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (usa)", () => {
		expect(p.parse("1 Tetaróniani 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tetaróniani 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (usa)", () => {
		expect(p.parse("2 Tetaróniani 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tetaróniani 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (usa)", () => {
		expect(p.parse("1 Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tí 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tí 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (usa)", () => {
		expect(p.parse("2 Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tí 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tí 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (usa)", () => {
		expect(p.parse("Tááítati 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Táá 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (usa)", () => {
		expect(p.parse("Pírímoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Prm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (usa)", () => {
		expect(p.parse("Íbaru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Íba 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (usa)", () => {
		expect(p.parse("Yêmiti 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yêm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (usa)", () => {
		expect(p.parse("1 Pítaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pí 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pítaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (usa)", () => {
		expect(p.parse("2 Pítaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pí 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pítaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pí 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (usa)", () => {
		expect(p.parse("Yúti 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yút 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (usa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (usa)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yóáane - 3 Yóáane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yóáane – 3 Yóáane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yóáane — 3 Yóáane").osis()).toEqual("1John.1-3John.1");
	});
});
