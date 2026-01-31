"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dsh.js";

describe("Localized book Rev (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dsh)", () => {
		expect(p.parse("Kí Edhesiny 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dsh)", () => {
		expect(p.parse("Matááyo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dsh)", () => {
		expect(p.parse("Márko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dsh)", () => {
		expect(p.parse("Lúka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dsh)", () => {
		expect(p.parse("Yuána Erká 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dsh)", () => {
		expect(p.parse("Yuána ki Naamaká 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dsh)", () => {
		expect(p.parse("Yuána ki Seđeká 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dsh)", () => {
		expect(p.parse("Yuána 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dsh)", () => {
		expect(p.parse("He Ekeny Gál Alb Fimiká 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dsh)", () => {
		expect(p.parse("Róóma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dsh)", () => {
		expect(p.parse("Korínto Erká 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dsh)", () => {
		expect(p.parse("Korínto ki Naamaká 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dsh)", () => {
		expect(p.parse("Kolosááya 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dsh)", () => {
		expect(p.parse("Galátia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dsh)", () => {
		expect(p.parse("Eféso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dsh)", () => {
		expect(p.parse("Filíbi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dsh)", () => {
		expect(p.parse("Dhesaloníke Erká 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dsh)", () => {
		expect(p.parse("Dhesaloníke ki Naamaká 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dsh)", () => {
		expect(p.parse("Tímote Erká 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dsh)", () => {
		expect(p.parse("Tímote ki Naamaká 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dsh)", () => {
		expect(p.parse("Títo 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dsh)", () => {
		expect(p.parse("Fílemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dsh)", () => {
		expect(p.parse("Héberew 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dsh)", () => {
		expect(p.parse("Yákob 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dsh)", () => {
		expect(p.parse("Bétiro Erká 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dsh)", () => {
		expect(p.parse("Bétiro ki Naamaká 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dsh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dsh)", () => {
		expect(p.parse("Yúúa 1:1").osis()).toEqual("Jude.1.1");
	});
});
