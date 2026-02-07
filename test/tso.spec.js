"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tso.js";

describe("Localized book Gen (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tso)", () => {
		expect(p.parse("Genesa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tso)", () => {
		expect(p.parse("Eksoda 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (tso)", () => {
		expect(p.parse("Bele ni Dragona 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel. 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tso)", () => {
		expect(p.parse("Levhitika 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levh. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tso)", () => {
		expect(p.parse("Tinhlayo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tinhl. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (tso)", () => {
		expect(p.parse("Siraka 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir. 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (tso)", () => {
		expect(p.parse("Vutlhari 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Vutlh. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tso)", () => {
		expect(p.parse("Swirilo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Swir. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (tso)", () => {
		expect(p.parse("Papila ra Yeremiya 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("PapYer. 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tso)", () => {
		expect(p.parse("Nhlavutelo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nhlav. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tso)", () => {
		expect(p.parse("Deuteronoma 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deteronoma 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duteronoma 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tso)", () => {
		expect(p.parse("Yoxuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yox. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tso)", () => {
		expect(p.parse("Vaavanyisi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Vaav. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tso)", () => {
		expect(p.parse("Rhuti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rhu. 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tso)", () => {
		expect(p.parse("Esaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Es. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tso)", () => {
		expect(p.parse("1 Samuwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samiele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samiele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samiele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tso)", () => {
		expect(p.parse("2 Samuwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samiele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samiele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samiele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samiele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tso)", () => {
		expect(p.parse("1 Tihosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Tih. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tihosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tih. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Tihosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Tih. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Tihosi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Tih. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tso)", () => {
		expect(p.parse("2 Tihosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Tih. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tihosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tih. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Tihosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Tih. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tihosi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Tih. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tso)", () => {
		expect(p.parse("1 Tikronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tikr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tikronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tikr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Tikronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Tikr. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Tikronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Tikr. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tso)", () => {
		expect(p.parse("2 Tikronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tikr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tikronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tikr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Tikronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Tikr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Tikronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Tikr. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tso)", () => {
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tso)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tso)", () => {
		expect(p.parse("Ntirho 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yobo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tso)", () => {
		expect(p.parse("Tipisalema 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pisalema 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (tso)", () => {
		expect(p.parse("Xikhongelo xa Azariya 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Aza. 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tso)", () => {
		expect(p.parse("Swivuriso 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Swiv. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tso)", () => {
		expect(p.parse("Mudyondzisi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklesiasta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mudy. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tso)", () => {
		expect(p.parse("Risimu ra Tinsimu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ris. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tso)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tso)", () => {
		expect(p.parse("Ezekiyele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tso)", () => {
		expect(p.parse("Daniyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tso)", () => {
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tso)", () => {
		expect(p.parse("Yuwele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yuw. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tso)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tso)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tso)", () => {
		expect(p.parse("Yonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tso)", () => {
		expect(p.parse("Mikiya 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tso)", () => {
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tso)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tso)", () => {
		expect(p.parse("Sofaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofoniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tso)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tso)", () => {
		expect(p.parse("Zakariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tso)", () => {
		expect(p.parse("Malakiya 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tso)", () => {
		expect(p.parse("Matewu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tso)", () => {
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tso)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tso)", () => {
		expect(p.parse("III Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tso)", () => {
		expect(p.parse("1 Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tso)", () => {
		expect(p.parse("2 Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tso)", () => {
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tso)", () => {
		expect(p.parse("Mintirho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Timhaka 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mint. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Timh. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tso)", () => {
		expect(p.parse("Va le Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Varhoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rho. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tso)", () => {
		expect(p.parse("1 Va le Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Va le Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Va le Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Va le Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tso)", () => {
		expect(p.parse("2 Va le Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Va le Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Va le Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Va le Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tso)", () => {
		expect(p.parse("Va le Kolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Vakolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tso)", () => {
		expect(p.parse("Va le Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Vagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tso)", () => {
		expect(p.parse("Va le Efesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Vaefesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tso)", () => {
		expect(p.parse("Va le Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Vafilipiya 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tso)", () => {
		expect(p.parse("1 Va le Thesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Vatesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Va le Thesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vatesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Va le Thesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vatesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Va le Thesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vatesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tso)", () => {
		expect(p.parse("2 Va le Thesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Vatesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Va le Thesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vatesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Va le Thesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vatesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Va le Thesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vatesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tso)", () => {
		expect(p.parse("1 Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotiya 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiya 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotiya 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotiya 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tso)", () => {
		expect(p.parse("2 Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotiya 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiya 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotiya 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotiya 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tso)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tso)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tso)", () => {
		expect(p.parse("Vaheberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Vaheveru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hev. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tso)", () => {
		expect(p.parse("Yakobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tso)", () => {
		expect(p.parse("1 Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tso)", () => {
		expect(p.parse("2 Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tso)", () => {
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (tso)", () => {
		expect(p.parse("Tobiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (tso)", () => {
		expect(p.parse("Yuditi 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (tso)", () => {
		expect(p.parse("Baruku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar. 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (tso)", () => {
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus. 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (tso)", () => {
		expect(p.parse("1 Vamakabiya 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Vamakabiya 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Vamakabiya 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mak. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Vamakabiya 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (tso)", () => {
		expect(p.parse("2 Vamakabiya 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Vamakabiya 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Vamakabiya 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mak. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Vamakabiya 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tso)", () => {
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Parser helper should handle book ranges (tso)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tso)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yohane - III Yohane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yohane – III Yohane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yohane — III Yohane").osis()).toEqual("1John.1-3John.1");
	});
});
