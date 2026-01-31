"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/azj.js";

describe("Localized book Gen (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (azj)", () => {
		expect(p.parse("Yaradiliş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yar. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (azj)", () => {
		expect(p.parse("Çixiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çıx. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (azj)", () => {
		expect(p.parse("Levi̇li̇lər 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (azj)", () => {
		expect(p.parse("Saylar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Say. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (azj)", () => {
		expect(p.parse("Mərsi̇yələr 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mərs. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (azj)", () => {
		expect(p.parse("Vəhy 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (azj)", () => {
		expect(p.parse("Qanunun Təkrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Qanun. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (azj)", () => {
		expect(p.parse("Yeşua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (azj)", () => {
		expect(p.parse("Haki̇mlər 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hak. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (azj)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (azj)", () => {
		expect(p.parse("Yeşaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yeş. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (azj)", () => {
		expect(p.parse("1 Şamuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Şamuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Şamuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Şamuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (azj)", () => {
		expect(p.parse("2 Şamuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Şamuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("İki̇nci̇ Şamuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("İki̇nci̇. Şamuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (azj)", () => {
		expect(p.parse("1Şam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (azj)", () => {
		expect(p.parse("2Şam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (azj)", () => {
		expect(p.parse("1 Padşahlar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Padşahlar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Padşahlar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Padşahlar 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (azj)", () => {
		expect(p.parse("2 Padşahlar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Padşahlar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("İki̇nci̇ Padşahlar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("İki̇nci̇. Padşahlar 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (azj)", () => {
		expect(p.parse("1Pad. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (azj)", () => {
		expect(p.parse("2Pad. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (azj)", () => {
		expect(p.parse("1 Salnamələr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Salnamələr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Salnamələr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Salnamələr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (azj)", () => {
		expect(p.parse("2 Salnamələr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Salnamələr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki̇nci̇ Salnamələr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki̇nci̇. Salnamələr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (azj)", () => {
		expect(p.parse("1Saln. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (azj)", () => {
		expect(p.parse("2Saln. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (azj)", () => {
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (azj)", () => {
		expect(p.parse("Nehemya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (azj)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (azj)", () => {
		expect(p.parse("Əyyub 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Əyy. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (azj)", () => {
		expect(p.parse("Zəbur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zəb. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (azj)", () => {
		expect(p.parse("Süleymanin Məsəlləri̇ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sül. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (azj)", () => {
		expect(p.parse("Vai̇z 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vaiz 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (azj)", () => {
		expect(p.parse("Nəğmələr Nəğməsi̇ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nəğ. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (azj)", () => {
		expect(p.parse("Yeremya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (azj)", () => {
		expect(p.parse("Yezekel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yez. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (azj)", () => {
		expect(p.parse("Dani̇el 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (azj)", () => {
		expect(p.parse("Huşə 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (azj)", () => {
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (azj)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (azj)", () => {
		expect(p.parse("Avdi̇ya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Avd. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (azj)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (azj)", () => {
		expect(p.parse("Mi̇keya 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (azj)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (azj)", () => {
		expect(p.parse("Habaqquq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (azj)", () => {
		expect(p.parse("Sefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (azj)", () => {
		expect(p.parse("Haqqay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haq. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (azj)", () => {
		expect(p.parse("Zəkəri̇yyə 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zək. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (azj)", () => {
		expect(p.parse("Malaki̇ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (azj)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (azj)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (azj)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (azj)", () => {
		expect(p.parse("1Yəh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (azj)", () => {
		expect(p.parse("2Yəh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (azj)", () => {
		expect(p.parse("3 Yəhya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yəh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (azj)", () => {
		expect(p.parse("1 Yəhya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yəhya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Yəhya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Yəhya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (azj)", () => {
		expect(p.parse("2 Yəhya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yəhya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("İki̇nci̇ Yəhya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("İki̇nci̇. Yəhya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (azj)", () => {
		expect(p.parse("Yəhya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yəh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (azj)", () => {
		expect(p.parse("Həvari̇ləri̇n İşləri̇ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Həv. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (azj)", () => {
		expect(p.parse("Romalilara 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (azj)", () => {
		expect(p.parse("1 Kori̇nfli̇lərə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kori̇nfli̇lərə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Kori̇nfli̇lərə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Kori̇nfli̇lərə 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (azj)", () => {
		expect(p.parse("2 Kori̇nfli̇lərə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kori̇nfli̇lərə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki̇nci̇ Kori̇nfli̇lərə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki̇nci̇. Kori̇nfli̇lərə 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (azj)", () => {
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (azj)", () => {
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (azj)", () => {
		expect(p.parse("Kolosseli̇lərə 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (azj)", () => {
		expect(p.parse("Qalati̇yalilara 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Qal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (azj)", () => {
		expect(p.parse("Efesli̇lərə 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (azj)", () => {
		expect(p.parse("Fi̇li̇pi̇li̇lərə 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (azj)", () => {
		expect(p.parse("1 Saloni̇kli̇lərə 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Saloni̇kli̇lərə 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Saloni̇kli̇lərə 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Saloni̇kli̇lərə 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (azj)", () => {
		expect(p.parse("2 Saloni̇kli̇lərə 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Saloni̇kli̇lərə 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki̇nci̇ Saloni̇kli̇lərə 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki̇nci̇. Saloni̇kli̇lərə 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (azj)", () => {
		expect(p.parse("1Sal. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (azj)", () => {
		expect(p.parse("2Sal. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (azj)", () => {
		expect(p.parse("1 Ti̇moteyə 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti̇moteyə 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Ti̇moteyə 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Ti̇moteyə 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (azj)", () => {
		expect(p.parse("2 Ti̇moteyə 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti̇moteyə 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki̇nci̇ Ti̇moteyə 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki̇nci̇. Ti̇moteyə 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (azj)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (azj)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (azj)", () => {
		expect(p.parse("Ti̇tə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titə 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (azj)", () => {
		expect(p.parse("Fi̇li̇mona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (azj)", () => {
		expect(p.parse("İbrani̇lərə 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("İbr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (azj)", () => {
		expect(p.parse("Yaqub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (azj)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bi̇ri̇nci̇ Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bi̇ri̇nci̇. Peter 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (azj)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("İki̇nci̇ Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("İki̇nci̇. Peter 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (azj)", () => {
		expect(p.parse("1Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (azj)", () => {
		expect(p.parse("2Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (azj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (azj)", () => {
		expect(p.parse("Yəhuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yəhd. 1:1").osis()).toEqual("Jude.1.1");
	});
});
