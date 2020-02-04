AFRAME.registerComponent("show-skelly", {
    schema: {type: "selector", default:"#skelly"},

    init: function() {
        var el = this.el;
        var data = this.data;
        setInterval(function() {
           el.setAttribute("color", "#ffffff");
        }, 200);
        setInterval(function() {
            el.setAttribute("color", "#000000");
        }, 153);
    }
})