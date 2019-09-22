const userHandler = document.querySelector("#user")

//console.log(axios) to check the axios has loaded correctly.

axios.get('https://jsonplaceholder.typicode.com/users')
     .then(function(response){
          const users = response.data
          users.forEach(user => {
               const optionHandler = document.createElement('option')
               optionHandler.setAttribute('value', user.id)
               optionHandler.innerHTML=user.name
               userHandler.appendChild(optionHandler)
          })
     })
     .catch( function(err){
           console.log(err)
     })

const postHandler = document.getElementById('post')
userHandler.addEventListener('change', function(){
     const id = userHandler.value
     postHandler.innerHTML = ''
     if(id){
     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(function(response){
               const posts = response.data
               console.log(posts)
               posts.forEach( post => {
                    const optionHandler = document.createElement('option')
                    optionHandler.setAttribute('value',post.id)
                    optionHandler.innerHTML = post.title;
                    postHandler.appendChild(optionHandler)
               })
          })
          .catch(function(err){
               console.log(err)
          })
     }
})