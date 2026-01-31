"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tir.js";

describe("Localized book Gen (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tir)", () => {
		expect(p.parse("ዘፍጥረት 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ዘፍ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tir)", () => {
		expect(p.parse("ዘጸኣት 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ዘፀኣት 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ዘፀ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tir)", () => {
		expect(p.parse("ዘሌዋውያን 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ዘሌ. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tir)", () => {
		expect(p.parse("ዘሑልቍ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ዘሑ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tir)", () => {
		expect(p.parse("ሰቆቃወ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሰቆ. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tir)", () => {
		expect(p.parse("ራእይ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tir)", () => {
		expect(p.parse("ዘዳግም 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዘዳ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tir)", () => {
		expect(p.parse("ኢያሱ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("እያሱ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tir)", () => {
		expect(p.parse("መሳፍንት 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("መሳ. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ዳያኑ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tir)", () => {
		expect(p.parse("ሩት 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tir)", () => {
		expect(p.parse("ኢሳይያስ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳያስ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳ. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tir)", () => {
		expect(p.parse("1 ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ይ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ይ ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ይ. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ይ. ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tir)", () => {
		expect(p.parse("2 ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ይ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ይ ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ይ. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ይ. ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tir)", () => {
		expect(p.parse("1 ነገስታት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ነገስት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ነገስታት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ነገስት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ይ ነገስታት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ይ ነገስት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ይ ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ይ. ነገስታት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ይ. ነገስት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ይ. ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tir)", () => {
		expect(p.parse("2 ነገስታት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ነገስት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ነገስታት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ነገስት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ይ ነገስታት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ይ ነገስት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ይ ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ይ. ነገስታት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ይ. ነገስት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ይ. ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tir)", () => {
		expect(p.parse("1 ይ ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ዜና. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ይ ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ዜና. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ይ ይ ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ይ ዜና. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ይ ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ይ. ይ ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ይ. ዜና. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ይ. ዜና 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tir)", () => {
		expect(p.parse("2 ይ ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ዜና. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ይ ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ዜና. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ይ ይ ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ይ ዜና. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ይ ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ይ. ይ ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ይ. ዜና. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ይ. ዜና 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tir)", () => {
		expect(p.parse("እዝራ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tir)", () => {
		expect(p.parse("ነህምያ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ነህ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tir)", () => {
		expect(p.parse("ኣስቴር 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ኣስ. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tir)", () => {
		expect(p.parse("ኢዮብ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("እዮብ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tir)", () => {
		expect(p.parse("መዝ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ዳዊት 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tir)", () => {
		expect(p.parse("ምስላታት 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ምሳ. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ምሳሌ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tir)", () => {
		expect(p.parse("መክብብ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("መክ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tir)", () => {
		expect(p.parse("ናይ ሰሎሞን መሃልየ መሃልይ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("መሃልየ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("መሃ. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tir)", () => {
		expect(p.parse("ኤርሚያስ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርምያስ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤር. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tir)", () => {
		expect(p.parse("ህዝቅኤል 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሕዝቅኤል 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሕዝ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tir)", () => {
		expect(p.parse("ዳኒኤል 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳንኤል 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳን. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tir)", () => {
		expect(p.parse("ሆሴኣ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴዕ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tir)", () => {
		expect(p.parse("ኢዩኤል 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ጆኤል 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tir)", () => {
		expect(p.parse("ኣሞፅ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tir)", () => {
		expect(p.parse("ኣብድዩ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ኦብድያ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ኣብ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tir)", () => {
		expect(p.parse("ዮናስ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tir)", () => {
		expect(p.parse("ሚክያስ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክ. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tir)", () => {
		expect(p.parse("ናሁም 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆም 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tir)", () => {
		expect(p.parse("ኣንባቆም 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("እንባቆም 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("እንባ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tir)", () => {
		expect(p.parse("ሶፎንያስ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ጸፎንያስ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tir)", () => {
		expect(p.parse("ሃጋ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሓጌ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tir)", () => {
		expect(p.parse("ዘካርያስ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዘካ. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tir)", () => {
		expect(p.parse("ሚልክያስ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚል. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tir)", () => {
		expect(p.parse("ማቴዎስ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tir)", () => {
		expect(p.parse("ማርቆስ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tir)", () => {
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃስ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tir)", () => {
		expect(p.parse("3ይ ዮሃንስ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃንስ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሓ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tir)", () => {
		expect(p.parse("1 ይ ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሓ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ይ ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሓ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይ ይ ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይ ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይ ዮሓ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይ. ይ ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይ. ዮሃንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ይ. ዮሓ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tir)", () => {
		expect(p.parse("2 ይ ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሓ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ይ ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሓ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይ ይ ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይ ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይ ዮሓ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይ. ይ ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይ. ዮሃንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ይ. ዮሓ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tir)", () => {
		expect(p.parse("ዮሃንስ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሓ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tir)", () => {
		expect(p.parse("ግብሪ ሃዋርያት 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ግ.ሓ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tir)", () => {
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tir)", () => {
		expect(p.parse("1 ይ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ይ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ይ ይ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ይ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ይ ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ይ. ይ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ይ. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ይ. ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tir)", () => {
		expect(p.parse("2 ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ይ ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ይ ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ይ. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ይ. ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tir)", () => {
		expect(p.parse("ቈላስይስ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tir)", () => {
		expect(p.parse("ገላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tir)", () => {
		expect(p.parse("ኤፌሶን 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tir)", () => {
		expect(p.parse("ፊልጵስዩስ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊልጵ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tir)", () => {
		expect(p.parse("1 ይ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ይ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ይ ይ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ይ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ይ ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ይ. ይ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ይ. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ይ. ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tir)", () => {
		expect(p.parse("2 ይ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ይ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ይ ይ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ይ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ይ ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ይ. ይ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ይ. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ይ. ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tir)", () => {
		expect(p.parse("1 ይ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ይ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ይ ይ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ይ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ይ ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ይ. ይ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ይ. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ይ. ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tir)", () => {
		expect(p.parse("2 ይ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ይ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ይ ይ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ይ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ይ ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ይ. ይ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ይ. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ይ. ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tir)", () => {
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tir)", () => {
		expect(p.parse("ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊል. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tir)", () => {
		expect(p.parse("እብራይስጢ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዕብራውያን 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዕብ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tir)", () => {
		expect(p.parse("ያእቆብ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያዕቆብ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tir)", () => {
		expect(p.parse("1 ይ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴጥ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ይ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጥ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ይ ይ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ይ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ይ ጴጥ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ይ. ይ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ይ. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ይ. ጴጥ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tir)", () => {
		expect(p.parse("2 ይ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴጥ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ይ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጥ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ይ ይ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ይ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ይ ጴጥ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ይ. ይ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ይ. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ይ. ጴጥ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tir)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tir)", () => {
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
	});
});
