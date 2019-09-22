const userCart = []

function add2cart(userCart, lineItem) {

     const product = userCart.find(function(item){
          return item.id == lineItem.id
     })
     if(product){
          product.quantity+= lineItem.quantity
     } else {
          userCart.push(lineItem)
     }
     return userCart
}

console.log(add2cart(userCart, {id:1, name: 'pencil', quantity: 1}))
console.log(add2cart(userCart, {id:2, name: 'scale', quantity: 1}))
console.log(add2cart(userCart, {id:1, name: 'pencil', quantity: 1}))