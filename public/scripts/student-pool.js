AFRAME.registerComponent("student-pool", {
    init() {
        console.log("INITIALIZING STUDENT COMPONENTS")
        this.studentPool = this.el.sceneEl.components.pool
        console.log(this.el.sceneEl.components);
        this.playerCamera = document.getElementById("rig");

        var queue = [];      
    
        setInterval(() => {
            if(queue.length >= 10){          
                this.studentPool.returnEntity(queue.shift())
                console.log(queue)
            }
            let student = this.studentPool.requestEntity()
            let cameraPosition = this.playerCamera.getAttribute("position");
            student.play();
       
            let randomX = (Math.round(Math.random()) * 2 - 1) * (Math.floor(Math.random() * 5) + 5);
            console.log(randomX)
            let startX = randomX
            let endX = -randomX
            let startZ = (cameraPosition.z - 10)
            let endZ = (cameraPosition.z - 10)

            console.log("ANIMATION: "+endZ)

            let animationString = "property:position; from: " + startX + " 2 " + startZ + "; to:" + endX + " 2 " + endZ + ";dur: 10000"
            let randomInt = Math.floor(Math.random() * 9) + 1;    //generate a random integer from 1 to 9
            //console.log(this.randomInt)
            this.generatedId = "#person" + (randomInt);       // build id for person image based on random int
            console.log(this.generatedId);
            // use generated to pass into student material. 
            student.setAttribute("animation", animationString)
            student.setAttribute("material", "src: " + this.generatedId);   // use generated to pass into student material 
            student.setAttribute("class", "obstacle");
            queue.push(student)
            //console.log(student.setAttribute("material", "src: " + this.generatedId));
            console.log(student.getAttribute("animation"))
        }, 1000);
    },
    tick() {
    
    },
})