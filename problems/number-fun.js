function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n >= 1 && n <= 1000000) {
  return (n + '').split('').reverse().join('') * 1
  } else {
    throw new Error ('RangeError, out of bounds')
  }
}

module.exports = {
  returnsThree,
  reciprocal
};

console.log(reciprocal(25))
