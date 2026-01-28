"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/grc.js";

describe("Localized book Gen (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (grc)", () => {
		expect(p.parse("Γένεσις 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Γένεση 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Γέν 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Γε 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (grc)", () => {
		expect(p.parse("Έξοδος 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Εξ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ἔξ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (grc)", () => {
		expect(p.parse("Βηλ και Δράκων 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Βηλ 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Βὴλ 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (grc)", () => {
		expect(p.parse("Λευϊτικόν 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Λευϊτικό 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Λευϊτ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Λευ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Λε 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (grc)", () => {
		expect(p.parse("Αριθμοί 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Αριθ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ἀρ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (grc)", () => {
		expect(p.parse("Σοφία Σειράχ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Σοφία Σιραχ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Σειράχ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (grc)", () => {
		expect(p.parse("Σοφία Σαλωμώντος 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Σοφία Σολομώντος 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Σοφία Σολ 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Σοφία 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Σοφ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (grc)", () => {
		expect(p.parse("Θρήνοι Ιερεμίου 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Θρήνοι 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Θρ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (grc)", () => {
		expect(p.parse("Επιστολή Ιερεμίου 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Επιστολὴ ᾿Ιερ 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (grc)", () => {
		expect(p.parse("Αποκάλυψις Ιωάννου 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Αποκαλύψεις 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Αποκάλυψη 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Αποκ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("᾿Απ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Απ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (grc)", () => {
		expect(p.parse("Προσευχή Μανασσή 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Πρ Μαν 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (grc)", () => {
		expect(p.parse("Δευτερονόμιον 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Δευτερονόμιο 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Δευτερ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Δευτ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Δε 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (grc)", () => {
		expect(p.parse("Ιησούς του Ναυή 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ιησ Ναυή 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ιησ Ναυ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ἰη 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (grc)", () => {
		expect(p.parse("Κριτές 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Κριταί 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Κριτ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Κρ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (grc)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ρουθ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("῾Ρθ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (grc)", () => {
		expect(p.parse("Αʹ Έσδρ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Αʹ Έσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Αʹ. Έσδρ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Αʹ. Έσδ 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (grc)", () => {
		expect(p.parse("Βʹ Έσδρ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Βʹ Έσδ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Βʹ. Έσδρ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Βʹ. Έσδ 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (grc)", () => {
		expect(p.parse("Έσδρας Αʹ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Αʹ Έσδ 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (grc)", () => {
		expect(p.parse("Έσδρας Βʹ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Βʹ Έσδ 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (grc)", () => {
		expect(p.parse("Αʹ Έσδρας 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Αʹ. Έσδρας 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (grc)", () => {
		expect(p.parse("Βʹ Έσδρας 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Βʹ. Έσδρας 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (grc)", () => {
		expect(p.parse("Έσδρας 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (grc)", () => {
		expect(p.parse("ΗΣΑΪ́ΑΣ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ΗΣΑΊΑΣ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ησαΐας 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ησ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ἠσ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (grc)", () => {
		expect(p.parse("Αʹ Σαμουήλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Αʹ Σαμ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Αʹ. Σαμουήλ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Αʹ. Σαμ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (grc)", () => {
		expect(p.parse("Βʹ Σαμουήλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βʹ Σαμ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βʹ. Σαμουήλ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βʹ. Σαμ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (grc)", () => {
		expect(p.parse("δυτικός Σαμουήλ Βʹ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Βασιλειών Βʹ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (grc)", () => {
		expect(p.parse("δυτικός Σαμουήλ Αʹ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Βασιλειών Αʹ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (grc)", () => {
		expect(p.parse("Αʹ Βασιλέων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Αʹ Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Αʹ Βα 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Αʹ. Βασιλέων 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Αʹ. Βασ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Αʹ. Βα 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (grc)", () => {
		expect(p.parse("Βʹ Βασιλέων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βʹ Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βʹ Βα 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βʹ. Βασιλέων 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βʹ. Βασ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βʹ. Βα 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (grc)", () => {
		expect(p.parse("δυτικός Βασιλέων Βʹ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βασιλειών Δʹ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Βʹ Βα 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (grc)", () => {
		expect(p.parse("δυτικός Βασιλέων Αʹ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Βασιλειών Γʹ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Αʹ Βα 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (grc)", () => {
		expect(p.parse("Αʹ Χρονικών 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ Χρον 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ Παρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ Πα 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ Χρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ. Χρονικών 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ. Χρον 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ. Παρ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ. Πα 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ. Χρ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (grc)", () => {
		expect(p.parse("Βʹ Χρονικών 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ Χρον 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ Παρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ Πα 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ Χρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ. Χρονικών 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ. Χρον 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ. Παρ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ. Πα 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ. Χρ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (grc)", () => {
		expect(p.parse("δυτικός Χρονικών Βʹ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Παραλειπομένων Βʹ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Χρονικών Βʹ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Βʹ Πα 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (grc)", () => {
		expect(p.parse("δυτικός Χρονικών Αʹ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Παραλειπομένων Αʹ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Χρονικών Αʹ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Αʹ Πα 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (grc)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ἔσ 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (grc)", () => {
		expect(p.parse("Νεεμίας 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Νε 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (grc)", () => {
		expect(p.parse("Εσθήρ στα ελληνικά 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (grc)", () => {
		expect(p.parse("Εσθήρ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Εσθ 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (grc)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ιώβ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ἰβ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (grc)", () => {
		expect(p.parse("Ψαλμοί του Δαυίδ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ψαλμοί 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ψαλμός 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ψα 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (grc)", () => {
		expect(p.parse("Προσευχή Αζαρίου 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Πρ Αζαρ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (grc)", () => {
		expect(p.parse("Παροιμίαι 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Παροιμίες 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Πρμ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (grc)", () => {
		expect(p.parse("Εκκλησιαστής 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ἐκ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (grc)", () => {
		expect(p.parse("Ύμνος των Τριών Παίδων 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Mic (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (grc)", () => {
		expect(p.parse("ΜΙΧΑΪ́ΑΣ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ΜΙΧΑΊΑΣ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Μιχαΐας 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Μιχαίας 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Μχ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Song (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (grc)", () => {
		expect(p.parse("Άσμα Ασμάτων 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ἆσ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (grc)", () => {
		expect(p.parse("Ιερεμίας 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ἰε 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (grc)", () => {
		expect(p.parse("Ιεζεκιήλ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ιεζεκ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ιεζκ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ιεζ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("᾿Ιζ 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (grc)", () => {
		expect(p.parse("Δανιήλ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Δανιηλ 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Δαν 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Δα 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Δν 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (grc)", () => {
		expect(p.parse("Ωσηέ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ὠσ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (grc)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ιωήλ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ἰλ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (grc)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Αμώς 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ἀμ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (grc)", () => {
		expect(p.parse("Αβδιού 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Οβδίας 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ἀβδ 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (grc)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ιωνάς 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ἰν 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Nah (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (grc)", () => {
		expect(p.parse("Ναούμ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Να 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (grc)", () => {
		expect(p.parse("Αββακούμ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Αμβακούμ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ἀβ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (grc)", () => {
		expect(p.parse("Σοφονίας 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Σφν 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (grc)", () => {
		expect(p.parse("Αγγαίος 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ἀγ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (grc)", () => {
		expect(p.parse("Ζαχαρίας 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ζαχ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ζα 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ζχ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (grc)", () => {
		expect(p.parse("Μαλαχίας 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Μαλ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Μα 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (grc)", () => {
		expect(p.parse("Ευαγγελιον Κατα Μαθθαιον 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Κατά Ματθαίον 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Κατά Μαθθαίον 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ματθαίος 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Μαθθαίος 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ματθ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Μθ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (grc)", () => {
		expect(p.parse("Κατά Μάρκον 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Μάρκος 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Μάρκ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Μρ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (grc)", () => {
		expect(p.parse("Κατά Λουκάν 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Λουκάς 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Λουκ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Λκ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (grc)", () => {
		expect(p.parse("Αʹ Ιωάννη 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ ᾿Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ. Ιωάννη 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ. ᾿Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ. Ιω 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (grc)", () => {
		expect(p.parse("Βʹ Ιωάννη 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ ᾿Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ. Ιωάννη 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ. ᾿Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ. Ιω 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (grc)", () => {
		expect(p.parse("Γʹ Ιωάννη 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ ᾿Ιω 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ Ιω 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ. Ιωάννη 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ. ᾿Ιω 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ. Ιω 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (grc)", () => {
		expect(p.parse("Ιωαννου Επιστολη Α 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ιωάννου Αʹ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ιωαννου Α 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ Ιωάννη 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Αʹ ᾿Ιω 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (grc)", () => {
		expect(p.parse("Ιωαννου Επιστολη Β 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ιωάννου Βʹ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ιωαννου Β 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ Ιωάννη 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Βʹ ᾿Ιω 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (grc)", () => {
		expect(p.parse("Ιωαννου Επιστολη Γ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ιωάννου Γʹ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ιωαννου Γ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ Ιωάννη 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Γʹ ᾿Ιω 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (grc)", () => {
		expect(p.parse("Κατά Ιωάννην 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ιωάννης 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ιωάν 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ἰω 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (grc)", () => {
		expect(p.parse("Πράξεις των Αποστόλων 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Πραξεις Αποστολων 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Πράξεις 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Πράξ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Πρξ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (grc)", () => {
		expect(p.parse("Προς Ρωμαίους 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ρωμαίους 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ρωμ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("῾Ρω 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (grc)", () => {
		expect(p.parse("Αʹ Κορινθίους 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ Κο 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ. Κορινθίους 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ. Κορ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ. Κο 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (grc)", () => {
		expect(p.parse("Βʹ Κορινθίους 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ Κο 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ. Κορινθίους 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ. Κορ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ. Κο 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (grc)", () => {
		expect(p.parse("Προς Κορινθίους Βʹ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Προς Κορινθιους Β 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ Κορινθίους 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Βʹ Κο 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (grc)", () => {
		expect(p.parse("Προς Κορινθίους Αʹ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Προς Κορινθιους Α 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ Κορινθίους 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Αʹ Κο 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (grc)", () => {
		expect(p.parse("Προς Γαλάτας 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Γαλάτες 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Γαλ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Γα 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (grc)", () => {
		expect(p.parse("Προς Εφεσίους 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Εφεσίους 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("᾿Εφ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Εφ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (grc)", () => {
		expect(p.parse("Προς Φιλιππησίους 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Φιλιππησίους 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Φι 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (grc)", () => {
		expect(p.parse("Προς Κολασσαεις 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Προς Κολοσσαείς 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Κολοσσαείς 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Κολ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Κλ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (grc)", () => {
		expect(p.parse("Αʹ Θεσσαλονικείς 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ Θε 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ. Θεσσαλονικείς 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ. Θεσ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ. Θε 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (grc)", () => {
		expect(p.parse("Βʹ Θεσσαλονικείς 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ Θε 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ. Θεσσαλονικείς 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ. Θεσ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ. Θε 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (grc)", () => {
		expect(p.parse("Προς Θεσσαλονικείς Βʹ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Προς Θεσσαλονικεις Β 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ Θεσσαλονικείς 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Βʹ Θε 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (grc)", () => {
		expect(p.parse("Προς Θεσσαλονικείς Αʹ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Προς Θεσσαλονικεις Α 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ Θεσσαλονικείς 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Αʹ Θε 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (grc)", () => {
		expect(p.parse("Αʹ Τιμόθεο 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ Τι 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ. Τιμόθεο 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ. Τιμ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ. Τι 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (grc)", () => {
		expect(p.parse("Βʹ Τιμόθεο 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ Τι 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ. Τιμόθεο 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ. Τιμ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ. Τι 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (grc)", () => {
		expect(p.parse("Προς Τιμόθεον Βʹ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Προς Τιμοθεον Β 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ Τιμόθεο 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Βʹ Τι 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (grc)", () => {
		expect(p.parse("Προς Τιμόθεον Αʹ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Προς Τιμοθεον Α 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ Τιμόθεο 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Αʹ Τι 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (grc)", () => {
		expect(p.parse("Προς Τίτον 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Τίτο 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Τίτ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ττ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (grc)", () => {
		expect(p.parse("Προς Φιλήμονα 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Φιλήμονα 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Φλμ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (grc)", () => {
		expect(p.parse("Προς Εβραίους 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Εβραίους 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Εβρ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ἑβ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (grc)", () => {
		expect(p.parse("Ιακωβου Επιστολη 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ιακώβου 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("᾿Ια 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (grc)", () => {
		expect(p.parse("Αʹ Πέτρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ Πέτρ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ Πέτ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ Πέ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ. Πέτρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ. Πέτρ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ. Πέτ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ. Πέ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ. Πε 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (grc)", () => {
		expect(p.parse("Βʹ Πέτρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ Πέτρ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ Πέτ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ Πέ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ. Πέτρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ. Πέτρ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ. Πέτ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ. Πέ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ. Πε 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (grc)", () => {
		expect(p.parse("Πετρου Επιστολη Β 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Πέτρου Βʹ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ Πέτρου 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Πετρου Β 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Βʹ Πε 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (grc)", () => {
		expect(p.parse("Πετρου Επιστολη Α 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πέτρου Αʹ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ Πέτρου 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Πετρου Α 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Αʹ Πε 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (grc)", () => {
		expect(p.parse("Ιουδα Επιστολη 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ιούδα 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("᾿Ιδ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (grc)", () => {
		expect(p.parse("Τωβίτ 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Τωβ 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (grc)", () => {
		expect(p.parse("Ιουδίθ 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ιδθ 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (grc)", () => {
		expect(p.parse("Βαρούχ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Βαρ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Βρ 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (grc)", () => {
		expect(p.parse("Σουσάννα 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Σωσάννα 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Σουσ 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (grc)", () => {
		expect(p.parse("Αʹ Μακκαβαίων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Αʹ Μακκ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Αʹ. Μακκαβαίων 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Αʹ. Μακκ 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (grc)", () => {
		expect(p.parse("Βʹ Μακκαβαίων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βʹ Μακκ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βʹ. Μακκαβαίων 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βʹ. Μακκ 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (grc)", () => {
		expect(p.parse("Γʹ Μακκαβαίων 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γʹ Μακκ 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γʹ. Μακκαβαίων 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γʹ. Μακκ 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (grc)", () => {
		expect(p.parse("Δʹ Μακκαβαίων 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Δʹ Μακκ 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Δʹ. Μακκαβαίων 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Δʹ. Μακκ 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (grc)", () => {
		expect(p.parse("Μακκαβαίων Βʹ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Βʹ Μακκ 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (grc)", () => {
		expect(p.parse("Μακκαβαίων Γʹ 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Γʹ Μακκ 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (grc)", () => {
		expect(p.parse("Μακκαβαίων Δʹ 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Δʹ Μακκ 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (grc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (grc)", () => {
		expect(p.parse("Μακκαβαίων Αʹ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Αʹ Μακκ 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
