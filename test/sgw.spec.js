"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sgw.js";

describe("Localized book Gen (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sgw)", () => {
		expect(p.parse("ፍጥ. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sgw)", () => {
		expect(p.parse("ዘፃት 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sgw)", () => {
		expect(p.parse("ሌዊ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sgw)", () => {
		expect(p.parse("ዝር 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sgw)", () => {
		expect(p.parse("ኤርብ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sgw)", () => {
		expect(p.parse("ራዕይ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sgw)", () => {
		expect(p.parse("ዘዳ. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sgw)", () => {
		expect(p.parse("ኢያሱ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sgw)", () => {
		expect(p.parse("መሳ. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sgw)", () => {
		expect(p.parse("ሩት 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sgw)", () => {
		expect(p.parse("ኢሳ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sgw)", () => {
		expect(p.parse("1ነ ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ነ. ሳሙ. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sgw)", () => {
		expect(p.parse("2ነ ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ነ. ሳሙ. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sgw)", () => {
		expect(p.parse("1ነ ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ነ. ነገ. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sgw)", () => {
		expect(p.parse("2ነ ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ነ. ነገ. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sgw)", () => {
		expect(p.parse("1ነ ዜና 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ነ. ዜና 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sgw)", () => {
		expect(p.parse("2ነ ዜና 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ነ. ዜና 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sgw)", () => {
		expect(p.parse("እዝራ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sgw)", () => {
		expect(p.parse("ነኽ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sgw)", () => {
		expect(p.parse("አስ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sgw)", () => {
		expect(p.parse("ኢዮብ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sgw)", () => {
		expect(p.parse("ዝምራ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sgw)", () => {
		expect(p.parse("ወማ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sgw)", () => {
		expect(p.parse("ሰባ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sgw)", () => {
		expect(p.parse("መጣፍ ተዝምራ ዝም 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sgw)", () => {
		expect(p.parse("ኤር 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sgw)", () => {
		expect(p.parse("ኽዝ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sgw)", () => {
		expect(p.parse("ዳን 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sgw)", () => {
		expect(p.parse("ኾሴ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sgw)", () => {
		expect(p.parse("ኢዩ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sgw)", () => {
		expect(p.parse("አሞፅ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sgw)", () => {
		expect(p.parse("አብ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sgw)", () => {
		expect(p.parse("ዮናስ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sgw)", () => {
		expect(p.parse("ሚክ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sgw)", () => {
		expect(p.parse("ናኾም 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sgw)", () => {
		expect(p.parse("እን 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sgw)", () => {
		expect(p.parse("ሶፎ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sgw)", () => {
		expect(p.parse("ኻጌ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sgw)", () => {
		expect(p.parse("ዘካ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sgw)", () => {
		expect(p.parse("ሚል 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sgw)", () => {
		expect(p.parse("ማቴ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sgw)", () => {
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sgw)", () => {
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sgw)", () => {
		expect(p.parse("1ነ ዮኻ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ነ. ዮኻ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sgw)", () => {
		expect(p.parse("2ነ ዮኻ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ነ. ዮኻ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sgw)", () => {
		expect(p.parse("3ነ ዮኻ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ነ. ዮኻ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sgw)", () => {
		expect(p.parse("ዮኻ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sgw)", () => {
		expect(p.parse("ና. ሜና. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sgw)", () => {
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sgw)", () => {
		expect(p.parse("1ነ ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ነ. ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sgw)", () => {
		expect(p.parse("2ነ ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ነ. ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sgw)", () => {
		expect(p.parse("ቆላ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sgw)", () => {
		expect(p.parse("ገላ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sgw)", () => {
		expect(p.parse("ኤፌ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sgw)", () => {
		expect(p.parse("ፊል 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sgw)", () => {
		expect(p.parse("1ነ ተሰ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ነ. ተሰ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sgw)", () => {
		expect(p.parse("2ነ ተሰ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ነ. ተሰ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sgw)", () => {
		expect(p.parse("1ነ ጢሞ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ነ. ጢሞ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sgw)", () => {
		expect(p.parse("2ነ ጢሞ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ነ. ጢሞ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sgw)", () => {
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sgw)", () => {
		expect(p.parse("ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sgw)", () => {
		expect(p.parse("እብ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sgw)", () => {
		expect(p.parse("ያእ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sgw)", () => {
		expect(p.parse("1ነ ጴጥ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ነ. ጴጥ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sgw)", () => {
		expect(p.parse("2ነ ጴጥ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ነ. ጴጥ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sgw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sgw)", () => {
		expect(p.parse("ይኹዳ 1:1").osis()).toEqual("Jude.1.1");
	});
});
