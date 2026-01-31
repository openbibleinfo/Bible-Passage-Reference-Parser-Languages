"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/apn.js";

describe("Localized book Rev (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (apn)", () => {
		expect(p.parse("Apokarip 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (apn)", () => {
		expect(p.parse("Matêwre 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (apn)", () => {
		expect(p.parse("Makre 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (apn)", () => {
		expect(p.parse("Rukre 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (apn)", () => {
		expect(p.parse("1Jw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (apn)", () => {
		expect(p.parse("2Jw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (apn)", () => {
		expect(p.parse("Hapuhã Juãw 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (apn)", () => {
		expect(p.parse("Wam Juãw 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Wam. Juãw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (apn)", () => {
		expect(p.parse("Sikũn Juãw 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sikũn. Juãw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (apn)", () => {
		expect(p.parse("Juãw 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (apn)", () => {
		expect(p.parse("Atre 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("At 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (apn)", () => {
		expect(p.parse("Rõmãn 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (apn)", () => {
		expect(p.parse("Wam Korĩt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Wam. Korĩt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (apn)", () => {
		expect(p.parse("Sikũn Korĩt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sikũn. Korĩt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (apn)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (apn)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (apn)", () => {
		expect(p.parse("Korosẽ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kr 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (apn)", () => {
		expect(p.parse("Karatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kt 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (apn)", () => {
		expect(p.parse("Epes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (apn)", () => {
		expect(p.parse("Piripos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (apn)", () => {
		expect(p.parse("Wam Tesarõn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Wam. Tesarõn 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (apn)", () => {
		expect(p.parse("Sikũn Tesarõn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sikũn. Tesarõn 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (apn)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (apn)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (apn)", () => {
		expect(p.parse("Wam Ximotre 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Wam. Ximotre 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (apn)", () => {
		expect(p.parse("Sikũn Ximotre 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sikũn. Ximotre 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (apn)", () => {
		expect(p.parse("1Xm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (apn)", () => {
		expect(p.parse("2Xm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (apn)", () => {
		expect(p.parse("Xitre 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Xt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (apn)", () => {
		expect(p.parse("Piremõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (apn)", () => {
		expect(p.parse("Eprêw 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (apn)", () => {
		expect(p.parse("Xiakre 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Xk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (apn)", () => {
		expect(p.parse("Wam Pêtre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Wam. Pêtre 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (apn)", () => {
		expect(p.parse("Sikũn Pêtre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sikũn. Pêtre 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (apn)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (apn)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (apn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (apn)", () => {
		expect(p.parse("Jutre 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jt 1:1").osis()).toEqual("Jude.1.1");
	});
});
