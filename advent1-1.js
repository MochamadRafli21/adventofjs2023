//1abc2
//pqr3stu8vwx
//a1b2c3d4e5f
//treb7uchet
// sum the first and last number of a string
// dummy string
// const strings = [
//   "1abc2",
//   "pqr3stu8vwx",
//   "a1b2c3d4e5f",
//   "treb7uchet"
// ]

const getString = () => {
  File = require('fs').readFileSync('advent1-1.txt', 'utf8');
  return File.split('\n');
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
    Numbers = filterChar(string);
    FinalNumber += sumNumbers(Numbers);
  })
  console.log(FinalNumber);
}

main(strings);



