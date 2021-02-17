AFRAME.registerComponent("lazy-loader", {
    init: function () {
  
        const lazyLoader = {}
        lazyLoader.triggerLoad = function (el) {
            const id = el.getAttribute("id");
            console.log('[LAZY LOADER]loading element with id ' + id);
            if (id.includes("boba")) {
                //load boba model by adding obj-model component
                el.setAttribute("obj-model", "obj: boba; mtl: boba-mtl");
            } else if (id.includes("coffee")) {
                //load coffee model by adding obj-model component 
                el.setAttribute("obj-model", "obj: coffee; mtl: coffee-mtl");
            } else if (id.includes("timbit")) {          
                el.setAttribute("obj-model", "obj: donut; mtl: donut-mtl");     
            }
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
