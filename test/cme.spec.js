"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cme.js";

describe("Localized book Rev (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cme)", () => {
		expect(p.parse("Ãmpigãama 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Amp. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cme)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cme)", () => {
		expect(p.parse("Marke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cme)", () => {
		expect(p.parse("Lik. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Like 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cme)", () => {
		expect(p.parse("Nsãa dĩɛ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Ns. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cme)", () => {
		expect(p.parse("Nsãa hãa. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Ns. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cme)", () => {
		expect(p.parse("Nsãa siɛ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ns. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cme)", () => {
		expect(p.parse("Nsa. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Nsãa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cme)", () => {
		expect(p.parse("Pɔpuɔr. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Maa. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cme)", () => {
		expect(p.parse("Ɔrɔmutaamba sɛbɛ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɔrɔ. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cme)", () => {
		expect(p.parse("Korɛ̃ntitaamba sɛbɛdĩɛlãŋo. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cme)", () => {
		expect(p.parse("Korɛ̃ntitaamba sɛbɛhãalĩŋo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cme)", () => {
		expect(p.parse("Kolɔsitaamba. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cme)", () => {
		expect(p.parse("Galasitaamba sɛbɛ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cme)", () => {
		expect(p.parse("Efɛsitaamba sɛbɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cme)", () => {
		expect(p.parse("Filiputaamba sɛbɛ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cme)", () => {
		expect(p.parse("Tesaloniketaamba sɛbɛdĩɛlãŋo 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cme)", () => {
		expect(p.parse("Tesaloniketaamba sɛbɛhãalĩŋo 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cme)", () => {
		expect(p.parse("Timote sɛbɛdĩɛlãŋo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cme)", () => {
		expect(p.parse("Timote sɛbɛhãalĩŋo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cme)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cme)", () => {
		expect(p.parse("Filemɔ sɛbɛ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cme)", () => {
		expect(p.parse("Ebire 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebi. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cme)", () => {
		expect(p.parse("Sak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sake 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cme)", () => {
		expect(p.parse("Piɛr dĩɛ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pi. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cme)", () => {
		expect(p.parse("Piɛr hãa. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pi. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cme)", () => {
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (cme)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (cme)", () => {
		expect(p.parse("Korɛ̃ntitaamba sɛbɛdĩɛlãŋo. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Nsãa dĩɛ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Piɛr dĩɛ. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Tesaloniketaamba sɛbɛdĩɛlãŋo 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Timote sɛbɛdĩɛlãŋo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Korɛ̃ntitaamba sɛbɛhãalĩŋo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Nsãa hãa. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Piɛr hãa. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tesaloniketaamba sɛbɛhãalĩŋo 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Timote sɛbɛhãalĩŋo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Nsãa siɛ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Nsãa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ãmpigãama 1:1").osis()).toEqual("Rev.1.1");
	});
});
