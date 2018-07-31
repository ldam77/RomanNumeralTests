export function romanConverter(number){
  var output = "";
  var remainder = 0;

  if (number > 3999){
    return "Out Of Range";
  } else if (number >= 1000){
    var thousandCount = parseInt(number/1000);
    remainder = number%1000;
    output = output.concat(joinRomanNumeral(thousandCount,"M"));
    output = output.concat(romanConverter(remainder));
  } else if (number >= 900){
    output = output.concat("CM");
    output = output.concat(romanConverter(number-900));
  } else if (number >= 500){
    output = output.concat("D");
    output = output.concat(romanConverter(number-500));
  } else if (number >= 400){
    output = output.concat("CD");
    output = output.concat(romanConverter(number-400));
  } else if (number >= 100){
    var hundredCount = parseInt(number/100);
    remainder = number%100;
    output = output.concat(joinRomanNumeral(hundredCount,"C"));
    output = output.concat(romanConverter(remainder));
  } else if (number >= 90){
    output = output.concat("XC");
    output = output.concat(romanConverter(number-90));
  } else if (number >= 50){
    output = output.concat("L");
    output = output.concat(romanConverter(number-50));
  } else if (number >= 40){
    output = output.concat("XL");
    output = output.concat(romanConverter(number-40));
  } else if (number >= 10){
    var tenCount = parseInt(number/10);
    remainder = number%10;
    output = output.concat(joinRomanNumeral(tenCount,"X"));
    output = output.concat(romanConverter(remainder));
  } else if (number === 9){
    output = output.concat("IX");
  } else if (number >= 5){
    output = output.concat("V");
    output = output.concat(romanConverter(number-5));
  } else if (number === 4){
    output = output.concat("IV");
  } else {
    output = joinRomanNumeral(number, "I");
  }
  return output;
}

export function joinRomanNumeral(number, letter){
  var output = "";
  for (var i = 1; i <= number; i += 1){
    output = output.concat(letter);
  }
  return output;
}
