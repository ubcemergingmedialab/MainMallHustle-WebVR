AFRAME.registerComponent('end-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      console.log("End scene status: " + document.getElementById('End Scene').getAttribute('visible'));
      if (document.getElementById('End Scene').getAttribute('visible')) {
        document.getElementById('End Scene').setAttribute('visible', 'false');
        document.getElementById('end_scene_button').removeAttribute('class');
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        document.getElementById('start_scene_button').setAttribute('class', 'clickable');
        console.log("Currently at: start scene");
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});