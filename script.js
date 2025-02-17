// JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('form');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const appointment = document.getElementById('appointment').value;
        const hour = document.getElementById('hour').value; // Capture hour input

        // Here you can handle the data as needed, e.g., send it to a server or display it
        alert(`Booking Details:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nAppointment: ${appointment} at ${hour}:00`);
        
        // Optionally, you can submit the form if needed
        // bookingForm.submit();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bookingButtons = document.querySelectorAll('.book-button');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Booking functionality to be implemented.');
        });
    });
});
