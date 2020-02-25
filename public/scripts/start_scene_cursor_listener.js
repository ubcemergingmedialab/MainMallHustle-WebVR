AFRAME.registerComponent('start-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      console.log("Start scene status: " + document.getElementById('Start Scene').getAttribute('visible'));
      if (document.getElementById('Start Scene').getAttribute('visible')) {
        document.getElementById('Start Scene').setAttribute('visible', 'false');
        document.getElementById('start_scene_button').removeAttribute('class');
        document.getElementById('cursor').setAttribute('visible', 'false');

        document.getElementById('Game Scene').setAttribute('visible', 'true');
        document.getElementById('timer_text').setAttribute('visible', 'true');
      
        console.log("Currently at: fail scene");
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});
