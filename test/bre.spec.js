"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bre.js";

describe("Localized book Gen (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bre)", () => {
		expect(p.parse("Geneliezh 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bre)", () => {
		expect(p.parse("Ermaeziadeg 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ermaeziaeg 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bre)", () => {
		expect(p.parse("Leviegezh 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bre)", () => {
		expect(p.parse("Niveroù 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Niv 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bre)", () => {
		expect(p.parse("Klemmganoù 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bre)", () => {
		expect(p.parse("Diskuliadur 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Diskuladur 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalyps 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bre)", () => {
		expect(p.parse("Adlezenn 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bre)", () => {
		expect(p.parse("Jozue 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bre)", () => {
		expect(p.parse("Ar Varnerien 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Varnerien 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bre)", () => {
		expect(p.parse("Rud 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bre)", () => {
		expect(p.parse("Izaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bre)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bre)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bre)", () => {
		expect(p.parse("1 Rouaned 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rouaned 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Rouaned 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Rouaned 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bre)", () => {
		expect(p.parse("2 Rouned 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rouned 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Rouned 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Rouned 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bre)", () => {
		expect(p.parse("1 Danevelloù 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Danevelloù 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Danevelloù 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Danevelloù 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bre)", () => {
		expect(p.parse("2 Danevelloù 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Danevelloù 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Danevelloù 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Danevelloù 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bre)", () => {
		expect(p.parse("Ezdra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bre)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bre)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bre)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bre)", () => {
		expect(p.parse("Psalmou 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmoù 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bre)", () => {
		expect(p.parse("Krennlavarioù 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bre)", () => {
		expect(p.parse("Ar Prezeger 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prezeger 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bre)", () => {
		expect(p.parse("Kanenn ar C’hanennoù 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bre)", () => {
		expect(p.parse("Jeremiaz 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bre)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bre)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bre)", () => {
		expect(p.parse("Ozea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bre)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bre)", () => {
		expect(p.parse("Amoz 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bre)", () => {
		expect(p.parse("Abdia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bre)", () => {
		expect(p.parse("Jonaz 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bre)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bre)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bre)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bre)", () => {
		expect(p.parse("Sofonia 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bre)", () => {
		expect(p.parse("Agge 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bre)", () => {
		expect(p.parse("Zakaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bre)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bre)", () => {
		expect(p.parse("Sant Vaze 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("St. Maheu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mazhev 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maheu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Vaze 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bre)", () => {
		expect(p.parse("Sant Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bre)", () => {
		expect(p.parse("Sant Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaz 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bre)", () => {
		expect(p.parse("III S. Ian 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yann 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ian 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bre)", () => {
		expect(p.parse("1 S. Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yann 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. S. Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yann 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I S. Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yann 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. S. Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yann 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ian 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bre)", () => {
		expect(p.parse("2 S. Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yann 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. S. Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yann 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II S. Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yann 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. S. Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yann 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ian 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bre)", () => {
		expect(p.parse("Sant Ian 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yann 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ian 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bre)", () => {
		expect(p.parse("Oberoù an Ebestel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Actou an Ebestel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Actou 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bre)", () => {
		expect(p.parse("Romaned 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bre)", () => {
		expect(p.parse("1 Corintied 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintied 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintied 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintiz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintied 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintiz 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bre)", () => {
		expect(p.parse("2 Corintied 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintied 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintied 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintiz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintied 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintiz 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bre)", () => {
		expect(p.parse("Colossied 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloseiz 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bre)", () => {
		expect(p.parse("Galated 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bre)", () => {
		expect(p.parse("Ephezied 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeziz 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bre)", () => {
		expect(p.parse("Philippied 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipiz 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philip. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bre)", () => {
		expect(p.parse("1 Thessalonied 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonikiz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonied 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikiz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonied 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonikiz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonied 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonikiz 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bre)", () => {
		expect(p.parse("2 Thessalonied 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonikiz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonied 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikiz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonied 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonikiz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonied 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonikiz 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bre)", () => {
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bre)", () => {
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bre)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bre)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bre)", () => {
		expect(p.parse("Hebreed 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bre)", () => {
		expect(p.parse("S. Jakes 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakes 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakez 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bre)", () => {
		expect(p.parse("1 Pêr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pêr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pêr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pêr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bre)", () => {
		expect(p.parse("I. S. Per 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Per 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bre)", () => {
		expect(p.parse("2 S. Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pêr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. S. Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pêr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II S. Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pêr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. S. Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Per 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pêr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bre)", () => {
		expect(p.parse("S. Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
