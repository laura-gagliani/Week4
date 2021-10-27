


function welcome() { //se l'utente è già loggato gli dice benvenuto ciccio, altrimenti fa loggare e poi dice il benvenuto
    let storedName = localStorage.getItem('name')

    if (storedName != null)
        alert("ciao " + storedName+", bentornata")
    else {
        let insertedName = prompt("inserisci il tuo nome!!")
        localStorage.setItem("name", insertedName)
        alert("ciao " +insertedName)
    }
}