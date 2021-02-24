AFRAME.registerComponent("student-pool", {
    init(){
        console.log("INITIALIZING STUDENT COMPONENTS")
        this.studentPool = this.el.sceneEl.components.pool
        console.log(this.el.sceneEl.components);
        this.playerCamera = document.getElementById("camera");
    },
    tick(){
        if(this.studentPool !== undefined) {
            console.log("STUDENT POOL INSTANTIATING");
            let student = this.studentPool.requestEntity()
            let cameraPosition = this.playerCamera.getAttribute("position");
            student.setAttribute("animation", "from:" + cameraPosition.x - 10 + " " + cameraPosition.y + " " + cameraPosition.z - 10 + "; to:"+ cameraPosition.x + 10 + " " + cameraPosition.y + " " + cameraPosition.z + 10)
            student.play();
        } else {
        }
    },
})