document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            localStorage.removeItem('bookfirstName');
            localStorage.removeItem('appointmentType');
            const firstName = document.getElementById('bookfirstname').value;
            const appointmentType = document.getElementById('appointment_type').value;
            localStorage.setItem('bookfirstName', firstName);
            localStorage.setItem('appointmentType', appointmentType);
            window.location.href = "submit.html";
        });

        form.addEventListener('submit', function (event) {
            const appointmentDate = document.getElementById('appointment_date').value;
            const today = new Date().toISOString().split('T')[0];

            if (appointmentDate < today) {
                event.preventDefault();
                alert('Please select a future date for your appointment.');
            }
        });
    }

    // Subscription form handling
    const subscribeForm = document.getElementById('subscribeForm');
    if (localStorage.getItem('formSubmitted')) {
        document.querySelector('.subscribe').innerHTML = '<div class="final-message"><i class="fa-solid fa-star"></i><p> Thank you for subscribing! </p><i class="fa-solid fa-star"></i></div>';
    } else if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            document.querySelector('.subscribe').innerHTML = '<div class="final-message"><i class="fa-solid fa-star"></i><p> Thank you for subscribing! </p><i class="fa-solid fa-star"></i></div>';
            localStorage.setItem('formSubmitted', 'true');
        });
    }

    // Accordion handling
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            button.classList.toggle('active');
            accordionContent.style.display = button.classList.contains('active') ? 'block' : 'none';
        });
    });

    // Display stored data
    const displayNameElement = document.getElementById('display-name');
    const displayAppointmentType = document.getElementById('display-appointment');
    if (displayNameElement && displayAppointmentType) {
        const firstName = localStorage.getItem('bookfirstName');
        const appointmentType = localStorage.getItem('appointmentType');
        displayNameElement.textContent = firstName;
        displayAppointmentType.textContent = appointmentType;
    }
});
