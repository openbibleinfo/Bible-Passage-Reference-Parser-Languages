"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lez.js";

describe("Localized book Gen (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lez)", () => {
		expect(p.parse("Хьунухь 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Хьн. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lez)", () => {
		expect(p.parse("ЭхкъечӀун 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Эхкъ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lez)", () => {
		expect(p.parse("Леви 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лв. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lez)", () => {
		expect(p.parse("Кьурумда 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Кьрм. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lez)", () => {
		expect(p.parse("Керемат 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Крм. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lez)", () => {
		expect(p.parse("Киххьей къанун 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ккъ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lez)", () => {
		expect(p.parse("Рт. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lez)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эс. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Ps (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lez)", () => {
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Зб. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jonah (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lez)", () => {
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юн. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lez)", () => {
		expect(p.parse("МатӀай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("МатӀ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lez)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мрк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lez)", () => {
		expect(p.parse("ЛукӀа 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ЛкӀ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lez)", () => {
		expect(p.parse("1-Ягь. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-Ягья 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lez)", () => {
		expect(p.parse("2-Ягь. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-Ягья 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lez)", () => {
		expect(p.parse("3-Ягь. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-Ягья 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lez)", () => {
		expect(p.parse("Ягь. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ягья 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lez)", () => {
		expect(p.parse("Крар 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Кр. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lez)", () => {
		expect(p.parse("Римвийриз 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lez)", () => {
		expect(p.parse("1-Каринфвийриз 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-Кар. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lez)", () => {
		expect(p.parse("2-Каринфвийриз 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-Кар. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lez)", () => {
		expect(p.parse("Каласвийриз 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кал. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lez)", () => {
		expect(p.parse("ГалатӀвийриз 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ГлтӀ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lez)", () => {
		expect(p.parse("Эфесвийриз 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lez)", () => {
		expect(p.parse("ФилипӀвийриз 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ФпӀ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lez)", () => {
		expect(p.parse("1-Саланиквийриз 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-Сал. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lez)", () => {
		expect(p.parse("2-Саланиквийриз 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-Сал. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lez)", () => {
		expect(p.parse("1-тӏиматӏеяз 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-тӏим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lez)", () => {
		expect(p.parse("2-тӏиматӏеяз 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-тӏим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lez)", () => {
		expect(p.parse("Тӏитӏаз 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тӏитӏ. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lez)", () => {
		expect(p.parse("Ифлеманаз 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ифл. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lez)", () => {
		expect(p.parse("Чувудриз 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Чвд. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lez)", () => {
		expect(p.parse("Якьуб 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якь. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lez)", () => {
		expect(p.parse("1-Петру 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-Птр. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lez)", () => {
		expect(p.parse("2-Петру 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-Птр. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lez)", () => {
		expect(p.parse("Ягьд. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ягьуд 1:1").osis()).toEqual("Jude.1.1");
	});
});
