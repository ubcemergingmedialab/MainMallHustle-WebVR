AFRAME.registerComponent("lazy-loader", {
    init: function () {
        const lazyLoader = {}
        lazyLoader.triggerLoad = function (el) {
            const id = el.getAttribute("id");
            console.log('[LAZY LOADER]loading element with id ' + id);
            if (id.includes("boba")) {
                //load boba model by adding obj-model component
            } else if (id.includes("coffee")) {
                //load coffee model by adding obj-model component 
            }// add if else cases for the other types of model
        }
        const collectibles = document.querySelectorAll(".collectible");
        collectibles.forEach((element) => {
            if (element.components["viewport-observer"]) {
                console.log("INJECTING LOADER")
                element.components["viewport-observer"].InjectLoader(lazyLoader)
            } else {
                console.log("NO OBSERVER DEFINED")
                console.log(element.components)
            }
        })
    },
})
