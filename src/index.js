module.exports = function toReadable(number) {
  let arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arrTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrThree = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arrFore = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  let index = 0
  for (let i = 0; i <= number; i++) {
    if (number === i && number < 10) {
      let one = arrOne[i];
      return one
    }
    else if (number === i && number >= 10 && number <= 19) {
      let two = number - 10
      return arrTwo[two]
    }
    else if (number === i && number >= 10 && number <= 99 && (number % 10) === 0) {
      let three = Math.trunc(number / 10);
      return arrThree[three]
    }
    else if (number === i && number >= 10 && number <= 99) {
      let three = Math.trunc(number / 10);
      return arrThree[three] + ' ' + `${arrOne[number % 10]}`
    }
    else if (number === i && number >= 100 && number <= 999 && (number % 100) >= 10 && (number % 100) <= 19) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrTwo[((number % 100) % 10)]}`
    }
    else if (number === i && number >= 100 && number <= 999 && (Math.trunc((number % 100) / 10)) >= 0 && ((number % 100) % 10) === 0 && (Math.trunc((number % 100) / 10)) === 0) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three]
    }
    else if (number === i && number >= 100 && number <= 999 && (Math.trunc((number % 100) / 10)) >= 0 && ((number % 100) % 10) === 0) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrThree[(Math.trunc((number % 100) / 10))]}`
    }
    else if (number === i && number >= 100 && number <= 999 && (Math.trunc((number % 100) / 10)) === 0) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrOne[((number % 100) % 10)]}`
    }
    else if (number === i && number >= 100 && number <= 999 && (Math.trunc((number % 100) / 10)) === 0) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrOne[((number % 100) % 10)]}`
    }
    else if (number === i && number >= 100 && number <= 999) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrThree[(Math.trunc((number % 100) / 10))]}` + ' ' + `${arrOne[((number % 100) % 10)]}`
    }
    else if (number === i && number >= 100 && number <= 999) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrThree[((number % 100) % 10) - 2]}` + ' ' + `${arrOne[((number % 100) % 10)]}`
    }
    else if (number === i && number >= 100 && number <= 999) {
      let three = Math.trunc(number / 100) - 1;
      return arrFore[three] + ' ' + `${arrThree[((number % 100) % 10) - 2]}` + ' ' + `${arrOne[((number % 100) % 10)]}`
    }

  }

}
