let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav-list');

menu.onclick = () => {
    navList.classList.toggle('open');

    // Change the icon based on the nav list state
    if (navList.classList.contains('open')) {
        menu.innerHTML = '<i class="fas fa-times"></i>'; 
    } else {
        menu.innerHTML = '<i class="fas fa-bars"></i>'; // 
    }
};

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value.trim();

    // Form validation
    if (!firstName || !lastName || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    // Prepare the Telegram message
    const telegramUsername = 'Hermiand'; // Use only the username without 'https://t.me/'
    const telegramMessage = `New Contact Form Submission:
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Reason: ${reason || 'Not selected'}
        Message: ${message}`;

    // Encode the message for URL compatibility
    const encodedMessage = encodeURIComponent(telegramMessage);

    // Open Telegram with the pre-filled message
    window.open(`https://t.me/${telegramUsername}?text=${encodedMessage}`, '_blank');

    // Show success message
    alert('Thank you for contacting me! Your message will be sent shortly.');
    document.getElementById('contact-form').reset(); // Reset the form
});
document.getElementById('hire-me-email-button').addEventListener('click', () => {
    const emailSubject = encodeURIComponent('Hiring Inquiry');
    const emailBody = encodeURIComponent('Hi, I would like to discuss hiring you for a project.');

    // Open the user's default email client with a pre-filled message
    window.location.href = `mailto:your-email@example.com?subject=${emailSubject}&body=${emailBody}`;
});
