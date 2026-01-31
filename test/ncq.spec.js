"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ncq.js";

describe("Localized book Rev (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ncq)", () => {
		expect(p.parse("ອາປັຮ ເລືາຍ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ອລ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Prov (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ncq)", () => {
		expect(p.parse("ປັຣນາຍ ປາລີ່ ພາຍາ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Matt (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ncq)", () => {
		expect(p.parse("ມັດທາຍ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ມທ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ncq)", () => {
		expect(p.parse("ມາຣະໂກ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ມກ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ncq)", () => {
		expect(p.parse("ລູກາ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ລກ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ncq)", () => {
		expect(p.parse("ໂຢຮັນ ມວຍ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ຢຮ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ncq)", () => {
		expect(p.parse("ໂຢຮັນ ບາຣ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ຢຮ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ncq)", () => {
		expect(p.parse("ໂຢຮັນ ໄປ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ຢຮ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ncq)", () => {
		expect(p.parse("ໂຢຮັນ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ຢຮ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ncq)", () => {
		expect(p.parse("ຣານະ ຕະ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ຣຕ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ncq)", () => {
		expect(p.parse("ໂຣມ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ຣມ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ncq)", () => {
		expect(p.parse("ໂກຣິນໂທ ມວຍ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ກຣ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ncq)", () => {
		expect(p.parse("ໂກຣິນໂທ ບາຣ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ກຣ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ncq)", () => {
		expect(p.parse("ໂກໂລຊາຍ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ກຊ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ncq)", () => {
		expect(p.parse("ຄາລາເຕຍ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ຄລ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ncq)", () => {
		expect(p.parse("ເອເພໂຊ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ອພ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ncq)", () => {
		expect(p.parse("ພີລິບປອຍ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ພລ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ncq)", () => {
		expect(p.parse("ເທຊະໂລນິກ ມວຍ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ທນ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ncq)", () => {
		expect(p.parse("ເທຊະໂລນິກ ບາຣ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ທນ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ncq)", () => {
		expect(p.parse("ຕີໂມທຽວ ມວຍ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ຕມ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ncq)", () => {
		expect(p.parse("ຕີໂມທຽວ ບາຣ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ຕມ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ncq)", () => {
		expect(p.parse("ຕີໂຕ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ຕຕ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ncq)", () => {
		expect(p.parse("ພີເລໂມນ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ພມ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ncq)", () => {
		expect(p.parse("ເຮັບເຣີ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ຮຣ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ncq)", () => {
		expect(p.parse("ຢາໂກໂບ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ຢກ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ncq)", () => {
		expect(p.parse("ເປໂຕ ມວຍ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ປຕ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ncq)", () => {
		expect(p.parse("ເປໂຕ ບາຣ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ປຕ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ncq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ncq)", () => {
		expect(p.parse("ຢູດາ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ຢດ 1:1").osis()).toEqual("Jude.1.1");
	});
});
