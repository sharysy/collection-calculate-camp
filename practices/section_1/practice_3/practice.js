'use strict';
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let exist;
  let arrb=object_b.value;
  return collection_a.filter((itema)=> {
    exist = arrb.find((itemb)=>itemb === itema);
    if (exist) {
      return true;
    }
  });
}

module.exports = collect_same_elements;
