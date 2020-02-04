AFRAME.registerComponent('skelly-scare', {
    schema: {type: "string"},

    init: function() {
        var el = this.el
        setInterval(function() {
            console.log("moving skelly");
            el.setAttribute("position", {x: 0, y: 1.5, z: -5});
            setInterval(function() {
                console.log("moving skelly back");
                el.setAttribute("position", {x: 0, y: 1.5, z:-89});
            }, 1000)
        }, 4000)
    }
})