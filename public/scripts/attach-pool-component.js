const AttachComponents = (function () {
    function init() {
        var scene = document.querySelector('a-scene');

        if (scene.hasLoaded) {
            run();
        } else {
            scene.addEventListener('loaded', run);
        }
    }

    function run() {
        var entity = scene.querySelector('a-entity');
        entity.setAttribute('student-pool', '');
    }
    return {
        init
    }
})()

document.addEventListener('DOMContentLoaded', () => {
    AttachComponents.init()
})