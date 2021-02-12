AFRAME.registerComponent("viewport-observer", {
  schema: {},
  init: function () {
    this.loader = undefined;
  },
  tick: function () {
    if (this.el.sceneEl.camera) {
      var cam = this.el.sceneEl.camera
      var frustum = new THREE.Frustum();
      frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix,
        cam.matrixWorldInverse));

      // Your 3d point to check
      var pos = new THREE.Vector3(0, 0, 0);
      var elPos = this.el.getAttribute("position")
      pos.x = elPos.x; pos.y = elPos.y; pos.z = elPos.z
      if (frustum.containsPoint(pos)) {
        if (this.loader != undefined) {
          console.log("LAZY LOADER element entered frustum")
          this.loader.triggerLoad(this.el)
          this.loader = undefined;
        }
      }
    }
  },

  InjectLoader: function (loader) {
    this.loader = loader;
  }

})