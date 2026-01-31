"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/alt.js";

describe("Localized book Rev (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (alt)", () => {
		expect(p.parse("Ачылта 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (alt)", () => {
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мф. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (alt)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (alt)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (alt)", () => {
		expect(p.parse("Иоанныҥ 1-кы самаразы 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (alt)", () => {
		expect(p.parse("Иоанныҥ 2-чи самаразы 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (alt)", () => {
		expect(p.parse("Иоанныҥ 3-чи самаразы 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (alt)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (alt)", () => {
		expect(p.parse("Апостолдордыҥ керектери 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (alt)", () => {
		expect(p.parse("Римдегилерге 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (alt)", () => {
		expect(p.parse("1 Коринфтегилерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфтегилерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (alt)", () => {
		expect(p.parse("2 Коринфтегилерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфтегилерге 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (alt)", () => {
		expect(p.parse("Колоссыдагыларга серкпеге самаразы 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (alt)", () => {
		expect(p.parse("Галаттарга 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (alt)", () => {
		expect(p.parse("Ефестегилерге 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (alt)", () => {
		expect(p.parse("Филиппыдагыларга 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (alt)", () => {
		expect(p.parse("1 Фессалоникадагыларга 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникадагыларга 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (alt)", () => {
		expect(p.parse("2 Фессалоникадагыларга 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникадагыларга 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (alt)", () => {
		expect(p.parse("1 Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (alt)", () => {
		expect(p.parse("2 Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (alt)", () => {
		expect(p.parse("Титке 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (alt)", () => {
		expect(p.parse("Филимонго 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (alt)", () => {
		expect(p.parse("Еврейлерге 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (alt)", () => {
		expect(p.parse("Иаковтыҥ самаразы 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (alt)", () => {
		expect(p.parse("Петрдыҥ 1-кы самаразы 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (alt)", () => {
		expect(p.parse("Петрдыҥ 2-чи самаразы 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (alt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (alt)", () => {
		expect(p.parse("Иуданыҥ самаразы 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
