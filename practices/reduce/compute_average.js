'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((pre, cur)=>pre + cur, 0) / collection.length;
}

module.exports = compute_average;

