"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tel.js";

describe("Localized book Gen (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tel)", () => {
		expect(p.parse("ఆదికాండము 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ఆది. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ఆది 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tel)", () => {
		expect(p.parse("నిర్గమకాండము 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("నిర్గమ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("నిర్గమ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("నిర్గ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tel)", () => {
		expect(p.parse("లేవీయకాండము 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("లేవీ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("లేవీయ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("లేవీ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tel)", () => {
		expect(p.parse("సంఖ్యాకాండము 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("సంఖ్యా. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("సంఖ్యా 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tel)", () => {
		expect(p.parse("విలాప వాక్యములు 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("విలాపవాక్యములు 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("విలాప 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tel)", () => {
		expect(p.parse("ప్రకటన గ్రంథము 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ప్రకటన గ్రంథం 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ప్రకటన 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ప్రక 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tel)", () => {
		expect(p.parse("ద్వితీయోపదేశకాండము 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ద్వితీయో 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ద్వితీ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ద్వితీ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tel)", () => {
		expect(p.parse("యెహోషువ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("యెహో 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tel)", () => {
		expect(p.parse("న్యాయాధిపతులు 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("న్యాయాధి. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("న్యాయాధి 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("న్యాయా 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tel)", () => {
		expect(p.parse("రూతు 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tel)", () => {
		expect(p.parse("యెషయా 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("యెష 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tel)", () => {
		expect(p.parse("1 సమూయేలు 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 సమూ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 సమూ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. సమూయేలు 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. సమూ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. సమూ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tel)", () => {
		expect(p.parse("2 సమూయేలు 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 సమూ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 సమూ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. సమూయేలు 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. సమూ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. సమూ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tel)", () => {
		expect(p.parse("1సమూ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tel)", () => {
		expect(p.parse("2సమూ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tel)", () => {
		expect(p.parse("1 రాజులు 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. రాజులు 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tel)", () => {
		expect(p.parse("2 రాజులు 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. రాజులు 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tel)", () => {
		expect(p.parse("1రాజులు 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tel)", () => {
		expect(p.parse("2రాజులు 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tel)", () => {
		expect(p.parse("1 దినవృత్తాంతములు 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 దినవృ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 దిన 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. దినవృత్తాంతములు 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. దినవృ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. దిన 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tel)", () => {
		expect(p.parse("2 దినవృత్తాంతములు 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 దినవృ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 దిన 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. దినవృత్తాంతములు 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. దినవృ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. దిన 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tel)", () => {
		expect(p.parse("1దిన 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tel)", () => {
		expect(p.parse("2దిన 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tel)", () => {
		expect(p.parse("ఎజ్రా 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tel)", () => {
		expect(p.parse("నెహెమ్యా 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("నెహె 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tel)", () => {
		expect(p.parse("ఎస్తేరు 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ఎస్తే 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tel)", () => {
		expect(p.parse("యోబు 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tel)", () => {
		expect(p.parse("కీర్తనల గ్రంథము 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("కీర్తనలు 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("కీర్తన. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("కీర్తన 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("కీర్త 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tel)", () => {
		expect(p.parse("సామెతలు 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("సామె. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("సామెత 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("సామె 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tel)", () => {
		expect(p.parse("ప్రసంగి 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ప్రస 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tel)", () => {
		expect(p.parse("పరమ గీతము 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("పరమగీతము 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("పరమ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tel)", () => {
		expect(p.parse("యిర్మీయా 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("యిర్మీ. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("యిర్మీ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tel)", () => {
		expect(p.parse("యెహెజ్కేలు 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("యెహెజ్కే. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("యెహె 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tel)", () => {
		expect(p.parse("దానియేలు 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("దాని. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("దాని 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tel)", () => {
		expect(p.parse("హోషేయ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("హోషే 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tel)", () => {
		expect(p.parse("యోవేలు 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("యోవే 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tel)", () => {
		expect(p.parse("ఆమోసు 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ఆమో 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tel)", () => {
		expect(p.parse("ఓబద్యా 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tel)", () => {
		expect(p.parse("యోనా 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tel)", () => {
		expect(p.parse("మీకా 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tel)", () => {
		expect(p.parse("నహూము 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("నహూ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tel)", () => {
		expect(p.parse("హబక్కూకు 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("హబ. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("హబ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tel)", () => {
		expect(p.parse("జెఫన్యా 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("జెఫ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tel)", () => {
		expect(p.parse("హగ్గయి 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("హగ్గ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tel)", () => {
		expect(p.parse("జెకర్యా 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("జెక 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tel)", () => {
		expect(p.parse("మలాకీ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("మలా 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tel)", () => {
		expect(p.parse("మత్తయి సువార్త 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("మత్తయిత 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("మత్తయి 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tel)", () => {
		expect(p.parse("మార్కు సువార్త 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("మార్కు 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tel)", () => {
		expect(p.parse("లూకా సువార్త 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("లూకా 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tel)", () => {
		expect(p.parse("యోహాను వ్రాసిన మొదటి లేఖ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1యోహా 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tel)", () => {
		expect(p.parse("యోహాను వ్రాసిన రెండవ లేఖ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2యోహా 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tel)", () => {
		expect(p.parse("యోహాను వ్రాసిన మూడవ లేఖ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 యోహాను పత్రిక 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 యోహాను 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3యోహా 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tel)", () => {
		expect(p.parse("1 యోహాను పత్రిక 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 యోహాను 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. యోహాను పత్రిక 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. యోహాను 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tel)", () => {
		expect(p.parse("2 యోహాను పత్రిక 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 యోహాను 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. యోహాను పత్రిక 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. యోహాను 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tel)", () => {
		expect(p.parse("యోహాను సువార్త 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("యోహాను 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("యోహా 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tel)", () => {
		expect(p.parse("అపొస్తలుల కార్యములు 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("అపొస్తలుల 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("అపొ. కా. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("అపొ.కా. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("అ. కా. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tel)", () => {
		expect(p.parse("రోమీయులకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("రోమా పత్రిక 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("రోమీ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("రోమా 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tel)", () => {
		expect(p.parse("కొరింథీయులకు వ్రాసిన మొదటి లేఖ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1కొరింతీ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tel)", () => {
		expect(p.parse("కొరింథీయులకు వ్రాసిన రెండవ లేఖ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2కొరింతీ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tel)", () => {
		expect(p.parse("1 కొరింతీ పత్రిక 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 కొరింథీ పత్రిక 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 కొరింథీయులకు 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 కొరింథీ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 కొరింథీ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింతీ పత్రిక 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింథీ పత్రిక 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింథీయులకు 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింథీ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. కొరింథీ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tel)", () => {
		expect(p.parse("2 కొరింతీ పత్రిక 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 కొరింథీ పత్రిక 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 కొరింథీయులకు 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 కొరింథీ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 కొరింథీ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింతీ పత్రిక 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింథీ పత్రిక 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింథీయులకు 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింథీ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. కొరింథీ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tel)", () => {
		expect(p.parse("కొలొస్సయులకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొలొస్సీ పత్రిక 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొలస్సీ పత్రిక 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొలొస్సయులకు 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొలొస్సీ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొలస్సీ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("కొలొస్స 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tel)", () => {
		expect(p.parse("గలతీయులకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("గలతీ పత్రిక 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("గలతీయులకు 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("గలతీ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("గలతీ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tel)", () => {
		expect(p.parse("ఎఫెసీయులకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ఎఫెసీ పత్రిక 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ఎఫెసీయులకు 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ఎఫెసీ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ఎఫెసీ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tel)", () => {
		expect(p.parse("ఫిలిప్పీయులకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ఫిలిప్పీ పత్రిక 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ఫిలిప్పీయులకు 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ఫిలిప్పీ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ఫిలిప్పీ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tel)", () => {
		expect(p.parse("థెస్సలొనీకయులకు వ్రాసిన మొదటి లేఖ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1తెస్స 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tel)", () => {
		expect(p.parse("థెస్సలొనీకయులకు వ్రాసిన రెండవ లేఖ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2తెస్స 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tel)", () => {
		expect(p.parse("1 తెస్సలోనిక పత్రిక 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 థెస్సలొనీకయులకు 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 థెస్సలోనికయులకు 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 థెస్సలొనీ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 థెస్స 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. తెస్సలోనిక పత్రిక 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. థెస్సలొనీకయులకు 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. థెస్సలోనికయులకు 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. థెస్సలొనీ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. థెస్స 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tel)", () => {
		expect(p.parse("2 తెస్సలోనిక పత్రిక 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 థెస్సలొనీకయులకు 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 థెస్సలోనికయులకు 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 థెస్సలొనీ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 థెస్స 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. తెస్సలోనిక పత్రిక 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. థెస్సలొనీకయులకు 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. థెస్సలోనికయులకు 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. థెస్సలొనీ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. థెస్స 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tel)", () => {
		expect(p.parse("తిమోతికి వ్రాసిన మొదటి లేఖ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1తిమో 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tel)", () => {
		expect(p.parse("తిమోతికి వ్రాసిన రెండవ లేఖ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2తిమో 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tel)", () => {
		expect(p.parse("1 తిమోతి పత్రిక 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 తిమోతికి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమోతి పత్రిక 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమోతికి 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. తిమోతి 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tel)", () => {
		expect(p.parse("2 తిమోతి పత్రిక 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 తిమోతికి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమోతి పత్రిక 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమోతికి 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. తిమోతి 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tel)", () => {
		expect(p.parse("తీతుకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("తీతు పత్రిక 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("తీతుకు 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("తీతు. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("తీతు 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tel)", () => {
		expect(p.parse("ఫిలేమోనుకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ఫిలేమోను పత్రిక 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ఫిలేమోనుకు 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ఫిలేమోను 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ఫిలే. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ఫిలే 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tel)", () => {
		expect(p.parse("హెబ్రీయులకు వ్రాసిన లేఖ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("హెబ్రీ పత్రిక 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("హెబ్రీయులకు 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("హెబ్రీ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("హెబ్రీ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tel)", () => {
		expect(p.parse("యాకోబు వ్రాసిన లేఖ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("యాకోబు పత్రిక 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("యాకోబు 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("యాకో 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tel)", () => {
		expect(p.parse("పేతురు వ్రాసిన మొదటి లేఖ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1పేతు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tel)", () => {
		expect(p.parse("పేతురు వ్రాసిన రెండవ లేఖ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2పేతు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tel)", () => {
		expect(p.parse("1 పేతురు పత్రిక 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 పేతురు 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. పేతురు పత్రిక 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. పేతురు 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tel)", () => {
		expect(p.parse("2 పేతురు పత్రిక 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 పేతురు 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. పేతురు పత్రిక 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. పేతురు 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tel)", () => {
		expect(p.parse("యూదా వ్రాసిన లేఖ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("యూదా పత్రిక 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("యూదా 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tel)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("యోహాను వ్రాసిన మొదటి లేఖ - యోహాను వ్రాసిన మూడవ లేఖ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("యోహాను వ్రాసిన మొదటి లేఖ – యోహాను వ్రాసిన మూడవ లేఖ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("యోహాను వ్రాసిన మొదటి లేఖ — యోహాను వ్రాసిన మూడవ లేఖ").osis()).toEqual("1John.1-3John.1");
	});
});
