"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tam.js";

describe("Localized book Gen (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tam)", () => {
		expect(p.parse("தொடக்க நூல் 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ātiyākamam 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ஆதியாகமம் 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("தொநூ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ஆதி 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tam)", () => {
		expect(p.parse("விடுதலைப் பயணம் 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Yāttirākamam 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("யாத்திராகமம் 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("யாத் 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("விப 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (tam)", () => {
		expect(p.parse("பேல் தெய்வமும் அரக்கப்பாம்பும் என்பவையாகும் 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("பேல் தெய்வமும் அரக்கப்பாம்பும் 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("பேல் 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tam)", () => {
		expect(p.parse("Lēviyarākamam 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("லேவியராகமம் 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("லேவியர் 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("லேவி 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tam)", () => {
		expect(p.parse("Eṇṇākamam 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("எண்ணாகமம் 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("எண்ணிக்கை 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("எண் 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (tam)", () => {
		expect(p.parse("சீராக்கின் ஞானம் 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("சீராக் ஆகமம் 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("சீஞா 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (tam)", () => {
		expect(p.parse("சாலமோனின் ஞானம் 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("ஞானாகமம் 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("சாஞா 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tam)", () => {
		expect(p.parse("எரேமியாவின் புலம்பல் 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pulampal 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("புலம்பல் 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("புலம் 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("புல 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (tam)", () => {
		expect(p.parse("அவை இளைஞர் மூவரின் பாடல் 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("எரேமியாவின் கடிதம் 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("எரேமியாவின் மடல் 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tam)", () => {
		expect(p.parse("யோவானுக்கு வெளிப்படுத்தின விசேஷம் 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Veḷippaṭuttiṉa Vicēṭaṅkaḷ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("வெளிப்படுத்தின விசேடங்கள் 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Veḷippaṭuttiṉa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("திருவெளிப்பாடு 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("திவெ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("வெளி 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (tam)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tam)", () => {
		expect(p.parse("இணைச் சட்டம் 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Upākamam 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("உபாகமம் 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("உபா 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("இச 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tam)", () => {
		expect(p.parse("யோசுவாவின் புத்தகம் 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yōcuvā 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("யோசுவா 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("யோசு 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tam)", () => {
		expect(p.parse("நியாயாதிபதிகளின் புத்தகம் 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நியாயாதிபதிகள் ஆகமம் 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நீதித் தலைவர்கள் 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Niyāyātipatikaḷ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நியாயாதிபதிகள் 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நீதிபதிகள் 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நியா 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நீத 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tam)", () => {
		expect(p.parse("ரூத்தின் சரித்திரம் 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ரூத்து 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ரூத் 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rūt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (tam)", () => {
		expect(p.parse("1 எஸ்திராஸ் 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (tam)", () => {
		expect(p.parse("2 எஸ்திராஸ் 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tam)", () => {
		expect(p.parse("ஏசாயா தீர்க்கதரிசியின் புத்தகம் 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ecāyā 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("எசாயா 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ஏசாயா 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("எசா 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ஏசா 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tam)", () => {
		expect(p.parse("சாமுவேலின் இரண்டாம் புத்தகம் 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 சாமுவேல் 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Cāmuvēl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 அரசுகள் 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 சாமு 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tam)", () => {
		expect(p.parse("சாமுவேலின் முதலாம் புத்தகம் 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 சாமுவேல் 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Cāmuvēl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 அரசுகள் 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 சாமு 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tam)", () => {
		expect(p.parse("இராஜாக்களின் இரண்டாம் புத்தகம் 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 இராஜாக்கள் 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Irājākkaḷ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 அரசர்கள் 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 அரசுகள் 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 இராஜா 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 இரா 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 அர 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tam)", () => {
		expect(p.parse("இராஜாக்களின் முதலாம் புத்தகம் 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 இராஜாக்கள் 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Irājākkaḷ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 அரசர்கள் 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 அரசுகள் 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 இராஜா 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 இரா 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 அர 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tam)", () => {
		expect(p.parse("நாளாகமத்தின் இரண்டாம் புத்தகம் 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 குறிப்பேடு 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Nāḷākamam 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 நாளாகமம் 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 குறி 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 நாளா 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tam)", () => {
		expect(p.parse("நாளாகமத்தின் முதலாம் புத்தகம் 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 குறிப்பேடு 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Nāḷākamam 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 நாளாகமம் 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 குறி 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 நாளா 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tam)", () => {
		expect(p.parse("எஸ்றாவின் புத்தகம் 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("எஸ்ரா 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("எஸ்றா 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esṛā 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tam)", () => {
		expect(p.parse("நெகேமியாவின் புத்தகம் 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nekēmiyā 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("நெகேமியா 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("நெகே 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (tam)", () => {
		expect(p.parse("எஸ்தர் (கிரேக்கம்) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("எஸ்தர் (கி) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("எஸ் (கி) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tam)", () => {
		expect(p.parse("எஸ்தரின் சரித்திரம் 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("எஸ்தர் 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Estar 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("எஸ் 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tam)", () => {
		expect(p.parse("யோபுடைய சரித்திரம் 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yōpu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("யோபு 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book SgThree (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (tam)", () => {
		expect(p.parse("இளைஞர் மூவரின் பாடல் 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tam)", () => {
		expect(p.parse("சாலொமோனின் உன்னதப்பாட்டு 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("இனிமைமிகு பாடல் 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("உன்னத சங்கீதம் 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("உன்னதப்பாட்டு 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Uṉṉatappāṭṭu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("உன்னத பாட்டு 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("உன்ன 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("இபா 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tam)", () => {
		expect(p.parse("சங்கீத புத்தகம் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("திருப்பாடல்கள் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("சங்கீதங்கள் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("திருப்பாடல் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Caṅkītam 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("சங்கீதம் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("சஙகீதம் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("சங்கீ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("திபா 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("சங் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (tam)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("அசரியா 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tam)", () => {
		expect(p.parse("பழமொழி ஆகமம் 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nītimoḻikaḷ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("நீதிமொழிகள் 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("நீதி 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("நீமொ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tam)", () => {
		expect(p.parse("சங்கத் திருவுரை ஆகமம் 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("சபை உரையாளர் 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Piracaṅki 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("பிரசங்கி 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("பிரச 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("சஉ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Jer (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tam)", () => {
		expect(p.parse("எரேமியா தீர்க்கதரிசியின் புத்தகம் 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erēmiyā 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("எரேமியா 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ஏரேமியா 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("எரே 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ஏரே 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tam)", () => {
		expect(p.parse("எசேக்கியேல் தீர்க்கதரிசியின் புத்தகம் 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("எசேக்கியேல் 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ecēkkiyēl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("எசே 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tam)", () => {
		expect(p.parse("தானியேலின் புத்தகம் 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("தானியேல் 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tāṉiyēl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("தானி 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tam)", () => {
		expect(p.parse("Ōciyā 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ஒசேயா 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ஓசியா 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ஓசேயா 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ஓசி 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ஓசே 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tam)", () => {
		expect(p.parse("யோவேல் 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yōvēl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("யோவே 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tam)", () => {
		expect(p.parse("ஆமோஸ் 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Āmōs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ஆமோ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tam)", () => {
		expect(p.parse("Opatiyā 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ஒபதியா 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ஒபதி 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ஒப 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tam)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yōṉā 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("யோனா 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tam)", () => {
		expect(p.parse("மீக்கா 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mīkā 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("மீகா 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("மீக் 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tam)", () => {
		expect(p.parse("நாகூம் 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nākūm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("நாகூ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tam)", () => {
		expect(p.parse("அபக்கூக்கு 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Āpakūk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ஆபகூக் 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("அப 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ஆப 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tam)", () => {
		expect(p.parse("Ceppaṉiyā 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("செப்பனியா 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("செப் 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tam)", () => {
		expect(p.parse("ஆகாய் 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ākāy 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ஆகா 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tam)", () => {
		expect(p.parse("செக்கரியா 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Cakariyā 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("சகரியா 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("சகரி 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("செக் 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tam)", () => {
		expect(p.parse("எபிரேயம் 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malkiyā 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("மலாக்கி 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("மல்கியா 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("மல்கி 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("மலா 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tam)", () => {
		expect(p.parse("மத்தேயு எழுதிய சுவிசேஷம் 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("மத்தேயு எழுதிய நற்செய்தி 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("மத்தேயு நற்செய்தி 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattēyu Naṛceyti 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattēyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("மத்தேயு 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("மத் 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tam)", () => {
		expect(p.parse("மாற்கு எழுதிய சுவிசேஷம் 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("மாற்கு எழுதிய நற்செய்தி 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("மாற்கு நற்செய்தி 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Māṛku Naṛceyti 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("மாற்கு 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Māṛku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("மாற் 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tam)", () => {
		expect(p.parse("லூக்கா எழுதிய சுவிசேஷம் 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக்கா எழுதிய நற்செய்தி 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக்கா நற்செய்தி 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lūkkā Naṛceyti 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக்கா 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lūkkā 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக் 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tam)", () => {
		expect(p.parse("Yōvaṉ Eḻutiya Mutalāvatu Nirupam 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("யோவன் எழுதிய முதலாவது நிருபம் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("யோவான் எழுதிய முதல் திருமுகம் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("யோவான் எழுதிய முதலாம் கடிதம் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("யோவான் முதல் திருமுகம் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 அருளப்பர் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yōvaṉ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோவா 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tam)", () => {
		expect(p.parse("Yōvaṉ Eḻutiya Iraṇṭāvatu Nirupam 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("யோவான் எழுதிய இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("யோவன் எழுதிய இரண்டாவது நிருபம் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("யோவான் எழுதிய இரண்டாம் கடிதம் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("யோவான் இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 அருளப்பர் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yōvaṉ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோவா 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tam)", () => {
		expect(p.parse("யோவான் எழுதிய முன்றாம் திருமுகம் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yōvaṉ Eḻutiya Mūṉṛāvatu Nirupam 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("யோவன் எழுதிய மூன்றாவது நிருபம் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("யோவான் எழுதிய மூன்றாம் கடிதம் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("யோவான் மூன்றாம் திருமுகம் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 அருளப்பர் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yōvaṉ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோவா 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tam)", () => {
		expect(p.parse("யோவான் எழுதிய சுவிசேஷம் 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("யோவான் எழுதிய நற்செய்தி 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("அருளப்பர் நற்செய்தி 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("யோவான் நற்செய்தி 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yōvāṉ Naṛceyti 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yōvāṉ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("யோவா 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tam)", () => {
		expect(p.parse("முதலாவது யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("முதலாவது. யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Mutalāvatu யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Mutalāvatu. யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவான் 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tam)", () => {
		expect(p.parse("இரண்டாம யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("இரண்டாம. யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("இரண்டாவது யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("இரண்டாவது. யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Iraṇṭāvatu யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Iraṇṭāvatu. யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவான் 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tam)", () => {
		expect(p.parse("முன்றாம் யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("முன்றாம். யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("மூன்றாவது யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("மூன்றாவது. யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Mūṉṛāvatu யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Mūṉṛāvatu. யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவான் 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tam)", () => {
		expect(p.parse("யோவான் 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tam)", () => {
		expect(p.parse("அப்போஸ்தலருடைய நடபடிகள் 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("திருத்தூதர் பணிகள் 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Appōstalar Paṇi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப்போஸ்தலர் பணி 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப்போஸ்தலர் 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப்போ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப் 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("திப 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tam)", () => {
		expect(p.parse("ரோமாபுரியாருக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("உரோமையருக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Urōmarukku Eḻutiya Nirupam 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("உரோமருக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Urōmarukku 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("உரோமையர் 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ரோமர் 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("உரோ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tam)", () => {
		expect(p.parse("கொரிந்தியருக்கு எழுதிய இரண்டாவது திருமுகம் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Korintiyarukku Eḻutiya Iraṇṭāvatu Nirupam 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய இரண்டாவது நிருபம் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய இரண்டாம் கடிதம் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiyarukku 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொரிந்தியர் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொரி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tam)", () => {
		expect(p.parse("Korintiyarukku Eḻutiya Mutalāvatu Nirupam 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய முதலாவது திருமுகம் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய முதலாவது நிருபம் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய முதல் திருமுகம் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("கொரிந்தியருக்கு எழுதிய முதலாம் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiyarukku 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொரிந்தியர் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொரி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tam)", () => {
		expect(p.parse("கலாத்தியருக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalāttiyarukku Eḻutiya Nirupam 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலாத்தியருக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலாத்தியருக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalāttiyarukku 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலாத்தியர் 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலாத் 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலா 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tam)", () => {
		expect(p.parse("எபேசியருக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epēciyarukku Eḻutiya Nirupam 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபேசியருக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபேசியருக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epēciyarukku 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபேசியர் 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபேசி 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபே 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tam)", () => {
		expect(p.parse("பிலிப்பியருக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilippiyarukku Eḻutiya Nirupam 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலிப்பியருக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலிப்பியருக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilippiyarukku 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலிப்பியர் 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலிப் 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலி 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tam)", () => {
		expect(p.parse("கொலோசையருக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolōceyarukku Eḻutiya Nirupam 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோசெயருக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோசெயருக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolōceyarukku 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோசெயர் 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோசையர் 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tam)", () => {
		expect(p.parse("Tecalōṉikkiyarukku Eḻutiya Iraṇṭāvatu Nirupam 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("தெசலோனிக்கருக்கு எழுதிய இரண்டாவது திருமுகம் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("தெசலோனிக்கியருக்கு எழுதிய இரண்டாவது நிருபம் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("தெசலோனிக்கருக்கு எழுதிய இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("தெசலோனிக்கேயருக்கு எழுதிய இரண்டாம் கடிதம் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tecalōṉikkiyarukku 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெசலோனிக்கேயர் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெசலோனிக்கர் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெசலோ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெச 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tam)", () => {
		expect(p.parse("Tecalōṉikkiyarukku Eḻutiya Mutalāvatu Nirupam 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("தெசலோனிக்கியருக்கு எழுதிய முதலாவது நிருபம் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("தெசலோனிக்கேயருக்கு எழுதிய முதலாம் கடிதம் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("தெசலோனிக்கருக்கு எழுதிய முதல் திருமுகம் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tecalōṉikkiyarukku 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெசலோனிக்கேயர் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெசலோனிக்கர் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெசலோ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெச 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tam)", () => {
		expect(p.parse("திமொத்தேயுவுக்கு எழுதிய இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("திமோத்தேயுவுக்கு எழுதிய இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tīmōttēyuvukku Eḻutiya Iraṇṭāvatu Nirupam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("தீமோத்தேயுவுக்கு எழுதிய இரண்டாவது நிருபம் 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("தீமோத்தேயுவுக்கு எழுதிய இரண்டாம் கடிதம் 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tīmōttēyuvukku 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 திமொத்தேயு 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 தீமோத்தேயு 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 தீமோத் 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 திமொ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tam)", () => {
		expect(p.parse("Tīmōttēyuvukku Eḻutiya Mutalāvatu Nirupam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("தீமோத்தேயுவுக்கு எழுதிய முதலாவது நிருபம் 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("திமொத்தேயுவுக்கு எழுதிய முதல் திருமுகம் 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("திமோத்தேயுவுக்கு எழுதிய முதல் திருமுகம் 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("தீமோத்தேயுவுக்கு எழுதிய முதலாம் கடிதம் 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tīmōttēyuvukku 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 திமொத்தேயு 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 தீமோத்தேயு 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 தீமோத் 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 திமொ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tam)", () => {
		expect(p.parse("தீத்துவுக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத்துக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத்துவுக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tīttuvukku Eḻutiya Nirupam 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத்துவுக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tīttuvukku 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத்து 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத் 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tam)", () => {
		expect(p.parse("பிலமோனுக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilēmōṉukku Eḻutiya Nirupam 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலேமோனுக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலேமோனுக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilēmōṉukku 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலேமோன் 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலமோன் 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலே 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பில 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tam)", () => {
		expect(p.parse("எபிரேயருக்கு எழுதிய திருமுகம் 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epireyarukku Eḻutiya Nirupam 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபிரெயருக்கு எழுதிய நிருபம் 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபிரேயருக்கு எழுதிய கடிதம் 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epireyarukku 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபிரேயர் 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபிரே 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபி 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tam)", () => {
		expect(p.parse("யாக்கோபு எழுதிய திருமுகம் 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yākkōpu Eḻutiya Nirupam 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக்கோபு எழுதிய நிருபம் 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக்கோபு எழுதிய கடிதம் 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாகப்பர் திருமுகம் 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக்கோபு திருமுகம் 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக்கோபு 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yākkōpu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக் 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tam)", () => {
		expect(p.parse("Pēturu Eḻutiya Iraṇṭāvatu Nirupam 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("பேதுரு எழுதிய இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("பேதுரு எழுதிய இரண்டாவது நிருபம் 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("பேதுரு எழுதிய இரண்டாம் கடிதம் 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("பேதுரு இரண்டாம் திருமுகம் 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 இராயப்பர் 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pēturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 பேது 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tam)", () => {
		expect(p.parse("Pēturu Eḻutiya Mutalāvatu Nirupam 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("பேதுரு எழுதிய முதலாவது நிருபம் 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("பேதுரு எழுதிய முதல் திருமுகம் 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("பேதுரு எழுதிய முதலாம் கடிதம் 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("பேதுரு முதல் திருமுகம் 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 இராயப்பர் 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pēturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 பேது 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tam)", () => {
		expect(p.parse("Yūtā Eḻutiya Nirupam 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("யூதா எழுதிய நிருபம் 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("யூதா எழுதிய கடிதம் 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("யூதா திருமுகம் 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yūtā 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("யூதா 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (tam)", () => {
		expect(p.parse("தொபியாசு ஆகமம் 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("தோபித்து 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("தோபி 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (tam)", () => {
		expect(p.parse("யூதித்து 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("யூதி 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (tam)", () => {
		expect(p.parse("பாரூக்கு 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("பாரூ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (tam)", () => {
		expect(p.parse("சூசன்னா 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (tam)", () => {
		expect(p.parse("2 மக்கபேயர் 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 மக் 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (tam)", () => {
		expect(p.parse("3 மக்கபேயர் 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 மக் 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (tam)", () => {
		expect(p.parse("4 மக்கபேயர் 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 மக் 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (tam)", () => {
		expect(p.parse("1 மக்கபேயர் 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 மக் 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book John,Josh,Joel,Jonah (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John,Josh,Joel,Jonah (tam)", () => {
		expect(p.parse("யோ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Song (tam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tam)", () => {
		expect(p.parse("பாடல் 1:1").osis()).toEqual("Song.1.1");
	});
});
