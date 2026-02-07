"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gaz.js";

describe("Localized book Gen (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gaz)", () => {
		expect(p.parse("Seera Uumamaa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Uumama 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Uma 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ኡመመ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ኡመ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gaz)", () => {
		expect(p.parse("Seera Ba'uu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Baʼuu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Bau 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("በኡ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gaz)", () => {
		expect(p.parse("Seera Lewwootaa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewwota 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌዎተ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌዎ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gaz)", () => {
		expect(p.parse("Seera Lakkoobsaa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lakkoobsa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ለኮብሰ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ለኮ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gaz)", () => {
		expect(p.parse("Faaruu Ermiyaas 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Faaruu 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Faru 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Fru 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ፋሩ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gaz)", () => {
		expect(p.parse("Mul'ata Yohannis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mulʼata 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ሙልአተ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mul 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ሙል 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gaz)", () => {
		expect(p.parse("Seera Keessa Deebii 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Keessa Deebii 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ኬሰ ዴቢ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("KeD 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ኬዴ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gaz)", () => {
		expect(p.parse("Macaafa Iyaasuu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iyyaasuu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iya 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("እያሱ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("እያ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gaz)", () => {
		expect(p.parse("Macaafa Abboota Firdii 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abbootii Murtii 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("አቦቲ ሙርቲ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("AbM 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("አቦሙ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gaz)", () => {
		expect(p.parse("Macaafa Ruut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ሩት 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gaz)", () => {
		expect(p.parse("1 Saamu'el Isa Duraa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Saamuʼeel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saamu'el Isa Duraa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saamuʼeel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Macaafa Saamu'el Isa Duraa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Macaafa Saamuʼeel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Macaafa ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Macaafa. Saamu'el Isa Duraa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Macaafa. Saamuʼeel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Macaafa. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gaz)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ሳሙ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gaz)", () => {
		expect(p.parse("2 Saamu'el Isa Lammaffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Saamuʼeel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saamu'el Isa Lammaffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saamuʼeel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Macaafa Saamu'el Isa Lammaffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Macaafa Saamuʼeel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Macaafa ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Macaafa. Saamu'el Isa Lammaffaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Macaafa. Saamuʼeel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Macaafa. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gaz)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ሳሙ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gaz)", () => {
		expect(p.parse("1 Moototaa Isa Duraa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mootota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ሞቶተ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Moototaa Isa Duraa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mootota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ሞቶተ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Macaafa Moototaa Isa Duraa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Macaafa Mootota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Macaafa ሞቶተ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Macaafa. Moototaa Isa Duraa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Macaafa. Mootota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Macaafa. ሞቶተ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gaz)", () => {
		expect(p.parse("1Mot 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Mt 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ሞቶ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gaz)", () => {
		expect(p.parse("2 Moototaa Isa Lammaffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mootota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ሞቶተ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Moototaa Isa Lammaffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mootota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ሞቶተ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Macaafa Moototaa Isa Lammaffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Macaafa Mootota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Macaafa ሞቶተ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Macaafa. Moototaa Isa Lammaffaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Macaafa. Mootota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Macaafa. ሞቶተ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gaz)", () => {
		expect(p.parse("2Mot 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Mt 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ሞቶ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gaz)", () => {
		expect(p.parse("1 Seenaa Baraa Isa Duraa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Seenaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ሴና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Seenaa Baraa Isa Duraa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Seenaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ሴና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Macaafa Seenaa Baraa Isa Duraa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Macaafa Seenaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Macaafa ሴና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Macaafa. Seenaa Baraa Isa Duraa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Macaafa. Seenaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Macaafa. ሴና 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gaz)", () => {
		expect(p.parse("1Sen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Sn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ሴና 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gaz)", () => {
		expect(p.parse("2 Seenaa Baraa Isa Lammaffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Seenaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ሴና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Seenaa Baraa Isa Lammaffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Seenaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ሴና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Macaafa Seenaa Baraa Isa Lammaffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Macaafa Seenaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Macaafa ሴና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Macaafa. Seenaa Baraa Isa Lammaffaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Macaafa. Seenaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Macaafa. ሴና 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Isa (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gaz)", () => {
		expect(p.parse("Macaafa Isaayaas Raajichaa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaayyaas 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("እሳያስ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("እሳ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Chr (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gaz)", () => {
		expect(p.parse("2Sen 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Sn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ሴና 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gaz)", () => {
		expect(p.parse("Macaafa Izraa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izraa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("እዝራ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("እዝ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gaz)", () => {
		expect(p.parse("Macaafa Nahimiiyaa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nahimiyaa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ነህምያ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ነህ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gaz)", () => {
		expect(p.parse("Macaafa Asteer 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Asteer 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስቴር 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("As 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gaz)", () => {
		expect(p.parse("Macaafa Iyoob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyyoob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("እዮብ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ኢዮ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gaz)", () => {
		expect(p.parse("Macaafa Faarfannaa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Faarfannaa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ፋርፈትና 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Far 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ፋር 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gaz)", () => {
		expect(p.parse("Macaafa Fakkeenyaa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Fakkeenya 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Fak 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ፈኬኘ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ፈኬ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gaz)", () => {
		expect(p.parse("Macaafa Lallabaa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Lallaba 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Lal 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ለለበ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ለለ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gaz)", () => {
		expect(p.parse("Macaafa Weedduu Weedduu Caalu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Weedduu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wed 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ዌዱ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gaz)", () => {
		expect(p.parse("Macaafa Ermiyaas Raajichaa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ermiyaas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርምያስ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Er 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤር 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gaz)", () => {
		expect(p.parse("Macaafa Hisqi'el Raajichaa 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hisqiʼeel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ህስቅኤል 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("His 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ህስ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gaz)", () => {
		expect(p.parse("Macaafa Daani'el Raajichaa 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daaniʼel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳንኤል 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳን 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gaz)", () => {
		expect(p.parse("Macaafa Hose'a Raajichaa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hooseʼaa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴኣ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gaz)", () => {
		expect(p.parse("Macaafa Yo'el Raajichaa 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yooʼeel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ዮኤል 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ዮኤ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gaz)", () => {
		expect(p.parse("Macaafa Amos Raajichaa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amoos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞስ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gaz)", () => {
		expect(p.parse("Macaafa Obaadiiyaa Raajichaa 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obaadiyaa 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ኦባድያ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብድ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gaz)", () => {
		expect(p.parse("Yoonaas Raajichaa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoonaas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮናስ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮና 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gaz)", () => {
		expect(p.parse("Macaafa Miikiyaas Raajichaa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miikiyaas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክያስ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gaz)", () => {
		expect(p.parse("Macaafa Naahom Raajichaa 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naahoom 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naho 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nho 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ነሆም 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gaz)", () => {
		expect(p.parse("Macaafa Anbaaqom Raajichaa 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Anbaaqoom 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("አንባቆም 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Anb 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("አንባ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("An 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gaz)", () => {
		expect(p.parse("Macaafa Sefaaniyaa Raajichaa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefaaniyaa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሴፋንያ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሴፋ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gaz)", () => {
		expect(p.parse("Macaafa Haagee Raajichaa 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haagee 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሃጌ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gaz)", () => {
		expect(p.parse("Macaafa Zakaariyaas Raajichaa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakkaariyaas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዘካርያስ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዘካ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gaz)", () => {
		expect(p.parse("Macaafa Miilkiyaas Raajichaa 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Miilkiyaas 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚልክያስ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚል 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gaz)", () => {
		expect(p.parse("Wangeela Maatewos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maatewos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴዎስ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gaz)", () => {
		expect(p.parse("Wangeela Maarqos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maarqos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆስ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gaz)", () => {
		expect(p.parse("Wangeela Luqaas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqaas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃስ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gaz)", () => {
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሀ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gaz)", () => {
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሀ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gaz)", () => {
		expect(p.parse("3 Ergaa Yohannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሀንስ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሀ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gaz)", () => {
		expect(p.parse("1 Ergaa Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሀንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ergaa Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሀንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Macaafa Ergaa Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Macaafa Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Macaafa ዮሀንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Macaafa. Ergaa Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Macaafa. Yohannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Macaafa. ዮሀንስ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gaz)", () => {
		expect(p.parse("2 Ergaa Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሀንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ergaa Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሀንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Macaafa Ergaa Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Macaafa Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Macaafa ዮሀንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Macaafa. Ergaa Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Macaafa. Yohannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Macaafa. ዮሀንስ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gaz)", () => {
		expect(p.parse("Wangeela Yohannis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohannis 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሀንስ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሀ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gaz)", () => {
		expect(p.parse("Hojii Ergamootaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hojii 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("HoE 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hoj 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሆጂ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gaz)", () => {
		expect(p.parse("Gara Warra Roomaa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomaa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮማ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gaz)", () => {
		expect(p.parse("1 Gara Warra Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gara Warra Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Macaafa Gara Warra Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Macaafa Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Macaafa ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Macaafa. Gara Warra Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Macaafa. Qorontos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Macaafa. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gaz)", () => {
		expect(p.parse("2 Gara Warra Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gara Warra Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Macaafa Gara Warra Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Macaafa Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Macaafa ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Macaafa. Gara Warra Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Macaafa. Qorontos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Macaafa. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gaz)", () => {
		expect(p.parse("1Qor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gaz)", () => {
		expect(p.parse("2Qor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gaz)", () => {
		expect(p.parse("Gara Warra Qolosaayis 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qolosaayis 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆሎሳይስ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆሎ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gaz)", () => {
		expect(p.parse("Gara Warra Galaatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gaz)", () => {
		expect(p.parse("Gara Warra Efesoon 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesoon 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌሶን 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gaz)", () => {
		expect(p.parse("Gara Warra Filiphisiiyus 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fiiliphisiyuus 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊልጵስዩስ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊል 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gaz)", () => {
		expect(p.parse("1 Gara Warra Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰሎኒቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Gara Warra Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎኒቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Macaafa Gara Warra Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Macaafa Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Macaafa ተሰሎኒቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Macaafa. Gara Warra Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Macaafa. Tasaloniiqee 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Macaafa. ተሰሎኒቄ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gaz)", () => {
		expect(p.parse("2 Gara Warra Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተሰሎኒቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Gara Warra Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰሎኒቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Macaafa Gara Warra Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Macaafa Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Macaafa ተሰሎኒቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Macaafa. Gara Warra Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Macaafa. Tasaloniiqee 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Macaafa. ተሰሎኒቄ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gaz)", () => {
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ተሰ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gaz)", () => {
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ተሰ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gaz)", () => {
		expect(p.parse("1 Gara Thimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Xiimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Gara Thimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Xiimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Macaafa Gara Thimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Macaafa Xiimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Macaafa ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Macaafa. Gara Thimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Macaafa. Xiimotewos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Macaafa. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gaz)", () => {
		expect(p.parse("2 Gara Thimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Xiimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Gara Thimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Xiimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Macaafa Gara Thimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Macaafa Xiimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Macaafa ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Macaafa. Gara Thimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Macaafa. Xiimotewos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Macaafa. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gaz)", () => {
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ጢሞ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gaz)", () => {
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ጢሞ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gaz)", () => {
		expect(p.parse("Gara Tiitoos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiitoo 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gaz)", () => {
		expect(p.parse("Gara Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fiilmoonaa 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊሞ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gaz)", () => {
		expect(p.parse("Gara Ibrootaa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibroota 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብሮተ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብሮ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gaz)", () => {
		expect(p.parse("Ergaa Yaaqoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaaqoob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆብ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gaz)", () => {
		expect(p.parse("1 Ergaa Phethros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phexros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ergaa Phethros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phexros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Macaafa Ergaa Phethros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Macaafa Phexros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Macaafa ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Macaafa. Ergaa Phethros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Macaafa. Phexros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Macaafa. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gaz)", () => {
		expect(p.parse("2 Ergaa Phethros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phexros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ergaa Phethros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phexros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Macaafa Ergaa Phethros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Macaafa Phexros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Macaafa ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Macaafa. Ergaa Phethros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Macaafa. Phexros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Macaafa. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gaz)", () => {
		expect(p.parse("1Phe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Ph 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴጥ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gaz)", () => {
		expect(p.parse("2Phe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Ph 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴጥ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gaz)", () => {
		expect(p.parse("Ergaa Yihudaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihuudaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yhd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gaz)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoh - 3 Ergaa Yohannis").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoh – 3 Ergaa Yohannis").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoh — 3 Ergaa Yohannis").osis()).toEqual("1John.1-3John.1");
	});
});
