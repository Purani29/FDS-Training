const registrationForm =
    document.getElementById("registrationForm");


if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const department =
            document.getElementById("department").value.trim();

        const eventName =
            document.getElementById("event").value;


        const message =
            document.getElementById("registrationMessage");


        /* Check empty fields */

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            department === "" ||
            eventName === ""
        ) {

            message.textContent =
                "Please fill in all the fields.";

            message.style.color = "red";

            return;
        }


        /* Validate phone number */

        if (!/^[0-9]{10}$/.test(phone)) {

            message.textContent =
                "Please enter a valid 10-digit phone number.";

            message.style.color = "red";

            return;
        }


        /* Validate email */

        if (!email.includes("@")) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color = "red";

            return;
        }


        /* Successful registration */

        message.textContent =
            "Registration successful! " +
            name +
            " registered for " +
            eventName +
            ".";

        message.style.color = "green";


        /* Clear form */

        registrationForm.reset();

    });

}