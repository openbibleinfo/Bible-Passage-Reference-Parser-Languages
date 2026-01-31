"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yue.js";

describe("Localized book Gen (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (yue)", () => {
		expect(p.parse("Ch‘òng‐shaì Keì 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (yue)", () => {
		expect(p.parse("Ch‘ut Oi‐k‘āp Keì 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (yue)", () => {
		expect(p.parse("Leî‐meî‐keì 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (yue)", () => {
		expect(p.parse("Mān‐shò Keí Leūk 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (yue)", () => {
		expect(p.parse("Yē‐leî‐maĭ Oi‐koh 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yue)", () => {
		expect(p.parse("Māk‐Shî‐Lūk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Māk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (yue)", () => {
		expect(p.parse("Fūk‐ch‘uēn Lūt‐laî Keì 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (yue)", () => {
		expect(p.parse("Yeukₒ‐shue‐à 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (yue)", () => {
		expect(p.parse("Sẑ‐sz Keì 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jdg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (yue)", () => {
		expect(p.parse("Lô-tak shî 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lô-tak 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (yue)", () => {
		expect(p.parse("Ĭ‐tsoi‐à 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (yue)", () => {
		expect(p.parse("1 Saatₒ‐mŏ‐ĭ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saatₒ‐mŏ‐ĭ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Saatₒ‐mŏ‐ĭ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (yue)", () => {
		expect(p.parse("2 Saatₒ‐mŏ‐ĭ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saatₒ‐mŏ‐ĭ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Saatₒ‐mŏ‐ĭ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (yue)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (yue)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (yue)", () => {
		expect(p.parse("1 Līt‐wōng Keí‐leūk 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Līt‐wōng Keí‐leūk 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Līt‐wōng Keí‐leūk 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (yue)", () => {
		expect(p.parse("2 Līt‐wōng Keí‐leūk 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Līt‐wōng Keí‐leūk 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Līt‐wōng Keí‐leūk 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (yue)", () => {
		expect(p.parse("1Ki 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (yue)", () => {
		expect(p.parse("2Ki 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (yue)", () => {
		expect(p.parse("1 Līk‐toî Chì‐leūk 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Līk‐toî Chì‐leūk 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Līk‐toî Chì‐leūk 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (yue)", () => {
		expect(p.parse("2 Līk‐toî Chì‐leūk 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Līk‐toî Chì‐leūk 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Līk‐toî Chì‐leūk 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (yue)", () => {
		expect(p.parse("1Ch 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (yue)", () => {
		expect(p.parse("2Ch 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (yue)", () => {
		expect(p.parse("Ĭ‐sẑ‐la 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (yue)", () => {
		expect(p.parse("Neĭ‐hei‐maĭ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (yue)", () => {
		expect(p.parse("Ĭ‐sẑ‐t‘ipₒ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (yue)", () => {
		expect(p.parse("Yeukₒ‐paakₒ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (yue)", () => {
		expect(p.parse("Shi‐p‘in 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psa 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (yue)", () => {
		expect(p.parse("Cham‐īn 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (yue)", () => {
		expect(p.parse("Ch‘uēn‐tô 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecc 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (yue)", () => {
		expect(p.parse("Ngă‐koh 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sng 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (yue)", () => {
		expect(p.parse("Yē‐leî‐maĭ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (yue)", () => {
		expect(p.parse("Ĭ‐sai‐kitₒ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (yue)", () => {
		expect(p.parse("Taân‐ĭ‐leĭ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (yue)", () => {
		expect(p.parse("Hōh‐sai 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (yue)", () => {
		expect(p.parse("Yeukₒ‐ĭ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jol 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (yue)", () => {
		expect(p.parse("À‐moh‐sẑ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (yue)", () => {
		expect(p.parse("Oh‐pa‐taí 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (yue)", () => {
		expect(p.parse("Yeukₒ‐nā 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (yue)", () => {
		expect(p.parse("Maĭ‐ka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (yue)", () => {
		expect(p.parse("Nā‐yung 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nam 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (yue)", () => {
		expect(p.parse("Hap‐pa‐kuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (yue)", () => {
		expect(p.parse("Sai‐faan‐ngă 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (yue)", () => {
		expect(p.parse("Hap‐kei 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (yue)", () => {
		expect(p.parse("Saatₒ‐ka‐leî‐à 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zec 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (yue)", () => {
		expect(p.parse("Mă‐la‐kei 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yue)", () => {
		expect(p.parse("Mă‐t‘aaì 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yue)", () => {
		expect(p.parse("Mă‐Hóh 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yue)", () => {
		expect(p.parse("Lô‐Ka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yue)", () => {
		expect(p.parse("3 Yeukₒ‐Hôn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yue)", () => {
		expect(p.parse("1 Yeukₒ‐Hôn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yeukₒ‐Hôn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yeukₒ‐Hôn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yue)", () => {
		expect(p.parse("Yeukₒ‐Hôn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 2John (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yue)", () => {
		expect(p.parse("2 Yeukₒ‐hôn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yeukₒ‐hôn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yeukₒ‐hôn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yue)", () => {
		expect(p.parse("Sz̀‐T‘ō Hâng‐Chuên 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yue)", () => {
		expect(p.parse("Lōh‐Mă 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yue)", () => {
		expect(p.parse("1 Koh‐Lām‐Toh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koh‐Lām‐Toh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Koh‐Lām‐Toh 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Koh 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yue)", () => {
		expect(p.parse("2 Koh‐Lām‐Toh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koh‐Lām‐Toh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Koh‐Lām‐Toh 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Koh 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yue)", () => {
		expect(p.parse("Koh‐Lōh‐Sai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yue)", () => {
		expect(p.parse("Ka‐La‐T‘aaì 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yue)", () => {
		expect(p.parse("Ĭ‐Fat‐Shóh 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yue)", () => {
		expect(p.parse("Feī‐Laāp‐Peí 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yue)", () => {
		expect(p.parse("1 T‘ipₒ‐Saatₒ‐Lōh‐Neī‐Ka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 T‘ipₒ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. T‘ipₒ‐Saatₒ‐Lōh‐Neī‐Ka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. T‘ipₒ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. T‘ipₒ‐Saatₒ‐Lōh‐Neī‐Ka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. T‘ipₒ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yue)", () => {
		expect(p.parse("2 T‘ipₒ‐Saatₒ‐Lōh‐Neī‐Ka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 T‘ipₒ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. T‘ipₒ‐Saatₒ‐Lōh‐Neī‐Ka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. T‘ipₒ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. T‘ipₒ‐Saatₒ‐Lōh‐Neī‐Ka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. T‘ipₒ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yue)", () => {
		expect(p.parse("1 T‘aī‐Moh‐T‘aaì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 T‘aī‐Moh 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. T‘aī‐Moh‐T‘aaì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. T‘aī‐Moh 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. T‘aī‐Moh‐T‘aaì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. T‘aī‐Moh 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yue)", () => {
		expect(p.parse("2 T‘aī‐Moh‐T‘aaì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 T‘aī‐Moh 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. T‘aī‐Moh‐T‘aaì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. T‘aī‐Moh 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. T‘aī‐Moh‐T‘aaì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. T‘aī‐Moh 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yue)", () => {
		expect(p.parse("T‘aī‐Toh 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yue)", () => {
		expect(p.parse("Feī‐Leî‐Moōn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Feī‐Leî 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yue)", () => {
		expect(p.parse("Hei‐Paakₒ‐Loī 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hei‐Paakₒ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yue)", () => {
		expect(p.parse("Ngă‐Kokₒ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yue)", () => {
		expect(p.parse("1 Peí‐Tak 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peí‐Tak 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peí‐Tak 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yue)", () => {
		expect(p.parse("2 Peí‐Tak 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peí‐Tak 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peí‐Tak 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yue)", () => {
		expect(p.parse("Yaū‐Taaî 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yaū 1:1").osis()).toEqual("Jude.1.1");
	});
});
