"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lwg.js";

describe("Localized book Gen (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lwg)", () => {
		expect(p.parse("Obuchachilo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Obucha. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lwg)", () => {
		expect(p.parse("Okhurula 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Okhur. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lwg)", () => {
		expect(p.parse("Abalawi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Abal. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lwg)", () => {
		expect(p.parse("Obubali 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Obub. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (lwg)", () => {
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (lwg)", () => {
		expect(p.parse("Obuchesi Obwa Solomoni 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Obuch. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lwg)", () => {
		expect(p.parse("Tsinzikhuulo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tsinz. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lwg)", () => {
		expect(p.parse("Obufwimbuli 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Obufw. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lwg)", () => {
		expect(p.parse("Okhukalushila Mumalako Ka Musa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Okhuk. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lwg)", () => {
		expect(p.parse("Yoshwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lwg)", () => {
		expect(p.parse("Abayaasi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abay. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lwg)", () => {
		expect(p.parse("Ruts. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rutsi 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lwg)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lwg)", () => {
		expect(p.parse("1 Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lwg)", () => {
		expect(p.parse("2 Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lwg)", () => {
		expect(p.parse("1 Abaruchi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Abar. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abaruchi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abar. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lwg)", () => {
		expect(p.parse("2 Abaruchi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Abar. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abaruchi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abar. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lwg)", () => {
		expect(p.parse("1 Akakhale 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Akak. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Akakhale 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Akak. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lwg)", () => {
		expect(p.parse("2 Akakhale 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Akak. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Akakhale 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Akak. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lwg)", () => {
		expect(p.parse("Ezira 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lwg)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lwg)", () => {
		expect(p.parse("Ayub. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayubu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lwg)", () => {
		expect(p.parse("Tsitsabuli 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Tsits. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lwg)", () => {
		expect(p.parse("Tsinjelo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tsinj. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lwg)", () => {
		expect(p.parse("Omwibaali 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Omwi. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lwg)", () => {
		expect(p.parse("Olwimbo Olukhulundu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Olwi. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lwg)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lwg)", () => {
		expect(p.parse("Ezekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lwg)", () => {
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lwg)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lwg)", () => {
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lwg)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lwg)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lwg)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lwg)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lwg)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lwg)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lwg)", () => {
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lwg)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lwg)", () => {
		expect(p.parse("Zakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lwg)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lwg)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lwg)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lwg)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lwg)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lwg)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lwg)", () => {
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lwg)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lwg)", () => {
		expect(p.parse("Ebikhole Bia Abarume 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebikh. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lwg)", () => {
		expect(p.parse("Abaroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Abaro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lwg)", () => {
		expect(p.parse("1 Abakorinzo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Abakor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakorinzo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lwg)", () => {
		expect(p.parse("2 Abakorinzo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Abakor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakorinzo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lwg)", () => {
		expect(p.parse("Abakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Abakol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lwg)", () => {
		expect(p.parse("Abagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Abagal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lwg)", () => {
		expect(p.parse("Abaefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Abaef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lwg)", () => {
		expect(p.parse("Abafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Abafil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lwg)", () => {
		expect(p.parse("1 Abatsesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abats. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abatsesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abats. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lwg)", () => {
		expect(p.parse("2 Abatsesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abats. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abatsesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abats. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lwg)", () => {
		expect(p.parse("1 Timotseyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotseyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lwg)", () => {
		expect(p.parse("2 Timotseyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotseyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lwg)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lwg)", () => {
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lwg)", () => {
		expect(p.parse("Abaheburania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abaheb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lwg)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lwg)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lwg)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lwg)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (lwg)", () => {
		expect(p.parse("Tobiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (lwg)", () => {
		expect(p.parse("Yuditsi 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudt. 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (lwg)", () => {
		expect(p.parse("Baruku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar. 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lwg)", () => {
		expect(p.parse("1 Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak. 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lwg)", () => {
		expect(p.parse("2 Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak. 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (lwg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lwg)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
