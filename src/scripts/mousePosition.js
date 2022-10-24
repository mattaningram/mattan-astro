const mousePos = { x : 0, y : 0 };

const saveMousePosition = function(x, y) {
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
}

document.addEventListener('mousemove', e => { saveMousePosition(e.clientX, e.clientY); })