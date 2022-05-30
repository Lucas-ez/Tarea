const area = document.querySelector("textarea")
const cont = document.querySelector("#contador")


area.addEventListener("keypress", (e) => {
    let i = area.value.length
    if(i < 100)
        cont.innerHTML = ++i
    else
        e.preventDefault()
})

area.addEventListener("keydown", (e) => {
    let i = area.value.length
    
    if(e.key === 'Backspace' && i > 0)
        cont.innerHTML = --i
})