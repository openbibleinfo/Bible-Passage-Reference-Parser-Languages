"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/chr.js";

describe("Localized book Rev (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (chr)", () => {
		expect(p.parse("Ꮳꮒ Ꮔꮝꮫ Ꭰꮵꮎꮔꭺꮻꮞꮈꭲ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (chr)", () => {
		expect(p.parse("Ꭳꮝꮫ Ꭷꮓꭾꮫ Ꮉꮪ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (chr)", () => {
		expect(p.parse("Ꭳꮝꮫ Ꭷꮓꭾꮫ Ꮉꭶ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (chr)", () => {
		expect(p.parse("Ꭳꮝꮫ Ꭷꮓꭾꮫ Ꮇꭶ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (chr)", () => {
		expect(p.parse("Ꮳꮒ Ꭲꭼᏹᏹ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (chr)", () => {
		expect(p.parse("Ꮳꮒ Ꮤꮅꮑ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (chr)", () => {
		expect(p.parse("Ꮳꮒ Ꮶꭲꮑ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (chr)", () => {
		expect(p.parse("Ꭳꮝꮫ Ꭷꮓꭾꮫ Ꮳꮒ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (chr)", () => {
		expect(p.parse("Ꭸꮵꮕꮟꮫ Ꮔꮎꮫꮑꮅꮩꮈꭲ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮆꮋ Ꭰꮑꭿ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (chr)", () => {
		expect(p.parse("Ꭺꮅꮒꮧᏹ Ꭰꮑꭿ Ꭲꭼᏹᏹ Ꭸꭺꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (chr)", () => {
		expect(p.parse("Ꭺꮅꮒꮧᏹ Ꭰꮑꭿ Ꮤꮅꮑ Ꭸꭺꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꭺꮆꮟ Ꭰꮑꭿ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꭸꮄꮟᏹ Ꭰꮑꭿ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꭱꮘꮜ Ꭰꮑꭿ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮘꮅꭹᏹ Ꭰꮑꭿ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮥꮟꮆꮒꭶ Ꭰꮑꭿ Ꭲꭼᏹᏹ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ꮙꮃ. Ꮥꮟꮆꮒꭶ Ꭰꮑꭿ Ꭲꭼᏹᏹ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮥꮟꮆꮒꭶ Ꭰꮑꭿ Ꮤꮅꮑ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ꮙꮃ. Ꮥꮟꮆꮒꭶ Ꭰꮑꭿ Ꮤꮅꮑ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮷꮼꮺꮃꮕꭿ Ꭲꭼᏹᏹ Ꮧꮉꮧ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ꮙꮃ. Ꮷꮼꮺꮃꮕꭿ Ꭲꭼᏹᏹ Ꮧꮉꮧ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮷꮼꮺꮃꮕꭿ Ꮤꮅꮑ Ꮧꮉꮧ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ꮙꮃ. Ꮷꮼꮺꮃꮕꭿ Ꮤꮅꮑ Ꮧꮉꮧ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮣꮣꮟ Ꭴꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꮖꮅꮉꮒ Ꭴꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (chr)", () => {
		expect(p.parse("Ꮙꮃ Ꭰꮒꮘꮇ Ꮷꮼꮺꮃꮑꮈꭿ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (chr)", () => {
		expect(p.parse("Ꮵꮋ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (chr)", () => {
		expect(p.parse("Ꮘꮣ Ꭲꭼᏹᏹ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (chr)", () => {
		expect(p.parse("Ꮘꮣ Ꮤꮅꮑ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (chr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (chr)", () => {
		expect(p.parse("Ꮷꮣꮟ Ꭴꮼꮺꮃꮕꭿ 1:1").osis()).toEqual("Jude.1.1");
	});
});
