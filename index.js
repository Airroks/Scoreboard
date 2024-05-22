document.addEventListener('DOMContentLoaded', () => {
    let homeScore = 0;
    let guestScore = 0;

    // Funktion zum Aktualisieren der Punktzahl
    function updateScore(team, points) {
        if (team === 'home') {
            homeScore += points;
        } else if (team === 'guest') {
            guestScore += points;
        }
        document.getElementById('home-score').textContent = homeScore;
        document.getElementById('guest-score').textContent = guestScore;
        updateLeader();
    }

    // Funktion zum Überprüfen und Aktualisieren des führenden Teams
    function updateLeader() {
        const homeScoreElement = document.getElementById('home-score');
        const guestScoreElement = document.getElementById('guest-score');

        if (homeScore > guestScore) {
            homeScoreElement.classList.add('leading');
            guestScoreElement.classList.remove('leading');
        } else if (guestScore > homeScore) {
            guestScoreElement.classList.add('leading');
            homeScoreElement.classList.remove('leading');
        } else {
            homeScoreElement.classList.remove('leading');
            guestScoreElement.classList.remove('leading');
        }
    }

    // Funktion zum Zurücksetzen der Punktzahlen
    function resetScores() {
        homeScore = 0;
        guestScore = 0;
        document.getElementById('home-score').textContent = homeScore;
        document.getElementById('guest-score').textContent = guestScore;
        updateLeader();
    }

    // Event Listener für alle Buttons
    document.querySelectorAll('.score-btn').forEach(button => {
        button.addEventListener('click', () => {
            const team = button.getAttribute('data-team');
            const points = parseInt(button.getAttribute('data-points'));
            updateScore(team, points);
        });
    });

    // Event Listener für den Reset-Button
    document.getElementById('reset-btn').addEventListener('click', resetScores);

    // Initiale Punktzahl setzen
    updateLeader();
});
