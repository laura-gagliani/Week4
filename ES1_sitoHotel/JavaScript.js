let logged = false;

function openForm() {
    let form = document.getElementById("loginPopup");
    form.style.display = "block";
}


function closeForm() {
    let form = document.getElementById("loginPopup")
    form.style.display = "none"
}

function saveData() {
    let username = document.getElementsByClassName("logininput")[0].value
    let password = document.getElementsByClassName("logininput")[1].value

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

}


function hideLoginButton() {
    let form = document.getElementById("loginPopup")
    form.style.display = "none"  

    let loginButton = document.getElementById("loginButton")
    loginButton.disabled = true

    let logoutButton = document.getElementById("logoutButton")
    logoutButton.hidden = false

}

function hideLogoutButton() {
    let logoutButton = document.getElementById("logoutButton")
    logoutButton.hidden = true
}

function checkLogin() {

    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")

    if (username != null && password != null) {
        hideLoginButton()
        logged = true
    }
    else 
        hideLogoutButton()
    }

function welcome() {
    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")

    if (username != null && password != null) {
        alert("Ciao " + username)
    }

    else {
        alert("Benvenuto!")

    }

}

function logout() {
    localStorage.clear()
    let loginButton = document.getElementById("loginButton")
    //loginButton.style.display = ""
    loginButton.disabled = false

    let logoutButton = document.getElementById("logoutButton")
    //logoutButton.style.display = "none"
    logoutButton.hidden = true

    logged = false

}


function checkLoginReservation() {
    if (logged == false) {
        alert("Attenzione! fai il login")
        let linkprenot = document.getElementsByClassName("linkprenot")
        linkprenot.disabled = true
    }
    else {
        //reply_click(this.id)

        window.location.href = 'Prenota.html'
    }
}

function reply_click(clicked_id) {
    alert(clicked_id);
}

function memorizeID() {

}
