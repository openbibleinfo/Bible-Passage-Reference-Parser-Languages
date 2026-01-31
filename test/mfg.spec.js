"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mfg.js";

describe("Localized book Gen (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mfg)", () => {
		expect(p.parse("Ko fɔlɔfɔlɛ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Fɔlɛ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mfg)", () => {
		expect(p.parse("Hɔrɔya 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Hɔr. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mfg)", () => {
		expect(p.parse("Lewi bɔnsɛnu la sariya 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Ruth (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mfg)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mfg)", () => {
		expect(p.parse("1 Samiyɛli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiyɛli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mfg)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book Jonah (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mfg)", () => {
		expect(p.parse("Yunusa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Luke (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mfg)", () => {
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mfg)", () => {
		expect(p.parse("Yaya 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mfg)", () => {
		expect(p.parse("Kiilanu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Phil (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mfg)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mfg)", () => {
		expect(p.parse("2 Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mfg)", () => {
		expect(p.parse("1 Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book Jas (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mfg)", () => {
		expect(p.parse("Yaguba 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mfg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mfg)", () => {
		expect(p.parse("1 Piyɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piy 1:1").osis()).toEqual("1Pet.1.1");
	});
});
