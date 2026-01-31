"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mwm.js";

describe("Localized book Gen (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mwm)", () => {
		expect(p.parse("Ta Kəla gír yá̰a̰ gə̄ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ta Kəla 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tkg 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Bel (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (mwm)", () => {
		expect(p.parse("Ɓesə̄ Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mwm)", () => {
		expect(p.parse("Ndū najə̄ yā Ngán Lebi gə̄ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lebi Gə̄ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leb 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mwm)", () => {
		expect(p.parse("Tə́da kutə Ngán Israel gə̄ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Tə́da 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (mwm)", () => {
		expect(p.parse("Jeju Kə́ Ngōn̄ Sirak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirak 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (mwm)", () => {
		expect(p.parse("Kum kedə̄ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mwm)", () => {
		expect(p.parse("Makətūbə̄ Nōō rɔ̄ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nōō rɔ̄ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Jeremi 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mwm)", () => {
		expect(p.parse("Makətūbə̄ Yá̰a̰ gə̄ kə́ Jeju teē kum Ja̰a̰ dɔ tə́ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jeju Teē Kum Ja̰a̰ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yá̰Jt 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Exod (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mwm)", () => {
		expect(p.parse("Teē Ngán Israel gə̄ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Teē 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Deut (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mwm)", () => {
		expect(p.parse("Ndū Najə̄ kə́ nge ko̰ jōó 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ndū Najə̄ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ndū 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Jojue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jojue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joj 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Ngé Sarya gə̄ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ngé Sarya 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sar 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Rutə 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rutə 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Ijai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ijai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ij 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ yā Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ yā Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ yā Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Makətūbə̄ Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Makətūbə̄ Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ yā Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Makətūbə̄. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Makətūbə̄. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó yā Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó yā Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó yā Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Makətūbə̄ Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Makətūbə̄ Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó yā Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Makətūbə̄. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Makətūbə̄. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ yā Mban̄g gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mban̄g Gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Mba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ yā Mban̄g gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mban̄g Gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ yā Mban̄g gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Makətūbə̄ Mban̄g Gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Makətūbə̄ Mba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ yā Mban̄g gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Makətūbə̄. Mban̄g Gə̄ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Makətūbə̄. Mba 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó yā Mban̄g gə̄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mban̄g 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó yā Mban̄g gə̄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mban̄g 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó yā Mban̄g gə̄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Makətūbə̄ Mban̄g 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Makətūbə̄ Mba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó yā Mban̄g gə̄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Makətūbə̄. Mban̄g 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Makətūbə̄. Mba 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Yá̰a̰ Gə̄ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Yá̰a̰ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Yá̰a̰ Gə̄ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Yá̰a̰ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Makətūbə̄ Yá̰a̰ Gə̄ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Makətūbə̄ Yá̰a̰ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Makətūbə̄. Yá̰a̰ Gə̄ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Makətūbə̄. Yá̰a̰ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Yá̰a̰ Gə̄ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Yá̰a̰ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Yá̰a̰ Gə̄ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Yá̰a̰ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Makətūbə̄ Yá̰a̰ Gə̄ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Makətūbə̄ Yá̰a̰ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó kə́ dɔ Yá̰a̰ gə̄ ń rāān̄ yá̰á̰ tə́ ní 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Makətūbə̄. Yá̰a̰ Gə̄ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Makətūbə̄. Yá̰a̰ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book PrAzar (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (mwm)", () => {
		expect(p.parse("Ndɔ̄ȳ yā Ajariya 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mwm)", () => {
		expect(p.parse("Gōsə̄ najə̄ gə̄ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gōsə̄ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Gōs 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (mwm)", () => {
		expect(p.parse("Pā Yā Balsáá Kə́ Mətá Gə̄ 3 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mwm)", () => {
		expect(p.parse("Pā kə́ majə tɔȳ pā gə̄ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pā kə́ majə 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mwm)", () => {
		expect(p.parse("Makətūbə̄ Pā gə̄ kə́ yā tɔ̄yń Nə́ɓā 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pā Gə̄ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pā 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Jeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Ejekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ejekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eje 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Ojee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ojee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oje 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Abədias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abədias 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Soponi 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Soponi 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sop 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Aje 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aje 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Jakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Jakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Jaka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mwm)", () => {
		expect(p.parse("Najə̄ kə́ Majə yā Jeju ń Matiye ndang ní 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mwm)", () => {
		expect(p.parse("Najə̄ kə́ Majə yā Jeju ń Mark ndang ní 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mwm)", () => {
		expect(p.parse("Najə̄ kə́ Majə yā Jeju ń Luk ndang ní 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mwm)", () => {
		expect(p.parse("1Ja̰a̰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mwm)", () => {
		expect(p.parse("2Ja̰a̰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mwm)", () => {
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ mətá ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ja̰a̰ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ja̰a̰ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mwm)", () => {
		expect(p.parse("Najə̄ kə́ Majə yā Jeju ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ja̰a̰ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ja̰a̰ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ja̰a̰ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Makətūbə̄ Ja̰a̰ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Makətūbə̄. Ja̰a̰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ja̰a̰ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ja̰a̰ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Makətūbə̄ Ja̰a̰ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó ń Ja̰a̰ ndang ní 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Makətūbə̄. Ja̰a̰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mwm)", () => {
		expect(p.parse("Kəla rāā Ngámbang kəla gə̄ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kəla Rāā 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kəla 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Rom gə̄ ní 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korḛntə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korḛntə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Makətūbə̄ Korḛntə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Makətūbə̄. Korḛntə 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mwm)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korḛntə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korḛntə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Makətūbə̄ Korḛntə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó ń Pol ndang adə̄ Korḛntə gə̄ ní 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Makətūbə̄. Korḛntə 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mwm)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Kolosə gə̄ ní 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosə 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloə 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Galatə gə̄ ní 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatə 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Epejə gə̄ ní 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epejə 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Pilipə gə̄ ní 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipə 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Makətūbə̄ Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Makətūbə̄. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mwm)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Makətūbə̄ Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó ń Pol ndang adə̄ Tesalonik gə̄ ní 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Makətūbə̄. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mwm)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Makətūbə̄ Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Makətūbə̄ Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Makətūbə̄. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Makətūbə̄. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Makətūbə̄ Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Makətūbə̄ Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó ń Pol ndang adə̄ Timote ní 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Makətūbə̄. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Makətūbə̄. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Titə ní 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Pol ndang adə̄ Pilemo̰ ní 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilemo̰ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mwm)", () => {
		expect(p.parse("Makətūbə̄ kə́ ndang adə̄n̄ Hebəro gə̄ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebəro 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Jakə ndang ní 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakə 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mwm)", () => {
		expect(p.parse("1 kə́ ta kəga dɔ ń Piyer ndang ní 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. kə́ ta kəga dɔ ń Piyer ndang ní 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Makətūbə̄ kə́ ta kəga dɔ ń Piyer ndang ní 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Makətūbə̄ Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Makətūbə̄. kə́ ta kəga dɔ ń Piyer ndang ní 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Makətūbə̄. Piyer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mwm)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mwm)", () => {
		expect(p.parse("2 kə́ nge ko̰ jōó ń Piyer ndang ní 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. kə́ nge ko̰ jōó ń Piyer ndang ní 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Makətūbə̄ kə́ nge ko̰ jōó ń Piyer ndang ní 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Makətūbə̄ Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Makətūbə̄. kə́ nge ko̰ jōó ń Piyer ndang ní 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Makətūbə̄. Piyer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mwm)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mwm)", () => {
		expect(p.parse("Makətūbə̄ ń Jud ndang ní 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (mwm)", () => {
		expect(p.parse("Tobi 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (mwm)", () => {
		expect(p.parse("Juditə 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (mwm)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (mwm)", () => {
		expect(p.parse("Sujan 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (mwm)", () => {
		expect(p.parse("1 Makabe Gə̄ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabe Gə̄ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Makətūbə̄ Makabe Gə̄ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Makətūbə̄. Makabe Gə̄ 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (mwm)", () => {
		expect(p.parse("2 Makabe Gə̄ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabe Gə̄ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Makətūbə̄ Makabe Gə̄ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Makətūbə̄. Makabe Gə̄ 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (mwm)", () => {
		expect(p.parse("1Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (mwm)", () => {
		expect(p.parse("2Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mwm)", () => {
		expect(p.parse("Makətūbə̄ yā Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (mwm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (mwm)", () => {
		expect(p.parse("PĀ YĀ BALSÁÁ KƏ́ MƏTÁ GƏ̄ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Pā yā balsáá kə́ mətá gə̄ 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
