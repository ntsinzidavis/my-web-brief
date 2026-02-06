// ===== JAVASCRIPT FOR GARDENING LEARNING PLATFORM =====

// ===== GLOBAL VARIABLES AND DATA =====

// Data for learning resources topics
const topicsData = [
    {
        id: 1,
        title: "Soil Preparation",
        description: "Learn how to prepare and enrich your soil for optimal plant growth.",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Gardener working with soil",
        detailedContent: `<h2>Soil Preparation</h2>
        <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gardener preparing soil">
        <p>Proper soil preparation is the foundation of a successful garden. The right soil conditions allow plant roots to grow deeply and access nutrients effectively.</p>
        <h3>Key Steps for Soil Preparation:</h3>
        <ul>
            <li><strong>Test Your Soil:</strong> Determine pH level and nutrient content. Most plants prefer slightly acidic soil (pH 6.0-7.0).</li>
            <li><strong>Clear the Area:</strong> Remove weeds, rocks, and debris from the planting area.</li>
            <li><strong>Loosen the Soil:</strong> Use a garden fork or tiller to break up compacted soil to a depth of 8-12 inches.</li>
            <li><strong>Add Organic Matter:</strong> Mix in 2-4 inches of compost, well-rotted manure, or leaf mold to improve soil structure and fertility.</li>
            <li><strong>Level and Smooth:</strong> Rake the soil surface to create an even planting bed.</li>
        </ul>
        <p>Remember that different plants have different soil requirements, so research your specific plants' needs before planting.</p>`
    },
    {
        id: 2,
        title: "Composting Basics",
        description: "Turn kitchen scraps and yard waste into nutrient-rich compost for your garden.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Compost bin with organic waste",
        detailedContent: `<h2>Composting Basics</h2>
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Compost bin with organic materials">
        <p>Composting is nature's way of recycling organic materials into rich soil amendment. It reduces waste and creates free fertilizer for your garden.</p>
        <h3>What to Compost:</h3>
        <ul>
            <li><strong>Greens (Nitrogen-rich):</strong> Vegetable scraps, fruit peels, coffee grounds, fresh grass clippings</li>
            <li><strong>Browns (Carbon-rich):</strong> Dry leaves, straw, wood chips, shredded newspaper, cardboard</li>
        </ul>
        <h3>What to Avoid:</h3>
        <ul>
            <li>Meat, dairy, or oily foods (attract pests)</li>
            <li>Diseased plants or weeds with seeds</li>
            <li>Pet waste</li>
        </ul>
        <h3>Composting Methods:</h3>
        <ol>
            <li><strong>Bin/Pile Method:</strong> Layer greens and browns in a 1:3 ratio, keep moist, and turn regularly.</li>
            <li><strong>Tumbler Method:</strong> Faster composting in an enclosed tumbler that's easy to turn.</li>
            <li><strong>Vermicomposting:</strong> Using worms to break down organic matter, ideal for indoor composting.</li>
        </ol>
        <p>A well-maintained compost pile should not smell bad. If it does, adjust the green/brown ratio or turn it more frequently.</p>`
    },
    {
        id: 3,
        title: "Vegetable Gardening",
        description: "Grow your own fresh vegetables with our step-by-step guide to vegetable gardening.",
        image: "https://images.unsplash.com/photo-1591288497594-42d1f277d3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Vegetable garden with raised beds",
        detailedContent: `<h2>Vegetable Gardening</h2>
        <img src="https://images.unsplash.com/photo-1591288497594-42d1f277d3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lush vegetable garden with raised beds">
        <p>Growing your own vegetables is rewarding and ensures you have fresh, organic produce right at your doorstep.</p>
        <h3>Getting Started:</h3>
        <ul>
            <li><strong>Choose the Right Location:</strong> Most vegetables need 6-8 hours of direct sunlight daily.</li>
            <li><strong>Start Small:</strong> Begin with easy-to-grow vegetables like lettuce, tomatoes, radishes, and zucchini.</li>
            <li><strong>Consider Your Space:</strong> Use containers, raised beds, or traditional in-ground planting based on available space.</li>
            <li><strong>Know Your Growing Season:</strong> Plant cool-season crops (lettuce, peas) in spring/fall and warm-season crops (tomatoes, peppers) after last frost.</li>
        </ul>
        <h3>Essential Tips:</h3>
        <ol>
            <li><strong>Water Consistently:</strong> Vegetables need regular watering, especially during fruit development.</li>
            <li><strong>Fertilize Appropriately:</strong> Use balanced organic fertilizer or compost tea every 3-4 weeks.</li>
            <li><strong>Practice Crop Rotation:</strong> Don't plant the same vegetable family in the same spot year after year.</li>
            <li><strong>Harvest Regularly:</strong> Most vegetables taste best when harvested young and frequently.</li>
        </ol>
        <p>Remember that gardening is a learning process. Don't be discouraged by failures—each season brings new opportunities to grow.</p>`
    },
    {
        id: 4,
        title: "Pruning Techniques",
        description: "Learn when and how to prune different plants for healthier growth and better yields.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Gardener pruning a rose bush",
        detailedContent: `<h2>Pruning Techniques</h2>
        <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gardener carefully pruning a rose bush">
        <p>Pruning is the selective removal of plant parts to improve plant health, control growth, and enhance flowering or fruiting.</p>
        <h3>When to Prune:</h3>
        <ul>
            <li><strong>Spring-flowering plants:</strong> Prune immediately after flowering (lilacs, forsythia)</li>
            <li><strong>Summer-flowering plants:</strong> Prune in late winter or early spring (butterfly bush, hydrangea)</li>
            <li><strong>Fruit trees:</strong> Prune during dormancy (late winter)</li>
            <li><strong>Evergreens:</strong> Prune in late spring or early summer</li>
        </ul>
        <h3>Basic Pruning Cuts:</h3>
        <ol>
            <li><strong>Thinning Cut:</strong> Removing an entire branch back to its point of origin. This opens up the plant to more light and air circulation.</li>
            <li><strong>Heading Cut:</strong> Cutting back a branch to a bud. This encourages branching and denser growth.</li>
            <li><strong>Pinching:</strong> Using fingers to remove the tips of soft growth on herbaceous plants to encourage bushiness.</li>
        </ol>
        <h3>Pruning Do's and Don'ts:</h3>
        <ul>
            <li>DO use sharp, clean tools to make smooth cuts</li>
            <li>DO prune dead, damaged, or diseased branches anytime</li>
            <li>DON'T remove more than 1/3 of a plant's growth in one season</li>
            <li>DON'T leave stubs; cut back to a bud or branch collar</li>
        </ul>
        <p>Proper pruning can extend the life of your plants and improve their appearance and productivity.</p>`
    },
    {
        id: 5,
        title: "Organic Pest Control",
        description: "Natural methods to protect your plants from pests without harmful chemicals.",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Ladybug on a plant leaf",
        detailedContent: `<h2>Organic Pest Control</h2>
        <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ladybug on a green leaf, a natural pest predator">
        <p>Organic pest control focuses on prevention, natural predators, and environmentally friendly treatments to manage garden pests.</p>
        <h3>Prevention Strategies:</h3>
        <ul>
            <li><strong>Healthy Soil:</strong> Healthy plants grown in good soil are more resistant to pests.</li>
            <li><strong>Crop Rotation:</strong> Prevents pest populations from building up in the soil.</li>
            <li><strong>Companion Planting:</strong> Some plants repel pests when grown together (marigolds with tomatoes, basil with peppers).</li>
            <li><strong>Proper Spacing:</strong> Good air circulation reduces fungal diseases.</li>
        </ul>
        <h3>Natural Pest Control Methods:</h3>
        <ol>
            <li><strong>Hand Picking:</strong> Remove larger pests like caterpillars and beetles by hand.</li>
            <li><strong>Beneficial Insects:</strong> Encourage ladybugs, lacewings, and praying mantises that eat aphids and other pests.</li>
            <li><strong>Barriers:</strong> Use row covers, netting, or copper tape to physically block pests.</li>
            <li><strong>Natural Sprays:</strong> Neem oil, insecticidal soap, and garlic/chili sprays can deter pests.</li>
        </ol>
        <h3>Common Garden Pests and Solutions:</h3>
        <ul>
            <li><strong>Aphids:</strong> Blast with water spray, introduce ladybugs, or use insecticidal soap</li>
            <li><strong>Slugs/Snails:</strong> Beer traps, diatomaceous earth, or copper barriers</li>
            <li><strong>Cabbage Worms:</strong> Row covers, hand picking, or Bt (Bacillus thuringiensis)</li>
            <li><strong>Tomato Hornworms:</strong> Hand picking or introducing parasitic wasps</li>
        </ul>
        <p>Remember that a few pests won't destroy your garden. Tolerate minor damage and focus on maintaining a balanced ecosystem.</p>`
    },
    {
        id: 6,
        title: "Water Conservation",
        description: "Smart watering techniques to conserve water while keeping your garden healthy.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Drip irrigation system in a garden",
        detailedContent: `<h2>Water Conservation in the Garden</h2>
        <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Drip irrigation system watering plants efficiently">
        <p>Water conservation is essential for sustainable gardening, especially in areas with water restrictions or drought conditions.</p>
        <h3>Efficient Watering Techniques:</h3>
        <ul>
            <li><strong>Water Deeply and Infrequently:</strong> Encourages deep root growth, making plants more drought-tolerant.</li>
            <li><strong>Water in the Morning:</strong> Reduces evaporation and allows foliage to dry, preventing diseases.</li>
            <li><strong>Use Drip Irrigation:</strong> Delivers water directly to roots with minimal evaporation or runoff.</li>
            <li><strong>Install a Rain Barrel:</strong> Collect rainwater for garden use.</li>
            <li><strong>Use Soaker Hoses:</strong> Place under mulch to deliver water slowly to roots.</li>
        </ul>
        <h3>Garden Design for Water Conservation:</h3>
        <ol>
            <li><strong>Group Plants by Water Needs:</strong> Plant thirsty plants together and drought-tolerant plants in separate areas.</li>
            <li><strong>Choose Native Plants:</strong> Native plants are adapted to local rainfall patterns.</li>
            <li><strong>Add Organic Matter:</strong> Compost improves soil's water-holding capacity.</li>
            <li><strong>Use Mulch:</strong> 2-4 inches of mulch reduces evaporation, keeps soil cooler, and suppresses weeds.</li>
        </ol>
        <h3>Signs of Proper Watering:</h3>
        <ul>
            <li>Soil is moist 4-6 inches below surface (check with finger or trowel)</li>
            <li>Plants have vibrant color and steady growth</li>
            <li>No signs of wilting during the hottest part of the day</li>
        </ul>
        <p>By implementing water-wise gardening practices, you can maintain a beautiful garden while conserving this precious resource.</p>`
    }
];

// Quiz questions data
const quizData = {
    quiz1: {
        title: "Plant Basics",
        questions: [
            {
                question: "What is the primary function of a plant's roots?",
                options: [
                    "Photosynthesis",
                    "Absorbing water and nutrients",
                    "Producing flowers",
                    "Supporting leaves"
                ],
                correct: 1,
                explanation: "Roots primarily absorb water and nutrients from the soil and anchor the plant."
            },
            {
                question: "Which part of the plant is responsible for photosynthesis?",
                options: [
                    "Roots",
                    "Stem",
                    "Leaves",
                    "Flowers"
                ],
                correct: 2,
                explanation: "Leaves contain chlorophyll and are the main site of photosynthesis in most plants."
            },
            {
                question: "What does chlorophyll do?",
                options: [
                    "Absorbs water from soil",
                    "Captures sunlight energy",
                    "Transports nutrients",
                    "Produces flowers"
                ],
                correct: 1,
                explanation: "Chlorophyll is the green pigment that captures sunlight energy for photosynthesis."
            },
            {
                question: "What is the process by which plants lose water vapor through their leaves?",
                options: [
                    "Photosynthesis",
                    "Transpiration",
                    "Respiration",
                    "Germination"
                ],
                correct: 1,
                explanation: "Transpiration is the process where plants release water vapor through small openings called stomata."
            },
            {
                question: "Which of these is NOT a essential nutrient for plant growth?",
                options: [
                    "Nitrogen",
                    "Phosphorus",
                    "Potassium",
                    "Chlorine"
                ],
                correct: 3,
                explanation: "While chlorine is used by plants in small amounts, nitrogen, phosphorus, and potassium are the three primary macronutrients essential for plant growth."
            }
        ]
    },
    quiz2: {
        title: "Watering Techniques",
        questions: [
            {
                question: "What is the best time of day to water your garden?",
                options: [
                    "Midday when it's hottest",
                    "Early morning",
                    "Late evening",
                    "Anytime is fine"
                ],
                correct: 1,
                explanation: "Early morning watering allows plants to absorb moisture before the heat of the day and reduces evaporation."
            },
            {
                question: "How can you check if a plant needs water?",
                options: [
                    "Look for wilting leaves",
                    "Check soil moisture 1-2 inches deep",
                    "Both of the above",
                    "Neither of the above"
                ],
                correct: 2,
                explanation: "Both wilting leaves and checking soil moisture are reliable methods to determine if a plant needs water."
            },
            {
                question: "Which watering method is most efficient for water conservation?",
                options: [
                    "Overhead sprinklers",
                    "Hand watering with a hose",
                    "Drip irrigation",
                    "All are equally efficient"
                ],
                correct: 2,
                explanation: "Drip irrigation delivers water directly to plant roots with minimal evaporation or runoff."
            },
            {
                question: "How often should most established garden plants be watered?",
                options: [
                    "Daily",
                    "Every 2-3 days",
                    "Once a week with deep watering",
                    "Only when it rains"
                ],
                correct: 2,
                explanation: "Most established plants benefit from deep watering once a week rather than frequent shallow watering."
            }
        ]
    },
    quiz3: {
        title: "Pest Management",
        questions: [
            {
                question: "Which of these is a natural pest deterrent?",
                options: [
                    "Marigolds",
                    "Roses",
                    "Tulips",
                    "Daffodils"
                ],
                correct: 0,
                explanation: "Marigolds release compounds that deter many common garden pests like nematodes and aphids."
            },
            {
                question: "What is a good organic solution for controlling aphids?",
                options: [
                    "Insecticidal soap spray",
                    "Chemical pesticides",
                    "Vinegar solution",
                    "Bleach mixture"
                ],
                correct: 0,
                explanation: "Insecticidal soap is an effective organic treatment for aphids that doesn't harm beneficial insects when used properly."
            },
            {
                question: "Which beneficial insect helps control aphid populations?",
                options: [
                    "Ladybugs",
                    "Japanese beetles",
                    "Cabbage moths",
                    "Spider mites"
                ],
                correct: 0,
                explanation: "Ladybugs are natural predators of aphids and can consume up to 50 aphids per day."
            },
            {
                question: "What is companion planting?",
                options: [
                    "Planting flowers next to vegetables",
                    "Growing different plants together to benefit each other",
                    "Planting in pairs",
                    "Growing plants with similar needs together"
                ],
                correct: 1,
                explanation: "Companion planting involves growing different plants together to provide mutual benefits like pest control or improved growth."
            },
            {
                question: "Which of these is NOT an organic pest control method?",
                options: [
                    "Neem oil",
                    "Diatomaceous earth",
                    "Row covers",
                    "Synthetic pesticides"
                ],
                correct: 3,
                explanation: "Synthetic pesticides are not considered organic pest control methods."
            }
        ]
    }
};

// ===== DOM ELEMENTS =====
let mobileToggle, navLinks, topicModal, modalClose, modalContent, topicsContainer, contactForm;

// ===== NAVIGATION FUNCTIONS =====

// Initialize navigation
function initNavigation() {
    mobileToggle = document.getElementById('mobile-toggle');
    navLinks = document.getElementById('nav-links');
    
    if (mobileToggle && navLinks) {
        // Toggle mobile navigation menu
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Update aria-expanded attribute for accessibility
            const isExpanded = navLinks.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                e.target !== mobileToggle) {
                navLinks.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// ===== MODAL FUNCTIONS =====

// Initialize modal functionality
function initModal() {
    topicModal = document.getElementById('topic-modal');
    modalClose = document.getElementById('modal-close');
    modalContent = document.getElementById('modal-content');
    
    if (topicModal && modalClose) {
        // Close modal
        modalClose.addEventListener('click', closeModal);
        
        // Close modal when clicking outside content
        topicModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && topicModal.classList.contains('active')) {
                closeModal();
            }
        });
    }
}

// Open modal with topic details
function openTopicModal(topicId) {
    const topic = topicsData.find(t => t.id === topicId);
    if (!topic) return;
    
    modalContent.innerHTML = topic.detailedContent;
    topicModal.classList.add('active');
    
    // Set focus to the modal for accessibility
    setTimeout(() => {
        if (modalClose) {
            modalClose.focus();
        }
    }, 100);
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    if (topicModal) {
        topicModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== LEARNING RESOURCES FUNCTIONS =====

// Load topics into the resources page
function loadTopics() {
    topicsContainer = document.getElementById('topics-container');
    if (!topicsContainer) return;
    
    topicsContainer.innerHTML = '';
    
    topicsData.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-img">
                <img src="${topic.image}" alt="${topic.alt}" loading="lazy">
            </div>
            <div class="topic-content">
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <button class="btn read-more-btn" data-id="${topic.id}">Read More</button>
            </div>
        `;
        
        topicsContainer.appendChild(topicCard);
    });
    
    // Add event listeners to "Read More" buttons
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const topicId = parseInt(this.getAttribute('data-id'));
            openTopicModal(topicId);
        });
    });
}

// ===== QUIZ FUNCTIONS =====

// Quiz state objects
const quizStates = {
    quiz1: { currentQuestion: 0, score: 0, userAnswers: [] },
    quiz2: { currentQuestion: 0, score: 0, userAnswers: [] },
    quiz3: { currentQuestion: 0, score: 0, userAnswers: [] }
};

// Initialize all quizzes
function initializeQuizzes() {
    initializeQuiz('quiz1', quizData.quiz1);
    initializeQuiz('quiz2', quizData.quiz2);
    initializeQuiz('quiz3', quizData.quiz3);
}

// Initialize a specific quiz
function initializeQuiz(quizId, quiz) {
    const state = quizStates[quizId];
    state.currentQuestion = 0;
    state.score = 0;
    state.userAnswers = new Array(quiz.questions.length).fill(null);
    
    displayQuestion(quizId, quiz);
    updateProgress(quizId, quiz);
    
    // Add event listeners for navigation buttons
    const nextButton = document.getElementById(`next-${quizId.charAt(quizId.length-1)}`);
    const prevButton = document.getElementById(`prev-${quizId.charAt(quizId.length-1)}`);
    const submitButton = document.getElementById(`submit-${quizId.charAt(quizId.length-1)}`);
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (state.currentQuestion < quiz.questions.length - 1) {
                state.currentQuestion++;
                displayQuestion(quizId, quiz);
                updateProgress(quizId, quiz);
            }
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (state.currentQuestion > 0) {
                state.currentQuestion--;
                displayQuestion(quizId, quiz);
                updateProgress(quizId, quiz);
            }
        });
    }
    
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            submitQuiz(quizId, quiz);
        });
    }
}

// Display current question for a quiz
function displayQuestion(quizId, quiz) {
    const state = quizStates[quizId];
    const questionIndex = state.currentQuestion;
    const question = quiz.questions[questionIndex];
    
    // Update question text
    const questionElement = document.getElementById(`question-${quizId.charAt(quizId.length-1)}`);
    if (questionElement) {
        questionElement.textContent = `Question ${questionIndex + 1}: ${question.question}`;
    }
    
    // Update options
    const optionsContainer = document.getElementById(`options-${quizId.charAt(quizId.length-1)}`);
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (state.userAnswers[questionIndex] === index) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', () => {
                selectOption(quizId, quiz, index);
            });
            
            optionsContainer.appendChild(optionElement);
        });
    }
    
    // Update navigation buttons
    const prevButton = document.getElementById(`prev-${quizId.charAt(quizId.length-1)}`);
    const nextButton = document.getElementById(`next-${quizId.charAt(quizId.length-1)}`);
    const submitButton = document.getElementById(`submit-${quizId.charAt(quizId.length-1)}`);
    
    if (prevButton) {
        prevButton.disabled = questionIndex === 0;
    }
    
    if (questionIndex === quiz.questions.length - 1) {
        if (nextButton) nextButton.style.display = 'none';
        if (submitButton) submitButton.style.display = 'inline-block';
    } else {
        if (nextButton) nextButton.style.display = 'inline-block';
        if (submitButton) submitButton.style.display = 'none';
    }
    
    // Clear feedback
    const feedbackElement = document.getElementById(`feedback-${quizId.charAt(quizId.length-1)}`);
    if (feedbackElement) {
        feedbackElement.style.display = 'none';
    }
}

// Handle option selection
function selectOption(quizId, quiz, optionIndex) {
    const state = quizStates[quizId];
    const questionIndex = state.currentQuestion;
    const question = quiz.questions[questionIndex];
    
    // Store user's answer
    state.userAnswers[questionIndex] = optionIndex;
    
    // Update UI to show selected option
    const options = document.querySelectorAll(`#options-${quizId.charAt(quizId.length-1)} .option`);
    options.forEach(option => {
        option.classList.remove('selected');
    });
    options[optionIndex].classList.add('selected');
    
    // Show immediate feedback
    const feedbackElement = document.getElementById(`feedback-${quizId.charAt(quizId.length-1)}`);
    
    if (feedbackElement) {
        if (optionIndex === question.correct) {
            feedbackElement.textContent = `Correct! ${question.explanation}`;
            feedbackElement.className = 'quiz-feedback correct';
        } else {
            feedbackElement.textContent = `Incorrect. ${question.explanation}`;
            feedbackElement.className = 'quiz-feedback incorrect';
        }
        
        feedbackElement.style.display = 'block';
    }
}

// Update progress bar and text
function updateProgress(quizId, quiz) {
    const state = quizStates[quizId];
    const progressPercent = ((state.currentQuestion + 1) / quiz.questions.length) * 100;
    
    const progressFill = document.getElementById(`progress-${quizId.charAt(quizId.length-1)}`);
    const progressText = document.getElementById(`progress-text-${quizId.charAt(quizId.length-1)}`);
    const scoreDisplay = document.getElementById(`score-${quizId.charAt(quizId.length-1)}`);
    
    if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${state.currentQuestion + 1}/${quiz.questions.length}`;
    }
    
    if (scoreDisplay) {
        scoreDisplay.textContent = state.score;
    }
}

// Submit quiz and calculate final score
function submitQuiz(quizId, quiz) {
    const state = quizStates[quizId];
    
    // Calculate score
    state.score = 0;
    quiz.questions.forEach((question, index) => {
        if (state.userAnswers[index] === question.correct) {
            state.score++;
        }
    });
    
    // Update score display
    const scoreDisplay = document.getElementById(`score-${quizId.charAt(quizId.length-1)}`);
    if (scoreDisplay) {
        scoreDisplay.textContent = state.score;
    }
    
    // Show completion message
    const feedbackElement = document.getElementById(`feedback-${quizId.charAt(quizId.length-1)}`);
    if (feedbackElement) {
        const percentage = Math.round((state.score / quiz.questions.length) * 100);
        
        let message;
        if (percentage >= 80) {
            message = `Excellent! You scored ${state.score}/${quiz.questions.length} (${percentage}%). You have great gardening knowledge!`;
        } else if (percentage >= 60) {
            message = `Good job! You scored ${state.score}/${quiz.questions.length} (${percentage}%). You have a solid understanding of gardening basics.`;
        } else {
            message = `You scored ${state.score}/${quiz.questions.length} (${percentage}%). Review the learning resources and try again!`;
        }
        
        feedbackElement.textContent = `Quiz completed! ${message}`;
        feedbackElement.className = 'quiz-feedback correct';
        feedbackElement.style.display = 'block';
    }
}

// ===== CONTACT FORM FUNCTIONS =====

// Initialize contact form
function initContactForm() {
    contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // In a real application, you would send the form data to a server here
                // For this demo, we'll just show a success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
}

// Form validation
function validateForm() {
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name')?.value.trim();
    const nameError = document.getElementById('name-error');
    if (nameError && (!name || name === '')) {
        nameError.style.display = 'block';
        isValid = false;
    } else if (nameError) {
        nameError.style.display = 'none';
    }
    
    // Email validation
    const email = document.getElementById('email')?.value.trim();
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailError && (!email || email === '' || !emailPattern.test(email))) {
        emailError.style.display = 'block';
        isValid = false;
    } else if (emailError) {
        emailError.style.display = 'none';
    }
    
    // Subject validation
    const subject = document.getElementById('subject')?.value.trim();
    const subjectError = document.getElementById('subject-error');
    if (subjectError && (!subject || subject === '')) {
        subjectError.style.display = 'block';
        isValid = false;
    } else if (subjectError) {
        subjectError.style.display = 'none';
    }
    
    // Message validation
    const message = document.getElementById('message')?.value.trim();
    const messageError = document.getElementById('message-error');
    if (messageError && (!message || message === '')) {
        messageError.style.display = 'block';
        isValid = false;
    } else if (messageError) {
        messageError.style.display = 'none';
    }
    
    return isValid;
}

// ===== PAGE INITIALIZATION =====

// Initialize page-specific functionality
function initPage() {
    // Initialize navigation on all pages
    initNavigation();
    
    // Initialize modal on all pages (it exists in all HTML files)
    initModal();
    
    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'resources.html' || currentPage === '') {
        // Initialize learning resources page
        if (document.getElementById('topics-container')) {
            loadTopics();
        }
    } else if (currentPage === 'quizzes.html') {
        // Initialize quizzes page
        if (document.getElementById('quiz-1')) {
            initializeQuizzes();
        }
    } else if (currentPage === 'contact.html') {
        // Initialize contact page
        initContactForm();
    }
    
    // Add hover animations to buttons on all pages
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add smooth scrolling for anchor links on all pages
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links, not page navigation
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== PERFORMANCE OPTIMIZATION =====

// Lazy load images that are not in the viewport
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== INITIALIZE WHEN DOM IS LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initPage();
    
    // Initialize lazy loading
    lazyLoadImages();
});