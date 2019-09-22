function returnTruthy(values){
     return values.filter(function(value){
          return value
     })
}

function returnFalsy(values){
     return values.filter(function(value){
          return !value
     })
}

console.log(returnTruthy([false, 0, 1, undefined, '', NaN, null, {}, [], 'dct', -1]))
console.log(returnFalsy([false, 0, 1, undefined, '', NaN, null, {}, [], 'dct', -1]))

function filterValues(values) {
     const truthy = [] 
     const falsy = []
     values.foreach(function(value){
          if(value){
               truthy.push(value)
          } else {
               falsy.push(value)
          }
     })
     
     return [truthy, falsy]
}

console.log(filterValues([false, 0, 1, undefined, '', NaN, null, {}, [], 'dct', -1]))