"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bmv.js";

describe("Localized book Rev (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bmv)", () => {
		expect(p.parse("Gokhini 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Gok 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bmv)", () => {
		expect(p.parse("Matiyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bmv)", () => {
		expect(p.parse("Mâk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bmv)", () => {
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bmv)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bmv)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bmv)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bmv)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bmv)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bmv)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bmv)", () => {
		expect(p.parse("Fêt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bmv)", () => {
		expect(p.parse("Lumàns 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bmv)", () => {
		expect(p.parse("1 Kòlitiyàns 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòlitiyàns 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bmv)", () => {
		expect(p.parse("2 Kòlitiyàns 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòlitiyàns 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bmv)", () => {
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bmv)", () => {
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bmv)", () => {
		expect(p.parse("Kòlosiyàns 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bmv)", () => {
		expect(p.parse("Gàlesiyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bmv)", () => {
		expect(p.parse("Efisiyàns 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bmv)", () => {
		expect(p.parse("Fìlibiyàns 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fìl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bmv)", () => {
		expect(p.parse("1 Tèsàloniyàns 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàloniyàns 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bmv)", () => {
		expect(p.parse("2 Tèsàloniyàns 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàloniyàns 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bmv)", () => {
		expect(p.parse("1Tè 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bmv)", () => {
		expect(p.parse("2Tè 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bmv)", () => {
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bmv)", () => {
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bmv)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bmv)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bmv)", () => {
		expect(p.parse("Taytùs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bmv)", () => {
		expect(p.parse("Filemùn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bmv)", () => {
		expect(p.parse("Hibùlùs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bmv)", () => {
		expect(p.parse("Jêms 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jêm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bmv)", () => {
		expect(p.parse("1 Bità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bità 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bmv)", () => {
		expect(p.parse("2 Bità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bità 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bmv)", () => {
		expect(p.parse("1Bi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bmv)", () => {
		expect(p.parse("2Bi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bmv)", () => {
		expect(p.parse("Jûd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bmv)", () => {
		expect(p.parse("1 Kòlitiyàns 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kò 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bità 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tèsàloniyàns 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tè 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Kòlitiyàns 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kò 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bità 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tèsàloniyàns 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tè 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Fêt 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòlosiyàns 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efisiyàns 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Gàlesiyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Hibùlùs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jêms 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jêm 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jûd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lûk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mâk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matiyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Fìlibiyàns 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fìl 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filemùn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Lumàns 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Taytùs 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (bmv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bmv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jn - 3 Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jn – 3 Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jn — 3 Jon").osis()).toEqual("1John.1-3John.1");
	});
});
