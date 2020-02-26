AFRAME.registerComponent('foo', {
    init: function() {
      this.el.addEventListener('hit', (e) => {
       console.log(e)
      })
      this.el.addEventListener('hitend', (e) => {
        console.log('hitend')
        console.log(e)
      })
    }
  })