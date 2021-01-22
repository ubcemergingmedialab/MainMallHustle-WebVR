const startTime = Date.now()

document.querySelectorAll("a-asset-item").forEach((element) => {
    // console log asset loading time
    element.addEventListener('loaded', () => {
        const name = element.getAttribute("id")
        const now = Date.now();
        var dt = now - startTime;
        console.log(dt);
    })
})