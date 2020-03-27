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
            if (document.getElementById('Game Scene').getAttribute('visible')) {
                data.isPlayerReady = true;
            }
        });
        // THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        //     console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        // };
    }
});