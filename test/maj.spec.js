"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/maj.js";

describe("Localized book Rev (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (maj)", () => {
		expect(p.parse("Ni xi y'éjña chji Jesucristo̱ nga ka̱ma 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi y'ét'a Mateo̱ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi y'ét'a Marco̱ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi y'ét'a Luca̱ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi ma jahan xi kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (maj)", () => {
		expect(p.parse("1 xi tjun kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. xi tjun kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Xu̱ju̱n xi tjun kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Xu̱ju̱n Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Xu̱ju̱n. xi tjun kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Xu̱ju̱n. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (maj)", () => {
		expect(p.parse("2 xi ma joho xi kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. xi ma joho xi kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Xu̱ju̱n xi ma joho xi kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Xu̱ju̱n Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Xu̱ju̱n. xi ma joho xi kits'ínntu nda̱ postru̱ Jua 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Xu̱ju̱n. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi y'ét'a Jua 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (maj)", () => {
		expect(p.parse("Ni xi kits'ín já postru̱ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Roma̱ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (maj)", () => {
		expect(p.parse("1 xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Xu̱ju̱n xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Xu̱ju̱n Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Xu̱ju̱n. xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Xu̱ju̱n. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (maj)", () => {
		expect(p.parse("2 xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Xu̱ju̱n xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Xu̱ju̱n Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Xu̱ju̱n. xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Corinto̱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Xu̱ju̱n. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Colosa̱ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Galaci̱a̱ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Efe̱so̱ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Filipo̱ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (maj)", () => {
		expect(p.parse("1 xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Xu̱ju̱n xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Xu̱ju̱n Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Xu̱ju̱n. xi tjun kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Xu̱ju̱n. Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (maj)", () => {
		expect(p.parse("2 xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Xu̱ju̱n xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Xu̱ju̱n Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Xu̱ju̱n. xi ma joho xi kin'ekjíhi̱ xu̱ta̱ ni̱nku̱ Tesaloni̱ka̱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Xu̱ju̱n. Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (maj)", () => {
		expect(p.parse("1 xi tjun kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. xi tjun kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Xu̱ju̱n xi tjun kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Xu̱ju̱n Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Xu̱ju̱n. xi tjun kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Xu̱ju̱n. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (maj)", () => {
		expect(p.parse("2 xi ma joho xi kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. xi ma joho xi kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Xu̱ju̱n xi ma joho xi kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Xu̱ju̱n Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Xu̱ju̱n. xi ma joho xi kin'ekjíhi̱ Timoteo̱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Xu̱ju̱n. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ Tito̱ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kin'ekjíhi̱ xu̱ta̱ Hebreo̱ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kits'ínntu Santiago̱ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (maj)", () => {
		expect(p.parse("1 xi tjun kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. xi tjun kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Xu̱ju̱n xi tjun kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Xu̱ju̱n P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Xu̱ju̱n. xi tjun kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Xu̱ju̱n. P. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (maj)", () => {
		expect(p.parse("2 xi ma joho xi kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. xi ma joho xi kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Xu̱ju̱n xi ma joho xi kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Xu̱ju̱n P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Xu̱ju̱n. xi ma joho xi kits'ínntu nda̱ postru̱ Pedro̱ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Xu̱ju̱n. P. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (maj)", () => {
		expect(p.parse("Xu̱ju̱n xi kits'ínntu Juda̱ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (maj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (maj)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 xi tjun kits'ínntu nda̱ postru̱ Jua - Xu̱ju̱n xi ma jahan xi kits'ínntu nda̱ postru̱ Jua").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 xi tjun kits'ínntu nda̱ postru̱ Jua – Xu̱ju̱n xi ma jahan xi kits'ínntu nda̱ postru̱ Jua").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 xi tjun kits'ínntu nda̱ postru̱ Jua — Xu̱ju̱n xi ma jahan xi kits'ínntu nda̱ postru̱ Jua").osis()).toEqual("1John.1-3John.1");
	});
});
