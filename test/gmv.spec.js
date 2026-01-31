"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gmv.js";

describe("Localized book Gen (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gmv)", () => {
		expect(p.parse("Medheteththa Maxaafa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ሜቴ ማጻፋ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Medhe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ሜ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gmv)", () => {
		expect(p.parse("Kessa Maxaafa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ኬሳ ማጻፋ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kessa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ኬሳ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gmv)", () => {
		expect(p.parse("Leweta Maxaafa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌዌታ ማጻፋ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewe 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌዌ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gmv)", () => {
		expect(p.parse("Taybo Maxaafa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ታይቦ ማጻፋ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ታይ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gmv)", () => {
		expect(p.parse("Ermaasa zilas 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ኤርማሳ ዚላስ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Er Zila 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ኤር ዚላ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gmv)", () => {
		expect(p.parse("Yohannisa Ajjuuta 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮሃኒሳ ኣጁታ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ajju 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ኣጁ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gmv)", () => {
		expect(p.parse("Zaareththo Maxaafa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዛሬ ማጻፋ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Zaare 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዛሬ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gmv)", () => {
		expect(p.parse("Iyaaso Maxaafa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ኢያሶ ማጻፋ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iya 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ኢያ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gmv)", () => {
		expect(p.parse("Daannata Maxaafa 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ዳናታ ማጻፋ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Daanna 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ዳና 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gmv)", () => {
		expect(p.parse("Uruti Maxaafa 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ኡሩቲ ማጻፋ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Uru 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ኡሩ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gmv)", () => {
		expect(p.parse("Isayaasa Tinbite 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳያሳ ቲንቢቴ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gmv)", () => {
		expect(p.parse("1Sameela Maxaafa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ሳሜላ ማጻፋ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Same 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ሳሜ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gmv)", () => {
		expect(p.parse("2Sameela Maxaafa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ሳሜላ ማጻፋ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Same 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ሳሜ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gmv)", () => {
		expect(p.parse("1Kawota Maxaafa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ካዎታ ማጻፋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kawo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ካዎ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gmv)", () => {
		expect(p.parse("2Kawota Maxaafa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ካዎታ ማጻፋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kawo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ካዎ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gmv)", () => {
		expect(p.parse("1Taarike Maxaafa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ታሪኬ ማጻፋ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Taari 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ታሪ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gmv)", () => {
		expect(p.parse("2Taarike Maxaafa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ታሪኬ ማጻፋ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Taari 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ታሪ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gmv)", () => {
		expect(p.parse("Izra Maxaafa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ኢዝራ ማጻፋ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ኢዝ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gmv)", () => {
		expect(p.parse("Nahimiya Maxaafa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ናሂሚያ ማጻፋ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nahi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ናሂ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gmv)", () => {
		expect(p.parse("Asteri Maxaafa 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ኣስቴሪ ማጻፋ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("As 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ኣስ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gmv)", () => {
		expect(p.parse("Iyoobe Maxaafa 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ኢዮቤ ማጻፋ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ኢዮ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gmv)", () => {
		expect(p.parse("Mazamure Maxaafa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ዬ ማጻፋ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Maza 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ማዛ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gmv)", () => {
		expect(p.parse("Leemiso Maxaafa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ሌሚሶ ማጻፋ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Leemi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ሌሚ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gmv)", () => {
		expect(p.parse("Eranchchata Maxaafa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ኤራንቻታ ማጻፋ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Era 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ኤራ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gmv)", () => {
		expect(p.parse("Siiqo Saba 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Siiqo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ሲቆ ሳባ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ሲቆ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gmv)", () => {
		expect(p.parse("Ermaasa Tinbite 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርማሳ ቲንቢቴ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Er 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤር 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gmv)", () => {
		expect(p.parse("Hiziqeela Tinbite 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሂዚቄላ ቲንቢቴ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hizi 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሂዚ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gmv)", () => {
		expect(p.parse("Daaneela Tinbite 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳኔላ ቲንቢቴ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daane 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳኔ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gmv)", () => {
		expect(p.parse("Hose7e Tinbite 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴኤ ቲንቢቴ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gmv)", () => {
		expect(p.parse("Iyu7eele Tinbite 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩኤሌ ቲንቢቴ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gmv)", () => {
		expect(p.parse("Amoxe Tinbite 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ኣሞጼ ቲንቢቴ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ኣሞ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gmv)", () => {
		expect(p.parse("Abdiyu Tinbite 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ኣብዲዩ ቲንቢቴ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ኣብ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gmv)", () => {
		expect(p.parse("Yoonaasa Tinbite 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮናሳ ቲንቢቴ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yoona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮና 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gmv)", () => {
		expect(p.parse("Mikiyaasa Tinbite 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚኪያሳ ቲንቢቴ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miki 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚኪ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gmv)", () => {
		expect(p.parse("Nahome Tinbite 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆሜ ቲንቢቴ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naho 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gmv)", () => {
		expect(p.parse("Imbaaqo Tinbite 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ኢምባቆ ቲንቢቴ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Im 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ኢም 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gmv)", () => {
		expect(p.parse("Sofonaasa Tinbite 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎናሳ ቲንቢቴ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofo 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gmv)", () => {
		expect(p.parse("Hagge Tinbite 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሃጌ ቲንቢቴ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagge 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሃጌ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gmv)", () => {
		expect(p.parse("Zakaraasa Tinbite 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካራሳ ቲንቢቴ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gmv)", () => {
		expect(p.parse("Milkaasa Tinbite 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚልካሳ ቲንቢቴ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚል 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gmv)", () => {
		expect(p.parse("Matoosa Mishiraachcho 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶሳ ሚሺራቾ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maatosa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mato 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቶ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gmv)", () => {
		expect(p.parse("Marqoosa Mishiraachcho 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marqqossa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆሳ ሚሺራቾ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gmv)", () => {
		expect(p.parse("Luqaasa Mishiraachcho 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqaassa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃሳ ሚሺራቾ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gmv)", () => {
		expect(p.parse("1Yohannisa Kiita 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሃኒሳ ኪታ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሃ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gmv)", () => {
		expect(p.parse("2Yohannisa Kiita 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሃኒሳ ኪታ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሃ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gmv)", () => {
		expect(p.parse("3Yohannisa Kiita 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yanisa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሃኒሳ ኪታ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoha 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሃ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gmv)", () => {
		expect(p.parse("Yohannisa Mishiraachcho 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yanisa Mishiracho 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃኒሳ ሚሺራቾ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gmv)", () => {
		expect(p.parse("1 Yanisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yanisa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gmv)", () => {
		expect(p.parse("2 Yanisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yanisa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gmv)", () => {
		expect(p.parse("Kitetidayta Ootho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hawaareta Ooso 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሃዋሬታ ኦሶ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hawa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሃዋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gmv)", () => {
		expect(p.parse("Oroome Asaas 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ኦሮሜ ኣሳስ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oro 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ኦሮ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gmv)", () => {
		expect(p.parse("1 Qoronttosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Qoronttosa 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gmv)", () => {
		expect(p.parse("2 Qoronttosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Qoronttosa 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gmv)", () => {
		expect(p.parse("1Qorontoose Asaas 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆሮንቶሴ ኣሳስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qoro 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gmv)", () => {
		expect(p.parse("2Qorontoose Asaas 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆሮንቶሴ ኣሳስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qoro 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gmv)", () => {
		expect(p.parse("Qolasiyaase Asaas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qolasiyasen 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላሲያሴ ኣሳስ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qola 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gmv)", () => {
		expect(p.parse("Galatiya Asaas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gelatiyan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላቲያ ኣሳስ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gmv)", () => {
		expect(p.parse("Efesoone Asaas 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesoone 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌሶኔ ኣሳስ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gmv)", () => {
		expect(p.parse("Piliphisiyoose Asaas 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Piliphisiyosa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፒሊጲሲዮሴ ኣሳስ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pili 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፒሊ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gmv)", () => {
		expect(p.parse("1 Teslonqqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teslonqqe 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gmv)", () => {
		expect(p.parse("2 Teslonqqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teslonqqe 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gmv)", () => {
		expect(p.parse("1Tasolonqe Asaas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ታሶሎንቄ ኣሳስ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Taso 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ታሶ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gmv)", () => {
		expect(p.parse("2Tasolonqe Asaas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ታሶሎንቄ ኣሳስ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Taso 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ታሶ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gmv)", () => {
		expect(p.parse("1 Ximttoossa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximttoossa 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gmv)", () => {
		expect(p.parse("2 Ximttoossa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximttoossa 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gmv)", () => {
		expect(p.parse("1Ximtoosas 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ጺምቶሳስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ጺም 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gmv)", () => {
		expect(p.parse("2Ximtoosas 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ጺምቶሳስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ጺም 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gmv)", () => {
		expect(p.parse("Titoosas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titosas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶሳስ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gmv)", () => {
		expect(p.parse("Pillimona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilmoonas 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፒልሞናስ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፒልም 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gmv)", () => {
		expect(p.parse("Ibraawe Asaas 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ኢብራዌ ኣሳስ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibirawe 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ib 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ኢብ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gmv)", () => {
		expect(p.parse("Yaaqoobe Kiita 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaqobeppe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆቤ ኪታ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaaqo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያቆ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gmv)", () => {
		expect(p.parse("1 Phixxirosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phixxirosa 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gmv)", () => {
		expect(p.parse("2 Phixxirosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phixxirosa 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gmv)", () => {
		expect(p.parse("1Phexroosa Kiita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴጽሮሳ ኪታ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phex 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴጽ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gmv)", () => {
		expect(p.parse("2Phexroosa Kiita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴጽሮሳ ኪታ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phex 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴጽ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gmv)", () => {
		expect(p.parse("Yuhuda Kiita 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ayhude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዩሁዳ ኪታ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuhu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዩሁ 1:1").osis()).toEqual("Jude.1.1");
	});
});
