// Quiz state variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalAnswered = 0;
let selectedFilter = 'all';
let filteredQuestions = [];
let userAnswers = [];
let showingExplanation = false;
let quizStarted = false;
let currentVersion = 'comprehensive';
let quizVersions = {};

// DOM elements
const questionCard = document.getElementById('questionCard');
const questionNumber = document.getElementById('questionNumber');
const domainTag = document.getElementById('domainTag');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const cardActions = document.getElementById('cardActions');
const explanation = document.getElementById('explanation');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const correctAnswersSpan = document.getElementById('correctAnswers');
const accuracySpan = document.getElementById('accuracy');
const progressFill = document.getElementById('progressFill');

// Create different quiz versions with proper shuffling algorithms
const createQuizVersions = (questionsArray) => {
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const versions = {
        comprehensive: [...questionsArray],
        v1: shuffleArray(questionsArray),
        v2: [...questionsArray].filter((_, i) => i % 2 === 0).concat([...questionsArray].filter((_, i) => i % 2 === 1)),
        v3: [...questionsArray].reverse(),
        v4: [...questionsArray].sort((a, b) => a.domain.localeCompare(b.domain))
    };
    return versions;
};

// Initialize quiz versions (call this after questions array is defined)
const initializeQuizVersions = (questionsArray) => {
    quizVersions = createQuizVersions(questionsArray);
    filteredQuestions = [...questionsArray];
    updateStats();
};

// Main quiz functions
function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalAnswered = 0;
    userAnswers = [];
    showingExplanation = false;
    applyFilter();
    displayQuestion();
    updateStats();
}

function filterDomain(domain, buttonElement) {
    selectedFilter = domain;
    
    // Update active button styling
    document.querySelectorAll('.domain-btn').forEach(btn => btn.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
    
    // Apply filter and restart if quiz is active
    if (quizStarted) {
        applyFilter();
        currentQuestionIndex = 0;
        displayQuestion();
        updateStats();
    } else {
        applyFilter();
        updateStats();
    }
}

function shuffleQuestions() {
    if (filteredQuestions.length === 0) {
        alert('No questions to shuffle. Please start the quiz first.');
        return;
    }

    // Fisher-Yates shuffle algorithm
    const shuffled = [...filteredQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    filteredQuestions = shuffled;
    
    // Reset to beginning if quiz is active
    if (quizStarted) {
        currentQuestionIndex = 0;
        displayQuestion();
        updateStats();
    }
    
    console.log('Questions shuffled successfully!');
}

function changeVersion() {
    const versions = ['comprehensive', 'v1', 'v2', 'v3', 'v4'];
    const versionNames = {
        'comprehensive': 'Comprehensive Set',
        'v1': 'Random Shuffle',
        'v2': 'Alternating Pattern', 
        'v3': 'Reverse Order',
        'v4': 'Domain Sorted'
    };
    
    // Find current version index and move to next
    const currentIndex = versions.indexOf(currentVersion);
    const nextIndex = (currentIndex + 1) % versions.length;
    currentVersion = versions[nextIndex];
    
    // Regenerate quiz versions to ensure fresh shuffling
    if (typeof questions !== 'undefined') {
        quizVersions = createQuizVersions(questions);
    }
    
    // Update header to show current version
    const versionName = versionNames[currentVersion];
    document.querySelector('.header p').textContent = `Advanced practice questions - ${versionName}`;
    
    // Reset quiz with new version
    resetQuiz();
    
    console.log(`Switched to version: ${currentVersion} (${versionName})`);
}

function applyFilter() {
    const baseQuestions = quizVersions[currentVersion] || (typeof questions !== 'undefined' ? questions : []);
    
    if (selectedFilter === 'all') {
        filteredQuestions = [...baseQuestions];
    } else {
        filteredQuestions = baseQuestions.filter(q => q.domain === selectedFilter);
    }
    
    console.log(`Applied filter: ${selectedFilter}, Questions: ${filteredQuestions.length}`);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalAnswered = 0;
    userAnswers = [];
    showingExplanation = false;
    quizStarted = false;
    
    questionText.textContent = "🚀 Click 'Start Quiz' to begin your comprehensive SnowPro Core certification practice!";
    optionsContainer.innerHTML = '';
    cardActions.innerHTML = '';
    explanation.classList.add('hidden');
    
    applyFilter();
    updateStats();
}

function displayQuestion() {
    if (currentQuestionIndex >= filteredQuestions.length) {
        showCompletion();
        return;
    }

    const question = filteredQuestions[currentQuestionIndex];
    showingExplanation = false;
    
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    domainTag.textContent = capitalizeFirst(question.domain);
    domainTag.className = `domain-tag domain-${question.domain}`;
    questionText.textContent = question.question;
    
    // Clear previous content
    optionsContainer.innerHTML = '';
    cardActions.innerHTML = '';
    explanation.classList.add('hidden');
    
    if (question.type === 'multiple') {
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(index);
            optionsContainer.appendChild(optionDiv);
        });
    } else if (question.type === 'true_false') {
        ['True', 'False'].forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(index === 0);
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    // Add action buttons
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.id = 'submitBtn';
    submitBtn.onclick = submitAnswer;
    submitBtn.disabled = true;
    
    cardActions.appendChild(submitBtn);
}

function selectOption(selectedValue) {
    // Remove previous selections
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Mark current selection
    if (typeof selectedValue === 'number') {
        document.querySelectorAll('.option')[selectedValue].classList.add('selected');
    } else {
        // For true/false questions
        const index = selectedValue ? 0 : 1;
        document.querySelectorAll('.option')[index].classList.add('selected');
    }
    
    // Store the answer
    userAnswers[currentQuestionIndex] = selectedValue;
    
    // Enable submit button
    document.getElementById('submitBtn').disabled = false;
}

function submitAnswer() {
    if (showingExplanation) {
        nextQuestion();
        return;
    }
    
    const question = filteredQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const isCorrect = userAnswer === question.correct;
    
    if (isCorrect) {
        correctAnswers++;
    }
    totalAnswered++;
    
    // Show correct/incorrect styling
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (question.type === 'multiple') {
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        } else {
            const isTrue = index === 0;
            if (isTrue === question.correct) {
                opt.classList.add('correct');
            } else if (isTrue === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        }
    });
    
    // Show explanation
    explanation.innerHTML = `
        <h4>Explanation:</h4>
        <p>${question.explanation}</p>
    `;
    explanation.classList.remove('hidden');
    
    // Update button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = 'Next Question';
    submitBtn.className = 'btn btn-success';
    
    showingExplanation = true;
    updateStats();
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
    updateStats();
}

function updateStats() {
    currentQuestionSpan.textContent = Math.min(currentQuestionIndex + 1, filteredQuestions.length);
    totalQuestionsSpan.textContent = filteredQuestions.length;
    correctAnswersSpan.textContent = correctAnswers;
    
    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    accuracySpan.textContent = `${accuracy}%`;
    
    const progress = filteredQuestions.length > 0 ? (currentQuestionIndex / filteredQuestions.length) * 100 : 0;
    progressFill.style.width = `${Math.min(progress, 100)}%`;
}

function showCompletion() {
    const accuracy = Math.round((correctAnswers / totalAnswered) * 100);
    const grade = accuracy >= 80 ? 'Excellent! Ready for certification!' : 
                 accuracy >= 70 ? 'Good Job! Review weak areas!' : 
                 accuracy >= 60 ? 'Keep Studying! Getting there!' : 
                 'Need More Practice! Focus on fundamentals!';
    
    questionCard.innerHTML = `
        <div class="completion-screen">
            <h2>🎉 Quiz Complete!</h2>
            <h3>${grade}</h3>
            <div class="completion-stats">
                <div class="completion-stat">
                    <div class="stat-number">${correctAnswers}/${totalAnswered}</div>
                    <div class="stat-label">Correct Answers</div>
                </div>
                <div class="completion-stat">
                    <div class="stat-number">${accuracy}%</div>
                    <div class="stat-label">Final Score</div>
                </div>
                <div class="completion-stat">
                    <div class="stat-number">${filteredQuestions.length}</div>
                    <div class="stat-label">Total Questions</div>
                </div>
                <div class="completion-stat">
                    <div class="stat-number">${selectedFilter === 'all' ? 'All' : capitalizeFirst(selectedFilter)}</div>
                    <div class="stat-label">Domain(s)</div>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary" onclick="startQuiz()">Retake Quiz</button>
                <button class="btn btn-secondary" onclick="resetQuiz()">Back to Start</button>
                <button class="btn btn-secondary" onclick="changeVersion()">Try Different Version</button>
            </div>
        </div>
    `;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // This function should be called after the questions array is defined
    // initializeQuizVersions(questions);
});