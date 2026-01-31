"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/krs.js";

describe("Localized book Gen (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (krs)", () => {
		expect(p.parse("Gõcõ Lãgá 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (krs)", () => {
		expect(p.parse("Úgú Létë 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Úl 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (krs)", () => {
		expect(p.parse("Gïtĩ Ádá 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Gá 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (krs)", () => {
		expect(p.parse("Rútã 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rú 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (krs)", () => {
		expect(p.parse("Jónã 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jó 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (krs)", () => {
		expect(p.parse("Mãtéyõ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (krs)", () => {
		expect(p.parse("Márkõ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (krs)", () => {
		expect(p.parse("Lúkã 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krs)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krs)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (krs)", () => {
		expect(p.parse("3 Jónõ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krs)", () => {
		expect(p.parse("1 Jónõ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jónõ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krs)", () => {
		expect(p.parse("2 Jónõ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jónõ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (krs)", () => {
		expect(p.parse("Jónõ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (krs)", () => {
		expect(p.parse("Nẽté ká Yõmó Yõpó 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ny 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (krs)", () => {
		expect(p.parse("Rómã 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krs)", () => {
		expect(p.parse("1 Kõréntĩyã 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kõréntĩyã 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krs)", () => {
		expect(p.parse("2 Kõréntĩyã 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kõréntĩyã 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krs)", () => {
		expect(p.parse("1Kt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krs)", () => {
		expect(p.parse("2Kt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (krs)", () => {
		expect(p.parse("Kõlósẽ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (krs)", () => {
		expect(p.parse("Gãlátĩyã 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gã 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (krs)", () => {
		expect(p.parse("Éfësũsũ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éf 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (krs)", () => {
		expect(p.parse("Fĩlípĩyã 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krs)", () => {
		expect(p.parse("1 Tãsãlónĩkã 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tãsãlónĩkã 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krs)", () => {
		expect(p.parse("2 Tãsãlónĩkã 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tãsãlónĩkã 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krs)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krs)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krs)", () => {
		expect(p.parse("1 Tímõtĩ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímõtĩ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krs)", () => {
		expect(p.parse("2 Tímõtĩ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímõtĩ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krs)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krs)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (krs)", () => {
		expect(p.parse("Táyítõsõ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (krs)", () => {
		expect(p.parse("Fílmõnõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (krs)", () => {
		expect(p.parse("Íbrũ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Íb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (krs)", () => {
		expect(p.parse("Jémĩsĩ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krs)", () => {
		expect(p.parse("1 Pítãrã 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pítãrã 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krs)", () => {
		expect(p.parse("2 Pítãrã 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pítãrã 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krs)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krs)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (krs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (krs)", () => {
		expect(p.parse("Júdẽ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
