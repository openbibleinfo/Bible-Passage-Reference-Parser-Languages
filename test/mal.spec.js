"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mal.js";

describe("Localized book Gen (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mal)", () => {
		expect(p.parse("ഉൽപ്പത്തി 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ഉല്പത്തി 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ഉൽപത്തി 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ഉല്പ. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ഉൽ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mal)", () => {
		expect(p.parse("പുറപ്പാടു 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("പുറപ്പാട് 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("പുറ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mal)", () => {
		expect(p.parse("ലേവ്യാപുസ്തകം 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ലേവ്യപുസ്തകം 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ലേവ്യാ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ലേവ്യ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ലേവ്യ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mal)", () => {
		expect(p.parse("സംഖ്യാപുസ്തകം 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numbers 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("സംഖ്യാ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("സംഖ്യ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("സംഖ്യാ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("സംഖ്യ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mal)", () => {
		expect(p.parse("വിലാപങ്ങൾ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ṭah Hla 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("വിലാ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ṭah. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mal)", () => {
		expect(p.parse("വെളിപ്പാടു 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("വെളിപ്പാട് 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Thupuan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Thup. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("വെളി. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mal)", () => {
		expect(p.parse("ആവർത്തനപുസ്തകം 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomy 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ആവർത്തനം 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ആവർ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ആവ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mal)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("യോശു. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("യോശുവ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mal)", () => {
		expect(p.parse("ന്യായാധിപന്മാർ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Roreltute 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ന്യായാ. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mal)", () => {
		expect(p.parse("രൂത്ത്. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("രൂത്ത് 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mal)", () => {
		expect(p.parse("യെശയ്യാവു 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("യെശയ്യാവ് 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("യെശ. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mal)", () => {
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ശമുവേൽ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ശമൂവേൽ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ശമു. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ശമൂ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ശമുവേൽ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ശമൂവേൽ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ശമു. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ശമൂ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mal)", () => {
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ശമുവേൽ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ശമൂവേൽ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ശമു. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ശമൂ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ശമുവേൽ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ശമൂവേൽ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ശമു. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ശമൂ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mal)", () => {
		expect(p.parse("1 രാജാക്കന്മാർ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Lalte 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 രാജാ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. രാജാക്കന്മാർ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Lalte 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. രാജാ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mal)", () => {
		expect(p.parse("2 രാജാക്കന്മാർ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Lalte 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 രാജാ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. രാജാക്കന്മാർ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Lalte 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. രാജാ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mal)", () => {
		expect(p.parse("1 ദിനവൃത്താന്തം 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ദിന. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ദിനവൃത്താന്തം 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ദിന. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mal)", () => {
		expect(p.parse("2 ദിനവൃത്താന്തം 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ദിന. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ദിനവൃത്താന്തം 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ദിന. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mal)", () => {
		expect(p.parse("എസ്രാ. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("എസ്രാ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mal)", () => {
		expect(p.parse("നെഹെമ്യാവു 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("നെഹെമ്യാവ് 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("നെഹെ. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("നെഹ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mal)", () => {
		expect(p.parse("Estheri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("എസ്ഥേ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("എസ്ഥേർ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mal)", () => {
		expect(p.parse("ഇയ്യോബ് 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ഇയ്യോ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Joba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mal)", () => {
		expect(p.parse("സങ്കീർത്തനങ്ങൾ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("സങ്കീ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sam 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mal)", () => {
		expect(p.parse("സദൃശവാക്യങ്ങൾ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thufingte 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thuf. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("സദൃ. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mal)", () => {
		expect(p.parse("സഭാപ്രസംഗി 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thuhriltu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thuh. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("സഭാ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mal)", () => {
		expect(p.parse("Hla Chhuanvâwr 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ഉത്തമഗീതം 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ഉത്ത. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hla. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mal)", () => {
		expect(p.parse("യിരെമ്യാവു 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("യിരെമ്യാവ് 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("യിരെ. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("യിര. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mal)", () => {
		expect(p.parse("യെഹെസ്കേൽ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("യെഹെ. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("യെഹ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mal)", () => {
		expect(p.parse("Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ദാനീയേൽ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ദാനി. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ദാനീ. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mal)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ഹോശേ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ഹോശേയ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ഹോശ. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mal)", () => {
		expect(p.parse("Joel. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("യോവേ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("യോവേൽ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mal)", () => {
		expect(p.parse("Amos. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ആമോസ് 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ആമോ. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mal)", () => {
		expect(p.parse("ഓബദ്യാവു 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ഓബദ്യാവ് 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ഒബ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ഓബ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mal)", () => {
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("യോന. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("യോനാ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mal)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("മീഖ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("മീഖാ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mal)", () => {
		expect(p.parse("Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("നഹു. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("നഹൂം 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mal)", () => {
		expect(p.parse("ഹബക്കൂക്ക് 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ഹബക്കൂക് 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ഹബക്കൂൿ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ഹബ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mal)", () => {
		expect(p.parse("സെഫന്യാവു 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("സെഫന്യാവ് 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("സെഫ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mal)", () => {
		expect(p.parse("ഹഗ്ഗായി 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagaia 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ഹഗ്ഗാ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mal)", () => {
		expect(p.parse("സെഖര്യാവു 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("സെഖര്യാവ് 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("സെഖ. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mal)", () => {
		expect(p.parse("Malakia 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("മലാഖി 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("മലാ. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mal)", () => {
		expect(p.parse("Mathaia 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("മത്തായി 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("മത്താ. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("മത്താ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mal)", () => {
		expect(p.parse("മർക്കൊസ് 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മർക്കോസ് 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മർക്കൊ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മർക്കോ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മർക്കൊ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("മർ. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mal)", () => {
		expect(p.parse("ലൂക്കൊസ് 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കോസ് 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കൊ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കോ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ലൂക്കൊ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mal)", () => {
		expect(p.parse("3. യോഹന്നാൻ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 യോഹന്നാൻ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 യോഹ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mal)", () => {
		expect(p.parse("1 യോഹന്നാൻ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 യോഹ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. യോഹന്നാൻ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. യോഹ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mal)", () => {
		expect(p.parse("2 യോഹന്നാൻ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 യോഹ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. യോഹന്നാൻ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. യോഹ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mal)", () => {
		expect(p.parse("യോഹന്നാൻ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("യോഹ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mal)", () => {
		expect(p.parse("അപ്പൊ. പ്രവൃത്തികൾ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("അപ്പോ.പ്രവൃത്തികൾ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("അപ്പോ. പ്ര. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("പ്രവൃത്തികൾ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tirhkohte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("അ.പ്ര. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mal)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("റോമ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("റോമർ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mal)", () => {
		expect(p.parse("1 കൊരിന്ത്യർ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 കൊരി. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരിന്ത്യർ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. കൊരി. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mal)", () => {
		expect(p.parse("2 കൊരിന്ത്യർ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 കൊരി. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരിന്ത്യർ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. കൊരി. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mal)", () => {
		expect(p.parse("കൊലൊസ്സ്യർ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("കൊലോസ്യർ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("കൊലൊ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("കൊലോ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mal)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ഗലാത്യർ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ഗലാ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mal)", () => {
		expect(p.parse("എഫെസ്യർ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("എഫേസ്യർ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("എഫെ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("എഫേ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mal)", () => {
		expect(p.parse("ഫിലിപ്പിയർ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ഫിലി. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mal)", () => {
		expect(p.parse("1 തെസ്സലൊനീക്യർ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 തെസ്സലോനിക്യർ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 തെസ്സ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെസ്സലൊനീക്യർ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെസ്സലോനിക്യർ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. തെസ്സ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mal)", () => {
		expect(p.parse("2 തെസ്സലൊനീക്യർ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 തെസ്സലോനിക്യർ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 തെസ്സ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെസ്സലൊനീക്യർ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെസ്സലോനിക്യർ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. തെസ്സ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mal)", () => {
		expect(p.parse("1 തിമോത്തിയോസ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 തിമൊഥെയൊസ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 തിമൊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 തിമോ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമോത്തിയോസ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമൊഥെയൊസ് 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothea 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമൊ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. തിമോ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mal)", () => {
		expect(p.parse("2 തിമോത്തിയോസ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 തിമൊഥെയൊസ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 തിമൊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 തിമോ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമോത്തിയോസ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമൊഥെയൊസ് 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothea 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമൊ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. തിമോ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mal)", () => {
		expect(p.parse("തീത്തൊസിന് 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തൊസ് 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തോസ് 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തൊ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തോ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("തീത്തൊ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tita 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mal)", () => {
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ഫിലേമൊന് 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ഫിലേമോൻ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ഫിലേ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mal)", () => {
		expect(p.parse("എബ്രായർ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrai 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("എബ്രാ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mal)", () => {
		expect(p.parse("യാക്കോബ് 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("യാക്കോ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakoba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mal)", () => {
		expect(p.parse("1 പത്രൊസ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 പത്രോസ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 പത്രൊ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 പത്രോ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്രൊസ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്രോസ് 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്രൊ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. പത്രോ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mal)", () => {
		expect(p.parse("2 പത്രൊസ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 പത്രോസ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 പത്രൊ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 പത്രോ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്രൊസ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്രോസ് 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്രൊ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. പത്രോ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mal)", () => {
		expect(p.parse("യൂദാ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("യൂദാ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mal)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 യോഹന്നാൻ - 3. യോഹന്നാൻ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 യോഹന്നാൻ – 3. യോഹന്നാൻ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 യോഹന്നാൻ — 3. യോഹന്നാൻ").osis()).toEqual("1John.1-3John.1");
	});
});
