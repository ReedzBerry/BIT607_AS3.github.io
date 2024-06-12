document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Validate form data
        if (!date || !time || !guests || !name || !phone || !email) {
            alert('Please fill in all fields');
            return;
        }

        // Create a reservation object
        const reservation = {
            date: date,
            time: time,
            guests: guests,
            name: name,
            phone: phone,
            email: email
        };

        // Get existing reservations from local storage
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

        // Add the new reservation
        reservations.push(reservation);

        // Save updated reservations back to local storage
        localStorage.setItem('reservations', JSON.stringify(reservations));

        // Clear the form
        form.reset();

        // Provide feedback to the user
        alert('Reservation successfully submitted!');
    });
});
