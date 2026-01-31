"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mdy.js";

describe("Localized book Gen (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mdy)", () => {
		expect(p.parse("ማዢንቲ ማፃኣፔ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ማዢ. ማፃ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mdy)", () => {
		expect(p.parse("ኬሲ ማፃኣፔ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ኬሲ. ማፃ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mdy)", () => {
		expect(p.parse("ሌዊ ዓሶ ማፃኣፖ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ሌዊ. ዓኬ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mdy)", () => {
		expect(p.parse("ፓይዲ ማፃኣፔ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ፓይ. ማፃ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mdy)", () => {
		expect(p.parse("ዔርሚያሴ ቃዮ ማፃኣፖ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ዔቃ. ማ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mdy)", () => {
		expect(p.parse("ዮሓኒሴም ፆኦሲ ፔጋሲ ዻዌ ባኮ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮሃኒሴም ፆኦሲ ዻዌ ባኮ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮሃ. ፆፔዻ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ዮሓ. ፆፔዻ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mdy)", () => {
		expect(p.parse("ላሚንቴ ዎጎ ማፃኣፖ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ላሚ. ዎማ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mdy)", () => {
		expect(p.parse("ዒያሱ ማፃኣፖ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ዒያ. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mdy)", () => {
		expect(p.parse("ሱኡጎ ማፃኣፖ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ሱኡጎ. ማፃ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mdy)", () => {
		expect(p.parse("ሩኡቴ ማፃኣፖ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ሩኡቴ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mdy)", () => {
		expect(p.parse("ዒሲያሴ ማፃኣፖ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ዒሲ. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mdy)", () => {
		expect(p.parse("1 ሳሙዔኤሌ ማፃኣፖ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሙዔኤሌ ማፃኣፖ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mdy)", () => {
		expect(p.parse("2 ሳሙዔኤሌ ማፃኣፖ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሙዔኤሌ ማፃኣፖ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mdy)", () => {
		expect(p.parse("1ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mdy)", () => {
		expect(p.parse("2ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mdy)", () => {
		expect(p.parse("1 ካኣቶ ማፃኣፖ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ካኣቶ ማፃኣፖ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mdy)", () => {
		expect(p.parse("2 ካኣቶ ማፃኣፖ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ካኣቶ ማፃኣፖ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mdy)", () => {
		expect(p.parse("1ካኣቶ. ማ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mdy)", () => {
		expect(p.parse("2ካኣቶ. ማ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mdy)", () => {
		expect(p.parse("1 ፆኦሲ ዓሶ ሃይሶ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ፆኦሲ ዓሶ ሃይሶ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mdy)", () => {
		expect(p.parse("2 ፆኦሲ ዓሶ ሃይሶ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ፆኦሲ ዓሶ ሃይሶ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mdy)", () => {
		expect(p.parse("1ፆኦሲ. ዓሃኬ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mdy)", () => {
		expect(p.parse("2ፆኦሲ. ዓሃኬ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mdy)", () => {
		expect(p.parse("ዒዝራ ማፃኣፖ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ዒዝ. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mdy)", () => {
		expect(p.parse("ኔሄሚያ ማፃኣፖ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ኔሄ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mdy)", () => {
		expect(p.parse("ዓስቲሮ ማፃኣፖ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ዓስቲ. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mdy)", () => {
		expect(p.parse("ዒዮቤ ማፃኣፖ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ዒዮ. 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mdy)", () => {
		expect(p.parse("ዓይኑሞ ማፃኣፖ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ዓይኑ. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mdy)", () => {
		expect(p.parse("ኮኦኪንሢ ማፃኣፔ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ኮኦኪ. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mdy)", () => {
		expect(p.parse("ማክቢቤ ማፃኣፖ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ማክ. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mdy)", () => {
		expect(p.parse("ቢያፓ ባሼ ዓይኑሞ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ቢባ. ዓይ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mdy)", () => {
		expect(p.parse("ዔርሚያሴ ማፃኣፖ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ዔር. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mdy)", () => {
		expect(p.parse("ሂዚቄኤሌ ማፃኣፖ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሂዚ. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mdy)", () => {
		expect(p.parse("ዳኣኔኤሌ ማፃኣፖ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳኣኔ. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mdy)", () => {
		expect(p.parse("ሆሴዔ ማፃኣፖ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴ. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mdy)", () => {
		expect(p.parse("ዒዩዔኤሌ ማፃኣፖ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ዒዩ. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mdy)", () => {
		expect(p.parse("ዓሞፄ ማፃኣፖ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ዓሞ. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mdy)", () => {
		expect(p.parse("ዓብዲዮ ማፃኣፖ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ዓብዲ. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mdy)", () => {
		expect(p.parse("ዮናኣሴ ማፃኣፖ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮና. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mdy)", () => {
		expect(p.parse("ሚኪያሴ ማፃኣፖ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚኪ. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mdy)", () => {
		expect(p.parse("ናሆኦሜ ማፃኣፖ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆ. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mdy)", () => {
		expect(p.parse("ዒምባቆሜ ማፃኣፖ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ዒምባ. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mdy)", () => {
		expect(p.parse("ሶፖኒያሴ ማፃኣፖ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፖ. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mdy)", () => {
		expect(p.parse("ሃኣጌ ማፃኣፖ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሃኣጌ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mdy)", () => {
		expect(p.parse("ዛካሪያሴ ማፃኣፖ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዛካ. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mdy)", () => {
		expect(p.parse("ሚልኪያሴ ማፃኣፖ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚል. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mdy)", () => {
		expect(p.parse("ማቲዎሴ ፃኣፔ ኮዦ ሃይሶ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቲዎሴ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቲ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mdy)", () => {
		expect(p.parse("ማርቆሴ ፃኣፔ ኮዦ ሃይሶ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆሴ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mdy)", () => {
		expect(p.parse("ሉቃሴ ፃኣፔ ኮዦ ሃይሶ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃሴ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mdy)", () => {
		expect(p.parse("ዮሓኒሴ ኪኢቶ'' 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሃ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሓ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mdy)", () => {
		expect(p.parse("ዮሓኒሴ ኪኢቶ'' 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሃ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሓ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mdy)", () => {
		expect(p.parse("ዮሓኒሴ ኪኢቶ'' 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሃኒሴ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሃ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሓ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mdy)", () => {
		expect(p.parse("ዮሃኒሴ ፃኣፔ ኮዦ ሃይሶ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሓኒሴ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሃ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሓ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mdy)", () => {
		expect(p.parse("1 ዮሃኒሴ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሃኒሴ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mdy)", () => {
		expect(p.parse("2 ዮሃኒሴ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሃኒሴ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mdy)", () => {
		expect(p.parse("ፆኦሲ ማዾ''ም ዳኪንቴዞንሢኮ ማዾ'' 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ዳኪንቴዞንሢ ማዾ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ዳኪ. ማዾ'' 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ዳኪ. ማዾ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mdy)", () => {
		expect(p.parse("ሮሜ ዓጮ'' ዓሶም 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮሜ ዓሶም 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mdy)", () => {
		expect(p.parse("ቆሮንቶሴ ዓሶም 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mdy)", () => {
		expect(p.parse("ቆሮንቶሴ ዓሶም 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mdy)", () => {
		expect(p.parse("1 ቆሮንቶሴ ዓሶም 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶሴ ዓሶም 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mdy)", () => {
		expect(p.parse("2 ቆሮንቶሴ ዓሶም 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶሴ ዓሶም 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mdy)", () => {
		expect(p.parse("ቆላሲያሴ ዓሶም 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mdy)", () => {
		expect(p.parse("ጋላቲያ ዓሶም 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ጋላ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mdy)", () => {
		expect(p.parse("ዔፕሶኔ ዓሶም 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ዔፕ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mdy)", () => {
		expect(p.parse("ፒልጲሲዮሴ ዓሶም 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፒልጲ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mdy)", () => {
		expect(p.parse("ቴስሎንቄ ዓሶም 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ቴስ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mdy)", () => {
		expect(p.parse("ቴስሎንቄ ዓሶም 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ቴስ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mdy)", () => {
		expect(p.parse("1 ቴስሎንቄ ዓሶም 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ቴስሎንቄ ዓሶም 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mdy)", () => {
		expect(p.parse("2 ቴስሎንቄ ዓሶም 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ቴስሎንቄ ዓሶም 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mdy)", () => {
		expect(p.parse("ፂሞቴዎሴም 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ፂሞ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mdy)", () => {
		expect(p.parse("ፂሞቴዎሴም 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ፂሞ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mdy)", () => {
		expect(p.parse("1 ፂሞቴዎሴም 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ፂሞቴዎሴም 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mdy)", () => {
		expect(p.parse("2 ፂሞቴዎሴም 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ፂሞቴዎሴም 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mdy)", () => {
		expect(p.parse("ቲቶም 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mdy)", () => {
		expect(p.parse("ፒልሞናም 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፒልሞ. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mdy)", () => {
		expect(p.parse("ዔብሬ ዓሶም ዳኪንቴ ኪኢታ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዔብሬ ዓሶም 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዔብ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mdy)", () => {
		expect(p.parse("ያይቆኦቤ ኪኢቶ'' 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይቆኦቤ ኪኢቶ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያይ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mdy)", () => {
		expect(p.parse("ጴፂሮሴ ኪኢቶ'' 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴፂ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mdy)", () => {
		expect(p.parse("ጴፂሮሴ ኪኢቶ'' 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴፂ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mdy)", () => {
		expect(p.parse("1 ጴፂሮሴ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴፂሮሴ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mdy)", () => {
		expect(p.parse("2 ጴፂሮሴ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴፂሮሴ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mdy)", () => {
		expect(p.parse("ዪሁዳ ዳኬ ኪኢቶ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዪሁዳ ኪኢቶ'' 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ዪሁ. 1:1").osis()).toEqual("Jude.1.1");
	});
});
