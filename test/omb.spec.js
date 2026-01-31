"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/omb.js";

describe("Localized book Gen (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (omb)", () => {
		expect(p.parse("Tavui Leo 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (omb)", () => {
		expect(p.parse("A Serelue Lawe Jon 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lawe Jon 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (omb)", () => {
		expect(p.parse("Leo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Lnm 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (omb)", () => {
		expect(p.parse("Jesua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (omb)", () => {
		expect(p.parse("Tangaloi Vagamwasoi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tva 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Isa (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (omb)", () => {
		expect(p.parse("Asaea 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Tla 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (omb)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (omb)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (omb)", () => {
		expect(p.parse("1 Ratahigi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ra 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ratahigi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ra 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (omb)", () => {
		expect(p.parse("2 Ratahigi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ra 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ratahigi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ra 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (omb)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Ps (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (omb)", () => {
		expect(p.parse("Ahi 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (omb)", () => {
		expect(p.parse("Gaidumu 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gns 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jer (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (omb)", () => {
		expect(p.parse("Jeremae 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Tls 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Dan (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (omb)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Bnd 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (omb)", () => {
		expect(p.parse("Sona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Tlj 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (omb)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (omb)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (omb)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (omb)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (omb)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (omb)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (omb)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (omb)", () => {
		expect(p.parse("Lalakogi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (omb)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (omb)", () => {
		expect(p.parse("1 Koren 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koren 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (omb)", () => {
		expect(p.parse("2 Koren 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koren 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (omb)", () => {
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (omb)", () => {
		expect(p.parse("Kalesia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (omb)", () => {
		expect(p.parse("Evesas 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (omb)", () => {
		expect(p.parse("Vilibae 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (omb)", () => {
		expect(p.parse("1 Tesalonaeka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonaeka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (omb)", () => {
		expect(p.parse("2 Tesalonaeka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonaeka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (omb)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (omb)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (omb)", () => {
		expect(p.parse("Taetas 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (omb)", () => {
		expect(p.parse("Vilimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (omb)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (omb)", () => {
		expect(p.parse("Jemis 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (omb)", () => {
		expect(p.parse("1 Bita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (omb)", () => {
		expect(p.parse("2 Bita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (omb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (omb)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
