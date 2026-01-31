"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lhu.js";

describe("Localized book Gen (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lhu)", () => {
		expect(p.parse("Awˬ hkuiˉ puiˍ ve li‸ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ahkp 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lhu)", () => {
		expect(p.parse("Tawˆ kʼai ve li‸ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Taw 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lhu)", () => {
		expect(p.parse("Oˉ kʼoˍ pui ve li‸ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Okʼo 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lhu)", () => {
		expect(p.parse("Heh puiˉ hkʼaw ve li‸ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Heh 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lhu)", () => {
		expect(p.parse("Dawˇ haˍ ve li‸ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lhu)", () => {
		expect(p.parse("Hpeu‸maˍ ve li‸ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lhu)", () => {
		expect(p.parse("Bon maˍ ve li‸ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Bon 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lhu)", () => {
		expect(p.parse("Yawˇsuˆ li‸ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lhu)", () => {
		expect(p.parse("Suhˉ jehˬ ve li‸ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lhu)", () => {
		expect(p.parse("Ruˉhtaˆ li‸ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lhu)", () => {
		expect(p.parse("Iˉsaˍyaˆ li‸ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isy 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lhu)", () => {
		expect(p.parse("1 Saˍmo-eˍlaˆ li‸ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saˍmo-eˍlaˆ li‸ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lhu)", () => {
		expect(p.parse("2 Saˍmo-eˍlaˆ li‸ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saˍmo-eˍlaˆ li‸ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lhu)", () => {
		expect(p.parse("1Rsv 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lhu)", () => {
		expect(p.parse("2Rsv 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lhu)", () => {
		expect(p.parse("1 Jawˇmawˇ li‸ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Jawˇmawˇ li‸ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lhu)", () => {
		expect(p.parse("2 Jawˇmawˇ li‸ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Jawˇmawˇ li‸ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lhu)", () => {
		expect(p.parse("1Jm 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lhu)", () => {
		expect(p.parse("2Jm 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lhu)", () => {
		expect(p.parse("1 Raˍsaˍvanˍ li‸ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Raˍsaˍvanˍ li‸ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lhu)", () => {
		expect(p.parse("2 Raˍsaˍvanˍ li‸ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Raˍsaˍvanˍ li‸ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lhu)", () => {
		expect(p.parse("Eˇzaˍraˆ li‸ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lhu)", () => {
		expect(p.parse("Neˍhaˍmiˆ li‸ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lhu)", () => {
		expect(p.parse("Iˉsaˍtaˆ li‸ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lhu)", () => {
		expect(p.parse("Yawˇbaˆ li‸ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lhu)", () => {
		expect(p.parse("Chiˇ mvuh ve li‸ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Chi 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lhu)", () => {
		expect(p.parse("Tawˇ naˉ ve li‸ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tna 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lhu)", () => {
		expect(p.parse("Cuˇ yiˍ piˇ ve li‸ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lhu)", () => {
		expect(p.parse("Sawˉla‸monˍ ve kʼa muiˬ hkawˇ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lhu)", () => {
		expect(p.parse("Yeˍraˍmiˆ li‸ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yrm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lhu)", () => {
		expect(p.parse("Yeˍsaˍkeˍlaˆ li‸ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ysk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lhu)", () => {
		expect(p.parse("Daˍyeˍlaˆ li‸ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dyl 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lhu)", () => {
		expect(p.parse("Hawˇseˍ li‸ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hse 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lhu)", () => {
		expect(p.parse("Yawˇlaˆ li‸ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yla 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lhu)", () => {
		expect(p.parse("Aˍmoˆ li‸ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lhu)", () => {
		expect(p.parse("Awˇbaˍdiˆ li‸ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lhu)", () => {
		expect(p.parse("Yoˇnaˆ li‸ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lhu)", () => {
		expect(p.parse("Miˆhkaˍ li‸ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lhu)", () => {
		expect(p.parse("Naˍhunˍ li‸ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lhu)", () => {
		expect(p.parse("Haˍbaˍkuˆ li‸ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hbk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lhu)", () => {
		expect(p.parse("Zeˍhpaˍniˆ li‸ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lhu)", () => {
		expect(p.parse("Haˆgehˇ li‸ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lhu)", () => {
		expect(p.parse("Zaˍhkaˍriˆ li‸ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zhk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lhu)", () => {
		expect(p.parse("Maˍlaˍhkiˆ li‸ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lhu)", () => {
		expect(p.parse("Ma‸htehˍ li‸ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lhu)", () => {
		expect(p.parse("Maˍkuˆ li‸ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lhu)", () => {
		expect(p.parse("Luˉka‸ li‸ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lhu)", () => {
		expect(p.parse("1 Yoˇhanˬ li‸ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoˇhanˬ li‸ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lhu)", () => {
		expect(p.parse("2 Yoˇhanˬ li‸ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoˇhanˬ li‸ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lhu)", () => {
		expect(p.parse("3 Yoˇhanˬ li‸ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoˇhanˬ li‸ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lhu)", () => {
		expect(p.parse("Yoˇhanˬ li‸ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lhu)", () => {
		expect(p.parse("Tcuh yaˇ li‸ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lhu)", () => {
		expect(p.parse("Roˉma‸ li‸ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lhu)", () => {
		expect(p.parse("1 Kawˇrenˍhtuˆ li‸ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kawˇrenˍhtuˆ li‸ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lhu)", () => {
		expect(p.parse("2 Kawˇrenˍhtuˆ li‸ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kawˇrenˍhtuˆ li‸ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lhu)", () => {
		expect(p.parse("Kawˇlawˇsehˇ li‸ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lhu)", () => {
		expect(p.parse("Gaˍlaˍtiˆ li‸ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lhu)", () => {
		expect(p.parse("Eˇfeˇsu‸ li‸ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lhu)", () => {
		expect(p.parse("Hpiˇliˇpiˆ li‸ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lhu)", () => {
		expect(p.parse("1 Hteˇsaˍlawˇniˆ li‸ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Hteˇsaˍlawˇniˆ li‸ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lhu)", () => {
		expect(p.parse("2 Hteˇsaˍlawˇniˆ li‸ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Hteˇsaˍlawˇniˆ li‸ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lhu)", () => {
		expect(p.parse("1 Tiˆmoˉseˍ li‸ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiˆmoˉseˍ li‸ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lhu)", () => {
		expect(p.parse("2 Tiˆmoˉseˍ li‸ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiˆmoˉseˍ li‸ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lhu)", () => {
		expect(p.parse("Tiˇtuˆ li‸ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lhu)", () => {
		expect(p.parse("Hpiˇleˍmonˍ li‸ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lhu)", () => {
		expect(p.parse("Heˍbrehˇ li‸ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lhu)", () => {
		expect(p.parse("Yaˍkoˆ li‸ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ysu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lhu)", () => {
		expect(p.parse("1 Peˍtruˆ li‸ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peˍtruˆ li‸ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lhu)", () => {
		expect(p.parse("2 Peˍtruˆ li‸ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peˍtruˆ li‸ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lhu)", () => {
		expect(p.parse("Yuˇda‸ li‸ 1:1").osis()).toEqual("Jude.1.1");
	});
});
