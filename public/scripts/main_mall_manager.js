AFRAME.registerComponent('main-mall-manager', {
    init: function () {
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        // document.getElementById('Game Mode').setAttribute('visible', 'false');
        document.getElementById('Fail Scene').setAttribute('visible', 'false');
        document.getElementById('End Scene').setAttribute('visible', 'false');
        // endScene.components.clicker.removeEventListener();
    }
  });