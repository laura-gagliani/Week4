
//la funzione deve verificare l'avvenuta compilazione di entrambi i campi username e password
//se sì allora deve FAR VEDERE IL TASTO LOGIN 

//1. intanto recupero gli elementi appartenenti alla classe "input"
//1.b recupero il tasto login
//2. poi li guardo: sono effettivamente compilati?

function changeToLogin() {
    let inputs = document.getElementsByClassName("logininput")
    let loginButton = document.querySelector("input[type='submit']")

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            loginButton.disabled = true                 //il tasto login resta disabled
            return
        }
        loginButton.disabled = false
        }
}

function saveData() {
    let username = document.getElementsByClassName("logininput")[0].value
    let password = document.getElementsByClassName("logininput")[1].value

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

}

function hideForm() {
    let form = document.querySelector("form")
    form.style.display = "none"  //come se fosse style="display:none" inhtml/css

    //poi devo far comparire il tasto di logout
    let logoutButton = document.getElementById("logoutButton")
    logoutButton.style.display =""

}

function checkLogin() {
    //l'idea è: gli faccio recuperare i dati dal local storage: se ce ne sono nascondo la form e faccio vedere solo il pigio logout
    // altrimenti fa il login come normale (form visibile)

    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")

    if (username != null && password != null) {
        hideForm()
    }
    
}


function logout() {
    localStorage.clear()
    let form = document.querySelector("form")
    form.style.display = ""
    let logoutButton = document.getElementById("logoutButton")
    logoutButton.style.display = "none"
}