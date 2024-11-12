let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total")
let setEl = document.getElementById("set")
let count = 0;
let count2 = 0

let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    count2++
    total += count
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr 
    setEl.textContent =  ` (${count2} sets)`
    totalEl.textContent = `Total: ${total} push-ups`
    countEl.textContent = 0
    count = 0
}
