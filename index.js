countEl=document.getElementById("count-el")
let count=0
function increment() {
    count++
    countEl.innerText=count
    console.log(count);
}
function save(){
    console.log(count)
    let countStr=count+" - "
    saveEl=document.getElementById("save-el")
    saveEl.textContent+=" "+countStr
    let reset=document.getElementById("count-el")
    reset.innerText=+"0"
    count=0
}
save()
