AFRAME.registerComponent('physics-world', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20},
        flag: {type: 'boolean', default: false},
        oldPlayerPositionZ: {type: 'number', default: 0},
    },
    init: function () {
        // var scene = document.querySelector('a-scene');
        // scene.addEventListener('body-loaded', this.movePlayer);
        // var interval;
        // document.mousedown(function(eventObj) {
        //     interval = setInterval(performWhileMouseDown(eventObj), 100);
        // }).mouseup(function() {
        //     clearInterval(interval);  
        // });
        var data = this.data;
        var scene = document.querySelector('a-scene');
        scene.addEventListener('mousedown', () => {
            data.flag = true;
        });
        scene.addEventListener('mouseup', () => {
            data.flag = false;
        });
    },
    tick: function(time, timeDelta) {
        var data = this.data;
        if (data.flag && document.getElementById('Game Scene').getAttribute('visible')) {
            // console.log('asdfasfasf');
            var sphere = document.getElementById('sphere');
            // Apply impulse;
            setTimeout(function () {
                var impulse = { x: 0, y: 0, z: -5 };
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