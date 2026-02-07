"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tcs.js";

describe("Localized book Gen (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tcs)", () => {
		expect(p.parse("Zenasis - Stat blo ebriting 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Zenasis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tcs)", () => {
		expect(p.parse("Rebaleisan - end blo ebriting 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tcs)", () => {
		expect(p.parse("Buk baut Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tcs)", () => {
		expect(p.parse("Spesilmesizman Zona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tcs)", () => {
		expect(p.parse("Matiu tokbaut Zizas 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tcs)", () => {
		expect(p.parse("Mak tokbaut Zizas 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tcs)", () => {
		expect(p.parse("Luk tokbaut Zizas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tcs)", () => {
		expect(p.parse("Leta 1 leta prom Zon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Leta. 1 leta prom Zon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Namba 1 leta prom Zon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Namba. 1 leta prom Zon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tcs)", () => {
		expect(p.parse("Leta 2 leta prom Zon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Leta. 2 leta prom Zon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Namba 2 leta prom Zon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Namba. 2 leta prom Zon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tcs)", () => {
		expect(p.parse("Namba 3 leta prom Zon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tcs)", () => {
		expect(p.parse("Zon tokbaut Zizas 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tcs)", () => {
		expect(p.parse("Pas misnare wok 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pas Misnare 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tcs)", () => {
		expect(p.parse("Leta po Sos blo Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tcs)", () => {
		expect(p.parse("Leta 1 leta po Sos blo Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Leta 1 po Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Leta. 1 leta po Sos blo Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Leta. 1 po Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Namba 1 leta po Sos blo Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Namba 1 po Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Namba. 1 leta po Sos blo Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Namba. 1 po Korint 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tcs)", () => {
		expect(p.parse("Leta 2 leta po Sos blo Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Leta 2 po Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Leta. 2 leta po Sos blo Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Leta. 2 po Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Namba 2 leta po Sos blo Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Namba 2 po Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Namba. 2 leta po Sos blo Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Namba. 2 po Korint 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tcs)", () => {
		expect(p.parse("Leta po Sos blo Kolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tcs)", () => {
		expect(p.parse("Leta po Sos blo Galasia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tcs)", () => {
		expect(p.parse("Leta po Sos blo Episis 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Leta 1 po Episis 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tcs)", () => {
		expect(p.parse("Leta po Sos blo Pilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tcs)", () => {
		expect(p.parse("Leta 1 leta po Sos blo Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Leta. 1 leta po Sos blo Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Namba 1 leta po Sos blo Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Namba. 1 leta po Sos blo Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tcs)", () => {
		expect(p.parse("Leta 2 leta po Sos blo Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Leta. 2 leta po Sos blo Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Namba 2 leta po Sos blo Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Namba. 2 leta po Sos blo Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tcs)", () => {
		expect(p.parse("Leta 1 leta po Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Leta. 1 leta po Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Namba 1 leta po Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Namba. 1 leta po Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tcs)", () => {
		expect(p.parse("Leta 2 leta po Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Leta. 2 leta po Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Namba 2 leta po Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Namba. 2 leta po Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tcs)", () => {
		expect(p.parse("Leta po Taitas 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tcs)", () => {
		expect(p.parse("Leta po Pilemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tcs)", () => {
		expect(p.parse("Leta po Ibrupipol 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tcs)", () => {
		expect(p.parse("Leta prom Zemes 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tcs)", () => {
		expect(p.parse("Leta 1 leta prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Leta 1 prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Leta. 1 leta prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Leta. 1 prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Namba 1 leta prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Namba 1 prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Namba. 1 leta prom Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Namba. 1 prom Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tcs)", () => {
		expect(p.parse("Leta 2 leta prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Leta 2 prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Leta. 2 leta prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Leta. 2 prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Namba 2 leta prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Namba 2 prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Namba. 2 leta prom Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Namba. 2 prom Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tcs)", () => {
		expect(p.parse("Leta prom Zud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tcs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tcs)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Leta 1 leta prom Zon - Namba 3 leta prom Zon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Leta 1 leta prom Zon – Namba 3 leta prom Zon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Leta 1 leta prom Zon — Namba 3 leta prom Zon").osis()).toEqual("1John.1-3John.1");
	});
});
