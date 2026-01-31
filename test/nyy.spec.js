"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nyy.js";

describe("Localized book Gen (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nyy)", () => {
		expect(p.parse("Ubwandilo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ubwa. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bwa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nyy)", () => {
		expect(p.parse("Ukusoka 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ukusōka 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ukusō. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kuso 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nyy)", () => {
		expect(p.parse("Abanyalēbị 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Banyalevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lēbị. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nyy)", () => {
		expect(p.parse("Ukubaligwa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Imbalilo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Imba. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kuba 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nyy)", () => {
		expect(p.parse("Ulwịlilisyo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Inguto 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ulwị. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ingu 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nyy)", () => {
		expect(p.parse("Ulusetulilo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ubusetuli 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ʉbʉsetʉli 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Buset 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ulus. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nyy)", () => {
		expect(p.parse("Ukukumbuka Īngomēlesyo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ukukumbusya Indagiloo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kukumbu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ingo. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nyy)", () => {
		expect(p.parse("Josw. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joswa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoswa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nyy)", () => {
		expect(p.parse("Abalagilị 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abalongi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abal. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Balo 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nyy)", () => {
		expect(p.parse("Luti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nyy)", () => {
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nyy)", () => {
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samwelị 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwelị 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nyy)", () => {
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samwelị 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwelị 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nyy)", () => {
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nyy)", () => {
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nyy)", () => {
		expect(p.parse("1 Abanyafyale 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Banyafyale 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Banyaf 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abanyafyale 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Banyafyale 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Banyaf 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nyy)", () => {
		expect(p.parse("2 Abanyafyale 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Banyafyale 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Banyaf 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abanyafyale 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Banyafyale 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Banyaf 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nyy)", () => {
		expect(p.parse("1Aban. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nyy)", () => {
		expect(p.parse("2Aban. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nyy)", () => {
		expect(p.parse("1 Inongwa Sya Mbukulu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Sya Ntubalilo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Syambu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Inongwa Sya Mbukulu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sya Ntubalilo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Syambu 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nyy)", () => {
		expect(p.parse("2 Inongwa Sya Mbukulu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Sya Ntubalilo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Syambu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Inongwa Sya Mbukulu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sya Ntubalilo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Syambu 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nyy)", () => {
		expect(p.parse("1Ntu. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nyy)", () => {
		expect(p.parse("2Ntu. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nyy)", () => {
		expect(p.parse("Esel. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esela 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nyy)", () => {
		expect(p.parse("Nehemịja 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nyy)", () => {
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esịt. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esịta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nyy)", () => {
		expect(p.parse("Jobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobụ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nyy)", () => {
		expect(p.parse("MaSalimo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Isabulị 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salimo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Isab. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nyy)", () => {
		expect(p.parse("Isya Mbupingamu 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mbupīngamụ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mbup. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mbupi 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nyy)", () => {
		expect(p.parse("Nndumbililị 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Undumbilili 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ndumbi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nndu. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nyy)", () => {
		expect(p.parse("Ulwimbo Ulukulu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lwimbo ulunụnụ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lwimbo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lwi. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nyy)", () => {
		expect(p.parse("Jelemịja 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jel. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yere 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nyy)", () => {
		expect(p.parse("Esekyelị 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nyy)", () => {
		expect(p.parse("Ndanịelị 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ndan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nyy)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osịj. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osịja 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nyy)", () => {
		expect(p.parse("Joel. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joelị 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nyy)", () => {
		expect(p.parse("Amos. 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amosị 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nyy)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obatịja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obat. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nyy)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nyy)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nyy)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahụmụ 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nyy)", () => {
		expect(p.parse("Habakụkị 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Haba. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Haba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nyy)", () => {
		expect(p.parse("Sefanịja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefa. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefa 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nyy)", () => {
		expect(p.parse("Hagayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haga. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haga 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nyy)", () => {
		expect(p.parse("Sakalịja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zeka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nyy)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakị 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nyy)", () => {
		expect(p.parse("Matai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mataị 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nyy)", () => {
		expect(p.parse("Maalɨka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Malika 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mali. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nyy)", () => {
		expect(p.parse("Lʉʉka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nyy)", () => {
		expect(p.parse("1Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nyy)", () => {
		expect(p.parse("2Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nyy)", () => {
		expect(p.parse("3 Johani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johanị 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Joh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nyy)", () => {
		expect(p.parse("1 Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johanị 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johanị 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nyy)", () => {
		expect(p.parse("2 Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johanị 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johanị 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nyy)", () => {
		expect(p.parse("Johani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johanị 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nyy)", () => {
		expect(p.parse("Imbombo sya batumigwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Īmbōmbo Sya Batumịgwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ɨmbombo sya Batʉmigwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Batu. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bat. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Imbo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nyy)", () => {
		expect(p.parse("Abalooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Abalōma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("BaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Balo. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nyy)", () => {
		expect(p.parse("1 Abakolinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Abakolịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Bakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakolinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakolịntị 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nyy)", () => {
		expect(p.parse("1Kol. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nyy)", () => {
		expect(p.parse("2 KubaKorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Abakolinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Abakolịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Bakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. KubaKorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakolinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakolịntị 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nyy)", () => {
		expect(p.parse("2Kol. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nyy)", () => {
		expect(p.parse("Abakolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Abakolosị 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("BaKolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nyy)", () => {
		expect(p.parse("Abagalatija 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Abagalatị 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("BaGalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nyy)", () => {
		expect(p.parse("Abaefesi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Abaefesị 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("BaEfesi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ēfes. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nyy)", () => {
		expect(p.parse("Abafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Abafịlịpị 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("BaFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bafị. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nyy)", () => {
		expect(p.parse("1 Kubatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abatesalonịkị 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Batesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Kub. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kubatesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abatesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abatesalonịkị 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Batesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kub. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nyy)", () => {
		expect(p.parse("2 Kubatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abatesalonịkị 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Batesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Kub. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kubatesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abatesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abatesalonịkị 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Batesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kub. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nyy)", () => {
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nyy)", () => {
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nyy)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tịmotị 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tịmotị 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nyy)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tịmotị 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tịmotị 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nyy)", () => {
		expect(p.parse("1Tịm. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nyy)", () => {
		expect(p.parse("2Tịm. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nyy)", () => {
		expect(p.parse("Tiiti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tịtị 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nyy)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fịlịmonị 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fịli. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nyy)", () => {
		expect(p.parse("Abahịbulị 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("AbaHiburi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abahibʉli 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hibu. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nyy)", () => {
		expect(p.parse("Jaakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobụ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jako. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nyy)", () => {
		expect(p.parse("1 Peeteli 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petelị 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peteri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peeteli 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelị 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peteri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nyy)", () => {
		expect(p.parse("2 Peeteli 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petelị 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peteri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peeteli 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelị 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peteri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nyy)", () => {
		expect(p.parse("1Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nyy)", () => {
		expect(p.parse("2Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nyy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nyy)", () => {
		expect(p.parse("Jụ̄ta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jụta. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
