"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ell.js";

describe("Localized book Gen (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ell)", () => {
		expect(p.parse("Γενεσισ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Γεν 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ell)", () => {
		expect(p.parse("Εξοδοσ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Εξ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ell)", () => {
		expect(p.parse("Λευιτικον 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Λευ 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ell)", () => {
		expect(p.parse("Αριθμοι 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Αρ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ell)", () => {
		expect(p.parse("Σοφια Σειραχ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Σειρ 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ell)", () => {
		expect(p.parse("Σοφια Σολομωντοσ 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Σολ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ell)", () => {
		expect(p.parse("Θρηνοι 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Θρ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ell)", () => {
		expect(p.parse("Επιστολη Ιερεμιου 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("ΕπΙ 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ell)", () => {
		expect(p.parse("Aπokaλyψh Toy Iωannoy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Αποκαλυψισ Ιωαννου 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Αποκαλυψη Ιωαννου 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Απ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ell)", () => {
		expect(p.parse("Δευτερονομιον 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Δτ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ell)", () => {
		expect(p.parse("Ιησουσ Του Ναυη 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ιησ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ell)", () => {
		expect(p.parse("Κριται 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Κρ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ell)", () => {
		expect(p.parse("Ρουθ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ell)", () => {
		expect(p.parse("Ησαϊασ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ησ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ell)", () => {
		expect(p.parse("Α΄ Σαμουηλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Α΄ Σαμ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Α΄. Σαμουηλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Α΄. Σαμ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Πpωth Σαμουηλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Πpωth Σαμ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Πpωth. Σαμουηλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Πpωth. Σαμ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Προσ Σαμουηλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Προσ Σαμ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Προσ. Σαμουηλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Προσ. Σαμ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ell)", () => {
		expect(p.parse("Βασιλειων Α΄ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ell)", () => {
		expect(p.parse("Α΄ Βασιλεων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Α΄ Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Α΄. Βασιλεων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Α΄. Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Πpωth Βασιλεων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Πpωth Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Πpωth. Βασιλεων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Πpωth. Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Προσ Βασιλεων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Προσ Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Προσ. Βασιλεων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Προσ. Βασ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ell)", () => {
		expect(p.parse("Ή Βασιλειων Γ΄ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ell)", () => {
		expect(p.parse("Β΄ Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Β΄ Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Β΄ Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Β΄. Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Β΄. Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Β΄. Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειων Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειων Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειων Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειων. Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειων. Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειων. Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Δeyteph Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Δeyteph Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Δeyteph Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Δeyteph. Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Δeyteph. Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Δeyteph. Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Προσ Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Προσ Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Προσ Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Προσ. Βασιλεων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Προσ. Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Προσ. Δ΄ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ell)", () => {
		expect(p.parse("Α΄ Χρονικων 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Α΄ Χρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Α΄. Χρονικων 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Α΄. Χρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Πpωth Χρονικων 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Πpωth Χρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Πpωth. Χρονικων 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Πpωth. Χρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Προσ Χρονικων 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Προσ Χρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Προσ. Χρονικων 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Προσ. Χρ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ell)", () => {
		expect(p.parse("Β΄ Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Β΄ Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Β΄. Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Β΄. Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βασιλειων Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βασιλειων Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βασιλειων. Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βασιλειων. Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Δeyteph Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Δeyteph Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Δeyteph. Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Δeyteph. Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Προσ Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Προσ Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Προσ. Χρονικων 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Προσ. Χρ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ell)", () => {
		expect(p.parse("Παραλειπομενων Α΄ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ell)", () => {
		expect(p.parse("Παραλειπομενων Β΄ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ell)", () => {
		expect(p.parse("Β΄ Εσδρασ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Εσδρασ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Εσδ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book 1Esd (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ell)", () => {
		expect(p.parse("Α΄ Εσδρασ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Α΄ Εσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Α΄. Εσδρασ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Α΄. Εσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Πpωth Εσδρασ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Πpωth Εσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Πpωth. Εσδρασ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Πpωth. Εσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Προσ Εσδρασ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Προσ Εσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Προσ. Εσδρασ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Προσ. Εσδ 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book Neh (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ell)", () => {
		expect(p.parse("Νεεμιασ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Νε 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ell)", () => {
		expect(p.parse("Ιωβ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ell)", () => {
		expect(p.parse("Ψαλμοι 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ψλ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ell)", () => {
		expect(p.parse("Παροιμιαι 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Παρ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ell)", () => {
		expect(p.parse("Εκκλησιαστησ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Εκ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ell)", () => {
		expect(p.parse("Ασμα Ασματων 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ασμ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ell)", () => {
		expect(p.parse("Ιερεμιασ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ιερ 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ell)", () => {
		expect(p.parse("Ιεζεκιηλ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ιεζ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ell)", () => {
		expect(p.parse("Ωσηε 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ωσ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ell)", () => {
		expect(p.parse("Ιωηλ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ιλ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ell)", () => {
		expect(p.parse("Αμωσ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Αμ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ell)", () => {
		expect(p.parse("Οβδιου 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Οβδ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ell)", () => {
		expect(p.parse("Ιωνασ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ιων 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ell)", () => {
		expect(p.parse("Μιχαιασ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Μιχ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ell)", () => {
		expect(p.parse("Ναουμ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Νμ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ell)", () => {
		expect(p.parse("Αββακουμ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Αβ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ell)", () => {
		expect(p.parse("Σοφονιασ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Σφν 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ell)", () => {
		expect(p.parse("Αγγαιοσ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Αγγ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ell)", () => {
		expect(p.parse("Ζαχαριασ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ζαχ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ell)", () => {
		expect(p.parse("Μαλαχιασ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Μαλ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ell)", () => {
		expect(p.parse("To Kata Matθaion Eyaγγeλio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Κατα Ματθαιον 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Μτ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ell)", () => {
		expect(p.parse("To Kata Μαρκον Eyaγγeλio 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Κατα Μαρκον 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Μκ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ell)", () => {
		expect(p.parse("To Kata Λoykan Eyaγγeλio 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Κατα Λουκαν 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucan 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Λκ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ell)", () => {
		expect(p.parse("Γ΄ Ιωαννου 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γ΄ Ιω 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γ΄. Ιωαννου 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γ΄. Ιω 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 3John (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ell)", () => {
		expect(p.parse("Tpith Eπiσtoλh Iωannoy 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ell)", () => {
		expect(p.parse("Α΄ Eπiσtoλh Iωannoy 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Α΄ Ιωαννου 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Α΄ Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Α΄. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Α΄. Ιωαννου 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Α΄. Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Πpωth Eπiσtoλh Iωannoy 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Πpωth Ιωαννου 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Πpωth Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Πpωth. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Πpωth. Ιωαννου 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Πpωth. Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Προσ Eπiσtoλh Iωannoy 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Προσ Ιωαννου 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Προσ Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Προσ. Ιωαννου 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Προσ. Ιω 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ell)", () => {
		expect(p.parse("Β΄ Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Β΄ Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Β΄ Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Β΄. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Β΄. Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Β΄. Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βασιλειων Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βασιλειων Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βασιλειων Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βασιλειων. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βασιλειων. Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βασιλειων. Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Δeyteph Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Δeyteph Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Δeyteph Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Δeyteph. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Δeyteph. Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Δeyteph. Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Προσ Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Προσ Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Προσ Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Iωannoy 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Προσ. Ιωαννου 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Προσ. Ιω 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ell)", () => {
		expect(p.parse("To Kata Iωannhn Eyaγγeλio 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Κατα Ιωαννην 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ιω 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ell)", () => {
		expect(p.parse("Πpaξeiσ Tωn Aπoσtoλωn 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Πραξεισ Αποστολων 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Praxis 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Πραξ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Pωmaioyσ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Προσ Ρωμαιουσ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ρωμ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ell)", () => {
		expect(p.parse("Β΄ Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Β΄ Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Β΄. Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Β΄. Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βασιλειων Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βασιλειων Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βασιλειων. Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βασιλειων. Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Δeyteph Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Δeyteph Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Δeyteph. Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Δeyteph. Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Προσ Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Προσ Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Προσ. Κορινθιουσ Β΄ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Προσ. Κορ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ell)", () => {
		expect(p.parse("Δeytepη Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ell)", () => {
		expect(p.parse("Α΄ Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Α΄ Κορινθιουσ Α΄ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Α΄ Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Α΄. Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Α΄. Κορινθιουσ Α΄ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Α΄. Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Πpωth Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Πpωth Κορινθιουσ Α΄ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Πpωth Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Πpωth. Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Πpωth. Κορινθιουσ Α΄ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Πpωth. Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προσ Κορινθιουσ Α΄ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προσ Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πpoσ Kopinθioyσ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προσ. Κορινθιουσ Α΄ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προσ. Κορ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Col (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Koλoσσaeiσ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Προσ Κολοσσαεισ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Κολ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Γaλataσ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Προσ Γαλατασ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Γαλ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Eφeσioyσ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Προσ Εφεσιουσ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Εφ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Φiλiππhσioyσ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Προσ Φιλιππησιουσ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Φιλ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ell)", () => {
		expect(p.parse("Α΄ Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Α΄ Θεσσαλονικεισ Α΄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Α΄ Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Α΄. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Α΄. Θεσσαλονικεισ Α΄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Α΄. Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Πpωth Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Πpωth Θεσσαλονικεισ Α΄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Πpωth Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Πpωth. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Πpωth. Θεσσαλονικεισ Α΄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Πpωth. Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προσ Θεσσαλονικεισ Α΄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προσ Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προσ. Θεσσαλονικεισ Α΄ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προσ. Θεσ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ell)", () => {
		expect(p.parse("Β΄ Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Β΄ Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Β΄ Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Β΄. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Β΄. Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Β΄. Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βασιλειων Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βασιλειων Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βασιλειων Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βασιλειων. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βασιλειων. Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βασιλειων. Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Δeyteph Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Δeyteph Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Δeyteph Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Δeyteph. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Δeyteph. Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Δeyteph. Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προσ Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προσ Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πpoσ Θeσσaλonikeiσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προσ. Θεσσαλονικεισ Β΄ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προσ. Θεσ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Sam (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ell)", () => {
		expect(p.parse("Β΄ Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Β΄ Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Β΄ Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Β΄. Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Β΄. Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Β΄. Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειων Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειων Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειων Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειων. Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειων. Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειων. Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Δeyteph Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Δeyteph Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Δeyteph Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Δeyteph. Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Δeyteph. Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Δeyteph. Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Προσ Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Προσ Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Προσ Β΄ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Προσ. Σαμουηλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Προσ. Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Προσ. Β΄ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Tim (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ell)", () => {
		expect(p.parse("Α΄ Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Α΄ Προσ Τιμοθεον 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Α΄ Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Α΄. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Α΄. Προσ Τιμοθεον 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Α΄. Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Πpωth Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Πpωth Προσ Τιμοθεον 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Πpωth Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Πpωth. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Πpωth. Προσ Τιμοθεον 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Πpωth. Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προσ Προσ Τιμοθεον 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προσ Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προσ. Προσ Τιμοθεον 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προσ. Τιμ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ell)", () => {
		expect(p.parse("Β΄ Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Β΄ Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Β΄ Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Β΄. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Β΄. Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Β΄. Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βασιλειων Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βασιλειων Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βασιλειων Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βασιλειων. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βασιλειων. Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βασιλειων. Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Δeyteph Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Δeyteph Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Δeyteph Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Δeyteph. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Δeyteph. Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Δeyteph. Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προσ Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προσ Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πpoσ Timoθeon 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προσ. Προσ Τιμοθεον 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προσ. Τιμ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Titon 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Προσ Τιτον 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Τιτ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Φiλhmona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Προσ Φιλημονα 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Φλμ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ell)", () => {
		expect(p.parse("Eπiσtoλh Πpoσ Ebpaioyσ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Προσ Εβραιουσ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Εβρ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ell)", () => {
		expect(p.parse("Eπiσtoλh Iakωboy 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ιακωβου 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ιακ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ell)", () => {
		expect(p.parse("Α΄ Eπiσtoλh Πetpoy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Α΄ Πετρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Α΄ Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Α΄. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Α΄. Πετρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Α΄. Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πpωth Eπiσtoλh Πetpoy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πpωth Πετρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πpωth Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πpωth. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πpωth. Πετρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πpωth. Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πetpoy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Προσ Πετρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Προσ Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Προσ. Πετρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Προσ. Πε 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ell)", () => {
		expect(p.parse("Β΄ Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Β΄ Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Β΄ Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Β΄. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Β΄. Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Β΄. Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βασιλειων Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βασιλειων Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βασιλειων Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βασιλειων. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βασιλειων. Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βασιλειων. Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Δeyteph Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Δeyteph Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Δeyteph Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Δeyteph. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Δeyteph. Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Δeyteph. Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Προσ Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Προσ Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Προσ Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Προσ. Eπiσtoλh Πetpoy 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Προσ. Πετρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Προσ. Πε 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ell)", () => {
		expect(p.parse("Eπiσtoλh Ioyδa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ιουδα 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ell)", () => {
		expect(p.parse("Τωβιτ 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Τωβ 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ell)", () => {
		expect(p.parse("Ιουδιθ 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ιδθ 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ell)", () => {
		expect(p.parse("Βαρουχ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Βαρ 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ell)", () => {
		expect(p.parse("Α΄ Μακκαβαιων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Α΄ Μακ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Α΄. Μακκαβαιων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Α΄. Μακ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Πpωth Μακκαβαιων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Πpωth Μακ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Πpωth. Μακκαβαιων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Πpωth. Μακ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Προσ Μακκαβαιων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Προσ Μακ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Προσ. Μακκαβαιων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Προσ. Μακ 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ell)", () => {
		expect(p.parse("Β΄ Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Β΄ Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Β΄. Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Β΄. Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βασιλειων Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βασιλειων Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βασιλειων. Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βασιλειων. Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Δeyteph Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Δeyteph Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Δeyteph. Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Δeyteph. Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Προσ Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Προσ Μακ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Προσ. Μακκαβαιων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Προσ. Μακ 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ell)", () => {
		expect(p.parse("Γ΄ Μακκαβαιων 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γ΄ Μακ 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γ΄. Μακκαβαιων 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γ΄. Μακ 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book Dan (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ell)", () => {
		expect(p.parse("Δανιηλ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Δαν 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ell)", () => {
		expect(p.parse("Εσθηρ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Εσθ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (ell)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ell)", () => {
		expect(p.parse("Α΄ ΧΡΟΝΙΚΩΝ (Ή ΠΑΡΑΛΕΙΠΟΜΕΝΩΝ Α΄) 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Α΄ ΒΑΣΙΛΕΩΝ (ή ΒΑΣΙΛΕΙΩΝ Γ΄) 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Α΄ ΣΑΜΟΥΗΛ (ή ΒΑΣΙΛΕΙΩΝ Α΄) 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Β΄ ΧΡΟΝΙΚΩΝ (Ή ΠΑΡΑΛΕΙΠΟΜΕΝΩΝ Β΄) 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Β΄ ΒΑΣΙΛΕΩΝ (ή ΒΑΣΙΛΕΙΩΝ Δ΄) 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Β΄ ΣΑΜΟΥΗΛ (ή ΒΑΣΙΛΕΙΩΝ Β΄) 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ΕΣΔΡΑΣ (ή Β΄ ΕΣΔΡΑΣ) 1:1").osis()).toEqual("Ezra.1.1");
	});
});
