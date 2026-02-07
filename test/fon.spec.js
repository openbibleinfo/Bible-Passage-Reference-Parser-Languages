"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fon.js";

describe("Localized book Gen (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fon)", () => {
		expect(p.parse("Bǐbɛ́mɛ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fon)", () => {
		expect(p.parse("Tíntɔ́n 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fon)", () => {
		expect(p.parse("Levíi ví 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fon)", () => {
		expect(p.parse("Kɛ́nsísɔ́ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (fon)", () => {
		expect(p.parse("Silaki ví 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (fon)", () => {
		expect(p.parse("Sɛ́núnywɛ́ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fon)", () => {
		expect(p.parse("Gbɛvíhan 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (fon)", () => {
		expect(p.parse("Jelemíi wlán 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fon)", () => {
		expect(p.parse("Nǔɖexlɛ́mɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fon)", () => {
		expect(p.parse("Sɛ́nflínmɛ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fon)", () => {
		expect(p.parse("Jozuwée 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fon)", () => {
		expect(p.parse("Hwɛɖɔtɔ́ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fon)", () => {
		expect(p.parse("Hwliti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fon)", () => {
		expect(p.parse("Ezayíi 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fon)", () => {
		expect(p.parse("1 Samuwɛ́li 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuwɛ́li 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fon)", () => {
		expect(p.parse("2 Samuwɛ́li 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuwɛ́li 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fon)", () => {
		expect(p.parse("1 Axɔ́sú 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Axɔ́sú 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fon)", () => {
		expect(p.parse("2 Axɔ́sú 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Axɔ́sú 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fon)", () => {
		expect(p.parse("1 Tan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fon)", () => {
		expect(p.parse("2 Tan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fon)", () => {
		expect(p.parse("Ɛsidlási 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fon)", () => {
		expect(p.parse("Nɛɛmíi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fon)", () => {
		expect(p.parse("Jɔ̌bu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fon)", () => {
		expect(p.parse("Ɖɛhan 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fon)", () => {
		expect(p.parse("Nǔnywɛ́xó 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fon)", () => {
		expect(p.parse("Nǔnywɛ́tɔ́xó 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fon)", () => {
		expect(p.parse("Hanvíví 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fon)", () => {
		expect(p.parse("Jelemíi 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fon)", () => {
		expect(p.parse("Ezekiyɛ́li 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fon)", () => {
		expect(p.parse("Ozée 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fon)", () => {
		expect(p.parse("Jowɛ́li 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fon)", () => {
		expect(p.parse("Amɔ́si 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fon)", () => {
		expect(p.parse("Abudiyási 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fon)", () => {
		expect(p.parse("Jonási 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fon)", () => {
		expect(p.parse("Micée 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fon)", () => {
		expect(p.parse("Naxúmu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fon)", () => {
		expect(p.parse("Xabakúku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fon)", () => {
		expect(p.parse("Sofoníi 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fon)", () => {
		expect(p.parse("Ajée 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fon)", () => {
		expect(p.parse("Zakalíi 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fon)", () => {
		expect(p.parse("Malacíi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fon)", () => {
		expect(p.parse("Matíe 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fon)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fon)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fon)", () => {
		expect(p.parse("1 Jǎan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jǎan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fon)", () => {
		expect(p.parse("2 Jǎan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jǎan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fon)", () => {
		expect(p.parse("3 Jǎan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jǎan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fon)", () => {
		expect(p.parse("Jǎan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fon)", () => {
		expect(p.parse("Mɛsɛ́dó 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fon)", () => {
		expect(p.parse("Hlɔ̌manu 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fon)", () => {
		expect(p.parse("1 Kɔlɛ́ntinu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔlɛ́ntinu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fon)", () => {
		expect(p.parse("2 Kɔlɛ́ntinu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔlɛ́ntinu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fon)", () => {
		expect(p.parse("Kolósinu 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fon)", () => {
		expect(p.parse("Galatinu 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fon)", () => {
		expect(p.parse("Efɛ́zinu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fon)", () => {
		expect(p.parse("Filípunu 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fon)", () => {
		expect(p.parse("1 Tɛsalonikinu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonikinu 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fon)", () => {
		expect(p.parse("2 Tɛsalonikinu 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonikinu 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fon)", () => {
		expect(p.parse("1 Timɔtée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔtée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fon)", () => {
		expect(p.parse("2 Timɔtée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔtée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fon)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fon)", () => {
		expect(p.parse("Filemɔ́ɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fon)", () => {
		expect(p.parse("Eblée 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fon)", () => {
		expect(p.parse("Jaki 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fon)", () => {
		expect(p.parse("1 Piyɛ́ɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛ́ɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fon)", () => {
		expect(p.parse("2 Piyɛ́ɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛ́ɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fon)", () => {
		expect(p.parse("Judi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (fon)", () => {
		expect(p.parse("Tobíi 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (fon)", () => {
		expect(p.parse("Judíti 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (fon)", () => {
		expect(p.parse("Balúki 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fon)", () => {
		expect(p.parse("1 Makabée 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabée 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fon)", () => {
		expect(p.parse("2 Makabée 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabée 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fon)", () => {
		expect(p.parse("Daniyɛ́li 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fon)", () => {
		expect(p.parse("Ɛsitɛ́ɛ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Parser helper should handle book ranges (fon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (fon)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jǎan - 3 Jǎan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jǎan – 3 Jǎan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jǎan — 3 Jǎan").osis()).toEqual("1John.1-3John.1");
	});
});
