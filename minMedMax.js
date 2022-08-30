//const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
if(n1 > n2 && n1 > n3 && n2 >= n3){
  return (`{ Min : ${n3} , Med : ${n2} , Max : ${n1} } ` )
}  
else if(n1 > n2 && n1 > n3 && n3 >= n2){
  return (`{ Min : ${n2} , Med : ${n3} , Max : ${n1} } ` )
}
else if (n2 > n1 && n2 > n3 && n1 >= n3){
  return (`{ Min : ${n3} , Med : ${n1} , Max : ${n2} } ` )
} 
else if (n2 > n1 && n2 > n3 && n3 >= n1){
  return (`{ Min : ${n1} , Med : ${n3} , Max : ${n2} } ` )
} 
else if (n3 > n1 && n3 > n2 && n2 >= n1){
  return (`{ Min : ${n1} , Med : ${n2} , Max : ${n3} } ` )
}
else if (n3 > n1 && n3 > n2 && n1 >= n2){
  return (`{ Min : ${n2} , Med : ${n1} , Max : ${n3} } ` )
}
  //return (`{ Min : ${Math.min(n1,n2,n3)} , Med : ${...} , Max : ${Math.max(n1,n2,n3)} } ` )
}
//module.exports = minMedMax
//console.log(minMedMax(85,30,1))
//console.log(minMedMax(10,0,20))
//console.log(minMedMax(-5,0,10))
//console.log(minMedMax(5,1,1))
//console.log(minMedMax(-1,-8,0))

