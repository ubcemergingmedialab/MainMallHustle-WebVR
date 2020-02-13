AFRAME.registerComponent('end-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      console.log("End scene status: " + document.getElementById('End Scene').getAttribute('visible'));
      if (document.getElementById('End Scene').getAttribute('visible')) {
        document.getElementById('End Scene').setAttribute('visible', 'false');
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        console.log("Currently at: start scene");
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});