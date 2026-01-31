"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ady.js";

describe("Localized book Gen (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ady)", () => {
		expect(p.parse("УблапӀэ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ady)", () => {
		expect(p.parse("МысырикӀыжь 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ady)", () => {
		expect(p.parse("Апокалипсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ӏоф. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ady)", () => {
		expect(p.parse("Хэбзэ тхыжьыгъэр 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ady)", () => {
		expect(p.parse("Ехъошуа 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ady)", () => {
		expect(p.parse("Гъуазэхэр 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ady)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ady)", () => {
		expect(p.parse("Апэрэ Самуел 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ady)", () => {
		expect(p.parse("ЯтӀонэрэ Самуел 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ady)", () => {
		expect(p.parse("Пачъыхьэхэр: Апэрэ тхылъыр 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ady)", () => {
		expect(p.parse("Пачъыхьэхэр: ЯтӀонэрэ тхылъыр 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Esth (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ady)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Ps (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ady)", () => {
		expect(p.parse("Орэд ЛъапӀэхэр 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ady)", () => {
		expect(p.parse("Ушъый гъэсэпэтхыдэхэр 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ady)", () => {
		expect(p.parse("ДжакӀо 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Dan (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ady)", () => {
		expect(p.parse("Даниел 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ady)", () => {
		expect(p.parse("Юныс 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ady)", () => {
		expect(p.parse("Маттэ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ady)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ady)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ady)", () => {
		expect(p.parse("Апостол Иуан ящэнэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иуан 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ady)", () => {
		expect(p.parse("1 Иуан апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Иуан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иуан апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иуан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол Иуан апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол Иуан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол. Иуан апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Апостол. Иуан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Иуан апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Иуан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Иуан апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Иуан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ady)", () => {
		expect(p.parse("2 Иуан ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Иуан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иуан ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иуан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол Иуан ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол Иуан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол. Иуан ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Апостол. Иуан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Иуан ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Иуан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Иуан ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Иуан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ady)", () => {
		expect(p.parse("Иуан 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ady)", () => {
		expect(p.parse("Апостолхэм ашӀэгъэ Ӏофхэр 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Апостол. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ady)", () => {
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Рим къэлэшхом дэсхэм апостол Паул тхылъэу афитхыгъэр 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ady)", () => {
		expect(p.parse("1 зиӀэхэу Коринф къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. зиӀэхэу Коринф къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Апостол зиӀэхэу Коринф къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Апостол Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Апостол. зиӀэхэу Коринф къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Апостол. Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Коринф къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. зиӀэхэу Коринф къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ady)", () => {
		expect(p.parse("2 зиӀэхэу Коринф къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. зиӀэхэу Коринф къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Апостол зиӀэхэу Коринф къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Апостол Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Апостол. зиӀэхэу Коринф къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Апостол. Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Коринф къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. зиӀэхэу Коринф къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ady)", () => {
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Колоссэ къалэм дэсхэм апостол Паул тхылъэу афитхыгъэр 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ady)", () => {
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Галатие хэкум исхэм апостол Паул тхылъэу афитхыгъэр 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ady)", () => {
		expect(p.parse("Апостол Паул шӀошъхъуныгъэ зиӀэхэу Ефес къалэм дэсхэм тхылъэу афитхыгъэр 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефес 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ady)", () => {
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Филиппи къалэм дэсхэм апостол Паул тхылъэу афитхыгъэр 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ady)", () => {
		expect(p.parse("1 зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Апостол зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Апостол Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Апостол. зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Апостол. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул апэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ady)", () => {
		expect(p.parse("2 зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Апостол зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Апостол Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Апостол. зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Апостол. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. зиӀэхэу Фессалоникэ къалэм дэсхэм апостол Паул ятӀонэрэ тхылъэу афитхыгъэр 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ady)", () => {
		expect(p.parse("1 Паул апэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Паул апэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол Паул апэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол. Паул апэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Апостол. Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Паул апэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Паул апэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ady)", () => {
		expect(p.parse("2 Паул ятӀонэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Паул ятӀонэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол Паул ятӀонэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол. Паул ятӀонэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Апостол. Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Паул ятӀонэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Паул ятӀонэрэ тхылъэу Тимофей фитхыгъэр 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ady)", () => {
		expect(p.parse("Апостол Паул тхылъэу Тит фитхыгъэр 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ady)", () => {
		expect(p.parse("Апостол Паул тхылъэу Филимон фитхыгъэр 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ady)", () => {
		expect(p.parse("Еврей цӀыфхэм афэтхыгъэ тхыл 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ady)", () => {
		expect(p.parse("Апостол Якъубэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якъуб 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ady)", () => {
		expect(p.parse("1 Петрэ апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрэ апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол Петрэ апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол. Петрэ апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Апостол. Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Петрэ апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Петрэ апэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Пет. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ady)", () => {
		expect(p.parse("2 Петрэ ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрэ ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол Петрэ ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол. Петрэ ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Апостол. Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Петрэ ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Петрэ ятӀонэрэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Шӏошъхъуныгъэ. Пет. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ady)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ady)", () => {
		expect(p.parse("Апостол Иудэ тхылъэу ытхыгъэр 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иудэ 1:1").osis()).toEqual("Jude.1.1");
	});
});
