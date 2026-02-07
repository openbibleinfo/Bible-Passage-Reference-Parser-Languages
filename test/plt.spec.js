"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/plt.js";

describe("Localized book Gen (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (plt)", () => {
		expect(p.parse("Genesisy 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesỳ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jenezy 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (plt)", () => {
		expect(p.parse("Eksodosy 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eksaody 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eksôdy 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (plt)", () => {
		expect(p.parse("I Bela sy ilay dragona 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (plt)", () => {
		expect(p.parse("Levitikosy 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitika 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitîka 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (plt)", () => {
		expect(p.parse("Fanisana 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nomery 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nomerỳ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fanis 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nom. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nom 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (plt)", () => {
		expect(p.parse("Ekleziastika 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Bena-Siràka 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ben-Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (plt)", () => {
		expect(p.parse("Fahendrena 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Fah 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (plt)", () => {
		expect(p.parse("Fitomanian’i Jeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Fitomaniana 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Fit. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Fit 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (plt)", () => {
		expect(p.parse("Taratasin'i Jeremià 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Tar Jer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (plt)", () => {
		expect(p.parse("Apôkalipsa nosoratan’i Md Joany 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apôkalipsỳ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalypsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apôk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (plt)", () => {
		expect(p.parse("Deoteronomia 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deotoronomia 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deoterônômy 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deterônômy 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deter 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deo. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deot 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deo 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (plt)", () => {
		expect(p.parse("Josoa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jôsoe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jôs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (plt)", () => {
		expect(p.parse("Mpitsara 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mpits. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mpits 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (plt)", () => {
		expect(p.parse("Rot. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rota 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rot 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (plt)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaià 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (plt)", () => {
		expect(p.parse("1 Samoela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samoela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (plt)", () => {
		expect(p.parse("2 Samoela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samoela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (plt)", () => {
		expect(p.parse("1Samoela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (plt)", () => {
		expect(p.parse("2Samoela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (plt)", () => {
		expect(p.parse("1 Mpanjaka 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mp 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mpanjaka 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mp 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (plt)", () => {
		expect(p.parse("2 Mpanjaka 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mp 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mpanjaka 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mp 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (plt)", () => {
		expect(p.parse("1Mpanjaka 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Mpan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Mpa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (plt)", () => {
		expect(p.parse("2Mpanjaka 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Mpan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Mpa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (plt)", () => {
		expect(p.parse("1 Tantara 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tantara 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (plt)", () => {
		expect(p.parse("2 Tantara 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tantara 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (plt)", () => {
		expect(p.parse("1Tantara 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Tan. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Tan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (plt)", () => {
		expect(p.parse("2Tantara 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Tan. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Tan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (plt)", () => {
		expect(p.parse("Esdrasa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Hezrà 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Hez 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (plt)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemià 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (plt)", () => {
		expect(p.parse("Job. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jôba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jôb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (plt)", () => {
		expect(p.parse("Salamo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (plt)", () => {
		expect(p.parse("Ohabolana 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Oha. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ohab 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Oha 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (plt)", () => {
		expect(p.parse("Mpitoriteny 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kôheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mpit T. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mpit 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kôh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (plt)", () => {
		expect(p.parse("Hiran'ireo Zatovo Telo Lahy 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Hzt 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (plt)", () => {
		expect(p.parse("Tononkira dia Tononkira 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Tonon-kiran'i Solomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Tonon-kiran’i Solomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Tononkiran'i Salômôna 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Tononkiran’i Solomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ton. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ton 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (plt)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremià 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (plt)", () => {
		expect(p.parse("Ezekiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (plt)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hôsea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hôs 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (plt)", () => {
		expect(p.parse("Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jôela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joely 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (plt)", () => {
		expect(p.parse("Hamôsa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amôsy 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ham 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (plt)", () => {
		expect(p.parse("Abdiasa 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Hôbadià 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Hôb 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (plt)", () => {
		expect(p.parse("Jônasy 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jônà 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jôn 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (plt)", () => {
		expect(p.parse("Mikea 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikà 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (plt)", () => {
		expect(p.parse("Nahoma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (plt)", () => {
		expect(p.parse("Habakoka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakòka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (plt)", () => {
		expect(p.parse("Tsefanià 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôfônia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tsef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôf 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (plt)", () => {
		expect(p.parse("Akjea 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Akj 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (plt)", () => {
		expect(p.parse("Zakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakarià 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (plt)", () => {
		expect(p.parse("Malakia 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakỳ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (plt)", () => {
		expect(p.parse("Matio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (plt)", () => {
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (plt)", () => {
		expect(p.parse("Lioka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lio. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lio 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (plt)", () => {
		expect(p.parse("1Jaona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Joany 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jao. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jao 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (plt)", () => {
		expect(p.parse("2Jaona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Joany 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jao. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jao 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (plt)", () => {
		expect(p.parse("3 Jôhany 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jaona 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jaona 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Joany 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jôh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jao. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jao 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (plt)", () => {
		expect(p.parse("1 Jôhany 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jaona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jôh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jôhany 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jaona 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jôh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (plt)", () => {
		expect(p.parse("2 Jôhany 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jaona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jôh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jôhany 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jaona 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jôh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (plt)", () => {
		expect(p.parse("Jôhany 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jaona 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joany 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jao. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jao 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jôh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (plt)", () => {
		expect(p.parse("Asan'ny Apostoly 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asan’ny Apostoly 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asan’i Apôstôly 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asa. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Asa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (plt)", () => {
		expect(p.parse("Rômanina 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romana 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (plt)", () => {
		expect(p.parse("1 Kôrintianina 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kôr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kôrintianina 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kôr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (plt)", () => {
		expect(p.parse("2 Kôrintianina 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kôr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kôrintianina 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kôr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (plt)", () => {
		expect(p.parse("1Kôrintianina 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Korintiana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kôr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (plt)", () => {
		expect(p.parse("2Kôrintianina 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Korintiana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kôr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (plt)", () => {
		expect(p.parse("Kôlôsianina 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosiana 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (plt)", () => {
		expect(p.parse("Galatianina 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatiana 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (plt)", () => {
		expect(p.parse("Efesianina 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezianina 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesiana 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (plt)", () => {
		expect(p.parse("Filipianina 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipiana 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (plt)", () => {
		expect(p.parse("1 Tesalônisianina 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloniana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalônisianina 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (plt)", () => {
		expect(p.parse("2 Tesalônisianina 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloniana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalônisianina 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (plt)", () => {
		expect(p.parse("1Tesalônisianina 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tesaloniana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (plt)", () => {
		expect(p.parse("2Tesalônisianina 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tesaloniana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (plt)", () => {
		expect(p.parse("1 Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timôty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timôty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (plt)", () => {
		expect(p.parse("2 Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timôty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timôty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (plt)", () => {
		expect(p.parse("1Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (plt)", () => {
		expect(p.parse("2Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (plt)", () => {
		expect(p.parse("Titosy 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (plt)", () => {
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemôna 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (plt)", () => {
		expect(p.parse("Hebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrio 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (plt)", () => {
		expect(p.parse("Jakoba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakôba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (plt)", () => {
		expect(p.parse("1 Petera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (plt)", () => {
		expect(p.parse("2 Petera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (plt)", () => {
		expect(p.parse("1Petera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Piera 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pier 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (plt)", () => {
		expect(p.parse("2Petera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Piera 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pier 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (plt)", () => {
		expect(p.parse("Jod. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Joda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jodà 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jod 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (plt)", () => {
		expect(p.parse("Tôbita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobia 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tbt 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (plt)", () => {
		expect(p.parse("Jodita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (plt)", () => {
		expect(p.parse("Baròka 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (plt)", () => {
		expect(p.parse("Sozanina 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Soz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (plt)", () => {
		expect(p.parse("1 Makabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (plt)", () => {
		expect(p.parse("2 Makabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (plt)", () => {
		expect(p.parse("1Makabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (plt)", () => {
		expect(p.parse("2Makabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (plt)", () => {
		expect(p.parse("Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (plt)", () => {
		expect(p.parse("Estera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (plt)", () => {
		expect(p.parse("Hiran'ireo Zatovo Telo Lahy 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Hzt 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle translations (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (plt)", () => {
		expect(p.parse("Lev 1 (MCB)").osis_and_translations()).toEqual([["Lev.1","MCB"]]);
		expect(p.parse("Lev 1 (MPB)").osis_and_translations()).toEqual([["Lev.1","MPB"]]);
		expect(p.parse("Lev 1 (MR35)").osis_and_translations()).toEqual([["Lev.1","MR35"]]);
		expect(p.parse("Lev 1 (DIEM)").osis_and_translations()).toEqual([["Lev.1","DIEM"]]);
		expect(p.parse("Lev 1 (DIEMDC)").osis_and_translations()).toEqual([["Lev.1","DIEMDC"]]);
		expect(p.parse("Lev 1 (MRV)").osis_and_translations()).toEqual([["Lev.1","MRV"]]);
		expect(p.parse("Lev 1 (MG1865)").osis_and_translations()).toEqual([["Lev.1","MG1865"]]);
	});
});
describe("Parser helper should handle book ranges (plt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (plt)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jaona - 3 Jôhany").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jaona – 3 Jôhany").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jaona — 3 Jôhany").osis()).toEqual("1John.1-3John.1");
	});
});
