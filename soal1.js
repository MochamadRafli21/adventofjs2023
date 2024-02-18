// s = "amnsdbmansdbmansdba"
// return [a:4 b:3 d:3 m:3 n:3 s:3]
// keluarkan jumlah masing2 huruf

const s = "amnsdbmansdbmansdba"

const wordCounter = (s) => {
  let results = []
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i]
    let count = 0
    for (let j = 0; j < s.length; j++) {
      if (currentChar === s[j]) {
        count += 1
      }
    }
    results[currentChar] = count
  }

  return results
}

const final = wordCounter(s)
console.log(final)
