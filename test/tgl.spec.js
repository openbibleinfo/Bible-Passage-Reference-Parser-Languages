"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tgl.js";

describe("Localized book Gen (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tgl)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Henesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tgl)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (tgl)", () => {
		expect(p.parse("Si Bel at ang Dragon 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel at ang Dragon 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tgl)", () => {
		expect(p.parse("Lebitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lebitico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leb 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tgl)", () => {
		expect(p.parse("Mga Bilang 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bamidbar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bemidbar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bilang 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bil 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Blg 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (tgl)", () => {
		expect(p.parse("Ang Karunungan ni Jesus, Anak ni Sirac 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ang Karunungan ni Jesus Anak ni Sirac 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Karunungan ng Anak ni Sirac 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekklesiastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekklesyastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiastico 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekklesiastiko 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekklesyastiko 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eklesiastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eklesyastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eclesiastico 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eklesiastiko 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eklesyastiko 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácidas 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácides 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirákidas 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirákides 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácida 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirákida 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirákide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirách 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirákh 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirac 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirác 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirák 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Lam (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tgl)", () => {
		expect(p.parse("Aklat ng Pananaghoy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aklat ng Pagtaghoy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mga Lamentasyon 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mga Panaghoy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Panaghoy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Panag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (tgl)", () => {
		expect(p.parse("Ang Liham ni Jeremias 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Liham ni Jeremias 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Li ni Jer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Lih Jer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tgl)", () => {
		expect(p.parse("Apocalipsis ni Juan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsis ni Juan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pahayag kay Juan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rebelasyon 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pahayag 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apok 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (tgl)", () => {
		expect(p.parse("Ang Panalangin ni Manases 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Panalangin ni Manases 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Dalangin ni Manases 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Dasal ni Manases 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tgl)", () => {
		expect(p.parse("Deyuteronomyo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Diyuteronomyo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomiya 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomiyo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dyuteronomyo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomya 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomia 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronoma 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tgl)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tgl)", () => {
		expect(p.parse("Mga Hukom 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hukom 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Huk 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tgl)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (tgl)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (tgl)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (tgl)", () => {
		expect(p.parse("Unang Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Unang Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Unang. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Unang. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Una Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Una Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Una. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Una. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (tgl)", () => {
		expect(p.parse("Ikalawang Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Ikalawang Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Ikalawang. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Ikalawang. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tgl)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tgl)", () => {
		expect(p.parse("Isaíah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaías 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaias 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaía 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tgl)", () => {
		expect(p.parse("Unang Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Unang. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Una Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Una. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tgl)", () => {
		expect(p.parse("Ikalawang Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ikalawang. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tgl)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tgl)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tgl)", () => {
		expect(p.parse("Unang Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Unang. Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Una Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Una. Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Hari 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tgl)", () => {
		expect(p.parse("Ikalawang Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ikalawang. Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Hari 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tgl)", () => {
		expect(p.parse("Unang Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Unang. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Una Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Una. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tgl)", () => {
		expect(p.parse("Ikatlong Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ikatlong. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tgl)", () => {
		expect(p.parse("Ikaapat Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ikaapat. Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tgl)", () => {
		expect(p.parse("Ikalawang Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ikalawang. Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tgl)", () => {
		expect(p.parse("2 Mga Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ha 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tgl)", () => {
		expect(p.parse("1 Mga Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ha 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tgl)", () => {
		expect(p.parse("Unang Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Unang. Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Una. Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Mga Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Mga Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Chronicle 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cronica 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronika 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tgl)", () => {
		expect(p.parse("Ikalawang Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang Mga Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang Mga Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Mga Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Mga Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ikalawang. Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mga Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mga Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mga Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mga Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Mga Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Mga Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Mga Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Mga Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Chronicle 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cronica 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronika 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tgl)", () => {
		expect(p.parse("2 Paralipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tgl)", () => {
		expect(p.parse("1 Paralipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Neh (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tgl)", () => {
		expect(p.parse("Nehemíah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemías 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemias 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (tgl)", () => {
		expect(p.parse("Ester (Griyego) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (Gryego) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (Griego) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester Griyego 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (Grego) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester Gryego 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester Griego 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester Grego 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Estg 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tgl)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tgl)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book SgThree (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (tgl)", () => {
		expect(p.parse("Awit ng Tatlong Banal na Kabataan 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Awit ng Tatlong Kabataang Banal 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Awit ng Tatlong Kabataan 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Awit ng Tatlong Binata 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Awit ng 3 Kabataan 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Tatlong Kabataan 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Aw ng 3 Kab 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tgl)", () => {
		expect(p.parse("Ang Awit ng mga Awit 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ang Awit ni Salomón 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ang Awit ni Solomón 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Awit ng mga Awit 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Awit ni Salomón 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Awit ni Solomón 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kantikulo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("A. ng A. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("A ng A. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("A. ng A 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Aw ni S 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kantiko 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("A ng A 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tgl)", () => {
		expect(p.parse("Mga Salmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mga Awit 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Awit 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Wis (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (tgl)", () => {
		expect(p.parse("Ang Karunungan ni Salomón 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ang Karunungan ni Solomón 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Karunungan ni Salomón 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Karunungan ni Solomón 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Karunungan 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Salomón 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Solomón 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book PrAzar (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (tgl)", () => {
		expect(p.parse("Ang Panalangin ni Azarias 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Panalangin ni Azarias 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tgl)", () => {
		expect(p.parse("Mga Kawikaan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kawikaan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kaw 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tgl)", () => {
		expect(p.parse("Ang Mangangaral 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesyastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklesiastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklesyastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclisiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclisyastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklisiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eklisyastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mangangaral 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Manga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Jer (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tgl)", () => {
		expect(p.parse("Aklat ni Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Aklat ni Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Sulat ni Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Heremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Heremyas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Herimias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Herimyas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Hiremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Hiremyas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Hirimias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Hirimyas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tgl)", () => {
		expect(p.parse("Ezequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esekyel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekyel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tgl)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tgl)", () => {
		expect(p.parse("Hoseias 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoseia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oseiah 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oseias 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oseah 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oseia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tgl)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yole 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tgl)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amós 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tgl)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdías 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tgl)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonáh 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonás 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Joná 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tgl)", () => {
		expect(p.parse("Mikeyas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikieas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miqueas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikeas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Micas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mica 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tgl)", () => {
		expect(p.parse("Nahúm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tgl)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tgl)", () => {
		expect(p.parse("Zephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zephanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sepanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonías 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zepanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sepania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tgl)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggeo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aggeo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hageo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ageo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tgl)", () => {
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sacarías 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacarías 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacarias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tgl)", () => {
		expect(p.parse("Malaquías 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tgl)", () => {
		expect(p.parse("Mabuting Balita ayon kay San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mabuting Balita ayon kay Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ebanghelyo ayon kay Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ebanghelyo ni San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ebanghelyo ni Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tgl)", () => {
		expect(p.parse("Mabuting Balita ayon kay San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mabuting Balita ayon kay San Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mabuting Balita ayon kay Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mabuting Balita ayon kay Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ebanghelyo ayon kay Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ebanghelyo ni San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ebanghelyo ni San Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ebanghelyo ni Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ebanghelyo ni Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tgl)", () => {
		expect(p.parse("Mabuting Balita ayon kay San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mabuting Balita ayon kay San Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mabuting Balita ayon kay Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mabuting Balita ayon kay Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ebanghelyo ayon kay San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ebanghelyo ayon kay San Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ebanghelyo ayon kay Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ebanghelyo ayon kay Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ebanghelyo ni San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ebanghelyo ni San Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tgl)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tgl)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tgl)", () => {
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tgl)", () => {
		expect(p.parse("Unang Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Unang. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Una Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Una. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Juan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tgl)", () => {
		expect(p.parse("Ikalawang Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ikalawang. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Juan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tgl)", () => {
		expect(p.parse("Ikatlong Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ikatlong. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Juan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tgl)", () => {
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tgl)", () => {
		expect(p.parse("Mabuting Balita ayon kay San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Mabuting Balita ayon kay Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ebanghelyo ayon kay San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ebanghelyo ayon kay Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ebanghelyo ni San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tgl)", () => {
		expect(p.parse("Mabuting Balita ayon sa Espiritu Santo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mabuting Balita ng Espiritu Santo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebanghelyo ng Espiritu Santo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mga Gawa ng mga Apostoles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mga Gawa ng mga Apostol 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mga Gawa ng mga Alagad 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gawa ng mga Apostol 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gawa ng Apostoles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mga Gawain 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mga Gawa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gawa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gw 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tgl)", () => {
		expect(p.parse("Sulat sa mga Romano 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Mga Taga- Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Mga Taga Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Mga Taga-Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Taga- Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Taga Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tgl)", () => {
		expect(p.parse("Unang Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Mga Taga- Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Mga Taga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tgl)", () => {
		expect(p.parse("Ikalawang Mga Taga- Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang Mga Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang. Mga Taga- Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang. Mga Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang. Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang. Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang. Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ikalawang. Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Mga Taga- Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Mga Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Mga Taga- Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Mga Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Mga Taga- Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Mga Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Mga Taga- Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Mga Taga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tgl)", () => {
		expect(p.parse("Ika- 2 Sulat sa mga Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("SECOND Sulat sa mga Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ika 2 Sulat sa mga Corintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ika- 2 Sulat sa mga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("SECOND Sulat sa mga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ika 2 Sulat sa mga Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tgl)", () => {
		expect(p.parse("Unang Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Unang. Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Una. Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tgl)", () => {
		expect(p.parse("Ika- 1 Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ika 1 Sulat sa mga Corintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ika- 1 Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ika 1 Sulat sa mga Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tgl)", () => {
		expect(p.parse("Sulat sa mga taga Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Sulat sa mga Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Mga Taga- Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Mga Taga- Galasya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Mga Taga Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Mga Taga Galasya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Mga Taga-Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Taga- Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Taga Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galasyano 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tgl)", () => {
		expect(p.parse("Sulat sa mga Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Sulat sa mga Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Sulat sa mga Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Sulat sa mga Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga- Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga- Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga- Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga- Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Taga-Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga- Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga- Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga- Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga- Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Taga Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Mga Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epesio 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tgl)", () => {
		expect(p.parse("Sulat sa mga Pilipyano 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Sulat sa mga Filipense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Sulat sa mga Pilipense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Taga- Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Taga- Pilipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Taga Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Taga Pilipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Taga-Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Pilipyano 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Filipense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mga Pilipense 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Taga- Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Taga- Pilipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Taga Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Taga Pilipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tgl)", () => {
		expect(p.parse("Sulat sa mga Colonsense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Sulat sa mga Kolonsense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Sulat sa mga Colosense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Sulat sa mga Kolosense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Taga- Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Taga- Kolosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Taga Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Taga Kolosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Taga-Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Colonsense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Kolonsense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Colosense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Mga Kolosense 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Taga- Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Taga Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Co 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tgl)", () => {
		expect(p.parse("Unang Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Unang. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Una. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Mga Taga- Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Mga Taga- Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Mga Taga Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Mga Taga Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Mga Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Mga Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tgl)", () => {
		expect(p.parse("Ikalawang Mga Taga- Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Mga Taga- Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Mga Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Mga Taga Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Mga Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Mga Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Mga Taga- Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Mga Taga- Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Mga Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Mga Taga Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Mga Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Mga Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ikalawang. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mga Taga- Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mga Taga- Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mga Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mga Taga Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mga Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mga Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mga Taga- Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mga Taga- Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mga Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mga Taga Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mga Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mga Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Mga Taga- Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Mga Taga- Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Mga Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Mga Taga Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Mga Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Mga Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Mga Taga- Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Mga Taga- Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Mga Taga Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Mga Taga Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Mga Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Mga Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tgl)", () => {
		expect(p.parse("2 Tesalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tgl)", () => {
		expect(p.parse("1 Tesalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tgl)", () => {
		expect(p.parse("Unang Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Unang Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Unang. Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Unang. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Una Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Una Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Una. Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Una. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Kay Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tgl)", () => {
		expect(p.parse("Ikalawang Kay Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ikalawang Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ikalawang. Kay Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ikalawang. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Kay Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Kay Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Kay Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Kay Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tgl)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tgl)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tgl)", () => {
		expect(p.parse("Kay Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tgl)", () => {
		expect(p.parse("Kay Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tgl)", () => {
		expect(p.parse("Mga Hebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Mga Ebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tgl)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jacobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sant 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("San 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tgl)", () => {
		expect(p.parse("Unang Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Unang. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Una Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Una. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pedro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tgl)", () => {
		expect(p.parse("Ikalawang Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ikalawang. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pedro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tgl)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ped 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tgl)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ped 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tgl)", () => {
		expect(p.parse("Hudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (tgl)", () => {
		expect(p.parse("Tobías 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (tgl)", () => {
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (tgl)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Barukh 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruc 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (tgl)", () => {
		expect(p.parse("Si Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Su 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (tgl)", () => {
		expect(p.parse("Unang Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Unang Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Unang Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Unang. Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Unang. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Unang. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Una Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Una Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Una Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Una. Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Una. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Una. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (tgl)", () => {
		expect(p.parse("Ikalawang Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ikalawang Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ikalawang Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ikalawang. Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ikalawang. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Ikalawang. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (tgl)", () => {
		expect(p.parse("Ikatlong Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Ikatlong Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Ikatlong Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Ikatlong. Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Ikatlong. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Ikatlong. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (tgl)", () => {
		expect(p.parse("Ikaapat Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Ikaapat Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Ikaapat Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Ikaapat. Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Ikaapat. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Ikaapat. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (tgl)", () => {
		expect(p.parse("2 Mga Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mcb 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (tgl)", () => {
		expect(p.parse("3 Mga Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mcb 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (tgl)", () => {
		expect(p.parse("4 Mga Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mcb 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (tgl)", () => {
		expect(p.parse("1 Mga Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mcb 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Ezek,Ezra (tgl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek,Ezra (tgl)", () => {
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
