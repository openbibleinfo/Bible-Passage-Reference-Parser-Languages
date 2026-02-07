"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ory.js";

describe("Localized book Gen (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ory)", () => {
		expect(p.parse("ମୋଶାଙ୍କ ଲିଖିତ ପ୍ରଥମ ପୁସ୍ତକ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ଆଦି ପୁସ୍ତକ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ଆଦି. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ory)", () => {
		expect(p.parse("ମୋଶାଙ୍କ ଲିଖିତ ଦ୍ୱିତୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ଯାତ୍ରା ପୁସ୍ତକ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ଯାତ୍ରା. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ory)", () => {
		expect(p.parse("ମୋଶାଙ୍କ ଲିଖିତ ତୃତୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ଲେବୀୟ ପୁସ୍ତକ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ଲେବୀ. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ory)", () => {
		expect(p.parse("ମୋଶାଙ୍କ ଲିଖିତ ଚତୁର୍ଥ ପୁସ୍ତକ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ଗଣନା ପୁସ୍ତକ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ଗଣ. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ory)", () => {
		expect(p.parse("ଯିରିମୀୟଙ୍କ ବିଳାପ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ବିଳା. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ବିଳାପ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ory)", () => {
		expect(p.parse("ପ୍ରକାଶିତ ବାକ୍ୟ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ପ୍ରକାଶିତ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ପ୍ରକା. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ory)", () => {
		expect(p.parse("ମୋଶାଙ୍କ ଲିଖିତ ପଞ୍ଚମ ପୁସ୍ତକ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ବିବରଣ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ବିବରଣ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ଦ୍ଵି. ବି. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ଦ୍ବି.ବି. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ory)", () => {
		expect(p.parse("ଯିହୋଶୂୟ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ଯିହୋ. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ory)", () => {
		expect(p.parse("ବିଚାରକର୍ତ୍ତା 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ବିଚାର. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ବିଚା. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ory)", () => {
		expect(p.parse("ରତର ବିବରଣ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ରୂତ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ଋତ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ରତ. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ରୂତ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ଋତ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ory)", () => {
		expect(p.parse("ଯିଶାଇୟ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ଯିଶା. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ଯିଶା 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ory)", () => {
		expect(p.parse("1 ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ଶା. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ଶା. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ର. ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ର. ଶା. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ ଶା. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ. ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ପ୍ରଥମ. ଶା. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("୧ ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("୧ ଶା. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("୧. ଶାମୁୟେଲ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("୧. ଶା. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ory)", () => {
		expect(p.parse("2 ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵି. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵି. ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱି. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱି. ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("୨ ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("୨ ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("୨. ଶାମୁୟେଲ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("୨. ଶା. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ory)", () => {
		expect(p.parse("ପ୍ର.ଶା. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ory)", () => {
		expect(p.parse("ଦ୍ବି.ଶା. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ଦ୍ଵି.ଶା. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ory)", () => {
		expect(p.parse("1 ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ରା. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ରା. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ର. ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ର. ରା. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ ରା. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ. ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ପ୍ରଥମ. ରା. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("୧ ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("୧ ରା. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("୧. ରାଜାବଳୀ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("୧. ରା. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ory)", () => {
		expect(p.parse("2 ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵି. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵି. ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱି. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱି. ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("୨ ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("୨ ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("୨. ରାଜାବଳୀ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("୨. ରା. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ory)", () => {
		expect(p.parse("ପ୍ର.ରା. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ory)", () => {
		expect(p.parse("ଦ୍ବି.ରା. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ଦ୍ଵି.ରା. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ory)", () => {
		expect(p.parse("ପ୍ର.ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ory)", () => {
		expect(p.parse("ଦ୍ବିତୀୟ ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ବି.ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵି.ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ory)", () => {
		expect(p.parse("1 ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ର. ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ର. ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ. ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ପ୍ରଥମ. ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("୧ ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("୧ ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("୧. ବଂଶାବଳୀ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("୧. ବଂ. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ory)", () => {
		expect(p.parse("2 ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵି. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵି. ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱି. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱି. ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("୨ ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("୨ ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("୨. ବଂଶାବଳୀ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("୨. ବଂ. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ory)", () => {
		expect(p.parse("ଏଜ୍ରା. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ଏଜ୍ରା 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ory)", () => {
		expect(p.parse("ନିହିମିୟା 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ନିହିମୀୟା 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ନିହି. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ory)", () => {
		expect(p.parse("ଏଷ୍ଟ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ଏଷ୍ଟର 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ory)", () => {
		expect(p.parse("ଆୟୁବ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ଆୟୁ. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ଆୟୁବ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ory)", () => {
		expect(p.parse("ଗୀତସଂହିତା 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ଗୀତ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ory)", () => {
		expect(p.parse("ହିତୋପଦେଶ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ହିତୋ. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ory)", () => {
		expect(p.parse("ଉପଦେଶକ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ଉପ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ory)", () => {
		expect(p.parse("ପରମ ଗୀତ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ପ. ଗୀ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ପ.ଗୀ. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ory)", () => {
		expect(p.parse("ଯିରିମିୟ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ଯିରିମୀୟ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ଯିରି. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ory)", () => {
		expect(p.parse("ଯିହିଜିକଲ ଭବିଷ୍ୟଦବକ୍ତାଙ୍କ ପୁସ୍ତକ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ଯିହିଜିକଲ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ଯିହି. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ory)", () => {
		expect(p.parse("ଦାନିୟେଲ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ଦାନି. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ory)", () => {
		expect(p.parse("ହୋଶେ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ହୋଶେୟ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ory)", () => {
		expect(p.parse("ଯୋୟେ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ଯୋୟେଲ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ory)", () => {
		expect(p.parse("ଆମୋ. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ଆମୋଷ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ory)", () => {
		expect(p.parse("ଓବଦିଅ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ଓବଦୀୟ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ଓବ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ory)", () => {
		expect(p.parse("ଯୂନ. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ଯୂନସ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ory)", () => {
		expect(p.parse("ମୀଖା. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ମୀଖା 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ory)", () => {
		expect(p.parse("ନାହୂ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ନାହୂମ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ory)", () => {
		expect(p.parse("ହବ‌କ୍‌କୂକ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ହବକ୍‍କୂକ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ହବକ୍କୂକ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ହବ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ory)", () => {
		expect(p.parse("ସିଫନିୟ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ସିଫନୀୟ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ସିଫ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ory)", () => {
		expect(p.parse("ହାଗ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ହାଗୟ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ory)", () => {
		expect(p.parse("ଯିଖରିୟ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ଯିଖରୀୟ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ଯିଖ. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ory)", () => {
		expect(p.parse("ମଲାଖି. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ମଲାଖୀ. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ମଲାଖି 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ମଲାଖୀ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ory)", () => {
		expect(p.parse("ମାଥିଉଲିଖିତ ସୁସମାଚାର 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥି. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥିଉ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ମାଥି 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ory)", () => {
		expect(p.parse("ମାର୍କଲିଖିତ ସୁସମାଚାର 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ମାର୍କ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ory)", () => {
		expect(p.parse("ଲୂକ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ଲୂକ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ory)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ory)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ory)", () => {
		expect(p.parse("ଯୋହନଙ୍କ ତୃତୀୟ ପତ୍ର 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ତୃ. ଯୋହ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ତୃ. ଯୋହ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ଯୋହନ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("୩ ଯୋହନ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ory)", () => {
		expect(p.parse("1 ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ର. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ର. ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ରଥମ ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ରଥମ ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ରଥମ. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ରଥମ. ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧ ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୧. ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ory)", () => {
		expect(p.parse("2 ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵି. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵି. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱି. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱି. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨ ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୨. ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ory)", () => {
		expect(p.parse("ଯୋହ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହନ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ory)", () => {
		expect(p.parse("ପ୍ରେରି. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପ୍ରେରିତ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ପ୍ରେରି 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ory)", () => {
		expect(p.parse("ରୋମୀ. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମୀୟ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ory)", () => {
		expect(p.parse("1 କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ର. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ର. କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ର. କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ. କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ରଥମ. କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧ କରି. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରିନ୍ଥୀ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("୧. କରି. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ory)", () => {
		expect(p.parse("2 କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵି. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵି. କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵି. କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱି. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱି. କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱି. କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨ କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରିନ୍ଥୀୟ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରିନ୍ଥୀ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("୨. କରି. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ory)", () => {
		expect(p.parse("କରିନ୍ଥୀୟମାନଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("କରିନ୍ଥୀୟଙ୍କ ପ୍ରତି ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ଵି.କରି. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ଦ୍ୱି.କରି. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ory)", () => {
		expect(p.parse("କରିନ୍ଥୀୟମାନଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("କରିନ୍ଥୀୟ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ପ୍ର.କରି. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Col (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ory)", () => {
		expect(p.parse("କଲସୀୟ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("କଲ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ory)", () => {
		expect(p.parse("ଗାଲାତୀୟ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲାତୀ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ଗାଲା. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ory)", () => {
		expect(p.parse("ଏଫିସୀୟ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫିସୀ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ଏଫି. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ory)", () => {
		expect(p.parse("ଫିଲି‌ପ୍‌ପୀୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍‌ପୀ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍‍ପୀ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍‌ପୀୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍‍ପୀୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପ୍ପୀୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲିପୀୟ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ଫିଲି. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ory)", () => {
		expect(p.parse("1 ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ର. ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ର. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ର. ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ର. ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ. ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ. ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ରଥମ. ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧ ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସଲନୀକୀୟ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସଲନୀକୀ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("୧. ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ory)", () => {
		expect(p.parse("ଥେସଲନିକୀୟମାନଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ପ୍ର.ଥେସ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ory)", () => {
		expect(p.parse("2 ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵି. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵି. ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵି. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱି. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱି. ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱି. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨ ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସଲନୀକୀୟ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସଲନୀକୀ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("୨. ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ory)", () => {
		expect(p.parse("ଥେସଲନିକୀୟମାନଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ଵି.ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ଦ୍ୱି.ଥେସ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ory)", () => {
		expect(p.parse("1 ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ର. ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ର. ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ରଥମ ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ରଥମ ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ରଥମ. ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ରଥମ. ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧ ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତୀମଥି 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("୧. ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ory)", () => {
		expect(p.parse("2 ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵି. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵି. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱି. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱି. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨ ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତୀମଥି 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("୨. ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ory)", () => {
		expect(p.parse("ତୀମଥିଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ପ୍ର.ତୀମ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ory)", () => {
		expect(p.parse("ତୀମଥିଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ଵି.ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ଦ୍ୱି.ତୀମ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ory)", () => {
		expect(p.parse("ତୀତସଙ୍କ ନିକଟକୁ ପାଉଲଙ୍କ ପତ୍ର 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତୀତ. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ତୀତସ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ory)", () => {
		expect(p.parse("ଫିଲୀମୋନ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲୀମନ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ଫିଲୀ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ory)", () => {
		expect(p.parse("ହିବ୍ରୁମାନଙ୍କୁ ଲିଖିତ ପତ୍ର 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଏବ୍ରୀ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ଏବ୍ରୀ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ory)", () => {
		expect(p.parse("ଯାକୁବଙ୍କ ପତ୍ର 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ଯାକୁବ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ory)", () => {
		expect(p.parse("1 ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ର. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ର. ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ରଥମ ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ରଥମ ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ରଥମ. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ପ୍ରଥମ. ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧ ପିତର 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("୧. ପିତର 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ory)", () => {
		expect(p.parse("2 ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ଵି. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ଵି. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ଵିତୀୟ. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱି. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱି. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ଦ୍ୱିତୀୟ. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨ ପିତର 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("୨. ପିତର 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ory)", () => {
		expect(p.parse("ପିତରଙ୍କ ପ୍ରଥମ ପତ୍ର 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ory)", () => {
		expect(p.parse("ପିତରଙ୍କ ଦ୍ୱିତୀୟ ପତ୍ର 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ory)", () => {
		expect(p.parse("ଯିହୁଦାଙ୍କ ପତ୍ର 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୁଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୂଦା 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ଯିହୂ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ory)", () => {
		expect(p.parse("୧ ଯୋହନ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ପ୍ର. ଯୋହ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("୨ ଯୋହନ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ଦ୍ଵି. ଯୋହ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("୩ ଯୋହନ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ତୃ. ଯୋହ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ଆମୋଷ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ଆମୋ. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ହୋଶେୟ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ହୋଶେ. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ଯୋୟେଲ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ଯୋୟେ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ଯୋହନ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯୋହ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ଯିହୋଶୂୟ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ଯିହୋ. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ଫିଲୀମୋନ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ହିତୋପଦେଶ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ହିତୋ. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ରୋମୀୟ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ରୋମୀ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Parser helper should handle book ranges (ory)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ory)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ଯୋହନଙ୍କ ପ୍ରଥମ ପତ୍ର - ଯୋହନଙ୍କ ତୃତୀୟ ପତ୍ର").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ଯୋହନଙ୍କ ପ୍ରଥମ ପତ୍ର – ଯୋହନଙ୍କ ତୃତୀୟ ପତ୍ର").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("ଯୋହନଙ୍କ ପ୍ରଥମ ପତ୍ର — ଯୋହନଙ୍କ ତୃତୀୟ ପତ୍ର").osis()).toEqual("1John.1-3John.1");
	});
});
