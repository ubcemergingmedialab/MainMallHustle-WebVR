AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      console.log(document.getElementById('Start Scene').getAttribute('visible'));
      if (document.getElementById('Start Scene').getAttribute('visible')) {
        console.log("fail scene");
        document.getElementById('Start Scene').setAttribute('visible', 'false');
        document.getElementById('run_button').removeEventListener('click', this.eventHandler);
        // document.getElementById('camera1').setAttribute('active', 'false');
        // console.log(document.getElementById('camera1').getAttribute('active'));
        document.getElementById('End Scene').setAttribute('visible', 'true');
        document.getElementById('main_menu_button').addEventListener('click', this.eventHandler);
      } else {
        document.getElementById('End Scene').setAttribute('visible', 'false');
        document.getElementById('main_menu_button').removeEventListener('click', this.eventHandler);
        // document.getElementById('camera1').setAttribute('active', 'false');
        // console.log(document.getElementById('camera1').getAttribute('active'));
        document.getElementById('Start Scene').setAttribute('visible', 'true');
        document.getElementById('run_button').addEventListener('click', this.eventHandler);
      }
    };
    console.log("ok???");
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ().
    document.getElementById('main_menu_button').removeEventListener('click', this.eventHandler);
    // document.getElementById('main_menu_button2').removeEventListener('click', this.eventHandler);
    // window.onload = this.init();
    console.log("I am here");
  },
});
