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
            student.setAttribute("animation", "from:" + cameraPosition.x - 10 + " " + cameraPosition.y + " " + cameraPosition.z - 10 + "; to:"+ cameraPosition.x + 10 + " " + cameraPosition.y + " " + cameraPosition.z + 10)
            student.play();
            console.log(student.getAttribute("position"))
        } else {
        }
    },
})