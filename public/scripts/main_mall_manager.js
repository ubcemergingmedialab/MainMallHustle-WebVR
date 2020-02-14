AFRAME.registerComponent('main-mall-manager', {
    init: function () {
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        // document.getElementById('Game Mode').setAttribute('visible', 'false');
        document.getElementById('Fail Scene').setAttribute('visible', 'false');
        document.getElementById('fail_scene_button').removeAttribute('class');
        document.getElementById('End Scene').setAttribute('visible', 'false');
        document.getElementById('end_scene_button').removeAttribute('class');
        // endScene.components.clicker.removeEventListener();
    }
  });