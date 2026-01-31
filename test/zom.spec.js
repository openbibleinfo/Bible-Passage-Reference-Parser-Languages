"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zom.js";

describe("Localized book Gen (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (zom)", () => {
		expect(p.parse("Siemchilbu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Piancilna 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Piencilna 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Siem. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pien 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (zom)", () => {
		expect(p.parse("Paikhiatna 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Peikhietna 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pawtdohna 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pawt. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pei 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (zom)", () => {
		expect(p.parse("Siampi Laibu 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Siempu Laibu 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Siempudan 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Siempu. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Siem 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (zom)", () => {
		expect(p.parse("Gamlah Vana 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kisimnabu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Misimna 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kisim. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Gam 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (zom)", () => {
		expect(p.parse("Tamlawhna 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kaa La 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kaala. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kaala 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kaa 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (zom)", () => {
		expect(p.parse("Kilaakna 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kihilna 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kilahna 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kihil. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kln 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (zom)", () => {
		expect(p.parse("Thupiakkikna 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Danpiehnina 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Thuhilkiana 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Danp. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Thkna 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (zom)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (zom)", () => {
		expect(p.parse("Thukhente 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Vaihawmte 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thkn 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Vai. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (zom)", () => {
		expect(p.parse("Ruth. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (zom)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isai. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (zom)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (zom)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (zom)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (zom)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (zom)", () => {
		expect(p.parse("1 Kumpite 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Leengte 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Leeng. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kumpite 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Leengte 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Leeng. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (zom)", () => {
		expect(p.parse("2 Kumpite 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Leengte 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Leeng. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kumpite 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Leengte 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Leeng. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (zom)", () => {
		expect(p.parse("1Kum 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (zom)", () => {
		expect(p.parse("2Kum 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (zom)", () => {
		expect(p.parse("1 Khang Tangthu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Khangthute 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Khang. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Khang Tangthu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Khangthute 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Khang. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (zom)", () => {
		expect(p.parse("2 Khang Tangthu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Khangthute 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Khang. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Khang Tangthu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Khangthute 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Khang. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (zom)", () => {
		expect(p.parse("1Khg 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (zom)", () => {
		expect(p.parse("2Khg 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (zom)", () => {
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (zom)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (zom)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (zom)", () => {
		expect(p.parse("Job. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (zom)", () => {
		expect(p.parse("Phatna-late 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Lapite 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Late. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Late 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (zom)", () => {
		expect(p.parse("Paunakte 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thupilte 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Paunah 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thu. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pau 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (zom)", () => {
		expect(p.parse("Thuhilhna 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thugenpa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thuhilna 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thug. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thna 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (zom)", () => {
		expect(p.parse("Zailate’ Zaila 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solomon la 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sol 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (zom)", () => {
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (zom)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (zom)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (zom)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (zom)", () => {
		expect(p.parse("Joel. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (zom)", () => {
		expect(p.parse("Amos. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (zom)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (zom)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (zom)", () => {
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (zom)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (zom)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Haba. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (zom)", () => {
		expect(p.parse("Zephaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (zom)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (zom)", () => {
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (zom)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (zom)", () => {
		expect(p.parse("Matthew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zom)", () => {
		expect(p.parse("Mak. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zom)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zom)", () => {
		expect(p.parse("1Jhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zom)", () => {
		expect(p.parse("2Jhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zom)", () => {
		expect(p.parse("3 Johan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jhn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zom)", () => {
		expect(p.parse("1 Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zom)", () => {
		expect(p.parse("2 Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (zom)", () => {
		expect(p.parse("Johan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (zom)", () => {
		expect(p.parse("Sawltahte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nasepte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nasep. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sawl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (zom)", () => {
		expect(p.parse("Rome-te 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zom)", () => {
		expect(p.parse("1 Corinth-te 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinth-te 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zom)", () => {
		expect(p.parse("2 Corinth-te 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinth-te 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zom)", () => {
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zom)", () => {
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (zom)", () => {
		expect(p.parse("Colosse-te 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zom)", () => {
		expect(p.parse("Galatia-te 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zom)", () => {
		expect(p.parse("Ephesus-te 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephesa-te 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zom)", () => {
		expect(p.parse("Philippi-te 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zom)", () => {
		expect(p.parse("1 Thesalonica-te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesalonica-te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zom)", () => {
		expect(p.parse("2 Thesalonica-te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesalonica-te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zom)", () => {
		expect(p.parse("1Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zom)", () => {
		expect(p.parse("2Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zom)", () => {
		expect(p.parse("1 Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zom)", () => {
		expect(p.parse("2 Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zom)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zom)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (zom)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tita 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zom)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phile. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (zom)", () => {
		expect(p.parse("Hebrews 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrute 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrew 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (zom)", () => {
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zom)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zom)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zom)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zom)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (zom)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (zom)", () => {
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
