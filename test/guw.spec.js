"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/guw.js";

describe("Localized book Gen (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (guw)", () => {
		expect(p.parse("Gẹnẹsisi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (guw)", () => {
		expect(p.parse("Eksọdusi 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (guw)", () => {
		expect(p.parse("Levitiku 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (guw)", () => {
		expect(p.parse("Osọha lẹ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (guw)", () => {
		expect(p.parse("Avigbè Jẹlemia Tọn 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (guw)", () => {
		expect(p.parse("Osọhia 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (guw)", () => {
		expect(p.parse("Deutelonomi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (guw)", () => {
		expect(p.parse("Jọṣua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (guw)", () => {
		expect(p.parse("Whẹ̀datọ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (guw)", () => {
		expect(p.parse("Luti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (guw)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (guw)", () => {
		expect(p.parse("1 Samuẹli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuẹli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (guw)", () => {
		expect(p.parse("2 Samuẹli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuẹli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (guw)", () => {
		expect(p.parse("1 Ahọlu Lẹ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ahọlu Lẹ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (guw)", () => {
		expect(p.parse("2 Ahọlu Lẹ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ahọlu Lẹ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (guw)", () => {
		expect(p.parse("1 Otànnugbo Lẹ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Otànnugbo Lẹ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (guw)", () => {
		expect(p.parse("2 Otànnugbo Lẹ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Otànnugbo Lẹ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (guw)", () => {
		expect(p.parse("Ẹzla 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (guw)", () => {
		expect(p.parse("Nẹhemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (guw)", () => {
		expect(p.parse("Ẹsteli 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (guw)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (guw)", () => {
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (guw)", () => {
		expect(p.parse("Hówhínwhén Lẹ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (guw)", () => {
		expect(p.parse("Yewhehódọtọ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (guw)", () => {
		expect(p.parse("Ohàn Sọlọmọni Tọn 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (guw)", () => {
		expect(p.parse("Jẹlemia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (guw)", () => {
		expect(p.parse("Ezekieli 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (guw)", () => {
		expect(p.parse("Daniẹli 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (guw)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (guw)", () => {
		expect(p.parse("Joẹli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (guw)", () => {
		expect(p.parse("Amọsi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (guw)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (guw)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (guw)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (guw)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (guw)", () => {
		expect(p.parse("Habbakuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (guw)", () => {
		expect(p.parse("Zẹfania 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (guw)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (guw)", () => {
		expect(p.parse("Zekalia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (guw)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (guw)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (guw)", () => {
		expect(p.parse("Malku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (guw)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (guw)", () => {
		expect(p.parse("1 Johanu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johanu 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (guw)", () => {
		expect(p.parse("2 Johanu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johanu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (guw)", () => {
		expect(p.parse("3 Johanu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johanu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (guw)", () => {
		expect(p.parse("Johanu 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (guw)", () => {
		expect(p.parse("Owalọ Apọsteli Lẹ Tọn 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (guw)", () => {
		expect(p.parse("Lomunu Lẹ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (guw)", () => {
		expect(p.parse("1 Kọlintinu Lẹ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọlintinu Lẹ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (guw)", () => {
		expect(p.parse("2 Kọlintinu Lẹ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọlintinu Lẹ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (guw)", () => {
		expect(p.parse("Kọlọsinu 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (guw)", () => {
		expect(p.parse("Galatianu Lẹ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (guw)", () => {
		expect(p.parse("Efesunu Lẹ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (guw)", () => {
		expect(p.parse("Filippinu Lẹ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (guw)", () => {
		expect(p.parse("1 Tẹsalonikanu Le 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẹsalonikanu Le 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (guw)", () => {
		expect(p.parse("2 Tẹsalonikanu Lẹ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẹsalonikanu Lẹ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (guw)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (guw)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (guw)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (guw)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (guw)", () => {
		expect(p.parse("Heblu Lẹ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (guw)", () => {
		expect(p.parse("Jakobu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (guw)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (guw)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (guw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (guw)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});
