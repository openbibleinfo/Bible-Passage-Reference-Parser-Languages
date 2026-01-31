"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/atg.js";

describe("Localized book Rev (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (atg)", () => {
		expect(p.parse("Irọkhasẹ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Irọ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (atg)", () => {
		expect(p.parse("iMatiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("iMat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (atg)", () => {
		expect(p.parse("iMaki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("iMak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (atg)", () => {
		expect(p.parse("iLuku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("iLuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (atg)", () => {
		expect(p.parse("1 iJọni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 iJọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. iJọni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. iJọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (atg)", () => {
		expect(p.parse("2 iJọni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 iJọn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. iJọni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. iJọn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (atg)", () => {
		expect(p.parse("3 iJọni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 iJọn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. iJọni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. iJọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (atg)", () => {
		expect(p.parse("iJọni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("iJọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (atg)", () => {
		expect(p.parse("Ikanya 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ika 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (atg)", () => {
		expect(p.parse("iRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("iRom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (atg)", () => {
		expect(p.parse("1 iKọritia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 iKọri 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. iKọritia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. iKọri 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (atg)", () => {
		expect(p.parse("2 iKọritia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 iKọri 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. iKọritia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. iKọri 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (atg)", () => {
		expect(p.parse("iKolosha 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("iKolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (atg)", () => {
		expect(p.parse("iGalesha 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("iGal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (atg)", () => {
		expect(p.parse("Ẹfisha 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹfi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (atg)", () => {
		expect(p.parse("iFilipia 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("iFili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (atg)", () => {
		expect(p.parse("1 iTẹsalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 iTẹsa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. iTẹsalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. iTẹsa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (atg)", () => {
		expect(p.parse("2 iTẹsalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 iTẹsa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. iTẹsalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. iTẹsa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (atg)", () => {
		expect(p.parse("1 Itimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 iTimo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Itimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. iTimo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (atg)", () => {
		expect(p.parse("2 Itimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 iTimo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Itimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. iTimo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (atg)", () => {
		expect(p.parse("iTatọsi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("iTatọ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (atg)", () => {
		expect(p.parse("iFilẹmọ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("iFilẹ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (atg)", () => {
		expect(p.parse("Iburu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (atg)", () => {
		expect(p.parse("iJemhisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("iJem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (atg)", () => {
		expect(p.parse("1 Ipita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 iPit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ipita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. iPit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (atg)", () => {
		expect(p.parse("2 Ipita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 iPit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ipita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. iPit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (atg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (atg)", () => {
		expect(p.parse("iJudu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("iJu 1:1").osis()).toEqual("Jude.1.1");
	});
});
