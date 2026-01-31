"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/crk.js";

describe("Localized book Gen (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (crk)", () => {
		expect(p.parse("cēnisis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ᒉᓂᓯᐢ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (crk)", () => {
		expect(p.parse("ēksatas 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ᐁᐠᓴᑕᐢ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (crk)", () => {
		expect(p.parse("lipitikas 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ᓬᐃᐱᑎᑲᐢ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (crk)", () => {
		expect(p.parse("nampars 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ᓇᒼᐸᕒᐢ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (crk)", () => {
		expect(p.parse("mihtātwēwina 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ᒥᐦᑖᑌᐧᐃᐧᓇ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (crk)", () => {
		expect(p.parse("kiskēyihtākohkēwin 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ᑭᐢᑫᔨᐦᑖᑯᐦᑫᐃᐧᐣ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (crk)", () => {
		expect(p.parse("tiyotaranami 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ᑎᔪᑕᕒᐊᓇᒥ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (crk)", () => {
		expect(p.parse("cāsyoa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ᒑᐢᔪᐊ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (crk)", () => {
		expect(p.parse("oyasowēwak 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ᐅᔭᓱᐁᐧᐊᐧᐠ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (crk)", () => {
		expect(p.parse("roht 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ᕒᐅᐦᐟ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (crk)", () => {
		expect(p.parse("aysāya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ᐊᐩᓵᔭ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (crk)", () => {
		expect(p.parse("1 sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("nistam sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("nistam ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("nistam. sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("nistam. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᑦ sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᒼ sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. sāmyoil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (crk)", () => {
		expect(p.parse("2 sāmyoil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. sāmyoil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("nīswāw sāmyoil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("nīswāw ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("nīswāw. sāmyoil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("nīswāw. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ᓃᓵᐧᐤ sāmyoil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. sāmyoil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᓵᒼᔪᐃᓬ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (crk)", () => {
		expect(p.parse("1 kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("nistam kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("nistam ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("nistam. kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("nistam. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᑦ kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᒼ kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. kihci okimāwak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (crk)", () => {
		expect(p.parse("2 kihci okimāwak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. kihci okimāwak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("nīswāw kihci okimāwak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("nīswāw ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("nīswāw. kihci okimāwak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("nīswāw. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ᓃᓵᐧᐤ kihci okimāwak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. kihci okimāwak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᑭᐦᒋ ᐅᑭᒫᐊᐧᐠ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (crk)", () => {
		expect(p.parse("1 akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("nistam akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("nistam ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("nistam. akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("nistam. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᑦ akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᒼ akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. akinē ācimowina 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (crk)", () => {
		expect(p.parse("2 akinē ācimowina 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. akinē ācimowina 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("nīswāw akinē ācimowina 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("nīswāw ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("nīswāw. akinē ācimowina 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("nīswāw. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ᓃᓵᐧᐤ akinē ācimowina 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. akinē ācimowina 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᐊᑭᓀ ᐋᒋᒧᐃᐧᓇ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (crk)", () => {
		expect(p.parse("ēsra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ᐁᐢᕒᐊ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (crk)", () => {
		expect(p.parse("nihimāya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ᓂᐦᐃᒫᔭ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (crk)", () => {
		expect(p.parse("ēstar 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ᐁᐢᑕᕒ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (crk)", () => {
		expect(p.parse("cop 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ᒍᑊ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (crk)", () => {
		expect(p.parse("kakēhtāwēwina 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ᑲᑫᐦᑖᐁᐧᐃᐧᓇ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (crk)", () => {
		expect(p.parse("ikilisiyāstis 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ᐃᑭᓬᐃᓯᔮᐢᑎᐢ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (crk)", () => {
		expect(p.parse("nikamona o nikamon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ᓂᑲᒧᓇ ᐅ ᓂᑲᒧᐣ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (crk)", () => {
		expect(p.parse("Nikamowina 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nikumoona 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("nikamona 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ᓂᑲᒧᓇ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psa 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (crk)", () => {
		expect(p.parse("cērimāya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ᒉᕒᐃᒫᔭ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (crk)", () => {
		expect(p.parse("isikiēl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ᐃᓯᑭᐁᓬ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (crk)", () => {
		expect(p.parse("tāniēl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ᑖᓂᐁᓬ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (crk)", () => {
		expect(p.parse("hāsiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ᐦᐋᓯᔭ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (crk)", () => {
		expect(p.parse("coil 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ᒍᐃᓬ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (crk)", () => {
		expect(p.parse("ēmās 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ᐁᒫᐢ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (crk)", () => {
		expect(p.parse("opatāya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ᐅᐸᑖᔭ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (crk)", () => {
		expect(p.parse("cōna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ᒎᓇ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (crk)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ᒪᐃᑲ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (crk)", () => {
		expect(p.parse("nēham 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ᓀᐦᐊᒼ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (crk)", () => {
		expect(p.parse("hāpākak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ᐦᐋᐹᑲᐠ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (crk)", () => {
		expect(p.parse("sēpanāya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ᓭᐸᓈᔭ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (crk)", () => {
		expect(p.parse("hakēay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ᐦᐊᑫᐊᐩ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (crk)", () => {
		expect(p.parse("sēkarāya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ᓭᑲᕒᐋᔭ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (crk)", () => {
		expect(p.parse("mālakay 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ᒫᓬᐊᑲᐩ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (crk)", () => {
		expect(p.parse("Oo Meyo Achimoowin St Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("sēnt mātyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᓭᐣᐟ ᒫᐟᔪ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("mātyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᐟᔪ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (crk)", () => {
		expect(p.parse("Oo Meyo Achimoowin St Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("sēnt mārk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᓭᐣᐟ ᒫᕒᐠ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("mārk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᕒᐠ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (crk)", () => {
		expect(p.parse("sēnt lok 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓭᐣᐟ ᓬᐅᐠ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lok 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓬᐅᐠ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (crk)", () => {
		expect(p.parse("Nistum Oo Mamowe Mussina̔humakāwin John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 3John (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (crk)", () => {
		expect(p.parse("nistwāw cān 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ᓂᐢᑖᐧᐤ ᒑᐣ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 cān 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ᒑᐣ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (crk)", () => {
		expect(p.parse("Oo Meyo Achimoowin St John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("sēnt cān 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᓭᐣᐟ ᒑᐣ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("cān 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᒑᐣ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (crk)", () => {
		expect(p.parse("1 cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("nistam cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("nistam ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("nistam. cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("nistam. ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᑦ cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᒼ cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. cān 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᒑᐣ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (crk)", () => {
		expect(p.parse("2 cān 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ᒑᐣ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. cān 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ᒑᐣ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("nīswāw cān 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("nīswāw ᒑᐣ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("nīswāw. cān 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("nīswāw. ᒑᐣ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᓵᐧᐤ cān 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᒑᐣ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. cān 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᒑᐣ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (crk)", () => {
		expect(p.parse("isihcikēwiniwāwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᐃᓯᐦᒋᑫᐃᐧᓂᐋᐧᐊᐧ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (crk)", () => {
		expect(p.parse("Romana 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ᕒᐅᒪᓇ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (crk)", () => {
		expect(p.parse("1 karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("nistam karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("nistam ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("nistam. karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("nistam. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᑦ karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᒼ karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. karintiyana 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (crk)", () => {
		expect(p.parse("2 karintiyana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. karintiyana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("nīswāw karintiyana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("nīswāw ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("nīswāw. karintiyana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("nīswāw. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᓵᐧᐤ karintiyana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. karintiyana 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᑲᕒᐃᐣᑎᔭᓇ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (crk)", () => {
		expect(p.parse("kalāsiyana 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᑲᓬᐋᓯᔭᓇ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (crk)", () => {
		expect(p.parse("kalēsiyana 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᑲᓬᐁᓯᔭᓇ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (crk)", () => {
		expect(p.parse("ipisiyana 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ᐃᐱᓯᔭᓇ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (crk)", () => {
		expect(p.parse("pilipiyana 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᐱᓬᐃᐱᔭᓇ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (crk)", () => {
		expect(p.parse("1 tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("nistam tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("nistam ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("nistam. tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("nistam. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᑦ tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᒼ tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. tēsalāniyana 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (crk)", () => {
		expect(p.parse("2 tēsalāniyana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. tēsalāniyana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("nīswāw tēsalāniyana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("nīswāw ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("nīswāw. tēsalāniyana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("nīswāw. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᓵᐧᐤ tēsalāniyana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. tēsalāniyana 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᑌᓴᓬᐋᓂᔭᓇ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (crk)", () => {
		expect(p.parse("1 timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("nistam timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("nistam ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("nistam. timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("nistam. ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᑦ timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᒼ timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. timatī 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᑎᒪᑏ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (crk)", () => {
		expect(p.parse("2 timatī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ᑎᒪᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. timatī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ᑎᒪᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("nīswāw timatī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("nīswāw ᑎᒪᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("nīswāw. timatī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("nīswāw. ᑎᒪᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᓵᐧᐤ timatī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᑎᒪᑏ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. timatī 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᑎᒪᑏ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (crk)", () => {
		expect(p.parse("tāitas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᑖᐃᑕᐢ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (crk)", () => {
		expect(p.parse("pāiliman 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᐹᐃᓬᐃᒪᐣ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (crk)", () => {
		expect(p.parse("hiparowa 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ᐦᐃᐸᕒᐅᐊᐧ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (crk)", () => {
		expect(p.parse("cēmis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ᒉᒥᐢ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (crk)", () => {
		expect(p.parse("1 pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("nistam pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("nistam Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("nistam ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("nistam. pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("nistam. Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("nistam. ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᑦ pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᑦ Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᑦ ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᑦ. ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᒼ pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᒼ Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᒼ ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. Pitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ᓂᐢᑕᒼ. ᐱᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (crk)", () => {
		expect(p.parse("2 pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ᐱᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ᐱᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("nīswāw pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("nīswāw Pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("nīswāw ᐱᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("nīswāw. pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("nīswāw. Pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("nīswāw. ᐱᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᓵᐧᐤ pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᓵᐧᐤ Pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᓵᐧᐤ ᐱᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. Pitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ᓃᓵᐧᐤ. ᐱᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (crk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (crk)", () => {
		expect(p.parse("cot 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ᒍᐟ 1:1").osis()).toEqual("Jude.1.1");
	});
});
