let otp = [1, 2, 3];

function updateOTP() {
    for(let q = 0; q < 6; q++) {
        if (otp[q] !== undefined) {
            inputs[q].value = otp[q];
        } else {
            inputs[q].value = '';
        }
    }

    if(otp.length < 6) {
        inputs[otp.length].focus();
    } else {
        console.log('PREENCHIDO');
    }
}

function handleInputKey(event) {
    const code = event.code.toLowerCase();
    if(code === 'backspace') {
        otp.pop();
    }

    if(code.indexOf('digit') === 0) {
        let key = parseInt(event.key);
        otp.push(key);
    }

    updateOTP();
}

function handlePaste(event){
    event.preventDefault();

    const pasteContent = event.clipboardData.getData('text').trim();
    for(let i=0;i<pasteContent.length;i++) {
        if(i < 6) {
            const num = parseInt(pasteContent[i]);
            if(num) {
                otp.push(num);
            }
        }
    }

    updateOTP();
}

let inputs = document.querySelectorAll('.otp-area input');
inputs.forEach(input => {
    input.addEventListener('keyup', handleInputKey);
});
input[0].addEventListener('paste', handlePaste);

updateOTP();