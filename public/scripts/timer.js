AFRAME.registerComponent("timer", {
    schema: {
        timeBank: { type: "number", default: 600 },
        timeMultiplier: { type: "number", default: 7.5 }
    },
    init: function() {
        // document.querySelector('a-assets').addEventListener('loaded', () => {
        //     console.log("yasdf");
        // });
        // document.querySelector('a-assets').addEventListener('load', () => {
        //     console.log("yasaaaaaaaaadf");
        // });
    },
    print: function() {
        console.log("timer is now in the current execution order");
    },
    tick: function(time, timeDelta) {
        // Only let this happen when the run button is triggered.
        // A simple way to do this is to simply wait until it is visible.
        // Until then, continue the research on cross-entity communications.
        let el = this.el;
        let data = this.data;
        // console.log("timer: " + document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isInGameArea.toString() + document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isPlayerReady.toString());
        if (document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isInGameArea) { // && document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isPlayerReady
            el.setAttribute("scale", { x: 2, y: 2, z: 2 });
            data.timeBank -= (timeDelta / 1000) * data.timeMultiplier;
            if (data.timeBank >= 0) {
                let minutes = Math.floor(data.timeBank / 60);
                let seconds = Math.floor(data.timeBank % 60);
                let formattedMinutes = minutes.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                });
                let formattedSeconds = seconds.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                });
                let timerString = formattedMinutes + ":" + formattedSeconds;
                el.setAttribute("text", {
                    value: timerString,
                    color: "#FFFFFF"
                });
            } else {
                // document.getElementById("main_mall_manager").setAttribute("main-mall-manager", "isPlayerReady: false");
                data.timeBank = 600;
                this.el.setAttribute("text", "value:"); 
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
                
                document.getElementById('main_mall_manager').components['main-mall-manager'].teleportToFailArea(); // need to use brackets for dash names

                // document.getElementById("Game Scene").setAttribute("visible", "false");
                // document.getElementById("timer_text").setAttribute("visible", "false");

                // document.getElementById("Fail Scene").setAttribute("visible", "true");
                // document.getElementById("fail_scene_button").setAttribute("class", "clickable");
                // document.getElementById("cursor").setAttribute("visible", "true");

                // document.getElementById("rig").setAttribute("position", { x: 0, y: 1.6, z: 0 });
            }
        }
    }
});
