function myForEach(numbers, func){
     for (let i=0; i<numbers.length; i++){
          func(numbers[i])
     }
}

myForEach([20,30,40], function(n){
     console.log(n)
})

const fruits = ['orange', 'mango', 'apple']

Array.prototype.myForEach = function(func){
     for(let i=0; i<this.length; i++){
          func(this[i])
     }
}

fruits.myForEach(function(ele){
     console.log(ele)
})