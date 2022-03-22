function compare() {
    let pw1 = document.getElementById("password");
    let pw2 = document.getElementById("confirm_password");
    if(pw1.value != pw2.value){
        pw1.classList.add("error");
        pw2.classList.add("error");
        let temp = document.querySelector(".no_match");
        temp.textContent = "* Passwords do not match"
    }
    else{
        pw2.classList.remove("error");
        pw1.classList.remove("error");
        let temp = document.querySelector(".no_match");
        temp.textContent = "";
    }
}