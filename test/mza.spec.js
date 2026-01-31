"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mza.js";

describe("Localized book Rev (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mza)", () => {
		expect(p.parse("Tutu Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mza)", () => {
		expect(p.parse("Tutu Mate 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mza)", () => {
		expect(p.parse("Tutu Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mza)", () => {
		expect(p.parse("Tutu Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mza)", () => {
		expect(p.parse("Tutu Xuva Uni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mza)", () => {
		expect(p.parse("1 Xuva Nunuu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Xuva Nunuu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tutu Xuva Nunuu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tutu Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tutu. Xuva Nunuu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tutu. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mza)", () => {
		expect(p.parse("2 Xuva Uvi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Xuva Uvi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tutu Xuva Uvi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tutu Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tutu. Xuva Uvi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tutu. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mza)", () => {
		expect(p.parse("Tutu Xuva 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mza)", () => {
		expect(p.parse("Tutu Hechos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mza)", () => {
		expect(p.parse("Tutu Romanu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mza)", () => {
		expect(p.parse("1 Corintu Nunuu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintu Nunuu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tutu Corintu Nunuu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tutu Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tutu. Corintu Nunuu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tutu. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mza)", () => {
		expect(p.parse("2 Corintu Uvi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintu Uvi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tutu Corintu Uvi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tutu Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tutu. Corintu Uvi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tutu. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mza)", () => {
		expect(p.parse("Tutu Colosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mza)", () => {
		expect(p.parse("Tutu Gálata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mza)", () => {
		expect(p.parse("Tutu Efesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mza)", () => {
		expect(p.parse("Tutu Filipu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mza)", () => {
		expect(p.parse("1 Tesalónica Nunuu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalónica Nunuu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tutu Tesalónica Nunuu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tutu Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tutu. Tesalónica Nunuu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tutu. Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mza)", () => {
		expect(p.parse("2 Tesalónica Uvi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalónica Uvi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tutu Tesalónica Uvi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tutu Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tutu. Tesalónica Uvi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tutu. Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mza)", () => {
		expect(p.parse("1 Timoteu Nunuu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteu Nunuu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tutu Timoteu Nunuu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tutu Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tutu. Timoteu Nunuu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tutu. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mza)", () => {
		expect(p.parse("2 Timoteu Uvi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteu Uvi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tutu Timoteu Uvi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tutu Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tutu. Timoteu Uvi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tutu. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mza)", () => {
		expect(p.parse("Tutu Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mza)", () => {
		expect(p.parse("Tutu Filemón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mza)", () => {
		expect(p.parse("Tutu Hebreu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mza)", () => {
		expect(p.parse("Tutu Jandiau 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mza)", () => {
		expect(p.parse("1 Petuꞌ Nunuu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petuꞌ Nunuu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tutu Petuꞌ Nunuu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tutu P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tutu. Petuꞌ Nunuu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tutu. P. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mza)", () => {
		expect(p.parse("2 Petuꞌ Uvi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petuꞌ Uvi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tutu Petuꞌ Uvi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tutu P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tutu. Petuꞌ Uvi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tutu. P. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mza)", () => {
		expect(p.parse("Tutu Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
