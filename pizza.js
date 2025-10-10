function michaelPays(costs) {
  let kate = 0
if (costs < 5){
  return +(costs.toFixed(2))
} else if (costs > 30){
  return +(costs - 10).toFixed(2)
} else {
  return +(costs * 2 / 3).toFixed(2)
}
}