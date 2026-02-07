"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lif.js";

describe("Localized book Gen (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lif)", () => {
		expect(p.parse("तोलिङ्‌सोमु 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ᤋᤥᤗᤡᤱᤛᤥᤔᤢ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("तोलिङ् 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ᤋᤥᤗᤡᤱ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lif)", () => {
		expect(p.parse("लाम्‍दिक् 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ᤗᤠᤶᤍᤡᤰ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ला 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ᤗᤠ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lif)", () => {
		expect(p.parse("ले़बि 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ᤗᤧᤒᤡ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lif)", () => {
		expect(p.parse("खानिःत् 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ᤂᤠᤏᤡ᤺ᤳ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lif)", () => {
		expect(p.parse("मे़रिङ् साप्‍पन् 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ᤔᤧᤖᤡᤱ ᤛᤠᤵᤐᤴ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("मे़ सा 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ᤔᤧ ᤛᤠ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lif)", () => {
		expect(p.parse("सुफो 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ᤛᤢᤑᤥ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lif)", () => {
		expect(p.parse("साम्‌योथिम् इङ् 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ᤛᤠᤶᤕᤥᤌᤡᤶ ᤀᤡᤱ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("साम्‌यो इङ् 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ᤛᤠᤶᤕᤥ ᤀᤡᤱ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lif)", () => {
		expect(p.parse("यहोसु 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ᤕᤜᤥᤛᤢ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("यहो 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ᤕᤜᤥ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lif)", () => {
		expect(p.parse("खासे़न्‍लोःम्‍बा 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ᤂᤠᤛᤧᤴᤗᤥ᤺ᤶᤒᤠ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("खालो 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ᤂᤠᤗᤥ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lif)", () => {
		expect(p.parse("रुथ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ᤖᤢᤌ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lif)", () => {
		expect(p.parse("यसैया 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ᤕᤛᤤᤕᤠ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("यसै 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ᤕᤛᤤ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lif)", () => {
		expect(p.parse("१ सामुए़ल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१ ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१ सामु 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१ ᤛᤠᤔᤢ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१. सामुए़ल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१. ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१. सामु 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("१. ᤛᤠᤔᤢ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇ सामुए़ल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇ ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇ सामु 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇ ᤛᤠᤔᤢ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇. सामुए़ल 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇. ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇. सामु 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("᥇. ᤛᤠᤔᤢ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lif)", () => {
		expect(p.parse("२ सामुए़ल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२ ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२ सामु 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२ ᤛᤠᤔᤢ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२. सामुए़ल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२. ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२. सामु 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("२. ᤛᤠᤔᤢ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈ सामुए़ल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈ ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈ सामु 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈ ᤛᤠᤔᤢ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈. सामुए़ल 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈. ᤛᤠᤔᤢᤀᤧᤗ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈. सामु 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("᥈. ᤛᤠᤔᤢ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lif)", () => {
		expect(p.parse("१ हाङ् 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१ ᤜᤠᤱ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१. हाङ् 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("१. ᤜᤠᤱ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("᥇ हाङ् 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("᥇ ᤜᤠᤱ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("᥇. हाङ् 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("᥇. ᤜᤠᤱ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lif)", () => {
		expect(p.parse("२ हाङ् 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२ ᤜᤠᤱ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२. हाङ् 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("२. ᤜᤠᤱ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("᥈ हाङ् 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("᥈ ᤜᤠᤱ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("᥈. हाङ् 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("᥈. ᤜᤠᤱ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lif)", () => {
		expect(p.parse("१ साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१ ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१ साप्‍मु 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१ ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१. साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१. ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१. साप्‍मु 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("१. ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇ साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇ ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇ साप्‍मु 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇ ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇. साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇. ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇. साप्‍मु 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("᥇. ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lif)", () => {
		expect(p.parse("२ साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२ ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२ साप्‍मु 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२ ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२. साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२. ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२. साप्‍मु 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("२. ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈ साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈ ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈ साप्‍मु 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈ ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈. साप्‍मुःन्‍धुम् 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈. ᤛᤠᤵᤔᤢ᤺ᤴᤎᤢᤶ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈. साप्‍मु 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("᥈. ᤛᤠᤵᤔᤢ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lif)", () => {
		expect(p.parse("ए़ज्रा 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ᤀᤧᤈᤪᤠ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lif)", () => {
		expect(p.parse("नहेम्‍याह 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ᤏᤜᤣᤔᤩᤠᤜ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("नहे 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ᤏᤜᤣ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lif)", () => {
		expect(p.parse("ए़स्‍तर 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ᤀᤧᤛ᤻ᤋᤖ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lif)", () => {
		expect(p.parse("अयुब 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ᤀᤕᤢᤒ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lif)", () => {
		expect(p.parse("निङ्‌वाॽफु साम्‍लोसुम् 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ᤏᤡᤱᤘᤠ᤹ᤑᤢ ᤛᤠᤶᤗᤥᤛᤢᤶ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("निङ् सुम् 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ᤏᤡᤱ ᤛᤢᤶ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lif)", () => {
		expect(p.parse("खाहुन् 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ᤂᤠᤜᤢᤴ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lif)", () => {
		expect(p.parse("खाहुन्‍साबा 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ᤂᤠᤜᤢᤴᤛᤠᤒᤠ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("खा साबा 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ᤂᤠ ᤛᤠᤒᤠ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lif)", () => {
		expect(p.parse("सोलोमनरे़ कुसाम्‍लो 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ᤛᤥᤗᤥᤔᤏᤖᤧ ᤁᤢᤛᤠᤶᤗᤥ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("सोलो साम्‍लो 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ᤛᤥᤗᤥ ᤛᤠᤶᤗᤥ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lif)", () => {
		expect(p.parse("यर्मिया 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ᤕᤷᤔᤡᤕᤠ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("यर्मि 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ᤕᤷᤔᤡ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lif)", () => {
		expect(p.parse("ᤀᤡᤈᤁᤡᤀᤣᤗ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इजकिएल 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ᤀᤡᤈ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("इज 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lif)", () => {
		expect(p.parse("दानिए़ल 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ᤍᤠᤏᤡᤀᤧᤗ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("दानि 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ᤍᤠᤏᤡ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lif)", () => {
		expect(p.parse("होसे 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ᤜᤥᤛᤣ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lif)", () => {
		expect(p.parse("ᤕᤥᤀᤣᤗ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योएल 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ᤕᤥᤀᤣ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("योए 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lif)", () => {
		expect(p.parse("ᤀᤠᤔᤥᤛ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमोस 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ᤀᤠᤔᤥ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("आमो 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lif)", () => {
		expect(p.parse("ᤀᤥᤒᤍᤡᤕᤠ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओबदिया 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ᤀᤥᤒ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ओब 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lif)", () => {
		expect(p.parse("योना 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ᤕᤥᤏᤠ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lif)", () => {
		expect(p.parse("मिका 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ᤔᤡᤁᤠ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lif)", () => {
		expect(p.parse("नहुम 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ᤏᤜᤢᤔ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lif)", () => {
		expect(p.parse("हबकुक 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ᤜᤒᤁᤢᤁ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("हब 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ᤜᤒ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lif)", () => {
		expect(p.parse("सपन्‍याह 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ᤛᤐᤏᤩᤠᤜ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("सप 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ᤛᤐ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lif)", () => {
		expect(p.parse("हाग्‍गै 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ᤜᤠᤃ᤻ᤃᤤ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lif)", () => {
		expect(p.parse("जकरिया 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ᤈᤁᤖᤡᤕᤠ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("जक 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ᤈᤁ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lif)", () => {
		expect(p.parse("मलाकि 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ᤔᤗᤠᤁᤡ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("मला 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ᤔᤗᤠ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lif)", () => {
		expect(p.parse("मत्ति 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᤔᤳᤋᤡ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lif)", () => {
		expect(p.parse("मर्कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कु 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᤔᤷᤁᤢᤛ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᤔᤷᤁᤢ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lif)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᤗᤢᤁᤠ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lif)", () => {
		expect(p.parse("३ युहुन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("᥉ ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युहु 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("᥉ ᤕᤢᤜᤢ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lif)", () => {
		expect(p.parse("१ युहुन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युहु 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ ᤕᤢᤜᤢ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहुन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहु 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. ᤕᤢᤜᤢ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇ युहुन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇ ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇ युहु 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇ ᤕᤢᤜᤢ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇. युहुन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇. ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇. युहु 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("᥇. ᤕᤢᤜᤢ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lif)", () => {
		expect(p.parse("२ युहुन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युहु 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ ᤕᤢᤜᤢ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहुन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहु 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. ᤕᤢᤜᤢ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈ युहुन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈ ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈ युहु 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈ ᤕᤢᤜᤢ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈. युहुन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈. ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈. युहु 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("᥈. ᤕᤢᤜᤢ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lif)", () => {
		expect(p.parse("युहुन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᤕᤢᤜᤢᤴᤏᤠ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहु 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᤕᤢᤜᤢ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lif)", () => {
		expect(p.parse("सेःक्‌युक्‍मिबाहाॽ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᤛᤣ᤺ᤰᤕᤢᤰᤔᤡᤒᤠᤜᤠ᤹ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("सेःक्‌युक् 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᤛᤣ᤺ᤰᤕᤢᤰ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lif)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ᤖᤥᤔᤡ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lif)", () => {
		expect(p.parse("१ कोरन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ ᤁᤥᤖ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. ᤁᤥᤖ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇ कोरन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇ ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇ ᤁᤥᤖ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇. कोरन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇. ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇. कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("᥇. ᤁᤥᤖ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lif)", () => {
		expect(p.parse("२ कोरन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ ᤁᤥᤖ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. ᤁᤥᤖ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈ कोरन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈ ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈ ᤁᤥᤖ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈. कोरन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈. ᤁᤥᤖᤴᤌᤡ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈. कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("᥈. ᤁᤥᤖ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lif)", () => {
		expect(p.parse("कलस्‍सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᤁᤗᤛ᤻ᤛᤡ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्‌ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᤁᤗᤛ᤻ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lif)", () => {
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᤃᤗᤠᤋᤡ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᤃᤗᤠ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lif)", () => {
		expect(p.parse("ᤀᤣᤑᤡᤛᤡ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ᤀᤣᤑᤡ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lif)", () => {
		expect(p.parse("फिलिप्‍पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᤑᤡᤗᤡᤵᤐᤡ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᤑᤡᤗᤡᤐ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lif)", () => {
		expect(p.parse("१ थिस्‍सलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थिस्‍स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थिस्‍सलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थिस्‍स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇ थिस्‍सलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇ ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇ थिस्‍स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇ ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇. थिस्‍सलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇. ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇. थिस्‍स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("᥇. ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lif)", () => {
		expect(p.parse("२ थिस्‍सलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थिस्‍स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थिस्‍सलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थिस्‍स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈ थिस्‍सलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈ ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈ थिस्‍स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈ ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈. थिस्‍सलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈. ᤌᤡᤛ᤻ᤛᤗᤥᤏᤡᤁᤡ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈. थिस्‍स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("᥈. ᤌᤡᤛ᤻ᤛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lif)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ ᤋᤡᤔᤥ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. ᤋᤡᤔᤥ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇ ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇ ᤋᤡᤔᤥ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇. ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇. तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("᥇. ᤋᤡᤔᤥ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lif)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ ᤋᤡᤔᤥ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. ᤋᤡᤔᤥ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈ ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈ ᤋᤡᤔᤥ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈. ᤋᤡᤔᤥᤌᤡ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈. तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("᥈. ᤋᤡᤔᤥ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lif)", () => {
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᤋᤡᤋᤛ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तित 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᤋᤡᤋ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lif)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᤑᤡᤗᤣᤔᤥᤏ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᤑᤡᤗᤣ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lif)", () => {
		expect(p.parse("हिब्रु 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ᤜᤡᤒᤪᤢ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lif)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ᤕᤠᤁᤢᤒ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ᤕᤠᤁᤢ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lif)", () => {
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ ᤐᤋᤪᤢ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. ᤐᤋᤪᤢ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇ पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇ ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇ ᤐᤋᤪᤢ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇. ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("᥇. ᤐᤋᤪᤢ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lif)", () => {
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ ᤐᤋᤪᤢ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. ᤐᤋᤪᤢ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈ पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈ ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈ ᤐᤋᤪᤢ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈. ᤐᤋᤪᤢᤛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("᥈. ᤐᤋᤪᤢ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lif)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ᤕᤜᤢᤍᤠ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहु 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ᤕᤜᤢ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lif)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहुन्‍ना - ३ युहुन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहुन्‍ना – ३ युहुन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहुन्‍ना — ३ युहुन्‍ना").osis()).toEqual("1John.1-3John.1");
	});
});
