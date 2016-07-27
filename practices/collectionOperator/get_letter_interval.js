'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  /*if (number_a < number_b) {
   return Array.from({length: number_b - number_a + 1}, (v, k)=>number_a + k);
   }
   else {
   return Array.from({length: number_a - number_b + 1}, (v, k)=>number_a - k);
   }*/
  let arr = [];
  if (number_a < number_b) {
    arr = Array.from({length: number_b - number_a + 1}, (v, k)=>number_a + k);
  } else {
    arr = Array.from({length: number_a - number_b + 1}, (v, k)=>number_a - k);
  }
  return arr.map((item)=>String.fromCharCode(item-1+97));
}

module.exports = get_letter_interval;
