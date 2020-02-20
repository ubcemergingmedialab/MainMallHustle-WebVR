AFRAME.registerComponent('physics-world', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20}
    },
    init: function () {
        // var el = this.el;
        var scene = document.querySelector('a-scene');
        scene.addEventListener('body-loaded', this.movePlayer);
    },
    movePlayer: function() {
        // var el = this.el;
        var scene = document.querySelector('a-scene');
        scene.addEventListener('click', () => {
            if (document.getElementById('Game Scene').getAttribute('visible')) {
                // var el = this.el;
                var sphere = document.getElementById('sphere');
                // Apply impulse;
                setTimeout(function () {
                    var impulse = { x: 0, y: 0, z: -5 };
                    var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                    sphere.body.applyImpulse(impulse, position);
                }, 25);
            }
        });
    },
});
