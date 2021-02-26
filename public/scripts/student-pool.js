AFRAME.registerComponent("student-pool", {
    init(){
        console.log("INITIALIZING STUDENT COMPONENTS")
        this.studentPool = this.el.sceneEl.components.pool
        console.log(this.el.sceneEl.components);
        this.playerCamera = document.getElementById("camera");
    },
    tick(){
        if(this.studentPool !== undefined) {
            let student = this.studentPool.requestEntity()
            if(student == undefined) {
                return;
            }
            console.log("INSTANTIATED STUDENT");
            let cameraPosition = this.playerCamera.getAttribute("position");
            student.play();
            const animationString = "property:position; from: " + (cameraPosition.x - 10) + " 2 " + (cameraPosition.z - 10) + "; to:" + cameraPosition.x + 10 + " 2 " + cameraPosition.z + 10 + ";dur: 10000"
            // TODO: generate a random integer from 1 to 9
            // build id for person image based on random int. EG) "#person" + (randomInt) -> "#person3" 
            // use generated to pass into student material. EG) student.setAttribute("material", "src: " + [generatedId]) -> student.setAttribute("material", "src:#person3")
            student.setAttribute("animation", animationString)
            student.setAttribute("material", "src: #person3");
            console.log(student.getAttribute("animation"))
        } else {
        }
    },
})