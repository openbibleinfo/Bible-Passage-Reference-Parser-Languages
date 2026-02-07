"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xtc.js";

describe("Localized book Rev (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xtc)", () => {
		expect(p.parse("Tumma tanno Yasu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xtc)", () => {
		expect(p.parse("Rawus 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xtc)", () => {
		expect(p.parse("Yünan 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xtc)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xtc)", () => {
		expect(p.parse("Murkus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xtc)", () => {
		expect(p.parse("Lüüka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xtc)", () => {
		expect(p.parse("1 Yühanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yühanna 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xtc)", () => {
		expect(p.parse("2 Yühanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yühanna 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xtc)", () => {
		expect(p.parse("3 Yühanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yühanna 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xtc)", () => {
		expect(p.parse("Yühanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xtc)", () => {
		expect(p.parse("Kadafïïnï 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xtc)", () => {
		expect(p.parse("Rööma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xtc)", () => {
		expect(p.parse("1 Kürünsüs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kürünsüs 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xtc)", () => {
		expect(p.parse("2 Kürünsüs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kürünsüs 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xtc)", () => {
		expect(p.parse("Kölösi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xtc)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xtc)", () => {
		expect(p.parse("Afosus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xtc)", () => {
		expect(p.parse("Filippi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xtc)", () => {
		expect(p.parse("1 Tasalanükï 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasalanükï 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xtc)", () => {
		expect(p.parse("2 Tasalanükï 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasalanükï 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xtc)", () => {
		expect(p.parse("1 Timosaws 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timosaws 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xtc)", () => {
		expect(p.parse("2 Timosaws 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timosaws 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xtc)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xtc)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xtc)", () => {
		expect(p.parse("Ebraniin 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xtc)", () => {
		expect(p.parse("Yaguub 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xtc)", () => {
		expect(p.parse("1 Bütrüs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bütrüs 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xtc)", () => {
		expect(p.parse("2 Bütrüs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bütrüs 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xtc)", () => {
		expect(p.parse("Yahüüsa 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (xtc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xtc)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yühanna - 3 Yühanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yühanna – 3 Yühanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yühanna — 3 Yühanna").osis()).toEqual("1John.1-3John.1");
	});
});
