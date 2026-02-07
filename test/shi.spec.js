"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/shi.js";

describe("Localized book Gen (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (shi)", () => {
		expect(p.parse("isizwur 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (shi)", () => {
		expect(p.parse("ufuġ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (shi)", () => {
		expect(p.parse("ayt‑lawi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (shi)", () => {
		expect(p.parse("tasutin 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (shi)", () => {
		expect(p.parse("ismummʷin 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (shi)", () => {
		expect(p.parse("anurẓm 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("انورژم 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (shi)", () => {
		expect(p.parse("tinbaḍin 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (shi)", () => {
		expect(p.parse("yahušuɛ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (shi)", () => {
		expect(p.parse("iriyasn 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (shi)", () => {
		expect(p.parse("raɛut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (shi)", () => {
		expect(p.parse("išaɛyah 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (shi)", () => {
		expect(p.parse("1 ṣamwil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ṣamwil 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (shi)", () => {
		expect(p.parse("2 ṣamwil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ṣamwil 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (shi)", () => {
		expect(p.parse("1 igldan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. igldan 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (shi)", () => {
		expect(p.parse("2 igldan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. igldan 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (shi)", () => {
		expect(p.parse("1 uwssan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. uwssan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (shi)", () => {
		expect(p.parse("2 uwssan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. uwssan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (shi)", () => {
		expect(p.parse("ɛazra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (shi)", () => {
		expect(p.parse("naḥamyah 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (shi)", () => {
		expect(p.parse("astir 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (shi)", () => {
		expect(p.parse("Ayyub 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (shi)", () => {
		expect(p.parse("imurign 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (shi)", () => {
		expect(p.parse("imrwasn 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (shi)", () => {
		expect(p.parse("amslmd 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (shi)", () => {
		expect(p.parse("tallġat n‑suliman 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (shi)", () => {
		expect(p.parse("irmiyah 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (shi)", () => {
		expect(p.parse("iḥazqyal 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (shi)", () => {
		expect(p.parse("danyal 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (shi)", () => {
		expect(p.parse("hušaɛ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (shi)", () => {
		expect(p.parse("yuwil 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (shi)", () => {
		expect(p.parse("ɛamus 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (shi)", () => {
		expect(p.parse("ɛubadyah 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (shi)", () => {
		expect(p.parse("yunah 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (shi)", () => {
		expect(p.parse("mih̬ah 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (shi)", () => {
		expect(p.parse("Naḥum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (shi)", () => {
		expect(p.parse("ḥabaqquq 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (shi)", () => {
		expect(p.parse("ṣafanyah 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (shi)", () => {
		expect(p.parse("ḥaggay 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (shi)", () => {
		expect(p.parse("zakaryah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (shi)", () => {
		expect(p.parse("malah̬i 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (shi)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ماتّا 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (shi)", () => {
		expect(p.parse("Marqus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مارقُس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (shi)", () => {
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (shi)", () => {
		expect(p.parse("1 Yuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يوحانّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يوحانّا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (shi)", () => {
		expect(p.parse("2 Yuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يوحانّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يوحانّا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (shi)", () => {
		expect(p.parse("3 Yuḥanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يوحانّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuḥanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. يوحانّا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (shi)", () => {
		expect(p.parse("Yuḥanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوحانّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (shi)", () => {
		expect(p.parse("irqqasn 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("يرقّاسن 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (shi)", () => {
		expect(p.parse("Ruma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روما 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (shi)", () => {
		expect(p.parse("1 Kurintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 كورينتوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كورينتوس 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (shi)", () => {
		expect(p.parse("2 Kurintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 كورينتوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كورينتوس 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (shi)", () => {
		expect(p.parse("Kulussi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كولوسّي 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (shi)", () => {
		expect(p.parse("galaṭiyya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گالاطيّا 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (shi)", () => {
		expect(p.parse("afsus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افسوس 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (shi)", () => {
		expect(p.parse("Filibbi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيليبّي 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (shi)", () => {
		expect(p.parse("1 tasaluniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تاسالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. tasaluniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تاسالونيكي 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (shi)", () => {
		expect(p.parse("2 tasaluniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تاسالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. tasaluniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تاسالونيكي 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (shi)", () => {
		expect(p.parse("1 timutaws 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. timutaws 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (shi)", () => {
		expect(p.parse("2 timutaws 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. timutaws 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (shi)", () => {
		expect(p.parse("tiṭus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيطوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (shi)", () => {
		expect(p.parse("Filimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فيليمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (shi)", () => {
		expect(p.parse("iɛbrin 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("يعبرين 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (shi)", () => {
		expect(p.parse("yaɛqub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ياعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (shi)", () => {
		expect(p.parse("1 bṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بطرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. bṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بطرُس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (shi)", () => {
		expect(p.parse("2 bṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بطرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. bṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بطرُس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (shi)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ياهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (shi)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (shi)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (shi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (shi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuḥanna - 3 Yuḥanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuḥanna – 3 Yuḥanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuḥanna — 3 Yuḥanna").osis()).toEqual("1John.1-3John.1");
	});
});
