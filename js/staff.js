document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
        return;
    }

    const roster = [
        { staff: 'John Toa', dates: ['2024-06-01', '2024-06-04', '2024-06-05', '2024-06-08', '2024-06-14'] },
        { staff: 'Hana Jones', dates: ['2024-06-04', '2024-06-05', '2024-06-11', '2024-06-12'] },
        { staff: 'Anahera Holmes', dates: ['2024-06-05','2024-06-07','2024-06-08', '2024-06-12', '2024-06-14','2024-06-15'] },
        // Add more staff members and their dates as needed
    ];

    // Populate staff list
    const staffList = document.getElementById('staffList');
    roster.forEach(staff => {
        const li = document.createElement('li');
        li.textContent = staff.staff;
        li.addEventListener('click', () => filterRoster(staff));
        staffList.appendChild(li);
    });

    // Function to filter roster by staff object
    function filterRoster(staff) {
        updateCalendar(staff.dates);
    }

    // Function to update Flatpickr calendar
    function updateCalendar(dates) {
        const calendar = document.getElementById('calendar')._flatpickr;
        calendar.set('enable', dates);
    }

    // Initialize Flatpickr
    flatpickr("#calendar", {
        inline: true,
        defaultDate: "today",
        enable: roster.flatMap(entry => entry.dates)
    });

    // Populate contact details
    const contactList = document.getElementById('contactList');
    const contacts = [
        { name: 'John Toa', phone: '123-456-7890' },
        { name: 'Hana Jones', phone: '987-654-3210' },
        { name: 'Anahera Holmes', phone: '555-555-5555' },
        // Add more contacts as needed
    ];

    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.phone}`;
        contactList.appendChild(li);
    });
});
