"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ram.js";

describe("Localized book Gen (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ram)", () => {
		expect(p.parse("Kam To Ihtẽm Xà 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kam 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ram)", () => {
		expect(p.parse("Me Cator Xà 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Cat 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Num (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ram)", () => {
		expect(p.parse("Me Cahyt Xà 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Cah 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ram)", () => {
		expect(p.parse("Ipipẽ Xà 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ip 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ram)", () => {
		expect(p.parse("Cute Me To Ihhimpej Xà 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Cut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ram)", () => {
		expect(p.parse("Jojuw 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joj 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ram)", () => {
		expect(p.parse("Me To Ihhimpej Catêjê 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ih 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ram)", () => {
		expect(p.parse("Rutikwỳj 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ram)", () => {
		expect(p.parse("Ixaj 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ram)", () => {
		expect(p.parse("1 Xamer 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Xam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xamer 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Xam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ram)", () => {
		expect(p.parse("2 Xamer 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Xam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xamer 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Xam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ram)", () => {
		expect(p.parse("1 Pahhi Catêjê 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Pah 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Pahhi Catêjê 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Pah 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ram)", () => {
		expect(p.parse("2 Pahhi Catêjê 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Pah 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Pahhi Catêjê 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Pah 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Chr (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ram)", () => {
		expect(p.parse("2 Me Hũjarẽn Xà 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Hũ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Me Hũjarẽn Xà 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Hũ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ram)", () => {
		expect(p.parse("Extra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Job (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ram)", () => {
		expect(p.parse("Jo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ram)", () => {
		expect(p.parse("Mencrer Xà 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Men 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ram)", () => {
		expect(p.parse("Me Hapackre Xà 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Me Hap 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jer (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ram)", () => {
		expect(p.parse("Jeremij 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Dan (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ram)", () => {
		expect(p.parse("Taner 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ram)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Hab (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ram)", () => {
		expect(p.parse("Hapakuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hap 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Matt (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ram)", () => {
		expect(p.parse("Matew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ram)", () => {
		expect(p.parse("Macô 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ram)", () => {
		expect(p.parse("Ruc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ram)", () => {
		expect(p.parse("1 Jowãw 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jowãw 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ram)", () => {
		expect(p.parse("2 Jowãw 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jowãw 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ram)", () => {
		expect(p.parse("3 Jowãw 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jow 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jowãw 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ram)", () => {
		expect(p.parse("Jowãw 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jow 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ram)", () => {
		expect(p.parse("Me Hàpên Xà 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Me Hàp 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ram)", () => {
		expect(p.parse("Roman 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ram)", () => {
		expect(p.parse("1 Corinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ram)", () => {
		expect(p.parse("2 Corinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ram)", () => {
		expect(p.parse("Coroxo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Cor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ram)", () => {
		expect(p.parse("Carati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Car 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ram)", () => {
		expect(p.parse("Epet 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ram)", () => {
		expect(p.parse("Pirip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ram)", () => {
		expect(p.parse("1 Texarõn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Texarõn 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ram)", () => {
		expect(p.parse("2 Texarõn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Texarõn 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ram)", () => {
		expect(p.parse("1 Timot 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timot 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ram)", () => {
		expect(p.parse("2 Timot 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timot 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ram)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ram)", () => {
		expect(p.parse("Piremõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pir 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ram)", () => {
		expect(p.parse("Ixaher 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ixah 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ram)", () => {
		expect(p.parse("Tijac 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tij 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ram)", () => {
		expect(p.parse("1 Petrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ram)", () => {
		expect(p.parse("2 Petrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ram)", () => {
		expect(p.parse("Juta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ram)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ram)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jowãw - 3 Jowãw").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jowãw – 3 Jowãw").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jowãw — 3 Jowãw").osis()).toEqual("1John.1-3John.1");
	});
});
