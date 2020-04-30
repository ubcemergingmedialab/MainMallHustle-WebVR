AFRAME.registerComponent('main-mall-manager', {
    schema: {
        isPlayerReady: {type: 'boolean', default: false},
        isInStartArea: { type: 'boolean', default: true},
        isInGameArea: {type: 'boolean', default: false},
        isInFailArea: {type: 'boolean', default: false},
        isInEndArea: {type: 'boolean', default: false},
    },
    init: function () {
        // document.getElementById('Start Scene').setAttribute('visible', 'true');
        // document.getElementById('timer_text').setAttribute('visible', 'false');

        // document.getElementById('Game Scene').setAttribute('visible', 'false');
        // document.getElementById('minus_text').setAttribute('visible', 'false');
        // document.getElementById('plus_text').setAttribute('visible', 'false');

        // // document.getElementById('Fail Scene').setAttribute('visible', 'false');
        // document.getElementById('fail_scene_button').removeAttribute('class');

        // // document.getElementById('End Scene').setAttribute('visible', 'false');
        // document.getElementById('fail_scene_button').removeAttribute('class');

        // var data = this.data;
        // var scene = document.querySelector('a-scene');
        // scene.addEventListener('mousedown', () => {
        //     console.log("I am pressed");
        //     if (document.getElementById('Game Scene').getAttribute('visible')) {
        //         data.isPlayerReady = true;
        //     }
        // });
        // THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        //     console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        // };
    },
    teleportToGameArea: function () {
        // disable start button
        document.getElementById('start_scene_button').removeAttribute('class');
        document.getElementById('cursor').setAttribute('visible', 'false');
        // teleport
        document.getElementById('rig').setAttribute('position', '0 0 0');
        // toggle isInStartArea
        this.data.isInStartArea = false;
        // toggle isInGameArea 
        this.data.isInGameArea = true;
        // add press trigger when you are ready text
        document.getElementById('timer_text').setAttribute("text", "value: Press trigger when you're ready");
    },
    teleportToFailArea: function () {
        document.getElementById("Game Scene").setAttribute("visible", "false");
        document.getElementById("timer_text").setAttribute("material", "opacity: 0");

        document.getElementById("Fail Scene").setAttribute("visible", "true");
        document.getElementById("fail_scene_button").setAttribute("class", "clickable");
        document.getElementById("cursor").setAttribute("visible", "true");
    },
    teleportToEndArea: function () {

    },
    teleportToStartArea: function () {
        if (document.getElementById('Fail Scene').getAttribute('visible')) {
            document.getElementById('Fail Scene').setAttribute('visible', 'false');
            document.getElementById('fail_scene_button').removeAttribute('class');
        }
        if (document.getElementById('End Scene').getAttribute('visible')) {
            document.getElementById('End Scene').setAttribute('visible', 'false');
            document.getElementById('end_scene_button').removeAttribute('class');
        }

        document.getElementById('Start Scene').setAttribute('visible', 'true');
        document.getElementById('start_scene_button').setAttribute('class', 'clickable');
    }
});