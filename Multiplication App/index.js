const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 10);

const questionE1 = document.getElementById("question");

const inputEl = document.getElementById("input")

const formE1 = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse (localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

formE1.addEventListener("submit", ()=>{
const userAns = +inputEl.value
if (userAns === correctAns){score ++;
    updateLocalStorage();
} else {
    score--
    updateLocalStorage();
}
})

function updateLocalStorage (){
    localStorage.setItem ("score", JSON.stringify(score))
}

// Set a timer for 1 minute (60,000 milliseconds)
setTimeout(() => {
    // Reset the score to 0 when the timer expires
    score = 0;
    updateLocalStorage();
    scoreEl.innerText = `Score: ${score}`;
}, 60000);



