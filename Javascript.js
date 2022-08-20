window.onload = pageload;
// onloadfunction//
function pageload() {
    "use strict";
    // taking the value from classes and putting it into the variable//
    var form = document.forms.formname;
    var hiddenmsg = document.querySelector(".hidden");
    var showname = document.querySelector(".hidden__span1");
    var showpassword = document.querySelector(".hidden__span2");


    //taking the value from the form and inserting into the variable//
    var username = form.form__name;
    var MyPassword = form.form__pass;
    ////hidding the outputdiv on load///////
    hiddenmsg.style.display = "none";
    /////eventlistner////////
    form.onsubmit = validation;
    //Creating function for validation and to show the output div //
    function validation() {
        //if statement validating  box//
        if (username.value === "" || username.value === null) {
            username.style.background = "red";
            // name.classList.add("class");/Extra challenge/
            username.focus();
            return false;

        } else {
            username.style.background = "white";
        }
        if (MyPassword.value === "" || MyPassword.value === null) {
            MyPassword.style.background = "red";
            // password.classList.add("class");/Extra challenge/
            MyPassword.focus();
            return false;
        } else {
            MyPassword.style.background = "white";
        }
        //showing the hidden div with innerHTml values/
        hiddenmsg.style.display = "block";
        showname.innerHTML = username.value;
        showpassword.innerHTML = MyPassword.value;
        //Reseting the form///
        form.reset();
        return false;
    }
}