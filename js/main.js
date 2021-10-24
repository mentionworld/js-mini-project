// Age in Days 
function ageinDays() {
    let ageYear = prompt("What year were you  born.....");
    let CurrentYear = new Date();
    let ageinDays = (CurrentYear.getFullYear() - ageYear) * 365;
    let textAnswer = document.createTextNode("You are " + ageinDays + "days");
    let h1 = document.createElement('h1');
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Cat Generator 
function generate() {
    let image = document.createElement('img');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    document.getElementById('flex-cat-geneate').appendChild(image)
}




// Rock Paper Scisoor 
function rpsGame(Choice) {
    let hunamChoice, botChoice;
    hunamChoice = Choice.id;
    botChoice = numberToChoice(randomRpsValue());
    // console.log(botChoice);
    results = decideWinner(hunamChoice, botChoice);
    // console.log(hunamChoice);
    // console.log(results)
    message = finalMessage(results)
    rpsFrontEnd(Choice.id, botChoice, message)
}

function randomRpsValue() {

    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {

    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(Choice, botChoice) {
    let rpsDatabse = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };
    let yourScore = rpsDatabse[Choice][botChoice];
    let computerScore = rpsDatabse[botChoice][Choice];

    return [yourScore, computerScore];
}

function finalMessage(yourScore) {
    // debugger
    let Score = yourScore[0];
    // console.log(Score);
    if (Score === 0) {
        return { 'message': 'You Lost', 'color': 'red' };
    } else if (Score === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won', 'color': 'green' };
    }

}

function rpsFrontEnd(hunamImageChoice, botImgeChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    // remove previous image 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src='" + imageDatabase[hunamImageChoice] + "'height=150 width=150 style='box-shadow: 0 10px 50px rgba(0, 0, 255, 1)'>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImgeChoice] + "'height=150 width=150 style='box-shadow: 0 10px 50px rgba(255, 0, 0, 1)'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + ";font-size:60px;padding:30px;'>" + finalMessage['message'] + "</h1>";
    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);
}

// changing button color 

let All_Button = document.getElementsByTagName('button');
console.log(All_Button);
let Copy_All_Button = [];
for (let i = 0; i < All_Button.length; i++) {
    Copy_All_Button.push(All_Button[i].classList[1]);
}
console.log(Copy_All_Button);

function buttonColorChange(button) {
    if (button.value === 'red') {
        buttonRed();
    } else if (button.value === 'green') {
        buttonGreen();
    } else if (button.value === 'reset') {
        resetColor();
    } else if (button.value === 'random') {
        randomColors();
    }
}

function buttonRed() {
    for (let i = 0; i < All_Button.length; i++) {
        All_Button[i].classList.remove(All_Button[i].classList[1]);
        All_Button[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < All_Button.length; i++) {
        All_Button[i].classList.remove(All_Button[i].classList[1]);
        All_Button[i].classList.add('btn-success');
    }
}

function resetColor() {
    for (let i = 0; i < All_Button.length; i++) {
        All_Button[i].classList.remove(All_Button[i].classList[1]);
        All_Button[i].classList.add(Copy_All_Button[i]);
    }
}

function randomColors() {
    let option = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i = 0; i < All_Button.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        All_Button[i].classList.remove(All_Button[i].classList[1]);
        All_Button[i].classList.add(option[randomNumber]);
    }
}