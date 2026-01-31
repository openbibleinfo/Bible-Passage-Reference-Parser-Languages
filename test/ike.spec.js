"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ike.js";

describe("Localized book Gen (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ike)", () => {
		expect(p.parse("ᒨᓯᓯ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ike)", () => {
		expect(p.parse("ᒨᓯᓯ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ike)", () => {
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ᒨᓯᓯ ᐱᖓᔪᖏᑦ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ike)", () => {
		expect(p.parse("ᒨᓯᓯ ᓯᑕᒪᖏᑦ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numbers 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ike)", () => {
		expect(p.parse("Jeremiab Ogguarutigijangit 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ᔨᕆᒤᐊᐅᑉ ᐅᒡᒍᐊᕐᓂᖏᑦ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ᐅᒡᒍᐊᕐᓃᑦ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ike)", () => {
		expect(p.parse("Takotitaunermik 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ᔪᐊᓇᓯᐅᑉ ᑕᑯᑎᑕᐅᓂᖏᑦ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Takot. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ᑕᑯᑎ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ike)", () => {
		expect(p.parse("Deuteronomy 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ᒨᓯᓯ ᑕᓪᓕᒪᖏᑦ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ike)", () => {
		expect(p.parse("ᔮᓱᐊᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ᔮᓱᐊ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ike)", () => {
		expect(p.parse("ᐃᓗᐊᕐᓮᔩᑦ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Idluarsaijut 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ᐃᓗᐊᕐᓮᔩᑦ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Idl. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ike)", () => {
		expect(p.parse("ᕉᑎᐅᑉ ᐅᓂᒃᑲᐅᓯᓂᖓ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ᕉᑎᐅᑉ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ike)", () => {
		expect(p.parse("ᐂᓮᐊᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaiase 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ᐂᓮᐊᓯ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ike)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ike)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ike)", () => {
		expect(p.parse("ᓴᒧᐃᓕ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ike)", () => {
		expect(p.parse("ᓴᒧᐃᓕ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ike)", () => {
		expect(p.parse("1 Atannit 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Atan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Atannit 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Atan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Atannit 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Atan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Atannit 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Atan. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ike)", () => {
		expect(p.parse("2 Atannit 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Atan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Atannit 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Atan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Atannit 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Atan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Atannit 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Atan. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ike)", () => {
		expect(p.parse("ᐊᑕᓃᑦ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ike)", () => {
		expect(p.parse("ᐊᑕᓃᑦ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ike)", () => {
		expect(p.parse("1 Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronika 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ike)", () => {
		expect(p.parse("2 Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronika 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ike)", () => {
		expect(p.parse("ᑯᕉᓂᑲ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ike)", () => {
		expect(p.parse("ᑯᕉᓂᑲ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ike)", () => {
		expect(p.parse("ᐄᓱᕋᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ᐄᓱᕋ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ike)", () => {
		expect(p.parse("ᓂᕼᐃᒤᐊᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ᓂᕼᐃᒤᐊ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ike)", () => {
		expect(p.parse("ᐃᔅᑕᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ᐃᔅᑕᕐ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ike)", () => {
		expect(p.parse("ᔫᐱᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hiobe. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hiobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ᔫᐱ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ike)", () => {
		expect(p.parse("Imgerut 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ᐃᓐᖏᕈᑎᑦ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ᐃᓐᖏᕈᑦ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Img. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ike)", () => {
		expect(p.parse("ᓲᓗᒨᓂᐅᑉ ᐅᖃᓪᓚᖕᓂᖏᑦ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Salomob Okâl 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sal. oᴋâl. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ᓲᓗᒨᓂ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ike)", () => {
		expect(p.parse("ᐃᓕᓯᒪᓃᑦ ᐃᒃᓖᓯᐊᓯᑏᔅ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Okaluktok 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ᐃᒃᓕᓯᐊᔅᑏᔅ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ike)", () => {
		expect(p.parse("ᓲᓗᒨᓂᐅᑉ ᐃᓐᖏᕈᓯᖏᑦ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Imgerusersoak 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ᐃᓐᖏᕈᓰᑦ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ike)", () => {
		expect(p.parse("ᔨᕆᒤᐊᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ᔨᕆᒤᐊ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ike)", () => {
		expect(p.parse("ᐃᓯᑭᐊᓕᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hesekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ᐃᓯᑭᐊᓕ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hes. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ike)", () => {
		expect(p.parse("ᑖᓂᐊᓕᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ᑖᓂᐊᓕ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ike)", () => {
		expect(p.parse("ᕼᐆᓯᐊᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ᕼᐆᓯᐊ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ike)", () => {
		expect(p.parse("ᔪᐃᓕᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ᔪᐃᓕ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ike)", () => {
		expect(p.parse("ᐂᒨᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ᐂᒨᓯ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ike)", () => {
		expect(p.parse("ᐅᐸᑍᐊᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ᐅᐸᑍᐊ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ike)", () => {
		expect(p.parse("ᔫᓇᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ᔫᓇ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ike)", () => {
		expect(p.parse("ᒤᑲᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Migga 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ᒤᑲ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ike)", () => {
		expect(p.parse("ᓇᕼᐅᒥᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ᓇᕼᐅᒥ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ike)", () => {
		expect(p.parse("ᕼᐊᐸᑲᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakûb 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ᕼᐊᐸᑲ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ike)", () => {
		expect(p.parse("ᔨᐸᓁᐊᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ᔨᐸᓁᐊ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ike)", () => {
		expect(p.parse("ᕼᐊᒊᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ᕼᐊᒊ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ike)", () => {
		expect(p.parse("ᓴᑲᕅᐊᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saggaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sagg. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ᓴᑲᕅᐊ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ike)", () => {
		expect(p.parse("ᒪᓚᑬᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mâlaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ᒪᓚᑬ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ike)", () => {
		expect(p.parse("Maatiusiup Aglangit 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᑎᐅᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maatiusi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattêuse 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᑎᐅᓯ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ike)", () => {
		expect(p.parse("Maakusiup Aglangit 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᑯᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maakusi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markuse 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᑯᓯ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ike)", () => {
		expect(p.parse("Luukasiup Aglangit 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓘᑲᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luukasi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukase 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓘᑲᓯ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ike)", () => {
		expect(p.parse("ᔪᐊᓇᓯ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ike)", () => {
		expect(p.parse("ᔪᐊᓇᓯᐅᑉ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ike)", () => {
		expect(p.parse("III Johannesib 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ᔪᐊᓇᓯᐅᑉ ᐱᖓᔪᖏᑦ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ᔪᐊᓇᓯ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ike)", () => {
		expect(p.parse("1 Johannesib 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ᔪᐊᓇᓯ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannesib 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ᔪᐊᓇᓯ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johannesib 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I ᔪᐊᓇᓯ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johannesib 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. ᔪᐊᓇᓯ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ike)", () => {
		expect(p.parse("2 Johannesib 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ᔪᐊᓇᓯ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannesib 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ᔪᐊᓇᓯ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johannesib 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II ᔪᐊᓇᓯ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johannesib 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. ᔪᐊᓇᓯ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ike)", () => {
		expect(p.parse("Juanasiup Aglangit 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᔪᐊᓇᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannese 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juanasi 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᔪᐊᓇᓯ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ike)", () => {
		expect(p.parse("Apostelit Piniarningit 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᐋᐴᓯᑕᓖᑦ ᐱᓂᐊᕐᓂᖏᑦ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap. pin. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᐋᐴᓯᑕᓖᑦ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ike)", () => {
		expect(p.parse("Rômiunut 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ᕉᒪᒥᐅᓄᑦ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ike)", () => {
		expect(p.parse("1 Korintemiunut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ᑯᕆᓐᑎ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintemiunut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ᑯᕆᓐᑎ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintemiunut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I ᑯᕆᓐᑎ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintemiunut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. ᑯᕆᓐᑎ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ike)", () => {
		expect(p.parse("2 Korintemiunut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ᑯᕆᓐᑎ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintemiunut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ᑯᕆᓐᑎ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintemiunut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II ᑯᕆᓐᑎ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintemiunut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. ᑯᕆᓐᑎ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ike)", () => {
		expect(p.parse("ᑯᕆᓐᑎᐊᒥᐅᓄᑦ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ike)", () => {
		expect(p.parse("ᑯᕆᓐᑎᐊᒥᐅᓄᑦ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ike)", () => {
		expect(p.parse("Kolossamiunut 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᑯᓘᓯᐊᒥᐅᓄᑦ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᑯᓘᓯ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ike)", () => {
		expect(p.parse("Galâtsiamiunut 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᒐᓔᑎᐊᒥᐅᓄᑦ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᒐᓔᑎ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ike)", () => {
		expect(p.parse("Efêsusemiunut 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ᐃᐱᓯᒥᐅᓄᑦ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ᐃᐱᓯ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ike)", () => {
		expect(p.parse("Filippimiunut 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᐱᓕᐱᒥᐅᓄᑦ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᐱᓕᐱ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ike)", () => {
		expect(p.parse("1 Tessalônikamiunut 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ᑎᓴᓗᓁ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalônikamiunut 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ᑎᓴᓗᓁ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalônikamiunut 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I ᑎᓴᓗᓁ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalônikamiunut 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. ᑎᓴᓗᓁ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ike)", () => {
		expect(p.parse("2 Tessalônikamiunut 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ᑎᓴᓗᓁ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalônikamiunut 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ᑎᓴᓗᓁ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalônikamiunut 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II ᑎᓴᓗᓁ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalônikamiunut 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. ᑎᓴᓗᓁ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ike)", () => {
		expect(p.parse("ᑎᓴᓗᓁᑲᒥᐅᓄᑦ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ike)", () => {
		expect(p.parse("ᑎᓴᓗᓁᑲᒥᐅᓄᑦ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ike)", () => {
		expect(p.parse("1 Timôteusemut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timôteusemut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timôteusemut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timôteusemut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. ᑎᒧᑎ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ike)", () => {
		expect(p.parse("2 Timôteusemut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timôteusemut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timôteusemut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timôteusemut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. ᑎᒧᑎ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ike)", () => {
		expect(p.parse("ᑎᒧᑎᒧᑦ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ike)", () => {
		expect(p.parse("ᑎᒧᑎᒧᑦ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ike)", () => {
		expect(p.parse("Titusemut 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᑍᑑᓯᒧᑦ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᑍᑑᓯᑦ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ike)", () => {
		expect(p.parse("Filemônemut 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᐰᓕᒨᓂᒧᑦ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᐰᓕᒨ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ike)", () => {
		expect(p.parse("Ebrêerinut 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ᐄᑉᕈᐃᓄᑦ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ike)", () => {
		expect(p.parse("ᔧᒥᓯᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jâkobusib 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ᔧᒥᓯ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ike)", () => {
		expect(p.parse("ᐲᑦᑐᕉᓯ ᓯᕗᓪᓖᑦ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ike)", () => {
		expect(p.parse("ᐲᑦᑐᕉᓯ ᐂᑉᐸᖏᑦ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ike)", () => {
		expect(p.parse("1 Pêtrusib 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pêtrusib 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pêtrusib 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pêtrusib 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ike)", () => {
		expect(p.parse("2 Pêtrusib 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pêtrusib 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pêtrusib 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pêtrusib 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. ᐲᑦᑐᕉᓯ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ike)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ike)", () => {
		expect(p.parse("ᔫᑎᐅᑉ ᐊᒡᓚᖏᑦ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jûdasib 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ᔫᑎᐅᑉ 1:1").osis()).toEqual("Jude.1.1");
	});
});
