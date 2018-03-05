let textArray = ['Today is a great day.', 'Yesterday was a wonderful day.', 'Tomorrow will be a wonderful day.'];
let mainDisplay = document.querySelector('#main-display');
let startBtn = document.querySelector('#start-btn');
let textRow = document.querySelector('#text-row');
let userArea = document.querySelector('#user-area');
let comp1Area = document.querySelector('#comp1-area');
let comp2Area = document.querySelector('#comp2-area');
let comp3Area = document.querySelector('#comp3-area');
let userBtn = document.querySelector('#user-btn');
let comp1Btn = document.querySelector('#comp1-btn');
let comp2Btn = document.querySelector('#comp2-btn');
let comp3Btn = document.querySelector('#comp3-btn');
let rand;
let win = 0;

startBtn.addEventListener('click', countdown);

function countdown() {
    let s = 5;
    let loop = setInterval(function() {
        s--;
        startBtn.innerHTML = "Start for " + s;
        if (s == 0) {
            clearInterval(loop);
            startBtn.style.display = 'none';
            textRow.style.display = 'block';
            chooseText();
            startTyping();
        }
    }, 1000)
};




function chooseText() {
    rand = Math.floor(Math.random() * textArray.length);
    mainDisplay.innerHTML = textArray[rand];
};


function startTyping() {
    userStart();
    comp1Start();
    comp2Start();
    comp3Start();
}


function userStart() {
    userArea.focus();
    userArea.addEventListener('keyup', function(e) {
        if (e.keyCode == 13) {
            // Znam da je zavrseno sa kucanjem!!!
            let user = this.value.trim();
            let term = textArray[rand];
            if (user == term) {
                win++;
                userBtn.innerHTML = win;
                userBtn.className = "btn btn-success form-control";
            } else {
                userBtn.className = "btn btn-danger form-control";
                userBtn.innerHTML = "Wrog typing";
            }

        }
    })
}

function comp1Start() {
    let text = textArray[rand];
    let splitText = text.split("");
    let loop = setInterval(function() {
        if (splitText.length > 0) {
            comp1Area.value += splitText.shift();
        } else {
            clearInterval(loop);
            win++;
            comp1Btn.innerHTML = win;
            comp1Btn.className = "btn btn-success form-control";
        }
    }, 250)
};


function comp2Start() {
    let text = textArray[rand];
    let splitText = text.split("");
    let loop = setInterval(function() {
        if (splitText.length > 0) {
            comp2Area.value += splitText.shift();
        } else {
            clearInterval(loop);
            win++;
            comp2Btn.innerHTML = win;
            comp2Btn.className = "btn btn-success form-control";
        }
    }, 720)
};

function comp3Start() {
    let text = textArray[rand];
    let splitText = text.split("");
    let loop = setInterval(function() {
        if (splitText.length > 0) {
            comp3Area.value += splitText.shift();
        } else {
            clearInterval(loop);
            win++;
            comp3Btn.innerHTML = win;
            comp3Btn.className = "btn btn-success form-control";
        }
    }, 500)
};