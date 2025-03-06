function calculateTimeLeft() {
    const eventDate = new Date(localStorage.getItem('eventDate') || '2025-03-15').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

function updateCountdown() {
    const timeLeft = calculateTimeLeft();
    document.getElementById('countdown').innerHTML = 
        `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();
