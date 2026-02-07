"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/krc.js";

describe("Localized book Rev (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (krc)", () => {
		expect(p.parse("Билим Ачханы 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (krc)", () => {
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (krc)", () => {
		expect(p.parse("Маттай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (krc)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (krc)", () => {
		expect(p.parse("Лук. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krc)", () => {
		expect(p.parse("I Ахия 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ахия 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krc)", () => {
		expect(p.parse("II Ахия 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ахия 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (krc)", () => {
		expect(p.parse("III Ахия 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Ахия 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (krc)", () => {
		expect(p.parse("Ахия 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (krc)", () => {
		expect(p.parse("Ишлери 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (krc)", () => {
		expect(p.parse("Римлилеге 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krc)", () => {
		expect(p.parse("I Коринфлилеге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринфлилеге 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krc)", () => {
		expect(p.parse("II Коринфлилеге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринфлилеге 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (krc)", () => {
		expect(p.parse("Колослулагъа 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (krc)", () => {
		expect(p.parse("Галатиялылагъа 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (krc)", () => {
		expect(p.parse("Эфеслилеге 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book 1Thess (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krc)", () => {
		expect(p.parse("I Фесалоникачылагъа 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Фесалоникачылагъа 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krc)", () => {
		expect(p.parse("II Фесалоникачылагъа 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Фесалоникачылагъа 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krc)", () => {
		expect(p.parse("I Тимотейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимотейге 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krc)", () => {
		expect(p.parse("II Тимотейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимотейге 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (krc)", () => {
		expect(p.parse("Титге 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (krc)", () => {
		expect(p.parse("Филимоннга 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (krc)", () => {
		expect(p.parse("Чюйютлелеге 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (krc)", () => {
		expect(p.parse("Якъуп 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krc)", () => {
		expect(p.parse("I Петер 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петер 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krc)", () => {
		expect(p.parse("II Петер 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петер 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (krc)", () => {
		expect(p.parse("Яхуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (krc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (krc)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Ахия - III Ахия").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Ахия – III Ахия").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Ахия — III Ахия").osis()).toEqual("1John.1-3John.1");
	});
});
