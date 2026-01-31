"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ttc.js";

describe("Localized book Rev (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ttc)", () => {
		expect(p.parse("Te Tmankbꞌil 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tmnk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ttc)", () => {
		expect(p.parse("Stzꞌibꞌen Matey 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ttc)", () => {
		expect(p.parse("Stzꞌibꞌen Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ttc)", () => {
		expect(p.parse("Stzꞌibꞌen Luks 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luks 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ttc)", () => {
		expect(p.parse("1Wnch 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ttc)", () => {
		expect(p.parse("2Wnch 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ttc)", () => {
		expect(p.parse("Toxiꞌ Uꞌj Stzꞌibꞌen Waꞌnch 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Wnch 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ttc)", () => {
		expect(p.parse("Tbꞌay Uꞌj Stzꞌibꞌen Waꞌnch 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Tbꞌay. Uꞌj Stzꞌibꞌen Waꞌnch 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ttc)", () => {
		expect(p.parse("Tkabꞌiꞌ Uꞌj Stzꞌibꞌen Waꞌnch 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tkabꞌiꞌ. Uꞌj Stzꞌibꞌen Waꞌnch 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ttc)", () => {
		expect(p.parse("Stzꞌibꞌen Waꞌnch 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Wnch 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ttc)", () => {
		expect(p.parse("Kyaqꞌumbꞌen Kye Tkyꞌixel Jesus 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kya 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ttc)", () => {
		expect(p.parse("Kye Aj Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ttc)", () => {
		expect(p.parse("Tbꞌay Uꞌj Kye Aj Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Tbꞌay. Uꞌj Kye Aj Korint 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ttc)", () => {
		expect(p.parse("Tkabꞌiꞌ Uꞌj Kye Aj Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tkabꞌiꞌ. Uꞌj Kye Aj Korint 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ttc)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ttc)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ttc)", () => {
		expect(p.parse("Kye Aj Kolosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ttc)", () => {
		expect(p.parse("Kye Aj Galasy 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ttc)", () => {
		expect(p.parse("Kye Aj Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ttc)", () => {
		expect(p.parse("Kye Aj Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ttc)", () => {
		expect(p.parse("Tbꞌay Uꞌj Kye Aj Tesalonk 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tbꞌay. Uꞌj Kye Aj Tesalonk 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ttc)", () => {
		expect(p.parse("Tkabꞌiꞌ Uꞌj Kye Aj Tesalonk 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tkabꞌiꞌ. Uꞌj Kye Aj Tesalonk 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ttc)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ttc)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ttc)", () => {
		expect(p.parse("Tbꞌay Uꞌj Te Timotey 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tbꞌay. Uꞌj Te Timotey 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ttc)", () => {
		expect(p.parse("Tkabꞌiꞌ Uꞌj Te Timotey 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tkabꞌiꞌ. Uꞌj Te Timotey 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ttc)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ttc)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ttc)", () => {
		expect(p.parse("Te Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ttc)", () => {
		expect(p.parse("Te Moꞌnch 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Mnch 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ttc)", () => {
		expect(p.parse("Kye Ebrey 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ttc)", () => {
		expect(p.parse("Stzꞌibꞌen Chaw 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Chaw 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ttc)", () => {
		expect(p.parse("Tbꞌay Uꞌj Stzꞌibꞌen Xhpeꞌy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tbꞌay. Uꞌj Stzꞌibꞌen Xhpeꞌy 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ttc)", () => {
		expect(p.parse("Tkabꞌiꞌ Uꞌj Stzꞌibꞌen Xhpeꞌy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tkabꞌiꞌ. Uꞌj Stzꞌibꞌen Xhpeꞌy 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ttc)", () => {
		expect(p.parse("1Xhp 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ttc)", () => {
		expect(p.parse("2Xhp 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ttc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ttc)", () => {
		expect(p.parse("Stzꞌibꞌen Juds 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juds 1:1").osis()).toEqual("Jude.1.1");
	});
});
