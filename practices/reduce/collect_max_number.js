'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((pre, cur)=>Math.max(pre, cur));
}
module.exports = collect_max_number;


