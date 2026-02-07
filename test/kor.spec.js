"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kor.js";

describe("Localized book Gen (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kor)", () => {
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("창세기 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("창세 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("창 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kor)", () => {
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("출애굽기 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("탈출기 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("탈출 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("출 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (kor)", () => {
		expect(p.parse("벨과 뱀 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("벨과 용 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Num (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kor)", () => {
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("민수기 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("민수 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("민 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kor)", () => {
		expect(p.parse("벤시라크의 지혜 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("벤시리크의 지혜 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("벤시라의 지혜 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("벤시라크 지혜 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("벤시라 지혜 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("집회서 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("집회 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kor)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("지혜서 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("지혜 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kor)", () => {
		expect(p.parse("예레미야 애가 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("예레미아애가 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("예레미야애가 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("애가 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("애 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (kor)", () => {
		expect(p.parse("예레미야의 편지 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kor)", () => {
		expect(p.parse("요한 계시록 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("요한 묵시록 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("요한계시록 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("요한묵시록 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("묵시 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("계 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (kor)", () => {
		expect(p.parse("므나쎄의 기도 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kor)", () => {
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("신명기 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("신명 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("신 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kor)", () => {
		expect(p.parse("여호수아기 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("여호수아 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("여호 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("수 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kor)", () => {
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("사사기 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("판관기 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("판관 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("삿 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kor)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("룻기 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("룻 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (kor)", () => {
		expect(p.parse("에스드라 1서 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (kor)", () => {
		expect(p.parse("에스드라 2서 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kor)", () => {
		expect(p.parse("이사야서 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("이사야 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("이사 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("사 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kor)", () => {
		expect(p.parse("사무엘기 하권 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("사무엘 하 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("사무엘기하 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("사무엘하 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2사무 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("삼하 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kor)", () => {
		expect(p.parse("사무엘기 상권 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("사무엘 상 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("사무엘기상 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("사무엘상 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1사무 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("삼상 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kor)", () => {
		expect(p.parse("열왕기 하권 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("열왕기 하 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("열왕기하 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2열왕 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("왕하 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kor)", () => {
		expect(p.parse("열왕기 상권 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("열왕기 상 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("열왕기상 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1열왕 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("왕상 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kor)", () => {
		expect(p.parse("역대기 하권 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("역대기 하 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("역대지하 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2역대 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("역대하 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("대하 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kor)", () => {
		expect(p.parse("역대기 상권 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("역대기 상 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("역대지상 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1역대 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("역대상 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("대상 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book GkEsth (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (kor)", () => {
		expect(p.parse("에스겔 추가본 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("에스텔 추가본 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kor)", () => {
		expect(p.parse("에스테르기 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("에스더기 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("에스더서 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("에스더 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("에스텔 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("에스 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("에 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Neh (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kor)", () => {
		expect(p.parse("느헤미야기 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("느헤미야서 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("느헤미아 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("느헤미야 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("느헤 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("느 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kor)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("욥기 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("욥 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kor)", () => {
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("시편 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("시 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (kor)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kor)", () => {
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("잠언 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("잠 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Acts (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kor)", () => {
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("사도행전 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("사도 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("행 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Eccl (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kor)", () => {
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("전도서 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("코헬렛 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("코헬 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("전 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (kor)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Jer (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kor)", () => {
		expect(p.parse("예레미야서 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("예레미아 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("예레미야 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("예레 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("렘 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Phlm (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kor)", () => {
		expect(p.parse("필레몬에게 보낸 서간 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("빌레몬서 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("필레몬서 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("필레 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("본 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Lev (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kor)", () => {
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("레위기 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("레위 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("레 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Ezek (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kor)", () => {
		expect(p.parse("에제키엘서 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("에스겔서 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("에제키엘 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("에스겔 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("에제 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("겔 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kor)", () => {
		expect(p.parse("다니엘서 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("다니엘 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("다니 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("단 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kor)", () => {
		expect(p.parse("호세아서 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("호세아 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("호세 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("호 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kor)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("요엘서 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("요엘 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("욜 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kor)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("아모스서 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("아모스 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("아모 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("암 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Ezra (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kor)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("에스라기 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("에즈라기 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("에스라 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("에즈라 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("에즈 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("스 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Obad (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kor)", () => {
		expect(p.parse("오바드야서 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("오바댜서 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("오바디야 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("오바댜 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("오바 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("옵 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kor)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("요나서 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("요나 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("욘 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kor)", () => {
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("미가서 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("미카서 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("미가 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("미카 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("미 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Sus (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (kor)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("수산나 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book Nah (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kor)", () => {
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("나훔서 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("나훔 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("나 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kor)", () => {
		expect(p.parse("하바쿡서 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("하박국서 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("하바꾹 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("하박국 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("하바 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("합 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kor)", () => {
		expect(p.parse("스바니야서 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("스바냐서 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("스바니야 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("스바냐 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("스바 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("습 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kor)", () => {
		expect(p.parse("하까이서 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("학개서 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("하까 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("하깨 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("학개 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("학 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kor)", () => {
		expect(p.parse("즈카르야서 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("스가랴서 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("즈가리야 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("스가랴 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("즈카 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("슥 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kor)", () => {
		expect(p.parse("말라기서 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("말라키서 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("말라기 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("말라 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("말 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Gal (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kor)", () => {
		expect(p.parse("갈라티아 신자들에게 보낸 서간 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("갈라디아서 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("갈라 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("갈 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Song (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kor)", () => {
		expect(p.parse("솔로몬의 노래 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("아가 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("아 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Matt (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kor)", () => {
		expect(p.parse("마태오 복음서 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("마태오 복음 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("마태복음서 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("마태복음 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("마태 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("마 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kor)", () => {
		expect(p.parse("마르코 복음서 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("마르코 복음 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("마가복음서 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("마가복음 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("마가 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("마르 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("막 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kor)", () => {
		expect(p.parse("루카 복음서 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("누가복음서 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("루카 복음 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("누가복음 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("누가 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("루카 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("눅 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kor)", () => {
		expect(p.parse("요한의 첫째 서간 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("요한1서 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("요한일서 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1요한 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("요일 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kor)", () => {
		expect(p.parse("요한의 둘째 서간 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("요한2서 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("요한이서 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2요한 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("요이 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kor)", () => {
		expect(p.parse("요한의 셋째 서간 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("요한3서 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("요한삼서 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3요한 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("요삼 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kor)", () => {
		expect(p.parse("요한 복음서 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("요한 복음 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("요한복음서 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("요한복음 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("요한 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("요 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kor)", () => {
		expect(p.parse("로마 신자들에게 보낸 서간 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("로마서 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("로마 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("롬 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kor)", () => {
		expect(p.parse("코린토 신자들에게 보낸 둘째 서간 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("고린도2서 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("고린도후서 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("코린토2서 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2코린 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("고후 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kor)", () => {
		expect(p.parse("코린토 신자들에게 보낸 첫째 서간 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("고린도1서 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("고린도전서 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("코린토1서 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1코린 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("고전 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Eph (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kor)", () => {
		expect(p.parse("에페소 신자들에게 보낸 서간 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("에베소서 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("에페소서 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("에페 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("엡 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kor)", () => {
		expect(p.parse("필리피 신자들에게 보낸 서간 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("빌립보서 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("필리피서 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("필리 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("빌 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kor)", () => {
		expect(p.parse("콜로새 신자들에게 보낸 서간 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("골로새서 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("콜로새서 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("콜로 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("골 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kor)", () => {
		expect(p.parse("테살로니카 신자들에게 보낸 둘째 서간 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("데살로니가2서 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("데살로니가후서 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("테살로니카2서 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2테살 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("살후 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kor)", () => {
		expect(p.parse("테살로니카 신자들에게 보낸 첫째 서간 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("데살로니가1서 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("데살로니가전서 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("테살로니카1서 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1테살 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("살전 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kor)", () => {
		expect(p.parse("티모테오에게 보낸 둘째 서간 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("티모테오2서 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("디모데2서 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("디모데후서 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2티모 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("딤후 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kor)", () => {
		expect(p.parse("티모테오에게 보낸 첫째 서간 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("티모테오1서 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("디모데1서 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("디모데전서 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1티모 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("딤전 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kor)", () => {
		expect(p.parse("티토에게 보낸 서간 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("디도서 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("티토서 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("티토 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("딛 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Heb (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kor)", () => {
		expect(p.parse("히브리인들에게 보낸 서간 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("히브리서 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("히브 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("히 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kor)", () => {
		expect(p.parse("야고보 서간 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("야고보서 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("야고 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("약 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kor)", () => {
		expect(p.parse("베드로의 둘째 서간 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("베드로2서 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("베드로후서 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2베드 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("벧후 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kor)", () => {
		expect(p.parse("베드로의 첫째 서간 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("베드로1서 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("베드로전서 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1베드 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("벧전 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kor)", () => {
		expect(p.parse("유다 서간 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("유다서 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("유다 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("유 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kor)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("토비트 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("토빗기 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("토빗 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kor)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("유딧기 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("유딧 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kor)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("바룩서 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("바룩 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 2Macc (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kor)", () => {
		expect(p.parse("마카베오기 하권 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("마카베오하 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2마카 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (kor)", () => {
		expect(p.parse("마카베오 3서 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3마카 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (kor)", () => {
		expect(p.parse("마카베오 4서 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4마카 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kor)", () => {
		expect(p.parse("마카베오기 상권 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("마카베오상 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1마카 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (kor)", () => {
		expect(p.parse("Titus 1:1 ～ 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1～2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ～ 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 ~ 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1~2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ~ 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (kor)", () => {
		expect(p.parse("Titus 1:1, 장 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 장 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (kor)", () => {
		expect(p.parse("Exod 1:1 절 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 절 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (kor)", () => {
		expect(p.parse("Exod 1:1 and 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 and 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (kor)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (kor)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (kor)", () => {
		expect(p.parse("Lev 1 (KLB)").osis_and_translations()).toEqual([["Lev.1","KLB"]]);
	});
});
describe("Parser helper should handle book ranges (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kor)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("요한의 첫째 서간 ～ 요한의 셋째 서간").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("요한의 첫째 서간 ~ 요한의 셋째 서간").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (kor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (kor)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});
