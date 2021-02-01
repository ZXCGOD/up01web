function router(state) {
console.log(document.location.hash);
test();
}

window.addEventListener('popstate', router);
window.addEventListener('load', router);