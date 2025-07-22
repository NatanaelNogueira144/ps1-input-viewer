var gamepad = null;

const mappedButtons = {
    0: document.getElementById('triangle'),
    1: document.getElementById('circle'),
    2: document.getElementById('x'),
    3: document.getElementById('square'),
    4: document.getElementById('l2'),
    5: document.getElementById('r2'),
    6: document.getElementById('l1'),
    7: document.getElementById('r1'),
    8: document.getElementById('select'),
    9: document.getElementById('start'),
    10: document.getElementById('left-stick'),
    11: document.getElementById('right-stick')
};

const mappedAxes = {
    "00": document.getElementById('left'),
    "01": document.getElementById('right'),
    "10": document.getElementById('up'),
    "11": document.getElementById('down')
};

setInterval(() => {
    if(navigator.getGamepads()) gamepad = navigator.getGamepads()[1];

    if(gamepad) {
        gamepad.buttons.forEach((button, index) => {
            button.pressed ? mappedButtons[index].classList.add('active-input') : mappedButtons[index].classList.remove('active-input');
        });
    
        gamepad.axes[0] == 1 ? mappedAxes["01"].classList.add('active-input') : mappedAxes["01"].classList.remove('active-input');
        gamepad.axes[0] == -1 ? mappedAxes["00"].classList.add('active-input') : mappedAxes["00"].classList.remove('active-input');
        gamepad.axes[1] == 1 ? mappedAxes["11"].classList.add('active-input') : mappedAxes["11"].classList.remove('active-input');
        gamepad.axes[1] == -1 ? mappedAxes["10"].classList.add('active-input') : mappedAxes["10"].classList.remove('active-input');
    }
}, 35);