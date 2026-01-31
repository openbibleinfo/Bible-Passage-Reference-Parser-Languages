"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mch.js";

describe("Localized book Rev (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mch)", () => {
		expect(p.parse("Apoocadiisi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mch)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mch)", () => {
		expect(p.parse("Maadoco 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maa 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mch)", () => {
		expect(p.parse("Duuca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Duu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mch)", () => {
		expect(p.parse("1Ju 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mch)", () => {
		expect(p.parse("2Ju 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mch)", () => {
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ju 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mch)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mch)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mch)", () => {
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jua 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mch)", () => {
		expect(p.parse("Dosecho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dos 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mch)", () => {
		expect(p.parse("Domaano 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Dom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mch)", () => {
		expect(p.parse("1 Codintiyo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Codintiyo 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mch)", () => {
		expect(p.parse("2 Codintiyo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Codintiyo 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mch)", () => {
		expect(p.parse("1Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mch)", () => {
		expect(p.parse("2Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mch)", () => {
		expect(p.parse("Codoosense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Cod 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mch)", () => {
		expect(p.parse("Caadata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Caa 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mch)", () => {
		expect(p.parse("Eujeesiyo 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Euj 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mch)", () => {
		expect(p.parse("Jidiipense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Jid 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mch)", () => {
		expect(p.parse("1 Teesadoonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teesadoonisense 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mch)", () => {
		expect(p.parse("2 Teesadoonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teesadoonisense 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mch)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mch)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mch)", () => {
		expect(p.parse("1 Tiimoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiimoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mch)", () => {
		expect(p.parse("2 Tiimoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiimoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mch)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mch)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mch)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tii 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mch)", () => {
		expect(p.parse("Jiidemón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Jii 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mch)", () => {
		expect(p.parse("Eewedeo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eew 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mch)", () => {
		expect(p.parse("Santiyaaco 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("San 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mch)", () => {
		expect(p.parse("1 Peedhodo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peedhodo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mch)", () => {
		expect(p.parse("2 Peedhodo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peedhodo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mch)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mch)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mch)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mch)", () => {
		expect(p.parse("Juudha 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juu 1:1").osis()).toEqual("Jude.1.1");
	});
});
