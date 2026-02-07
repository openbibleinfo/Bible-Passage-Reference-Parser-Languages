"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mdf.js";

describe("Localized book Rev (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mdf)", () => {
		expect(p.parse("Иоаннонди панчф няйфкс 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Иоанн. няйфкс 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mdf)", () => {
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матф. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mdf)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mdf)", () => {
		expect(p.parse("Лук. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mdf)", () => {
		expect(p.parse("Иоаннонь васенце сёрмац 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mdf)", () => {
		expect(p.parse("Иоаннонь омбоце сёрмац 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mdf)", () => {
		expect(p.parse("Иоаннонь колмоце сёрмац 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иоанн. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mdf)", () => {
		expect(p.parse("1 Иоанн. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанн. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Павелонь Иоанн. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Павелонь. Иоанн. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mdf)", () => {
		expect(p.parse("2 Иоанн. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанн. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Павелонь Иоанн. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Павелонь. Иоанн. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mdf)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mdf)", () => {
		expect(p.parse("Апостолхнень тевсна 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Апост. т. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Риму 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mdf)", () => {
		expect(p.parse("1 васенце сёрмац Коринфу 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. васенце сёрмац Коринфу 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Павелонь васенце сёрмац Коринфу 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Павелонь Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Павелонь. васенце сёрмац Коринфу 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Павелонь. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mdf)", () => {
		expect(p.parse("2 омбоце сёрмац Коринфу 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. омбоце сёрмац Коринфу 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Павелонь омбоце сёрмац Коринфу 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Павелонь Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Павелонь. омбоце сёрмац Коринфу 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Павелонь. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Колоссав 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Галатияв 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Ефесу 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Филиппав 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mdf)", () => {
		expect(p.parse("1 васенце сёрмац Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. васенце сёрмац Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Павелонь васенце сёрмац Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Павелонь Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Павелонь. васенце сёрмац Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Павелонь. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mdf)", () => {
		expect(p.parse("2 омбоце сёрмац Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. омбоце сёрмац Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Павелонь омбоце сёрмац Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Павелонь Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Павелонь. омбоце сёрмац Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Павелонь. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mdf)", () => {
		expect(p.parse("1 васенце сёрмац Тимофеенди 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. васенце сёрмац Тимофеенди 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Павелонь васенце сёрмац Тимофеенди 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Павелонь Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Павелонь. васенце сёрмац Тимофеенди 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Павелонь. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mdf)", () => {
		expect(p.parse("2 омбоце сёрмац Тимофеенди 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. омбоце сёрмац Тимофеенди 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Павелонь омбоце сёрмац Тимофеенди 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Павелонь Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Павелонь. омбоце сёрмац Тимофеенди 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Павелонь. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Титонди 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mdf)", () => {
		expect(p.parse("Павелонь сёрмац Филимононди 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mdf)", () => {
		expect(p.parse("Еврейхненди сёрмась 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mdf)", () => {
		expect(p.parse("Иаковонь сёрмац 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mdf)", () => {
		expect(p.parse("1 Пётр. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пётр. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Павелонь Пётр. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Павелонь. Пётр. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mdf)", () => {
		expect(p.parse("2 Пётр. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пётр. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Павелонь Пётр. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Павелонь. Пётр. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mdf)", () => {
		expect(p.parse("Пёторонь васенце сёрмац 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mdf)", () => {
		expect(p.parse("Пёторонь омбоце сёрмац 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mdf)", () => {
		expect(p.parse("Иудань сёрмац 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mdf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mdf)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Иоаннонь васенце сёрмац - Иоаннонь колмоце сёрмац").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Иоаннонь васенце сёрмац – Иоаннонь колмоце сёрмац").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Иоаннонь васенце сёрмац — Иоаннонь колмоце сёрмац").osis()).toEqual("1John.1-3John.1");
	});
});
