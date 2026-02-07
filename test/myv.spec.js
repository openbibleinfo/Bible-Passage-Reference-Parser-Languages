"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/myv.js";

describe("Localized book Rev (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (myv)", () => {
		expect(p.parse("Апокалипсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апок. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (myv)", () => {
		expect(p.parse("Матвей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матв. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (myv)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (myv)", () => {
		expect(p.parse("Лук. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (myv)", () => {
		expect(p.parse("Иоаннонь васенце сёрмазо 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (myv)", () => {
		expect(p.parse("Иоаннонь омбоце сёрмазо 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (myv)", () => {
		expect(p.parse("Иоаннонь колмоце сёрмазо 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иоанн. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (myv)", () => {
		expect(p.parse("1 Иоанн. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанн. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Паволонь Иоанн. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Паволонь. Иоанн. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (myv)", () => {
		expect(p.parse("2 Иоанн. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанн. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Паволонь Иоанн. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Паволонь. Иоанн. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (myv)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (myv)", () => {
		expect(p.parse("Апостолтнэнь тевест 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ап.т. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Римев 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (myv)", () => {
		expect(p.parse("1 васенце сёрмазо Коринфев 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. васенце сёрмазо Коринфев 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Паволонь васенце сёрмазо Коринфев 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Паволонь Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Паволонь. васенце сёрмазо Коринфев 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Паволонь. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (myv)", () => {
		expect(p.parse("2 омбоце сёрмазо Коринфев 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. омбоце сёрмазо Коринфев 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Паволонь омбоце сёрмазо Коринфев 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Паволонь Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Паволонь. омбоце сёрмазо Коринфев 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Паволонь. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Колоссав 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Галатияв 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Эфесэв 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Филиппав 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (myv)", () => {
		expect(p.parse("1 васенце сёрмазо Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. васенце сёрмазо Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Паволонь васенце сёрмазо Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Паволонь Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Паволонь. васенце сёрмазо Фессалоникав 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Паволонь. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (myv)", () => {
		expect(p.parse("2 омбоце сёрмазо Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. омбоце сёрмазо Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Паволонь омбоце сёрмазо Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Паволонь Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Паволонь. омбоце сёрмазо Фессалоникав 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Паволонь. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (myv)", () => {
		expect(p.parse("1 васенце сёрмазо Тимофейнень 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. васенце сёрмазо Тимофейнень 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Паволонь васенце сёрмазо Тимофейнень 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Паволонь Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Паволонь. васенце сёрмазо Тимофейнень 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Паволонь. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (myv)", () => {
		expect(p.parse("2 омбоце сёрмазо Тимофейнень 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. омбоце сёрмазо Тимофейнень 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Паволонь омбоце сёрмазо Тимофейнень 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Паволонь Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Паволонь. омбоце сёрмазо Тимофейнень 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Паволонь. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Титнэнь 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (myv)", () => {
		expect(p.parse("Паволонь сёрмазо Филемоннэнь 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филем. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (myv)", () => {
		expect(p.parse("Еврейтненень сёрмась 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (myv)", () => {
		expect(p.parse("Яковонь сёрмазо 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (myv)", () => {
		expect(p.parse("1 Петр. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Паволонь Петр. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Паволонь. Петр. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (myv)", () => {
		expect(p.parse("2 Петр. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Паволонь Петр. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Паволонь. Петр. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (myv)", () => {
		expect(p.parse("Петрань васенце сёрмазо 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (myv)", () => {
		expect(p.parse("Петрань омбоце сёрмазо 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (myv)", () => {
		expect(p.parse("Иудань сёрмазо 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (myv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (myv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Иоаннонь васенце сёрмазо - Иоаннонь колмоце сёрмазо").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Иоаннонь васенце сёрмазо – Иоаннонь колмоце сёрмазо").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Иоаннонь васенце сёрмазо — Иоаннонь колмоце сёрмазо").osis()).toEqual("1John.1-3John.1");
	});
});
