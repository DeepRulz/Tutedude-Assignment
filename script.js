function changecolour(colour,id){
    const doc=document.getElementById(id);
    doc.style.backgroundColor = colour;
    if (colour != 'yellow'){
        doc.style.color='white';
    }
}

function changetext() {
    const hello = document.getElementById("name").value
    if (hello != "") {
        document.getElementById("hello").innerText = "Hello, " +hello
    }
    else {
        document.getElementById("hello").innerText = "Hello"
    }
}