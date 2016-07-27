'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let arr = collection_a.concat(collection_b);
  return arr.filter((item, pos)=>arr.indexOf(item) === pos);
}

module.exports = get_union;

