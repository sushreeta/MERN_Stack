const products=[
     {id:1, name:'puma1', brand:'puma'},
     {id:2, name:'puma2', brand:'puma'},
     {id:3, name:'puma3', brand:'puma'},
     {id:4, name:'adi1', brand:'addidas'},
     {id:5, name:'adi2', brand:'addidas'},
     {id:6, name:'adi3', brand:'addidas'}
]

function filterShoes(products, brands){
     const output = products.filter(function(item){
          return brands.includes(item.brand)
     })
     return output
}

console.log(filterShoes(products,['puma']))