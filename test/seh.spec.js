"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/seh.js";

describe("Localized book Rev (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (seh)", () => {
		expect(p.parse("Cidziwiso 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Cid. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Cid 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (seh)", () => {
		expect(p.parse("Mattheo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (seh)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (seh)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (seh)", () => {
		expect(p.parse("1Jw. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (seh)", () => {
		expect(p.parse("2Jw. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (seh)", () => {
		expect(p.parse("3 Juwau 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jw. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (seh)", () => {
		expect(p.parse("1 Juwau 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juwau 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (seh)", () => {
		expect(p.parse("2 Juwau 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juwau 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (seh)", () => {
		expect(p.parse("Juwau 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jw. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (seh)", () => {
		expect(p.parse("Mabasa a Apoxtolo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mabasa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mab. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (seh)", () => {
		expect(p.parse("aRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Arm. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (seh)", () => {
		expect(p.parse("1 Akorintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorintu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (seh)", () => {
		expect(p.parse("2 Akorintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorintu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (seh)", () => {
		expect(p.parse("1Ak. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (seh)", () => {
		expect(p.parse("2Ak. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (seh)", () => {
		expect(p.parse("aKolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Aks. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (seh)", () => {
		expect(p.parse("aGalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Agt. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (seh)", () => {
		expect(p.parse("Aefesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afs. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (seh)", () => {
		expect(p.parse("aFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Afp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (seh)", () => {
		expect(p.parse("1 Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (seh)", () => {
		expect(p.parse("2 Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (seh)", () => {
		expect(p.parse("1At. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1At 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (seh)", () => {
		expect(p.parse("2At. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2At 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (seh)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (seh)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (seh)", () => {
		expect(p.parse("1Tm. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (seh)", () => {
		expect(p.parse("2Tm. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (seh)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (seh)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fl. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (seh)", () => {
		expect(p.parse("Hebhereu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (seh)", () => {
		expect(p.parse("Tiyago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tg. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (seh)", () => {
		expect(p.parse("1 Pedhru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedhru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (seh)", () => {
		expect(p.parse("2 Pedhru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedhru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (seh)", () => {
		expect(p.parse("1Pd. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pd 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (seh)", () => {
		expect(p.parse("2Pd. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pd 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (seh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (seh)", () => {
		expect(p.parse("Djuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Djd. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Djd 1:1").osis()).toEqual("Jude.1.1");
	});
});
