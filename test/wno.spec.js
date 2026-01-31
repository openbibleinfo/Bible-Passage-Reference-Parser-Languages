"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wno.js";

describe("Localized book Rev (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wno)", () => {
		expect(p.parse("Wayu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (wno)", () => {
		expect(p.parse("Matiyut 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wno)", () => {
		expect(p.parse("Marakut 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wno)", () => {
		expect(p.parse("Lukat 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wno)", () => {
		expect(p.parse("1 Yaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wno)", () => {
		expect(p.parse("2 Yaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (wno)", () => {
		expect(p.parse("3 Yaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (wno)", () => {
		expect(p.parse("Yaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wno)", () => {
		expect(p.parse("Nappiyareegerak 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nap 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wno)", () => {
		expect(p.parse("Oroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wno)", () => {
		expect(p.parse("1 Korindut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korindut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wno)", () => {
		expect(p.parse("2 Korindut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korindut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wno)", () => {
		expect(p.parse("Kolote 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wno)", () => {
		expect(p.parse("Nggalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wno)", () => {
		expect(p.parse("Epetut 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epet 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wno)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wno)", () => {
		expect(p.parse("1 Tetalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tetalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tet 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wno)", () => {
		expect(p.parse("2 Tetalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tetalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tet 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wno)", () => {
		expect(p.parse("1 Timotiyut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiyut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wno)", () => {
		expect(p.parse("2 Timotiyut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiyut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wno)", () => {
		expect(p.parse("Titut 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wno)", () => {
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pile 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wno)", () => {
		expect(p.parse("Iberani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Iber 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wno)", () => {
		expect(p.parse("Yakobut 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wno)", () => {
		expect(p.parse("1 Peterut 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peterut 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wno)", () => {
		expect(p.parse("2 Peterut 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peterut 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wno)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wno)", () => {
		expect(p.parse("Yurat 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yur 1:1").osis()).toEqual("Jude.1.1");
	});
});
