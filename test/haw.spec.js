"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/haw.js";

describe("Localized book Gen (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (haw)", () => {
		expect(p.parse("Ka Buke Mua A Mose, I Kapa ʻIa Kinohi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (haw)", () => {
		expect(p.parse("Ka Buke ʻAlua A Mose, I Kapa ʻIa Puka ʻAna 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (haw)", () => {
		expect(p.parse("Ka Buke ʻAkolu A Mose, I Kapa ʻIa ʻOihana Kahuna 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (haw)", () => {
		expect(p.parse("Ka Buke ʻAhā A Mose, I Kapa ʻIa Nā Helu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (haw)", () => {
		expect(p.parse("Ke Kanikau A Ieremia 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (haw)", () => {
		expect(p.parse("Ka Hōʻike ʻAna A Ioane Ka Haipule 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (haw)", () => {
		expect(p.parse("Ka Buke ʻAlima A Mose, I Kapa ʻIa Kānāwai Lua 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (haw)", () => {
		expect(p.parse("Ka Buke A Iosua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (haw)", () => {
		expect(p.parse("Ka Buke No Nā Luna Kānāwai 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (haw)", () => {
		expect(p.parse("Ka Buke No Ruta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (haw)", () => {
		expect(p.parse("Ka Wānana A ʻIsaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (haw)", () => {
		expect(p.parse("Ka Buke Mua A Samuʻela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ka. Buke Mua A Samuʻela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ʻO Buke Mua A Samuʻela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ʻO. Buke Mua A Samuʻela 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (haw)", () => {
		expect(p.parse("Ka Buke ʻAlua A Samuʻela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ka. Buke ʻAlua A Samuʻela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ʻO Buke ʻAlua A Samuʻela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ʻO. Buke ʻAlua A Samuʻela 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (haw)", () => {
		expect(p.parse("Ka Buke Mua No Nā Aliʻi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ka. Buke Mua No Nā Aliʻi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ʻO Buke Mua No Nā Aliʻi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ʻO. Buke Mua No Nā Aliʻi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (haw)", () => {
		expect(p.parse("Ka Buke ʻAlua No Nā Aliʻi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ka. Buke ʻAlua No Nā Aliʻi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ʻO Buke ʻAlua No Nā Aliʻi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ʻO. Buke ʻAlua No Nā Aliʻi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (haw)", () => {
		expect(p.parse("Ka Buke Mua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ka. Buke Mua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ʻO Buke Mua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ʻO. Buke Mua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (haw)", () => {
		expect(p.parse("Ka Buke ʻAlua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ka. Buke ʻAlua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ʻO Buke ʻAlua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ʻO. Buke ʻAlua O Ka ʻOihana Aliʻi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (haw)", () => {
		expect(p.parse("Ka Buke A ʻEzera 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (haw)", () => {
		expect(p.parse("Ka Buke A Nehemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (haw)", () => {
		expect(p.parse("Ka Buke No ʻEsetera 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (haw)", () => {
		expect(p.parse("Ka Buke No Ioba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (haw)", () => {
		expect(p.parse("Ka Buke O Nā Halelū 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (haw)", () => {
		expect(p.parse("Nā ʻŌlelo Akamai A Solomona 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (haw)", () => {
		expect(p.parse("Ke Kahuna 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (haw)", () => {
		expect(p.parse("Ke Mele A Solomona 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (haw)", () => {
		expect(p.parse("Ka Wānana A Ieremia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (haw)", () => {
		expect(p.parse("Ka Wānana A ʻEzekiʻela 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (haw)", () => {
		expect(p.parse("Ka Buke No Daniʻela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (haw)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (haw)", () => {
		expect(p.parse("Ioʻela 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (haw)", () => {
		expect(p.parse("ʻAmosa 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (haw)", () => {
		expect(p.parse("ʻObadia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (haw)", () => {
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (haw)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (haw)", () => {
		expect(p.parse("Nahuma 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (haw)", () => {
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (haw)", () => {
		expect(p.parse("Zepania 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (haw)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (haw)", () => {
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (haw)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (haw)", () => {
		expect(p.parse("Ka ʻEuanelio I Kākau ʻIa Ai E Mataio 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (haw)", () => {
		expect(p.parse("Ka ʻEuanelio I Kākau ʻIa Ai E Mareko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (haw)", () => {
		expect(p.parse("Ka ʻEuanelio I Kākau ʻIa Ai E Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Hoʻolaha Mua A Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Hoʻolaha Mua A Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Hoʻolaha Mua A Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Hoʻolaha Mua A Ioane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Lua A Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Lua A Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Lua A Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Lua A Ioane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole Kolu A Ioane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (haw)", () => {
		expect(p.parse("Ka ʻEuanelio I Kākau ʻIa Ai E Ioane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (haw)", () => {
		expect(p.parse("Nā ʻOihana A Ka Poʻe Lunaʻōlelo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Ka Lunaʻōlelo I Ko Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Korineto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Ka Lunaʻōlelo I Ko Kolosa 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Ka Lunaʻōlelo I Ko Galatia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Ka Lunaʻōlelo I Ko ʻEpeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Ka Lunaʻōlelo I Ko Pilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo I Ko Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Mua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Lua A Paulo Ka Lunaʻōlelo Iā Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Iā Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Iā Pilemona 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole A Paulo Ka Lunaʻōlelo I Ko Hebera 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole Hoʻolaha A Iakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Hoʻolaha Mua A Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Hoʻolaha Mua A Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Hoʻolaha Mua A Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Hoʻolaha Mua A Petero 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (haw)", () => {
		expect(p.parse("Ka Ka ʻEpisetole Hoʻolaha ʻAlua A Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ka. Ka ʻEpisetole Hoʻolaha ʻAlua A Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ʻO Ka ʻEpisetole Hoʻolaha ʻAlua A Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ʻO. Ka ʻEpisetole Hoʻolaha ʻAlua A Petero 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (haw)", () => {
		expect(p.parse("ʻO Ka ʻEpisetole Hoʻolaha A Iuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (haw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (haw)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Ka Ka ʻEpisetole Hoʻolaha Mua A Ioane - ʻO Ka ʻEpisetole Kolu A Ioane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Ka Ka ʻEpisetole Hoʻolaha Mua A Ioane – ʻO Ka ʻEpisetole Kolu A Ioane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Ka Ka ʻEpisetole Hoʻolaha Mua A Ioane — ʻO Ka ʻEpisetole Kolu A Ioane").osis()).toEqual("1John.1-3John.1");
	});
});
