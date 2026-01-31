"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fuf.js";

describe("Localized book Rev (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fuf)", () => {
		expect(p.parse("Feɲɲinannde 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fuf)", () => {
		expect(p.parse("Linjiila Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fuf)", () => {
		expect(p.parse("Linjiila Markuusa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fuf)", () => {
		expect(p.parse("Linjiila Luuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fuf)", () => {
		expect(p.parse("Yuuhanna 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fuf)", () => {
		expect(p.parse("Yuuhanna 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fuf)", () => {
		expect(p.parse("Yuuhanna 3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fuf)", () => {
		expect(p.parse("Linjiila Yuuhanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yhn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fuf)", () => {
		expect(p.parse("Kuuɗe Sahaabaaɓe Ɓen 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sah. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fuf)", () => {
		expect(p.parse("Roomu 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fuf)", () => {
		expect(p.parse("Korenti 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fuf)", () => {
		expect(p.parse("Korenti 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fuf)", () => {
		expect(p.parse("Koloosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fuf)", () => {
		expect(p.parse("Galaasi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fuf)", () => {
		expect(p.parse("Efeesi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fuf)", () => {
		expect(p.parse("Filipii 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fuf)", () => {
		expect(p.parse("Tesalonii 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fuf)", () => {
		expect(p.parse("Tesalonii 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fuf)", () => {
		expect(p.parse("Timotee 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fuf)", () => {
		expect(p.parse("Timotee 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fuf)", () => {
		expect(p.parse("Tiituusa 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fuf)", () => {
		expect(p.parse("Filimuunu 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fuf)", () => {
		expect(p.parse("Yahuudiyankeeɓe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fuf)", () => {
		expect(p.parse("Yaaquuba 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fuf)", () => {
		expect(p.parse("Petruusu 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fuf)", () => {
		expect(p.parse("Petruusu 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pe. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fuf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fuf)", () => {
		expect(p.parse("Yuudu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
