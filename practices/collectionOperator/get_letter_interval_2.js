'use strict'

function getNumberArr(number_a, number_b) {

  let arr = [];
  if (number_a < number_b) {
    arr = Array.from({length: number_b - number_a + 1}, (v, k)=>k + number_a);
  } else {
    arr = Array.from({length: number_a - number_b + 1}, (v, k)=>number_a - k);
  }
  return arr;
}
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr = [];
  arr = getNumberArr(number_a, number_b);
  return arr.map((item)=> {
    if (parseInt((item - 1) / 26) === 0) {
      return String.fromCharCode(item - 1 + 97);
    }
    else {
      return String.fromCharCode(parseInt((item - 1) / 26) - 1 + 97) + String.fromCharCode((item - 1) % 26 + 97);
    }
  });
}

module.exports = get_letter_interval_2;

