"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/amh.js";

describe("Localized book Gen (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (amh)", () => {
		expect(p.parse("ኦሪት ዘፍ​ጥ​ረት 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ኦሪት ዘፍጥረት 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ዘፍጥረት 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ዘፍ. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ዘፍ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (amh)", () => {
		expect(p.parse("ኦሪት ዘፀ​አት 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ኦሪት ዘጸአት 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ኦሪት ዘፀአት 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ዘፀአት 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ዘፀ. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ዘፀ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (amh)", () => {
		expect(p.parse("ኦሪት ዘሌ​ዋ​ው​ያን 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ኦሪት ዘሌዋውያን 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ዘሌዋውያን 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ዘሌ. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ዘሌ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (amh)", () => {
		expect(p.parse("ኦሪት ዘኍ​ልቍ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ኦሪት ዘኊልቊ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ኦሪት ዘኍልቊ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ዘኍ​. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ዘኍልቍ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ዘኍ. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ዘኍል 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ዘኍ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ሲራክ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("መጽሐፈ ሲራክ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("ሲራ. 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ጥበብ 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("መጽሐፈ ጥበብ 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("ጥበ. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (amh)", () => {
		expect(p.parse("ሰቆ​ቃወ ኤር​ም​ያስ ነቢይ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሰቈቃወ ኤርምያስ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሰቆ.ኤ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሰ.ኤ. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሰቈቃወ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ሰቈ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (amh)", () => {
		expect(p.parse("ተረፈ ኤር​ም​ያስ 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("ተረ.ኤር. 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (amh)", () => {
		expect(p.parse("የዮ​ሐ​ንስ ራእይ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("የዮሐንስ ራእይ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራእ. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራእይ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራዕ. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራእ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (amh)", () => {
		expect(p.parse("ኦሪት ዘዳ​ግም 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ኦሪት ዘዳግም 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዘዳግም 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዘዳ. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ዘዳ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ኢያሱ ወልደ ነዌ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("መጽሐፈ ኢያሱ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ኢያ. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ኢያሱ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ኢያ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (amh)", () => {
		expect(p.parse("መጽ​ሐፈ መሳ​ፍ​ንት 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("መጽሐፈ መሳፍንት 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("መሳፍንት 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("መሳ. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("መሳ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ሩት 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("መጽሐፈ ሩት 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ሩት 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (amh)", () => {
		expect(p.parse("1 ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1ኛ ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1ኛ. ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("መጽ​ሐፈ ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("መጽ​ሐፈ. ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("አንደኛ ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("አንደኛ. ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("ወደ ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("ወደ. ዕዝራ ሱቱ​ኤል 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (amh)", () => {
		expect(p.parse("ዕዝ.ሱቱ. 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (amh)", () => {
		expect(p.parse("2 ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2ኛ ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2ኛ. ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ሁለተኛ ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ሁለተኛ. ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("መጽ​ሐፈ ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("መጽ​ሐፈ. ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ወደ ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ወደ. ዕዝራ ካልእ 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (amh)", () => {
		expect(p.parse("ዕዝ.ካል. 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (amh)", () => {
		expect(p.parse("ትን​ቢተ ኢሳ​ይ​ያስ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ትንቢተ ኢሳይያስ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳይያስ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳ. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ኢሳ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (amh)", () => {
		expect(p.parse("1 ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ኛ ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ኛ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ኛ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ኛ. ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ኛ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ኛ. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("መጽ​ሐፈ ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("መጽ​ሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("መጽ​ሐፈ. ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("መጽ​ሐፈ. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("አንደኛ ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("አንደኛ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("አንደኛ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("አንደኛ. ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("አንደኛ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("አንደኛ. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ወደ ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ወደ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ወደ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ወደ. ሳሙ​ኤል ቀዳ​ማዊ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ወደ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ወደ. ሳሙኤል 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (amh)", () => {
		expect(p.parse("1ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ሳሙ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (amh)", () => {
		expect(p.parse("2 መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ኛ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ኛ ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ኛ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ኛ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ኛ. ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ኛ. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ሁለተኛ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ሁለተኛ ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ሁለተኛ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ሁለተኛ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ሁለተኛ. ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ሁለተኛ. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("መጽ​ሐፈ ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("መጽ​ሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("መጽ​ሐፈ. ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("መጽ​ሐፈ. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ወደ መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ወደ ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ወደ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ወደ. መጽሐፈ ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ወደ. ሳሙ​ኤል ካልእ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ወደ. ሳሙኤል 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (amh)", () => {
		expect(p.parse("2ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ሳሙ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (amh)", () => {
		expect(p.parse("1 ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ኛ ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ኛ መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ኛ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ኛ. ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ኛ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ኛ. ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ. ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ. ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("አንደኛ ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("አንደኛ መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("አንደኛ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("አንደኛ. ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("አንደኛ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("አንደኛ. ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ወደ ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ወደ መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ወደ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ወደ. ነገ​ሥት ቀዳ​ማዊ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ወደ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ወደ. ነገሥት 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (amh)", () => {
		expect(p.parse("1ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ነገ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (amh)", () => {
		expect(p.parse("2 መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ኛ መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ኛ ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ኛ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ኛ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ኛ. ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ኛ. ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ሁለተኛ መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ሁለተኛ ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ሁለተኛ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ሁለተኛ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ሁለተኛ. ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ሁለተኛ. ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ. ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("መጽ​ሐፈ. ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ወደ መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ወደ ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ወደ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ወደ. መጽሐፈ ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ወደ. ነገ​ሥት ካልእ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ወደ. ነገሥት 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (amh)", () => {
		expect(p.parse("2ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ነገ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (amh)", () => {
		expect(p.parse("1 ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ኛ ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ኛ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ኛ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ኛ. ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ኛ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ኛ. ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("መጽ​ሐፈ ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("መጽ​ሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("መጽ​ሐፈ. ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("መጽ​ሐፈ. ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("አንደኛ ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("አንደኛ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("አንደኛ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("አንደኛ. ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("አንደኛ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("አንደኛ. ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ወደ ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ወደ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ወደ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ወደ. ዜና መዋ​ዕል ቀዳ​ማዊ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ወደ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ወደ. ዜና መዋዕል 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (amh)", () => {
		expect(p.parse("1ዜ.መ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ዜና 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (amh)", () => {
		expect(p.parse("2 መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ኛ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ኛ ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ኛ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ኛ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ኛ. ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ኛ. ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ሁለተኛ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ሁለተኛ ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ሁለተኛ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ሁለተኛ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ሁለተኛ. ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ሁለተኛ. ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("መጽ​ሐፈ ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("መጽ​ሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("መጽ​ሐፈ. ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("መጽ​ሐፈ. ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ወደ መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ወደ ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ወደ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ወደ. መጽሐፈ ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ወደ. ዜና መዋ​ዕል ካልእ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ወደ. ዜና መዋዕል 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (amh)", () => {
		expect(p.parse("2ዜ.መ. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ዜና 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ዕዝራ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("መጽሐፈ ዕዝራ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ዕዝ. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ዕዝራ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ዕዝ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ነህ​ምያ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("መጽሐፈ ነህምያ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ነህምያ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ነህ. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ነህ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (amh)", () => {
		expect(p.parse("መጽሐፈ አስቴር 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስቴር 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስ. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("አስ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ኢዮብ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("መጽሐፈ ኢዮብ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ኢዮብ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ኢዮ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (amh)", () => {
		expect(p.parse("መዝ​ሙረ ዳዊት 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("መጽሐፈ መዝሙር 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("መዝሙረ ዳዊት 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("መዝሙር 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("መዝ. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("መዝ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (amh)", () => {
		expect(p.parse("መጽሐፈ ምሳሌ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ምሳ. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ምሳሌ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ምሳ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (amh)", () => {
		expect(p.parse("መጽ​ሐፈ መክ​ብብ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("መጽሐፈ መክብብ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("መክብብ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("መክ. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("መክ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (amh)", () => {
		expect(p.parse("መሓ​ልየ መሓ​ልይ ዘሰ​ሎ​ሞን 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("መኃልየ መኃልይ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ማሕልየ መሓልይ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("መኃ. መኃ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("መሓ. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ማሕ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (amh)", () => {
		expect(p.parse("ትን​ቢተ ኤር​ም​ያስ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ትንቢተ ኤርምያስ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤርምያስ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤር. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ኤር 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (amh)", () => {
		expect(p.parse("ትን​ቢተ ሕዝ​ቅ​ኤል 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ትንቢተ ሕዝቅኤል 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሕዝቅኤል 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሕዝ. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ሕዝ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (amh)", () => {
		expect(p.parse("ትንቢተ ዳንኤል 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳንኤል 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳን. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ዳን 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (amh)", () => {
		expect(p.parse("ትን​ቢተ ሆሴዕ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ትንቢተ ሆሴዕ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴዕ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ሆሴ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (amh)", () => {
		expect(p.parse("ትን​ቢተ ኢዩ​ኤል 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ትንቢተ ኢዩኤል 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩኤል 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩ. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ኢዩ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (amh)", () => {
		expect(p.parse("ትን​ቢተ አሞጽ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ትንቢተ አሞጽ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞ. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞጽ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("አሞ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (amh)", () => {
		expect(p.parse("ትን​ቢተ አብ​ድዩ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ትንቢተ አብድዩ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብድዩ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብ. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("አብ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (amh)", () => {
		expect(p.parse("ትን​ቢተ ዮናስ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ትንቢተ ዮናስ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮና. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮናስ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ዮና 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (amh)", () => {
		expect(p.parse("ትን​ቢተ ሚክ​ያስ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ትንቢተ ሚክያስ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክያስ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክ. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ሚክ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (amh)", () => {
		expect(p.parse("ትን​ቢተ ናሆም 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ትንቢተ ናሆም 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆ. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆም 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ናሆ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (amh)", () => {
		expect(p.parse("ትን​ቢተ ዕን​ባ​ቆም 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ትንቢተ ዕንባቆም 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ዕንባቆም 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ዕን. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ዕን 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (amh)", () => {
		expect(p.parse("ትን​ቢተ ሶፎ​ን​ያስ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ትንቢተ ሶፎንያስ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎንያስ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎ. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ሶፎ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (amh)", () => {
		expect(p.parse("ትን​ቢተ ሐጌ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ትንቢተ ሐጌ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሐጌ. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ሐጌ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (amh)", () => {
		expect(p.parse("ትን​ቢተ ዘካ​ር​ያስ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ትንቢተ ዘካርያስ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዘካርያስ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዘካ. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ዘካ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (amh)", () => {
		expect(p.parse("ትን​ቢተ ሚል​ክ​ያስ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ትንቢተ ሚልክያስ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚልክያስ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚል. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ሚል 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (amh)", () => {
		expect(p.parse("የማ​ቴ​ዎስ ወን​ጌል 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("የማቴዎስ ወንጌል 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴዎስ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴ. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (amh)", () => {
		expect(p.parse("የማ​ር​ቆስ ወን​ጌል 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("የማርቆስ ወንጌል 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማርቆስ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (amh)", () => {
		expect(p.parse("የሉ​ቃስ ወን​ጌል 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("የሉቃስ ወንጌል 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃስ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (amh)", () => {
		expect(p.parse("የዮ​ሐ​ንስ መል​እ​ክት 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሐ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ዮሐ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (amh)", () => {
		expect(p.parse("የዮ​ሐ​ንስ መእ​ል​ክት 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሐ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ዮሐ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (amh)", () => {
		expect(p.parse("የዮ​ሐ​ንስ መል​እ​ክት 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ኛ የዮሐንስ መልእክት 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 የዮሐንስ መልእክት 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ዮሐንስ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሐ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሐ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (amh)", () => {
		expect(p.parse("1 የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ኛ የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ኛ ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ኛ. የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ኛ. ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("መጽ​ሐፈ የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("መጽ​ሐፈ ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("መጽ​ሐፈ. የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("መጽ​ሐፈ. ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("አንደኛ የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("አንደኛ ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("አንደኛ. የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("አንደኛ. ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ወደ የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ወደ ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ወደ. የዮሐንስ መልእክት 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ወደ. ዮሐንስ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (amh)", () => {
		expect(p.parse("2 የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ኛ የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ኛ ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ኛ. የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ኛ. ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ሁለተኛ የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ሁለተኛ ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ሁለተኛ. የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ሁለተኛ. ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("መጽ​ሐፈ የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("መጽ​ሐፈ ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("መጽ​ሐፈ. የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("መጽ​ሐፈ. ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ወደ የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ወደ ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ወደ. የዮሐንስ መልእክት 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ወደ. ዮሐንስ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (amh)", () => {
		expect(p.parse("የዮ​ሐ​ንስ ወን​ጌል 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("የዮሐንስ ወንጌል 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሐንስ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሐ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሐ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (amh)", () => {
		expect(p.parse("የሐ​ዋ​ር​ያት ሥራ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("የሐዋርያት ሥራ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሐዋርያት ሥራ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሐ.ሥ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("የሐዋ. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ሐሥ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (amh)", () => {
		expect(p.parse("ወደ ሮሜ ሰዎች 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ወደ ሮም ሰዎች 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮም 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (amh)", () => {
		expect(p.parse("1 ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ኛ ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ኛ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ኛ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ኛ. ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ኛ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ኛ. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መጽ​ሐፈ ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መጽ​ሐፈ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መጽ​ሐፈ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መጽ​ሐፈ. ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መጽ​ሐፈ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መጽ​ሐፈ. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("አንደኛ ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("አንደኛ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("አንደኛ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("አንደኛ. ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("አንደኛ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("አንደኛ. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ወደ ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ወደ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ወደ ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ወደ. ቆሮ​ን​ቶስ ሰዎች 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ወደ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ወደ. ቆሮንቶስ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (amh)", () => {
		expect(p.parse("1ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ቆሮ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (amh)", () => {
		expect(p.parse("2 ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ኛ ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ኛ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ኛ ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ኛ. ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ኛ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ኛ. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ሁለተኛ ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ሁለተኛ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ሁለተኛ ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ሁለተኛ. ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ሁለተኛ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ሁለተኛ. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መጽ​ሐፈ ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መጽ​ሐፈ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መጽ​ሐፈ ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መጽ​ሐፈ. ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መጽ​ሐፈ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መጽ​ሐፈ. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ወደ ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ወደ ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ወደ ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ወደ. ቆሮ​ን​ቶስ ሰዎች 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ወደ. ወደ ቆሮንቶስ ሰዎች 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ወደ. ቆሮንቶስ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (amh)", () => {
		expect(p.parse("2ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ቆሮ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (amh)", () => {
		expect(p.parse("ወደ ቈላ​ስ​ይስ ሰዎች 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ወደ ቆላስይስ ሰዎች 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ወደ ቈላስይስ ሰዎች 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላስይስ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላ​. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቆላ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላ. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (amh)", () => {
		expect(p.parse("ወደ ገላ​ትያ ሰዎች 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ወደ ገላትያ ሰዎች 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላ. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (amh)", () => {
		expect(p.parse("ወደ ኤፌ​ሶን ሰዎች 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ወደ ኤፌሶን ሰዎች 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌሶን 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (amh)", () => {
		expect(p.parse("ወደ ፊል​ጵ​ስ​ዩስ ሰዎች 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ወደ ፊልጵስዩስ ሰዎች 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊልጵስዩስ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊልጵ. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊል. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊል 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (amh)", () => {
		expect(p.parse("1 ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ. ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ኛ. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ. ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("አንደኛ. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ. ተሰ​ሎ​ንቄ ሰዎች 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ወደ. ተሰሎንቄ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (amh)", () => {
		expect(p.parse("1ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ተሰ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (amh)", () => {
		expect(p.parse("2 ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ. ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ኛ. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ. ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ሁለተኛ. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መጽ​ሐፈ. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ. ተሰ​ሎ​ንቄ ሰዎች 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ. ወደ ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ. ተሰሎንቄ ሰዎች 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ወደ. ተሰሎንቄ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (amh)", () => {
		expect(p.parse("2ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ተሰ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (amh)", () => {
		expect(p.parse("1 ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ኛ ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ኛ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ኛ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ኛ. ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ኛ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ኛ. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መጽ​ሐፈ ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መጽ​ሐፈ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መጽ​ሐፈ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መጽ​ሐፈ. ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መጽ​ሐፈ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መጽ​ሐፈ. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("አንደኛ ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("አንደኛ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("አንደኛ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("አንደኛ. ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("አንደኛ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("አንደኛ. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ወደ ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ወደ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ወደ. ጢሞ​ቴ​ዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ወደ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ወደ. ጢሞቴዎስ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (amh)", () => {
		expect(p.parse("1ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ጢሞ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (amh)", () => {
		expect(p.parse("2 ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ኛ ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ኛ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ኛ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ኛ. ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ኛ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ኛ. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ሁለተኛ ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ሁለተኛ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ሁለተኛ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ሁለተኛ. ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ሁለተኛ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ሁለተኛ. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መጽ​ሐፈ ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መጽ​ሐፈ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መጽ​ሐፈ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መጽ​ሐፈ. ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መጽ​ሐፈ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መጽ​ሐፈ. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ወደ ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ወደ ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ወደ. ጢሞ​ቴ​ዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ወደ. ወደ ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ወደ. ጢሞቴዎስ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (amh)", () => {
		expect(p.parse("2ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ጢሞ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (amh)", () => {
		expect(p.parse("ወደ ቲቶ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (amh)", () => {
		expect(p.parse("ወደ ፊል​ሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ወደ ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊልሞ. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊሞ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (amh)", () => {
		expect(p.parse("ወደ ዕብራውያን የተላከ መልእክት 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ወደ ዕብ​ራ​ው​ያን 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ወደ ዕብራውያን 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዕብራውያን 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዕብ. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዕብ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (amh)", () => {
		expect(p.parse("የያ​ዕ​ቆብ መል​እ​ክት 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("የያዕቆብ መልእክት 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያዕቆብ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያዕ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያዕ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (amh)", () => {
		expect(p.parse("1 የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ኛ የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ኛ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ኛ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ኛ. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("መጽ​ሐፈ የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("መጽ​ሐፈ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("መጽ​ሐፈ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("መጽ​ሐፈ. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("አንደኛ የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("አንደኛ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("አንደኛ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("አንደኛ. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ወደ የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ወደ ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ወደ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ወደ. ጴጥሮስ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (amh)", () => {
		expect(p.parse("2 የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ኛ የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ኛ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ኛ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ኛ. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ሁለተኛ የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ሁለተኛ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ሁለተኛ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ሁለተኛ. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("መጽ​ሐፈ የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("መጽ​ሐፈ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("መጽ​ሐፈ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("መጽ​ሐፈ. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ወደ የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ወደ ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ወደ. የጴጥሮስ መልእክት 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ወደ. ጴጥሮስ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (amh)", () => {
		expect(p.parse("የጴ​ጥ​ሮስ መል​እ​ክት 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴ​ጥ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴጥ. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ጴጥ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (amh)", () => {
		expect(p.parse("የጴ​ጥ​ሮስ መል​እ​ክት 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴ​ጥ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴጥ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ጴጥ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (amh)", () => {
		expect(p.parse("የይ​ሁዳ መል​እ​ክት 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("የይሁዳ መልእክት 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ጦቢት 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("ጦቢ. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ዮዲት 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("መጽሐፈ ዮዲት 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("ዮዲ. 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (amh)", () => {
		expect(p.parse("መጽ​ሐፈ ባሮክ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("መጽሐፈ ባሮክ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("ባሮክ 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (amh)", () => {
		expect(p.parse("1 መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1ኛ መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1ኛ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("አንደኛ መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("አንደኛ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("ወደ መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("ወደ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (amh)", () => {
		expect(p.parse("2 መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2ኛ መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2ኛ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ሁለተኛ መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ሁለተኛ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("መጽ​ሐፈ መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("መጽ​ሐፈ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ወደ መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ወደ. መጽሐፈ መቃብያን 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (amh)", () => {
		expect(p.parse("1መቃ. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (amh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (amh)", () => {
		expect(p.parse("2መቃ. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
