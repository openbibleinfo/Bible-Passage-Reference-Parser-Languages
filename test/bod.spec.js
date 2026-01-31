"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bod.js";

describe("Localized book Gen (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bod)", () => {
		expect(p.parse("བཀོད་པ་ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("བཀོད་པ། 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("བཀོད་པ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bod)", () => {
		expect(p.parse("ཨེ་ཅིབ་ནས་ཐོན་པ། 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("སྡེབ་ཐོན་ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("སྡེབ་ཐོན 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bod)", () => {
		expect(p.parse("ལེ་ཝིའི་ཚུལ་ཁྲིམས། 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ལེ་ཝི་ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ལེ་ཝི 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bod)", () => {
		expect(p.parse("གྲངས་ཀ་ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("གྲངས་ཀ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bod)", () => {
		expect(p.parse("སྐྱོ་གླུ། 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("སྐྱོ་གླུ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bod)", () => {
		expect(p.parse("མངོན་པ། 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bod)", () => {
		expect(p.parse("བཀའ་ཁྲིམས་སྐྱར་བཤད་ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("བཀའ་ལུང་། 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bod)", () => {
		expect(p.parse("ཡོ་ཤུ་ཨ་ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ཡོ་ཤུ་ཨ། 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ཡོ་ཤུ་ཨ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bod)", () => {
		expect(p.parse("ཁྲིམས་དཔོན་ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ཁྲིམས་དཔོན། 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ཁྲིམས་དཔོན 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bod)", () => {
		expect(p.parse("རུ་ཐི། 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("རུད 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bod)", () => {
		expect(p.parse("ཡེ་ཤ་ཡཱ་ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ཡེ་ཤ་ཡཱ། 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ཡེ་ཤ་ཡཱ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bod)", () => {
		expect(p.parse("༡ ཤ་མུ་ཨེལ། 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("༡. ཤ་མུ་ཨེལ། 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bod)", () => {
		expect(p.parse("སཱ་མུ་ཨེལ་དང་པོ། 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ཤ་མུ་ཨེལ་དང་པོ། 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bod)", () => {
		expect(p.parse("༢ ཤ་མུ་ཨེལ་ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("༢. ཤ་མུ་ཨེལ་ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bod)", () => {
		expect(p.parse("སཱ་མུ་ཨེལ་གཉིས་པ། 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ཤ་མུ་ཨེལ་གཉིས་པ། 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bod)", () => {
		expect(p.parse("༡ རྒྱལ་རབས་ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("༡. རྒྱལ་རབས་ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bod)", () => {
		expect(p.parse("༢ རྒྱལ་རབས་ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("༢. རྒྱལ་རབས་ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bod)", () => {
		expect(p.parse("རྒྱལ་རབས་དང་པོ། 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bod)", () => {
		expect(p.parse("རྒྱལ་རབས་གཉིས་པ། 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bod)", () => {
		expect(p.parse("༡ སྔོན་རབ་ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("༡. སྔོན་རབ་ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bod)", () => {
		expect(p.parse("སྔོན་རབས་དང་པོ། 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bod)", () => {
		expect(p.parse("༢ སྔོན་རབས་ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("༢. སྔོན་རབས་ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bod)", () => {
		expect(p.parse("སྔོན་རབས་གཉིས་པ། 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bod)", () => {
		expect(p.parse("ཨེས་སི་རཱ། 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ཨེཛ་ར 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bod)", () => {
		expect(p.parse("ནེ་ཧེམ་ཡཱ། 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ནེ་ཧེམ་ཡཱ 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bod)", () => {
		expect(p.parse("ཨེས་སི་ཐེར། 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ཨེསེ་ཐར 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bod)", () => {
		expect(p.parse("ཨེས་ཡོབ། 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ཡོབ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bod)", () => {
		expect(p.parse("གསུང་མགུར་ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("གསུང་མགུར། 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("གསུང་མགུར 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bod)", () => {
		expect(p.parse("ལེགས་བཤད། 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ལེགས་བཤད 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bod)", () => {
		expect(p.parse("འཆད་པ་པོ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("སྟོན་པ། 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bod)", () => {
		expect(p.parse("སྙན་མགུར། 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("གསུང་གླུ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bod)", () => {
		expect(p.parse("ཡེ་རེམ་ཡཱ། 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ཡེར་མི་ཡཱ་ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ཡེར་མི་ཡཱ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bod)", () => {
		expect(p.parse("ཨི་ཛི་ཀི་ཨེལ་ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ཨེ་ཟེ་ཀི་ཨེལ། 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ཨི་ཛི་ཀི་ཨེལ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bod)", () => {
		expect(p.parse("དཱ་ནེ་ཨེལ། 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("དྷ་ནི་ཨེལ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bod)", () => {
		expect(p.parse("ཧོ་ཤེ་ཨ། 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ཧོ་ཟེ། 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ཧོ་ཟེ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bod)", () => {
		expect(p.parse("ཡོ་ཨེལ། 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ཡོ་ཨེལ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bod)", () => {
		expect(p.parse("ཨ་མའོ་སི། 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ཨ་མོསེ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bod)", () => {
		expect(p.parse("ཨོ་བ་དི་ཡཱ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ཨོ་བད་ཡཱ། 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bod)", () => {
		expect(p.parse("ཡོ་ནཱ། 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ཡོ་ནཱ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bod)", () => {
		expect(p.parse("མི་ཀཱ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bod)", () => {
		expect(p.parse("ནཱ་ཧུམ། 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ན་ཧུམ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bod)", () => {
		expect(p.parse("ཧ་བྷ་ཀུག 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ཧ་བཱ་ཁུག 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bod)", () => {
		expect(p.parse("ཛེ་ཕ་ནི་ཡཱ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ཟེ་ཕན་ཡཱ། 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bod)", () => {
		expect(p.parse("ཧག་གཱ་ཨི། 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ཧག་གྷཨེ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bod)", () => {
		expect(p.parse("ཟཱ་ཀར་ཡཱ། 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ཛ་ཀར་ཡ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bod)", () => {
		expect(p.parse("མཱལ་ཨ་ཀེ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("མ་ལ་ཀི 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bod)", () => {
		expect(p.parse("མད་ཐཱ། 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bod)", () => {
		expect(p.parse("མཱཪ་ཀུ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("མར་ཀུ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bod)", () => {
		expect(p.parse("ལུ་ཀཱ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ལོ་ཀུ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bod)", () => {
		expect(p.parse("ཡོ་ཧ་ནན་དང་པོ། 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ཡོ་ཧ་ནན། ༡ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bod)", () => {
		expect(p.parse("ཡོ་ཧ་ནན་གཉིས་པ། 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ཡོ་ཧ་ནན། ༢ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bod)", () => {
		expect(p.parse("ཡོ་ཧ་ནན་གསུམ་པ། 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ཡོ་ཧ་ནན། ༣ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bod)", () => {
		expect(p.parse("ཡོ་ཧ་ནན། 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bod)", () => {
		expect(p.parse("མཛད་འཕྲིན། 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("མཛད་པ། 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bod)", () => {
		expect(p.parse("རོ་མཱ་པ། 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bod)", () => {
		expect(p.parse("ཀོ་རིན་ཐུ་པ་དང་པོ། 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ཀོ་རིན་ཐུ་པ། ༡ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bod)", () => {
		expect(p.parse("ཀོ་རིན་ཐུ་པ་གཉིས་པ། 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ཀོ་རིན་ཐུ་པ། ༢ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bod)", () => {
		expect(p.parse("ཀོ་ལོ་སཱ་པ། 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bod)", () => {
		expect(p.parse("ག་ལད་ཡཱ་པ། 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bod)", () => {
		expect(p.parse("ཨེ་ཕེ་སི་པ། 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ཨེ་ཕེ་སུ་པ། 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bod)", () => {
		expect(p.parse("ཕི་ལིབ་པཱི་པ། 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ཕི་ལིབ་པི་པ། 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bod)", () => {
		expect(p.parse("ཐེ་སཱ་ལོ་ནེ་ཀེ་པ་དང་པོ། 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ཐེ་ས་ལོ་ནི་ཀེ་པ། ༡ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bod)", () => {
		expect(p.parse("ཐེ་སཱ་ལོ་ནེ་ཀེ་པ་གཉིས་པ། 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ཐེ་ས་ལོ་ནི་ཀེ་པ། ༢ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bod)", () => {
		expect(p.parse("ཐི་མོ་ཐེ་དང་པོ། 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ཐི་མོ་ཐེ། ༡ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bod)", () => {
		expect(p.parse("ཐི་མོ་ཐེ་གཉིས་པ། 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ཐི་མོ་ཐེ། ༢ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bod)", () => {
		expect(p.parse("ཐེ་ཏུ། 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bod)", () => {
		expect(p.parse("ཕི་ལེ་མོན། 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bod)", () => {
		expect(p.parse("ཡ་ཧུ་དཱ་པ། 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ཨིབ་རི་པ། 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bod)", () => {
		expect(p.parse("ཡ་ཀོབ། 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bod)", () => {
		expect(p.parse("པེ་ཏྲོ་དང་པོ། 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("པེ་ཏྲོ། ༡ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bod)", () => {
		expect(p.parse("པེ་ཏྲོ་གཉིས་པ། 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("པེ་ཏྲོ། ༢ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bod)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bod)", () => {
		expect(p.parse("ཡ་ཧུ་དཱ། 1:1").osis()).toEqual("Jude.1.1");
	});
});
