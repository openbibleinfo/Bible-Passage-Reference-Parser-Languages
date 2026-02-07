"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lit.js";

describe("Localized book Gen (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lit)", () => {
		expect(p.parse("Pradžios knyga 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pradžios 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lit)", () => {
		expect(p.parse("Išėjimo knyga 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Išėjimo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Iš 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lit)", () => {
		expect(p.parse("Kunigų knyga 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kunigų 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kun 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lit)", () => {
		expect(p.parse("Skaičių knyga 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Skaičių 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sk 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (lit)", () => {
		expect(p.parse("Siracido 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (lit)", () => {
		expect(p.parse("Išminties 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Išm 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lit)", () => {
		expect(p.parse("Raudų knyga 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Raudų 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Rd 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lit)", () => {
		expect(p.parse("Apreiškimas Jonui 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apreiškimas 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apr 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lit)", () => {
		expect(p.parse("Pakartoto įstatymo knyga 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pakartoto Įstatymo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Įst 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lit)", () => {
		expect(p.parse("Jozuės knyga 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jozuės 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lit)", () => {
		expect(p.parse("Teisėjų knyga 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Teisėjų 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ts 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lit)", () => {
		expect(p.parse("Rūtos knyga 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rūtos 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rūt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lit)", () => {
		expect(p.parse("Izaijo pranašystė 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izaijo 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lit)", () => {
		expect(p.parse("1 Samuelio knyga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelio 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelio knyga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelio 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmasis Samuelio knyga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmasis Samuelio 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmasis Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmasis. Samuelio knyga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmasis. Samuelio 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmasis. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmoji Samuelio knyga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmoji Samuelio 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmoji Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmoji. Samuelio knyga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmoji. Samuelio 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pirmoji. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lit)", () => {
		expect(p.parse("2 Samuelio knyga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelio 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelio knyga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelio 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antrasis Samuelio knyga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antrasis Samuelio 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antrasis Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antrasis. Samuelio knyga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antrasis. Samuelio 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antrasis. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antroji Samuelio knyga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antroji Samuelio 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antroji Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antroji. Samuelio knyga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antroji. Samuelio 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Antroji. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lit)", () => {
		expect(p.parse("1 Karalių knyga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Karalių 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Karalių knyga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Karalių 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmasis Karalių knyga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmasis Karalių 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmasis Kar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmasis. Karalių knyga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmasis. Karalių 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmasis. Kar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmoji Karalių knyga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmoji Karalių 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmoji Kar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmoji. Karalių knyga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmoji. Karalių 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pirmoji. Kar 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lit)", () => {
		expect(p.parse("2 Karalių knyga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Karalių 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Karalių knyga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Karalių 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antrasis Karalių knyga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antrasis Karalių 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antrasis Kar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antrasis. Karalių knyga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antrasis. Karalių 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antrasis. Kar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antroji Karalių knyga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antroji Karalių 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antroji Kar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antroji. Karalių knyga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antroji. Karalių 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Antroji. Kar 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lit)", () => {
		expect(p.parse("1 Kronikų knyga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Metraščių 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Met 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronikų knyga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Metraščių 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Met 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmasis Kronikų knyga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmasis Metraščių 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmasis Met 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmasis. Kronikų knyga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmasis. Metraščių 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmasis. Met 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmoji Kronikų knyga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmoji Metraščių 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmoji Met 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmoji. Kronikų knyga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmoji. Metraščių 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pirmoji. Met 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lit)", () => {
		expect(p.parse("2 Kronikų knyga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Metraščių 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Met 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronikų knyga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Metraščių 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Met 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antrasis Kronikų knyga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antrasis Metraščių 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antrasis Met 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antrasis. Kronikų knyga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antrasis. Metraščių 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antrasis. Met 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antroji Kronikų knyga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antroji Metraščių 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antroji Met 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antroji. Kronikų knyga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antroji. Metraščių 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Antroji. Met 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lit)", () => {
		expect(p.parse("Ezros knyga 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezros 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lit)", () => {
		expect(p.parse("Nehemijo knyga 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemijo 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lit)", () => {
		expect(p.parse("Jobo knyga 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lit)", () => {
		expect(p.parse("Psalmių knyga 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmynas 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lit)", () => {
		expect(p.parse("Patarlių knyga 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Patarlės 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pat 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lit)", () => {
		expect(p.parse("Ekleziasto knyga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mokytojo 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mok 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lit)", () => {
		expect(p.parse("Giesmių giesmės 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Giesmių giesmė 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Gg 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lit)", () => {
		expect(p.parse("Jeremijo pranašystė 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremijo 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lit)", () => {
		expect(p.parse("Ezechielio pranašystė 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezechielio 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lit)", () => {
		expect(p.parse("Ozėjo pranašystė 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ozėjo 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lit)", () => {
		expect(p.parse("Joelio pranašystė 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joelio 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lit)", () => {
		expect(p.parse("Amoso pranašystė 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amoso 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lit)", () => {
		expect(p.parse("Abdijo pranašystė 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdijo 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lit)", () => {
		expect(p.parse("Jonos pranašystė 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonos 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lit)", () => {
		expect(p.parse("Michėjo pranašystė 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Michėjo 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mch 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lit)", () => {
		expect(p.parse("Nahumo pranašystė 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahumo 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lit)", () => {
		expect(p.parse("Habakuko pranašystė 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuko 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lit)", () => {
		expect(p.parse("Sofonijo pranašystė 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonijo 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lit)", () => {
		expect(p.parse("Agėjo pranašystė 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agėjo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lit)", () => {
		expect(p.parse("Zacharijo pranašystė 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacharijo 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zch 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lit)", () => {
		expect(p.parse("Malachijo pranašystė 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachijo 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lit)", () => {
		expect(p.parse("Evangelija pagal Matą 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mato 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lit)", () => {
		expect(p.parse("Evangelija pagal Morkų 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Morkaus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lit)", () => {
		expect(p.parse("Evangelija pagal Luką 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luko 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lit)", () => {
		expect(p.parse("Trečiasis Jono laiškas 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jono 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lit)", () => {
		expect(p.parse("1 Jono laiškas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jono laiškas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmasis Jono laiškas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmasis Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmasis Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmasis. Jono laiškas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmasis. Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmasis. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmoji Jono laiškas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmoji Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmoji Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmoji. Jono laiškas 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmoji. Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pirmoji. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lit)", () => {
		expect(p.parse("2 Jono laiškas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jono laiškas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antrasis Jono laiškas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antrasis Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antrasis Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antrasis. Jono laiškas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antrasis. Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antrasis. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antroji Jono laiškas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antroji Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antroji Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antroji. Jono laiškas 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antroji. Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Antroji. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lit)", () => {
		expect(p.parse("Evangelija pagal Joną 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jono 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lit)", () => {
		expect(p.parse("Apaštalų darbai 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apd 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lit)", () => {
		expect(p.parse("Laiškas Romiečiams 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romiečiams 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lit)", () => {
		expect(p.parse("1 laiškas Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. laiškas Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmasis laiškas Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmasis Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmasis Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmasis. laiškas Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmasis. Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmasis. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmoji laiškas Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmoji Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmoji Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmoji. laiškas Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmoji. Korintiečiams 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pirmoji. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lit)", () => {
		expect(p.parse("2 laiškas Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. laiškas Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antrasis laiškas Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antrasis Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antrasis Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antrasis. laiškas Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antrasis. Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antrasis. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antroji laiškas Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antroji Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antroji Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antroji. laiškas Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antroji. Korintiečiams 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Antroji. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lit)", () => {
		expect(p.parse("Laiškas Kolosiečiams 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosiečiams 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lit)", () => {
		expect(p.parse("Laiškas Galatams 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatams 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lit)", () => {
		expect(p.parse("Laiškas Efeziečiams 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeziečiams 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lit)", () => {
		expect(p.parse("Laiškas Filipiečiams 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipiečiams 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lit)", () => {
		expect(p.parse("1 laiškas Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. laiškas Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmasis laiškas Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmasis Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmasis Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmasis. laiškas Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmasis. Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmasis. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmoji laiškas Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmoji Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmoji Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmoji. laiškas Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmoji. Tesalonikiečiams 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pirmoji. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lit)", () => {
		expect(p.parse("2 laiškas Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. laiškas Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antrasis laiškas Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antrasis Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antrasis Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antrasis. laiškas Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antrasis. Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antrasis. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antroji laiškas Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antroji Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antroji Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antroji. laiškas Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antroji. Tesalonikiečiams 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Antroji. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lit)", () => {
		expect(p.parse("1 laiškas Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. laiškas Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmasis laiškas Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmasis Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmasis Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmasis. laiškas Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmasis. Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmasis. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmoji laiškas Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmoji Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmoji Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmoji. laiškas Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmoji. Timotiejui 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pirmoji. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lit)", () => {
		expect(p.parse("2 laiškas Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. laiškas Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antrasis laiškas Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antrasis Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antrasis Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antrasis. laiškas Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antrasis. Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antrasis. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antroji laiškas Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antroji Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antroji Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antroji. laiškas Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antroji. Timotiejui 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Antroji. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lit)", () => {
		expect(p.parse("Laiškas Titui 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titui 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lit)", () => {
		expect(p.parse("Laiškas Filemonui 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonui 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lit)", () => {
		expect(p.parse("Laiškas Hebrajams 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrajams 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hbr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lit)", () => {
		expect(p.parse("Jokūbo laiškas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jokūbo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jok 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lit)", () => {
		expect(p.parse("1 Petro laiškas 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro laiškas 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmasis Petro laiškas 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmasis Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmasis Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmasis. Petro laiškas 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmasis. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmasis. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmoji Petro laiškas 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmoji Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmoji Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmoji. Petro laiškas 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmoji. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pirmoji. Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lit)", () => {
		expect(p.parse("2 Petro laiškas 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro laiškas 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antrasis Petro laiškas 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antrasis Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antrasis Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antrasis. Petro laiškas 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antrasis. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antrasis. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antroji Petro laiškas 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antroji Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antroji Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antroji. Petro laiškas 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antroji. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Antroji. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lit)", () => {
		expect(p.parse("Judo laiškas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judo 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (lit)", () => {
		expect(p.parse("Tobito 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (lit)", () => {
		expect(p.parse("Juditos 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (lit)", () => {
		expect(p.parse("Barucho 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lit)", () => {
		expect(p.parse("1 Makabiejų 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabiejų 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmasis Makabiejų 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmasis Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmasis. Makabiejų 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmasis. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmoji Makabiejų 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmoji Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmoji. Makabiejų 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pirmoji. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lit)", () => {
		expect(p.parse("2 Makabiejų 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabiejų 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antrasis Makabiejų 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antrasis Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antrasis. Makabiejų 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antrasis. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antroji Makabiejų 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antroji Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antroji. Makabiejų 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Antroji. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lit)", () => {
		expect(p.parse("Danieliaus pranašystė 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danieliaus 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lit)", () => {
		expect(p.parse("Esteros knyga 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esteros 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Parser helper should handle titles (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (lit)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle book ranges (lit)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lit)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jono laiškas - Trečiasis Jono laiškas").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jono laiškas – Trečiasis Jono laiškas").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jono laiškas — Trečiasis Jono laiškas").osis()).toEqual("1John.1-3John.1");
	});
});
