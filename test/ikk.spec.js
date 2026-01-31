"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ikk.js";

describe("Localized book Gen (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ikk)", () => {
		expect(p.parse("Jẹnẹsisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jẹn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ikk)", () => {
		expect(p.parse("Ọpụpụ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ọpụ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ikk)", () => {
		expect(p.parse("Lẹvitikọsụ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lẹv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ikk)", () => {
		expect(p.parse("Ọgụngụn 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ọgụ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ikk)", () => {
		expect(p.parse("Ẹkwan 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ẹkw 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ikk)", () => {
		expect(p.parse("Rẹvẹleshọnụ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rẹv 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ikk)", () => {
		expect(p.parse("Ditrọnọmi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dit 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ikk)", () => {
		expect(p.parse("Joshụa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ikk)", () => {
		expect(p.parse("Ndị Han Eṅẹn 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Eṅẹ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ikk)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ikk)", () => {
		expect(p.parse("Azaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ikk)", () => {
		expect(p.parse("Samuẹlụ Nke Ibuzọ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ikk)", () => {
		expect(p.parse("Samuẹlụ Nke Ẹbụọ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ikk)", () => {
		expect(p.parse("Ndị-nze Nke Ibuzọ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Nz 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ikk)", () => {
		expect(p.parse("Ndị-nze Nke Ẹbụọ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Nz 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ikk)", () => {
		expect(p.parse("Ihiẹn Mẹni Nke Ibuzọ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Hm 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ikk)", () => {
		expect(p.parse("Ihiẹn Mẹni Nke Ẹbụọ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Hm 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ikk)", () => {
		expect(p.parse("Ẹzra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ẹzr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ikk)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ikk)", () => {
		expect(p.parse("Ẹsta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ẹst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ikk)", () => {
		expect(p.parse("Jobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ikk)", () => {
		expect(p.parse("Itẹn 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Itẹ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ikk)", () => {
		expect(p.parse("Ẹkịliziastisi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ẹkị 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ikk)", () => {
		expect(p.parse("Ẹbụ Solomọnụ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ẹbs 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ikk)", () => {
		expect(p.parse("Ẹbụ-ọma 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ẹbụ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ikk)", () => {
		expect(p.parse("Jerimaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ikk)", () => {
		expect(p.parse("Izikẹlụ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ikk)", () => {
		expect(p.parse("Daniẹlụ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ikk)", () => {
		expect(p.parse("Hosia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ikk)", () => {
		expect(p.parse("Juwẹlụ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Juẹ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ikk)", () => {
		expect(p.parse("Emọsụ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Emọ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ikk)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ikk)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ikk)", () => {
		expect(p.parse("Maịka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Maị 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ikk)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ikk)", () => {
		expect(p.parse("Habakọkụ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ikk)", () => {
		expect(p.parse("Zẹfanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zẹf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ikk)", () => {
		expect(p.parse("Hagaị 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ikk)", () => {
		expect(p.parse("Zẹkaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zẹk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ikk)", () => {
		expect(p.parse("Malakaị 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ikk)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ikk)", () => {
		expect(p.parse("Makị 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ikk)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ikk)", () => {
		expect(p.parse("Jọnụ Ibuzọ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ikk)", () => {
		expect(p.parse("Jọnụ Nke Ẹbụọ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ikk)", () => {
		expect(p.parse("Jọnụ Nke Ẹtọ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ikk)", () => {
		expect(p.parse("Jọnụ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ikk)", () => {
		expect(p.parse("Ọrụn Ndị-ozi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ọrụn 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ikk)", () => {
		expect(p.parse("Ndị Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ikk)", () => {
		expect(p.parse("Ndị Kọrẹntị Ibuzọ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ndị. Kọrẹntị Ibuzọ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ikk)", () => {
		expect(p.parse("1Kọ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ikk)", () => {
		expect(p.parse("Ndị Kọrẹntị Nke Ẹbụọ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ndị. Kọrẹntị Nke Ẹbụọ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ikk)", () => {
		expect(p.parse("2Kọ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ikk)", () => {
		expect(p.parse("Ndị Kolosị 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ikk)", () => {
		expect(p.parse("Ndị Galeshịa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ikk)", () => {
		expect(p.parse("Ndị Ẹfẹsọsụ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹfẹ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ikk)", () => {
		expect(p.parse("Ndị Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ikk)", () => {
		expect(p.parse("Ndị Tẹsalonika Ibuzọ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ndị. Tẹsalonika Ibuzọ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ikk)", () => {
		expect(p.parse("1Tẹ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ikk)", () => {
		expect(p.parse("Ndị Tẹsalonika Nke Ẹbụọ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ndị. Tẹsalonika Nke Ẹbụọ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ikk)", () => {
		expect(p.parse("2Tẹ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ikk)", () => {
		expect(p.parse("Timoti Ibuzọ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ikk)", () => {
		expect(p.parse("Timoti Nke Ẹbụọ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ikk)", () => {
		expect(p.parse("Taịtọsụ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Taị 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ikk)", () => {
		expect(p.parse("Filemọnụ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ikk)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ikk)", () => {
		expect(p.parse("Jemisi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ikk)", () => {
		expect(p.parse("Pita Ibuzọ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ikk)", () => {
		expect(p.parse("Pita Nke Ẹbụọ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ikk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ikk)", () => {
		expect(p.parse("Judu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
