const input = document.querySelector('#input');
const statusSpan = document.querySelector('#status');
const output = document.querySelector('#output');
let GLOBAL_TIMER;

input.addEventListener('keyup', () => {
    setStatus('Typing');
    if (GLOBAL_TIMER !== undefined) {
        clearInterval(GLOBAL_TIMER);
    }
    type();
})

function type() {
    GLOBAL_TIMER = setTimeout(() => {
        output.innerHTML += `<li>Output: ${input.value}</li>`
        input.value = '';
        setStatus('Waiting');
        GLOBAL_TIMER = undefined;
    }, 500);
}

function setStatus(newStatus) {
    statusSpan.innerHTML = newStatus;
}