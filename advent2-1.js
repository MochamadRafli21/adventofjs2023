const getString = () => {
  File = require('fs').readFileSync('advent2-1.txt', 'utf8');
  return File.split('\n');
}

const getGameNumber = (string) => {
  return string.split(':')[0].split(' ')[1];
}

const getGameBreakdown = (string) => {
  let possible = true
  const session = string.split(':')[1].split(';');
  session.forEach((string) => {
    const cubes = string.split(',');
    cubes.forEach((string) => {
      values = string.split(' ')
      if (values[2] === 'blue' && values[1] > 14 || values[2] === 'red' && values[1] > 12 || values[2] === 'green' && values[1] > 13) {
        possible = false
        return
      }
    })
  })

  return possible
}

const main = (strings) => {
  let sums = 0
  strings.forEach((string) => {
    if (string === '') return
    const game = getGameNumber(string);
    const breakdown = getGameBreakdown(string);
    if (breakdown) {
      sums += parseInt(game)
    }
  })
  console.log(sums)
}

const strings = getString();

main(strings)
