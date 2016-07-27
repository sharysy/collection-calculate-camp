'use strict';
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arra = [], arrb = [];
  arra = collection_a.map((itema)=> {
    return itema.key;
  });
  arrb = object_b.value;
 return arra.filter((itema)=> {
    let exist = arrb.find((itemb)=>itema === itemb);
    if (exist) {
      return true;
    }
  });
}

module.exports = collect_same_elements;
