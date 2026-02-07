"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tur.js";

describe("Localized book Gen (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tur)", () => {
		expect(p.parse("Yaratİlİş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratİliş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratİlış 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratilİş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratiliş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratilış 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratılİş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratıliş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yaratılış 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tesnİye 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tesniye 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tesnıye 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tekvİn 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tekvin 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tekvın 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Yar 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tur)", () => {
		expect(p.parse("Mİsİr'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİr'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsir'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsır'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİr'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misir'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misır'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİr'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısir'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısır'dan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsİrdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsirdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mİsırdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misİrdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misirdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Misırdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısİrdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısirdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mısırdan Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çİkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çİkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çİkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çikİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çikiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çikış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çıkİş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çıkiş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çıkış 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çİk 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çik 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Çık 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (tur)", () => {
		expect(p.parse("Bel ve Ejderha 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tur)", () => {
		expect(p.parse("Levİlİler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levİliler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levİlıler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levilİler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levililer 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levilıler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levılİler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levıliler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levılıler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tur)", () => {
		expect(p.parse("Çölde Sayİm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Çölde Sayim 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Çölde Sayım 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sayİlar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sayilar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sayılar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Say 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (tur)", () => {
		expect(p.parse("Sİrak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sırak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (tur)", () => {
		expect(p.parse("Bİlgelik 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Bilgelik 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Bılgelik 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tur)", () => {
		expect(p.parse("Ağİtlar 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ağitlar 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ağıtlar 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ağİ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aği 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ağı 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (tur)", () => {
		expect(p.parse("Yeremya'nİn Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeremya'nin Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeremya'nın Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeremya’nın Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeremyanİn Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeremyanin Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Yeremyanın Mektubu 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tur)", () => {
		expect(p.parse("Vahİy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vahiy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vahıy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Va 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (tur)", () => {
		expect(p.parse("Manaşşe'nİn Duasİ 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nİn Duasi 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nİn Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nin Duasİ 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nin Duasi 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nin Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nın Duasİ 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nın Duasi 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe'nın Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşe’nin Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenİn Duasİ 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenİn Duasi 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenİn Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenin Duasİ 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenin Duasi 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenin Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenın Duasİ 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenın Duasi 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Manaşşenın Duası 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tur)", () => {
		expect(p.parse("Yasa'nİn Tekrarİ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nİn Tekrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nİn Tekrarı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nin Tekrarİ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nin Tekrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nin Tekrarı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nın Tekrarİ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nın Tekrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasa'nın Tekrarı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanİn Tekrarİ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanİn Tekrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanİn Tekrarı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanin Tekrarİ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanin Tekrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanin Tekrarı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanın Tekrarİ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanın Tekrari 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yasanın Tekrarı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Yas 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tur)", () => {
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yeşu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yşu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tur)", () => {
		expect(p.parse("Hakİmler 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hakimler 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hakımler 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hak 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tur)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (tur)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Bir Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Bir. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Birinci Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Birinci. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("İlk Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("İlk. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("ilk Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("ilk. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("ılk Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("ılk. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (tur)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("İki Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("İki. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("iki Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("iki. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ıki Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ıki. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("İkinci Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("İkinci. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ikinci Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ikinci. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ıkinci Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("ıkinci. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (tur)", () => {
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (tur)", () => {
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tur)", () => {
		expect(p.parse("Yeşaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yşa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tur)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bir Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Bir. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Birinci Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Birinci. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("İlk Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("İlk. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ilk Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ilk. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ılk Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ılk. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tur)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("İki Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("İki. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("iki Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("iki. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ıki Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ıki. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("İkinci Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("İkinci. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ikinci Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ikinci. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ıkinci Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("ıkinci. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tur)", () => {
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tur)", () => {
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tur)", () => {
		expect(p.parse("1 Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bir Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Bir. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Birinci Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Birinci. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("İlk Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("İlk. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ilk Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ilk. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ılk Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ılk. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tur)", () => {
		expect(p.parse("2 Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("İki Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("İki. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("iki Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("iki. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ıki Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ıki. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("İkinci Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("İkinci. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ikinci Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ikinci. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ıkinci Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ıkinci. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tur)", () => {
		expect(p.parse("2. Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Krallar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kr 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tur)", () => {
		expect(p.parse("1. Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Krallar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kr 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tur)", () => {
		expect(p.parse("1 Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bir Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bir Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bir Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bir. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bir. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Bir. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Birinci Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Birinci Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Birinci Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Birinci. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Birinci. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Birinci. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("İlk Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("İlk Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("İlk Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("İlk. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("İlk. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("İlk. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ilk Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ilk Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ilk Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ilk. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ilk. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ilk. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ılk Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ılk Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ılk Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ılk. Tarİhler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ılk. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ılk. Tarıhler 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tur)", () => {
		expect(p.parse("2 Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İki. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("iki Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("iki Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("iki Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("iki. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("iki. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("iki. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıki Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıki Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıki Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıki. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıki. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıki. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İkinci Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İkinci Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İkinci Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İkinci. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İkinci. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("İkinci. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ikinci Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ikinci Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ikinci Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ikinci. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ikinci. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ikinci. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıkinci Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıkinci Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıkinci Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıkinci. Tarİhler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıkinci. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ıkinci. Tarıhler 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tur)", () => {
		expect(p.parse("2. Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Tarihler 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ta 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ta 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Ta 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tur)", () => {
		expect(p.parse("1. Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Tarihler 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ta 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ta 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Ta 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tur)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tur)", () => {
		expect(p.parse("Nehemya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (tur)", () => {
		expect(p.parse("Yunanca Ester 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Grekçe Ester 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tur)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tur)", () => {
		expect(p.parse("Eyüp 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Eyü 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tur)", () => {
		expect(p.parse("Mezmurlar 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mezmur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mez 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (tur)", () => {
		expect(p.parse("Azarya'nİn Duasİ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nİn Duasi 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nİn Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nin Duasİ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nin Duasi 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nin Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nın Duasİ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nın Duasi 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya'nın Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarya’nın Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanİn Duasİ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanİn Duasi 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanİn Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanin Duasİ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanin Duasi 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanin Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanın Duasİ 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanın Duasi 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azaryanın Duası 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tur)", () => {
		expect(p.parse("Süleyman'İn Özdeyİşlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyİşleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyİşlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyişlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyişleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyişlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyışlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyışleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Özdeyışlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyİşlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyİşleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyİşlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyişlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyişleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyişlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyışlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyışleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Özdeyışlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyİşlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyİşleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyİşlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyişlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyişleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyişlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyışlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyışleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Özdeyışlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyİşlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyİşleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyİşlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyişlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyişleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyişlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyışlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyışleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Özdeyışlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyİşlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyİşleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyİşlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyişlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyişleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyişlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyışlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyışleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Özdeyışlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyİşlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyİşleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyİşlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyişlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyişleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyişlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyışlerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyışleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Özdeyışlerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Mesellerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Meselleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'İn Mesellerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Mesellerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Meselleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'in Mesellerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Mesellerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Meselleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleyman'ın Mesellerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Mesellerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Meselleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanİn Mesellerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Mesellerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Meselleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanin Mesellerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Mesellerİ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Meselleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Süleymanın Mesellerı 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Meseller 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Özd 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tur)", () => {
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vaİz 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vaiz 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vaız 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vaİ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vai 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Vaı 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (tur)", () => {
		expect(p.parse("Üç Genç Adamİn Ezgİsİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgİsi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgİsı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgisİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgisi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgisı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgısİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgısi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamİn Ezgısı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgİsİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgİsi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgİsı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgisİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgisi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgisı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgısİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgısi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamin Ezgısı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgİsİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgİsi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgİsı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgisİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgisi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgisı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgısİ 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgısi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Üç Genç Adamın Ezgısı 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tur)", () => {
		expect(p.parse("Ezgİler Ezgİsİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgİsi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgİsı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgisİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgisi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgisı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgısİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgısi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgİler Ezgısı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgİsİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgİsi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgİsı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgisİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgisi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgisı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgısİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgısi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgiler Ezgısı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgİsİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgİsi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgİsı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgisİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgisi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgisı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgısİ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgısi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezgıler Ezgısı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ezg 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tur)", () => {
		expect(p.parse("Yeremya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tur)", () => {
		expect(p.parse("Hezekİel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hezekıel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tur)", () => {
		expect(p.parse("Danİel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danıel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tur)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoş 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tur)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tur)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tur)", () => {
		expect(p.parse("Ovadya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ova 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tur)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tur)", () => {
		expect(p.parse("Mİka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mıka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mİk 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mık 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tur)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tur)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tur)", () => {
		expect(p.parse("Sefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tur)", () => {
		expect(p.parse("Hagay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tur)", () => {
		expect(p.parse("Zekerİya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekeriya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekerıya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tur)", () => {
		expect(p.parse("Malakİ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakı 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tur)", () => {
		expect(p.parse("Mattaa Göre İncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaa Göre İncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaa Göre incil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaa Göre incil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaa Göre ıncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaa Göre ıncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaya Göre İncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaya Göre İncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaya Göre incil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaya Göre incil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaya Göre ıncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaya Göre ıncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'a Göre İncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'a Göre İncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'a Göre incil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'a Göre incil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'a Göre ıncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'a Göre ıncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ya Göre İncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ya Göre İncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ya Göre incil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ya Göre incil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ya Göre ıncil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ya Göre ıncil. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİn İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİn İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİn incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİn incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİn ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİn ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattain İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattain İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattain incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattain incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattain ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattain ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaın İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaın İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaın incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaın incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaın ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaın ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaun İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaun İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaun incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaun incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaun ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaun ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanİn İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanİn İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanİn incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanİn incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanİn ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanİn ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanin İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanin İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanin incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanin incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanin ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanin ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanın İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanın İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanın incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanın incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanın ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanın ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanun İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanun İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanun incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanun incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanun ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattanun ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'İn İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'İn İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'İn incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'İn incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'İn ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'İn ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'in İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'in İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'in incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'in incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'in ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'in ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ın İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ın İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ın incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ın incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ın ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'ın ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'un İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'un İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'un incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'un incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'un ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'un ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nİn İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nİn İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nİn incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nİn incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nİn ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nİn ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nin İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nin İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nin incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nin incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nin ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nin ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nın İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nın İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nın incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nın incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nın ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nın ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nun İncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nun İncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nun incili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nun incili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nun ıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta'nun ıncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaİncili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaincili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaincili. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaıncili 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattaıncili. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Matt (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tur)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Matt (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tur)", () => {
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tur)", () => {
		expect(p.parse("Markosa Göre İncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosa Göre İncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosa Göre incil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosa Göre incil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosa Göre ıncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosa Göre ıncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosya Göre İncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosya Göre İncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosya Göre incil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosya Göre incil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosya Göre ıncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosya Göre ıncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'a Göre İncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'a Göre İncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'a Göre incil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'a Göre incil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'a Göre ıncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'a Göre ıncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ya Göre İncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ya Göre İncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ya Göre incil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ya Göre incil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ya Göre ıncil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ya Göre ıncil. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİn İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİn İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİn incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİn incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİn ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİn ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosin İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosin İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosin incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosin incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosin ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosin ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosın İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosın İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosın incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosın incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosın ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosın ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosun İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosun İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosun incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosun incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosun ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosun ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnİn İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnİn İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnİn incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnİn incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnİn ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnİn ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnin İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnin İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnin incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnin incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnin ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnin ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnın İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnın İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnın incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnın incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnın ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnın ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnun İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnun İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnun incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnun incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnun ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosnun ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'İn İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'İn İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'İn incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'İn incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'İn ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'İn ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'in İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'in İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'in incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'in incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'in ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'in ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ın İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ın İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ın incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ın incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ın ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'ın ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'un İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'un İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'un incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'un incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'un ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'un ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nİn İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nİn İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nİn incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nİn incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nİn ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nİn ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nin İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nin İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nin incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nin incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nin ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nin ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nın İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nın İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nın incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nın incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nın ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nın ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nun İncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nun İncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nun incili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nun incili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nun ıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markos'nun ıncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosİncili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosincili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosincili. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosıncili 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markosıncili. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Mark (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tur)", () => {
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Mark (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tur)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tur)", () => {
		expect(p.parse("Lukaa Göre İncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaa Göre İncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaa Göre incil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaa Göre incil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaa Göre ıncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaa Göre ıncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaya Göre İncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaya Göre İncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaya Göre incil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaya Göre incil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaya Göre ıncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaya Göre ıncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'a Göre İncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'a Göre İncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'a Göre incil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'a Göre incil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'a Göre ıncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'a Göre ıncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ya Göre İncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ya Göre İncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ya Göre incil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ya Göre incil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ya Göre ıncil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ya Göre ıncil. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİn İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİn İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİn incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİn incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİn ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİn ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukain İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukain İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukain incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukain incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukain ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukain ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaın İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaın İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaın incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaın incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaın ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaın ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaun İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaun İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaun incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaun incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaun ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaun ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanİn İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanİn İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanİn incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanİn incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanİn ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanİn ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanin İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanin İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanin incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanin incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanin ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanin ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanın İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanın İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanın incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanın incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanın ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanın ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanun İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanun İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanun incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanun incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanun ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukanun ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'İn İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'İn İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'İn incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'İn incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'İn ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'İn ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'in İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'in İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'in incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'in incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'in ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'in ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ın İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ın İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ın incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ın incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ın ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'ın ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'un İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'un İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'un incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'un incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'un ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'un ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nİn İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nİn İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nİn incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nİn incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nİn ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nİn ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nin İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nin İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nin incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nin incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nin ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nin ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nın İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nın İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nın incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nın incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nın ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nın ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nun İncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nun İncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nun incili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nun incili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nun ıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka'nun ıncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaİncili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaincili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaincili. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaıncili 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukaıncili. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Luke (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tur)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Luke (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tur)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tur)", () => {
		expect(p.parse("1. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yu 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tur)", () => {
		expect(p.parse("2. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tur)", () => {
		expect(p.parse("3. Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tur)", () => {
		expect(p.parse("Yuhannaa Göre İncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaa Göre İncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaa Göre incil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaa Göre incil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaa Göre ıncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaa Göre ıncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaya Göre İncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaya Göre İncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaya Göre incil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaya Göre incil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaya Göre ıncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaya Göre ıncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'a Göre İncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'a Göre İncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'a Göre incil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'a Göre incil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'a Göre ıncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'a Göre ıncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ya Göre İncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ya Göre İncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ya Göre incil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ya Göre incil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ya Göre ıncil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ya Göre ıncil. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİn İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİn İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİn incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİn incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİn ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİn ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannain İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannain İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannain incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannain incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannain ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannain ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaın İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaın İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaın incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaın incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaın ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaın ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaun İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaun İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaun incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaun incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaun ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaun ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanİn İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanİn İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanİn incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanİn incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanİn ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanİn ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanin İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanin İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanin incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanin incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanin ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanin ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanın İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanın İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanın incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanın incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanın ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanın ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanun İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanun İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanun incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanun incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanun ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannanun ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'İn İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'İn İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'İn incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'İn incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'İn ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'İn ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'in İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'in İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'in incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'in incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'in ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'in ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ın İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ın İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ın incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ın incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ın ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'ın ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'un İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'un İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'un incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'un incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'un ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'un ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nİn İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nİn İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nİn incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nİn incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nİn ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nİn ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nin İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nin İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nin incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nin incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nin ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nin ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nın İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nın İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nın incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nın incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nın ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nın ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nun İncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nun İncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nun incili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nun incili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nun ıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhanna'nun ıncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaİncili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaincili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaincili. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaıncili 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhannaıncili. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tur)", () => {
		expect(p.parse("1 Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bir Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Bir. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Birinci Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Birinci. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("İlk Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("İlk. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ilk Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ilk. Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ılk Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ılk. Yuhanna 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tur)", () => {
		expect(p.parse("2 Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("İki Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("İki. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("iki Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("iki. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ıki Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ıki. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("İkinci Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("İkinci. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ikinci Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ikinci. Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ıkinci Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("ıkinci. Yuhanna 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tur)", () => {
		expect(p.parse("3 Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Üç Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Üç. Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Üçüncü Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Üçüncü. Yuhanna 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tur)", () => {
		expect(p.parse("Yuhanna 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tur)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yu 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tur)", () => {
		expect(p.parse("Elçİlerİn İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerİn ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerin ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçİlerın ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerİn ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerin ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçilerın ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerİn ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerin ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın İşlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın İşleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın İşlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın işlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın işleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın işlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın ışlerİ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın ışleri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elçılerın ışlerı 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elç 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tur)", () => {
		expect(p.parse("Romalİlar 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romalilar 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romalılar 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tur)", () => {
		expect(p.parse("1 Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Bir. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Birinci. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("İlk. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ilk. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korİntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korintoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korıntoslular 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korİntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korİntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korİntlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korintlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korintlıler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korıntlİler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korıntliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ılk. Korıntlıler 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tur)", () => {
		expect(p.parse("2 Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İki. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("iki. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıki. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("İkinci. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ikinci. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korİntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korintoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korıntoslular 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korİntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korİntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korİntlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korintlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korintlıler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korıntlİler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korıntliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ıkinci. Korıntlıler 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tur)", () => {
		expect(p.parse("2. Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tur)", () => {
		expect(p.parse("1. Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tur)", () => {
		expect(p.parse("Galatyalİlar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatyalilar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatyalılar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tur)", () => {
		expect(p.parse("Efeslİler 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesliler 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeslıler 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tur)", () => {
		expect(p.parse("Fİlİpİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlİpılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlipılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fİlıpılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filİpılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filıpılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılİpılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılipılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpİlİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpİliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpİlıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpilİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpilıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpılİler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpıliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fılıpılıler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tur)", () => {
		expect(p.parse("Koloselİler 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloseliler 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloselıler 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tur)", () => {
		expect(p.parse("1 Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Bir. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Birinci. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("İlk. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ilk. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanİklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanİkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanİklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selaniklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selaniklıler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanıklİler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanıkliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ılk. Selanıklıler 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tur)", () => {
		expect(p.parse("2 Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İki. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("iki. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıki. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("İkinci. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ikinci. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanİklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanİkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanİklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selaniklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selaniklıler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanıklİler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanıkliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ıkinci. Selanıklıler 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tur)", () => {
		expect(p.parse("2. Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Selanikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Se 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Se 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Se 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tur)", () => {
		expect(p.parse("1. Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Selanikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Se 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Se 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Se 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tur)", () => {
		expect(p.parse("1 Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bir Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bir Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bir Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bir. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bir. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Bir. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Birinci Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Birinci Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Birinci Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Birinci. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Birinci. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Birinci. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("İlk Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("İlk Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("İlk Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("İlk. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("İlk. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("İlk. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ilk Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ilk Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ilk Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ilk. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ilk. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ilk. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ılk Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ılk Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ılk Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ılk. Tİmoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ılk. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ılk. Tımoteos 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tur)", () => {
		expect(p.parse("2 Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İki. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("iki Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("iki Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("iki Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("iki. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("iki. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("iki. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıki Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıki Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıki Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıki. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıki. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıki. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İkinci Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İkinci Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İkinci Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İkinci. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İkinci. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("İkinci. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ikinci Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ikinci Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ikinci Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ikinci. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ikinci. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ikinci. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıkinci Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıkinci Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıkinci Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıkinci. Tİmoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıkinci. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ıkinci. Tımoteos 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tur)", () => {
		expect(p.parse("2. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tİ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tı 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tİ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tı 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tur)", () => {
		expect(p.parse("1. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tİ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tı 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tİ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tı 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tur)", () => {
		expect(p.parse("Tİtus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tıtus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tİt 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tıt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tur)", () => {
		expect(p.parse("Fİlİmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fİlimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fİlımon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filİmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filımon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fılİmon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fılimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fılımon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tur)", () => {
		expect(p.parse("İbranİler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("İbraniler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("İbranıler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ibranİler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ibraniler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ibranıler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ıbranİler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ıbraniler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ıbranıler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("İbr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ibr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ıbr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tur)", () => {
		expect(p.parse("Yakup 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tur)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bir Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bir. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Birinci Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Birinci. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("İlk Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("İlk. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ilk Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ilk. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ılk Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("ılk. Petrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tur)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("İki Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("İki. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("iki Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("iki. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ıki Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ıki. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("İkinci Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("İkinci. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ikinci Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ikinci. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ıkinci Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("ıkinci. Petrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tur)", () => {
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tur)", () => {
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tur)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (tur)", () => {
		expect(p.parse("Tobİt 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobıt 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (tur)", () => {
		expect(p.parse("Yudİt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudıt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (tur)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (tur)", () => {
		expect(p.parse("Suzanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (tur)", () => {
		expect(p.parse("1 Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Bir Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Bir. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Birinci Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Birinci. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("İlk Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("İlk. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("ilk Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("ilk. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("ılk Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("ılk. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (tur)", () => {
		expect(p.parse("2 Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("İki Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("İki. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("iki Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("iki. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ıki Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ıki. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("İkinci Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("İkinci. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ikinci Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ikinci. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ıkinci Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("ıkinci. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (tur)", () => {
		expect(p.parse("3 Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Üç Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Üç. Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Üçüncü Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Üçüncü. Makabeler 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (tur)", () => {
		expect(p.parse("4 Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Dört Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Dört. Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Dördüncü Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Dördüncü. Makabeler 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (tur)", () => {
		expect(p.parse("2. Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makabeler 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (tur)", () => {
		expect(p.parse("3. Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makabeler 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (tur)", () => {
		expect(p.parse("4. Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makabeler 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (tur)", () => {
		expect(p.parse("1. Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makabeler 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (tur)", () => {
		expect(p.parse("Titus 1:1 ile 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1ile2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ile 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (tur)", () => {
		expect(p.parse("Titus 1:1, baplar 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 baplar 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, bap 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 bap 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, bp. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 bp. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, bp 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 bp 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (tur)", () => {
		expect(p.parse("Exod 1:1 a. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm a. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 ayeti 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ayeti 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 ayet 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ayet 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (tur)", () => {
		expect(p.parse("Exod 1:1 ve 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 ve 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (tur)", () => {
		expect(p.parse("Ps 3 başlİk, 4:2, 5:başlİk").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
		expect(p.parse("Ps 3 başlik, 4:2, 5:başlik").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
		expect(p.parse("Ps 3 başlık, 4:2, 5:başlık").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (tur)", () => {
		expect(p.parse("Rev 3vs, 4:2vs").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3vd, 4:2vd").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (tur)", () => {
		expect(p.parse("Lev 1 (YC)").osis_and_translations()).toEqual([["Lev.1","YC"]]);
		expect(p.parse("Lev 1 (YC1998)").osis_and_translations()).toEqual([["Lev.1","YC"]]);
		expect(p.parse("Lev 1 (YC2001)").osis_and_translations()).toEqual([["Lev.1","YC"]]);
		expect(p.parse("Lev 1 (YC2008)").osis_and_translations()).toEqual([["Lev.1","YC"]]);
		expect(p.parse("Lev 1 (YC2009)").osis_and_translations()).toEqual([["Lev.1","YC"]]);
		expect(p.parse("Lev 1 (KM)").osis_and_translations()).toEqual([["Lev.1","KM"]]);
		expect(p.parse("Lev 1 (TC)").osis_and_translations()).toEqual([["Lev.1","TC"]]);
		expect(p.parse("Lev 1 (COS)").osis_and_translations()).toEqual([["Lev.1","TC"]]);
		expect(p.parse("Lev 1 (CAN)").osis_and_translations()).toEqual([["Lev.1","CAN"]]);
		expect(p.parse("Lev 1 (TSV)").osis_and_translations()).toEqual([["Lev.1","TSV"]]);
		expect(p.parse("Lev 1 (HADI)").osis_and_translations()).toEqual([["Lev.1","HADI"]]);
	});
});
describe("Parser helper should handle book ranges (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tur)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1. Yuhanna ile 3. Yuhanna").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (tur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (tur)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});
