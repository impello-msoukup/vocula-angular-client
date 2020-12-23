// Transition stopper during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("transitions-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("transitions-stopper");
    }, 400);
});
// Leave the elements by clicking on the body
document.getElementById('content').addEventListener("touchstart", () => {
    document.activeElement.blur();
    document.getElementById('hamburger').checked = false;
});