"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lao.js";

describe("Localized book Gen (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lao)", () => {
		expect(p.parse("ປະຖົມມະການ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ປຖກ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lao)", () => {
		expect(p.parse("ອົບພະຍົບ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ອພຍ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lao)", () => {
		expect(p.parse("ລະບຽບ^ພວກເລວີ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ລລວ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lao)", () => {
		expect(p.parse("ຈົດບັນຊີ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ຈບຊ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lao)", () => {
		expect(p.parse("ເພງ^ຄໍ່າຄວນ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ພຄຄ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lao)", () => {
		expect(p.parse("ພຣະນິມິດ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ພນມ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lao)", () => {
		expect(p.parse("ພຣະບັນຍັດສອງ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ພບຍ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lao)", () => {
		expect(p.parse("ໂຢຊວຍ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ຢຊ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lao)", () => {
		expect(p.parse("ພວກ^ຜູ້ປົກຄອງ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ຜປ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lao)", () => {
		expect(p.parse("ນາງຣຸດ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ນຣ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lao)", () => {
		expect(p.parse("ເອຊາຢາ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ອຊຢ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lao)", () => {
		expect(p.parse("1 ຊາມູເອນ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ຊມອ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ຊາມູເອນ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ຊມອ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lao)", () => {
		expect(p.parse("2 ຊາມູເອນ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ຊມອ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ຊາມູເອນ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ຊມອ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lao)", () => {
		expect(p.parse("1 ກະສັດ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ກສ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ກະສັດ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ກສ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lao)", () => {
		expect(p.parse("2 ກະສັດ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ກສ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ກະສັດ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ກສ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lao)", () => {
		expect(p.parse("1 ຂ່າວຄາວ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ຂຄ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ຂ່າວຄາວ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ຂຄ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lao)", () => {
		expect(p.parse("2 ຂ່າວຄາວ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ຂຄ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ຂ່າວຄາວ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ຂຄ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lao)", () => {
		expect(p.parse("ເອຊະຣາ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ອຊຣ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lao)", () => {
		expect(p.parse("ເນເຫມີຢາ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ນມຢ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lao)", () => {
		expect(p.parse("ເອສະເທີ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ອສທ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lao)", () => {
		expect(p.parse("ໂຢບ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lao)", () => {
		expect(p.parse("ເພງ^ສັນລະເສີນ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ພສສ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lao)", () => {
		expect(p.parse("ສຸພາສິດ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ສພສ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lao)", () => {
		expect(p.parse("ປັນຍາຈານ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ປຍຈ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lao)", () => {
		expect(p.parse("ຍອດເພງ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ຍພ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lao)", () => {
		expect(p.parse("ເຢເຣມີຢາ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ຢມຢ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lao)", () => {
		expect(p.parse("ເອເຊກຽນ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ອຊກ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lao)", () => {
		expect(p.parse("ດານີເອນ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ດນອ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lao)", () => {
		expect(p.parse("ໂຮເສອາ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ຮສອ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lao)", () => {
		expect(p.parse("ໂຢເອນ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ຢອ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lao)", () => {
		expect(p.parse("ອາໂມດ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ອມ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lao)", () => {
		expect(p.parse("ໂອບາດີຢາ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ອບຢ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lao)", () => {
		expect(p.parse("ໂຢນາ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ຢນ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lao)", () => {
		expect(p.parse("ມີກາ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ມກ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lao)", () => {
		expect(p.parse("ນາຮູມ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ນຮ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lao)", () => {
		expect(p.parse("ຮາບາກຸກ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ຮບກ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lao)", () => {
		expect(p.parse("ເຊຟານີຢາ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ຊຟຢ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lao)", () => {
		expect(p.parse("ຮັກກາຍ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ຮກ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lao)", () => {
		expect(p.parse("ເຊກາຣີຢາ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ຊກຢ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lao)", () => {
		expect(p.parse("ມາລາກີ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ມລກ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lao)", () => {
		expect(p.parse("ມັດທາຍ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ມທ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lao)", () => {
		expect(p.parse("ມາຣະໂກ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ມຣກ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lao)", () => {
		expect(p.parse("ລູກາ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ລກ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lao)", () => {
		expect(p.parse("1ຢຮ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lao)", () => {
		expect(p.parse("2ຢຮ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lao)", () => {
		expect(p.parse("3 ໂຢຮັນ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ຢຮ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ຢຮ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lao)", () => {
		expect(p.parse("1 ໂຢຮັນ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ຢຮ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ໂຢຮັນ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ຢຮ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lao)", () => {
		expect(p.parse("2 ໂຢຮັນ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ຢຮ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ໂຢຮັນ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ຢຮ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lao)", () => {
		expect(p.parse("ໂຢຮັນ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ຢຮ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lao)", () => {
		expect(p.parse("ກິດຈະການ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ກຈກ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lao)", () => {
		expect(p.parse("ໂຣມ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ຣມ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lao)", () => {
		expect(p.parse("1 ໂກຣິນໂທ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ກຣທ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ໂກຣິນໂທ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ກຣທ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lao)", () => {
		expect(p.parse("2 ໂກຣິນໂທ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ກຣທ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ໂກຣິນໂທ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ກຣທ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lao)", () => {
		expect(p.parse("1ກຣທ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lao)", () => {
		expect(p.parse("2ກຣທ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lao)", () => {
		expect(p.parse("ໂກໂລຊາຍ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ກລຊ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lao)", () => {
		expect(p.parse("ຄາລາເຕຍ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ຄລຕ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lao)", () => {
		expect(p.parse("ເອເຟໂຊ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ອຟຊ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lao)", () => {
		expect(p.parse("ຟີລິບປອຍ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ຟລປ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lao)", () => {
		expect(p.parse("1 ເທສະໂລນິກ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ທສນ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ເທສະໂລນິກ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ທສນ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lao)", () => {
		expect(p.parse("2 ເທສະໂລນິກ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ທສນ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ເທສະໂລນິກ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ທສນ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lao)", () => {
		expect(p.parse("1ທສນ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lao)", () => {
		expect(p.parse("2ທສນ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lao)", () => {
		expect(p.parse("1 ຕີໂມທຽວ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ຕມທ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ຕີໂມທຽວ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ຕມທ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lao)", () => {
		expect(p.parse("2 ຕີໂມທຽວ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ຕມທ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ຕີໂມທຽວ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ຕມທ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lao)", () => {
		expect(p.parse("1ຕມທ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lao)", () => {
		expect(p.parse("2ຕມທ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lao)", () => {
		expect(p.parse("ຕີໂຕ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ຕຕ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lao)", () => {
		expect(p.parse("ຟີເລໂມນ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ຟລມ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lao)", () => {
		expect(p.parse("ເຮັບເຣີ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ຮຣ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lao)", () => {
		expect(p.parse("ຢາໂກໂບ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ຢກບ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lao)", () => {
		expect(p.parse("1 ເປໂຕ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ປຕ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ເປໂຕ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ປຕ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lao)", () => {
		expect(p.parse("2 ເປໂຕ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ປຕ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ເປໂຕ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ປຕ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lao)", () => {
		expect(p.parse("1ປຕ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lao)", () => {
		expect(p.parse("2ປຕ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lao)", () => {
		expect(p.parse("ຢູດາ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ຢດ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lao)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ຢຮ - 3 ໂຢຮັນ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ຢຮ – 3 ໂຢຮັນ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1ຢຮ — 3 ໂຢຮັນ").osis()).toEqual("1John.1-3John.1");
	});
});
