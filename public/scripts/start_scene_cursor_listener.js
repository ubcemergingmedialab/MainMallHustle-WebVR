AFRAME.registerComponent('start-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      console.log("Start scene status: " + document.getElementById('Start Scene').getAttribute('visible'));
      if (document.getElementById('Start Scene').getAttribute('visible')) {
        document.getElementById('Main Mall Manager').components['main-mall-manager'].switchToGameScene();
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});
