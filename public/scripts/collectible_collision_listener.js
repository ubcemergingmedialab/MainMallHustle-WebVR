AFRAME.registerComponent('collectible-collision-listener', {
    init: function () {
        var el = this.el;
        el.addEventListener('hit', () => {
            if (document.getElementById('Game Scene').getAttribute('visible')) {
                console.log("zoooom");
            }
        });
    },
});