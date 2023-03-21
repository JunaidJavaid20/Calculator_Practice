function foo(a){
    var ubaid = document.getElementById("inp")
    ubaid.value += a
}

function result(){
    var junaid = document.getElementById("inp")
    junaid.value = eval(junaid.value)
}

function clr(){
    document.getElementById("inp").value = ""
}