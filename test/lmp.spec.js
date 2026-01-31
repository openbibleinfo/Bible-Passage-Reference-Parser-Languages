"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lmp.js";

describe("Localized book Rev (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lmp)", () => {
		expect(p.parse("Ñwaè' Kuu Buu Ce Vi Be Keè Koni 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lmp)", () => {
		expect(p.parse("Ñwaè' Matïìyoè 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lmp)", () => {
		expect(p.parse("Ñwaè' Maêk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lmp)", () => {
		expect(p.parse("Ñwaè' Luêk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lmp)", () => {
		expect(p.parse("Ñwaè' Joân Ce Entombïì 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ñwaè'. Joân Ce Entombïì 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lmp)", () => {
		expect(p.parse("Ñwaè' Joân Ce Embenjïì 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ñwaè'. Joân Ce Embenjïì 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lmp)", () => {
		expect(p.parse("Ñwaè' Joân Ce Elúèsimbuèu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lmp)", () => {
		expect(p.parse("Ñwaè' Joân 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lmp)", () => {
		expect(p.parse("Ñwaè' Mfaè' Ñgaâa Ntuu Jisoès 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lmp)", () => {
		expect(p.parse("Ñwaè' Ruêm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lmp)", () => {
		expect(p.parse("Ñwaè' Beâe Koreèn Ce Entombïì 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ñwaè'. Beâe Koreèn Ce Entombïì 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lmp)", () => {
		expect(p.parse("Ñwaè' Beâe Koreèn Ce Embenjïì 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ñwaè'. Beâe Koreèn Ce Embenjïì 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lmp)", () => {
		expect(p.parse("Ñwaè' Koèlosïì 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lmp)", () => {
		expect(p.parse("Ñwaè' Gaèláshaè 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lmp)", () => {
		expect(p.parse("Ñwaè' Áfásoès 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lmp)", () => {
		expect(p.parse("Ñwaè' Fileèpaêi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lmp)", () => {
		expect(p.parse("Ñwaè' Táèsaèlonikaè Ce Entombïì 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ñwaè'. Táèsaèlonikaè Ce Entombïì 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lmp)", () => {
		expect(p.parse("Ñwaè' Táèsaèlonikaè Ce Embenjïì 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ñwaè'. Táèsaèlonikaè Ce Embenjïì 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lmp)", () => {
		expect(p.parse("Ñwaè' Timotïì Ce Entombïì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ñwaè'. Timotïì Ce Entombïì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lmp)", () => {
		expect(p.parse("Ñwaè' Timotïì Ce Embenjïì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ñwaè'. Timotïì Ce Embenjïì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lmp)", () => {
		expect(p.parse("Ñwaè' Taitoès 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lmp)", () => {
		expect(p.parse("Ñwaè' Fïìlemúèn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lmp)", () => {
		expect(p.parse("Ñwaè' Hibruès 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lmp)", () => {
		expect(p.parse("Ñwaè' Jáêms 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lmp)", () => {
		expect(p.parse("Ñwaè' Pitaè Ce Entoèmbïì 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ñwaè'. Pitaè Ce Entoèmbïì 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lmp)", () => {
		expect(p.parse("Ñwaè' Pitaè Ce Embenjïì 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ñwaè'. Pitaè Ce Embenjïì 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lmp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lmp)", () => {
		expect(p.parse("Ñwaè' Juêd 1:1").osis()).toEqual("Jude.1.1");
	});
});
