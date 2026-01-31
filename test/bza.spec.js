"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bza.js";

describe("Localized book Rev (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bza)", () => {
		expect(p.parse("Faa Yákɛ Kɔ́lɔi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bza)", () => {
		expect(p.parse("Máfiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bza)", () => {
		expect(p.parse("Máa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mái 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bza)", () => {
		expect(p.parse("Lúu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bza)", () => {
		expect(p.parse("Njɔú Hesendaa Gɔlɔí 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bza)", () => {
		expect(p.parse("Njɔú Gɔ́lɔi Hele Kélei 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bza)", () => {
		expect(p.parse("Njɔú Gɔ́lɔi Hawa Kélei 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Njɔú 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bza)", () => {
		expect(p.parse("1 Njɔú 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Njɔú 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bza)", () => {
		expect(p.parse("2 Njɔú 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Njɔú 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bza)", () => {
		expect(p.parse("Njɔú 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bza)", () => {
		expect(p.parse("Ti Gɛ́ɛ́ Haítii 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bza)", () => {
		expect(p.parse("Lóómi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bza)", () => {
		expect(p.parse("Kɔ́l̃e Hesendaa Gɔlɔí 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bza)", () => {
		expect(p.parse("Kɔ́l̃e Gɔ́lɔi Hele Kélei 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bza)", () => {
		expect(p.parse("1 Kɔ́l̃e 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ́l̃e 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bza)", () => {
		expect(p.parse("2 Kɔ́l̃e 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ́l̃e 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bza)", () => {
		expect(p.parse("Kɔlɔ́se 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bza)", () => {
		expect(p.parse("Galésiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bza)", () => {
		expect(p.parse("Ɛ́fɛsɔ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bza)", () => {
		expect(p.parse("Félepa 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bza)", () => {
		expect(p.parse("1 Tɛsa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bza)", () => {
		expect(p.parse("Tɛsalónika Hesendaa Gɔlɔí 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bza)", () => {
		expect(p.parse("Tɛsalónika Gɔ́lɔi Hele Kélei 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bza)", () => {
		expect(p.parse("2 Tɛsalónika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalónika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bza)", () => {
		expect(p.parse("Tímoti Hesendaa Gɔlɔí 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bza)", () => {
		expect(p.parse("Tímoti Gɔ́lɔi Hele Kélei 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bza)", () => {
		expect(p.parse("1 Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bza)", () => {
		expect(p.parse("2 Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bza)", () => {
		expect(p.parse("Táitɔ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tátɔ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bza)", () => {
		expect(p.parse("Felémo 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bza)", () => {
		expect(p.parse("Híbulu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bza)", () => {
		expect(p.parse("Jimisí 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bza)", () => {
		expect(p.parse("1 Pílɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pílɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bza)", () => {
		expect(p.parse("2 Pílɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pílɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bza)", () => {
		expect(p.parse("Pítɛ Hesendaa Gɔlɔí 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bza)", () => {
		expect(p.parse("Pítɛ Gɔ́lɔi Hele Kélei 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bza)", () => {
		expect(p.parse("Júu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bza)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bza)", () => {
		expect(p.parse("1 Tímoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Tímoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Jimisí 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Felémo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Faa Yákɛ Kɔ́lɔi 1:1").osis()).toEqual("Rev.1.1");
	});
});
