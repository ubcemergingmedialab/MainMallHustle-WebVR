AFRAME.registerComponent('start-scene-cursor-listener', {
  schema: {
    isStartButtonActive: {type: 'booelan', default: false}
  },
  init: function () {
    this.eventHandler = () => {
      console.log("Start scene status: " + document.getElementById('Start Scene').getAttribute('visible'));
      isStartButtonActive = true;
      if (document.getElementById('Start Scene').getAttribute('visible')) {
        document.getElementById('Start Scene').setAttribute('visible', 'false');
        document.getElementById('start_scene_button').removeAttribute('class');
        document.getElementById('start_scene_camera').setAttribute('active', 'false');

        document.getElementById('Game Scene').setAttribute('visible', 'true');
        document.getElementById('game_scene_camera').setAttribute('active', 'true');
        // document.getElementById('Fail Scene').setAttribute('visible', 'true');
        // document.getElementById('fail_scene_button').setAttribute('class', 'clickable');
        console.log("Currently at: fail scene");
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});
