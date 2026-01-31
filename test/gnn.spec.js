"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gnn.js";

describe("Localized book Gen (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gnn)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gnn)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gnn)", () => {
		expect(p.parse("Buku-ŋal'yunarawuynha rom 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gnn)", () => {
		expect(p.parse("Ŋanhdharkpuy dhäwu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gnn)", () => {
		expect(p.parse("Godkuŋu Warraŋulkunharana 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gnn)", () => {
		expect(p.parse("Deuteronomy 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gnn)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Ruth (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gnn)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gnn)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book Ezra (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gnn)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gnn)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gnn)", () => {
		expect(p.parse("Djawupkalaŋuwuy dhäwu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gnn)", () => {
		expect(p.parse("Psalms 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gnn)", () => {
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gnn)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gnn)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gnn)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gnn)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gnn)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gnn)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gnn)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gnn)", () => {
		expect(p.parse("Micah 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Hab (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gnn)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zech (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gnn)", () => {
		expect(p.parse("Zechariah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gnn)", () => {
		expect(p.parse("Malachi 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gnn)", () => {
		expect(p.parse("Mathuyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gnn)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gnn)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gnn)", () => {
		expect(p.parse("Djonguŋu Namba 1 Dhäruk Djuy'yunara 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gnn)", () => {
		expect(p.parse("Djonguŋu Namba 2Na Dhäruk Djuy'yunara 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gnn)", () => {
		expect(p.parse("Djonguŋu Namba 3Na Dhäruk Djuy'yunara 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gnn)", () => {
		expect(p.parse("Djon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gnn)", () => {
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gnn)", () => {
		expect(p.parse("Rawumbuyŋuwu Dhäruk 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gnn)", () => {
		expect(p.parse("1 Corinthians 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gnn)", () => {
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gnn)", () => {
		expect(p.parse("Gulutjilili Dhäruk 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gnn)", () => {
		expect(p.parse("Galatjiyapuyŋuwu Dhäruk 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gnn)", () => {
		expect(p.parse("Yipatjatjlili Dhäruk 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gnn)", () => {
		expect(p.parse("Bilipaypuyŋuwu Dhäruk 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gnn)", () => {
		expect(p.parse("Dhatjalunikapuyŋuwu Namba 1 Dhäruk Dhatjalunikalili Dhäruk Djuy'yunara Bolwuŋu 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gnn)", () => {
		expect(p.parse("Dhatjalunikapuyŋuwu Namba 2 Dhäruk 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gnn)", () => {
		expect(p.parse("Dimithiwu Namba 1 Dhäruk 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gnn)", () => {
		expect(p.parse("Dimithiwu Namba 2Na Dhäruk 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gnn)", () => {
		expect(p.parse("Dätitjku Dhäruk 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gnn)", () => {
		expect(p.parse("Bilamungu Dhäruk 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gnn)", () => {
		expect(p.parse("Yipuruwu Malawu Dhäruk 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gnn)", () => {
		expect(p.parse("Djayimguŋu Dhäruk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gnn)", () => {
		expect(p.parse("Betawuŋu Namba 1 Dhäruk 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gnn)", () => {
		expect(p.parse("Betawuŋu Namba 2Na Dhäruk Djuy'yunara 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gnn)", () => {
		expect(p.parse("Djotkuŋu Dhäruk 1:1").osis()).toEqual("Jude.1.1");
	});
});
