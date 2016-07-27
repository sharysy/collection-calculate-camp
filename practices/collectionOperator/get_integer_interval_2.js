'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr=[];
  if (number_a < number_b) {
    arr= Array.from({length: number_b - number_a + 1}, (v, k)=>k + number_a);
  } else {
    arr=Array.from({length: number_a - number_b + 1}, (v, k)=>number_a - k);
  }
  return arr.filter((item)=>item%2===0);
}

module.exports = get_integer_interval_2;
