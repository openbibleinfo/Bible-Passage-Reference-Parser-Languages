"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aby.js";

describe("Localized book Rev (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (aby)", () => {
		expect(p.parse("Dionibai 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Dionib 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aby)", () => {
		expect(p.parse("Madiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mad 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (aby)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (aby)", () => {
		expect(p.parse("Ruki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (aby)", () => {
		expect(p.parse("1 Dioni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Dion 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Dioni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Dion 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (aby)", () => {
		expect(p.parse("2 Dioni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Dion 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Dioni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Dion 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (aby)", () => {
		expect(p.parse("3 Dioni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Dion 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Dioni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Dion 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (aby)", () => {
		expect(p.parse("Dioni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Dion 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (aby)", () => {
		expect(p.parse("Afasoro 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Afa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (aby)", () => {
		expect(p.parse("Romani 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (aby)", () => {
		expect(p.parse("1 Korinida 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinida 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (aby)", () => {
		expect(p.parse("2 Korinida 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinida 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (aby)", () => {
		expect(p.parse("Korose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (aby)", () => {
		expect(p.parse("Gareisia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (aby)", () => {
		expect(p.parse("Efesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (aby)", () => {
		expect(p.parse("Firifai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fir 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (aby)", () => {
		expect(p.parse("1 Desoronaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Des 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Desoronaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Des 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (aby)", () => {
		expect(p.parse("2 Desoronaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Des 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Desoronaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Des 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (aby)", () => {
		expect(p.parse("1 Dimodi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Dim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dimodi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (aby)", () => {
		expect(p.parse("2 Dimodi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Dim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dimodi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (aby)", () => {
		expect(p.parse("Daidasi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Daid 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (aby)", () => {
		expect(p.parse("Fairimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Frm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (aby)", () => {
		expect(p.parse("Iburu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (aby)", () => {
		expect(p.parse("Deimisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Deim 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (aby)", () => {
		expect(p.parse("1 Fida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Fid 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Fida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Fid 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (aby)", () => {
		expect(p.parse("2 Fida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Fid 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Fida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Fid 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (aby)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (aby)", () => {
		expect(p.parse("Diude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Diud 1:1").osis()).toEqual("Jude.1.1");
	});
});
