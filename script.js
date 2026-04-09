// Zentra - Brain Training Games JavaScript

// Game Data Configuration
const gameDatabase = [
    {
        id: 'memory',
        name: 'Memory Match',
        description: 'Test your memory by matching pairs of cards',
        difficulty: 'medium',
        xpReward: 50,
        icon: '🧠',
        levels: {
            easy: { cards: 8, timeLimit: 60 },
            medium: { cards: 12, timeLimit: 45 },
            hard: { cards: 16, timeLimit: 30 }
        }
    },
    {
        id: 'math',
        name: 'Math Challenge',
        description: 'Solve math problems as fast as you can',
        difficulty: 'hard',
        xpReward: 75,
        icon: '🧮',
        levels: {
            easy: { questions: 5, timeLimit: 120, maxNumber: 10 },
            medium: { questions: 10, timeLimit: 60, maxNumber: 100 },
            hard: { questions: 15, timeLimit: 45, maxNumber: 1000 }
        }
    },
    {
        id: 'reaction',
        name: 'Reaction Time',
        description: 'Test your reflexes and improve reaction speed',
        difficulty: 'easy',
        xpReward: 40,
        icon: '⚡',
        levels: {
            easy: { rounds: 10, targetTime: 1000 },
            medium: { rounds: 15, targetTime: 750 },
            hard: { rounds: 20, targetTime: 500 }
        }
    },
    {
        id: 'pattern',
        name: 'Pattern Recognition',
        description: 'Complete visual patterns before time runs out',
        difficulty: 'medium',
        xpReward: 60,
        icon: '🔷',
        levels: {
            easy: { patterns: 5, timeLimit: 60 },
            medium: { patterns: 8, timeLimit: 45 },
            hard: { patterns: 12, timeLimit: 30 }
        }
    },
    {
        id: 'word',
        name: 'Word Puzzle',
        description: 'Find hidden words in letter grids',
        difficulty: 'easy',
        xpReward: 40,
        icon: '📝',
        levels: {
            easy: { words: 3, gridSize: 5 },
            medium: { words: 5, gridSize: 7 },
            hard: { words: 8, gridSize: 10 }
        }
    },
    {
        id: 'color',
        name: 'Color Match',
        description: 'Match color names with their colors',
        difficulty: 'easy',
        xpReward: 35,
        icon: '🎨',
        levels: {
            easy: { items: 8, timeLimit: 30 },
            medium: { items: 12, timeLimit: 20 },
            hard: { items: 16, timeLimit: 10 }
        }
    },
    {
        id: 'sequence',
        name: 'Sequence Memory',
        description: 'Remember and repeat number sequences',
        difficulty: 'hard',
        xpReward: 80,
        icon: '🔢',
        levels: {
            easy: { startLength: 3, maxLength: 7 },
            medium: { startLength: 4, maxLength: 10 },
            hard: { startLength: 5, maxLength: 15 }
        }
    },
    {
        id: 'attention',
        name: 'Attention Test',
        description: 'Improve your focus and selective attention skills',
        difficulty: 'medium',
        xpReward: 65,
        icon: '🎯',
        levels: {
            easy: { objects: 3, timeLimit: 60 },
            medium: { objects: 5, timeLimit: 45 },
            hard: { objects: 7, timeLimit: 30 }
        }
    },
    {
        id: 'logic',
        name: 'Logic Puzzle',
        description: 'Solve logical reasoning puzzles',
        difficulty: 'hard',
        xpReward: 85,
        icon: '🧩',
        levels: {
            easy: { puzzles: 5, timePerPuzzle: 60 },
            medium: { puzzles: 8, timePerPuzzle: 45 },
            hard: { puzzles: 12, timePerPuzzle: 30 }
        }
    },
    {
        id: 'spatial',
        name: 'Spatial Reasoning',
        description: 'Enhance your spatial awareness and visualization skills',
        difficulty: 'medium',
        xpReward: 70,
        icon: '🧊',
        levels: {
            easy: { shapes: 8, timeLimit: 45 },
            medium: { shapes: 12, timeLimit: 30 },
            hard: { shapes: 16, timeLimit: 20 }
        }
    }
];

// Leaderboard Mock Data
const mockLeaderboard = [
    { rank: 1, name: 'ProMind', xp: 15420, games: 234, badges: 18 },
    { rank: 2, name: 'BrainMaster', xp: 14850, games: 212, badges: 16 },
    { rank: 3, name: 'LogicKing', xp: 14320, games: 198, badges: 15 },
    { rank: 4, name: 'MindGamer', xp: 13750, games: 187, badges: 14 },
    { rank: 5, name: 'SharpMind', xp: 13200, games: 176, badges: 12 },
    { rank: 6, name: 'SpeedRacer', xp: 12650, games: 165, badges: 11 },
    { rank: 7, name: 'QuizMaster', xp: 12100, games: 154, badges: 10 },
    { rank: 8, name: 'PuzzlePro', xp: 11550, games: 143, badges: 9 },
    { rank: 9, name: 'ThinkFast', xp: 11000, games: 132, badges: 8 },
    { rank: 10, name: 'MindJammer', xp: 10450, games: 121, badges: 7 }
];

// Achievement/Badge Configuration
const badges = [
    { id: 'first_game', name: 'First Step', emoji: '🎮', description: 'Play your first game' },
    { id: 'streak_5', name: 'On Fire!', emoji: '🔥', description: 'Maintain 5-day streak' },
    { id: 'score_1000', name: 'Millennia', emoji: '💯', description: 'Score 1000 points' },
    { id: 'all_games', name: 'Game Master', emoji: '🏆', description: 'Play all games' },
    { id: 'perfect_game', name: 'Perfection', emoji: '⭐', description: 'Complete game with perfect score' },
    { id: 'speed_demon', name: 'Speed Demon', emoji: '⚡', description: 'Complete game in under 10 seconds' },
    { id: 'accuracy_expert', name: 'Accuracy Expert', emoji: '🎯', description: 'Achieve 95% accuracy' },
    { id: 'morning_person', name: 'Morning Person', emoji: '🌅', description: 'Play game before 9 AM' },
    { id: 'night_owl', name: 'Night Owl', emoji: '🦉', description: 'Play game after 9 PM' },
    { id: 'social_butterfly', name: 'Social Butterfly', emoji: '🦋', description: 'Share score with friends' }
];

// User Data Structure (Local Storage)
class UserDataManager {
    constructor() {
        this.storageKey = 'zentra_user_data';
        this.initializeData();
    }

    initializeData() {
        if (!this.getData()) {
            this.saveData({
                username: 'Player ' + Math.floor(Math.random() * 9000 + 1000),
                level: 1,
                totalXP: 0,
                currentLevelXP: 0,
                lives: 5,
                streak: 0,
                lastPlayDate: null,
                gamesPlayed: 0,
                totalPlaytime: 0,
                bestScores: {},
                gamesData: {},
                badges: [],
                dailyChallengeCompleted: false,
                joinDate: new Date().toISOString()
            });
        }
    }

    getData() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }

    saveData(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    updateXP(amount) {
        const data = this.getData();
        data.currentLevelXP += amount;
        
        // Level up when reaching 500 XP
        if (data.currentLevelXP >= 500) {
            data.level += 1;
            data.currentLevelXP = data.currentLevelXP - 500;
        }
        
        data.totalXP += amount;
        this.saveData(data);
        return { level: data.level, xp: data.currentLevelXP, totalXP: data.totalXP };
    }

    updateGameStats(gameId, score, time, difficulty) {
        const data = this.getData();
        data.gamesPlayed += 1;
        data.totalPlaytime += time;

        if (!data.gamesData[gameId]) {
            data.gamesData[gameId] = { plays: 0, bestScore: 0, totalScore: 0, wins: 0 };
        }

        data.gamesData[gameId].plays += 1;
        data.gamesData[gameId].totalScore += score;
        if (score > data.gamesData[gameId].bestScore) {
            data.gamesData[gameId].bestScore = score;
        }
        if (score > 0) {
            data.gamesData[gameId].wins += 1;
        }

        if (!data.bestScores[gameId] || score > data.bestScores[gameId]) {
            data.bestScores[gameId] = score;
        }

        this.saveData(data);
    }

    addBadge(badgeId) {
        const data = this.getData();
        if (!data.badges.includes(badgeId)) {
            data.badges.push(badgeId);
            this.saveData(data);
            return true;
        }
        return false;
    }

    updateStreak() {
        const data = this.getData();
        const today = new Date().toDateString();
        
        if (data.lastPlayDate !== today) {
            const lastPlay = new Date(data.lastPlayDate || 0);
            const currentDate = new Date();
            const daysDiff = Math.floor((currentDate - lastPlay) / (1000 * 60 * 60 * 24));

            if (daysDiff === 1) {
                data.streak += 1;
            } else if (daysDiff > 1) {
                data.streak = 1;
            } else {
                data.streak = Math.max(data.streak, 1);
            }

            data.lastPlayDate = today;
            this.saveData(data);
        }

        return data.streak;
    }

    resetLives() {
        const data = this.getData();
        data.lives = 5;
        this.saveData(data);
    }

    decrementLives() {
        const data = this.getData();
        data.lives = Math.max(0, data.lives - 1);
        this.saveData(data);
        return data.lives;
    }

    updateDailyChallenge() {
        const data = this.getData();
        data.dailyChallengeCompleted = true;
        this.saveData(data);
    }

    getStats() {
        const data = this.getData();
        return {
            username: data.username,
            level: data.level,
            totalXP: data.totalXP,
            currentLevelXP: data.currentLevelXP,
            gamesPlayed: data.gamesPlayed,
            totalPlaytime: Math.floor(data.totalPlaytime / 60),
            bestScore: Math.max(...Object.values(data.bestScores), 0),
            streak: data.streak,
            badges: data.badges,
            bestScores: data.bestScores,
            gamesData: data.gamesData
        };
    }
}

// Initialize User Data Manager
const userDataManager = new UserDataManager();
const INITIAL_LIVES = 5;

// Game State Management
let currentGame = null;
let sessionStats = [];
let gameState = {
    lives: INITIAL_LIVES,
    score: 0,
    time: 0,
    accuracy: 0,
    totalAttempts: 0,
    correctAttempts: 0,
    timer: null,
    gameData: {}
};

// DOM Elements
const gameContainer = document.getElementById('gameContainer');
const gameContent = document.getElementById('gameContent');
const livesCount = document.getElementById('livesCount');
const scoreCount = document.getElementById('scoreCount');
const timeCount = document.getElementById('timeCount');
const gameOverModal = document.getElementById('gameOverModal');
const feedbackModal = document.getElementById('feedbackModal');
const sessionTimeoutModal = document.getElementById('sessionTimeoutModal');
const sessionStatsBody = document.getElementById('sessionStatsBody');
const sessionStatsCards = document.getElementById('sessionStatsCards');
const gamePausedOverlay = document.getElementById('gamePausedOverlay');
const pauseGameBtn = document.getElementById('pauseGameBtn');
const playGameBtn = document.getElementById('playGameBtn');
const resetGameBtn = document.getElementById('resetGameBtn');
const gameControls = document.querySelector('.game-controls');
const SESSION_TIME_LIMIT_MS = 15 * 60 * 1000;
let sessionTimeoutId = null;
let pendingGameTasks = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    console.log('Checking DOM elements...');
    console.log('gameContainer:', document.getElementById('gameContainer'));
    console.log('gameContent:', document.getElementById('gameContent'));
    console.log('livesCount:', document.getElementById('livesCount'));
    console.log('scoreCount:', document.getElementById('scoreCount'));
    console.log('timeCount:', document.getElementById('timeCount'));
    console.log('gameOverModal:', document.getElementById('gameOverModal'));
    initializeApp();
});

function initializeApp() {
    // Initialize user stats display
    updateUserStats();
    renderSessionStats();
    initializeGameFilters();
    initializeSessionTimeout();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

function updateUserStats() {
    const stats = userDataManager.getStats();
    
    // Update user level display
    const userLevelElement = document.getElementById('userLevel');
    if (userLevelElement) {
        userLevelElement.textContent = stats.level;
    }
    
    // Update XP display
    const userXPElement = document.getElementById('userXP');
    if (userXPElement) {
        userXPElement.textContent = stats.totalXP + ' XP';
    }
    
    // Update streak display
    const userStreakElement = document.getElementById('userStreak');
    if (userStreakElement) {
        userStreakElement.textContent = stats.streak + ' day streak';
    }
    
    // Update XP fill bar
    const xpFillElement = document.getElementById('xpFill');
    if (xpFillElement) {
        const xpPercentage = (stats.currentLevelXP / 500) * 100;
        xpFillElement.style.width = xpPercentage + '%';
    }
}

// Navigation Functions
function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

function initializeGameFilters() {
    const filterContainer = document.getElementById('gamesFilter');
    if (!filterContainer) {
        return;
    }

    const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyGameFilters);
    });

    applyGameFilters();
}

function applyGameFilters() {
    const selectedDifficulties = Array.from(
        document.querySelectorAll('#gamesFilter input[type="checkbox"]:checked')
    ).map(input => input.value);

    const gameCards = document.querySelectorAll('.game-card[data-difficulty]');
    gameCards.forEach(card => {
        const cardDifficulty = card.dataset.difficulty;
        const shouldShow = selectedDifficulties.length === 0 || selectedDifficulties.includes(cardDifficulty);
        card.classList.toggle('hidden-by-filter', !shouldShow);
    });
}

// Game Management Functions
function startGame(gameType) {
    console.log('Starting game:', gameType);
    clearScheduledGameTasks();
    currentGame = gameType;
    resetGameState();
    showGameContainer();
    initializeGame(gameType);
    startTimer();
    updateGameControls();
}

function resetGameState() {
    gameState = {
        lives: INITIAL_LIVES,
        score: 0,
        time: 0,
        accuracy: 0,
        totalAttempts: 0,
        correctAttempts: 0,
        timer: null,
        gameData: {},
        isPaused: false
    };
    hidePausedOverlay();
    updateUI();
}

function showGameContainer() {
    gameContainer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function exitGame() {
    stopTimer();
    clearScheduledGameTasks();
    hideGameOverModal();
    hideFeedbackModal();
    hidePausedOverlay();
    gameContainer.classList.add('hidden');
    document.body.style.overflow = 'auto';
    gameContent.innerHTML = '';
    currentGame = null;
    updateGameControls();
}

function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.time++;
        updateUI();
    }, 1000);
}

function stopTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

function scheduleGameTask(callback, delay) {
    const task = {
        callback,
        remaining: delay,
        startedAt: null,
        id: null
    };

    pendingGameTasks.add(task);
    activateScheduledTask(task);
    return task;
}

function activateScheduledTask(task) {
    task.startedAt = Date.now();
    task.id = setTimeout(() => {
        pendingGameTasks.delete(task);
        task.id = null;
        task.callback();
    }, task.remaining);
}

function clearScheduledGameTasks() {
    pendingGameTasks.forEach(task => {
        if (task.id) {
            clearTimeout(task.id);
        }
    });
    pendingGameTasks.clear();
}

function pauseScheduledGameTasks() {
    pendingGameTasks.forEach(task => {
        if (task.id) {
            clearTimeout(task.id);
            task.remaining = Math.max(0, task.remaining - (Date.now() - task.startedAt));
            task.id = null;
        }
    });
}

function resumeScheduledGameTasks() {
    pendingGameTasks.forEach(task => {
        if (!task.id) {
            activateScheduledTask(task);
        }
    });
}

function showPausedOverlay() {
    if (gamePausedOverlay) {
        gamePausedOverlay.classList.remove('hidden');
    }
}

function hidePausedOverlay() {
    if (gamePausedOverlay) {
        gamePausedOverlay.classList.add('hidden');
    }
}

function updateGameControls() {
    const hasActiveGame = Boolean(currentGame);
    if (pauseGameBtn) {
        pauseGameBtn.disabled = !hasActiveGame || gameState.isPaused;
    }
    if (playGameBtn) {
        playGameBtn.disabled = !hasActiveGame || !gameState.isPaused;
    }
    if (resetGameBtn) {
        resetGameBtn.disabled = !hasActiveGame;
    }
    if (gameControls) {
        gameControls.classList.toggle('paused-mode', hasActiveGame && gameState.isPaused);
    }
}

function pauseGame() {
    if (!currentGame || gameState.isPaused) {
        return;
    }

    gameState.isPaused = true;
    stopTimer();
    pauseScheduledGameTasks();
    showPausedOverlay();
    updateGameControls();
}

function resumeGame() {
    if (!currentGame || !gameState.isPaused) {
        return;
    }

    gameState.isPaused = false;
    startTimer();
    resumeScheduledGameTasks();
    hidePausedOverlay();
    updateGameControls();
}

function resetCurrentGame() {
    if (!currentGame) {
        return;
    }

    stopTimer();
    clearScheduledGameTasks();
    hideFeedbackModal();
    hidePausedOverlay();
    resetGameState();
    initializeGame(currentGame);
    startTimer();
    updateGameControls();
}

function updateUI() {
    livesCount.textContent = gameState.lives;
    scoreCount.textContent = gameState.score;
    timeCount.textContent = gameState.time;
    
    // Update hearts display
    const heartsContainer = document.querySelector('.hearts');
    if (heartsContainer) {
        heartsContainer.innerHTML = Array.from({ length: INITIAL_LIVES }, (_, index) => `
            <span class="heart ${index >= gameState.lives ? 'lost' : ''}">♥</span>
        `).join('');
    }

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index >= gameState.lives) {
            heart.classList.add('lost');
        } else {
            heart.classList.remove('lost');
        }
    });
}

function loseLife() {
    gameState.lives--;
    updateUI();
    
    if (gameState.lives <= 0) {
        endGame();
    }
}

function addScore(points) {
    gameState.score += points;
    gameState.totalAttempts++;
    gameState.correctAttempts++;
    updateAccuracy();
    updateUI();
}

function addAttempt() {
    gameState.totalAttempts++;
    updateAccuracy();
}

function updateAccuracy() {
    if (gameState.totalAttempts > 0) {
        gameState.accuracy = Math.round((gameState.correctAttempts / gameState.totalAttempts) * 100);
    }
}

function endGame() {
    stopTimer();
    clearScheduledGameTasks();
    hidePausedOverlay();
    gameState.isPaused = false;
    
    // Update user stats
    userDataManager.updateGameStats(currentGame, gameState.score, gameState.time, 'medium');
    addSessionStat(currentGame, gameState.score, gameState.time, gameState.accuracy);
    
    // Check for badges
    if (gameState.score >= 1000) {
        userDataManager.addBadge('score_1000');
    }
    if (gameState.accuracy >= 95) {
        userDataManager.addBadge('accuracy_expert');
    }
    if (gameState.time <= 10) {
        userDataManager.addBadge('speed_demon');
    }
    if (gameState.accuracy === 100 && gameState.lives === 3) {
        userDataManager.addBadge('perfect_game');
    }
    
    // Update XP based on performance
    const xpEarned = Math.floor(gameState.score / 10);
    userDataManager.updateXP(xpEarned);
    
    showGameOverModal();
    updateGameControls();
}

function showGameOverModal() {
    // Update modal stats
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalTime').textContent = gameState.time + 's';
    document.getElementById('finalAccuracy').textContent = gameState.accuracy + '%';
    
    // Update user profile stats
    const stats = userDataManager.getStats();
    document.getElementById('playerName').textContent = stats.username;
    document.getElementById('playerLevel').textContent = stats.level;
    document.getElementById('totalXP').textContent = stats.totalXP;
    document.getElementById('gamesPlayed').textContent = stats.gamesPlayed;
    document.getElementById('playerStreak').textContent = stats.streak;
    
    // Show modal
    gameOverModal.classList.remove('hidden');
}

function hideGameOverModal() {
    gameOverModal.classList.add('hidden');
}

function showFeedbackModal(isCorrect, message) {
    if (!feedbackModal) {
        return;
    }

    const badge = document.getElementById('feedbackBadge');
    const title = document.getElementById('feedbackTitle');
    const content = document.getElementById('feedbackMessage');

    badge.textContent = isCorrect ? 'Correct' : 'Incorrect';
    badge.className = `feedback-badge ${isCorrect ? 'success' : 'error'}`;
    title.textContent = isCorrect ? 'Nice work!' : 'Not quite';
    content.textContent = message;

    feedbackModal.classList.remove('hidden');
}

function hideFeedbackModal() {
    if (feedbackModal) {
        feedbackModal.classList.add('hidden');
    }
}

function initializeSessionTimeout() {
    if (sessionTimeoutId) {
        clearTimeout(sessionTimeoutId);
    }

    sessionTimeoutId = setTimeout(() => {
        showSessionTimeoutModal();
    }, SESSION_TIME_LIMIT_MS);
}

function showSessionTimeoutModal() {
    if (sessionTimeoutModal) {
        sessionTimeoutModal.classList.remove('hidden');
    }
}

function ignoreSessionTimeout() {
    if (sessionTimeoutModal) {
        sessionTimeoutModal.classList.add('hidden');
    }
}

function closeSessionSite() {
    window.open('', '_self');
    window.close();

    setTimeout(() => {
        if (!window.closed) {
            window.location.replace('about:blank');
        }
    }, 150);
}

function playAgain() {
    hideGameOverModal();
    startGame(currentGame);
}

function nextGame() {
    hideGameOverModal();
    // Get next game in the list
    const games = ['memory', 'math', 'reaction', 'pattern', 'word', 'color', 'sequence', 'attention', 'logic', 'spatial'];
    const currentIndex = games.indexOf(currentGame);
    const nextIndex = (currentIndex + 1) % games.length;
    startGame(games[nextIndex]);
}

function goHome() {
    hideGameOverModal();
    exitGame();
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function addSessionStat(gameId, score, time, accuracy) {
    const game = gameDatabase.find(item => item.id === gameId);
    sessionStats.push({
        gameId,
        gameName: game ? game.name : gameId,
        score,
        time,
        accuracy
    });
    renderSessionStats();
}

function renderSessionStats() {
    if (!sessionStatsBody || !sessionStatsCards) {
        return;
    }

    if (sessionStats.length === 0) {
        sessionStatsCards.innerHTML = `
            <div class="session-empty-card">No games played in this session yet.</div>
        `;
        sessionStatsBody.innerHTML = `
            <tr>
                <td colspan="4" class="session-empty">No games played in this session yet.</td>
            </tr>
        `;
    } else {
        sessionStatsCards.innerHTML = sessionStats.map((entry, index) => `
            <article class="session-game-card">
                <div class="session-game-card-top">
                    <span class="session-game-index">Game ${index + 1}</span>
                    <span class="session-game-name">${entry.gameName}</span>
                </div>
                <div class="session-game-metrics">
                    <div class="session-metric">
                        <span class="session-metric-value">${entry.score}</span>
                        <span class="session-metric-label">Score</span>
                    </div>
                    <div class="session-metric">
                        <span class="session-metric-value">${entry.time}s</span>
                        <span class="session-metric-label">Time</span>
                    </div>
                    <div class="session-metric">
                        <span class="session-metric-value">${entry.accuracy}%</span>
                        <span class="session-metric-label">Accuracy</span>
                    </div>
                </div>
            </article>
        `).join('');

        sessionStatsBody.innerHTML = sessionStats.map((entry, index) => `
            <tr>
                <td>${index + 1}. ${entry.gameName}</td>
                <td>${entry.score}</td>
                <td>${entry.time}s</td>
                <td>${entry.accuracy}%</td>
            </tr>
        `).join('');
    }

    const totalScore = sessionStats.reduce((sum, entry) => sum + entry.score, 0);
    const totalTime = sessionStats.reduce((sum, entry) => sum + entry.time, 0);
    const averageAccuracy = sessionStats.length
        ? Math.round(sessionStats.reduce((sum, entry) => sum + entry.accuracy, 0) / sessionStats.length)
        : 0;

    document.getElementById('sessionGamesPlayed').textContent = sessionStats.length;
    document.getElementById('sessionTotalScore').textContent = totalScore;
    document.getElementById('sessionTotalTime').textContent = `${totalTime}s`;
    document.getElementById('sessionAverageAccuracy').textContent = `${averageAccuracy}%`;
}

// Game Implementations
function initializeGame(gameType) {
    console.log('Initializing game:', gameType);
    console.log('gameContent element exists:', !!gameContent);
    console.log('gameContent innerHTML before:', gameContent.innerHTML);
    
    // Always clear existing game content first
    gameContent.innerHTML = '';
    console.log('Game content cleared');
    
    switch(gameType) {
        case 'memory':
            console.log('Starting memory game');
            initMemoryGame();
            break;
        case 'math':
            console.log('Starting math game');
            initMathGame();
            break;
        case 'reaction':
            console.log('Starting reaction game');
            initReactionGame();
            break;
        case 'pattern':
            console.log('Starting pattern game');
            initPatternGame();
            break;
        case 'word':
            console.log('Starting word game');
            initWordGame();
            break;
        case 'color':
            console.log('Starting color game');
            initColorGame();
            break;
        case 'sequence':
            console.log('Starting sequence game');
            initSequenceGame();
            break;
        case 'attention':
            console.log('Starting attention game');
            initAttentionGame();
            break;
        case 'logic':
            console.log('Starting logic game');
            initLogicGame();
            break;
        case 'spatial':
            console.log('Starting spatial game');
            initSpatialGame();
            break;
    }
    
    console.log('Game initialization completed');
    console.log('gameContent innerHTML after:', gameContent.innerHTML);
}

// Memory Game
function initMemoryGame() {
    console.log('initMemoryGame called');
    console.log('gameContent element:', gameContent);
    
    // Clear any existing game content
    gameContent.innerHTML = '';
    console.log('Game content cleared');
    
    // Initialize game data with round tracking
    if (!gameState.gameData.round) {
        gameState.gameData.round = 1;
    }
    
    // Use cute emojis for memory game
    const emojis = ['🧠', '🌟', '🎨', '🎭', '🌈'];
    const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    
    gameState.gameData = {
        ...gameState.gameData,
        cards: cards,
        flippedCards: [],
        matchedPairs: 0,
        isProcessing: false,
        totalPairs: 5
    };
    
    // Create game board with proper styling and animations
    const gameBoard = document.createElement('div');
    gameBoard.className = 'memory-game';
    gameBoard.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 230, 230, 0.1));
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(255, 107, 107, 0.2);
        animation: fadeIn 0.5s ease-in;
    `;
    
    // Add animated round indicator with cute emojis
    const roundInfo = document.createElement('div');
    roundInfo.style.cssText = `
        text-align: center;
        margin-bottom: 20px;
        padding: 15px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 230, 230, 0.95));
        border-radius: 12px;
        font-size: 1.2rem;
        color: #2C3E50;
        font-weight: 600;
        box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
        animation: slideDown 0.3s ease-out;
    `;
    roundInfo.innerHTML = `🎯 Round ${gameState.gameData.round} - Match all pairs! 🧩`;
    gameContent.appendChild(roundInfo);
    
    // Create cards with animations and cute styling
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.emoji = emoji;
        card.style.cssText = `
            aspect-ratio: 1;
            background: linear-gradient(135deg, #FF6B9D, #C66FBC);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            transform-style: preserve-3d;
            position: relative;
            transform: rotateY(0deg);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100px;
            height: 100px;
            animation: cardEntry 0.5s ease-out;
        `;
        
        card.innerHTML = `
            <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                background: white;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                backface-visibility: hidden;
                transform: rotateY(180deg);
                animation: cardFlip 0.6s ease-in-out;
            ">${emoji}</div>
            <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #66D9EF, #A6E3A1);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                backface-visibility: hidden;
                transform: rotateY(0deg);
            ">🎭</div>
        `;
        
        card.addEventListener('click', () => flipMemoryCard(card));
        gameBoard.appendChild(card);
    });
    
    console.log('Appending game board to game content');
    gameContent.appendChild(gameBoard);
    console.log('Game board appended. Game content children:', gameContent.children.length);
    console.log('Memory game setup complete');
}

function flipMemoryCard(card) {
    // Prevent clicking if already processing or card is matched
    if (gameState.gameData.isProcessing) return;
    if (gameState.gameData.flippedCards.includes(card)) return;
    if (card.style.visibility === 'hidden') return;
    
    card.style.transform = 'rotateY(180deg)';
    gameState.gameData.flippedCards.push(card);
    addAttempt();
    
    if (gameState.gameData.flippedCards.length === 2) {
        gameState.gameData.isProcessing = true;
        scheduleGameTask(() => checkMemoryMatch(), 1000);
    }
}

function checkMemoryMatch() {
    const [card1, card2] = gameState.gameData.flippedCards;
    
    if (card1.dataset.emoji === card2.dataset.emoji) {
        addScore(10);
        gameState.gameData.matchedPairs++;
        card1.style.visibility = 'hidden';
        card2.style.visibility = 'hidden';
        
        // Check if current round is complete
        if (gameState.gameData.matchedPairs === gameState.gameData.totalPairs) {
            // Progress to next round or end game
            if (gameState.gameData.round < 5) {
                scheduleGameTask(() => {
                    gameState.gameData.round++;
                    initMemoryGame();
                }, 1000);
            } else {
                scheduleGameTask(() => endGame(), 500);
            }
        }
    } else {
        loseLife();
        card1.style.transform = 'rotateY(0deg)';
        card2.style.transform = 'rotateY(0deg)';
    }
    
    gameState.gameData.flippedCards = [];
    gameState.gameData.isProcessing = false;
}

// Math Game
function initMathGame() {
    // Initialize round tracking
    if (!gameState.gameData.round) {
        gameState.gameData.round = 1;
    }
    
    gameState.gameData = {
        ...gameState.gameData,
        currentAnswer: null,
        difficulty: 1,
        problemsPerRound: 5,
        problemsSolved: 0
    };
    
    const gameArea = document.createElement('div');
    gameArea.className = 'math-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 400px;
        margin: 0 auto;
    `;
    
    gameContent.appendChild(gameArea);
    generateMathProblem();
}

function generateMathProblem() {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;
    
    switch(operation) {
        case '+':
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 20) + 10;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            answer = num1 * num2;
            break;
    }
    
    gameState.gameData.currentAnswer = answer;
    
    const gameArea = document.querySelector('.math-game');
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <div style="
                text-align: center;
                margin-bottom: 20px;
                font-size: 1.2rem;
                color: #2C3E50;
                font-weight: 600;
            ">Round ${gameState.gameData.round} - Problem ${gameState.gameData.problemsSolved + 1}/${gameState.gameData.problemsPerRound}</div>
            <h2 style="
                font-size: 3rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">${num1} ${operation} ${num2} = ?</h2>
            <div style="
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            ">
                ${generateMathOptions(answer)}
            </div>
            <button onclick="generateMathProblem()" style="
                background: linear-gradient(135deg, #66D9EF, #A6E3A1);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            ">Skip Problem</button>
        </div>
    `;
}

function generateMathOptions(correctAnswer) {
    const options = [correctAnswer];
    
    while (options.length < 4) {
        const wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
        if (!options.includes(wrongAnswer) && wrongAnswer > 0) {
            options.push(wrongAnswer);
        }
    }
    
    options.sort(() => Math.random() - 0.5);
    
    return options.map(option => `
        <button onclick="checkMathAnswer(${option})" style="
            background: #F8F9FA;
            border: 2px solid #E9ECEF;
            padding: 20px;
            border-radius: 12px;
            font-size: 1.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        " onmouseover="this.style.background='#FFE5EC'" onmouseout="this.style.background='#F8F9FA'">
            ${option}
        </button>
    `).join('');
}

function checkMathAnswer(answer) {
    addAttempt();
    
    if (answer === gameState.gameData.currentAnswer) {
        addScore(10);
        gameState.gameData.problemsSolved++;
        
        // Check if round is complete
        if (gameState.gameData.problemsSolved >= gameState.gameData.problemsPerRound) {
            // Progress to next round or end game
            if (gameState.gameData.round < 5) {
                scheduleGameTask(() => {
                    gameState.gameData.round++;
                    initMathGame();
                }, 1000);
            } else {
                scheduleGameTask(() => endGame(), 500);
            }
        } else {
            generateMathProblem();
        }
    } else {
        loseLife();
        generateMathProblem();
    }
}

// Reaction Time Game
function initReactionGame() {
    gameState.gameData = {
        startTime: null,
        waitingForClick: false,
        round: 1
    };
    
    const gameArea = document.createElement('div');
    gameArea.className = 'reaction-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 400px;
        margin: 0 auto;
    `;
    
    gameContent.appendChild(gameArea);
    startReactionRound();
}

function startReactionRound() {
    const gameArea = document.querySelector('.reaction-game');
    const delay = Math.random() * 3000 + 2000; // 2-5 seconds
    
    gameArea.innerHTML = `
        <div style="
            background: #FFE5EC;
            padding: 60px;
            border-radius: 20px;
            text-align: center;
        ">
            <h2 style="
                font-size: 2rem;
                color: #FF6B9D;
                margin-bottom: 20px;
            ">Get Ready!</h2>
            <p style="
                font-size: 1.2rem;
                color: #6C757D;
            ">Click when the circle turns green</p>
            <div style="
                width: 150px;
                height: 150px;
                background: #FF6B9D;
                border-radius: 50%;
                margin: 30px auto;
                transition: all 0.3s ease;
                cursor: not-allowed;
            " id="reactionCircle"></div>
        </div>
    `;
    
    scheduleGameTask(() => {
        showReactionTarget();
    }, delay);
}

function showReactionTarget() {
    const circle = document.getElementById('reactionCircle');
    gameState.gameData.startTime = Date.now();
    gameState.gameData.waitingForClick = true;
    
    circle.style.background = '#A6E3A1';
    circle.style.cursor = 'pointer';
    circle.onclick = handleReactionClick;
    
    const gameArea = document.querySelector('.reaction-game');
    gameArea.querySelector('h2').textContent = 'Click Now!';
    gameArea.querySelector('p').textContent = 'Quick! Click the green circle!';
}

function handleReactionClick() {
    if (!gameState.gameData.waitingForClick) return;
    
    const reactionTime = Date.now() - gameState.gameData.startTime;
    gameState.gameData.waitingForClick = false;
    
    addAttempt();
    
    if (reactionTime < 1000) {
        addScore(Math.floor(1000 / reactionTime) * 10);
        gameState.gameData.round++;
        
        if (gameState.gameData.round <= 10) {
            scheduleGameTask(() => startReactionRound(), 1000);
        } else {
            endGame();
        }
    } else {
        loseLife();
        scheduleGameTask(() => startReactionRound(), 1000);
    }
}

// Pattern Recognition Game
function initPatternGame() {
    gameState.gameData = {
        pattern: [],
        userPattern: [],
        round: 1
    };
    
    const gameArea = document.createElement('div');
    gameArea.className = 'pattern-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
    `;
    
    gameContent.appendChild(gameArea);
    startPatternRound();
}

function startPatternRound() {
    const colors = ['#FF6B9D', '#66D9EF', '#A6E3A1', '#F9E79F'];
    const patternLength = gameState.gameData.round + 2;
    
    gameState.gameData.pattern = [];
    gameState.gameData.userPattern = [];
    
    for (let i = 0; i < patternLength; i++) {
        gameState.gameData.pattern.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    
    showPattern();
}

function showPattern() {
    const gameArea = document.querySelector('.pattern-game');
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Memorize the Pattern!</h2>
            <div style="
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 30px;
            " id="patternDisplay"></div>
            <p style="
                color: #6C757D;
                font-size: 1.1rem;
            ">Round ${gameState.gameData.round} - Watch carefully!</p>
        </div>
    `;
    
    const patternDisplay = document.getElementById('patternDisplay');
    
    gameState.gameData.pattern.forEach((color, index) => {
        scheduleGameTask(() => {
            const box = document.createElement('div');
            box.style.cssText = `
                width: 60px;
                height: 60px;
                background: ${color};
                border-radius: 12px;
                animation: pulse 0.5s ease;
            `;
            patternDisplay.appendChild(box);
        }, index * 600);
    });
    
    scheduleGameTask(() => {
        showPatternInput();
    }, gameState.gameData.pattern.length * 600 + 1000);
}

function showPatternInput() {
    const gameArea = document.querySelector('.pattern-game');
    const colors = ['#FF6B9D', '#66D9EF', '#A6E3A1', '#F9E79F'];
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Repeat the Pattern!</h2>
            <div style="
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 30px;
            " id="userPattern"></div>
            <div style="
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 20px;
            ">
                ${colors.map(color => `
                    <button onclick="addToPattern('${color}')" style="
                        width: 60px;
                        height: 60px;
                        background: ${color};
                        border: none;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></button>
                `).join('')}
            </div>
            <button onclick="checkPattern()" style="
                background: linear-gradient(135deg, #FF6B9D, #C66FBC);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            ">Check Pattern</button>
            <button onclick="clearPattern()" style="
                background: #6C757D;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                margin-left: 10px;
            ">Clear</button>
        </div>
    `;
}

function addToPattern(color) {
    gameState.gameData.userPattern.push(color);
    const userPatternDisplay = document.getElementById('userPattern');
    
    const box = document.createElement('div');
    box.style.cssText = `
        width: 60px;
        height: 60px;
        background: ${color};
        border-radius: 12px;
        animation: slideIn 0.3s ease;
    `;
    userPatternDisplay.appendChild(box);
}

function clearPattern() {
    gameState.gameData.userPattern = [];
    const userPatternDisplay = document.getElementById('userPattern');
    userPatternDisplay.innerHTML = '';
}

function checkPattern() {
    addAttempt();
    
    const isCorrect = JSON.stringify(gameState.gameData.pattern) === JSON.stringify(gameState.gameData.userPattern);
    
    if (isCorrect) {
        addScore(gameState.gameData.round * 10);
        gameState.gameData.round++;
        
        if (gameState.gameData.round <= 8) {
            scheduleGameTask(() => startPatternRound(), 1000);
        } else {
            endGame();
        }
    } else {
        loseLife();
        scheduleGameTask(() => startPatternRound(), 1000);
    }
}

// Word Puzzle Game
function initWordGame() {
    const words = [
        { word: 'BRAIN', hint: 'Organ in your head' },
        { word: 'THINK', hint: 'Use your mind' },
        { word: 'SMART', hint: 'Intelligent' },
        { word: 'FOCUS', hint: 'Concentration' },
        { word: 'MEMORY', hint: 'Remember things' },
        { word: 'LOGIC', hint: 'Reasoning' },
        { word: 'SPEED', hint: 'How fast you are' },
        { word: 'PUZZLE', hint: 'Brain teaser' }
    ];
    
    gameState.gameData = {
        words: words,
        currentWord: words[Math.floor(Math.random() * words.length)],
        guessedLetters: []
    };
    
    showWordPuzzle();
}

function showWordPuzzle() {
    gameContent.innerHTML = '';

    const gameArea = document.createElement('div');
    gameArea.className = 'word-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
    `;
    
    const word = gameState.gameData.currentWord.word;
    const hint = gameState.gameData.currentWord.hint;
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 20px;
            ">Word Puzzle</h2>
            <p style="
                font-size: 1.2rem;
                color: #6C757D;
                margin-bottom: 30px;
            ">Hint: ${hint}</p>
            <div style="
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 30px;
                font-size: 2rem;
                font-weight: bold;
                letter-spacing: 10px;
            " id="wordDisplay">${word.split('').map(() => '_ ').join('')}</div>
            <div style="
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 10px;
                margin-bottom: 20px;
            ">
                ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => `
                    <button onclick="guessLetter('${letter}')" id="letter-${letter}" style="
                        background: #F8F9FA;
                        border: 2px solid #E9ECEF;
                        padding: 10px;
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">${letter}</button>
                `).join('')}
            </div>
            <button onclick="initWordGame()" style="
                background: #6C757D;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            ">New Word</button>
        </div>
    `;
    
    gameContent.appendChild(gameArea);
}

function guessLetter(letter) {
    const word = gameState.gameData.currentWord.word;
    const button = document.getElementById(`letter-${letter}`);
    
    if (gameState.gameData.guessedLetters.includes(letter)) return;
    
    gameState.gameData.guessedLetters.push(letter);
    addAttempt();
    
    button.disabled = true;
    
    if (word.includes(letter)) {
        button.style.background = '#A6E3A1';
        button.style.color = 'white';
        addScore(5);
        updateWordDisplay();
        
        if (isWordComplete()) {
            scheduleGameTask(() => {
                addScore(20);
                initWordGame();
            }, 1000);
        }
    } else {
        button.style.background = '#FFB6B9';
        button.style.color = 'white';
        loseLife();
    }
}

function updateWordDisplay() {
    const word = gameState.gameData.currentWord.word;
    const display = document.getElementById('wordDisplay');
    
    display.textContent = word.split('').map(letter => 
        gameState.gameData.guessedLetters.includes(letter) ? letter + ' ' : '_ '
    ).join('');
}

function isWordComplete() {
    const word = gameState.gameData.currentWord.word;
    return word.split('').every(letter => gameState.gameData.guessedLetters.includes(letter));
}

// Color Match Game
function initColorGame() {
    const colors = [
        { name: 'RED', color: '#FF6B9D' },
        { name: 'BLUE', color: '#66D9EF' },
        { name: 'GREEN', color: '#A6E3A1' },
        { name: 'YELLOW', color: '#F9E79F' },
        { name: 'PURPLE', color: '#C66FBC' },
        { name: 'ORANGE', color: '#FFB6B9' }
    ];
    
    gameState.gameData = {
        colors: colors,
        currentColor: null,
        round: 1
    };
    
    startColorRound();
}

function startColorRound() {
    gameContent.innerHTML = '';

    const randomColor = gameState.gameData.colors[Math.floor(Math.random() * gameState.gameData.colors.length)];
    gameState.gameData.currentColor = randomColor;
    
    const gameArea = document.createElement('div');
    gameArea.className = 'color-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 400px;
        margin: 0 auto;
    `;
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Color Match!</h2>
            <p style="
                font-size: 1.2rem;
                color: #6C757D;
                margin-bottom: 30px;
            ">Click the color that matches: <strong style="color: ${randomColor.color}">${randomColor.name}</strong></p>
            <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            ">
                ${gameState.gameData.colors.map(color => `
                    <button onclick="checkColorMatch('${color.name}')" style="
                        width: 80px;
                        height: 80px;
                        background: ${color.color};
                        border: none;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-weight: 600;
                        color: white;
                    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                        ${color.name}
                    </button>
                `).join('')}
            </div>
            <div style="
                font-size: 1rem;
                color: #6C757D;
            ">Round ${gameState.gameData.round} of 10</div>
        </div>
    `;
    
    gameContent.appendChild(gameArea);
}

function checkColorMatch(colorName) {
    addAttempt();
    
    if (colorName === gameState.gameData.currentColor.name) {
        addScore(10);
        gameState.gameData.round++;
        
        if (gameState.gameData.round <= 10) {
            scheduleGameTask(() => startColorRound(), 500);
        } else {
            endGame();
        }
    } else {
        loseLife();
        scheduleGameTask(() => startColorRound(), 500);
    }
}

// Sequence Memory Game
function initSequenceGame() {
    gameState.gameData = {
        sequence: [],
        userSequence: [],
        round: 1
    };
    
    startSequenceRound();
}

function startSequenceRound() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const sequenceLength = gameState.gameData.round + 2;
    
    gameState.gameData.sequence = [];
    gameState.gameData.userSequence = [];
    
    for (let i = 0; i < sequenceLength; i++) {
        gameState.gameData.sequence.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    
    showSequence();
}

function showSequence() {
    gameContent.innerHTML = '';

    const gameArea = document.createElement('div');
    gameArea.className = 'sequence-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
    `;
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Memorize the Sequence!</h2>
            <div style="
                font-size: 3rem;
                font-weight: bold;
                color: #FF6B9D;
                margin-bottom: 30px;
                letter-spacing: 15px;
            ">${gameState.gameData.sequence.join(' ')}</div>
            <p style="
                color: #6C757D;
                font-size: 1.1rem;
            ">Round ${gameState.gameData.round} - Remember the numbers!</p>
        </div>
    `;
    
    gameContent.appendChild(gameArea);
    
    scheduleGameTask(() => {
        showSequenceInput();
    }, 3000);
}

function showSequenceInput() {
    const gameArea = document.querySelector('.sequence-game');
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Enter the Sequence!</h2>
            <div style="
                font-size: 2rem;
                font-weight: bold;
                color: #66D9EF;
                margin-bottom: 30px;
                min-height: 60px;
                letter-spacing: 15px;
            " id="sequenceDisplay"></div>
            <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            ">
                ${[1,2,3,4,5,6,7,8,9].map(num => `
                    <button onclick="addToSequence('${num}')" style="
                        background: #F8F9FA;
                        border: 2px solid #E9ECEF;
                        padding: 20px;
                        border-radius: 12px;
                        font-size: 1.5rem;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='#FFE5EC'" onmouseout="this.style.background='#F8F9FA'">${num}</button>
                `).join('')}
            </div>
            <button onclick="checkSequence()" style="
                background: linear-gradient(135deg, #FF6B9D, #C66FBC);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            ">Check Sequence</button>
            <button onclick="clearSequence()" style="
                background: #6C757D;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                margin-left: 10px;
            ">Clear</button>
        </div>
    `;
}

function addToSequence(number) {
    gameState.gameData.userSequence.push(number);
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    sequenceDisplay.textContent = gameState.gameData.userSequence.join(' ');
}

function clearSequence() {
    gameState.gameData.userSequence = [];
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    sequenceDisplay.textContent = '';
}

function checkSequence() {
    addAttempt();
    
    const isCorrect = JSON.stringify(gameState.gameData.sequence) === JSON.stringify(gameState.gameData.userSequence);
    
    if (isCorrect) {
        addScore(gameState.gameData.round * 15);
        gameState.gameData.round++;
        
        if (gameState.gameData.round <= 8) {
            scheduleGameTask(() => startSequenceRound(), 1000);
        } else {
            endGame();
        }
    } else {
        loseLife();
        scheduleGameTask(() => startSequenceRound(), 1000);
    }
}

// Attention Test Game
function initAttentionGame() {
    gameState.gameData = {
        targetSymbol: '?',
        round: 1,
        symbols: []
    };
    
    startAttentionRound();
}

function startAttentionRound() {
    const symbols = ['?', '?', '?', '?', '?', '?', '?', '?', '?'];
    const targetCount = Math.max(1, 5 - gameState.gameData.round);
    
    gameState.gameData.symbols = [];
    
    // Add target symbols
    for (let i = 0; i < targetCount; i++) {
        gameState.gameData.symbols.push(gameState.gameData.targetSymbol);
    }
    
    // Add distractor symbols
    while (gameState.gameData.symbols.length < 20) {
        const distractor = symbols[Math.floor(Math.random() * symbols.length)];
        if (distractor !== gameState.gameData.targetSymbol) {
            gameState.gameData.symbols.push(distractor);
        }
    }
    
    // Shuffle symbols
    gameState.gameData.symbols.sort(() => Math.random() - 0.5);
    
    showAttentionGrid();
}

function showAttentionGrid() {
    gameContent.innerHTML = '';

    const gameArea = document.createElement('div');
    gameArea.className = 'attention-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    `;
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 20px;
            ">Attention Test!</h2>
            <p style="
                font-size: 1.2rem;
                color: #6C757D;
                margin-bottom: 30px;
            ">Find all the <strong style="color: #FF6B9D; font-size: 1.5rem;">${gameState.gameData.targetSymbol}</strong> symbols!</p>
            <div style="
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            " id="attentionGrid"></div>
            <div style="
                font-size: 1rem;
                color: #6C757D;
            ">Round ${gameState.gameData.round} - Found: <span id="foundCount">0</span> / ${gameState.gameData.symbols.filter(s => s === gameState.gameData.targetSymbol).length}</div>
        </div>
    `;
    
    gameContent.appendChild(gameArea);

    const grid = gameArea.querySelector('#attentionGrid');
    gameState.gameData.symbols.forEach((symbol, index) => {
        const cell = document.createElement('button');
        cell.textContent = symbol;
        cell.style.cssText = `
            width: 80px;
            height: 80px;
            background: #F8F9FA;
            border: 2px solid #E9ECEF;
            border-radius: 12px;
            font-size: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        cell.onclick = () => checkAttentionSymbol(cell, symbol);
        grid.appendChild(cell);
    });
}

function checkAttentionSymbol(cell, symbol) {
    if (cell.disabled) return;
    
    addAttempt();
    cell.disabled = true;
    
    if (symbol === gameState.gameData.targetSymbol) {
        cell.style.background = '#A6E3A1';
        cell.style.color = 'white';
        addScore(5);
        updateFoundCount();
        
        const totalTargets = gameState.gameData.symbols.filter(s => s === gameState.gameData.targetSymbol).length;
        const foundTargets = document.querySelectorAll('#attentionGrid button[style*="A6E3A1"]').length;
        
        if (foundTargets === totalTargets) {
            scheduleGameTask(() => {
                gameState.gameData.round++;
                if (gameState.gameData.round <= 8) {
                    startAttentionRound();
                } else {
                    endGame();
                }
            }, 1000);
        }
    } else {
        cell.style.background = '#FFB6B9';
        cell.style.color = 'white';
        loseLife();
    }
}

function updateFoundCount() {
    const foundCount = document.querySelectorAll('#attentionGrid button[style*="A6E3A1"]').length;
    document.getElementById('foundCount').textContent = foundCount;
}

// Logic Puzzle Game
function initLogicGame() {
    gameState.gameData = {
        puzzles: [
            { question: "If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?", answer: false, explanation: "We don't know if roses are part of the flowers that fade quickly" },
            { question: "Which number should come next: 2, 6, 12, 20, 30, ?", answer: "42", explanation: "Pattern: +4, +6, +8, +10, +12" },
            { question: "If A is taller than B, and B is taller than C, who is the shortest?", answer: "C", explanation: "C is shorter than B, who is shorter than A" },
            { question: "What comes next in the sequence: 1, 1, 2, 3, 5, 8, ?", answer: "13", explanation: "Fibonacci sequence: each number is sum of previous two" },
            { question: "If all cats are animals and some animals are pets, are all cats pets?", answer: false, explanation: "We don't know if all cats are part of the animals that are pets" }
        ],
        currentPuzzle: null
    };
    
    startLogicRound();
}

function startLogicRound() {
    gameContent.innerHTML = '';

    const puzzles = gameState.gameData.puzzles;
    gameState.gameData.currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    
    const gameArea = document.createElement('div');
    gameArea.className = 'logic-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    `;
    
    const puzzle = gameState.gameData.currentPuzzle;
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Logic Puzzle!</h2>
            <div style="
                background: #F8F9FA;
                padding: 30px;
                border-radius: 15px;
                margin-bottom: 30px;
                border-left: 4px solid #FF6B9D;
            ">
                <p style="
                    font-size: 1.3rem;
                    color: #2C3E50;
                    line-height: 1.6;
                    font-weight: 500;
                ">${puzzle.question}</p>
            </div>
            <div style="
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-bottom: 20px;
            ">
                ${typeof puzzle.answer === 'boolean' ? `
                    <button onclick="checkLogicAnswer(true)" style="
                        background: #F8F9FA;
                        border: 2px solid #E9ECEF;
                        padding: 15px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">True</button>
                    <button onclick="checkLogicAnswer(false)" style="
                        background: #F8F9FA;
                        border: 2px solid #E9ECEF;
                        padding: 15px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">False</button>
                ` : `
                    <input type="text" id="logicAnswer" placeholder="Type your answer..." style="
                        width: 100%;
                        padding: 15px;
                        border: 2px solid #E9ECEF;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        margin-bottom: 15px;
                    ">
                    <button onclick="checkLogicAnswer(document.getElementById('logicAnswer').value)" style="
                        background: linear-gradient(135deg, #FF6B9D, #C66FBC);
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        font-weight: 600;
                    ">Submit Answer</button>
                `}
            </div>
            <button onclick="startLogicRound()" style="
                background: #6C757D;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            ">Skip Puzzle</button>
        </div>
    `;
    
    gameContent.appendChild(gameArea);
}

function checkLogicAnswer(answer) {
    addAttempt();
    
    const puzzle = gameState.gameData.currentPuzzle;
    
    if (answer === puzzle.answer) {
        addScore(20);
        showFeedbackModal(true, puzzle.explanation);
        scheduleGameTask(() => {
            hideFeedbackModal();
            startLogicRound();
        }, 2000);
    } else {
        loseLife();
        showFeedbackModal(false, puzzle.explanation);
        scheduleGameTask(() => {
            hideFeedbackModal();
            startLogicRound();
        }, 2000);
    }
}

// Spatial Reasoning Game
function initSpatialGame() {
    gameState.gameData = {
        shapes: ['circle', 'square', 'triangle', 'star'],
        rotations: [0, 90, 180, 270],
        currentShape: null,
        currentRotation: null,
        round: 1
    };
    
    startSpatialRound();
}

function startSpatialRound() {
    gameContent.innerHTML = '';

    const shapes = gameState.gameData.shapes;
    const rotations = gameState.gameData.rotations;
    
    gameState.gameData.currentShape = shapes[Math.floor(Math.random() * shapes.length)];
    gameState.gameData.currentRotation = rotations[Math.floor(Math.random() * rotations.length)];
    
    const gameArea = document.createElement('div');
    gameArea.className = 'spatial-game';
    gameArea.style.cssText = `
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
    `;
    
    gameArea.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        ">
            <h2 style="
                font-size: 2rem;
                color: #2C3E50;
                margin-bottom: 30px;
            ">Spatial Reasoning!</h2>
            <p style="
                font-size: 1.2rem;
                color: #6C757D;
                margin-bottom: 30px;
            ">How many degrees has this shape been rotated?</p>
            <div style="
                width: 150px;
                height: 150px;
                margin: 0 auto 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 4rem;
                transform: rotate(${gameState.gameData.currentRotation}deg);
                transition: transform 0.3s ease;
            " id="shapeDisplay">${getShapeEmoji(gameState.gameData.currentShape)}</div>
            <div style="
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            ">
                ${rotations.map(rotation => `
                    <button onclick="checkSpatialAnswer(${rotation})" style="
                        background: #F8F9FA;
                        border: 2px solid #E9ECEF;
                        padding: 15px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">${rotation}°</button>
                `).join('')}
            </div>
            <div style="
                font-size: 1rem;
                color: #6C757D;
            ">Round ${gameState.gameData.round} of 10</div>
        </div>
    `;
    
    gameContent.appendChild(gameArea);
}

function getShapeEmoji(shape) {
    const shapeEmojis = {
        circle: '?',
        square: '?',
        triangle: '?',
        star: '?'
    };
    return shapeEmojis[shape] || '?';
}

function checkSpatialAnswer(rotation) {
    addAttempt();
    
    if (rotation === gameState.gameData.currentRotation) {
        addScore(15);
        gameState.gameData.round++;
        
        if (gameState.gameData.round <= 10) {
            scheduleGameTask(() => startSpatialRound(), 500);
        } else {
            endGame();
        }
    } else {
        loseLife();
        scheduleGameTask(() => startSpatialRound(), 500);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
    }
`;
document.head.appendChild(style);
