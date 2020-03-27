AFRAME.registerComponent('camera-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20}
    },
    tick: function (time, timeDelta) {
        if (document.getElementById('Game Scene').getAttribute('visible')) {
            var updatedPlayerPosition = document.getElementById('sphere').getAttribute('position');
            // console.log(updatedPlayerPosition.x);
            // console.log("sphere's current position: " + updatedPosition);
            document.getElementById('rig').setAttribute('position', {x: updatedPlayerPosition.x, y: document.getElementById('rig').getAttribute('position').y, z: updatedPlayerPosition.z});
        }
    }
});
