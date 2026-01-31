"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/krw.js";

describe("Localized book Rev (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (krw)", () => {
		expect(p.parse("Wlɛfeleseɔn 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wlf 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (krw)", () => {
		expect(p.parse("Matio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (krw)", () => {
		expect(p.parse("Maɛ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ma 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (krw)", () => {
		expect(p.parse("Luu 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krw)", () => {
		expect(p.parse("1 Chɔɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Chn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Chɔɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Chn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krw)", () => {
		expect(p.parse("2 Chɔɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Chn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Chɔɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Chn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (krw)", () => {
		expect(p.parse("3 Chɔɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Chn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Chɔɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Chn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (krw)", () => {
		expect(p.parse("Chɔɔn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Chn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (krw)", () => {
		expect(p.parse("Nu̍-dɛ̍ᵻ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nu̍ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (krw)", () => {
		expect(p.parse("Wloma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Wlo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krw)", () => {
		expect(p.parse("1 Kɔwlɛntiɔn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔwlɛntiɔn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krw)", () => {
		expect(p.parse("2 Kɔwlɛntiɔn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔwlɛntiɔn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (krw)", () => {
		expect(p.parse("Kalase 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (krw)", () => {
		expect(p.parse("Kelesea 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kel 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (krw)", () => {
		expect(p.parse("Ɛfɛsɔ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛf 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (krw)", () => {
		expect(p.parse("Felepai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fel 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krw)", () => {
		expect(p.parse("1 Tɛsoloniɔn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsoloniɔn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krw)", () => {
		expect(p.parse("2 Tɛsoloniɔn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsoloniɔn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krw)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krw)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (krw)", () => {
		expect(p.parse("Taitɔ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (krw)", () => {
		expect(p.parse("Faɛlimɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (krw)", () => {
		expect(p.parse("Iblu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (krw)", () => {
		expect(p.parse("Chiin 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Chi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krw)", () => {
		expect(p.parse("1 Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krw)", () => {
		expect(p.parse("2 Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (krw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (krw)", () => {
		expect(p.parse("Judi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
