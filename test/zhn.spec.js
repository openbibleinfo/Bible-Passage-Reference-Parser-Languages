"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zhn.js";

describe("Localized book Gen (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (zhn)", () => {
		expect(p.parse("Zwz Nduq 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (zhn)", () => {
		expect(p.parse("Ni Aizjih 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (zhn)", () => {
		expect(p.parse("Aj Hawj Ruxndeq 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (zhn)", () => {
		expect(p.parse("Yezsuzyaq 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (zhn)", () => {
		expect(p.parse("Puj Saeq 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (zhn)", () => {
		expect(p.parse("Luqdowh 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Sam (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (zhn)", () => {
		expect(p.parse("Saxmuxex Aet 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (zhn)", () => {
		expect(p.parse("Saxmuxex Ngih 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (zhn)", () => {
		expect(p.parse("Laux Hongz Aet 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (zhn)", () => {
		expect(p.parse("Laux Hongz Ngih 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Esth (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (zhn)", () => {
		expect(p.parse("Yixsezteh 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Ps (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (zhn)", () => {
		expect(p.parse("Lownx 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Dan (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (zhn)", () => {
		expect(p.parse("Danqyixlix 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (zhn)", () => {
		expect(p.parse("Yeznah 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Hab (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (zhn)", () => {
		expect(p.parse("Hazbazguh 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Matt (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (zhn)", () => {
		expect(p.parse("Maxtaiq 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zhn)", () => {
		expect(p.parse("Maxkowh 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zhn)", () => {
		expect(p.parse("Luhzaz 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zhn)", () => {
		expect(p.parse("Yezhanq Aet 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zhn)", () => {
		expect(p.parse("Yezhanq Ngih 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zhn)", () => {
		expect(p.parse("Yezhanq Sam 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (zhn)", () => {
		expect(p.parse("Yezhanq 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (zhn)", () => {
		expect(p.parse("Zawxkauq 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (zhn)", () => {
		expect(p.parse("Loahmax 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zhn)", () => {
		expect(p.parse("Goazlinhdoz Aet 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zhn)", () => {
		expect(p.parse("Goazlinhdoz Ngih 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (zhn)", () => {
		expect(p.parse("Goazloahciz 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zhn)", () => {
		expect(p.parse("Zazlaztaiq 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zhn)", () => {
		expect(p.parse("Yixfuhsoax 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zhn)", () => {
		expect(p.parse("Faezlihbix 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zhn)", () => {
		expect(p.parse("Tehsaxloahnihzaz Aet 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zhn)", () => {
		expect(p.parse("Tehsaxloahnihzaz Ngih 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zhn)", () => {
		expect(p.parse("Tihmoaxtaiq Aet 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zhn)", () => {
		expect(p.parse("Tihmoaxtaiq Ngih 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (zhn)", () => {
		expect(p.parse("Tihdoz 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zhn)", () => {
		expect(p.parse("Faezliqmaenh 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (zhn)", () => {
		expect(p.parse("Cizboahlaiz 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (zhn)", () => {
		expect(p.parse("Yaqgowh 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zhn)", () => {
		expect(p.parse("Pihdowh Aet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zhn)", () => {
		expect(p.parse("Pihdowh Ngih 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (zhn)", () => {
		expect(p.parse("Yaeuhdaq 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (zhn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (zhn)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yezhanq Aet - Yezhanq Sam").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yezhanq Aet – Yezhanq Sam").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yezhanq Aet — Yezhanq Sam").osis()).toEqual("1John.1-3John.1");
	});
});
