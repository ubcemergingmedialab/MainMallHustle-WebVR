const startTime = Date.now()
THREE.DefaultLoadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
    const now = Date.now()
    var dt = now - startTime;
    console.log("loading file" + url + " " + itemsLoaded + " of " + itemsTotal + 'time(ms): ' + dt);
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('starting timing')
    const assets = document.querySelectorAll("a-asset-item")
    assets.forEach((element) => {
        element.addEventListener('loaded', () => {
            const name = element.getAttribute("id")
            const now = Date.now();
            var dt = now - startTime;
            console.log(name + ":" + dt);
        })
    })
    if(console.log(assets));
})


    // console log asset loading tim
