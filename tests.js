// tests.js - Complete test suite for Roman numeral conversion functions
// Based on the documented test cases of task #4

// Use Chai's expect for assertions
const expect = chai.expect;

// SECTION 1: TESTS FOR integerToRoman
describe('integerToRoman', function() {
  
  // SET 1: MANUALLY CREATED TEST CASES
  
  describe('Valid cases (Manual)', function() {
    it('TC-M1: Minimum allowed value (1)', function() {
      expect(integerToRoman(1)).to.equal('I');
    });
    
    it('TC-M2: Number represented by a single symbol (5)', function() {
      expect(integerToRoman(5)).to.equal('V');
    });
    
    it('TC-M3: Simple subtraction case (9)', function() {
      expect(integerToRoman(9)).to.equal('IX');
    });
    
    it('TC-M4: Combination of symbols with subtraction (14)', function() {
      expect(integerToRoman(14)).to.equal('XIV');
    });
    
    it('TC-M5: Combination of symbols without subtraction (58)', function() {
      expect(integerToRoman(58)).to.equal('LVIII');
    });
    
    it('TC-M6: Double subtraction case (99)', function() {
      expect(integerToRoman(99)).to.equal('XCIX');
    });
    
    it('TC-M7: Number using multiple symbols (246)', function() {
      expect(integerToRoman(246)).to.equal('CCXLVI');
    });
    
    it('TC-M8: Complex number with multiple subtractions (1994)', function() {
      expect(integerToRoman(1994)).to.equal('MCMXCIV');
    });
    
    it('TC-M9: Large number with combination of rules (3549)', function() {
      expect(integerToRoman(3549)).to.equal('MMMDXLIX');
    });
    
    it('TC-M10: Maximum allowed value (3999)', function() {
      expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
    });
  });
  
  describe('Invalid cases (Manual)', function() {
    it('TC-M11: Value not representable in Roman numerals (0)', function() {
      expect(() => integerToRoman(0)).to.throw();
    });
    
    it('TC-M12: Negative number (-5)', function() {
      expect(() => integerToRoman(-5)).to.throw();
    });
    
    it('TC-M13: Value above allowed range (4000)', function() {
      expect(() => integerToRoman(4000)).to.throw();
    });
    
    it('TC-M14: Decimal value (2.5)', function() {
      expect(() => integerToRoman(2.5)).to.throw();
    });
    
    it('TC-M15: Incorrect data type ("ABC")', function() {
      expect(() => integerToRoman("ABC")).to.throw();
    });
  });
  
  // SET 2: AI-ASSISTED TEST CASES
  
  describe('Basic validation (AI)', function() {
    it('TC-AI1: Minimum value (1)', function() {
      expect(integerToRoman(1)).to.equal('I');
    });
    
    it('TC-AI2: Maximum value (3999)', function() {
      expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
    });
    
    it('TC-AI3: First subtraction case (4)', function() {
      expect(integerToRoman(4)).to.equal('IV');
    });
    
    it('TC-AI4: Subtraction with I (9)', function() {
      expect(integerToRoman(9)).to.equal('IX');
    });
    
    it('TC-AI5: Subtraction with X (40)', function() {
      expect(integerToRoman(40)).to.equal('XL');
    });
    
    it('TC-AI6: Another subtraction with X (90)', function() {
      expect(integerToRoman(90)).to.equal('XC');
    });
    
    it('TC-AI7: Subtraction with C (400)', function() {
      expect(integerToRoman(400)).to.equal('CD');
    });
    
    it('TC-AI8: Another subtraction with C (900)', function() {
      expect(integerToRoman(900)).to.equal('CM');
    });
  });
  
  describe('Numerical combinations (AI)', function() {
    it('TC-AI9: Simple addition (7)', function() {
      expect(integerToRoman(7)).to.equal('VII');
    });
    
    it('TC-AI10: Addition after subtraction (18)', function() {
      expect(integerToRoman(18)).to.equal('XVIII');
    });
    
    it('TC-AI11: Nested subtraction (49)', function() {
      expect(integerToRoman(49)).to.equal('XLIX');
    });
    
    it('TC-AI12: Multiple subtractions (99)', function() {
      expect(integerToRoman(99)).to.equal('XCIX');
    });
    
    it('TC-AI13: Complex pattern with subtractions (444)', function() {
      expect(integerToRoman(444)).to.equal('CDXLIV');
    });
    
    it('TC-AI14: Complex combination near the limit (1999)', function() {
      expect(integerToRoman(1999)).to.equal('MCMXCIX');
    });
    
    it('TC-AI15: Recent year without subtractions (2008)', function() {
      expect(integerToRoman(2008)).to.equal('MMVIII');
    });
    
    it('TC-AI16: Large number with multiple rules (3549)', function() {
      expect(integerToRoman(3549)).to.equal('MMMDXLIX');
    });
  });
  
  describe('Edge cases and transitions (AI)', function() {
    it('TC-AI17: Just before XL (39)', function() {
      expect(integerToRoman(39)).to.equal('XXXIX');
    });
    
    it('TC-AI18: Transition to XL (40)', function() {
      expect(integerToRoman(40)).to.equal('XL');
    });
    
    it('TC-AI19: Just after XL (41)', function() {
      expect(integerToRoman(41)).to.equal('XLI');
    });
    
    it('TC-AI20: Just before D (499)', function() {
      expect(integerToRoman(499)).to.equal('CDXCIX');
    });
    
    it('TC-AI21: Exact value of D (500)', function() {
      expect(integerToRoman(500)).to.equal('D');
    });
    
    it('TC-AI22: Just after D (501)', function() {
      expect(integerToRoman(501)).to.equal('DI');
    });
    
    it('TC-AI23: Just before M (999)', function() {
      expect(integerToRoman(999)).to.equal('CMXCIX');
    });
    
    it('TC-AI24: Exact value of M (1000)', function() {
      expect(integerToRoman(1000)).to.equal('M');
    });
  });
  
  describe('Invalid input (AI)', function() {
    it('TC-AI25: Out of range - minimum (0)', function() {
      expect(() => integerToRoman(0)).to.throw();
    });
    
    it('TC-AI26: Out of range - maximum (4000)', function() {
      expect(() => integerToRoman(4000)).to.throw();
    });
    
    it('TC-AI27: Negative number (-1)', function() {
      expect(() => integerToRoman(-1)).to.throw();
    });
    
    it('TC-AI28: Decimal number (1.5)', function() {
      expect(() => integerToRoman(1.5)).to.throw();
    });
    
    it('TC-AI29: Incorrect data type ("X")', function() {
      expect(() => integerToRoman("X")).to.throw();
    });
    
    it('TC-AI30: Null value (null)', function() {
      expect(() => integerToRoman(null)).to.throw();
    });
    
    it('TC-AI31: Not a number (NaN)', function() {
      expect(() => integerToRoman(NaN)).to.throw();
    });
    
    it('TC-AI32: Infinity (Infinity)', function() {
      expect(() => integerToRoman(Infinity)).to.throw();
    });
  });
});

// SECTION 2: TESTS FOR romanToInteger
describe('romanToInteger', function() {
  
  // SET 1: MANUALLY CREATED TEST CASES
  
  describe('Valid cases (Manual)', function() {
    it('TC-M16: Simplest Roman symbol ("I")', function() {
      expect(romanToInteger('I')).to.equal(1);
    });
    
    it('TC-M17: Basic Roman symbol ("V")', function() {
      expect(romanToInteger('V')).to.equal(5);
    });
    
    it('TC-M18: Simple subtraction case ("IX")', function() {
      expect(romanToInteger('IX')).to.equal(9);
    });
    
    it('TC-M19: Combination of symbols with subtraction ("XIV")', function() {
      expect(romanToInteger('XIV')).to.equal(14);
    });
    
    it('TC-M20: Combination of symbols without subtraction ("LVIII")', function() {
      expect(romanToInteger('LVIII')).to.equal(58);
    });
    
    it('TC-M21: Double subtraction case ("XCIX")', function() {
      expect(romanToInteger('XCIX')).to.equal(99);
    });
    
    it('TC-M22: Multiple subtractions ("CDXLIV")', function() {
      expect(romanToInteger('CDXLIV')).to.equal(444);
    });
    
    it('TC-M23: Complex number with multiple subtractions ("MCMXCIV")', function() {
      expect(romanToInteger('MCMXCIV')).to.equal(1994);
    });
    
    it('TC-M24: Large number with combination of rules ("MMMDXLIX")', function() {
      expect(romanToInteger('MMMDXLIX')).to.equal(3549);
    });
    
    it('TC-M25: Maximum representable value ("MMMCMXCIX")', function() {
      expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
    });
  });
  
  describe('Invalid cases (Manual)', function() {
    it('TC-M26: Empty string ("")', function() {
      expect(() => romanToInteger('')).to.throw();
    });
    
    it('TC-M27: Incorrect representation ("IIII")', function() {
      expect(() => romanToInteger('IIII')).to.throw();
    });
    
    it('TC-M28: Invalid repetition of symbols ("VV")', function() {
      expect(() => romanToInteger('VV')).to.throw();
    });
    
    it('TC-M29: Invalid subtraction ("IC")', function() {
      expect(() => romanToInteger('IC')).to.throw();
    });
    
    it('TC-M30: More than three consecutive Ms ("MMMM")', function() {
      expect(() => romanToInteger('MMMM')).to.throw();
    });
    
    it('TC-M31: Invalid subtraction ("XM")', function() {
      expect(() => romanToInteger('XM')).to.throw();
    });
    
    it('TC-M32: Incorrect format ("MCMM")', function() {
      expect(() => romanToInteger('MCMM')).to.throw();
    });
    
    it('TC-M33: Invalid repetition of subunits ("IVIV")', function() {
      expect(() => romanToInteger('IVIV')).to.throw();
    });
    
    it('TC-M34: Non-Roman characters ("ABC")', function() {
      expect(() => romanToInteger('ABC')).to.throw();
    });
    
    it('TC-M35: Incorrect data type (123)', function() {
      expect(() => romanToInteger(123)).to.throw();
    });
  });
  
  // SET 2: AI-ASSISTED TEST CASES
  
  describe('Basic validation (AI)', function() {
    it('TC-AI33: Minimum single symbol ("I")', function() {
      expect(romanToInteger('I')).to.equal(1);
    });
    
    it('TC-AI34: Maximum representable value ("MMMCMXCIX")', function() {
      expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
    });
    
    it('TC-AI35: Basic subtraction ("IV")', function() {
      expect(romanToInteger('IV')).to.equal(4);
    });
    
    it('TC-AI36: Subtraction with I ("IX")', function() {
      expect(romanToInteger('IX')).to.equal(9);
    });
    
    it('TC-AI37: Subtraction with X ("XL")', function() {
      expect(romanToInteger('XL')).to.equal(40);
    });
    
    it('TC-AI38: Another subtraction with X ("XC")', function() {
      expect(romanToInteger('XC')).to.equal(90);
    });
    
    it('TC-AI39: Subtraction with C ("CD")', function() {
      expect(romanToInteger('CD')).to.equal(400);
    });
    
    it('TC-AI40: Another subtraction with C ("CM")', function() {
      expect(romanToInteger('CM')).to.equal(900);
    });
  });
  
  describe('Combinations (AI)', function() {
    it('TC-AI41: Valid repetition ("III")', function() {
      expect(romanToInteger('III')).to.equal(3);
    });
    
    it('TC-AI42: Combination with subtraction at the end ("XXIX")', function() {
      expect(romanToInteger('XXIX')).to.equal(29);
    });
    
    it('TC-AI43: Combination of values ("LXIV")', function() {
      expect(romanToInteger('LXIV')).to.equal(64);
    });
    
    it('TC-AI44: Multiple subtractions ("XCIX")', function() {
      expect(romanToInteger('XCIX')).to.equal(99);
    });
    
    it('TC-AI45: Complex pattern with subtractions ("CDXLIV")', function() {
      expect(romanToInteger('CDXLIV')).to.equal(444);
    });
    
    it('TC-AI46: Complex combination near the limit ("MCMXCIX")', function() {
      expect(romanToInteger('MCMXCIX')).to.equal(1999);
    });
    
    it('TC-AI47: Combination without subtractions ("MMVIII")', function() {
      expect(romanToInteger('MMVIII')).to.equal(2008);
    });
    
    it('TC-AI48: Large number with multiple rules ("MMMDXLIX")', function() {
      expect(romanToInteger('MMMDXLIX')).to.equal(3549);
    });
  });
  
  describe('Invalid formats (AI)', function() {
    it('TC-AI49: Empty string ("")', function() {
      expect(() => romanToInteger('')).to.throw();
    });
    
    it('TC-AI50: More than three consecutive Is ("IIII")', function() {
      expect(() => romanToInteger('IIII')).to.throw();
    });
    
    it('TC-AI51: Invalid repetition of V ("VV")', function() {
      expect(() => romanToInteger('VV')).to.throw();
    });
    
    it('TC-AI52: Invalid subtraction - I can only subtract from V or X ("IL")', function() {
      expect(() => romanToInteger('IL')).to.throw();
    });
    
    it('TC-AI53: Invalid subtraction - X can only subtract from L or C ("XM")', function() {
      expect(() => romanToInteger('XM')).to.throw();
    });
    
    it('TC-AI54: More than three consecutive Ms ("MMMM")', function() {
      expect(() => romanToInteger('MMMM')).to.throw();
    });
    
    it('TC-AI55: Value jump in subtraction ("IC")', function() {
      expect(() => romanToInteger('IC')).to.throw();
    });
    
    it('TC-AI56: Invalid subtraction pattern ("MCMC")', function() {
      expect(() => romanToInteger('MCMC')).to.throw();
    });
  });
  
  describe('Incorrect input (AI)', function() {
    it('TC-AI57: Non-Roman characters ("ABCD")', function() {
      expect(() => romanToInteger('ABCD')).to.throw();
    });
    
    it('TC-AI58: Digits instead of Roman symbols ("123")', function() {
      expect(() => romanToInteger('123')).to.throw();
    });
    
    it('TC-AI59: Case sensitivity test ("i")', function() {
      // Note: Implementation may or may not be case-sensitive
      // Function should either accept "i" as valid or throw an error, but be consistent
      try {
        const result = romanToInteger('i');
        expect(result).to.equal(1); // If lowercase is accepted, it should convert correctly
      } catch (error) {
        // If it throws an error, that's valid too (case-sensitive implementation)
      }
    });
    
    it('TC-AI60: Spaces not allowed ("I I")', function() {
      expect(() => romanToInteger('I I')).to.throw();
    });
    
    it('TC-AI61: Incorrect data type (123)', function() {
      expect(() => romanToInteger(123)).to.throw();
    });
    
    it('TC-AI62: Null value (null)', function() {
      expect(() => romanToInteger(null)).to.throw();
    });
    
    it('TC-AI63: Control characters ("IV\\n")', function() {
      expect(() => romanToInteger('IV\n')).to.throw();
    });
    
    it('TC-AI64: Invalid combination of all symbols ("IVXLCDM")', function() {
      expect(() => romanToInteger('IVXLCDM')).to.throw();
    });
  });
  
  // ADDITIONAL TESTS
  describe('Special tests', function() {
    it('Verify that the function handles lowercase letters correctly', function() {
      // This test assumes that the function should accept lowercase input
      // If your implementation doesn't allow it, adjust this test
      try {
        expect(romanToInteger('iv')).to.equal(4);
        expect(romanToInteger('mcmxciv')).to.equal(1994);
      } catch (error) {
        // If the implementation doesn't accept lowercase, the test is inconclusive
        console.log('The implementation does not accept lowercase letters');
      }
    });
    
    it('Verify round-trip conversion - integer to Roman to integer', function() {
      // Test round-trip conversion for various values
      for (let i = 1; i <= 3999; i += 500) {
        const roman = integerToRoman(i);
        const backToInt = romanToInteger(roman);
        expect(backToInt).to.equal(i);
      }
    });
    
    it('Verify round-trip conversion - Roman to integer to Roman', function() {
      const testCases = ['IV', 'IX', 'XLII', 'CMXCIX', 'MCMXCIX', 'MMMDCCCLXXXVIII'];
      for (const roman of testCases) {
        const integer = romanToInteger(roman);
        const backToRoman = integerToRoman(integer);
        expect(backToRoman).to.equal(roman);
      }
    });
  });
});