function top3(products, amounts, prices) {
 let arr = [] 
 for (let i = 0; i < amounts.length; i++){
  arr.push([products[i], amounts[i] * prices[i]]) } 
return arr.sort((a, b) => b[1] - a[1]).slice(0, 3).map(item => item[0]) 
}