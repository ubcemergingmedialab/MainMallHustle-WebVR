AFRAME.registerComponent('main-mall-manager', {
    schema: {
        // isPlayerReady: {type: 'boolean', default: false},
        isInStartArea: { type: 'boolean', default: true},
        isInGameArea: {type: 'boolean', default: false},
        isInFailArea: {type: 'boolean', default: false},
        isInEndArea: {type: 'boolean', default: false},
    },
    init: function () {
        // var data = this.data;
        // var scene = document.querySelector('a-scene');
        // scene.addEventListener('mousedown', () => {
        //     console.log("I am pressed");
        //     if (data.isInGameArea) {
        //         data.isPlayerReady = true;
        //         console.log("is player ready?" + data.isPlayerReady.toString());
        //     }
        // });
        // THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        //     console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        // };
    },
    teleportToGameArea: function () {
        // disable start button
        document.getElementById('start_scene_button').removeAttribute('class');
        // make cursor not visible
        document.getElementById('cursor').setAttribute('visible', 'false');
        // teleport
        document.getElementById('rig').setAttribute('position', '0 1.6 0');

        //TODO: initialize student-pool component here
        console.log("TELEPORTED TO  GAME AREA")
        var entity = document.getElementById("students");
        entity.setAttribute('student-pool', '');
        
        // toggle isInStartArea
        this.data.isInStartArea = false;
        // toggle isInGameArea 
        this.data.isInGameArea = true;
        // add press trigger when you are ready text
        document.getElementById('timer_text').setAttribute("text", "value: Press trigger when you're ready");
    },
    teleportToFailArea: function () {
        document.getElementById("rig").object3D.position.set(-10, 1.6, -2510);
        this.data.isInGameArea = false;
        this.data.isInFailArea = true;
        document.getElementById("end_scene_button").setAttribute("class", "clickable");
        document.getElementById("cursor").setAttribute("visible", "true");
    },
    teleportToEndArea: function () {
        document.getElementById("rig").object3D.position.set(10, 1.6, -2510);
        this.data.isInGameArea = false;
        this.data.isInEndArea = true;
        document.getElementById("end_scene_button").setAttribute("class", "clickable");
        document.getElementById("cursor").setAttribute("visible", "true");
    },
    teleportToStartArea: function () {
        document.getElementById("rig").object3D.position.set(0, 1.6, 2510);

        if (document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isInFailArea) {
            document.getElementById('fail_scene_button').removeAttribute('class');
            this.data.isInFailArea = false;
        }
        if (document.getElementById('main_mall_manager').getAttribute('main-mall-manager').isInEndArea) {
            document.getElementById('end_scene_button').removeAttribute('class');
            this.data.isInEndArea = false;
        }

        this.data.isInStartArea = true;
        document.getElementById('start_scene_button').setAttribute('class', 'clickable');
    }
});