"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tyz.js";

describe("Localized book Gen (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tyz)", () => {
		expect(p.parse("Tặt Có Bôn Đin 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tặt 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Lev (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tyz)", () => {
		expect(p.parse("Lê-vi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lê 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tyz)", () => {
		expect(p.parse("Dân Slố 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Dân 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tyz)", () => {
		expect(p.parse("Bài Sli Slương Slép 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Slương 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tyz)", () => {
		expect(p.parse("Khay Oóc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khay 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Exod (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tyz)", () => {
		expect(p.parse("Oóc Khói Ai Cập 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Oóc 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Deut (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tyz)", () => {
		expect(p.parse("Chuyền Te̱o Lệ Lài 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Chuyền 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tyz)", () => {
		expect(p.parse("Dô-xuê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Dôx 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tyz)", () => {
		expect(p.parse("Bại Quan Xét 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Quan 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tyz)", () => {
		expect(p.parse("Ru-tơ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tyz)", () => {
		expect(p.parse("Ê-xai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Êxai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tyz)", () => {
		expect(p.parse("I Xa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Xam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Xa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Xam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tyz)", () => {
		expect(p.parse("II Xa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Xam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Xa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Xam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tyz)", () => {
		expect(p.parse("I Bại Vuồng 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Vuồng 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Bại Vuồng 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Vuồng 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tyz)", () => {
		expect(p.parse("II Bại Vuồng 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Vuồng 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Bại Vuồng 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Vuồng 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tyz)", () => {
		expect(p.parse("I Lịch Xử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Xử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Lịch Xử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Xử 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tyz)", () => {
		expect(p.parse("II Lịch Xử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Xử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Lịch Xử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Xử 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tyz)", () => {
		expect(p.parse("E-xơ-ra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Exra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tyz)", () => {
		expect(p.parse("Nê-hê-mi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nê 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tyz)", () => {
		expect(p.parse("Ê-xơ-tê 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Êxtê 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tyz)", () => {
		expect(p.parse("Dóp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tyz)", () => {
		expect(p.parse("Sli Then 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sli 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tyz)", () => {
		expect(p.parse("Cằm Slắng Slon 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Cằm 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tyz)", () => {
		expect(p.parse("Tạy Đạo 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Tạy 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tyz)", () => {
		expect(p.parse("Bài Co 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Bài 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tyz)", () => {
		expect(p.parse("Dê-rê-mi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Dê 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tyz)", () => {
		expect(p.parse("Ê-xê-chi-ên 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Êxê 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tyz)", () => {
		expect(p.parse("Đa-ni-ên 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đa 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tyz)", () => {
		expect(p.parse("Ô-xê 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ôxê 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tyz)", () => {
		expect(p.parse("Dô-ên 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Dôên 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tyz)", () => {
		expect(p.parse("A-mốt 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amốt 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tyz)", () => {
		expect(p.parse("Áp-đia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ápđia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tyz)", () => {
		expect(p.parse("Dô-na 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Dôna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tyz)", () => {
		expect(p.parse("Mi-chê 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tyz)", () => {
		expect(p.parse("Na-hum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tyz)", () => {
		expect(p.parse("Ha-ba-cúc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tyz)", () => {
		expect(p.parse("Xô-phô-ni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xô 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tyz)", () => {
		expect(p.parse("A-ngê 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Angê 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tyz)", () => {
		expect(p.parse("Xa-cha-ri 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xa 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tyz)", () => {
		expect(p.parse("Ma-la-chi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tyz)", () => {
		expect(p.parse("Ma-thi-ơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tyz)", () => {
		expect(p.parse("Mác 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tyz)", () => {
		expect(p.parse("Lu-ca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tyz)", () => {
		expect(p.parse("I Dăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Dăng 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tyz)", () => {
		expect(p.parse("II Dăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Dăng 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tyz)", () => {
		expect(p.parse("III Dăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Dăng 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tyz)", () => {
		expect(p.parse("Dăng 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tyz)", () => {
		expect(p.parse("Công Viêc 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Công 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tyz)", () => {
		expect(p.parse("Rô-ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rô 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tyz)", () => {
		expect(p.parse("I Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tyz)", () => {
		expect(p.parse("II Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tyz)", () => {
		expect(p.parse("Cô-lô-xe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Côl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tyz)", () => {
		expect(p.parse("Nga-la-ti 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tyz)", () => {
		expect(p.parse("Ê-phê-xô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tyz)", () => {
		expect(p.parse("Phi-líp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tyz)", () => {
		expect(p.parse("I Tê-xa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê-xa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tyz)", () => {
		expect(p.parse("II Tê-xa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê-xa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tyz)", () => {
		expect(p.parse("I Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tyz)", () => {
		expect(p.parse("II Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tyz)", () => {
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tyz)", () => {
		expect(p.parse("Phi-lê-môn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tyz)", () => {
		expect(p.parse("Hê-bơ-rơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hê 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tyz)", () => {
		expect(p.parse("Da-cơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tyz)", () => {
		expect(p.parse("I Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tyz)", () => {
		expect(p.parse("II Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tyz)", () => {
		expect(p.parse("Du-đe 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Du 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (tyz)", () => {
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle verses (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (tyz)", () => {
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (tyz)", () => {
		expect(p.parse("Phlm 2 & 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle book ranges (tyz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tyz)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Dăng - III Dăng").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Dăng – III Dăng").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Dăng — III Dăng").osis()).toEqual("1John.1-3John.1");
	});
});
