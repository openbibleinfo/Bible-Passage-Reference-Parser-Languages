"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/log.js";

describe("Localized book Rev (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (log)", () => {
		expect(p.parse("Tà tadhálé dhɨ ɨ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (log)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Màtáyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (log)", () => {
		expect(p.parse("Marako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Márokò 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (log)", () => {
		expect(p.parse("Lúkà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (log)", () => {
		expect(p.parse("1 Yòwánɨ̀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yòwánɨ̀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (log)", () => {
		expect(p.parse("2 Yòwánɨ̀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yòwánɨ̀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (log)", () => {
		expect(p.parse("3 Yòwánɨ̀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yow 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yòwánɨ̀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (log)", () => {
		expect(p.parse("Yòwánɨ̀ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (log)", () => {
		expect(p.parse("Tà ꞌòle dhɨ ɨ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (log)", () => {
		expect(p.parse("Rómàbhá ɨ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (log)", () => {
		expect(p.parse("1 Kòrítòbhá ɨ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòrítòbhá ɨ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (log)", () => {
		expect(p.parse("2 Kòrítòbhá ɨ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòrítòbhá ɨ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (log)", () => {
		expect(p.parse("Kòlòsáyɨ̀bhá ɨ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (log)", () => {
		expect(p.parse("Gàlàtɨ́yàbhá ɨ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (log)", () => {
		expect(p.parse("Èfésòbhá ɨ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (log)", () => {
		expect(p.parse("Fìlìpóyìbhá ɨ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (log)", () => {
		expect(p.parse("1 Tèsàlòníkèbhá ɨ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlòníkèbhá ɨ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (log)", () => {
		expect(p.parse("2 Tèsàlòníkèbhá ɨ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlòníkèbhá ɨ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (log)", () => {
		expect(p.parse("1 Tìmòtéyò 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tìmòtéyò 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (log)", () => {
		expect(p.parse("2 Tìmòtéyò 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tìmòtéyò 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (log)", () => {
		expect(p.parse("Títò 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (log)", () => {
		expect(p.parse("Fìlèmónà 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (log)", () => {
		expect(p.parse("Èbérè ɨ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (log)", () => {
		expect(p.parse("Yàkóbhò 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (log)", () => {
		expect(p.parse("1 Pétèró 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétèró 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (log)", () => {
		expect(p.parse("2 Pétèró 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétèró 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (log)", () => {
		expect(p.parse("Yúdà 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (log)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (log)", () => {
		expect(p.parse("1 Kòrítòbhá ɨ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Yòwánɨ̀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Pétèró 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tèsàlòníkèbhá ɨ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tìmòtéyò 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Kòrítòbhá ɨ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Yòwánɨ̀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Pétèró 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tèsàlòníkèbhá ɨ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tìmòtéyò 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Yòwánɨ̀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tà ꞌòle dhɨ ɨ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòlòsáyɨ̀bhá ɨ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Èfésòbhá ɨ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Gàlàtɨ́yàbhá ɨ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Èbérè ɨ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yàkóbhò 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yòwánɨ̀ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yúdà 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lúkà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Fìlìpóyìbhá ɨ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fìlèmónà 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Tà tadhálé dhɨ ɨ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rómàbhá ɨ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Títò 1:1").osis()).toEqual("Titus.1.1");
	});
});
