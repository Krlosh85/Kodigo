//Constants used to call the elemtns from the document
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let score = 0
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []

//Array used to storage the questions
let questions = [
    {
        question: "What is the origin and purpose of the State?",
        choice1: "The president",
        choice2: "No one",
        choice3: "The national economy",
        choice4: "The person",
        answer: 4,
    },
    {
        question: "Which one is the most important traditional food in El Salvador?",
        choice1: "Pupusas",
        choice2: "Rice and Beans",
        choice3: "Fried Plantain",
        choice4: "Corn Gruel",
        answer: 1,
    },
    {
        question: "What does Cora stands for?",
        choice1: "A dog",
        choice2: "Just money",
        choice3: "A quarter of a dollar",
        choice4: "Nothing, I don't know",
        answer: 3,
    },
    {
        question: "When the civil war ended in El Salvador?",
        choice1: "1993",
        choice2: "1992",
        choice3: "2019",
        choice4: "2000",
        answer: 2,
    },
    {
        question: "Who was Monsenior Romero?",
        choice1: "A priest who talked for the people who could not talk",
        choice2: "A gunman",
        choice3: "The president of El Salvador",
        choice4: "A martyr",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

/*Methods*/ 

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('../html/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

    const questionIndex = Math.floor(Math.random()*availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+number]
    })

    availableQuestions.splice(questionIndex,1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num =>{
    score += num
    scoreText.innerText = score
}

startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

startGame()
