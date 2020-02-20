AFRAME.registerComponent('start-scene-cursor-listener', {
  init: function () {
    this.eventHandler = () => {
      console.log("Start scene status: " + document.getElementById('Start Scene').getAttribute('visible'));
      if (document.getElementById('Start Scene').getAttribute('visible')) {
        document.getElementById('Start Scene').setAttribute('visible', 'false');
        document.getElementById('start_scene_button').removeAttribute('class');
        // document.getElementById('start_scene_camera').setAttribute('active', 'false');
        document.getElementById('cursor').setAttribute('visible', 'false');

        document.getElementById('Game Scene').setAttribute('visible', 'true');
        document.getElementById('timer_text').setAttribute('visible', 'true');
      
        // let cursorNode = document.getElementById('cursor');
        // document.getElementById('camera').remove(cursorNode);
      
        // document.getElementById('Game Scene').setAttribute('visible', 'true');
        // // <a-entity id="timer_text" position="0 0.75 -1.5" text="value:Hello; color:#FFFFFF; font:public/fonts/Whitney.fnt; align:center" scale="7 7 7" timer></a-entity>
        // let timerNode = document.createElement('a-entity');
        // timerNode.setAttribute('id', 'timer_text');
        // timerNode.setAttribute('position', {x: 0, y: 0.75, z: -1.5});
        // timerNode.setAttribute('text', {value: "Hello", color: "#FFFFFF", font: "public/fonts/Whitney.fnt", align: "center"});
        // timerNode.setAttribute('scale', {x: 7, y: 7, z: 7});
        // timerNode.setAttribute('timer', '');
        // document.getElementById('camera').appendChild(timerNode);
        // // document.getElementById('game_scene_camera').setAttribute('active', 'true');
        // // document.getElementById('Fail Scene').setAttribute('visible', 'true');
        // // document.getElementById('fail_scene_button').setAttribute('class', 'clickable');
        console.log("Currently at: fail scene");
      }
    };
    this.el.addEventListener('click', this.eventHandler); // handler name only, not function with ()
  },
});
