AFRAME.registerComponent('timer', {
    schema: {
        timeBank: {type: 'number', default: 600},
        timeMultiplier: {type: 'number', default: 7.5}
    },
    init: function () {
        let el = this.el;
        let data = this.data;
        let minutes = Math.floor(data.timeBank / 60);
        let seconds = Math.floor(data.timeBank % 60);
        let formattedMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        let formattedSeconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        let timerString = formattedMinutes + ":" + formattedSeconds;
        el.setAttribute('text', {value: timerString, color: "#FFFFFF"});
    },
    tick: function (time, timeDelta) {
        // Only let this happen when the run button is triggered.
        // A simple way to do this is to simply wait until it is visible.
        // Until then, continue the research on cross-entity communications.
        let el = this.el;
        let data = this.data;
        if (document.getElementById('start_scene_button').getAttribute('start-scene-cursor-listener').isStartButtonActive) {
            console.log("yes");
        }
        data.timeBank -= timeDelta/1000 * data.timeMultiplier;
        let minutes = Math.floor(data.timeBank / 60);
        let seconds = Math.floor(data.timeBank % 60);
        let formattedMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        let formattedSeconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        let timerString = formattedMinutes + ":" + formattedSeconds;
        el.setAttribute('text', {value: timerString, color: "#FFFFFF"});
    }
  });