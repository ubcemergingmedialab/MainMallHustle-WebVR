AFRAME.registerComponent('player-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20},
        penaltySpeed: {type: 'number', default: -10},
        factor: {type: 'number', default: 5},
        flag: {type: 'boolean', default: false},
        // oldPlayerPositionX: {type: 'number', default: 0},
        // oldPlayerPositionZ: {type: 'number', default: 0},
    },
    init: function () {
        // For player movement
        var data = this.data;
        var scene = document.querySelector('a-scene');
        scene.addEventListener('mousedown', () => {
            data.flag = true;
        });
        scene.addEventListener('mouseup', () => {
            data.flag = false;
        });
        var el = this.el;
        // For collision detection
        el.addEventListener('collide', (e) => {
            if (document.getElementById('Game Scene').getAttribute('visible')) {
                // Get camera direction
                var camera = document.querySelector('[camera]').object3D;
                var cameraAngle = camera.getWorldDirection();
                // Apply impulse
                var sphere = document.getElementById('sphere');
                var impulse = {x: 300 * cameraAngle.x, y: 0, z: 300 * cameraAngle.z}; // maybe setup up a field later
                var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                sphere.body.applyImpulse(impulse, position);
                // Subtract from timer, w/ minus text
                var currentTimeBank = document.getElementById('timer_text').getAttribute('timer').timeBank;
                document.getElementById('timer_text').setAttribute('timer', {timeBank: currentTimeBank-10, timeMultiplier: 7.5});
                document.getElementById('minus_text').setAttribute('visible', 'true');
                setTimeout(function () {
                    document.getElementById('minus_text').setAttribute('visible', 'false');
                }, 1000);
            }            
        });
        el.addEventListener('hitclosest', () => {
            var targetEntity = el.components['aabb-collider'].closestIntersectedEl; 
            if (document.getElementById('Game Scene').getAttribute('visible') && targetEntity.getAttribute('class') == 'collectible' && targetEntity.getAttribute('visible')) {
                // Get camera direction
                var camera = document.querySelector('[camera]').object3D;
                var cameraAngle = camera.getWorldDirection();
                // Apply impulse
                var sphere = document.getElementById('sphere');
                setTimeout(function () {
                    var impulse = {x: -150 * cameraAngle.x, y: 0, z: -150 * cameraAngle.z}; // maybe setup up a field later
                    var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                    sphere.body.applyImpulse(impulse, position);
                }, 25);
                // Make collectible invisible
                targetEntity.setAttribute('visible', 'false');
                // Add to timer, w/ plus text
                var currentTimeBank = document.getElementById('timer_text').getAttribute('timer').timeBank;
                document.getElementById('timer_text').setAttribute('timer', {timeBank: currentTimeBank+5, timeMultiplier: 7.5});
                document.getElementById('plus_text').setAttribute('visible', 'true');
                setTimeout(function () {
                    document.getElementById('plus_text').setAttribute('visible', 'false');
                }, 1000);
            }
        });
    },
    tick: function(time, timeDelta) {
        var data = this.data;
        if (data.flag && document.getElementById('Game Scene').getAttribute('visible')) {
            // Get camera direction
            var camera = document.querySelector('[camera]').object3D;
            var cameraAngle = camera.getWorldDirection(); // Why is it completely in the opposite direction?
            // Apply impulse
            var sphere = document.getElementById('sphere');
            setTimeout(function () {
                var impulse = {x: -15 * cameraAngle.x, y: 0, z: -15 * cameraAngle.z}; // maybe setup up a field later
                var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                sphere.body.applyImpulse(impulse, position);
            }, 25);
            sphere.flushToDOM();
        }
        // var sphere = document.getElementById('sphere');
        // var oldPlayerPositionVec3 = new CANNON.Vec3(data.oldPlayerPositionX, 0, data.oldPlayerPositionZ);
        // var currentPlayerPositionVec3 = new CANNON.Vec3().copy(sphere.getAttribute('position'));
        // var diffX = currentPlayerPositionVec3.x - oldPlayerPositionVec3.x;
        // var diffZ = currentPlayerPositionVec3.z - oldPlayerPositionVec3.z;
        // var displacement = Math.sqrt(diffX*diffX + diffZ*diffZ);
        // console.log(displacement/(timeDelta/1000));
        // data.oldPlayerPositionX = currentPlayerPositionVec3.x;
        // data.oldPlayerPositionZ = currentPlayerPositionVec3.z;
    },
});
