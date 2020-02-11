AFRAME.registerComponent('cursor-listener', {
    init: function () {
      // var lastIndex = -1;
      // var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('click', function (evt) {
        // lastIndex = (lastIndex + 1) % COLORS.length;
        // this.setAttribute('material', 'color', COLORS[lastIndex]);
        // console.log('I was clicked at: ', evt.detail.intersection.point);
        if (document.getElementById('Start Scene').getAttribute('visible')) {
          document.getElementById('Start Scene').setAttribute('visible', 'false');
          document.getElementById('End Scene').setAttribute('visible', 'true');
        } else if (document.getElementById('End Scene').getAttribute('visible')) {
          document.getElementById('End Scene').setAttribute('visible', 'false');
          document.getElementById('Start Scene').setAttribute('visible', 'true');
        }
      });
    }
  });