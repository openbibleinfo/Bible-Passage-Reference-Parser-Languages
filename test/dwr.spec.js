"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dwr.js";

describe("Localized book Gen (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dwr)", () => {
		expect(p.parse("Doometsaa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Dom. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ዶመ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dwr)", () => {
		expect(p.parse("Kessaa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kes. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ከሳ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dwr)", () => {
		expect(p.parse("Wogaa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Wog. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ዎጋ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dwr)", () => {
		expect(p.parse("Payduwaa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Pay. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ፓይዱዋ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ፓይ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (dwr)", () => {
		expect(p.parse("Ermaasa Seelaa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ኤርማሳ ሴላ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Sel. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሴላ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dwr)", () => {
		expect(p.parse("Yohaannisa Sas'aa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮሃንሳ ሳፃ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ሳፃ ማፃፋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sas'. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Saxaa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sax 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ሳፃ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ሳፅ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dwr)", () => {
		expect(p.parse("Zaaretsuwaa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Zar. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዛረዋ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዛረ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (dwr)", () => {
		expect(p.parse("Iyyaasa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iya. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ኢያሳ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (dwr)", () => {
		expect(p.parse("Daannatuwaa 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dat. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ዳናቱዋ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ዳና. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (dwr)", () => {
		expect(p.parse("Uruuto 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Uru. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ኡሩቶ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (dwr)", () => {
		expect(p.parse("Isiyaasa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢስያሳ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳ. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dwr)", () => {
		expect(p.parse("1 Sammeela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ሳሜላ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sammeela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሜላ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dwr)", () => {
		expect(p.parse("2 Sammeela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሜላ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sammeela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሜላ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dwr)", () => {
		expect(p.parse("1 Kaatatuwaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kat. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ካታቱዋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ካታ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kaatatuwaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kat. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ካታቱዋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ካታ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dwr)", () => {
		expect(p.parse("2 Kaatatuwaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kat. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ካታቱዋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ካታ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kaatatuwaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kat. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ካታቱዋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ካታ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dwr)", () => {
		expect(p.parse("1 Oduwaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Od. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ኦዱዋ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Oduwaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Od. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ኦዱዋ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dwr)", () => {
		expect(p.parse("2 Oduwaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Od. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ኦዱዋ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Oduwaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Od. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ኦዱዋ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (dwr)", () => {
		expect(p.parse("Izira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("እዝራ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (dwr)", () => {
		expect(p.parse("Nahimiyaa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ናህምያ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ናህ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (dwr)", () => {
		expect(p.parse("Asttiro 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስትሮ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስ. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (dwr)", () => {
		expect(p.parse("Iyyooba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ኢዮባ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (dwr)", () => {
		expect(p.parse("Mazimuriyaa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ማዝሙርያ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Maz. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ማዝ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (dwr)", () => {
		expect(p.parse("Leemisuwaa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Lem. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ሌምሱዋ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ሌም. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (dwr)", () => {
		expect(p.parse("Eranchchaa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Era. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ኤራንቻ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ኤራ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (dwr)", () => {
		expect(p.parse("Siik'uwaa Sabaa 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ሲቁዋ ሳባ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sik'. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ስቁዋ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (dwr)", () => {
		expect(p.parse("Ermaasa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርማሳ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤር. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (dwr)", () => {
		expect(p.parse("Hizik'k'eela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ህዝቄላ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ህዝ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (dwr)", () => {
		expect(p.parse("Daaneela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳኔላ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (dwr)", () => {
		expect(p.parse("Hoose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሰ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (dwr)", () => {
		expect(p.parse("Iyyu'eela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyu. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩኤላ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩ. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (dwr)", () => {
		expect(p.parse("Amoos'a 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞጻ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (dwr)", () => {
		expect(p.parse("Abddiyyu 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብድ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብድዩ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (dwr)", () => {
		expect(p.parse("Yoonaasa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮናሳ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (dwr)", () => {
		expect(p.parse("Mikiyaasa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክያሳ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክ. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (dwr)", () => {
		expect(p.parse("Naahooma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nam. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆማ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (dwr)", () => {
		expect(p.parse("Imbbaak'ooma 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("እምባቆማ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Imb. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("እምባ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (dwr)", () => {
		expect(p.parse("Sofonaasa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎናሳ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (dwr)", () => {
		expect(p.parse("Haage 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሃገ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (dwr)", () => {
		expect(p.parse("Zakkaraasa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካራሳ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካ. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (dwr)", () => {
		expect(p.parse("Milkkiyaasa 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚልክያሳ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚልክ. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dwr)", () => {
		expect(p.parse("Maatoossa Mishiraachchuwaa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maatoossa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶሳ ምሽራቹዋ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶሳ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማት 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dwr)", () => {
		expect(p.parse("Mark'k'oossa Mishiraachchuwaa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marqqoossa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆሳ ምሽራቹዋ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆሳ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dwr)", () => {
		expect(p.parse("Luuk'aasa Mishiraachchuwaa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃሳ ምሽራቹዋ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuqaasa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk'. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃሳ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቅ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dwr)", () => {
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮህ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dwr)", () => {
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮህ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dwr)", () => {
		expect(p.parse("3 Yohaannisa Kiitaa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohaannisa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃኒሳ ኪታ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃንሳ ኪታ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮህ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dwr)", () => {
		expect(p.parse("1 Yohaannisa Kiitaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohaannisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሃኒሳ ኪታ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሃንሳ ኪታ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሃ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaannisa Kiitaa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaannisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃኒሳ ኪታ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃንሳ ኪታ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dwr)", () => {
		expect(p.parse("2 Yohaannisa Kiitaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohaannisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሃኒሳ ኪታ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሃንሳ ኪታ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሃ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaannisa Kiitaa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaannisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃኒሳ ኪታ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃንሳ ኪታ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dwr)", () => {
		expect(p.parse("Yohaannisa Mishiraachchuwaa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohaannisa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃንሳ ምሽራቹዋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃኒሳ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮህ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dwr)", () => {
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮሚያ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮመ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮም 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dwr)", () => {
		expect(p.parse("1 K'oronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 K'or. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮንቶሳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. K'oronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. K'or. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶሳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dwr)", () => {
		expect(p.parse("2 K'oronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 K'or. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮንቶሳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. K'oronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. K'or. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶሳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dwr)", () => {
		expect(p.parse("1Qor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆር 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dwr)", () => {
		expect(p.parse("2Qor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆር 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dwr)", () => {
		expect(p.parse("K'olaasiyaasa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qolaasiyaasa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossians 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("K'ol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላሲያሳ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላስያሳ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆል. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆል 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dwr)", () => {
		expect(p.parse("Galaatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatians 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላቲያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋል 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dwr)", () => {
		expect(p.parse("Ephesians 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesoona 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፈሶና 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌሶና 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፈ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dwr)", () => {
		expect(p.parse("Pilip'p'isiyoosa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Piliphphisiyoosa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippians 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፒሊጲሲዮሳ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፕልጵስዮሳ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፕልጵ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፒል 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dwr)", () => {
		expect(p.parse("1 Teselonqqiyaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teselonk'k'e 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰሎንቀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ቴሴሎንቃ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተስ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teselonqqiyaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teselonk'k'e 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎንቀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ቴሴሎንቃ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተስ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dwr)", () => {
		expect(p.parse("2 Teselonqqiyaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teselonk'k'e 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተሰሎንቀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ቴሴሎንቃ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተስ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teselonqqiyaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teselonk'k'e 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰሎንቀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ቴሴሎንቃ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተስ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dwr)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ቴስ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dwr)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ቴስ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dwr)", () => {
		expect(p.parse("1 S'imootoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ximootoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 S'im. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጽሞቶሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ፂሞቶሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጽሞ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. S'imootoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximootoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. S'im. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጽሞቶሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ፂሞቶሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጽሞ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dwr)", () => {
		expect(p.parse("2 S'imootoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ximootoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 S'im. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጽሞቶሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ፂሞቶሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጽሞ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. S'imootoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximootoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. S'im. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጽሞቶሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ፂሞቶሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጽሞ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dwr)", () => {
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ፂም 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dwr)", () => {
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ፂም 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dwr)", () => {
		expect(p.parse("Tiitoo 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiita 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲታ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲት 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dwr)", () => {
		expect(p.parse("Pilimoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilm. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፒሊሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፕልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፕል. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፒም 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dwr)", () => {
		expect(p.parse("Hebrews 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibraawe 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ኢብራዌ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብራ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብራዌ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ኢብር 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dwr)", () => {
		expect(p.parse("Yaak'ooba Kiitaa 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yayiqooba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያዪቆባ ኪታ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆባ ኪታ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak'. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yay 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆባ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dwr)", () => {
		expect(p.parse("1 P'es'iroosa Kiitaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phexiroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጰጽሮሳ ኪታ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴፂሮሳ ኪታ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P'es'. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጰጽ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P'es'iroosa Kiitaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phexiroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጰጽሮሳ ኪታ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴፂሮሳ ኪታ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P'es'. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጰጽ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dwr)", () => {
		expect(p.parse("2 P'es'iroosa Kiitaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phexiroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጰጽሮሳ ኪታ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴፂሮሳ ኪታ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P'es'. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጰጽ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P'es'iroosa Kiitaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phexiroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጰጽሮሳ ኪታ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴፂሮሳ ኪታ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P'es'. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጰጽ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dwr)", () => {
		expect(p.parse("1Phx 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Ph 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጵፅ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dwr)", () => {
		expect(p.parse("2Phx 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Ph 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጵፅ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dwr)", () => {
		expect(p.parse("Yihudaa Kiitaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihudaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዪሁዳ ኪታ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ ኪታ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yid 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዪድ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Acts (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dwr)", () => {
		expect(p.parse("Kiitetteeddawanttu Oosuwaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ዬሱሲ ኪቴዳዋንቱ ኦሱዋ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kiitaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kit. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kit 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ኪታ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ኪት 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Parser helper should handle ranges (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (dwr)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (dwr)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (dwr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dwr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoh - 3 Yohaannisa Kiitaa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoh – 3 Yohaannisa Kiitaa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoh — 3 Yohaannisa Kiitaa").osis()).toEqual("1John.1-3John.1");
	});
});
