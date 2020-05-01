AFRAME.registerComponent('start-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      // console.log(document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isInStartArea);
      if (document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isInStartArea) {
        document.getElementById('main_mall_manager').components['main-mall-manager'].teleportToGameArea();
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});
