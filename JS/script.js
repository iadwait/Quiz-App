const quizData = [
    {
        questions: "What is the Color of Tim Cook's hair",
        a: "White",
        b: "Black",
        c: "Red",
        d: "Brown",
        correct: 'a'
    },
    {
        questions: "What is Nasik Located",
        a: "Pakistan",
        b: "India",
        c: "USA",
        d: "Germany",
        correct: 'b'
    },
    {
        questions: "Which is the Most used Programming language",
        a: "JS",
        b: "Python",
        c: "JAVA",
        d: "Kotlin",
        correct: 'c'
    }

]

const quizContainer = document.getElementById('quiz');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('submit');
const answers = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deSelectOption();
    const currentQuiz = quizData[currentQuestion]
    question.innerHTML = currentQuiz.questions
    a_text.innerHTML = currentQuiz.a
    b_text.innerHTML = currentQuiz.b
    c_text.innerHTML = currentQuiz.c
    d_text.innerHTML = currentQuiz.d
}

function getSelectedOption()
{
    let selectedAnswer = undefined

    answers.forEach((answers) => {
        if (answers.checked) {
            selectedAnswer = answers.id;
            // console.log(answer);
        }
        // console.log(answers.checked);
    });

    return selectedAnswer;
}

function deSelectOption() {
    answers.forEach((answers) => {
        answers.checked = false;
    });
}

btnSubmit.addEventListener('click', () => {
    const answer = getSelectedOption();
    
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;

        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            // alert('Quiz finished');
            quizContainer.innerHTML = `
            <h2>You Answered Correctely ${score}/${quizData.length}.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert('Please Select an Answer!!');
    }
})