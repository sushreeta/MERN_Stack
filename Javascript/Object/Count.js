let c1={
     count:0,
     up: function () {
          return this.count++
     },
     down: function() {
          return this.count--
     },
     reset: function(){
          this.count=0
          return this.count
     },
     
}