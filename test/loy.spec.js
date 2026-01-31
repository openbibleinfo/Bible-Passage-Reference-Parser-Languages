"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/loy.js";

describe("Localized book Rev (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (loy)", () => {
		expect(p.parse("ॱङो़न्‍पा 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("མངོན་པ། 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (loy)", () => {
		expect(p.parse("མད་ཐཱ། 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मेथा 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (loy)", () => {
		expect(p.parse("མར་ཀུ། 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मारकु 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (loy)", () => {
		expect(p.parse("ལུ་ཀ། 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ལུ་ཀ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (loy)", () => {
		expect(p.parse("३ योहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("༣ ཡོ་ཧ་ནན། 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("༣ ཡོ་ཧ། 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ योहा 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (loy)", () => {
		expect(p.parse("१ योहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ ཡོ་ཧ་ནན། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ ཡོ་ཧ། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ योहा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. योहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. ཡོ་ཧ་ནན། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. ཡོ་ཧ། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. योहा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡ योहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡ ཡོ་ཧ་ནན། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡ ཡོ་ཧ། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡ योहा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡. योहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡. ཡོ་ཧ་ནན། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡. ཡོ་ཧ། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("༡. योहा 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (loy)", () => {
		expect(p.parse("२ योहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ ཡོ་ཧ་ནན། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ ཡོ་ཧ། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ योहा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. योहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. ཡོ་ཧ་ནན། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. ཡོ་ཧ། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. योहा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢ योहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢ ཡོ་ཧ་ནན། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢ ཡོ་ཧ། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢ योहा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢. योहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢. ཡོ་ཧ་ནན། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢. ཡོ་ཧ། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("༢. योहा 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (loy)", () => {
		expect(p.parse("योहान्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ཡོ་ཧ་ནན། 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ཡོ་ཧ། 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("योहा 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (loy)", () => {
		expect(p.parse("མཛད་པ། 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("जेपा 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (loy)", () => {
		expect(p.parse("རོ་མཱ་པ། 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमापा 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("རོ་མཱ། 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (loy)", () => {
		expect(p.parse("१ ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरीन्‍थुपा 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ ཀོ་རིན། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरीन 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरीन्‍थुपा 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. ཀོ་རིན། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरीन 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡ ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡ कोरीन्‍थुपा 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡ ཀོ་རིན། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡ कोरीन 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡. ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡. कोरीन्‍थुपा 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡. ཀོ་རིན། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("༡. कोरीन 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (loy)", () => {
		expect(p.parse("२ ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरीन्‍थुपा 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ ཀོ་རིན། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरीन 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरीन्‍थुपा 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. ཀོ་རིན། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरीन 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢ ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢ कोरीन्‍थुपा 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢ ཀོ་རིན། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢ कोरीन 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢. ཀོ་རིན་ཐུ་པ། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢. कोरीन्‍थुपा 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢. ཀོ་རིན། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("༢. कोरीन 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (loy)", () => {
		expect(p.parse("ཀོ་ལོ་སཱེ་པ། 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ཀོ་ལོ་སཱེ། 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कोलोसेपा 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कोलोसे 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (loy)", () => {
		expect(p.parse("ག་ལ་ཏི་ཡཱ་པ། 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गालातीयापा 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ག་ལ་ཏི་ཡཱ། 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गालातीया 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (loy)", () => {
		expect(p.parse("ཨེ་ཕེ་སུ་པ། 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ཨེ་ཕེ་སུ། 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफीसुपा 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफीसु 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (loy)", () => {
		expect(p.parse("ཕི་ལིབ་པཱི་པ། 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फीलीप्‍पीपा 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ཕི་ལིབ། 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फीलीप 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (loy)", () => {
		expect(p.parse("१ ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसालोनीकेपा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ ཐེ་ས། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसालोनीकेपा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ཐེ་ས། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡ ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡ थेसालोनीकेपा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡ ཐེ་ས། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡ थेसा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡. ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡. थेसालोनीकेपा 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡. ཐེ་ས། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("༡. थेसा 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (loy)", () => {
		expect(p.parse("२ ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसालोनीकेपा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ ཐེ་ས། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसालोनीकेपा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ཐེ་ས། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢ ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢ थेसालोनीकेपा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢ ཐེ་ས། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢ थेसा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢. ཐེ་ས་ལོ་ནི་ཀེ་པ། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢. थेसालोनीकेपा 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢. ཐེ་ས། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("༢. थेसा 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (loy)", () => {
		expect(p.parse("१ ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ ཏི་མོ་ཐེ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तीमोथेउ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तीमोथे 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. ཏི་མོ་ཐེ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तीमोथेउ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तीमोथे 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡ ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡ ཏི་མོ་ཐེ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡ तीमोथेउ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡ तीमोथे 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡. ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡. ཏི་མོ་ཐེ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡. तीमोथेउ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("༡. तीमोथे 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (loy)", () => {
		expect(p.parse("२ ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ ཏི་མོ་ཐེ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तीमोथेउ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तीमोथे 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. ཏི་མོ་ཐེ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तीमोथेउ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तीमोथे 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢ ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢ ཏི་མོ་ཐེ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢ तीमोथेउ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢ तीमोथे 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢. ཏི་མོ་ཐེའུ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢. ཏི་མོ་ཐེ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢. तीमोथेउ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("༢. तीमोथे 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (loy)", () => {
		expect(p.parse("ཏི་ཏོས། 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ཏི་ཏོ། 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतोस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतो 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (loy)", () => {
		expect(p.parse("ཕི་ལེ་མོན། 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फीलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ཕི་ལེ། 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फीले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (loy)", () => {
		expect(p.parse("ཨིབ་རི་པ། 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ईब्‍रीपा 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ཨིབ་རི། 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ईब्‍री 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (loy)", () => {
		expect(p.parse("ཡ་ཀོབ། 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकोब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ཡ་ཀོ། 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याको 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (loy)", () => {
		expect(p.parse("१ པེ་ཏྲོ། 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पेटो 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. པེ་ཏྲོ། 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पेटो 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("༡ པེ་ཏྲོ། 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("༡ पेटो 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("༡. པེ་ཏྲོ། 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("༡. पेटो 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (loy)", () => {
		expect(p.parse("२ པེ་ཏྲོ། 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पेटो 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. པེ་ཏྲོ། 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पेटो 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("༢ པེ་ཏྲོ། 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("༢ पेटो 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("༢. པེ་ཏྲོ། 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("༢. पेटो 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (loy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (loy)", () => {
		expect(p.parse("ཡུ་དཱ། 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("युदा 1:1").osis()).toEqual("Jude.1.1");
	});
});
