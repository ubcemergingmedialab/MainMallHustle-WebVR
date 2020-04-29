AFRAME.registerComponent('main-mall-manager', {
    schema: {
        isPlayerReady: {type: 'boolean', default: false}
    },
    init: function () {
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        document.getElementById('timer_text').setAttribute('visible', 'false');

        document.getElementById('Game Scene').setAttribute('visible', 'false');
        document.getElementById('minus_text').setAttribute('visible', 'false');
        document.getElementById('plus_text').setAttribute('visible', 'false');

        document.getElementById('Fail Scene').setAttribute('visible', 'false');
        document.getElementById('fail_scene_button').removeAttribute('class');

        document.getElementById('End Scene').setAttribute('visible', 'false');
        document.getElementById('fail_scene_button').removeAttribute('class');

        var data = this.data;
        var scene = document.querySelector('a-scene');
        scene.addEventListener('mousedown', () => {
            console.log("I am pressed");
            if (document.getElementById('Game Scene').getAttribute('visible')) {
                data.isPlayerReady = true;
            }
        });
        // THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        //     console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        // };
    },
    switchToStartScene: function () {
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
    },
    switchToGameScene: function () {
        document.getElementById('Start Scene').setAttribute('visible', 'false');
        document.getElementById('start_scene_button').removeAttribute('class');
        document.getElementById('cursor').setAttribute('visible', 'false');

        document.getElementById('Game Scene').setAttribute('visible', 'true');
        document.getElementById('timer_text').setAttribute('visible', 'true');
    },
    switchToFailScene: function () {
        document.getElementById("Game Scene").setAttribute("visible", "false");
        document.getElementById("timer_text").setAttribute("material", "opacity: 0");

        document.getElementById("Fail Scene").setAttribute("visible", "true");
        document.getElementById("fail_scene_button").setAttribute("class", "clickable");
        document.getElementById("cursor").setAttribute("visible", "true");
    },
    switchToEndScene: function () {

    }
});