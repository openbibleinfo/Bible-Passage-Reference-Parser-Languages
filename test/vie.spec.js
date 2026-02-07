"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vie.js";

describe("Localized book Gen (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (vie)", () => {
		expect(p.parse("Sáng thế ký 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sáng Thế 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sáng 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (vie)", () => {
		expect(p.parse("Xuất Ê-díp-tô ký 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Xuất Ai Cập Ký 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Xuất Ai-cập 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Xuất Hành 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Xuất 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (vie)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Phlm (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vie)", () => {
		expect(p.parse("Phi-lê-môn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philêmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phi-lê 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Lev (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (vie)", () => {
		expect(p.parse("Lê-vi ký 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lê Vi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lê-vi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lê 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (vie)", () => {
		expect(p.parse("Dân số ký 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Dân Số 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Dân 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (vie)", () => {
		expect(p.parse("Huấn Ca 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (vie)", () => {
		expect(p.parse("Khôn Ngoan 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (vie)", () => {
		expect(p.parse("Ca thương 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ai Ca 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ai 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (vie)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vie)", () => {
		expect(p.parse("Khải Huyền của John 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khải Huyền 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khải thị 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khải 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (vie)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (vie)", () => {
		expect(p.parse("Phục truyền luật lệ ký 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Phục Truyền Luật Lệ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Phục Truyền 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Đệ nhị luật 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Phục 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Joel (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (vie)", () => {
		expect(p.parse("Giô-ên 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Jonah (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (vie)", () => {
		expect(p.parse("Giô-na 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Nah (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (vie)", () => {
		expect(p.parse("Na-hum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na-hâm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Josh (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (vie)", () => {
		expect(p.parse("Giô-sua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Giô-suê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Giôs 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Gsua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Gsuê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Giô 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (vie)", () => {
		expect(p.parse("Các Thủ lãnh 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Các quan xét 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thẩm phán 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thủ lãnh 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Quan án 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Quan 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thủ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (vie)", () => {
		expect(p.parse("Ru-tơ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (vie)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (vie)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (vie)", () => {
		expect(p.parse("I-sa-gia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("I-sai-a 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ê-sai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("I-sa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (vie)", () => {
		expect(p.parse("I Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (vie)", () => {
		expect(p.parse("II Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (vie)", () => {
		expect(p.parse("II Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (vie)", () => {
		expect(p.parse("I Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (vie)", () => {
		expect(p.parse("I Các Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Các Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Các Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Các Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Vua 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (vie)", () => {
		expect(p.parse("II Các Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Các Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Các Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Các Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Vua 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (vie)", () => {
		expect(p.parse("II Các Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Vua 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (vie)", () => {
		expect(p.parse("I Các Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Vua 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (vie)", () => {
		expect(p.parse("I Sử biên niên 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Lịch sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Sử ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Sử biên niên 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Lịch sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Sử ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Sử biên niên 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Lịch sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Sử ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sử biên niên 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Lịch sử 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sử ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sử 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (vie)", () => {
		expect(p.parse("II Sử biên niên 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Lịch sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Sử ký 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Sử biên niên 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Lịch sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Sử ký 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Sử biên niên 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Lịch sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Sử ký 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sử biên niên 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Lịch sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sử ký 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sử 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (vie)", () => {
		expect(p.parse("I Sử Ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Sử Ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Sử Ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sử Ký 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (vie)", () => {
		expect(p.parse("Sử Ký 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (vie)", () => {
		expect(p.parse("II Sử ký 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Sử 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (vie)", () => {
		expect(p.parse("I Sử ký 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Sử 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (vie)", () => {
		expect(p.parse("E-xơ-ra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ê-xơ-ra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Étra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Êxra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Êxr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (vie)", () => {
		expect(p.parse("Nê-hê-mi-a 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nê-hê-mi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nơkhemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nê 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (vie)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (vie)", () => {
		expect(p.parse("Ê-xơ-tê 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (vie)", () => {
		expect(p.parse("Gióp 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Rom (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vie)", () => {
		expect(p.parse("La-mã 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rô-ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rôma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book Mal (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (vie)", () => {
		expect(p.parse("Ma-la-chi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ma-la-ki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vie)", () => {
		expect(p.parse("Ma-thi-ơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mátthêu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ma 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Ps (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (vie)", () => {
		expect(p.parse("Thánh vịnh 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Thi Thiên 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Thánh Thi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Thi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (vie)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (vie)", () => {
		expect(p.parse("Châm ngôn 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Châm 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (vie)", () => {
		expect(p.parse("Truyền đạo 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Giáo huấn 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Giảng Sư 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Giáo 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (vie)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (vie)", () => {
		expect(p.parse("Diễm ca 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Tình ca 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nhã ca 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Tình 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (vie)", () => {
		expect(p.parse("Giê-rê-mi-a 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Giê-rê-mi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Giê 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (vie)", () => {
		expect(p.parse("Ê-xê-chi-ên 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ê-xê-chiên 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ê-xê-ki-ên 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ê-xê 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (vie)", () => {
		expect(p.parse("Ða-ni-ên 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đa-ni-ên 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đa-niên 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đanien 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đa 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (vie)", () => {
		expect(p.parse("Hô-sê-a 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ô-sê 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Amos (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (vie)", () => {
		expect(p.parse("A-mốt 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (vie)", () => {
		expect(p.parse("Ô-ba-đi-a 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Áp-đia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Áp 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Mic (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (vie)", () => {
		expect(p.parse("Mi-chê 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi-ca 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Hag (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (vie)", () => {
		expect(p.parse("Ha-gai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("A-gai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("A-ghê 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Hab (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (vie)", () => {
		expect(p.parse("Ha-ba-cúc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (vie)", () => {
		expect(p.parse("Sô-phô-ni-a 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xê-pha-ni-a 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sô-phô-ni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xô-phô-ni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Xô 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Zech (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (vie)", () => {
		expect(p.parse("Xa-cha-ri-a 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xê-ca-ri-a 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xa-cha-ri 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xa 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mark (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vie)", () => {
		expect(p.parse("Máccô 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mác 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vie)", () => {
		expect(p.parse("Lu-ca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vie)", () => {
		expect(p.parse("I Giăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Gi 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vie)", () => {
		expect(p.parse("II Giăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Gi 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vie)", () => {
		expect(p.parse("III Giăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Gi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vie)", () => {
		expect(p.parse("I Gioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Giăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Gi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Gioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Giăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Gi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Gioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Giăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Gi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Gioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Giăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Gi 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vie)", () => {
		expect(p.parse("II Gioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Giăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Gi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Gioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Giăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Gi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Gioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Giăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Gi 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Gioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Giăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Gi 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vie)", () => {
		expect(p.parse("III Gioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Giăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Gi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Gioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Giăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Gi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Gioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Giăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Gi 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Gioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Giăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Gi 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vie)", () => {
		expect(p.parse("Gioan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Giăng 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Gi 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vie)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Gg 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vie)", () => {
		expect(p.parse("Công vụ các Sứ đồ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Công vụ Tông đồ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Công Vụ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sứ đồ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Công 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Cor (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vie)", () => {
		expect(p.parse("I Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cô-rinh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Côrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô-rinh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Côrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cô-rinh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Côrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cô-rinh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Côrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vie)", () => {
		expect(p.parse("II Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cô-rinh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Côrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô-rinh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Côrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cô-rinh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Côrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cô-rinh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Côrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vie)", () => {
		expect(p.parse("II Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vie)", () => {
		expect(p.parse("I Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vie)", () => {
		expect(p.parse("Ga-la-ti 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galát 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vie)", () => {
		expect(p.parse("Ê-phê-sô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êphêsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vie)", () => {
		expect(p.parse("Philípphê 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi-líp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vie)", () => {
		expect(p.parse("Cô-lô-se 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Côlôxê 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Côl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vie)", () => {
		expect(p.parse("I Thê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thêxalônica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thêxalônica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thêxalônica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thêxalônica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tê 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vie)", () => {
		expect(p.parse("II Thê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thêxalônica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thêxalônica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thêxalônica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thêxalônica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tê 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vie)", () => {
		expect(p.parse("II Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tê 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vie)", () => {
		expect(p.parse("I Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tê 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vie)", () => {
		expect(p.parse("I Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vie)", () => {
		expect(p.parse("II Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vie)", () => {
		expect(p.parse("II Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vie)", () => {
		expect(p.parse("I Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vie)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titô 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tích 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Heb (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vie)", () => {
		expect(p.parse("Hê-bơ-rơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Do Thái 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hê 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vie)", () => {
		expect(p.parse("Giacôbê 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Gia-cơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vie)", () => {
		expect(p.parse("I Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phia-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phi-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phê-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phêrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phia 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phia-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phi-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phê-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phêrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phia 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phia-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phi-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phê-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phêrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Phia 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phia-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phi-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phê-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phêrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phia 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vie)", () => {
		expect(p.parse("II Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phia-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phi-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phê-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phêrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phia 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phia-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phi-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phê-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phêrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phia 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phia-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phi-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phê-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phêrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Phia 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phia-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phi-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phê-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phêrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phia 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vie)", () => {
		expect(p.parse("II Phi-e-rơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Phia 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vie)", () => {
		expect(p.parse("I Phi-e-rơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Phia 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vie)", () => {
		expect(p.parse("Giu-đe 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Giuđa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (vie)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (vie)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (vie)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (vie)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (vie)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (vie)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (vie)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (vie)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (vie)", () => {
		expect(p.parse("Titus 1:1 to 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1to2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 to 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (vie)", () => {
		expect(p.parse("Titus 1:1, chương 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 chương 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (vie)", () => {
		expect(p.parse("Exod 1:1 verse 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (vie)", () => {
		expect(p.parse("Exod 1:1 và 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 và 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (vie)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (vie)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (vie)", () => {
		expect(p.parse("Lev 1 (ERV)").osis_and_translations()).toEqual([["Lev.1","ERV"]]);
		expect(p.parse("Lev 1 (1934)").osis_and_translations()).toEqual([["Lev.1","1934"]]);
	});
});
describe("Parser helper should handle book ranges (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (vie)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Giăng to III Giăng").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (vie)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (vie)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});
