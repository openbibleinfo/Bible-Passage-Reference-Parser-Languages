"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fut.js";

describe("Localized book Rev (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fut)", () => {
		expect(p.parse("Nokofarairo O Anea Keimai, 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nokofarairo O Anea Keimai 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fut)", () => {
		expect(p.parse("Mathius, 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fut)", () => {
		expect(p.parse("Markus, 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fut)", () => {
		expect(p.parse("Lukus, 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fut)", () => {
		expect(p.parse("Fakatoru Joanes. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Fakatoru Joan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fut)", () => {
		expect(p.parse("Fakatasi Joanes, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fakatasi Joan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fakatasi. Joanes, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fakatasi. Joan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fut)", () => {
		expect(p.parse("Joanes, 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 2John (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fut)", () => {
		expect(p.parse("Fakarua Joanes. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fakarua Joan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fakarua. Joanes. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Fakarua. Joan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fut)", () => {
		expect(p.parse("Avere O Apostolo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Avere 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fut)", () => {
		expect(p.parse("Romanis, 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roman 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fut)", () => {
		expect(p.parse("Fakatasi Korinthus, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fakatasi Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fakatasi. Korinthus, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fakatasi. Korin 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fut)", () => {
		expect(p.parse("Fakarua Korinthus, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fakarua Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fakarua. Korinthus, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Fakarua. Korin 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fut)", () => {
		expect(p.parse("Kolose, 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fut)", () => {
		expect(p.parse("Caleisa, 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Caleisa 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fut)", () => {
		expect(p.parse("Efesus, 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fut)", () => {
		expect(p.parse("Felepai, 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Felepai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fut)", () => {
		expect(p.parse("Fakatasi Thisalonaika, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fakatasi Thisa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fakatasi. Thisalonaika, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fakatasi. Thisa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fut)", () => {
		expect(p.parse("Fakarua Thisalonaika, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fakarua Thisa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fakarua. Thisalonaika, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Fakarua. Thisa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fut)", () => {
		expect(p.parse("Fakatasi Timotheus, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fakatasi Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fakatasi. Timotheus, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fakatasi. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fut)", () => {
		expect(p.parse("Fakarua Timotaheus, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fakarua Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fakarua. Timotaheus, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fakarua. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fut)", () => {
		expect(p.parse("Taitus, 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fut)", () => {
		expect(p.parse("Felimon. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Felimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fut)", () => {
		expect(p.parse("Hibru, 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fut)", () => {
		expect(p.parse("Jacobus, 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jacob 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fut)", () => {
		expect(p.parse("Fakatasi Pitrus, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fakatasi Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fakatasi. Pitrus, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fakatasi. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fut)", () => {
		expect(p.parse("Fakarua Pitrus, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fakarua Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fakarua. Pitrus, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Fakarua. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fut)", () => {
		expect(p.parse("Jute. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (fut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (fut)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Fakatasi Joanes, - Fakatoru Joanes.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Fakatasi Joanes, – Fakatoru Joanes.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Fakatasi Joanes, — Fakatoru Joanes.").osis()).toEqual("1John.1-3John.1");
	});
});
