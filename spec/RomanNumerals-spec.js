import { romanConverter } from './../src/RomanNumerals.js';
import { joinRomanNumeral } from './../src/RomanNumerals.js';

describe('Roman Numeral Converter', function() {

  it('should join roman numerals letters together', function() {
    var count = 3;
    var letter = "I";
    expect(joinRomanNumeral(count, letter)).toEqual("III");
  });

  it("should convert 1 to 'I'", function () {
    var number = 1;
    expect(romanConverter(number)).toEqual("I");
  });
  it("should convert 5 to 'V'", function () {
    var number = 5;
    expect(romanConverter(number)).toEqual("V");
  });
  it("should convert 10 to 'X'", function () {
    var number = 10;
    expect(romanConverter(number)).toEqual("X");
  });
  it("should convert 50 to 'L'", function () {
    var number = 50;
    expect(romanConverter(number)).toEqual("L");
  });
  it("should convert 100 to 'C'", function () {
    var number = 100;
    expect(romanConverter(number)).toEqual("C");
  });
  it("should convert 500 to 'D'", function () {
    var number = 500;
    expect(romanConverter(number)).toEqual("D");
  });
  it("should convert 1000 to 'M'", function () {
    var number = 1000;
    expect(romanConverter(number)).toEqual("M");
  });
  it("should convert 2 to 'II'", function () {
    var number = 2;
    expect(romanConverter(number)).toEqual("II");
  });
  it("should convert 99 to 'XCIX'", function () {
    var number = 99;
    expect(romanConverter(number)).toEqual("XCIX");
  });
  it("should convert 4 to 'IV'", function () {
    var number = 4;
    expect(romanConverter(number)).toEqual("IV");
  });
  it("should convert 4000 to 'Out Of Range'", function () {
    var number = 4000;
    expect(romanConverter(number)).toEqual("Out Of Range");
  });
});
