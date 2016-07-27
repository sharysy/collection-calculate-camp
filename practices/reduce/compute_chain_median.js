'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split('->').map((item)=>parseInt(item));
  let sortedArr = arr.sort((a, b)=>a - b);
  return sortedArr.length % 2 === 0 ? (sortedArr[parseInt(sortedArr.length / 2)-1] + sortedArr[parseInt(sortedArr.length / 2)]) / 2:sortedArr[parseInt(sortedArr.length / 2)-1];
}

module.exports = compute_chain_median;
