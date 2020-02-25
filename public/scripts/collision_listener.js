AFRAME.registerComponent('collision-listener', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20},
        flag: {type: 'boolean', default: false},
        oldPlayerPositionZ: {type: 'number', default: 0},
    },
    init: function () {
        var el = this.el;
        var data = this.data;
        el.addEventListener('collide', () => {
            if (document.getElementById('Game Scene').getAttribute('visible')) {
                // Get camera direction
                var camera = document.querySelector('[camera]').object3D;
                var cameraAngle = camera.getWorldDirection();
                // Apply impulse
                var sphere = document.getElementById('sphere');
                setTimeout(function () {
                    var impulse = {x: 500 * cameraAngle.x, y: 0, z: 500 * cameraAngle.z}; // maybe setup up a field later
                    var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                    sphere.body.applyImpulse(impulse, position);
                }, 25);
                // Subtract from timer, w/ minus text
                var currentTimeBank = document.getElementById('timer_text').getAttribute('timer').timeBank;
                document.getElementById('timer_text').setAttribute('timer', {timeBank: currentTimeBank-10, timeMultiplier: 7.5});
                document.getElementById('minus_text').setAttribute('visible', 'true');
                setTimeout(function () {
                    document.getElementById('minus_text').setAttribute('visible', 'false');
                }, 1000);
            }
        });
    },
});