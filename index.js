const nulll = document.querySelector(".null")
const alternative = document.querySelector(".alternative")

const questions = [
    {
        question: " There is a significant difference in blood pressure between patients who take medication X and those who do not.",
        answer: "alternative"
    },
    {
        question: "There is no significant difference in blood pressure between patients who take medication X and those who do not.",
        answer: "null"
    },
    {
        question: "There is a positive association between hours of sleep and performance on cognitive tasks.",
        answer: "alternative"
    },
    {
        question: "Teaching method A leads to higher test scores among students compared to teaching method B.",
        answer: "alternative"
    },
    {
        question: "There is no association between hours of sleep and performance on cognitive tasks.",
        answer: "null"
    },
    {
        question: "There is no significant impact of teaching method A on students' test scores compared to teaching method B.",
        answer: "null"
    },
    {
        question: "Consumer spending increases significantly after a change in taxation policy.",
        answer: "alternative"
    },
    {
        question: "There is no difference in consumer spending before and after a change in taxation",
        answer: "null"
    },
    {
        question: "Higher levels of pollution are correlated with decreased health of aquatic ecosystems.",
        answer: "alternative"
    },
    {
        question: "There is no relationship between the level of pollution and the health of aquatic ecosystems.",
        answer: "null"
    },
    {
        question: "There is a significant difference in political attitudes between individuals from urban and rural areas.",
        answer: "alternative"
    },
    {
        question: "There is no difference in political attitudes between individuals from urban and rural areas.",
        answer: "null"
    },
    {
        question: "Temperature has a significant effect on the rate of expansion of a certain metal alloy.",
        answer: "alternative"
    },
    {
        question: "Consumers exposed to advertisement A show a greater preference for the brand compared to those exposed to advertisement B.",
        answer: "alternative"
    },
    {
        question: "There is no effect of temperature on the rate of expansion of a certain metal alloy.",
        answer: "null"
    },
    {
        question: "There is no difference in brand preference between consumers exposed to advertisement A and those exposed to advertisement B.",
        answer: "null"
    },
    {
        question: "Offenders who receive counseling have lower recidivism rates compared to those who do not.",
        answer: "alternative"
    },
    {
        question: "There is no difference in recidivism rates between offenders who receive counseling and those who do not.",
        answer: "null"
    },
    {
        question: "One type of steel exhibits significantly higher tensile strength compared to another type under identical conditions.",
        answer: "alternative"
    },
    {
        question: "There is no difference in the tensile strength of two different types of steel under identical conditions.",
        answer: "null"
    },
]

const randomNumber = () => {
    const generatedNumber = Math.floor(Math.random() * questions.length);
    return generatedNumber;
}

let number = randomNumber();
let question = questions[number].question;
let answer = questions[number].answer;
document.querySelector(".questions").innerHTML = question;

const nullOrAlternativeFuction = (answer, checkAnswer) => {
    if (answer === checkAnswer) {
        document.querySelector(".questions").innerHTML = "CORRECT";
    } else {
        document.querySelector(".questions").innerHTML = "WRONG";
    } 

    setTimeout(function() {
        location.reload();
    }, 2000)    
}

nulll.addEventListener("click", () => { 
    nullOrAlternativeFuction("null", answer)
})

alternative.addEventListener("click", () => { 
    nullOrAlternativeFuction("alternative", answer)
})