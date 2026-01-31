"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yae.js";

describe("Localized book Gen (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (yae)", () => {
		expect(p.parse("Taruparea̧ Ma̧ȩ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (yae)", () => {
		expect(p.parse("Go̧dürea̧ Ma̧ȩ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (yae)", () => {
		expect(p.parse("Devitico Ma̧ȩ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (yae)", () => {
		expect(p.parse("Ütararea̧ Ma̧ȩ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yae)", () => {
		expect(p.parse("Jechurë Na̧rȩrërea̧ Ma̧ȩ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (yae)", () => {
		expect(p.parse("Deuteronomio Ma̧ȩ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (yae)", () => {
		expect(p.parse("Jochue 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (yae)", () => {
		expect(p.parse("Tjamo̧ cjo̧ro̧ji̧ri̧ pio ji̧ri̧ chjiari Ma̧ȩ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Isa (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (yae)", () => {
		expect(p.parse("Ichaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (yae)", () => {
		expect(p.parse("Chamue Ma̧ȩ 1 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (yae)", () => {
		expect(p.parse("Chamue Ma̧ȩ 2 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Kgs (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (yae)", () => {
		expect(p.parse("Chiri Ütë pio ji̧ri̧ chjiari Ma̧ȩ 2 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (yae)", () => {
		expect(p.parse("Coronica Ma̧ȩ 1 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (yae)", () => {
		expect(p.parse("Coronica Ma̧ȩ 2 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Job (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (yae)", () => {
		expect(p.parse("Jobo Ma̧ȩ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (yae)", () => {
		expect(p.parse("Go̧a̧rea̧ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (yae)", () => {
		expect(p.parse("Urëdi oa jo̧rȩta tänȩrea̧ Ma̧ȩ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jer (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (yae)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Dan (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (yae)", () => {
		expect(p.parse("Da̧de 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (yae)", () => {
		expect(p.parse("Ochea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Jonah (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (yae)", () => {
		expect(p.parse("Jona̧ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (yae)", () => {
		expect(p.parse("Miquea 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Zech (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (yae)", () => {
		expect(p.parse("Chacaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Matt (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yae)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yae)", () => {
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marco 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yae)", () => {
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Uruca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yae)", () => {
		expect(p.parse("Juan Ma̧ȩ 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yae)", () => {
		expect(p.parse("Juan Ma̧ȩ 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yae)", () => {
		expect(p.parse("Juan Ma̧ȩ 3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yae)", () => {
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yae)", () => {
		expect(p.parse("Japarea̧ Ma̧ȩ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Japarea̧ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yae)", () => {
		expect(p.parse("Domano Ma̧ȩ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yae)", () => {
		expect(p.parse("Cori̧tio Ma̧ȩ 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yae)", () => {
		expect(p.parse("Cori̧tio Ma̧ȩ 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yae)", () => {
		expect(p.parse("Corochȩche Ma̧ȩ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yae)", () => {
		expect(p.parse("Garata Ma̧ȩ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yae)", () => {
		expect(p.parse("Epjecho Ma̧ȩ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yae)", () => {
		expect(p.parse("Pjiripo Ma̧ȩ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yae)", () => {
		expect(p.parse("Techaronichȩche Ma̧ȩ 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yae)", () => {
		expect(p.parse("Techaronichȩche Ma̧ȩ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yae)", () => {
		expect(p.parse("Timoteo Ma̧ȩ 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yae)", () => {
		expect(p.parse("Timoteo Ma̧ȩ 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yae)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yae)", () => {
		expect(p.parse("Pjiremo̧ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yae)", () => {
		expect(p.parse("Ebereo Ma̧ȩ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yae)", () => {
		expect(p.parse("Santiago Ma̧ȩ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yae)", () => {
		expect(p.parse("Pedro Ma̧ȩ 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yae)", () => {
		expect(p.parse("Pedro Ma̧ȩ 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yae)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (yae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (yae)", () => {
		expect(p.parse("Coronica Ma̧ȩ 1 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Juan Ma̧ȩ 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pedro Ma̧ȩ 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Chamue Ma̧ȩ 1 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Techaronichȩche Ma̧ȩ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Timoteo Ma̧ȩ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Coronica Ma̧ȩ 2 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Cori̧tio Ma̧ȩ 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Juan Ma̧ȩ 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Chiri Ütë pio ji̧ri̧ chjiari Ma̧ȩ 2 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pedro Ma̧ȩ 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Chamue Ma̧ȩ 2 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Techaronichȩche Ma̧ȩ 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Timoteo Ma̧ȩ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Juan Ma̧ȩ 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Corochȩche Ma̧ȩ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Deuteronomio Ma̧ȩ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Epjecho Ma̧ȩ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Go̧dürea̧ Ma̧ȩ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Garata Ma̧ȩ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Taruparea̧ Ma̧ȩ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ebereo Ma̧ȩ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Santiago Ma̧ȩ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jobo Ma̧ȩ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Tjamo̧ cjo̧ro̧ji̧ri̧ pio ji̧ri̧ chjiari Ma̧ȩ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Devitico Ma̧ȩ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ütararea̧ Ma̧ȩ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Pjiripo Ma̧ȩ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Urëdi oa jo̧rȩta tänȩrea̧ Ma̧ȩ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Jechurë Na̧rȩrërea̧ Ma̧ȩ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Domano Ma̧ȩ 1:1").osis()).toEqual("Rom.1.1");
	});
});
