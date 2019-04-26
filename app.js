function sum(a, b) {
  return a+b
}

function upperCase (stringLindo, callback) {

  const lindoUpper = stringLindo.toUpperCase();


  callback(lindoUpper);

}

module.exports = { sum, upperCase }
