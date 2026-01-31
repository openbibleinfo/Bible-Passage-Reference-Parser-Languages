"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pny.js";

describe("Localized book Rev (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pny)", () => {
		expect(p.parse("Rèvə̀leshònə̀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rèv 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pny)", () => {
		expect(p.parse("Matyù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pny)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pny)", () => {
		expect(p.parse("Lukə̀ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pny)", () => {
		expect(p.parse("1Jò 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pny)", () => {
		expect(p.parse("2Jò 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pny)", () => {
		expect(p.parse("3 Jònə 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jò 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pny)", () => {
		expect(p.parse("1 Jònə 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jònə 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pny)", () => {
		expect(p.parse("2 Jònə 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jònə 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pny)", () => {
		expect(p.parse("Jònə 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jòn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pny)", () => {
		expect(p.parse("Ɨ̀fàʼà 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ɨ̀fà 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pny)", () => {
		expect(p.parse("Roman 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pny)", () => {
		expect(p.parse("1 Korìntə̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korìntə̀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pny)", () => {
		expect(p.parse("2 Korìntə̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korìntə̀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pny)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pny)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pny)", () => {
		expect(p.parse("Kòlosè 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pny)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pny)", () => {
		expect(p.parse("Efesòsə̀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pny)", () => {
		expect(p.parse("Filipì 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pny)", () => {
		expect(p.parse("1 Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pny)", () => {
		expect(p.parse("2 Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pny)", () => {
		expect(p.parse("1Tè 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pny)", () => {
		expect(p.parse("2Tè 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pny)", () => {
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pny)", () => {
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pny)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pny)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pny)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pny)", () => {
		expect(p.parse("Filemònə̀ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pny)", () => {
		expect(p.parse("Hibrù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pny)", () => {
		expect(p.parse("Jemə̀ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pny)", () => {
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pità 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pny)", () => {
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pità 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pny)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pny)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pny)", () => {
		expect(p.parse("Judə̀ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (pny)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (pny)", () => {
		expect(p.parse("1 Korìntə̀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Jònə 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Pità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tèsàlonikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Korìntə̀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Jònə 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Pità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tèsàlonikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Jònə 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ɨ̀fàʼà 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòlosè 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efesòsə̀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Hibrù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jònə 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Matyù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filipì 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filemònə̀ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Rèvə̀leshònə̀ 1:1").osis()).toEqual("Rev.1.1");
	});
});
