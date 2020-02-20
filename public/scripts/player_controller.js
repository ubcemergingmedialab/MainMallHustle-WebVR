AFRAME.registerComponent('player-controller', {
    schema: {
        speed: {type: 'number', default: 10},
        dashSpeed: {type: 'number', default: 20}
    },
    init: function () {
        this.pStart = new THREE.Vector3();
        // this.sourceEl = this.el.sceneEl.querySelector('[camera]');
        // document.addEventListener('click', this.forcePush.bind(this));
    },
    forcePush: function () {
        var force;
        var el = this.el;
        var pStart = this.pStart.copy(this.sourceEl.getAttribute('position'));

        force = el.body.position.vsub(pStart);
        force.normalize();
        force.scale(this.data.force, force);

        el.body.applyImpulse(force, el.body.position);
    }
});