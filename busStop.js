var number = function(busStops){
let getOn = busStops.flat().filter((_,i) => i % 2 === 0).reduce((a, b) => a + b, 0)
let getOff = busStops.flat().filter((_,i) => i % 2 === 1).reduce((a, b) => a + b, 0)    
 return getOn - getOff
}