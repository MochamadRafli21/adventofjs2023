const getString = () => {
  File = require('fs').readFileSync('advent1-2.txt', 'utf8');
  return File.split('\n');
}

const stringToNumber = (string) => {
  let lower = string.toLowerCase();
  lower = lower.replaceAll('one', '1');
  lower = lower.replaceAll('tw', '2');
  lower = lower.replaceAll('hree', '3');
  lower = lower.replaceAll('four', '4');
  lower = lower.replaceAll('five', '5');
  lower = lower.replaceAll('six', '6');
  lower = lower.replaceAll('seven', '7');
  lower = lower.replaceAll('igh', '8');
  lower = lower.replaceAll('nine', '9');
  lower = lower.replaceAll('zero', '0');
  return lower
}


const filterChar = (string) => {
  return string.replace(/[a-z]/g, '');
}

const sumNumbers = (string) => {
  return parseInt(string[0] + string[string.length - 1]) ? parseInt(string[0] + string[string.length - 1]) : 0;
}

const strings = getString();

const main = (strings) => {
  let FinalNumber = 0
  strings.forEach((string) => {
    const serialize = stringToNumber(string);
    Numbers = filterChar(serialize);
    FinalNumber += sumNumbers(Numbers);
  })
  console.log(FinalNumber);
}

main(strings);



