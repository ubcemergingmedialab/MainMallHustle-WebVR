AFRAME.registerComponent('player-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20},
        flag: {type: 'boolean', default: false},
        oldPlayerPositionZ: {type: 'number', default: 0},
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
                console.log(e.detail.body.el.getAttribute('class'));
            }

            // if (document.getElementById('Game Scene').getAttribute('visible') && el.components['aabb-collider'].closestIntersectedEl.getAttribute('class') == 'obstacle') {
            //     // Get camera direction
            //     var camera = document.querySelector('[camera]').object3D;
            //     var cameraAngle = camera.getWorldDirection();
            //     // Apply impulse
            //     var sphere = document.getElementById('sphere');
            //     setTimeout(function () {
            //         var impulse = {x: 500 * cameraAngle.x, y: 0, z: 500 * cameraAngle.z}; // maybe setup up a field later
            //         var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
            //         sphere.body.applyImpulse(impulse, position);
            //     }, 25);
            //     // Subtract from timer, w/ minus text
            //     var currentTimeBank = document.getElementById('timer_text').getAttribute('timer').timeBank;
            //     document.getElementById('timer_text').setAttribute('timer', {timeBank: currentTimeBank-10, timeMultiplier: 7.5});
            //     document.getElementById('minus_text').setAttribute('visible', 'true');
            //     setTimeout(function () {
            //         document.getElementById('minus_text').setAttribute('visible', 'false');
            //     }, 1000);
            // }
        });
        el.addEventListener('hitclosest', () => {
            if (document.getElementById('Game Scene').getAttribute('visible') && el.components['aabb-collider'].closestIntersectedEl.getAttribute('class') == 'collectible') {
                console.log('obtained collectible');
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
                // console.log(angle);
                // var impulse = { x: 0, y: 0, z: -5 };
                var impulse = {x: -50 * cameraAngle.x, y: 0, z: -50 * cameraAngle.z}; // maybe setup up a field later
                var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                sphere.body.applyImpulse(impulse, position);
            }, 25);
            // Calculate velocity
            // var currentPlayerPosition = new CANNON.Vec3().copy(sphere.getAttribute('position'));
            // console.log(sphere.getAttribute('position').x);
            sphere.flushToDOM();
            // var diff = new CANNON.Vec3().vsub(currentPlayerPosition, this.data.playerOldPosition);
            // console.log(diff/(timeDelta/1000));
            // this.data.playerOldPosition = currentPlayerPosition;
        }
    },
    //     var interval;
        // scene.addEventListener('mouseup', () => {
        //     isMouseDown = false;
        // });
    //     scene.addEventListener('mouseup', () => {
    //         clearInterval(interval);
    //     });
    // },
    //     // var el = this.el;
    //     var scene = document.querySelector('a-scene');
    //     scene.addEventListener('mousedown', () => {
    //         if (document.getElementById('Game Scene').getAttribute('visible')) {
    //             // var el = this.el;
    //             var sphere = document.getElementById('sphere');
    //             // Apply impulse;
    //             setTimeout(function () {
    //                 var impulse = { x: 0, y: 0, z: -5 };
    //                 var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
    //                 sphere.body.applyImpulse(impulse, position);
    //             }, 25);
    //         }
    //     });
    // },
});