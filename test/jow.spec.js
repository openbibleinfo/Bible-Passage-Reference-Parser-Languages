"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jow.js";

describe("Localized book Rev (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jow)", () => {
		expect(p.parse("Jafinŋ ki 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jaf 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (jow)", () => {
		expect(p.parse("Uruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Urut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (jow)", () => {
		expect(p.parse("Yonasi 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jow)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jow)", () => {
		expect(p.parse("Maraka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jow)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jow)", () => {
		expect(p.parse("Yuhana (1) 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yh1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jow)", () => {
		expect(p.parse("Yuhana (2) 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yh2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jow)", () => {
		expect(p.parse("Yuhana (3) 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yh3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jow)", () => {
		expect(p.parse("Yuhana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jow)", () => {
		expect(p.parse("Mabikiri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mab 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jow)", () => {
		expect(p.parse("Ɔrɔmutɔnŋ kiri 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɔrm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jow)", () => {
		expect(p.parse("Korɛntitɔnŋ kiri (1) 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ko1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jow)", () => {
		expect(p.parse("Korɛntitɔnŋ kiri (2) 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ko2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jow)", () => {
		expect(p.parse("Kɔlɔsitɔnŋ kiri 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jow)", () => {
		expect(p.parse("Galasitɔnŋ kiri 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jow)", () => {
		expect(p.parse("Efɛsitɔnŋ kiri 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jow)", () => {
		expect(p.parse("Filipitɔnŋ kiri 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jow)", () => {
		expect(p.parse("Tesalonikitɔnŋ kiri (1) 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Te1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jow)", () => {
		expect(p.parse("Tesalonikitɔnŋ kiri (2) 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Te2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jow)", () => {
		expect(p.parse("Timote (1) 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tm1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jow)", () => {
		expect(p.parse("Timote (2) 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tm2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jow)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jow)", () => {
		expect(p.parse("Filimɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jow)", () => {
		expect(p.parse("Iburu kiri 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jow)", () => {
		expect(p.parse("Yakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jow)", () => {
		expect(p.parse("Pyɛɛri (1) 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Py1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jow)", () => {
		expect(p.parse("Pyɛɛri (2) 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Py2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (jow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jow)", () => {
		expect(p.parse("Yodasi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yod 1:1").osis()).toEqual("Jude.1.1");
	});
});
