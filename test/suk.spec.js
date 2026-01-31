"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/suk.js";

describe("Localized book Gen (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (suk)", () => {
		expect(p.parse("wandījo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Wan 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (suk)", () => {
		expect(p.parse("Kūfuma 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kūf 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (suk)", () => {
		expect(p.parse("Bagabīji 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Bag 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (suk)", () => {
		expect(p.parse("Kūbala 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kūb 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (suk)", () => {
		expect(p.parse("Ng'hūngū 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ng'h 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (suk)", () => {
		expect(p.parse("Kūkundūlīlwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kukundulwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kk. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kūk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (suk)", () => {
		expect(p.parse("Kūshokeela 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kūs 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (suk)", () => {
		expect(p.parse("Yoshwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (suk)", () => {
		expect(p.parse("Balamuji 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bal 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (suk)", () => {
		expect(p.parse("Luuzi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Luz 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (suk)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (suk)", () => {
		expect(p.parse("1 Sang'weli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sang'weli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (suk)", () => {
		expect(p.parse("2 Sang'weli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sang'weli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (suk)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (suk)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (suk)", () => {
		expect(p.parse("1 Batemi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Batemi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (suk)", () => {
		expect(p.parse("2 Batemi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Batemi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (suk)", () => {
		expect(p.parse("1Ba 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (suk)", () => {
		expect(p.parse("2Ba 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (suk)", () => {
		expect(p.parse("1 Mihayo ya Shikū 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mihayo ya Shikū 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (suk)", () => {
		expect(p.parse("2 Mihayo ya Shikū 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mihayo ya Shikū 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (suk)", () => {
		expect(p.parse("1Mi 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (suk)", () => {
		expect(p.parse("2Mi 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (suk)", () => {
		expect(p.parse("Ezila 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (suk)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (suk)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esi 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (suk)", () => {
		expect(p.parse("Ayubu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (suk)", () => {
		expect(p.parse("Zabuli 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (suk)", () => {
		expect(p.parse("Sumo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sum 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (suk)", () => {
		expect(p.parse("Nomeji 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nom 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (suk)", () => {
		expect(p.parse("Lyīmbo lya ng'wa Solomoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lyi 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (suk)", () => {
		expect(p.parse("Yelemia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (suk)", () => {
		expect(p.parse("Ezekia 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (suk)", () => {
		expect(p.parse("Danyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (suk)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (suk)", () => {
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (suk)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (suk)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (suk)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (suk)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (suk)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (suk)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (suk)", () => {
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (suk)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (suk)", () => {
		expect(p.parse("Zakalia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (suk)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (suk)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (suk)", () => {
		expect(p.parse("Maliko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (suk)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (suk)", () => {
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (suk)", () => {
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (suk)", () => {
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (suk)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (suk)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (suk)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (suk)", () => {
		expect(p.parse("Shītwa sha Batūng'wa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Shitwa Sha Batungʼwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Shītwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Shi. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Shī 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (suk)", () => {
		expect(p.parse("Balumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Barumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Blm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Br. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (suk)", () => {
		expect(p.parse("1 Bakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bkr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bkr. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (suk)", () => {
		expect(p.parse("2 Bakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bkr. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bkr. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (suk)", () => {
		expect(p.parse("1Bko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Bk 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (suk)", () => {
		expect(p.parse("2Bko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Bk 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (suk)", () => {
		expect(p.parse("BaKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bkl. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bkl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (suk)", () => {
		expect(p.parse("BaGalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Baga 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bgl. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (suk)", () => {
		expect(p.parse("BaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Baef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Bfe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (suk)", () => {
		expect(p.parse("BaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bfl. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bfi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (suk)", () => {
		expect(p.parse("1 Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Batesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bth. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bathesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Batesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bth. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (suk)", () => {
		expect(p.parse("2 Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Batesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bth. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bathesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Batesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bth. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (suk)", () => {
		expect(p.parse("1Bte 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Bt 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (suk)", () => {
		expect(p.parse("2Bte 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Bt 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (suk)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tm. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (suk)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tm. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (suk)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (suk)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (suk)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (suk)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (suk)", () => {
		expect(p.parse("Bahebulania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bahebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bah. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bah 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (suk)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yk. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (suk)", () => {
		expect(p.parse("1 Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (suk)", () => {
		expect(p.parse("2 Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (suk)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (suk)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (suk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (suk)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
