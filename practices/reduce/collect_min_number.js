'use strict';

function collect_min_number(collection) {
  //在这里写入代码
return collection.reduce((pre,cur)=>Math.min(pre,cur));
}

module.exports = collect_min_number;

