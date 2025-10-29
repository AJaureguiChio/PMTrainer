let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

// Calcular puntos por pregunta para que el total sea 100
const POINTS_PER_QUESTION = questions.length > 0 ? 100 / questions.length : 0;

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const incorrectList = document.getElementById("incorrect-answers");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// ======== FUNCIONES ========

// Actualizar barra de progreso solo durante las preguntas
function updateProgress() {
    if (currentQuestion < questions.length) {
        const total = questions.length;
        const current = currentQuestion + 1;
        const percent = (current / total) * 100;

        progressBar.style.width = `${percent}%`;
        progressText.textContent = `Pregunta ${current} de ${total}`;
    }
}

// Mostrar pregunta actual
function showQuestion() {
    nextBtn.disabled = true;
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });

    updateProgress(); // actualizar barra
}

// Seleccionar respuesta
function selectAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add("correct");
        if (i === selectedIndex && i !== q.answer) btn.classList.add("incorrect");
    });

    const feedback = document.createElement("div");
    feedback.classList.add("feedback");
    feedback.textContent = q.feedback;
    optionsContainer.appendChild(feedback);

    if (selectedIndex === q.answer) score += POINTS_PER_QUESTION;
    else incorrectAnswers.push({
        question: q.question,
        correct: q.options[q.answer],
        yourAnswer: q.options[selectedIndex]
    });

    nextBtn.disabled = false;
}

// Siguiente pregunta
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else showResult();
});

// Mostrar resultado final
function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    // Mostrar puntuación con máximo basado en la cantidad de preguntas
    const maxScore = questions.length * POINTS_PER_QUESTION;
    // Redondear a 2 decimales si es necesario
    const round = num => Math.round(num * 100) / 100;
    scoreText.textContent = `Tu puntaje final: ${round(score)} / ${round(maxScore)}`;

    // Llenar barra al 100% al finalizar
    progressBar.style.width = `100%`;
    progressText.textContent = "Examen completado";

    if (incorrectAnswers.length > 0) {
        incorrectList.innerHTML = "<h3>Preguntas incorrectas:</h3>";
        incorrectAnswers.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("feedback");
            div.innerHTML = `<b>${item.question}</b><br>
        Tu respuesta: ${item.yourAnswer}<br>
        Correcta: ${item.correct}`;
            incorrectList.appendChild(div);
        });
    } else {
        incorrectList.innerHTML = "<p>¡Felicidades! Todas las respuestas son correctas 🎉</p>";
    }
}

// Reiniciar examen
document.getElementById("restart-btn").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
});

showQuestion();