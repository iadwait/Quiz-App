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

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('submit');

let currentQuestion = 0

loadQuiz();

function loadQuiz()
{
    const currentQuiz = quizData[currentQuestion]
    question.innerHTML = currentQuiz.questions
    a_text.innerHTML = currentQuiz.a
    b_text.innerHTML = currentQuiz.b
    c_text.innerHTML = currentQuiz.c
    d_text.innerHTML = currentQuiz.d
}

btnSubmit.addEventListener('click', () => {
    currentQuestion++;

    if(currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        alert('Quiz finished');
    }
})