AFRAME.registerComponent("timer", {
    schema: {
        timeBank: { type: "number", default: 600 },
        timeMultiplier: { type: "number", default: 1 }
    },
    init: function(time, timeDelta) {
        setInterval(() => {

        // Only let this happen when the run button is triggered.
        // A simple way to do this is to simply wait until it is visible.
        // Until then, continue the research on cross-entity communications.
        let el = this.el;
        let data = this.data;
        // console.log("timer: " + document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isInGameArea.toString() + document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isPlayerReady.toString());
        if (document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isInGameArea) { // && document.getElementById("main_mall_manager").getAttribute("main-mall-manager").isPlayerReady
            el.setAttribute("scale", { x: 2, y: 2, z: 2 });
            data.timeBank -=  data.timeMultiplier;
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
              
                data.timeBank = 600;
                this.el.setAttribute("text", "value:"); 
               
                document.getElementById("sphere").removeAttribute("dynamic-body");
                document.getElementById("sphere").object3D.position.set(0, 0, 0);
                document.getElementById("sphere").setAttribute("dynamic-body", "mass: 70; linearDamping: 0.95; angularDamping: 0.95; sphereRadius: NaN");
            
                var collectibles = document.getElementById("collectibles").children;
                for (var i = 0; i < collectibles.length; i++) {
                    var collectible = collectibles[i];
                    collectible.setAttribute("visible", "true");
                }
                
                document.getElementById('main_mall_manager').components['main-mall-manager'].teleportToFailArea(); // need to use brackets for dash names

            }
        }



        }, 1000);
        
    },
    tick() {
      
    }
});
