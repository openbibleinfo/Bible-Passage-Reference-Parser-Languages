"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gof.js";

describe("Localized book Gen (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gof)", () => {
		expect(p.parse("Medhetethi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Medhe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("መተ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("መ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gof)", () => {
		expect(p.parse("Kessa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ከሳ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gof)", () => {
		expect(p.parse("Leeweta 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leewe 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌወታ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌወ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gof)", () => {
		expect(p.parse("Taybo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ታይቦ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gof)", () => {
		expect(p.parse("Milalsa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mila 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ምላልሳ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ምላ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gof)", () => {
		expect(p.parse("Yohaannisa Qonccethaa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮሃኒሳ ቆንጬ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yo.Qo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yo@Qo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Qon 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮ.ቆ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ቆን 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gof)", () => {
		expect(p.parse("Zaaretho 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Zaare 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዛረ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዛረ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gof)", () => {
		expect(p.parse("Iyyasu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iyya 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("እያሱ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("እያ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gof)", () => {
		expect(p.parse("Ayseysata 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("አይሰይሳታ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ayse 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("አይሰ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gof)", () => {
		expect(p.parse("Uruuto 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Uru 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ኡሩቶ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ኡሩ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gof)", () => {
		expect(p.parse("Isayaasa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("እሳያሳ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("እሳ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gof)", () => {
		expect(p.parse("1 Sameela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Same 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ሳሜላ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ሳሜ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sameela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Same 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሜላ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሜ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gof)", () => {
		expect(p.parse("2 Sameela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Same 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሜላ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሜ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sameela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Same 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሜላ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሜ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gof)", () => {
		expect(p.parse("1 Kawota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kawo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ካዎታ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ካዎ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kawota 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kawo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ካዎታ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ካዎ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gof)", () => {
		expect(p.parse("2 Kawota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kawo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ካዎታ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ካዎ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kawota 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kawo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ካዎታ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ካዎ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gof)", () => {
		expect(p.parse("1 Taarike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Taari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ታርከ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ታር 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Taarike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Taari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ታርከ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ታር 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gof)", () => {
		expect(p.parse("2 Taarike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Taari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ታርከ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ታር 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Taarike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Taari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ታርከ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ታር 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gof)", () => {
		expect(p.parse("Izira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("እዝራ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("እዝ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gof)", () => {
		expect(p.parse("Nahime 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nahi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ናህመ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ናህ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gof)", () => {
		expect(p.parse("Astiro 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Asti 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስትሮ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስት 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gof)", () => {
		expect(p.parse("Iyyoba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyyo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("እዮባ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("እዮ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gof)", () => {
		expect(p.parse("Mazmure 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ማዝሙረ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Maz 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ማዝ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gof)", () => {
		expect(p.parse("Leemiso 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Leemi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ሌምሶ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ሌም 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gof)", () => {
		expect(p.parse("Erata 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Era 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ኤራታ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ኤራ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gof)", () => {
		expect(p.parse("Solomone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ሶሎሞነ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ሶሎ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gof)", () => {
		expect(p.parse("Ermiyaasa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርምያሳ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ermi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርም 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gof)", () => {
		expect(p.parse("Hizqeela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ህዝቄላ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ህዝ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gof)", () => {
		expect(p.parse("Daanela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daane 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳነላ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳነ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gof)", () => {
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሰ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gof)", () => {
		expect(p.parse("Iyyu7eela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyyu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("እዩኤላ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("እዩ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gof)", () => {
		expect(p.parse("Amoxe 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞፀ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gof)", () => {
		expect(p.parse("Abdiyu 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብድዩ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብድ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gof)", () => {
		expect(p.parse("Yoonasa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮናሳ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮና 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gof)", () => {
		expect(p.parse("Mikiyaasa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miki 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ምክያሳ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ምክ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gof)", () => {
		expect(p.parse("Nahoome 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naho 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆመ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gof)", () => {
		expect(p.parse("Inbaqoome 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("እንባቆመ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Inba 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("እንባ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gof)", () => {
		expect(p.parse("Sofonaasa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎናሳ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gof)", () => {
		expect(p.parse("Hagge 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሀገ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gof)", () => {
		expect(p.parse("Zakaryaasa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካርያሳ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gof)", () => {
		expect(p.parse("Milkiyaasa 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Milki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ምልክያሳ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ምልክ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gof)", () => {
		expect(p.parse("Maatoosa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maatosa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maato 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶሳ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gof)", () => {
		expect(p.parse("Marqqoosa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marqoosa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆሳ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gof)", () => {
		expect(p.parse("Luuqaasa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqaasa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃሳ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gof)", () => {
		expect(p.parse("1Yohaannisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሃ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gof)", () => {
		expect(p.parse("2Yohaannisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሃ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gof)", () => {
		expect(p.parse("3 Yohaannisa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohaanisa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yohaannisa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoha 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃኒሳ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃንሳ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoha 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሃ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gof)", () => {
		expect(p.parse("1 Yohaannisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohaanisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሃኒሳ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሃንሳ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaannisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaanisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃኒሳ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃንሳ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሀ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gof)", () => {
		expect(p.parse("2 Yohaannisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohaanisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሃኒሳ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሃንሳ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaannisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaanisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃኒሳ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃንሳ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሀ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gof)", () => {
		expect(p.parse("Yohaannisa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohaanisa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃኒሳ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃንሳ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሀ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gof)", () => {
		expect(p.parse("Hawaareta Oosuwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hawaareta 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሃዋሬታ ኦሱዋ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ha.O 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ha@O 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hawa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሀዋረታ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሃ.ኦ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሀዋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gof)", () => {
		expect(p.parse("Roome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮመ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gof)", () => {
		expect(p.parse("1 Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Qorontoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮንቶሳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Qoro 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qorontoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶሳ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qoro 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gof)", () => {
		expect(p.parse("2 Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Qorontoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮንቶሳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Qoro 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qorontoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶሳ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qoro 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gof)", () => {
		expect(p.parse("1Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qoro 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gof)", () => {
		expect(p.parse("2Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qoro 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gof)", () => {
		expect(p.parse("Qolaasiyasa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላሲያሳ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላስያሳ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qola 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gof)", () => {
		expect(p.parse("Galaatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላቲያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gof)", () => {
		expect(p.parse("Efesoona 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፈሶና 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌሶና 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፈ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gof)", () => {
		expect(p.parse("Filphisiyuusa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filphi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊልጲሲዩሳ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፍልጵስዩሳ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፍልጵ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊል 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gof)", () => {
		expect(p.parse("1 Teselonqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰሎንቀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ቴሴሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tese 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teselonqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎንቀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ቴሴሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tese 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gof)", () => {
		expect(p.parse("1Teselonqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tese 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ቴሴ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gof)", () => {
		expect(p.parse("2 Taselonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teselonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ታሰሎንቀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ቴሴሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tase 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ታሰ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Taselonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teselonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ታሰሎንቀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ቴሴሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tase 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ታሰ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gof)", () => {
		expect(p.parse("2Teselonqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tese 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ቴሴ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gof)", () => {
		expect(p.parse("1 Ximotiyoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ፂሞቲዮሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ፅሞትዮሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ximo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ፅሞ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximotiyoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ፂሞቲዮሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ፅሞትዮሳ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ፅሞ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gof)", () => {
		expect(p.parse("2 Ximotiyoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ፂሞቲዮሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ፅሞትዮሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ximo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ፅሞ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximotiyoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ፂሞቲዮሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ፅሞትዮሳ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ፅሞ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gof)", () => {
		expect(p.parse("1Ximotiyoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ximo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ፂሞ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gof)", () => {
		expect(p.parse("2Ximotiyoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ximo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ፂሞ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gof)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ትቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gof)", () => {
		expect(p.parse("Filmmoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filmoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filmo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፍልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊልሞ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፍልሞ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gof)", () => {
		expect(p.parse("Ibraawe 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibra 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ኢብራዌ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብራወ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("እብራ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ib 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ኢብ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gof)", () => {
		expect(p.parse("Yayqooba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይቆባ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yay 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gof)", () => {
		expect(p.parse("1 Phexiroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phexroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phex 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጰፅሮሳ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴፂሮሳ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጰፅ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phexiroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phexroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phex 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጰፅሮሳ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴፂሮሳ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጰፅ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gof)", () => {
		expect(p.parse("2 Phexiroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phexroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phex 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጰፅሮሳ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴፂሮሳ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጰፅ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phexiroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phexroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phex 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጰፅሮሳ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴፂሮሳ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጰፅ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gof)", () => {
		expect(p.parse("1Phexiroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phexi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴፂ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gof)", () => {
		expect(p.parse("2Phexiroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phexi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴፂ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gof)", () => {
		expect(p.parse("Yihuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዪሁዳ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዪሁ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gof)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gof)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yohaannisa - 3 Yohaannisa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yohaannisa – 3 Yohaannisa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yohaannisa — 3 Yohaannisa").osis()).toEqual("1John.1-3John.1");
	});
});
