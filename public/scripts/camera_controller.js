AFRAME.registerComponent('camera-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20}
    },
    init: function(time, timeDelta){
        setInterval(() => {
            if (document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isInGameArea) {
                var updatedPlayerPosition = document.getElementById('sphere').getAttribute('position');
                // console.log(updatedPlayerPosition.x);
                // console.log("sphere's current position: " + updatedPosition);
                document.getElementById('rig').setAttribute('position', {x: updatedPlayerPosition.x, y: document.getElementById('rig').getAttribute('position').y, z: updatedPlayerPosition.z});
            }
        }, 25);
    },
    tick() {
    },
});
