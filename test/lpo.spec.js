"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lpo.js";

describe("Localized book Rev (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lpo)", () => {
		expect(p.parse("Ţŝǀ ŭǼ ųǼ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ţŝǀ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Mark (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lpo)", () => {
		expect(p.parse("Ŭǖ ŧǓĢ ŭǏ Ūǥģ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ŦǓĢ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book 1John (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lpo)", () => {
		expect(p.parse("Źƥƣ Ũǆ Ťǩģ ųǼ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Źƥƣ Ťǩģ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lpo)", () => {
		expect(p.parse("Źƥƣ Ũǆ Ůǩģ ųǼ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Źƥƣ Ůǩģ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lpo)", () => {
		expect(p.parse("Źƥƣ Ũǆ ųƿ ųǼ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Źƥƣ ųƿ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lpo)", () => {
		expect(p.parse("Źƥƣ Ũǆ ŭǏ Ūǥģ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Źƥƣ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lpo)", () => {
		expect(p.parse("Ťǁ ųǀ ŧŝƿ Űʊ ŭǩǔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ťǁ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Cor (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lpo)", () => {
		expect(p.parse("ŪƩ Ŭǖ Ŵƿ Ťǩģ ųǼ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ŭǖ Ťǩģ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lpo)", () => {
		expect(p.parse("ŪƩ Ŭǖ Ŵƿ Ůǩģ ųǼ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ŭǖ Ůǩģ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Eph (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lpo)", () => {
		expect(p.parse("Źǩ Ŧǣ ųǧ ųǼ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ŧǣ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book 1Thess (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lpo)", () => {
		expect(p.parse("Ťŝǁƣ ųƯ Ŭǚ Ůǖģ ţƧ Ťǩģ ųǼ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ŤŝǁƢ ŤǩĢ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lpo)", () => {
		expect(p.parse("Ťŝǁƣ ųƯ Ŭǚ Ůǖģ ţƧ Ůǩģ ųǼ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ŤŝǁƢ ŮǩĢ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lpo)", () => {
		expect(p.parse("Ťǖģ ŭǚ Ťǵŝ Ťǩģ ųǼ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ťǖģ Ťǩģ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lpo)", () => {
		expect(p.parse("Ťǖģ ŭǚ Ťǵŝ Ůǩģ ųǼ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ťǖģ Ůǩģ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lpo)", () => {
		expect(p.parse("Ťǖģ Ŵƿ ųǼ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ŵƿ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lpo)", () => {
		expect(p.parse("Ŧǘ Ŭǽ ŭǑ ųǼ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ŭǑ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Luke (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lpo)", () => {
		expect(p.parse("Ŭǽ ţƧ ŭǏ Ūǥģ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ŭǽ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Gal (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lpo)", () => {
		expect(p.parse("ŢƧ Ŭư Ťǵŝ ųǼ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ţƧ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Matt (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lpo)", () => {
		expect(p.parse("Ŭǖ Ťǵŝ ŭǏ Ūǥģ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ťǵŝ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Phil (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lpo)", () => {
		expect(p.parse("Ŧǘ Ŭǭ Űǩ ųǼ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ŧǘ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Heb (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lpo)", () => {
		expect(p.parse("Ÿǁ Űǚ Ŭǌ ųǼ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ŭǌ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Col (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lpo)", () => {
		expect(p.parse("ūƩ Ŭǚ Ÿǁ ųǼ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ÿǁ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Rom (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lpo)", () => {
		expect(p.parse("Ŭǚ ŭǖ ųǼ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ŭǚ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book Jas (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lpo)", () => {
		expect(p.parse("Źǖ ūǈ ųǼ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Źǖ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lpo)", () => {
		expect(p.parse("Űǩ Ŵǒ Ťǩģ ųǼ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Űǩ ŤǩĢ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lpo)", () => {
		expect(p.parse("Űǩ Ŵǒ Ůǩģ ųǼ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Űǩ ŮǩĢ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lpo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lpo)", () => {
		expect(p.parse("Źǚ Ŵǭ ųǼ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Źǚ 1:1").osis()).toEqual("Jude.1.1");
	});
});
