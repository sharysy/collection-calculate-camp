'use strict';

function compute_median(collection) {
  //在这里写入代码
let arr=collection.sort((a,b)=>a-b);
  if(arr.length%2===0){
    return (arr[parseInt(arr.length/2)-1]+arr[parseInt(arr.length/2)])/2;
  }
  else return arr[parseInt(arr.length/2)-1];
}

module.exports = compute_median;


