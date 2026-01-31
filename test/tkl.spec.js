"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tkl.js";

describe("Localized book Rev (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tkl)", () => {
		expect(p.parse("Fakaaliga 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Fkl 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tkl)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tkl)", () => {
		expect(p.parse("Maleko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tkl)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tkl)", () => {
		expect(p.parse("1 Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ioa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tkl)", () => {
		expect(p.parse("2 Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ioa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tkl)", () => {
		expect(p.parse("3 Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ioa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tkl)", () => {
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tkl)", () => {
		expect(p.parse("Gāluega 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gāl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tkl)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tkl)", () => {
		expect(p.parse("1 Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tkl)", () => {
		expect(p.parse("2 Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tkl)", () => {
		expect(p.parse("Kolohe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Klh 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tkl)", () => {
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tkl)", () => {
		expect(p.parse("Efeho 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tkl)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tkl)", () => {
		expect(p.parse("1 Tehalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tehalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teh 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tkl)", () => {
		expect(p.parse("2 Tehalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tehalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teh 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tkl)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tkl)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tkl)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tkl)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tkl)", () => {
		expect(p.parse("Epelu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tkl)", () => {
		expect(p.parse("Iakopo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tkl)", () => {
		expect(p.parse("1 Petelu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tkl)", () => {
		expect(p.parse("2 Petelu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tkl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tkl)", () => {
		expect(p.parse("Iuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iut 1:1").osis()).toEqual("Jude.1.1");
	});
});
