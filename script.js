document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('mobile');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('mobileError');
    const successMessage = document.getElementById('successMessage');

    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    phoneError.classList.add('hidden');

    if (name.value.trim() === '') {
        nameError.classList.remove('hidden');
        valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.classList.remove('hidden');
        valid = false;
    }
    if (!/^[0-9]+$/.test(phone.value)) {
        phoneError.classList.remove('hidden');
        valid = false;
    }

    if (valid) {
        successMessage.classList.remove('hidden');

        // Store event details in local storage
        localStorage.setItem('eventDate', '2025-03-15'); // Store event date

        setTimeout(() => {
            window.location.href = "countdown.html"; // Redirect to countdown page
        }, 1000);
    }
});
