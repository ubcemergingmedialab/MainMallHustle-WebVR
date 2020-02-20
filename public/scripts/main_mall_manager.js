AFRAME.registerComponent('main-mall-manager', {
    init: function () {
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        document.getElementById('timer_text').setAttribute('visible', 'false');

        document.getElementById('Game Scene').setAttribute('visible', 'false');

        document.getElementById('Fail Scene').setAttribute('visible', 'false');
        document.getElementById('fail_scene_button').removeAttribute('class');

        document.getElementById('End Scene').setAttribute('visible', 'false');
        document.getElementById('fail_scene_button').removeAttribute('class');
        // document.getElementById('end_scene_camera').setAttribute('active', 'false');
        // endScene.components.clicker.removeEventListener();
    }
  });