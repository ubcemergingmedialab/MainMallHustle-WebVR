AFRAME.registerComponent("student-pool", {
    init() {
        console.log("INITIALIZING STUDENT COMPONENTS")
        this.studentPool = this.el.sceneEl.components.pool
        console.log(this.el.sceneEl.components);
        this.playerCamera = document.getElementById("camera");

        var queue = [];      
    
        setInterval(() => {
            if(queue.length >= 10){          
                this.studentPool.returnEntity(queue.shift())
                console.log(queue)
                }
            let student = this.studentPool.requestEntity()
            let cameraPosition = this.playerCamera.getAttribute("position");
            student.play();
       
            const randomX = (Math.round(Math.random()) * 2 - 1) * (Math.floor(Math.random() * 5) + 5);
            console.log(randomX)
            const startX = randomX
            const endX = -randomX
            const startZ = (cameraPosition.z - 10)
            const endZ = (cameraPosition.z - 10)

            const animationString = "property:position; from: " + startX + " 2 " + startZ + "; to:" + endX + " 2 " + endZ + ";dur: 10000"
            const randomInt = Math.floor(Math.random() * 9) + 1;    //generate a random integer from 1 to 9
            //console.log(this.randomInt)
            this.generatedId = "#person" + (randomInt);       // build id for person image based on random int
            console.log(this.generatedId);
            // use generated to pass into student material. 
            student.setAttribute("animation", animationString)
            student.setAttribute("material", "src: " + this.generatedId);   // use generated to pass into student material 
            
            queue.push(student)
            //console.log(student.setAttribute("material", "src: " + this.generatedId));
            console.log(student.getAttribute("animation"))
        }, 1000);
    },
    tick() {
    
    },
})