"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kib.js";

describe("Localized book Rev (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kib)", () => {
		expect(p.parse("Ruuya 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Luke (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kib)", () => {
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kib)", () => {
		expect(p.parse("yuhanna al awal 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kib)", () => {
		expect(p.parse("yuhanna aṯ ṯaani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kib)", () => {
		expect(p.parse("yuhanna aṯ ṯaalit 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kib)", () => {
		expect(p.parse("Yuhanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kib)", () => {
		expect(p.parse("Ruumiya 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kib)", () => {
		expect(p.parse("kurinṯuuz al awal 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kib)", () => {
		expect(p.parse("kurinṯuuz aṯ ṯaani 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kib)", () => {
		expect(p.parse("kuluuzi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kib)", () => {
		expect(p.parse("galaaṯya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kib)", () => {
		expect(p.parse("afazuz 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kib)", () => {
		expect(p.parse("Fiilibbi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kib)", () => {
		expect(p.parse("ṯazaluniiki al awal 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kib)", () => {
		expect(p.parse("ṯazaluniiki aṯ ṯaani 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kib)", () => {
		expect(p.parse("timuṯaawuzŋw al awal 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kib)", () => {
		expect(p.parse("timuṯaawuzŋw aṯ ṯaani 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kib)", () => {
		expect(p.parse("tiiṯaz 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kib)", () => {
		expect(p.parse("falimun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kib)", () => {
		expect(p.parse("libraani 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kib)", () => {
		expect(p.parse("Yaguub 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kib)", () => {
		expect(p.parse("buṯruz al awal 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kib)", () => {
		expect(p.parse("buṯruz aṯ ṯaani 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kib)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kib)", () => {
		expect(p.parse("Yahuuza 1:1").osis()).toEqual("Jude.1.1");
	});
});
