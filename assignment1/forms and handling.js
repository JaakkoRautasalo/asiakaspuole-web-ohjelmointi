document.addEventListener("DOMContentLoaded", function() {

    // Making sure the password fields match
    let form = document.getElementById("tiedot-form");
    let password = document.getElementById("password");
    let passwordRepeat = document.getElementById("passwordRepeat");

    password.addEventListener("input", validatePasswords);
    passwordRepeat.addEventListener("input", validatePasswords);
    function validatePasswords() {
        if (password.value !== passwordRepeat.value) {
            passwordRepeat.setCustomValidity("Käytä vaadittua muotoa.");
        } else {
            passwordRepeat.setCustomValidity("");
        }
    }


    // Height range and number input linking
    let rangeHeight = document.getElementById("rangeHeight");
    let numberHeight = document.getElementById("numberHeight");
    rangeHeight.addEventListener("input", function() {
        numberHeight.value = rangeHeight.value;
    });
    numberHeight.addEventListener("input", function() {
        rangeHeight.value = numberHeight.value;
    });


    // Results priting
    form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            return;
        }
        event.preventDefault();

        let fullname = document.getElementById("fullname").value;
        let password1 = password.value;
        let password2 = passwordRepeat.value;
        let genders = document.getElementsByName("gender");
        let selectedGender = "";
        for (let i = 0; i < genders.length; i++) {
            if (genders[i].checked) {
                selectedGender = genders[i].value;
                break;
            }
        }
        
        let hobbiesElements = document.getElementsByName("hobbies");
        let selectedHobbies = [];
        for (let i = 0; i < hobbiesElements.length; i++) {
            if (hobbiesElements[i].checked) {
                selectedHobbies.push(hobbiesElements[i].value);
            }
        }

        let birthdate = document.getElementById("datepicker").value;
        let height = numberHeight.value;
        let color = document.getElementById("color").value;
        let country = document.getElementById("homeCountry").value;
        let profession = document.getElementById("professionList").value;
        let message = document.getElementById("message").value;

        let resultsText =   "Results: \n" +
                            "Full Name: " + fullname + "\n" +
                            "Password1: " + password1 + "\n" +
                            "Password2: " + password2 + "\n" +
                            "Gender: " + selectedGender + "\n" +
                            "Hobbies: " + selectedHobbies.join(", ") + "\n" +
                            "Birthdate: " + birthdate + "\n" +
                            "Height: " + height + "\n" +
                            "Favorite Color: " + color + "\n" +
                            "Country: " + country + "\n" +
                            "Profession: " + profession + "\n" +
                            "Message: " + message;

        document.getElementById("result").textContent = resultsText;
    });
});
