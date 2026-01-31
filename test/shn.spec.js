"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/shn.js";

describe("Localized book Gen (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (shn)", () => {
		expect(p.parse("ငဝ်ႈၵမ်ႇၽႃႇ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ငဝ်ႈ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (shn)", () => {
		expect(p.parse("ဢွၵ်ႇၵႂႃႇ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ဢွၵ်ႇ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (shn)", () => {
		expect(p.parse("ႁဵတ်းဝၢတ်ႈ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ႁဵတ်း 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (shn)", () => {
		expect(p.parse("ၼႂ်းထိူၼ်ႇ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ထိူၼ်ႇ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (shn)", () => {
		expect(p.parse("ပွင်ႉၶၢင်း 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ပွင်ႉ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (shn)", () => {
		expect(p.parse("ပျႃႇတိၵ်ႈ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ပျႃႇ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (shn)", () => {
		expect(p.parse("ႁေႃးတြႃး 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ႁေႃး 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (shn)", () => {
		expect(p.parse("ယေႃးသူႉ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ယေႃးသု 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (shn)", () => {
		expect(p.parse("ၵူၼ်းလူင်ၸီႇယၢင်ႇတြႃး 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ၵူၼ်းလူင် 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (shn)", () => {
		expect(p.parse("ရူႉထႃႉ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရုထႃႉ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရူႉ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ရု 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (shn)", () => {
		expect(p.parse("ဢီႉသႃႇယႃႉ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဢီႉ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ဢိ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (shn)", () => {
		expect(p.parse("1 ၶုၼ်ႁေႃၶမ်း 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ၶုၼ် 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ၶုၼ်ႁေႃၶမ်း 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ၶုၼ် 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (shn)", () => {
		expect(p.parse("2 ၶုၼ်ႁေႃၶမ်း 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ၶုၼ် 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ၶုၼ်ႁေႃၶမ်း 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ၶုၼ် 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (shn)", () => {
		expect(p.parse("3 ရႃႇၸဝၢင်ႇ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 ရႃႇ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (shn)", () => {
		expect(p.parse("4 ရႃႇၸဝၢင်ႇ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 ရႃႇ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (shn)", () => {
		expect(p.parse("1 ရႃႇၸဝၢင်ႇ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 သမူၺ်ႇ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ရႃႇ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ရႃႇၸဝၢင်ႇ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. သမူၺ်ႇ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ရႃႇ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (shn)", () => {
		expect(p.parse("2 ရႃႇၸဝၢင်ႇ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 သမူၺ်ႇ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ရႃႇ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ရႃႇၸဝၢင်ႇ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. သမူၺ်ႇ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ရႃႇ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (shn)", () => {
		expect(p.parse("1 ရႃႇၶျုၵ်ႈ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ရႃႇ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ရႃႇၶျုၵ်ႈ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ရႃႇ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (shn)", () => {
		expect(p.parse("2 ရႃႇၶျုၵ်ႈ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ရႃႇ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ရႃႇၶျုၵ်ႈ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ရႃႇ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (shn)", () => {
		expect(p.parse("ဢေးၸရႃႇ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဢေးၸရႃႉ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ဢေးၸ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (shn)", () => {
		expect(p.parse("ၼေႇႁမီႉ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ၼေႇ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (shn)", () => {
		expect(p.parse("ဢေးသတႃႇ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ဢေးသ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (shn)", () => {
		expect(p.parse("ယေႃးၽႃႉ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ယေႃး 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (shn)", () => {
		expect(p.parse("သႃႇလၢမ်ႇ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("သႃႇ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (shn)", () => {
		expect(p.parse("သုၵ်ႉတၢမ်ႇ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("သုၵ်ႉ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (shn)", () => {
		expect(p.parse("တေႇသၼႃႇ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("တေႇ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (shn)", () => {
		expect(p.parse("သေႃးလမုၼ်ႇ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("သေႃး 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (shn)", () => {
		expect(p.parse("ယေႇရမီႉ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေႇရမိ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ယေႇ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (shn)", () => {
		expect(p.parse("ယေႇၸၵျေႇလႃႉ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ယေႇၸ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (shn)", () => {
		expect(p.parse("တၢၼ်ႇယေႇလႃႉ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("တၢၼ်ႇ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (shn)", () => {
		expect(p.parse("ႁူဝ်းသေႇ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ႁူဝ်း 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (shn)", () => {
		expect(p.parse("ယူဝ်းဢေႇလႃႉ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ယူဝ်းဢေႇ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (shn)", () => {
		expect(p.parse("ဢႃႇမူတ်ႉ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ဢႃႇ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (shn)", () => {
		expect(p.parse("ဢေႃးပတီႉ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဢေႃးပတိ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ဢေႃး 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (shn)", () => {
		expect(p.parse("ယူဝ်းၼႃႉ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (shn)", () => {
		expect(p.parse("မီႉၶႃႇ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိၶႃႇ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မီႉ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("မိ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (shn)", () => {
		expect(p.parse("ၼႃႇႁုမ်ႇ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ၼႃႇ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (shn)", () => {
		expect(p.parse("ႁပၵ်ႉၵုၵ်ႉ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ႁပၵ်ႉ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (shn)", () => {
		expect(p.parse("ၸေႇၽၼီႉ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ၸေႇၽၼိ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ၸေႇ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (shn)", () => {
		expect(p.parse("ႁၵ်ႉၵႄး 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ႁၵ်ႉ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (shn)", () => {
		expect(p.parse("ၸႃႇၶရီႉ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ၸႃႇၶရိ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ၸႃႇ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (shn)", () => {
		expect(p.parse("မႃႇလၶီႉ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မႃႇလၶိ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("မႃႇလ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (shn)", () => {
		expect(p.parse("မၢတ်ႈထႄႇ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မၢတ်ႈ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("မတ်ႈ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (shn)", () => {
		expect(p.parse("မႃႇ​ၵူႉ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("မႃႇ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (shn)", () => {
		expect(p.parse("လူႉၵႃႇ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လူႉ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("လု 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (shn)", () => {
		expect(p.parse("1 ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ယူဝ်း 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ယူဝ်း 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (shn)", () => {
		expect(p.parse("2 ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ယူဝ်း 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ယူဝ်း 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (shn)", () => {
		expect(p.parse("3 ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ယူဝ်း 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ယူဝ်း 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (shn)", () => {
		expect(p.parse("ယူဝ်းႁၢၼ်ႇ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ယူဝ်း 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (shn)", () => {
		expect(p.parse("တမၢၼ်ႇ​ၸဝ်ႈ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တမၢၼ်ႇ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("တ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (shn)", () => {
		expect(p.parse("ရူဝ်းမႃႉ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ရူဝ်း 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (shn)", () => {
		expect(p.parse("1 ၵေႃးရိၼ်ႇထူႉ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ၵေႃး 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ၵေႃးရိၼ်ႇထူႉ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ၵေႃး 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (shn)", () => {
		expect(p.parse("2 ၵေႃးရိၼ်ႇထူႉ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ၵေႃး 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ၵေႃးရိၼ်ႇထူႉ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ၵေႃး 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (shn)", () => {
		expect(p.parse("ၵေႃးလေႃးသေး 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ၵေႃး 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (shn)", () => {
		expect(p.parse("ၵလႃႇတီႉ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ၵလႃႇတိ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ၵလႃႇ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ၵ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (shn)", () => {
		expect(p.parse("ဢေးၽႅတ်ႈ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ဢေး 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (shn)", () => {
		expect(p.parse("ၽီႉလိပ်ႉပီႉ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ၽိလိပ်ႉပိ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ၽီႉ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ၽိ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (shn)", () => {
		expect(p.parse("1 ထိတ်ႉသႃႇလေႃးၼိၵ်ႈ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ထိတ်ႉ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ထိတ်ႉသႃႇလေႃးၼိၵ်ႈ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ထိတ်ႉ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (shn)", () => {
		expect(p.parse("2 ထိတ်ႉသႃႇလေႃးၼိၵ်ႈ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ထိတ်ႉ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ထိတ်ႉသႃႇလေႃးၼိၵ်ႈ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ထိတ်ႉ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (shn)", () => {
		expect(p.parse("1 တီႉမေႃးသေႇ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 တိမေႃးသေႇ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 တီႉ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 တိ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. တီႉမေႃးသေႇ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. တိမေႃးသေႇ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. တီႉ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. တိ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (shn)", () => {
		expect(p.parse("2 တီႉမေႃးသေႇ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 တိမေႃးသေႇ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 တီႉ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 တိ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. တီႉမေႃးသေႇ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. တိမေႃးသေႇ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. တီႉ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. တိ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (shn)", () => {
		expect(p.parse("တီႉတူႉ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("တိတု 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (shn)", () => {
		expect(p.parse("ၽီႉလေႇမုၼ်ႇ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ၽိလေႇမုၼ်ႇ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ၽီႉလေႇ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ၽိလေႇ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (shn)", () => {
		expect(p.parse("ႁေႇပြႄး 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ႁေႇ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (shn)", () => {
		expect(p.parse("ယႃႇၵုပ်ႈ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ယႃႇ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (shn)", () => {
		expect(p.parse("1 ပေႇတရူႉ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ပေႇတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ပေႇ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ပေႇတရူႉ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ပေႇတရု 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ပေႇ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (shn)", () => {
		expect(p.parse("2 ပေႇတရူႉ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ပေႇတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ပေႇ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ပေႇတရူႉ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ပေႇတရု 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ပေႇ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (shn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (shn)", () => {
		expect(p.parse("ယူႉတႃႉ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယုတႃႉ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယူႉ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ယု 1:1").osis()).toEqual("Jude.1.1");
	});
});
