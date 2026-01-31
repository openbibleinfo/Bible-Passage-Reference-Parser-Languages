"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kbd.js";

describe("Localized book Gen (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kbd)", () => {
		expect(p.parse("1 Мусэ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kbd)", () => {
		expect(p.parse("Апокалипсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апок. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kbd)", () => {
		expect(p.parse("Руфэ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kbd)", () => {
		expect(p.parse("Сэфирэт и тхылъ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Сэфирэт 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Ps (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kbd)", () => {
		expect(p.parse("Уэрэд 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kbd)", () => {
		expect(p.parse("Гъэсэпэтхыдэхэр 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Гъэс. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kbd)", () => {
		expect(p.parse("ДжакӀуэ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Dan (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kbd)", () => {
		expect(p.parse("Данил 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kbd)", () => {
		expect(p.parse("Инус 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kbd)", () => {
		expect(p.parse("Маттэ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kbd)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kbd)", () => {
		expect(p.parse("Лукас 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kbd)", () => {
		expect(p.parse("Апостол Петр и ещанэ тхылъ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kbd)", () => {
		expect(p.parse("1 Иуан и япэ тхылъ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ин. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иуан и япэ тхылъ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол Иуан и япэ тхылъ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол Ин. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол. Иуан и япэ тхылъ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол. Ин. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kbd)", () => {
		expect(p.parse("2 Иуан и етӀуанэ тхылъ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ин. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иуан и етӀуанэ тхылъ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол Иуан и етӀуанэ тхылъ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол Ин. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол. Иуан и етӀуанэ тхылъ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол. Ин. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kbd)", () => {
		expect(p.parse("Иуан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kbd)", () => {
		expect(p.parse("Апостол. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Апост. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Рим къалэм дэсхэм апостол Паул яхуитха тхылъ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kbd)", () => {
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Апостол Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Апостол. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kbd)", () => {
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Апостол Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Апостол. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Колоссэ къалэм дэсхэм апостол Паул яхуитха тхылъ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Галатие хэкум исхэм апостол Паул яхуитха тхылъ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Ефес къалэм дэсхэм апостол Паул яхуитха тхылъ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Филиппи къалэм дэсхэм апостол Паул яхуитха тхылъ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kbd)", () => {
		expect(p.parse("1 Фес. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Апостол Фес. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Апостол. Фес. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kbd)", () => {
		expect(p.parse("2 Фес. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Апостол Фес. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Апостол. Фес. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Фессалоникэ къалэм дэсхэм Паул яхуитха япэ тхылъ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kbd)", () => {
		expect(p.parse("Фӏэщхъуныгъэ яӀэу Фессалоникэ дэсхэм апостол Паул яхуитха етӀуанэ тхылъ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kbd)", () => {
		expect(p.parse("1 Паул Тимофей хуитха япэ тхылъ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Паул Тимофей хуитха япэ тхылъ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол Паул Тимофей хуитха япэ тхылъ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол. Паул Тимофей хуитха япэ тхылъ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kbd)", () => {
		expect(p.parse("2 Паул Тимофей хуитха етӀуанэ тхылъ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Паул Тимофей хуитха етӀуанэ тхылъ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол Паул Тимофей хуитха етӀуанэ тхылъ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол. Паул Тимофей хуитха етӀуанэ тхылъ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kbd)", () => {
		expect(p.parse("Апостол Паул Тит хуитха тхылъ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kbd)", () => {
		expect(p.parse("Апостол Паул Филимон хуитха тхылъ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kbd)", () => {
		expect(p.parse("Еврейхэм яхуэгъэза тхылъ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kbd)", () => {
		expect(p.parse("Апостол Екъуб и тхылъ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ек. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kbd)", () => {
		expect(p.parse("1 Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол. Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол. Петр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kbd)", () => {
		expect(p.parse("2 Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол. Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол. Петр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kbd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kbd)", () => {
		expect(p.parse("Иуд. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иудэ 1:1").osis()).toEqual("Jude.1.1");
	});
});
