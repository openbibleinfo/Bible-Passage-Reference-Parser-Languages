"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mkl.js";

describe("Localized book Gen (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mkl)", () => {
		expect(p.parse("Kusintii Andunya 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("K.A. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mkl)", () => {
		expect(p.parse("Kufita 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mkl)", () => {
		expect(p.parse("Kuwee 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mkl)", () => {
		expect(p.parse("Kuka 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mkl)", () => {
		expect(p.parse("Kukpata 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mkl)", () => {
		expect(p.parse("Kuyɛi Zãa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mkl)", () => {
		expect(p.parse("Wooda ku kɔsi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mkl)", () => {
		expect(p.parse("Zozue 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mkl)", () => {
		expect(p.parse("Woo kiiti ŋa 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Woo kiiti 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mkl)", () => {
		expect(p.parse("Ruutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mkl)", () => {
		expect(p.parse("Ezai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mkl)", () => {
		expect(p.parse("Samuɛli 1, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Samuɛli 1 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mkl)", () => {
		expect(p.parse("Samuɛli 2, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Samuɛli 2 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mkl)", () => {
		expect(p.parse("Ilaalu ŋa 1 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ilaalu 1, 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mkl)", () => {
		expect(p.parse("Ilaalu ŋa 2 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ilaalu 2, 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mkl)", () => {
		expect(p.parse("Bomma 1, 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bomma 1 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mkl)", () => {
		expect(p.parse("Bomma 2, 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Bomma 2 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mkl)", () => {
		expect(p.parse("Ɛsidarasi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mkl)", () => {
		expect(p.parse("Neemi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mkl)", () => {
		expect(p.parse("Ɛsitɛɛ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mkl)", () => {
		expect(p.parse("Zɔɔbu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mkl)", () => {
		expect(p.parse("Mɔnda ŋa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mɔnda 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mkl)", () => {
		expect(p.parse("Woo lasabu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mkl)", () => {
		expect(p.parse("Iri ku kɔ̃ iyi í dɔ̃ í re 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mkl)", () => {
		expect(p.parse("Iri ku kɔ̃ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mkl)", () => {
		expect(p.parse("Zeremi 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mkl)", () => {
		expect(p.parse("Ezekiɛli 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mkl)", () => {
		expect(p.parse("Daniɛli 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mkl)", () => {
		expect(p.parse("Ozee 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mkl)", () => {
		expect(p.parse("Zoɛli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mkl)", () => {
		expect(p.parse("Amɔsu 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mkl)", () => {
		expect(p.parse("Abudiasi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mkl)", () => {
		expect(p.parse("Zonasi 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mkl)", () => {
		expect(p.parse("Misee 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mkl)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mkl)", () => {
		expect(p.parse("Abakuku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mkl)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mkl)", () => {
		expect(p.parse("Azee 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mkl)", () => {
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mkl)", () => {
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mkl)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mkl)", () => {
		expect(p.parse("Maaku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mkl)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mkl)", () => {
		expect(p.parse("Zãa 1, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Zãa 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mkl)", () => {
		expect(p.parse("Zãa 2, 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zãa 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mkl)", () => {
		expect(p.parse("Zãa 3, 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Zãa 3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mkl)", () => {
		expect(p.parse("Zãa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mkl)", () => {
		expect(p.parse("Woo bɛ ŋa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Woo bɛ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mkl)", () => {
		expect(p.parse("Romu 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mkl)", () => {
		expect(p.parse("Kɔrɛnti 1, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kɔrɛnti 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mkl)", () => {
		expect(p.parse("Kɔrɛnti 2, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kɔrɛnti 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mkl)", () => {
		expect(p.parse("Kolosee 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mkl)", () => {
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mkl)", () => {
		expect(p.parse("Efɛɛzu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mkl)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mkl)", () => {
		expect(p.parse("Tɛsalonika 1, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tɛsalonika 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mkl)", () => {
		expect(p.parse("Tɛsalonika 2, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tɛsalonika 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mkl)", () => {
		expect(p.parse("Timɔtee 1, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timɔtee 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mkl)", () => {
		expect(p.parse("Timɔtee 2, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timɔtee 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mkl)", () => {
		expect(p.parse("Titee 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mkl)", () => {
		expect(p.parse("Filemɔɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mkl)", () => {
		expect(p.parse("Ebɛɛ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mkl)", () => {
		expect(p.parse("Zaaki 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mkl)", () => {
		expect(p.parse("Piɛɛ 1, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Piɛɛ 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mkl)", () => {
		expect(p.parse("Piɛɛ 2, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Piɛɛ 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mkl)", () => {
		expect(p.parse("Zudu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mkl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zãa 1, - Zãa 3,").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zãa 1, – Zãa 3,").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Zãa 1, — Zãa 3,").osis()).toEqual("1John.1-3John.1");
	});
});
