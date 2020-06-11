// Global Variable Assignment
var counter = 60;
var currentQuestion = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var intervalId;
var guess;
var questions = [
    {
        title: "How many languages are spoken in NYC?",
        answers: ["800", "127", "232"],
        correctAnswer: 0,
    },
    {
        title: "What is the name of the group of people indigenous to NYC?",
        answers: ["Algonquin", "Apache", "Lenape"],
        correctAnswer: 2,
    },
    {
        title: "Who was known as the Father of Harlem?",
        answers: ["WEB DuBois", "Philip Payton, Jr.", "Malcolm X"],
        correctAnswer: 1,
    },
    {
        title: "The first African American to play on the MLB was on the Brooklyn Dodgers, what was his name?",
        answers: ["Willie Mays", "Barry Bonds", "Jackie Robinson"],
        correctAnswer: 2,
    },
];

$(document).ready(function () {

    // Hide Final Score & High Scores sections when webpage is first loaded.
    $("#finalscore").hide();
    $("#highscore").hide();

    // Timer Function, which kicks off when GO! is clicked and counts down from 60 (seconds).
    $("#start").click(function () {
        var interval = setInterval(function () {
            counter--;
            if (-1 >= counter) {
                console.log("Timer 0 --> " + counter);
                showResults(); 
                $("#score").text("0");
                return clearInterval(interval);
            } else {
                $('#time').text(counter);
                console.log("Timer --> " + counter);
            }
        }, 1000);
        $("#start").hide();
        $("#jumbotron").hide();
        $("#quiz").show();
        showQuestion();
    });

    $(".answer").on("click", checkAnswer);

    $("#restart").on("click", restartGame);

    // Function to display questions and answers.
    function showQuestion() {
        $("#quiz h2").text(questions[currentQuestion].title);

        $("#quiz .answerA").text(questions[currentQuestion].answers[0]);
        $("#quiz .answerB").text(questions[currentQuestion].answers[1]);
        $("#quiz .answerC").text(questions[currentQuestion].answers[2]);
        $("#box").show();
        $("#answer-status").hide();
        timer = 60;
        countDown = setInterval(counter, 1000);
        console.log(questions[currentQuestion].answers);
    }

    // Function to check to see if user's input is correct or incorrect.
    function checkAnswer() {

        stopCounter();
        console.log("clicked")
        guess = parseInt($(this).attr("value"))
        let correct = questions[currentQuestion].correctAnswer;

        if (guess === correct) {
            console.log(guess);
        } else {
            // Counter drops 5 seconds for wrong answer
            counter = counter -= 5;
        }

        currentQuestion++;

        if (currentQuestion === questions.length) {
            showResults();

        } else {
            $("#box").hide();
            setTimeout(showQuestion);
        }
    }

    function stopCounter() {
        clearInterval(countDown);
    }

    // Function to show Score at game's end & allow User to enter their Name.
    function showResults() {
        $("#quiz").hide();
        $("#timer").hide();
        $("#score").append(counter);
        $("#finalscore").show();
        $("#user-initials").show();
        $("#answer-status").hide();
    }

})