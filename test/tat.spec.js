"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tat.js";

describe("Localized book Gen (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tat)", () => {
		expect(p.parse("Яратылыш 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tat)", () => {
		expect(p.parse("Чыгыш 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tat)", () => {
		expect(p.parse("Левиләр 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tat)", () => {
		expect(p.parse("Саннар 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tat)", () => {
		expect(p.parse("Кайгы җыры 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tat)", () => {
		expect(p.parse("Ачылыш 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tat)", () => {
		expect(p.parse("Канун 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tat)", () => {
		expect(p.parse("Ешуа 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tat)", () => {
		expect(p.parse("Хөкемчеләр 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tat)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tat)", () => {
		expect(p.parse("Ишагыйя 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tat)", () => {
		expect(p.parse("III Патшалар 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tat)", () => {
		expect(p.parse("IV Патшалар 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tat)", () => {
		expect(p.parse("I Патшалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Патшалар 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tat)", () => {
		expect(p.parse("II Патшалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Патшалар 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tat)", () => {
		expect(p.parse("I Елъязма 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Елъязма 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tat)", () => {
		expect(p.parse("II Елъязма 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Елъязма 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tat)", () => {
		expect(p.parse("Эзра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tat)", () => {
		expect(p.parse("Нәхәмия 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tat)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tat)", () => {
		expect(p.parse("Әюб 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tat)", () => {
		expect(p.parse("Зәбур 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tat)", () => {
		expect(p.parse("Гыйбрәтле сүзләр 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tat)", () => {
		expect(p.parse("Вәгазьче 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tat)", () => {
		expect(p.parse("Җырлар җыры 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tat)", () => {
		expect(p.parse("Иремия 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tat)", () => {
		expect(p.parse("Яхәзкыл 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tat)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tat)", () => {
		expect(p.parse("Һошея 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tat)", () => {
		expect(p.parse("Йоил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tat)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tat)", () => {
		expect(p.parse("Убадия 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tat)", () => {
		expect(p.parse("Юныс 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tat)", () => {
		expect(p.parse("Михә 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tat)", () => {
		expect(p.parse("Нахум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tat)", () => {
		expect(p.parse("Хабаккук 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tat)", () => {
		expect(p.parse("Сефания 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tat)", () => {
		expect(p.parse("Хәггәй 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tat)", () => {
		expect(p.parse("Зәкәрия 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tat)", () => {
		expect(p.parse("Малахи 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tat)", () => {
		expect(p.parse("Маттай 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tat)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tat)", () => {
		expect(p.parse("Лүк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tat)", () => {
		expect(p.parse("I Яхъядан хат 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Яхъядан хат 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tat)", () => {
		expect(p.parse("II Яхъядан хат 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Яхъядан хат 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tat)", () => {
		expect(p.parse("III Яхъядан хат 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Яхъядан хат 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tat)", () => {
		expect(p.parse("Яхъя 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tat)", () => {
		expect(p.parse("Рәсүлләр 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tat)", () => {
		expect(p.parse("Римлыларга хат 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tat)", () => {
		expect(p.parse("I Көринтлеләргә хат 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Көринтлеләргә хат 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tat)", () => {
		expect(p.parse("II Көринтлеләргә хат 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Көринтлеләргә хат 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tat)", () => {
		expect(p.parse("Көлессәйлеләргә хат 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tat)", () => {
		expect(p.parse("Гәләтиялеләргә хат 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tat)", () => {
		expect(p.parse("Эфеслеләргә хат 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tat)", () => {
		expect(p.parse("Филиппуйлыларга хат 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tat)", () => {
		expect(p.parse("I Тессалуникәлеләргә хат 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Тессалуникәлеләргә хат 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tat)", () => {
		expect(p.parse("II Тессалуникәлеләргә хат 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Тессалуникәлеләргә хат 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tat)", () => {
		expect(p.parse("I Тимутәйгә хат 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимутәйгә хат 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tat)", () => {
		expect(p.parse("II Тимутәйгә хат 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимутәйгә хат 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tat)", () => {
		expect(p.parse("Титуска хат 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tat)", () => {
		expect(p.parse("Филимунга хат 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tat)", () => {
		expect(p.parse("Гыйбриләргә хат 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tat)", () => {
		expect(p.parse("Ягъкубтан хат 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tat)", () => {
		expect(p.parse("I Петердән хат 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петердән хат 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tat)", () => {
		expect(p.parse("II Петердән хат 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петердән хат 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tat)", () => {
		expect(p.parse("Яһүдәдән хат 1:1").osis()).toEqual("Jude.1.1");
	});
});
