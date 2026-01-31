"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gez.js";

describe("Localized book Rev (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gez)", () => {
		expect(p.parse("ራእዩ ለዮሐንስ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ራእ. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gez)", () => {
		expect(p.parse("ወንጌል ዘማቴዎስ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ማቴ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gez)", () => {
		expect(p.parse("ወንጌል ዘማርቆስ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ማር. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gez)", () => {
		expect(p.parse("ወንጌል ዘሉቃስ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ሉቃ. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gez)", () => {
		expect(p.parse("መልእክተ ዮሐንስ ሐዋርያ 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("መልእክተ. ዮሐንስ ሐዋርያ 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ኀበ ዮሐንስ ሐዋርያ 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ኀበ. ዮሐንስ ሐዋርያ 1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 1John (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gez)", () => {
		expect(p.parse("1ዮሐ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gez)", () => {
		expect(p.parse("መልእክተ ዮሐንስ 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("መልእክተ. ዮሐንስ 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ኀበ ዮሐንስ 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ኀበ. ዮሐንስ 2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 2John (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gez)", () => {
		expect(p.parse("2ዮሐ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gez)", () => {
		expect(p.parse("መልእክተ ዮሐንስ 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ዮሐ. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gez)", () => {
		expect(p.parse("ወንጌል ዘዮሐንስ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ዮሐ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gez)", () => {
		expect(p.parse("ግብረ ሐዋርያት 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ግብረ ሐዋ. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gez)", () => {
		expect(p.parse("ኀበ ሰብአ ሮሜ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ሮሜ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gez)", () => {
		expect(p.parse("መልእክተ ሰብአ ቆሮንቶስ 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("መልእክተ. ሰብአ ቆሮንቶስ 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ኀበ ሰብአ ቆሮንቶስ 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ኀበ. ሰብአ ቆሮንቶስ 1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gez)", () => {
		expect(p.parse("1ቆሮ. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gez)", () => {
		expect(p.parse("መልእክተ ሰብአ ቆሮንቶስ 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("መልእክተ. ሰብአ ቆሮንቶስ 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ኀበ ሰብአ ቆሮንቶስ 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ኀበ. ሰብአ ቆሮንቶስ 2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gez)", () => {
		expect(p.parse("2ቆሮ. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gez)", () => {
		expect(p.parse("ኀበ ሰብአ ቈላስይስ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ቈላ. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gez)", () => {
		expect(p.parse("ኀበ ሰብአ ገላትያ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ገላ. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gez)", () => {
		expect(p.parse("ኀበ ሰብአ ኤፌሶን 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ኤፌ. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gez)", () => {
		expect(p.parse("ኀበ ሰብአ ፊልጵስዩስ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ፊልጵ. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gez)", () => {
		expect(p.parse("መልእክተ ሰብአ ተሰሎንቄ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("መልእክተ. ሰብአ ተሰሎንቄ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ኀበ ሰብአ ተሰሎንቄ 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ኀበ. ሰብአ ተሰሎንቄ 1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gez)", () => {
		expect(p.parse("1ተሰ. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gez)", () => {
		expect(p.parse("መልእክተ ሰብአ ተሰሎንቄ 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("መልእክተ. ሰብአ ተሰሎንቄ 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ኀበ ሰብአ ተሰሎንቄ 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ኀበ. ሰብአ ተሰሎንቄ 2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gez)", () => {
		expect(p.parse("2ተሰ. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gez)", () => {
		expect(p.parse("መልእክተ ጢሞቴዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("መልእክተ. ጢሞቴዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ኀበ ጢሞቴዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ኀበ. ጢሞቴዎስ 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gez)", () => {
		expect(p.parse("1ጢሞ. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gez)", () => {
		expect(p.parse("መልእክተ ጢሞቴዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("መልእክተ. ጢሞቴዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ኀበ ጢሞቴዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ኀበ. ጢሞቴዎስ 2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gez)", () => {
		expect(p.parse("2ጢሞ. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gez)", () => {
		expect(p.parse("ኀበ ቲቶ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ቲቶ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gez)", () => {
		expect(p.parse("ኀበ ፊልሞና 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ፊል. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gez)", () => {
		expect(p.parse("ኀበ ሰብእ ዕብራውያን 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ዕብ. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gez)", () => {
		expect(p.parse("መልእክተ ያዕቆብ ሐዋርያ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ያዕ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gez)", () => {
		expect(p.parse("መልእክተ ጴጥሮስ 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("መልእክተ. ጴጥሮስ 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ኀበ ጴጥሮስ 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ኀበ. ጴጥሮስ 1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gez)", () => {
		expect(p.parse("1ጴጥ. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gez)", () => {
		expect(p.parse("መልእክተ ጴጥሮስ 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("መልእክተ. ጴጥሮስ 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ኀበ ጴጥሮስ 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ኀበ. ጴጥሮስ 2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gez)", () => {
		expect(p.parse("2ጴጥ. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gez)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gez)", () => {
		expect(p.parse("መልእክተ ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ይሁዳ 1:1").osis()).toEqual("Jude.1.1");
	});
});
