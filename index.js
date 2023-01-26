const numbers = [".one", ".two", ".three", ".four", ".five", ".six", ".seven", ".eight", ".nine", ".zero", ".dot"]
let result = document.querySelector(".result")

const del = document.querySelector(".c")
const back = document.querySelector(".del")
const percent = document.querySelector(".percentage")
const division = document.querySelector(".division")
const mult = document.querySelector(".mult")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const equal = document.querySelector(".equal")
const invert = document.querySelector("invert")

for (let num of numbers) {
    num = document.querySelector(num)
    num.addEventListener("click", () => {
        if (result.innerText == "0") {
            result.innerText = num.innerText
        }
        else {
            result.innerText += num.innerText;
        }
    })
}

del.addEventListener("click", () => {
    result.innerText = "0"
})

back.addEventListener("click", () => {
    result.innerText = result.innerText.slice(0, -1)
})

