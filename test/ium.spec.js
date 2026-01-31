"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ium.js";

describe("Localized book Gen (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ium)", () => {
		expect(p.parse("ທິນ ເຕີ່ຍ ໂຕ້ວ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tin Deic Douh 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tin teig trub 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ทิน เต่ย โต้ว 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ium)", () => {
		expect(p.parse("Cuotv I^yipv 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zwrtq i-yipq 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ທສວດ ອີ​ຢິ໊ບ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ธ้วด อี​ยิบ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ium)", () => {
		expect(p.parse("le-wi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("เล​วี 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ເລ​ວີ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ium)", () => {
		expect(p.parse("saauq myenb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Saauv Mienh 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ซ้าว เมี่ยน 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ຊ້າວ ມ່ຽນ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ium)", () => {
		expect(p.parse("Naanc Zingh Nzung 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ໜ່ານ ຕສີ້ງ ດສູງ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("naang zivb Ruv 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("หน่าน ฒี่ง ฑูง 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ium)", () => {
		expect(p.parse("Laauc Yaangh 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("laaug yaavb 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("หล่าว ย่าง 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ຫລ່າວ ຢ້າງ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ium)", () => {
		expect(p.parse("Nzamc Leiz-Latc 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("หฑั่ม เล์ย-หลัด 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ດສ່ຳ ເລີ໌ຍ-ຫລັດ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ramg leib latg 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ium)", () => {
		expect(p.parse("yo-su-waa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yo^su^waa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("โย​ซู​วา 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ໂຢ​ຊູ​ວາ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ium)", () => {
		expect(p.parse("Domh Jien 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("tomb Jyen 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ต้ม เจียน 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ຕົ້ມ ຈຽນ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ium)", () => {
		expect(p.parse("lu-Te 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lu^te 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ลู​เท 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ລູ​ເທ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ium)", () => {
		expect(p.parse("i-saa-yaa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("I^saa^yaa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("อิ​สะ​ยา 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ອິ​ສະ​ຢາ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ium)", () => {
		expect(p.parse("1 saa-mu-en 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Saa^mu^en 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ซา​มู​เอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ຊາ​ມູ​ເອນ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. saa-mu-en 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saa^mu^en 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ซา​มู​เอน 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ຊາ​ມູ​ເອນ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ium)", () => {
		expect(p.parse("2 saa-mu-en 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Saa^mu^en 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ซา​มู​เอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ຊາ​ມູ​ເອນ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. saa-mu-en 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saa^mu^en 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ซา​มู​เอน 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ຊາ​ມູ​ເອນ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ium)", () => {
		expect(p.parse("1 Hungh Douh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 huvb trub 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ฮู่ง โต้ว 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ຮູ່ງ ໂຕ້ວ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hungh Douh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. huvb trub 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ฮู่ง โต้ว 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ຮູ່ງ ໂຕ້ວ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ium)", () => {
		expect(p.parse("2 Hungh Douh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 huvb trub 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ฮู่ง โต้ว 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ຮູ່ງ ໂຕ້ວ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hungh Douh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. huvb trub 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ฮู่ง โต้ว 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ຮູ່ງ ໂຕ້ວ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ium)", () => {
		expect(p.parse("1 ຕສຸ້ນ ຕ່ອຍ ໂຕ້ວ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 zunb txig trub 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Zunh Doic Douh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ฒุ่น ต่อย โต้ว 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ຕສຸ້ນ ຕ່ອຍ ໂຕ້ວ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. zunb txig trub 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Zunh Doic Douh 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ฒุ่น ต่อย โต้ว 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ium)", () => {
		expect(p.parse("2 ຕສຸ້ນ ຕ່ອຍ ໂຕ້ວ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 zunb txig trub 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Zunh Doic Douh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ฒุ่น ต่อย โต้ว 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ຕສຸ້ນ ຕ່ອຍ ໂຕ້ວ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. zunb txig trub 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Zunh Doic Douh 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ฒุ่น ต่อย โต้ว 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ium)", () => {
		expect(p.parse("e-saa-laa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("E^saa^laa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("เอ​สะ​ลา 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ເອ​ສະ​ລາ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ium)", () => {
		expect(p.parse("ne-haa-mi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne^haa^mi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("เน​หะ​มี 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ເນ​ຫະ​ມີ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ium)", () => {
		expect(p.parse("เอ​เซ​เท 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ເອ​ເຊ​ເທ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("e-se-Te 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("E^se^te 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ium)", () => {
		expect(p.parse("yopq 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yopv 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("โย้บ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ໂຢ໊ບ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ium)", () => {
		expect(p.parse("Singx Nzung 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("sivj Ruv 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ສີງ ດສູງ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("สีง ฑูง 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ium)", () => {
		expect(p.parse("Cong-Mengh Waac 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Zovb mevb waag 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ທສົງ-ເມ່ງ ຫວ່າ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ธง-เม่ง หว่า 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ium)", () => {
		expect(p.parse("Gorngv Seix Zaangc 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ກ໊ອງ ເສີຍ ຕສັ່ງ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("kxvq seij zavg 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ก๊อง เสย หฒั่ง 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ium)", () => {
		expect(p.parse("Saa^lo^morn Nyei Nzung 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ຊາ​ໂລ​ມອນ ເຍີຍ ດສູງ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("saa-lo-mxn Eei Ruv 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ซา​โล​มอน เญย ฑูง 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ium)", () => {
		expect(p.parse("ye-le-mi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ye^le^mi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("เย​เล​มี 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ເຢ​ເລ​ມີ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ium)", () => {
		expect(p.parse("e-sej-Ken 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("เอ​เส​เคน 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ເອ​ເສ​ເຄນ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("E^se^ken 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ium)", () => {
		expect(p.parse("Ndaa^ni^en 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daa-ni-en 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ดา​นี​เอน 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ດາ​ນີ​ເອນ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ium)", () => {
		expect(p.parse("ho-se-yaa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ho^se^yaa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("โฮ​เซ​ยา 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ໂຮ​ເຊ​ຢາ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ium)", () => {
		expect(p.parse("โย​เอน 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ໂຢ​ເອນ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("yo-en 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yo^en 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ium)", () => {
		expect(p.parse("aa-motq 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("อา​โม้ด 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Aamotv 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ອາ​ມົດ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ium)", () => {
		expect(p.parse("O^mbaa^ndi 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("o-Baa-Di 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("โอ​บา​ดี 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ໂອ​ບາ​ດີ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ium)", () => {
		expect(p.parse("yo-naa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yonaa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("โย​นา 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ໂຢ​ນາ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ium)", () => {
		expect(p.parse("mi-Kaa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikaa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("มี​คา 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ມີ​ຄາ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ium)", () => {
		expect(p.parse("naa-hum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naa^hum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("นา​ฮูม 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ນາ​ຮູມ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ium)", () => {
		expect(p.parse("Haa^mbaa^gukc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("haa-Baa-kukg 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ฮา​บา​กุก 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ຮາ​ບາ​ກຸກ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ium)", () => {
		expect(p.parse("sej-fan-yaa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Se^fan^yaa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("เส​ฟัน​ยา 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ເສ​ຟັນ​ຢາ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ium)", () => {
		expect(p.parse("hakq-kai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hakv^gai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ฮัก​ไก 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ຮັກ​ໄກ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ium)", () => {
		expect(p.parse("sej-Kaa-li-yaa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Se^kaa^li^yaa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("เส​คา​ลิ​ยา 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ເສ​ຄາ​ລິ​ຢາ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ium)", () => {
		expect(p.parse("maa-laa-Ki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Maa^laa^ki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("มา​ลา​คี 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ມາ​ລາ​ຄີ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ium)", () => {
		expect(p.parse("matq-Taai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matv^taai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("มัด​ทาย 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ມັດ​ທາຍ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ium)", () => {
		expect(p.parse("maa-Ko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("มา​โค 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ມາ​ໂຄ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ium)", () => {
		expect(p.parse("lu-kaa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lugaa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ลู​กา 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ລູ​ກາ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ium)", () => {
		expect(p.parse("1 yo-han 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yo^han 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 โย​ฮัน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ໂຢ​ຮັນ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. yo-han 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yo^han 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. โย​ฮัน 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ໂຢ​ຮັນ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ium)", () => {
		expect(p.parse("2 yo-han 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yo^han 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 โย​ฮัน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ໂຢ​ຮັນ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. yo-han 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yo^han 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. โย​ฮัน 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ໂຢ​ຮັນ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ium)", () => {
		expect(p.parse("3 yo-han 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yo^han 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 โย​ฮัน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ໂຢ​ຮັນ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. yo-han 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yo^han 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. โย​ฮัน 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ໂຢ​ຮັນ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ium)", () => {
		expect(p.parse("yo-han 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yo^han 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("โย​ฮัน 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ໂຢ​ຮັນ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ium)", () => {
		expect(p.parse("Gong-Zoh 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("kovb zob 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ກົງ-ໂຕສ້ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("กง-โฒ่ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ium)", () => {
		expect(p.parse("lo-maa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lomaa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("โล​มา 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ໂລ​ມາ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ium)", () => {
		expect(p.parse("1 Ko-lin-To 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko^lin^to 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 โค​ลิน​โท 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ໂຄ​ລິນ​ໂທ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko-lin-To 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko^lin^to 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. โค​ลิน​โท 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ໂຄ​ລິນ​ໂທ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ium)", () => {
		expect(p.parse("2 Ko-lin-To 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko^lin^to 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 โค​ลิน​โท 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ໂຄ​ລິນ​ໂທ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko-lin-To 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko^lin^to 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. โค​ลิน​โท 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ໂຄ​ລິນ​ໂທ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ium)", () => {
		expect(p.parse("Ko-lo-sij 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ko^lo^si 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("โค​โล​สี 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ໂຄ​ໂລ​ສີ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ium)", () => {
		expect(p.parse("Gaa^laa^tie 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("kaa-laa-Tia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("กา​ลา​เทีย 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ກາ​ລາ​ເທຍ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ium)", () => {
		expect(p.parse("เอ​เฟ​โซ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ເອ​ເຟ​ໂຊ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("e-fe-so 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("E^fe^so 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ium)", () => {
		expect(p.parse("fi-lipq-Pxi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fi^lipv^poi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ฟี​ลิบ​พอย 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ຟີ​ລິບ​ພອຍ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ium)", () => {
		expect(p.parse("1 Te-saa-lo-ni-kaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te^saa^lo^ni^gaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 เท​สะ​โล​นิ​กา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ເທ​ສະ​ໂລ​ນິ​ກາ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te-saa-lo-ni-kaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te^saa^lo^ni^gaa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. เท​สะ​โล​นิ​กา 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ເທ​ສະ​ໂລ​ນິ​ກາ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ium)", () => {
		expect(p.parse("2 Te-saa-lo-ni-kaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te^saa^lo^ni^gaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 เท​สะ​โล​นิ​กา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ເທ​ສະ​ໂລ​ນິ​ກາ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te-saa-lo-ni-kaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te^saa^lo^ni^gaa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. เท​สะ​โล​นิ​กา 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ເທ​ສະ​ໂລ​ນິ​ກາ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ium)", () => {
		expect(p.parse("1 Ti-mo-Tai 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti^mo^tai 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ทิ​โม​ไท 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ທິ​ໂມ​ໄທ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti-mo-Tai 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti^mo^tai 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ทิ​โม​ไท 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ທິ​ໂມ​ໄທ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ium)", () => {
		expect(p.parse("2 Ti-mo-Tai 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti^mo^tai 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ทิ​โม​ไท 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ທິ​ໂມ​ໄທ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti-mo-Tai 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti^mo^tai 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ทิ​โม​ไท 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ທິ​ໂມ​ໄທ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ium)", () => {
		expect(p.parse("Ti-tatg 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tidatc 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ทิ​ตัด 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ທິ​ຕັດ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ium)", () => {
		expect(p.parse("fi-le-mon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi^le^mon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ฟี​เล​โมน 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ຟີ​ເລ​ມົນ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ium)", () => {
		expect(p.parse("hipq-lu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hipv^lu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ฮิบ​ลู 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ຮິບ​ລູ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ium)", () => {
		expect(p.parse("yaa-kxpg 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaagorpc 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ยา​กอบ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ຢາ​ກອບ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ium)", () => {
		expect(p.parse("1 pi-te 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ปี​เต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ປີ​ເຕ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bide 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. pi-te 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ปี​เต 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ປີ​ເຕ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bide 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ium)", () => {
		expect(p.parse("2 pi-te 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ปี​เต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ປີ​ເຕ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bide 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. pi-te 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ปี​เต 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ປີ​ເຕ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bide 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ium)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ium)", () => {
		expect(p.parse("Yiu^ndaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("yiu-Daa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ยิว​ดา 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ຢິວ​ດາ 1:1").osis()).toEqual("Jude.1.1");
	});
});
