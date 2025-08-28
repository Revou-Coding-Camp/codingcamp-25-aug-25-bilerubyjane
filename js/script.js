document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const welcomeMessage = document.getElementById('welcome-message');
    const submittedMessagesList = document.getElementById('submitted-messages-list');
    const currentTimeElement = document.getElementById('current-time');

    // Display current time
    function updateCurrentTime() {
        const now = new Date();
        currentTimeElement.textContent = `Current Time: ${now.toLocaleString()}`;
    }
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000); // Update every second

    // Handle form submission
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('full-name').value;
        const dob = document.getElementById('date-of-birth').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

        if (message.trim() === '') {
            alert('Pesan tidak boleh kosong!');
            return;
        }

        // Update welcome message with the name
        welcomeMessage.textContent = `Hi ${fullName}, Welcome To Website`;

        // Create and display the submitted message
        const submittedMessageContent = `
            <p><strong>Nama:</strong> ${fullName}</p>
            <p><strong>Tanggal Lahir:</strong> ${dob}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;

        submittedMessagesList.innerHTML = submittedMessageContent;

        // Reset the form
        messageForm.reset();
    });
});