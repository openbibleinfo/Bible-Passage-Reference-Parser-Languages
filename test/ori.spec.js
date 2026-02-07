"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ori.js";

describe("Localized book Gen (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ori)", () => {
		expect(p.parse("ଆଦିପୁସ୍ତକ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ଆଦି 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ori)", () => {
		expect(p.parse("ଯାତ୍ରା ପୁସ୍ତକ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ଯାତ୍ରାପୁସ୍ତକ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ଯାତ୍ରା 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (ori)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ori)", () => {
		expect(p.parse("ଲେବୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ଲେବୀୟ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ori)", () => {
		expect(p.parse("ଗଣନା ପୁସ୍ତକ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ଗଣନା 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ori)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ori)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ori)", () => {
		expect(p.parse("ଯିରିମିୟଙ୍କ ବିଳାପ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ori)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ori)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ପ୍ରତି ପ୍ରକାଶିତ ବାକ୍ୟ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (ori)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ବିବରଣୀ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ବିବରଣ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ori)", () => {
		expect(p.parse("ଯିହୋଶୂୟଙ୍କର ପୁସ୍ତକ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ଯିହୋଶୂୟଙ୍କର 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ori)", () => {
		expect(p.parse("ବିଗ୍ଭରକର୍ତ୍ତାମାନଙ୍କ ବିବରଣ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ori)", () => {
		expect(p.parse("ଋତର ବିବରଣ ପୁସ୍ତକ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ori)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ori)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ori)", () => {
		expect(p.parse("ଯିଶାଇୟ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କର ପୁସ୍ତକ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ଯାଶାଇୟ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ଯିଶାଇୟ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ଯୀଶାଇୟ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ୟଶାଇୟ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ୟିଶାୟ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ଶାମୁୟେଲଙ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ. ଶାମୁୟେଲଙ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ. ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ଶାମୁୟେଲଙ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ଶାମୁୟେଲଙ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ଶାମୁୟେଲଙ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଶାମୁୟେଲଙ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ଶାମୁୟେଲଙ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ଶାମୁୟେଲଙ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ori)", () => {
		expect(p.parse("ଶାମୁୟେଲଙ୍କ ଦ୍ୱିତୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ori)", () => {
		expect(p.parse("ଶାମୁୟେଲଙ୍କ ପ୍ରଥମ ପୁସ୍ତକ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ରାଜାବଳୀର 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ. ରାଜାବଳୀର 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ. ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ରାଜାବଳୀର 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ରାଜାବଳୀର 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ରାଜାବଳୀର 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ରାଜାବଳୀର 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ରାଜାବଳୀର 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ରାଜାବଳୀର 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ori)", () => {
		expect(p.parse("ରାଜାବଳୀର ଦ୍ୱିତୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ori)", () => {
		expect(p.parse("ରାଜାବଳୀର ପ୍ରଥମ ପୁସ୍ତକ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ବଂଶାବଳୀର 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ. ବଂଶାବଳୀର 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ. ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ବଂଶାବଳୀର 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ବଂଶାବଳୀର 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ବଂଶାବଳୀର 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ବଂଶାବଳୀର 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ବଂଶାବଳୀର 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ବଂଶାବଳୀର 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ori)", () => {
		expect(p.parse("ବଂଶାବଳୀର ଦ୍ୱିତୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ori)", () => {
		expect(p.parse("ବଂଶାବଳୀର ପ୍ରଥମ ପୁସ୍ତକ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ori)", () => {
		expect(p.parse("ଏଜ୍ରା 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ori)", () => {
		expect(p.parse("ନିହିମିୟାଙ୍କର ପୁସ୍ତକ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ନିହିମିୟାଙ୍କର 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (ori)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ori)", () => {
		expect(p.parse("ଏଷ୍ଟର ବିବରଣ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ori)", () => {
		expect(p.parse("ଆୟୁବ ପୁସ୍ତକ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ଆୟୁବ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ori)", () => {
		expect(p.parse("ଗୀତିସଂହିତା 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ଗାତସଂହିତା 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ଗୀତସଂହିତା 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (ori)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ori)", () => {
		expect(p.parse("ହିତୋପଦେଶ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ori)", () => {
		expect(p.parse("ଉପଦେଶକ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (ori)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ori)", () => {
		expect(p.parse("ପରମଗୀତ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ori)", () => {
		expect(p.parse("ଯିରିମିୟ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ଯିରିମିୟ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ori)", () => {
		expect(p.parse("ଯିହିଜିକଲ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ଯିହିଜିକଲ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ori)", () => {
		expect(p.parse("ଦାନିୟେଲଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ଦାନିୟେଲଙ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ori)", () => {
		expect(p.parse("ହୋଶେୟ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ହୋଶହେ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ହୋଶେୟ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ori)", () => {
		expect(p.parse("ଯୋୟେଲ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ଯୋୟେଲ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ori)", () => {
		expect(p.parse("ଆମୋଷ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ଆମୋଷ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ori)", () => {
		expect(p.parse("ଓବଦିଅ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ଓବଦିଅ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ori)", () => {
		expect(p.parse("ଯୂନସ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ଯୂନସ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ori)", () => {
		expect(p.parse("ମୀଖା ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ମିଖା 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ମୀଖା 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ori)", () => {
		expect(p.parse("ନାହୂମ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ନାହୂମ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ori)", () => {
		expect(p.parse("ହବକ୍କୂକ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ହବକ୍କୂକ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ହବକୁକ୍ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ହବକୂକ୍ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ori)", () => {
		expect(p.parse("ସିଫନିୟ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ସିଫନିୟ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ori)", () => {
		expect(p.parse("ହାଗୟ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ହାଗୟ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ori)", () => {
		expect(p.parse("ଯିଖରିୟ ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ଯିଖରିୟ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ori)", () => {
		expect(p.parse("ମଲାଖି ଭବିଷ୍ୟଦ୍ବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ମଲାଖି 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ori)", () => {
		expect(p.parse("ମାଥିଉ ଲିଖିତ ସୁସମାଗ୍ଭର 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥିଉ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ori)", () => {
		expect(p.parse("ମାର୍କ ଲିଖିତ ସୁସମାଗ୍ଭର 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ori)", () => {
		expect(p.parse("ଲୂକ ଲିଖିତ ସୁସମାଗ୍ଭର 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ଲୂକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ଯୋହନଙ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ରଥମ. ଯୋହନଙ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଯୋହନଙ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହନଙ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ଯୋହନଙ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଯୋହନଙ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଯୋହନଙ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହନଙ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ori)", () => {
		expect(p.parse("ତୃତୀୟ ଯୋହନଙ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ତୃତୀୟ. ଯୋହନଙ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ଯୋହନଙ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ଯୋହନଙ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ori)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ori)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ori)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ତୃତୀୟ ପତ୍ର 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ori)", () => {
		expect(p.parse("ଯୋହନ ଲିଖିତ ସୁସମାଗ୍ଭର 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହନ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ori)", () => {
		expect(p.parse("ପ୍ରେରିତମାନଙ୍କ କାର୍ଯ୍ୟର ବିବରଣ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପ୍ରେରିତ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Deut (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ori)", () => {
		expect(p.parse("ବିବରଣି 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Rom (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ori)", () => {
		expect(p.parse("ରୋମୀୟଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମୀୟଙ୍କ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ori)", () => {
		expect(p.parse("ପ୍ରଥମ କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ. କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରିନ୍ଥୀୟଙ୍କ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ori)", () => {
		expect(p.parse("କରିନ୍ଥୀୟଙ୍କ ପ୍ରତି ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ori)", () => {
		expect(p.parse("କରିନ୍ଥୀୟଙ୍କ ପ୍ରତି ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ori)", () => {
		expect(p.parse("ଗାଲାତୀୟଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲାତୀୟଙ୍କ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ori)", () => {
		expect(p.parse("ଏଫିସୀୟଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫିସୀୟଙ୍କ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ori)", () => {
		expect(p.parse("ଫିଲିପ୍ପୀୟଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍ପୀୟଙ୍କ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ori)", () => {
		expect(p.parse("କଲସୀୟଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲସୀୟଙ୍କ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ. ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସଲନୀକୀୟଙ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ori)", () => {
		expect(p.parse("ଥେସଲନୀକୀୟଙ୍କ ପ୍ରତି ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ori)", () => {
		expect(p.parse("ଥେସଲନୀକୀୟଙ୍କ ପ୍ରତି ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ତୀମଥିଙ୍କ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ରଥମ. ତୀମଥିଙ୍କ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତୀମଥିଙ୍କ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତୀମଥିଙ୍କ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ତୀମଥିଙ୍କ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ତୀମଥିଙ୍କ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତୀମଥିଙ୍କ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତୀମଥିଙ୍କ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ori)", () => {
		expect(p.parse("ତୀମଥିଙ୍କ ପ୍ରତି ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ori)", () => {
		expect(p.parse("ତୀମଥିଙ୍କ ପ୍ରତି ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ori)", () => {
		expect(p.parse("ତୀତସଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତୀତସଙ୍କ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ori)", () => {
		expect(p.parse("ଫିଲୀମୋନଙ୍କ ପ୍ରତି ପତ୍ର 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲୀମୋନଙ୍କ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ori)", () => {
		expect(p.parse("ଏବ୍ରୀ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ori)", () => {
		expect(p.parse("ଯାକୁବଙ୍କ ପତ୍ର 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁବଙ୍କ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ori)", () => {
		expect(p.parse("ପ୍ରଥମ ପିତରଙ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ରଥମ. ପିତରଙ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପିତରଙ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତରଙ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ori)", () => {
		expect(p.parse("ଦ୍ୱିତୀୟ ପିତରଙ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ପିତରଙ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପିତରଙ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତରଙ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ori)", () => {
		expect(p.parse("ପିତରଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ori)", () => {
		expect(p.parse("ପିତରଙ୍କ ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ori)", () => {
		expect(p.parse("ଯିହୂଦାଙ୍କ ପତ୍ର 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୂଦାଙ୍କ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ori)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ori)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ori)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (ori)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ori)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ori)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ori)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ori)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (ori)", () => {
		expect(p.parse("Titus 1:1 ଠାରୁ 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1ଠାରୁ2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ଠାରୁ 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (ori)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 chapter 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (ori)", () => {
		expect(p.parse("Exod 1:1 verse 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (ori)", () => {
		expect(p.parse("Exod 1:1 and 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 and 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (ori)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (ori)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (ori)", () => {
		expect(p.parse("Lev 1 (ERV)").osis_and_translations()).toEqual([["Lev.1","ERV"]]);
	});
});
describe("Parser helper should handle book ranges (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ori)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ପ୍ରଥମ ଯୋହନଙ ଠାରୁ ତୃତୀୟ ଯୋହନଙ").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (ori)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (ori)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});
