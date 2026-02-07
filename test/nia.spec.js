"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nia.js";

describe("Localized book Gen (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nia)", () => {
		expect(p.parse("Soera Moze I. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Moz. I. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nia)", () => {
		expect(p.parse("Soera Moze II. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Moz. II. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nia)", () => {
		expect(p.parse("Soera Moze III. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Moz. III. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nia)", () => {
		expect(p.parse("Soera Moze IV. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Moz. IV. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nia)", () => {
		expect(p.parse("Ngenoengenoe Jeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ngj. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nia)", () => {
		expect(p.parse("Famaʼeleʼõ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fam. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nia)", () => {
		expect(p.parse("Soera Moze V. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Moz. V. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nia)", () => {
		expect(p.parse("Soera Josoea 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nia)", () => {
		expect(p.parse("Soera Zangoehoekoe 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Zang. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nia)", () => {
		expect(p.parse("Soera Roeti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Roet. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nia)", () => {
		expect(p.parse("Soera Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nia)", () => {
		expect(p.parse("Soera Zamoeëli I. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Soera. Zamoeëli I. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nia)", () => {
		expect(p.parse("Sam. I. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nia)", () => {
		expect(p.parse("Soera Zamoeëli II. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Soera. Zamoeëli II. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nia)", () => {
		expect(p.parse("Sam. II. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nia)", () => {
		expect(p.parse("Soera Razo I. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Soera. Razo I. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nia)", () => {
		expect(p.parse("Raz. I. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nia)", () => {
		expect(p.parse("Soera Razo II. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Soera. Razo II. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nia)", () => {
		expect(p.parse("Raz. II. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nia)", () => {
		expect(p.parse("Soera Ngaʼõtõ I. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Soera. Ngaʼõtõ I. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nia)", () => {
		expect(p.parse("Ngaʼõt. I. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nia)", () => {
		expect(p.parse("Soera Ngaʼõtõ II. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Soera. Ngaʼõtõ II. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nia)", () => {
		expect(p.parse("Ngaʼõt. II. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nia)", () => {
		expect(p.parse("Soera Gesera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eser. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nia)", () => {
		expect(p.parse("Soera Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehem. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nia)", () => {
		expect(p.parse("Soera Gesitera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esit. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nia)", () => {
		expect(p.parse("Soera Jobi 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nia)", () => {
		expect(p.parse("Soera Gamaedola 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Amd. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nia)", () => {
		expect(p.parse("Soera Zangombacha 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Sang. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nia)", () => {
		expect(p.parse("Sinoenõ Seboea 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sin. S. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nia)", () => {
		expect(p.parse("Soera Zinoenõ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sin. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nia)", () => {
		expect(p.parse("Soera Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nia)", () => {
		expect(p.parse("Soera Hezekiëli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nia)", () => {
		expect(p.parse("Soera Daniëli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nia)", () => {
		expect(p.parse("Soera Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nia)", () => {
		expect(p.parse("Soera Joëli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joël. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nia)", () => {
		expect(p.parse("Soera Gamosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nia)", () => {
		expect(p.parse("Soera Gobadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nia)", () => {
		expect(p.parse("Soera Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nia)", () => {
		expect(p.parse("Soera Micha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mich. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nia)", () => {
		expect(p.parse("Soera Nachoemi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nach. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nia)", () => {
		expect(p.parse("Soera Habakoeki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nia)", () => {
		expect(p.parse("Soera Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nia)", () => {
		expect(p.parse("Soera Hagaʼi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nia)", () => {
		expect(p.parse("Soera Zacharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sach. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nia)", () => {
		expect(p.parse("Soera Maleachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nia)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nia)", () => {
		expect(p.parse("Mareko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nia)", () => {
		expect(p.parse("Loek. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Loeka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nia)", () => {
		expect(p.parse("Johane I. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Joh. I. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nia)", () => {
		expect(p.parse("Johane II. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Joh. II. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nia)", () => {
		expect(p.parse("Johane III. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Joh. III. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nia)", () => {
		expect(p.parse("Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nia)", () => {
		expect(p.parse("Halõw̃õ Zinenge 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hal. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nia)", () => {
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nia)", () => {
		expect(p.parse("Korindro I. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kor. I. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nia)", () => {
		expect(p.parse("Korindro II. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kor. II. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nia)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nia)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nia)", () => {
		expect(p.parse("Efes. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nia)", () => {
		expect(p.parse("Filifi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nia)", () => {
		expect(p.parse("Tesalonika I. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tes. I. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nia)", () => {
		expect(p.parse("Tesalonika II. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes. II. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nia)", () => {
		expect(p.parse("Timoteo I. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tim. I. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nia)", () => {
		expect(p.parse("Timoteo II. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tim. II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nia)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nia)", () => {
		expect(p.parse("Filemo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nia)", () => {
		expect(p.parse("Heberaio 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nia)", () => {
		expect(p.parse("Jakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nia)", () => {
		expect(p.parse("Fetero I. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fet. I. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nia)", () => {
		expect(p.parse("Fetero II. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fet. II. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nia)", () => {
		expect(p.parse("Joed. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Joeda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nia)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nia)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Johane I. - Johane III.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Johane I. – Johane III.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Johane I. — Johane III.").osis()).toEqual("1John.1-3John.1");
	});
});
