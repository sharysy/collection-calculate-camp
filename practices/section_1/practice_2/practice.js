'use strict';
function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let arr = [];
  collection_b.map((itemb)=>{
    if(Array.isArray(itemb)){
      arr=arr.concat(itemb);
    }
    else{
      arr.push(itemb);
    }
  });
  return collection_a.filter((itema)=> {
    return arr.find((a)=>itema === a);
  });
}

module.exports = collect_same_elements;
