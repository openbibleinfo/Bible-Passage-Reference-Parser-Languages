"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ahr.js";

describe("Localized book Rev (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ahr)", () => {
		expect(p.parse("योहान ले हुयेल प्रकटीकरण 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकटीकरण 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ahr)", () => {
		expect(p.parse("मत्तय 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ahr)", () => {
		expect(p.parse("मार्क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ahr)", () => {
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ahr)", () => {
		expect(p.parse("योहान ना पहिला पत्र 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ahr)", () => {
		expect(p.parse("योहान ना दुसरा पत्र 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ahr)", () => {
		expect(p.parse("योहान ना तिसरा पत्र 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 योहा 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ahr)", () => {
		expect(p.parse("1 योहा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. योहा 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ahr)", () => {
		expect(p.parse("2 योहा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. योहा 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ahr)", () => {
		expect(p.parse("योहान 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ahr)", () => {
		expect(p.parse("प्रेषितस्ना काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेषित. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ahr)", () => {
		expect(p.parse("रोमकरस्ले पत्र 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ahr)", () => {
		expect(p.parse("1 करिं. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. करिं. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ahr)", () => {
		expect(p.parse("करिंथकरांसस्ले पहिल पत्र 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ahr)", () => {
		expect(p.parse("2 करिंथकरांस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 करिं 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. करिंथकरांस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. करिं 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ahr)", () => {
		expect(p.parse("कलस्सैकरस्ले पत्र 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ahr)", () => {
		expect(p.parse("गलतीकरांस पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गल 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ahr)", () => {
		expect(p.parse("इफिसकरस्ले पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ahr)", () => {
		expect(p.parse("फिलिप्पैकरस्ले पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ahr)", () => {
		expect(p.parse("1 थेस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ahr)", () => {
		expect(p.parse("2 थेस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ahr)", () => {
		expect(p.parse("थेस्सलनीकरस्ले पहिला पत्र 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ahr)", () => {
		expect(p.parse("थेस्सलनीकरस्ले दुसरा पत्र 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ahr)", () => {
		expect(p.parse("तीमुथियुस ले पहिला पत्र 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1तिमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ahr)", () => {
		expect(p.parse("2 तिमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ahr)", () => {
		expect(p.parse("तीमुथियुस ले दुसरा पत्र 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ahr)", () => {
		expect(p.parse("तीत ले पत्र 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीत 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ahr)", () => {
		expect(p.parse("फिलेमोन ले पत्र 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ahr)", () => {
		expect(p.parse("इब्री लोकस्ले पत्र 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्री 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ahr)", () => {
		expect(p.parse("याकोब ना पत्र 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याको 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ahr)", () => {
		expect(p.parse("पेत्र ना पहिला पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1पेत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ahr)", () => {
		expect(p.parse("पेत्र ना दुसरा पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ahr)", () => {
		expect(p.parse("2 पेत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पेत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ahr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ahr)", () => {
		expect(p.parse("यहूदा ना पत्र 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});
