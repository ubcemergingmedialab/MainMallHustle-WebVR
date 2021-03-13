AFRAME.registerComponent('player-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20},
        penaltySpeed: {type: 'number', default: -10},
        factor: {type: 'number', default: 5.5},
        flag: {type: 'boolean', default: false},
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
            if (e.detail.body.el.getAttribute('class') == 'obstacle') { //document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isPlayerReady &&
                // Get camera direction
                var camera = document.querySelector('[camera]').object3D;
                var cameraAngle = camera.getWorldDirection();
                console.log("collided with obstacle");
                // Apply impulse
                var sphere = document.getElementById('sphere');
                var impulse = {x: 300 * cameraAngle.x, y: 0, z: 300 * cameraAngle.z}; // maybe setup up a field later
                var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                sphere.body.applyImpulse(impulse, position);
                // Subtract from timer, w/ minus text
                var currentTimeBank = document.getElementById('timer_text').getAttribute('timer').timeBank;
                document.getElementById('timer_text').setAttribute('timer', {timeBank: currentTimeBank-10, timeMultiplier: 1});
                document.getElementById('minus_text').setAttribute('visible', 'true');
                setTimeout(function () {
                    document.getElementById('minus_text').setAttribute('visible', 'false');
                }, 1000);
            }            
        });
        el.addEventListener('hitclosest', () => {
            var targetEntity = el.components['aabb-collider'].closestIntersectedEl; 
            if (targetEntity.getAttribute('class') == 'collectible' && targetEntity.getAttribute('visible')) { //document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isPlayerReady && 
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
                document.getElementById('timer_text').setAttribute('timer', {timeBank: currentTimeBank+5, timeMultiplier: 1});
                document.getElementById('plus_text').setAttribute('visible', 'true');
                setTimeout(function () {
                    document.getElementById('plus_text').setAttribute('visible', 'false');
                }, 1000);
            } else if (targetEntity.getAttribute("class") == "goal") {
                document.getElementById("timer_text").setAttribute("timer", "timeBank: 600");
                document.getElementById("timer_text").setAttribute("text", "value:");
                // this.el.setAttribute('value', 'Press trigger when you\'re ready');
                // document.getElementById("sphere").object3D.position.x = 5;
                document.getElementById("sphere").removeAttribute("dynamic-body");
                document.getElementById("sphere").object3D.position.set(0, 0, 0);
                document.getElementById("sphere").setAttribute("dynamic-body", "mass: 70; linearDamping: 0.95; angularDamping: 0.95; sphereRadius: NaN");
                // console.log(document.getElementById("sphere").getAttribute("position"));
                // console.log(document.getElementById("sphere").getAttribute("position"));
                var collectibles = document.getElementById("collectibles").children;
                for (var i = 0; i < collectibles.length; i++) {
                    var collectible = collectibles[i];
                    collectible.setAttribute("visible", "true");
                }

                document.getElementById('main_mall_manager').components['main-mall-manager'].teleportToEndArea(); // need to use brackets for dash names
            }
        });
    },
    tick: function(time, timeDelta) {
        var data = this.data;
        if (data.flag && document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isInGameArea) { //&& document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isPlayerReady
            // Get camera direction
            var camera = document.querySelector('[camera]').object3D;
            var cameraAngle = camera.getWorldDirection(); // Why is it completely in the opposite direction?
            // Apply impulse
            var sphere = document.getElementById('sphere');

            setTimeout(function () {
                var impulse = { x: -data.speed * data.factor * cameraAngle.x, y: 0, z: -data.speed * data.factor * cameraAngle.z }; // maybe setup up a field later
                var position = new CANNON.Vec3().copy(sphere.getAttribute('position'));
                sphere.body.applyImpulse(impulse, position);
            }, 25);
            // sphere.flushToDOM();
        }
    },
});
