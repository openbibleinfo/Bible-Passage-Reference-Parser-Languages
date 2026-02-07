"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dnn.js";

describe("Localized book Rev (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dnn)", () => {
		expect(p.parse("Goo kpàdèuma rèè 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Gokp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dnn)", () => {
		expect(p.parse("Matsiyù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dnn)", () => {
		expect(p.parse("Marikì 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dnn)", () => {
		expect(p.parse("Lukì 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dnn)", () => {
		expect(p.parse("Yùxanà jɔ̀naà 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yux1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dnn)", () => {
		expect(p.parse("Yùxanà fiiraa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yux2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dnn)", () => {
		expect(p.parse("Yùxanà zhììgìraa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yux3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dnn)", () => {
		expect(p.parse("Yùxanà 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yux 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dnn)", () => {
		expect(p.parse("Kɛɛradzin neè faadziɛ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kɛf 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dnn)", () => {
		expect(p.parse("Ɔ̀rɔ̀mùnka reè 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɔrɔ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dnn)", () => {
		expect(p.parse("Korɛntsika reè jɔ̀naà 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kor1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dnn)", () => {
		expect(p.parse("Korɛntsika reè fiiraa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kor2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dnn)", () => {
		expect(p.parse("Kolosika reè 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dnn)", () => {
		expect(p.parse("Galatsika reè 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dnn)", () => {
		expect(p.parse("Efɛsika reè 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dnn)", () => {
		expect(p.parse("Filipika reè 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dnn)", () => {
		expect(p.parse("Tesalonikika reè jɔ̀naà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tes1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dnn)", () => {
		expect(p.parse("Tesalonikika reè fiiraa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dnn)", () => {
		expect(p.parse("Tsìmotè jɔ̀naà 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tsim1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dnn)", () => {
		expect(p.parse("Tsìmotè fiiraa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tsim2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dnn)", () => {
		expect(p.parse("Tsitè 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tsit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dnn)", () => {
		expect(p.parse("Filemɔ̀n 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dnn)", () => {
		expect(p.parse("Dzyèèsìbee mòdzin neè 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Sɛdz 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dnn)", () => {
		expect(p.parse("Yàkubà 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dnn)", () => {
		expect(p.parse("Piyɛrì jɔ̀naà 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Piy1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dnn)", () => {
		expect(p.parse("Piyɛrì fiiraa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Piy2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dnn)", () => {
		expect(p.parse("Yudè 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (dnn)", () => {
		expect(p.parse("Korɛntsika reè jɔ̀naà 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("﻿Yùxanà jɔ̀naà 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("﻿Piyɛrì jɔ̀naà 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tesalonikika reè jɔ̀naà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Korɛntsika reè fiiraa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("﻿Yùxanà zhììgìraa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kɛɛradzin neè faadziɛ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kolosika reè 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efɛsika reè 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Galatsika reè 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Dzyèèsìbee mòdzin neè 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yàkubà 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yùxanà 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yudè 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lukì 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Marikì 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matsiyù 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filipika reè 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Goo kpàdèuma rèè 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ɔ̀rɔ̀mùnka reè 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tsitè 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (dnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (dnn)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yùxanà jɔ̀naà - Yùxanà zhììgìraa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yùxanà jɔ̀naà – Yùxanà zhììgìraa").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yùxanà jɔ̀naà — Yùxanà zhììgìraa").osis()).toEqual("1John.1-3John.1");
	});
});
