$(document).ready(function () {
    $("#contactForm").on("submit", function(e)
    {
        e.preventDefault();      //This will prevent from form submission
        
        //Performing validation
        let isValid = true;

        // Validation for name
        const name = $("#name").val().trim();
        if(!name)
            {
                $("#nameError").text("Name is required.");    //when nothing is filled in the text area
                isValid = false;
            }
            else
            {
                $("#nameError").text("");
            }

        //Validation for Email
        const email = $("#email").val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email)
        {
            $("#emailError").text("Email is required.");
            isValid = false;
        }
        else if(!emailRegex.test(email)) 
            {
                $("#emailError").text("Invalid Email Format.");
                isValid = false;
            }
            else{
                $("#emailError").text("");
            }

            //Validation for Phone number
        const phone = $("#phone").val().trim();
        const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if(!phone)
        {
            $("#phoneError").text("Phone Number is required.");
            isValid = false;
        }
        else if(!emailRegex.test(email)) 
            {
                $("#phoneError").text("Invalid Phone number Format. It should be in 123-456-7890 format.");
                isValid = false;
            }
            else{
                $("#phoneError").text("");
            }

            // Validation for subject
            const subject = $("#subject").val().trim();
        if(!subject)
            {
                $("#subjectError").text("Subject is required.");
                isValid = false;
            }
            else
            {
                $("#subjectError").text("");
            }

            // Validation for  department selection
            const department = $("#department").val().trim();
        if(!department)
            {
                $("#departmentError").text("Department selection is required.");
                isValid = false;
            }
            else
            {
                $("#departmentError").text("");
            }

            // Validation for  preferred contact selection
            const contact = $("#preferred-contact").val().trim();
        if(!contact)
            {
                $("#contactError").text("Contact selection is required.");
                isValid = false;
            }
            else
            {
                $("#contactError").text("");
            }

            // Validation for  country
            const country = $("#country").val().trim();
        if(!country)
            {
                $("#countryError").text("Country is required.");
                isValid = false;
            }
            else
            {
                $("#countryError").text("");
            }

            // Validation for  City
            const city = $("#city").val().trim();
        if(!city)
            {
                $("#cityError").text("City is required.");
                isValid = false;
            }
            else
            {
                $("#cityError").text("");
            }

            // Validation for \Message
            const message = $("#message").val().trim();
        if(!message)
            {
                $("#messageError").text("message is required.");
                isValid = false;
            }
            else
            {
                $("#messageError").text("");
            }

            // when all fields are valid then it will show this below message

            if(isValid)
            {
                alert("Thankyou for contacting us! Your message has been sent. A Representative will contact you shortly.");

                // this will reset the form after the details got submitted
                $("#contactForm")[0].reset();
            }

    });
});