"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cop.js";

describe("Localized book Rev (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cop)", () => {
		expect(p.parse("Ϯⲁ̀ⲡⲟⲕⲁⲗⲩⲙⲯⲓⲥ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cop)", () => {
		expect(p.parse("Ⲙⲁⲧⲑⲉⲟⲛ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cop)", () => {
		expect(p.parse("Ⲙⲁⲣⲕⲟⲛ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cop)", () => {
		expect(p.parse("Ⲗⲟⲩⲕⲁⲛ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cop)", () => {
		expect(p.parse("Ⲓⲱⲁⲛⲛⲏⲥ ⲁ̅ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cop)", () => {
		expect(p.parse("Ⲓⲱⲁⲛⲛⲏⲥ ⲃ̅ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cop)", () => {
		expect(p.parse("Ⲓⲱⲁⲛⲛⲏⲥ ⲅ̅ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cop)", () => {
		expect(p.parse("Ⲓⲱⲁⲛⲛⲏⲛ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cop)", () => {
		expect(p.parse("Ⲛⲓⲡ̀ⲣⲁⲝⲓⲥ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲣⲱⲙⲉⲟⲥ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲕⲟⲣⲓⲛⲑⲓⲟⲥ ⲁ̅ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ⲡⲣⲟⲥ. Ⲕⲟⲣⲓⲛⲑⲓⲟⲥ ⲁ̅ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲕⲟⲣⲓⲛⲑⲓⲟⲥ ⲃ̅ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ⲡⲣⲟⲥ. Ⲕⲟⲣⲓⲛⲑⲓⲟⲥ ⲃ̅ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲕⲟⲕⲁⲥⲥⲓⲁⲥ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲅⲁⲕⲁⲧⲏⲥ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲉ̇ⲫⲉⲥⲓⲟⲩⲥ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲫⲓⲕⲓⲡⲡⲟⲓⲥ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲑⲉⲥⲥⲁⲕⲟⲛⲓⲏⲏ ⲁ̅ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ⲡⲣⲟⲥ. Ⲑⲉⲥⲥⲁⲕⲟⲛⲓⲏⲏ ⲁ̅ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲑⲉⲥⲥⲁⲕⲟⲛⲓⲏⲏ ⲃ̅ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ⲡⲣⲟⲥ. Ⲑⲉⲥⲥⲁⲕⲟⲛⲓⲏⲏ ⲃ̅ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲧⲓⲙⲟⲑⲉⲟⲥ ⲁ̅ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ⲡⲣⲟⲥ. Ⲧⲓⲙⲟⲑⲉⲟⲥ ⲁ̅ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲧⲓⲙⲟⲑⲉⲟⲥ ⲃ̅ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ⲡⲣⲟⲥ. Ⲧⲓⲙⲟⲑⲉⲟⲥ ⲃ̅ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲧⲓⲧⲟⲥ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ⲫⲓⲗⲏⲙⲱⲛ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cop)", () => {
		expect(p.parse("Ⲡⲣⲟⲥ Ϩⲉⲃⲣⲉⲟⲥ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cop)", () => {
		expect(p.parse("Ⲓⲁⲕⲱⲃⲟⲥ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cop)", () => {
		expect(p.parse("Ⲡⲉⲧⲣⲟⲥ ⲁ̅ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cop)", () => {
		expect(p.parse("Ⲡⲉⲧⲣⲟⲥ ⲃ̅ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cop)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cop)", () => {
		expect(p.parse("Ⲓⲟⲩⲇⲁⲥ 1:1").osis()).toEqual("Jude.1.1");
	});
});
