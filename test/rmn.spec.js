"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rmn.js";

describe("Localized book Gen (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rmn)", () => {
		expect(p.parse("Кердипэ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Крд 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rmn)", () => {
		expect(p.parse("Otkrivenje 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Phućardipe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Phuć 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Otk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rmn)", () => {
		expect(p.parse("Руфь 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rmn)", () => {
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rmn)", () => {
		expect(p.parse("Evangelium e Matejestar 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateje 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matej 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rmn)", () => {
		expect(p.parse("Evangelium e Markostar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rmn)", () => {
		expect(p.parse("Evangelium e Lukastar 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukahtar 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukéstar 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rmn)", () => {
		expect(p.parse("Trito e Jovanesiri 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jovanesko 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jovan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rmn)", () => {
		expect(p.parse("1 e Jovanesiri 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jovanesko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jovan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. e Jovanesiri 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jovanesko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jovan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni e Jovanesiri 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni Jovanesko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni Jovan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni. e Jovanesiri 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni. Jovanesko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni. Jovan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Angluni. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rmn)", () => {
		expect(p.parse("2 e Jovanesiri 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jovanesko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jovan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. e Jovanesiri 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jovanesko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jovan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto e Jovanesiri 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto Jovanesko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto Jovan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto. e Jovanesiri 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto. Jovanesko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto. Jovan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Dujto. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rmn)", () => {
		expect(p.parse("Evangelium e Jovanostar 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jovane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jovano 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jovan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rmn)", () => {
		expect(p.parse("Ćerdipna e apostolengere 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Delja 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Buća 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ćeap 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dela 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дила 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dap 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дл 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rmn)", () => {
		expect(p.parse("Rimljanenđe 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rimljanenge 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rmn)", () => {
		expect(p.parse("1 e Korinćanjenge 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinćanenđe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. e Korinćanjenge 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinćanenđe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Angluni e Korinćanjenge 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Angluni Korinćanenđe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Angluni Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Angluni. e Korinćanjenge 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Angluni. Korinćanenđe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Angluni. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rmn)", () => {
		expect(p.parse("2 Korinćanjenge 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinćanenđe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinćanjenge 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinćanenđe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dujto Korinćanjenge 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dujto Korinćanenđe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dujto Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dujto. Korinćanjenge 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dujto. Korinćanenđe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Dujto. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rmn)", () => {
		expect(p.parse("E Kološanenge 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kološanurenđe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kološanenđe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rmn)", () => {
		expect(p.parse("Galaćanurenđe 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("E Galatenge 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaćanenđe 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatenđe 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rmn)", () => {
		expect(p.parse("Efesconenge 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efescurenđe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efežanenđe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rmn)", () => {
		expect(p.parse("E Filipljanenge 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipljanenđe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rmn)", () => {
		expect(p.parse("1 e Solunjamnenge 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solunjanenđe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. e Solunjamnenge 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Solunjanenđe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Angluni e Solunjamnenge 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Angluni Solunjanenđe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Angluni Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Angluni. e Solunjamnenge 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Angluni. Solunjanenđe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Angluni. Sol 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rmn)", () => {
		expect(p.parse("2 e Solunjamnenge 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solunjanenđe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. e Solunjamnenge 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Solunjanenđe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dujto e Solunjamnenge 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dujto Solunjanenđe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dujto Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dujto. e Solunjamnenge 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dujto. Solunjanenđe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Dujto. Sol 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rmn)", () => {
		expect(p.parse("1 e Timotejese 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteješće 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotej 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. e Timotejese 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteješće 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotej 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni e Timotejese 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni Timoteješće 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni Timotej 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni. e Timotejese 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni. Timoteješće 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni. Timotej 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Angluni. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rmn)", () => {
		expect(p.parse("2 e Timotejese 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteješće 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotej 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. e Timotejese 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteješće 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotej 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto e Timotejese 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto Timoteješće 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto Timotej 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto. e Timotejese 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto. Timoteješće 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto. Timotej 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Dujto. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rmn)", () => {
		expect(p.parse("E Titose 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titošće 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rmn)", () => {
		expect(p.parse("E Filimonose 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonešće 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rmn)", () => {
		expect(p.parse("E Jevrejenge 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jev 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rmn)", () => {
		expect(p.parse("E Jakovesiri 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakovesko 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rmn)", () => {
		expect(p.parse("1 e Petresiri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petresko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. e Petresiri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petresko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni e Petresiri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni Petresko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni Petar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni. e Petresiri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni. Petresko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni. Petar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Angluni. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rmn)", () => {
		expect(p.parse("2 e Petresiri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petresko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. e Petresiri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petresko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto e Petresiri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto Petresko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto Petar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto. e Petresiri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto. Petresko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto. Petar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Dujto. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rmn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rmn)", () => {
		expect(p.parse("E Judesiri 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judasko 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
