"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pri.js";

describe("Localized book Rev (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pri)", () => {
		expect(p.parse("Auinapàpari 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pri)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pri)", () => {
		expect(p.parse("Maréko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pri)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pri)", () => {
		expect(p.parse("1 Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pri)", () => {
		expect(p.parse("2 Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pri)", () => {
		expect(p.parse("3 Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pri)", () => {
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pri)", () => {
		expect(p.parse("Apostolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pri)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pri)", () => {
		expect(p.parse("1 Korénito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korénito 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pri)", () => {
		expect(p.parse("2 Korénito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korénito 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pri)", () => {
		expect(p.parse("Kolosé 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pri)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pri)", () => {
		expect(p.parse("Éféso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pri)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pri)", () => {
		expect(p.parse("1 Tésalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tésalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pri)", () => {
		expect(p.parse("2 Tésalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tésalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pri)", () => {
		expect(p.parse("1 Timotéo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotéo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pri)", () => {
		expect(p.parse("2 Timotéo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotéo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pri)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pri)", () => {
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pri)", () => {
		expect(p.parse("Hébéru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pri)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pri)", () => {
		expect(p.parse("1 Pétéru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétéru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pri)", () => {
		expect(p.parse("2 Pétéru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétéru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pri)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
