document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.onclick = async (event) => {
        event.preventDefault();

        const name = document.querySelector('#name-input').value.trim();
        const email = document.querySelector('#email-input').value.trim();
        const phoneNumber = document.querySelector('#phone-input').value.trim();
        const password = document.querySelector('#pass-input').value.trim();

        // Data cleaning: replace 2 or more white spaces with one
        const cleanedName = name.replace(/\s{2,}/, " ");

        // Data validation
        const errors = [];

        if (!cleanedName.match(/^\p{L}+\s\p{L}+$/)) {
            errors.push("Name is missing or too short");
        }
        if (!email.match(/^[\w-\.]+@[\w-\.]+\.[\w]+$/)) {
            errors.push("Invalid E-mail address");
        }
        if (!phoneNumber.match(/^[+0][0-9\s-]{9,}$/)) {
            errors.push("Invalid phone number");
        }

        if (errors.length > 0) {
            const errorBox = document.querySelector("#errors");
            errorBox.innerHTML = '';

            errors.forEach((error) => {
                errorBox.innerHTML += `<div>${error}</div>`;
            });
            return;
        }

        // Sending data
        const data = {
            name: cleanedName,
            email,
            phoneNumber,
            password
        };
        const response = fetch('/api/sign-up', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        if (response.ok) {
            // Handle successful submit
        } else {
            // Handle error
        }
    };
});