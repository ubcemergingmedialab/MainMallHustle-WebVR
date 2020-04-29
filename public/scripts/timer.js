AFRAME.registerComponent("timer", {
    schema: {
        timeBank: { type: "number", default: 60000 },
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
    tick: function(time, timeDelta) {
        // Only let this happen when the run button is triggered.
        // A simple way to do this is to simply wait until it is visible.
        // Until then, continue the research on cross-entity communications.
        let el = this.el;
        let data = this.data;
        if (document.getElementById("Game Scene").getAttribute("visible") && document.getElementById("Main Mall Manager").getAttribute("main-mall-manager").isPlayerReady) {
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
                data.timeBank = 60;
                this.el.value = "Johnny Bravo"; 
                // this.el.setAttribute('value', 'Press trigger when you\'re ready');
                console.log(this.el.value);
                // document.getElementById("sphere").object3D.position.x = 5;
                document.getElementById("sphere").object3D.position.set(0, 1.6, 0);
                // document.getElementById("sphere").setAttribute("position", { x: 0, y: 1.6, z: 0 });
                console.log(document.getElementById("sphere").getAttribute("position"));
                document.querySelector('a-scene').flushToDOM();
                console.log(document.getElementById("sphere").getAttribute("position"));

                document.getElementById("rig").object3D.position.set(0, 1.6, 0);
                document.getElementById("Main Mall Manager").setAttribute("main-mall-manager", "false");

                document.getElementById('Main Mall Manager').components['main-mall-manager'].switchToFailScene(); // need to use brackets for dash names

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
