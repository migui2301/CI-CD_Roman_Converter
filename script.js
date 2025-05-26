/**
 * Converts an integer (between 1 and 3999) to its Roman numeral equivalent.
 *
 * @param {number} num - The integer to convert.
 * @returns {string} The Roman numeral representation.
 * @throws {Error} Throws an error if the number is not within the allowed range.
 */
function integerToRoman(num) {
  // Validate that input is a number
  if (typeof num !== 'number') {
    throw new Error('Input must be a number.');
  }
  
  // Validate that input is not NaN or Infinity
  if (isNaN(num) || !isFinite(num)) {
    throw new Error('Input must be a valid number.');
  }
  
  // Validate that input is an integer
  if (!Number.isInteger(num)) {
    throw new Error('Input must be an integer.');
  }
  
  // Validate that the number is within the allowed range (1-3999)
  if (num <= 0 || num >= 4000) {
    throw new Error('The number must be between 1 and 3999.');
  }
  
  // Array mapping integer values to their corresponding Roman numeral symbols.
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  // Loop through each numeral mapping, appending the numeral symbol
  // as many times as possible while subtracting its value from num.
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;  // Append the numeral to the result string.
      num -= value;       // Subtract the numeral's value from num.
    }
  }
  return result;
}

/**
 * Converts a Roman numeral string to its integer equivalent.
 *
 * @param {string} roman - The Roman numeral string to convert.
 * @returns {number} The integer value of the Roman numeral.
 * @throws {Error} Throws an error if the input is not a valid or canonical Roman numeral.
 */
function romanToInteger(roman) {
  // Validate that the input is a non-empty string.
  if (typeof roman !== 'string' || roman.trim() === '') {
    throw new Error('Input must be a valid Roman numeral.');
  }
  // Standardize the input by converting it to uppercase.
  roman = roman.toUpperCase();
  
  // Check that the string contains only valid Roman numeral characters.
  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new Error('The Roman numeral contains invalid characters.');
  }
  
  // Mapping of Roman numeral characters to their integer values.
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  
  let total = 0;
  let previousValue = 0;
  
  // Iterate through the numeral from right to left.
  // This approach helps in handling subtractive notation (e.g., IV is 4).
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanMap[roman[i]];
    if (currentValue < previousValue) {
      // If the current numeral is less than the previous numeral, subtract its value.
      total -= currentValue;
    } else {
      // Otherwise, add its value.
      total += currentValue;
    }
    previousValue = currentValue;  // Update previousValue for the next iteration.
  }
  
  // Validate that the Roman numeral is in canonical form.
  // This is done by converting the computed integer back to a Roman numeral
  // and comparing it with the original input.
  const reconversion = integerToRoman(total);
  if (reconversion !== roman) {
    throw new Error('The Roman numeral is not in canonical form.');
  }
  
  return total;
}

// Google Analytics tracking functions
/**
 * Tracks successful integer to Roman conversion
 * @param {number} input - The integer input
 * @param {string} result - The Roman numeral result
 */
function trackIntegerToRomanConversion(input, result) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'integer_to_roman_conversion', {
      event_category: 'conversion',
      event_label: 'success',
      value: input,
      custom_parameter_roman_result: result
    });
  }
}

/**
 * Tracks successful Roman to integer conversion
 * @param {string} input - The Roman numeral input
 * @param {number} result - The integer result
 */
function trackRomanToIntegerConversion(input, result) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'roman_to_integer_conversion', {
      event_category: 'conversion',
      event_label: 'success',
      custom_parameter_roman_input: input,
      value: result
    });
  }
}

/**
 * Tracks conversion errors
 * @param {string} errorType - Type of error that occurred
 * @param {string} input - The input that caused the error
 * @param {string} conversionMode - The conversion mode being used
 */
function trackConversionError(errorType, input, conversionMode) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion_error', {
      event_category: 'error',
      event_label: errorType,
      custom_parameter_input: input,
      custom_parameter_mode: conversionMode
    });
  }
}

/**
 * Tracks when user clicks the convert button
 * @param {string} conversionMode - The selected conversion mode
 */
function trackConvertButtonClick(conversionMode) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'convert_button_click', {
      event_category: 'engagement',
      event_label: conversionMode
    });
  }
}

/**
 * Tracks when user changes conversion mode
 * @param {string} newMode - The newly selected conversion mode
 */
function trackModeChange(newMode) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion_mode_change', {
      event_category: 'engagement',
      event_label: newMode
    });
  }
}

/**
 * Handles the conversion process when the user clicks the convert button.
 * It reads the user input, determines which conversion to perform,
 * and then displays either the result or an error message.
 */
function handleConversion() {
  // Retrieve the selected conversion mode (either 'intToRoman' or 'romanToInt').
  const mode = document.getElementById('conversionMode').value;
  // Get the user input from the input field.
  const input = document.getElementById('inputValue').value.trim();
  // Get references to the result and error display elements.
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  // Track button click
  trackConvertButtonClick(mode);

  // Clear any previous result or error messages.
  resultDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    if (mode === 'intToRoman') {
      // Attempt to parse the input as an integer.
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        trackConversionError('invalid_integer_input', input, mode);
        throw new Error('Please enter a valid integer number.');
      }
      // Convert the integer to a Roman numeral.
      const roman = integerToRoman(num);
      resultDiv.textContent = `Roman Numeral: ${roman}`;
      
      // Track successful conversion
      trackIntegerToRomanConversion(num, roman);
      
    } else if (mode === 'romanToInt') {
      // Convert the Roman numeral to an integer.
      const num = romanToInteger(input);
      resultDiv.textContent = `Integer: ${num}`;
      
      // Track successful conversion
      trackRomanToIntegerConversion(input, num);
    }
  } catch (error) {
    // Display any error messages encountered during conversion.
    errorDiv.textContent = error.message;
    
    // Track the specific error type
    let errorType = 'unknown_error';
    if (error.message.includes('valid integer')) {
      errorType = 'invalid_integer_input';
    } else if (error.message.includes('between 1 and 3999')) {
      errorType = 'number_out_of_range';
    } else if (error.message.includes('valid Roman numeral') || error.message.includes('invalid characters')) {
      errorType = 'invalid_roman_input';
    } else if (error.message.includes('canonical form')) {
      errorType = 'non_canonical_roman';
    } else if (error.message.includes('integer')) {
      errorType = 'non_integer_input';
    }
    
    trackConversionError(errorType, input, mode);
  }
}

// Attach an event listener to the convert button to trigger the conversion when clicked.
document.getElementById('convertButton').addEventListener('click', handleConversion);

// Track mode changes
document.getElementById('conversionMode').addEventListener('change', function(event) {
  trackModeChange(event.target.value);
});

// Track page load
document.addEventListener('DOMContentLoaded', function() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_ready', {
      event_category: 'engagement',
      event_label: 'converter_loaded'
    });
  }
});
