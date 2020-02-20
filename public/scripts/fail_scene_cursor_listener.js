AFRAME.registerComponent('fail-scene-cursor-listener', {
    init: function () {
      this.eventHandler = () => {
        console.log("Fail scene status: " + document.getElementById('Fail Scene').getAttribute('visible'));
        if (document.getElementById('Fail Scene').getAttribute('visible')) {
          document.getElementById('Fail Scene').setAttribute('visible', 'false');
          document.getElementById('fail_scene_button').removeAttribute('class');
          document.getElementById('Start Scene').setAttribute('visible', 'true');
          document.getElementById('start_scene_button').setAttribute('class', 'clickable');
          console.log("Currently at: start scene");
        }
      };
      this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
    },
  });