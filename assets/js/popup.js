        (function(){
            emailjs.init("IDwQzKvijr_MJ0945");
        })();
        
        // Show popup
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                document.getElementById('popupoverlay').style.display = 'block';
                document.getElementById('popup').style.display = 'block';
            }, 1000);
        });

        // Close popup
        document.getElementById('popupcloseBtn').addEventListener('click', function() {
            document.getElementById('popupoverlay').style.display = 'none';
            document.getElementById('popup').style.display = 'none';
        });

        // Handle form submission
        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;

            emailjs.send("service_omdzhgb", "template_b4jril6", {
                user_email: email
            }).then(function(response) {
                alert("Email successfully sent!");
                document.getElementById('popupoverlay').style.display = 'none';
                document.getElementById('popup').style.display = 'none';
            }, function(error) {
                alert("Failed to send email: " + JSON.stringify(error));
            });
        });
