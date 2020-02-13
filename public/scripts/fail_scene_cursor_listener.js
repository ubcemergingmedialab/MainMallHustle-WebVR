AFRAME.registerComponent('fail-scene-cursor-listener', {
    init: function () {
      this.eventHandler = () => {
        console.log("Fail scene status: " + document.getElementById('Fail Scene').getAttribute('visible'));
        if (document.getElementById('Fail Scene').getAttribute('visible')) {
          document.getElementById('Fail Scene').setAttribute('visible', 'false');
          document.getElementById('End Scene').setAttribute('visible', 'true');
          console.log("Currently at: end scene");
        }
      };
      this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
    },
  });