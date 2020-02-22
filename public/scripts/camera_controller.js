AFRAME.registerComponent('camera-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20}
    },
    tick: function (time, timeDelta) {
        if (document.getElementById('Game Scene').getAttribute('visible')) {
            var updatedPosition = document.getElementById('sphere').getAttribute('position');
            document.getElementById('rig').setAttribute('position', updatedPosition);
            
        }
    }
});
