"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/guj.js";

describe("Localized book Gen (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (guj)", () => {
		expect(p.parse("ઉત્પત્તિ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ઉત્પ. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ઉત્પ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ઉત. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (guj)", () => {
		expect(p.parse("નિર્ગમન 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("નિર્ગ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("નિ. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (guj)", () => {
		expect(p.parse("લેવી. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("લેવીય 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("લેવી 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("લે. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (guj)", () => {
		expect(p.parse("ગણના 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ગણ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (guj)", () => {
		expect(p.parse("યર્મિયાનો વિલાપ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ય.ર્વિ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ય.વિ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("વિલા. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (guj)", () => {
		expect(p.parse("પ્રકટીકરણ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("સંદર્શન 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("પ્રક. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("સંદ. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (guj)", () => {
		expect(p.parse("પુનર્નિયમ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("પુન. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (guj)", () => {
		expect(p.parse("યહોશુઆ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("યહો. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (guj)", () => {
		expect(p.parse("ન્યાયાધીશો 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ન્યાયા. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ન્યાય. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ન્યા. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (guj)", () => {
		expect(p.parse("રૂથ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("રૂથ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (guj)", () => {
		expect(p.parse("યશાયા 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("યશા. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (guj)", () => {
		expect(p.parse("1 શમુએલનું 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 શમુએલ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 શમુ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. શમુએલનું 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. શમુએલ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. શમુ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("૧ શમુએલનું 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("૧ શમુએલ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("૧ શમુ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("૧. શમુએલનું 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("૧. શમુએલ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("૧. શમુ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (guj)", () => {
		expect(p.parse("2 શમુએલનું 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 શમુએલ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 શમુ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. શમુએલનું 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. શમુએલ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. શમુ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("૨ શમુએલનું 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("૨ શમુએલ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("૨ શમુ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("૨. શમુએલનું 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("૨. શમુએલ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("૨. શમુ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (guj)", () => {
		expect(p.parse("1 રાજાઓનું 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 રાજા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 રાજાઓ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 રાજા 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 રા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. રાજાઓનું 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. રાજા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. રાજાઓ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. રાજા 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. રા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧ રાજાઓનું 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧ રાજા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧ રાજાઓ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧ રાજા 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧ રા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧. રાજાઓનું 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧. રાજા. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧. રાજાઓ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧. રાજા 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("૧. રા. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (guj)", () => {
		expect(p.parse("2 રાજાઓનું 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 રાજા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 રાજાઓ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 રાજા 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 રા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. રાજાઓનું 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. રાજા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. રાજાઓ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. રાજા 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. રા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨ રાજાઓનું 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨ રાજા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨ રાજાઓ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨ રાજા 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨ રા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨. રાજાઓનું 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨. રાજા. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨. રાજાઓ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨. રાજા 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("૨. રા. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (guj)", () => {
		expect(p.parse("1 કાળવૃત્તાંતનું 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 કાળવૃત્તાંત 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 કાળ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. કાળવૃત્તાંતનું 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. કાળવૃત્તાંત 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. કાળ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("૧ કાળવૃત્તાંતનું 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("૧ કાળવૃત્તાંત 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("૧ કાળ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("૧. કાળવૃત્તાંતનું 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("૧. કાળવૃત્તાંત 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("૧. કાળ. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (guj)", () => {
		expect(p.parse("2 કાળવૃત્તાંતનું 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 કાળવૃત્તાંત 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 કાળ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. કાળવૃત્તાંતનું 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. કાળવૃત્તાંત 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. કાળ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("૨ કાળવૃત્તાંતનું 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("૨ કાળવૃત્તાંત 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("૨ કાળ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("૨. કાળવૃત્તાંતનું 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("૨. કાળવૃત્તાંત 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("૨. કાળ. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (guj)", () => {
		expect(p.parse("એઝરા 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("એઝ. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (guj)", () => {
		expect(p.parse("નહેમ્યા 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("નહે. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (guj)", () => {
		expect(p.parse("એસ્તેર 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("એસ્ત. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("એસ્. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (guj)", () => {
		expect(p.parse("અયૂ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("અયૂબ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("યોબ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("યોબ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (guj)", () => {
		expect(p.parse("ગીતશાસ્‍ત્ર 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ગીતશાસ્ત્ર 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ગી.શા. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (guj)", () => {
		expect(p.parse("સુભાષિતસંગ્રહ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("નીતિવચનો 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("નીતિ. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("સુભા. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (guj)", () => {
		expect(p.parse("સભાશિક્ષક 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("સભા. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (guj)", () => {
		expect(p.parse("ગીતોનું ગીત 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ગી.ગી. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ગીત. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (guj)", () => {
		expect(p.parse("યર્મિયા 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("યર્મિ. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (guj)", () => {
		expect(p.parse("હઝકિયેલ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("હઝ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (guj)", () => {
		expect(p.parse("દાનિયેલ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("દાનિ. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("દા. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (guj)", () => {
		expect(p.parse("હોશિયા 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("હોશિ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("હોશ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("હો. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (guj)", () => {
		expect(p.parse("યોએ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("યોએલ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (guj)", () => {
		expect(p.parse("આમો. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("આમોસ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("આમ. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (guj)", () => {
		expect(p.parse("ઓબાદ્યા 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ઓબા. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ઓબ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (guj)", () => {
		expect(p.parse("યૂન. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("યૂના 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("યોના 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (guj)", () => {
		expect(p.parse("મિખાહ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("મીખા. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("મીખાહ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("મિખા 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("મીખ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("મિ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("મી. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (guj)", () => {
		expect(p.parse("નાહૂ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("નાહૂમ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("નાહ. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (guj)", () => {
		expect(p.parse("હબાક્કુક 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("હબાકુક 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("હબા. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("હબ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (guj)", () => {
		expect(p.parse("સફાન્યા 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("સફા. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (guj)", () => {
		expect(p.parse("હાગ્ગાય 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("હાગ. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (guj)", () => {
		expect(p.parse("ઝખાર્યા 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ઝખા. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ઝખ. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (guj)", () => {
		expect(p.parse("માલાખી 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("માલા. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("માલ. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (guj)", () => {
		expect(p.parse("માથ્થી 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("માથ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (guj)", () => {
		expect(p.parse("માર્ક. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("માર્ક 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (guj)", () => {
		expect(p.parse("લૂક. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લૂ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("લૂક 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (guj)", () => {
		expect(p.parse("યોહાનનો પહેલો પત્ર 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (guj)", () => {
		expect(p.parse("યોહાનનો બીજો પત્ર 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (guj)", () => {
		expect(p.parse("યોહાનનો ત્રીજો પત્ર 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("૩ યોહા. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહાન 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 યોહ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("૩ યોહ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (guj)", () => {
		expect(p.parse("1 યોહા. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 યોહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહા. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. યોહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("૧ યોહા. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("૧ યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("૧ યોહ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("૧. યોહા. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("૧. યોહાન 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("૧. યોહ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (guj)", () => {
		expect(p.parse("2 યોહા. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 યોહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહા. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. યોહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("૨ યોહા. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("૨ યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("૨ યોહ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("૨. યોહા. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("૨. યોહાન 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("૨. યોહ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (guj)", () => {
		expect(p.parse("યોહા. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહાન 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("યોહ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (guj)", () => {
		expect(p.parse("પ્રેરિતોનાં કૃત્યો 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રેષિતોનાં કાર્યો 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રે.કા. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("પ્રે.કૃ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (guj)", () => {
		expect(p.parse("રોમનોને પત્ર 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમનો 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("રોમ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (guj)", () => {
		expect(p.parse("1 કરિંથીઓ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કોરીં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 કરિં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિંથીઓ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કોરીં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. કરિં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("૧ કરિંથીઓ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("૧ કોરીં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("૧ કરિં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("૧. કરિંથીઓ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("૧. કોરીં. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("૧. કરિં. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (guj)", () => {
		expect(p.parse("2 કરિંથીઓ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કોરીં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 કરિં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિંથીઓ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કોરીં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. કરિં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("૨ કરિંથીઓ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("૨ કોરીં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("૨ કરિં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("૨. કરિંથીઓ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("૨. કોરીં. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("૨. કરિં. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (guj)", () => {
		expect(p.parse("કોરીંથીઓને પહેલો પત્ર 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("કરિંથીઓને પહેલો પત્ર 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (guj)", () => {
		expect(p.parse("કોરીંથીઓને બીજો પત્ર 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("કરિંથીઓને બીજો પત્ર 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (guj)", () => {
		expect(p.parse("કોલોસીઓને પત્ર 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલોસીઓને પત્ર 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલોસ્સીઓ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("કલો. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (guj)", () => {
		expect(p.parse("ગલાતીઓને પત્ર 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલાતીઓ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલા. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ગલ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (guj)", () => {
		expect(p.parse("એફેસીઓને પત્ર 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફેસીઓ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("એફે. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (guj)", () => {
		expect(p.parse("ફિલિપીઓને પત્ર 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલિપ્પીઓ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ફિલિ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (guj)", () => {
		expect(p.parse("1 થેસ્સલોનિકીઓ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસ્. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 થેસ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્સલોનિકીઓ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ્. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. થેસ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("૧ થેસ્સલોનિકીઓ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("૧ થેસ્. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("૧ થેસ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("૧. થેસ્સલોનિકીઓ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("૧. થેસ્. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("૧. થેસ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (guj)", () => {
		expect(p.parse("2 થેસ્સલોનિકીઓ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસ્. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 થેસ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્સલોનિકીઓ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ્. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. થેસ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("૨ થેસ્સલોનિકીઓ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("૨ થેસ્. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("૨ થેસ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("૨. થેસ્સલોનિકીઓ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("૨. થેસ્. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("૨. થેસ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (guj)", () => {
		expect(p.parse("થેસ્સાલોનિકિઓને પહેલો પત્ર 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("થેસ્સાલોનિકીઓને પહેલો પત્ર 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (guj)", () => {
		expect(p.parse("થેસ્સાલોનિકિઓને બીજો પત્ર 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("થેસ્સાલોનિકીઓને બીજો પત્ર 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (guj)", () => {
		expect(p.parse("1 તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમો. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 તિમ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમો. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. તિમ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("૧ તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("૧ તિમો. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("૧ તિમ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("૧. તિમોથી 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("૧. તિમો. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("૧. તિમ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (guj)", () => {
		expect(p.parse("2 તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમો. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 તિમ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમો. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. તિમ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("૨ તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("૨ તિમો. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("૨ તિમ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("૨. તિમોથી 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("૨. તિમો. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("૨. તિમ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (guj)", () => {
		expect(p.parse("તિમોથીને પહેલો પત્ર 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (guj)", () => {
		expect(p.parse("તિમોથીને બીજો પત્ર 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (guj)", () => {
		expect(p.parse("તિતસને પત્ર 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("તિત. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("તિતસ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (guj)", () => {
		expect(p.parse("ફિલેમોનને પાઉલ પ્રેરિતનો પત્ર 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલેમોનને પત્ર 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલેમોન 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ફિલે. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (guj)", () => {
		expect(p.parse("હિબ્રૂઓને પત્ર 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ્રૂ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ્રૂઓ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("હિબ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (guj)", () => {
		expect(p.parse("યાકૂબનો પત્ર 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકોબનો પત્ર 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકૂ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકૂબ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("યાકો. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (guj)", () => {
		expect(p.parse("1 પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 પિતર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. પિતર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("૧ પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("૧ પિતર 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("૧. પિત. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("૧. પિતર 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (guj)", () => {
		expect(p.parse("2 પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 પિતર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. પિતર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("૨ પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("૨ પિતર 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("૨. પિત. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("૨. પિતર 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (guj)", () => {
		expect(p.parse("પિતરનો પહેલો પત્ર 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (guj)", () => {
		expect(p.parse("પિતરનો બીજો પત્ર 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (guj)", () => {
		expect(p.parse("યહૂદાનો પત્ર 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહુદા 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહુ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("યહૂ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (guj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (guj)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("યોહાનનો પહેલો પત્ર - યોહાનનો ત્રીજો પત્ર").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("યોહાનનો પહેલો પત્ર – યોહાનનો ત્રીજો પત્ર").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("યોહાનનો પહેલો પત્ર — યોહાનનો ત્રીજો પત્ર").osis()).toEqual("1John.1-3John.1");
	});
});
