"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yaa.js";

describe("Localized book Rev (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yaa)", () => {
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yaa)", () => {
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yaa)", () => {
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yaa)", () => {
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yaa)", () => {
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yaa)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yaa)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yaa)", () => {
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yaa)", () => {
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yaa)", () => {
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yaa)", () => {
		expect(p.parse("1 Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yaa)", () => {
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yaa)", () => {
		expect(p.parse("Colosenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Co. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yaa)", () => {
		expect(p.parse("Gálatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yaa)", () => {
		expect(p.parse("Efesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yaa)", () => {
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yaa)", () => {
		expect(p.parse("1 Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yaa)", () => {
		expect(p.parse("2 Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yaa)", () => {
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yaa)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yaa)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yaa)", () => {
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yaa)", () => {
		expect(p.parse("He. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yaa)", () => {
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yaa)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yaa)", () => {
		expect(p.parse("2 Pe. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yaa)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju. 1:1").osis()).toEqual("Jude.1.1");
	});
});
