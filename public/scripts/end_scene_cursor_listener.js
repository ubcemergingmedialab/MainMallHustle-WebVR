AFRAME.registerComponent('end-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      document.getElementById('main_mall_manager').components['main-mall-manager'].teleportToStartArea();
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});