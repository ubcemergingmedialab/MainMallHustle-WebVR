AFRAME.registerComponent("student-pool", {
    init(){
        this.studentPool = document.querySelector("a-scene").components.pool
        console.log(document.querySelector("a-scene").components);
        this.playerCamera = document.getElementById("camera");
    },
    tick(){
        if(this.studentPool != undefined) {
            console.log("STUDENT POOL INSTANTIATING");
            let student = this.studentPool.requestEntity()
            let cameraPosition = this.playerCamera.getAttribute("position");
            student.setAttribute("animation", "from:" + cameraPosition.x - 10 + " " + cameraPosition.y + " " + cameraPosition.z - 10 + "; to:"+ cameraPosition.x + 10 + " " + cameraPosition.y + " " + cameraPosition.z - 10)
            student.play();
        } else {
        }
    },
})