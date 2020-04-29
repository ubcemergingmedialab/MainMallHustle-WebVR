AFRAME.registerComponent('fail-scene-cursor-listener', {
    init: function () {
      this.eventHandler = () => {
        console.log("Fail scene status: " + document.getElementById('Fail Scene').getAttribute('visible'));
        document.getElementById('Main Mall Manager').components['main-mall-manager'].switchToStartScene();
      };
      this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
    },
  });

