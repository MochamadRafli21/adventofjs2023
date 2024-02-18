
const getString = () => {
  File = require('fs').readFileSync('advent2-2.txt', 'utf8');
  return File.split('\n');
}

const getGameNumber = (string) => {
  return string.split(':')[0].split(' ')[1];
}

const getGameBreakdown = (string) => {
  let blue = 0
  let red = 0
  let green = 0
  const session = string.split(':')[1].split(';');
  session.forEach((string) => {
    const cubes = string.split(',');
    cubes.forEach((string) => {
      values = string.split(' ')
      if (values[2] === 'blue' && values[1] > blue) {
        blue = parseInt(values[1])
      }
      if (values[2] === 'red' && values[1] > red) {
        red = parseInt(values[1])
      }
      if (values[2] === 'green' && values[1] > green) {
        green = parseInt(values[1])
      }
    })
  })

  return blue * red * green
}

const main = (strings) => {
  let sums = 0
  strings.forEach((string) => {
    if (string === '') return
    const breakdown = getGameBreakdown(string);
    if (breakdown) {
      sums += breakdown
    }
  })
  console.log(sums)
}

const strings = getString();

main(strings)
