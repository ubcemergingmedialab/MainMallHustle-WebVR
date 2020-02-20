AFRAME.registerComponent('timer', {
    schema: {
        timeBank: {type: 'number', default: 100},
        timeMultiplier: {type: 'number', default: 7.5}
    },
    init: function () {
        let el = this.el;
        let data = this.data;
        let minutes = Math.floor(data.timeBank / 60);
        let seconds = Math.floor(data.timeBank % 60);
        let formattedMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        let formattedSeconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        let timerString = formattedMinutes + ":" + formattedSeconds;
        el.setAttribute('text', {value: timerString, color: "#FFFFFF"});
    },
    tick: function (time, timeDelta) {
        // Only let this happen when the run button is triggered.
        // A simple way to do this is to simply wait until it is visible.
        // Until then, continue the research on cross-entity communications.
        let el = this.el;
        let data = this.data;
        if (document.getElementById('Game Scene').getAttribute('visible')) {
            data.timeBank -= timeDelta/1000 * data.timeMultiplier;
            if (data.timeBank >= 0) {
                let minutes = Math.floor(data.timeBank / 60);
                let seconds = Math.floor(data.timeBank % 60);
                let formattedMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                let formattedSeconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                let timerString = formattedMinutes + ":" + formattedSeconds;
                el.setAttribute('text', {value: timerString, color: "#FFFFFF"});
            } else {
                // document.getElementById('start_scene_button').removeAttribute('class');
                document.getElementById('Game Scene').setAttribute('visible', 'false');
                document.getElementById('timer_text').setAttribute('visible', 'false');

                document.getElementById('Fail Scene').setAttribute('visible', 'true');
                document.getElementById('fail_scene_button').setAttribute('class', 'clickable');
                document.getElementById('cursor').setAttribute('visible', 'true');
                // let timerNode = document.getElementById('timer_text');
                // document.getElementById('camera').remove(timerNode);

                // document.getElementById('Fail Scene').setAttribute('visible', 'true');
                
                // let cursorNode = document.createElement('a-entity');
                // cursorNode.setAttribute('id', 'cursor');
                // cursorNode.setAttribute('cursor', {fuse: true, fuseTimeout: 1000});
                // cursorNode.setAttribute('raycaster', {objects: '.clickable'}); //?
                // cursorNode.setAttribute('position', {x: 0, y: 0, z: -1});
                // cursorNode.setAttribute('geometry', {primitive: 'ring', radiusInner: 0.02, radiusOuter: 0.03});
                // cursorNode.setAttribute('material', {color: 'white', shader: 'flat'});
                // let animationNode = document.createElement('a-animation');
                // animationNode.setAttribute('begin', 'cursor-hovering');
                // animationNode.setAttribute('easing', 'ease-in');
                // animationNode.setAttribute('attribute', 'scale');
                // animationNode.setAttribute('fill', 'backwards');
                // animationNode.setAttribute('from', "0.1 0.1 0.1");
                // animationNode.setAttribute('to', "1 1 1");
                // cursorNode.appendChild(animationNode);
                // document.getElementById('camera').appendChild(cursorNode);

                // document.getElementById('fail_scene_button').setAttribute('class', 'clickable');
                
                data.timeBank = 100;
                // document.getElementById('Fail Scene').setAttribute('visible', 'true');
                // document.getElementById('fail_scene_camera').setAttribute('active', 'true');
                // document.getElementById('fail_scene_button').setAttribute('class', 'clickable');
            }
        }
    }
});
