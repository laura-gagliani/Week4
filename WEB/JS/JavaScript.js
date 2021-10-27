//commento monoriga

//il linguaggio è debolmente tipizzato:

let n = 1
n = "uno"

let isValid = true
isValid = 10

function miaFunzione() {
    console.log("prima di essere dichiarata" + a)
    var a = 2;

    console.log("dopo essere dichiarata" + a)
    console.log("prima di essere dichiarata" + b)

    let b = 3;
    console.log("dopo essere dichiarata" + b)



}
function demoOnLoad() {
    alert("sei finito sul mio sito")
}

function demoOnClick() {
    alert(">:(")
}

function demoOnKeyDown() {
    alert("zitto!!!")
}

function demoOnChange() {
    let element = document.getElementById("role") //dell'elemento devo recupare il valore effettivamente scelto...
    let chosenRole = element.value

    alert ("hai scelto " + chosenRole+ ". sei proprio sicuro??")
}

function checkSelection() {
    let elements = document.getElementsByClassName("checkBox") //così recupero gli elementi (in questo caso solo 1)
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) //se l'elemento checkato è true
            alert("hai selezionato una casella...")
    }

}