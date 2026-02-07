"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ces.js";

describe("Localized book Gen (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ces)", () => {
		expect(p.parse("První kniha Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("První Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("První. kniha Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("První. Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 kniha Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. kniha Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I kniha Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. kniha Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mojžíšova 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ces)", () => {
		expect(p.parse("Druhá kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhá Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhá. kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhá. Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý. kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý. Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. kniha Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mojžíšova 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ces)", () => {
		expect(p.parse("Třetí kniha Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Třetí Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Třetí. kniha Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Třetí. Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 kniha Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. kniha Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III kniha Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. kniha Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mojžíšova 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ces)", () => {
		expect(p.parse("Čtvrtá kniha Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Čtvrtá Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Čtvrtá. kniha Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Čtvrtá. Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 kniha Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. kniha Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV kniha Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. kniha Mojžíšova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mojžíšova 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ces)", () => {
		expect(p.parse("Pátá kniha Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pátá Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pátá. kniha Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pátá. Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 kniha Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. kniha Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V kniha Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. kniha Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mojžíšova 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ces)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ces)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (ces)", () => {
		expect(p.parse("Bél a drak 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bél 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ces)", () => {
		expect(p.parse("Leviticusi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ces)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ces)", () => {
		expect(p.parse("Kniha Sírachovcova 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sírachovec 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sír 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ces)", () => {
		expect(p.parse("Moudrost Šalomounova 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Kniha Moudrosti 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Kniha moudrostí 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Moudrost 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mdr 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ces)", () => {
		expect(p.parse("Pláč Jeremiášův 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pláč Jeremjášův 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kniha nářků 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pláč 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Pl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ces)", () => {
		expect(p.parse("List Jeremjášův 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ces)", () => {
		expect(p.parse("Zjeveni svatého Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjevení Janovo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kniha Zjevení 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalypsa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjevení 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zj 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (ces)", () => {
		expect(p.parse("Modlitbu Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ces)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ces)", () => {
		expect(p.parse("Jozue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ces)", () => {
		expect(p.parse("Soudců 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sdc 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sd 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ces)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rút 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ces)", () => {
		expect(p.parse("1 Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ces)", () => {
		expect(p.parse("2 Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ces)", () => {
		expect(p.parse("První Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("První. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ces)", () => {
		expect(p.parse("Druhá Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ces)", () => {
		expect(p.parse("Ezdráš 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ces)", () => {
		expect(p.parse("Izaiáš 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izajáš 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ces)", () => {
		expect(p.parse("První kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První S 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První. kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("První. S 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. S 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I S 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ces)", () => {
		expect(p.parse("Druhá kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá. kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá. S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý. kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý. S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ces)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ces)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ces)", () => {
		expect(p.parse("První kniha královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První. kniha královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První. Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První. Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("První. Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 kniha královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. kniha královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I kniha královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. kniha královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kr 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ces)", () => {
		expect(p.parse("Druhá kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá. kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá. Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá. Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý. kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý. Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý. Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. kniha královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kr 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ces)", () => {
		expect(p.parse("2 Královská 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Král 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ces)", () => {
		expect(p.parse("1 Královská 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Král 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ces)", () => {
		expect(p.parse("První Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První kniha kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První Letopisu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První Pa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. kniha kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. Letopisu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("První. Pa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 kniha kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Letopisu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Pa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. kniha kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Letopisu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Pa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I kniha kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Letopisu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Pa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. kniha kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Letopisu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Pa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ces)", () => {
		expect(p.parse("Druhá Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Pa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. kniha kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Letopisu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Pa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ces)", () => {
		expect(p.parse("2 Letopisů 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Pa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ces)", () => {
		expect(p.parse("1 Letopisů 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Pa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ces)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ces)", () => {
		expect(p.parse("Nehemiáš 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemjáš 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (ces)", () => {
		expect(p.parse("Ester (řecké dodatky) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (řecké části) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ces)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ces)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jób 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ces)", () => {
		expect(p.parse("Kniha žalmů 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Žalmy 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Žalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Žl 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ž 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (ces)", () => {
		expect(p.parse("Azarjášova modlitba 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ces)", () => {
		expect(p.parse("Přísloví Šalomounova 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Přísloví 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Přís 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Př 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ces)", () => {
		expect(p.parse("Kazatel 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kaz 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (ces)", () => {
		expect(p.parse("Píseň mládenců v hořící peci 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Tři muži v rozpálené peci 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ces)", () => {
		expect(p.parse("Píseň Šalamounova 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Píseň písní 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Píseň 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pís 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ces)", () => {
		expect(p.parse("Jeremiáš 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremjáš 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ces)", () => {
		expect(p.parse("Ezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ces)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ces)", () => {
		expect(p.parse("Ozeáš 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ces)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jóel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ces)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ámos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ces)", () => {
		expect(p.parse("Abdijáš 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadjáš 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdiáš 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadjá 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ces)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonáš 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ces)", () => {
		expect(p.parse("Michaáš 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Micheáš 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mich 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ces)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ces)", () => {
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ces)", () => {
		expect(p.parse("Sofoniáš 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonjáš 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ces)", () => {
		expect(p.parse("Aggeus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ageus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ces)", () => {
		expect(p.parse("Zachariáš 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacharjáš 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zach 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ces)", () => {
		expect(p.parse("Malachiáš 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ces)", () => {
		expect(p.parse("Evangelium podle Matouše 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matoušovo evangelium 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matouš 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ces)", () => {
		expect(p.parse("Evangelium podle Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markovo evangelium 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marek 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ces)", () => {
		expect(p.parse("Evangelium podle Lukáše 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukášovo evangelium 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukáš 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("L 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ces)", () => {
		expect(p.parse("První list Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První Janova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První. list Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První. Janova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První. Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 list Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Janova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. list Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Janova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I list Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Janova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. list Janův 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Janova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Janův 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ces)", () => {
		expect(p.parse("Druhá list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá. list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá. Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá. Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý. list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý. Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý. Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. list Janův 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Janova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Janův 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ces)", () => {
		expect(p.parse("Třetí list Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí Janova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí. list Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí. Janova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí. Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 list Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Janova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. list Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Janova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III list Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Janova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. list Janův 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Janova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Janův 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ces)", () => {
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ces)", () => {
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ces)", () => {
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ces)", () => {
		expect(p.parse("První Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("První. J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. J 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ces)", () => {
		expect(p.parse("Druhá Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá. J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý. J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. J 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ces)", () => {
		expect(p.parse("Třetí Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí J 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí. Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Třetí. J 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. J 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III J 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. J 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ces)", () => {
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("J 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ces)", () => {
		expect(p.parse("Evangelium podle Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Janovo evangelium 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ces)", () => {
		expect(p.parse("Skutky apoštolské 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Skutky apoštolü 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Skutky apoštolů 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Skutky 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sk 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ces)", () => {
		expect(p.parse("List Římanům 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Římanům 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Řím 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ř 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ces)", () => {
		expect(p.parse("První list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První list Korinským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První K 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První. list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První. list Korinským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První. K 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 list Korinským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 K 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. list Korinským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. K 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I list Korinským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I K 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. list Korinským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. K 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ces)", () => {
		expect(p.parse("Druhá list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá. list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá. list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá. K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý. list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý. list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý. K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II K 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. list Korinským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. K 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ces)", () => {
		expect(p.parse("2 Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 K 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ces)", () => {
		expect(p.parse("První Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("První. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ces)", () => {
		expect(p.parse("1 Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 K 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ces)", () => {
		expect(p.parse("List Galatským 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatským 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ces)", () => {
		expect(p.parse("List Efezanům 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("List Efezským 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("List Efézským 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezským 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeským 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ces)", () => {
		expect(p.parse("List Filipským 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipenským 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipským 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ces)", () => {
		expect(p.parse("List Kolosanům 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("List Koloským 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossenským 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosenským 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosanům 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloským 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ko 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ces)", () => {
		expect(p.parse("První list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První Tessalonicenským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První list Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. Tessalonicenským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. list Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("První. Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonicenským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 list Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonicenským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. list Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonicenským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I list Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonicenským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. list Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Soluňským 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ces)", () => {
		expect(p.parse("Druhá list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonicenským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. list Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Soluňským 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ces)", () => {
		expect(p.parse("2 Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ces)", () => {
		expect(p.parse("1 Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ces)", () => {
		expect(p.parse("První list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ces)", () => {
		expect(p.parse("Druhá list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ces)", () => {
		expect(p.parse("Druhá list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. list Timetejovi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ces)", () => {
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ces)", () => {
		expect(p.parse("První list Timeteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("První. list Timeteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 list Timeteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. list Timeteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I list Timeteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. list Timeteovi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ces)", () => {
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ces)", () => {
		expect(p.parse("List Titovi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titovi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ces)", () => {
		expect(p.parse("List Filemonovi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonovi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ces)", () => {
		expect(p.parse("List Hebrejům 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("List Židům 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrejům 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Židům 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Žid 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Žd 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ces)", () => {
		expect(p.parse("List Jakubův 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakubův 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ces)", () => {
		expect(p.parse("První list Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První. list Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První. Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První. Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("První. P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 list Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. list Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I list Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. list Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrův 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ces)", () => {
		expect(p.parse("Druhá list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. list Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrův 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ces)", () => {
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ces)", () => {
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ces)", () => {
		expect(p.parse("List Judův 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judova 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judův 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ces)", () => {
		expect(p.parse("Tóbijáš 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobiáš 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tóbit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ces)", () => {
		expect(p.parse("Júdit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Júd 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ces)", () => {
		expect(p.parse("Kniha Báruchova 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Kniha Bárukova 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Báruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Báruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bár 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (ces)", () => {
		expect(p.parse("Zuzana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Zuz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ces)", () => {
		expect(p.parse("První Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("První Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("První. Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("První. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ces)", () => {
		expect(p.parse("Druhá Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá. Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý. Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ces)", () => {
		expect(p.parse("Třetí Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Třetí Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Třetí. Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Třetí. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ces)", () => {
		expect(p.parse("Čtvrtá Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Čtvrtá Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Čtvrtá. Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Čtvrtá. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ces)", () => {
		expect(p.parse("2 Makabejská 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ces)", () => {
		expect(p.parse("3 Makabejská 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ces)", () => {
		expect(p.parse("4 Makabejská 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ces)", () => {
		expect(p.parse("1 Makabejská 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (ces)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1-2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1–2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1—2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (ces)", () => {
		expect(p.parse("Titus 1:1, kapitola 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapitola 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kapitoly 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapitoly 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kapitol 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapitol 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kap. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kap. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kap 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kap 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (ces)", () => {
		expect(p.parse("Exod 1:1 verše 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verše 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (ces)", () => {
		expect(p.parse("Exod 1:1 a 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 a 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 srv. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 srv. 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 srv 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 srv 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (ces)", () => {
		expect(p.parse("Ps 3 titul, 4:2, 5:titul").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'next' (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'next' (ces)", () => {
		expect(p.parse("Rev 3:1n, 4:2n").osis()).toEqual("Rev.3.1-Rev.3.2,Rev.4.2-Rev.4.3");
		expect(p.parse("Jude 1n, 2n").osis()).toEqual("Jude.1.1-Jude.1.2,Jude.1.2-Jude.1.3");
		expect(p.parse("Gen 1:31n").osis()).toEqual("Gen.1.31-Gen.2.1");
	});
});
describe("Parser helper should handle translations (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (ces)", () => {
		expect(p.parse("Lev 1 (B21)").osis_and_translations()).toEqual([["Lev.1","B21"]]);
	});
});
describe("Parser helper should handle book ranges (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ces)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("První list Janův - Třetí list Janův").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("První list Janův – Třetí list Janův").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("První list Janův — Třetí list Janův").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (ces)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (ces)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});
