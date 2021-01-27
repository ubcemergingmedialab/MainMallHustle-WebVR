const startTime = Date.now()

console.log('starting timing')
document.querySelectorAll("a-asset-item").forEach((element) => {
    element.addEventListener('model-loaded', () => {
        const name = element.getAttribute("id")
        const now = Date.now();
        var dt = now - startTime;
        console.log(name + ":" + dt);
    })
})
    // console log asset loading tim
