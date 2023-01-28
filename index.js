const numbers = [".one", ".two", ".three", ".four", ".five", ".six", ".seven", ".eight", ".nine", ".zero", ".dot"]
const result = document.querySelector(".result")

const del = document.querySelector(".c")
const back = document.querySelector(".del")
const division = document.querySelector(".division")
const mult = document.querySelector(".mult")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const equal = document.querySelector(".equal")
const invert = document.querySelector(".invert")

let partial = ["0"]

function update() {
    if (partial[partial.length - 1] === "") {
        partial[partial.length - 1] = "0"
    }

    if (partial.length == 0) {
        partial.push("0")
    }

    console.log(partial);

    let text = ""
    for (let item of partial) {
        text += item+" "
    }

    result.innerText = text.trim()
}

for (let num of numbers) {
    num = document.querySelector(num)
    num.addEventListener("click", () => {
        if (partial[partial.length - 1] == "0") {
            partial[partial.length - 1] = num.innerText
        }
        else {
            partial[partial.length - 1] += num.innerText;
        }

        update()
    })
}

del.addEventListener("click", () => {
    partial.length = 0
    partial.push("0")
    update()
})

back.addEventListener("click", () => {
    if (partial[partial.length - 1] == "0") {
        partial.pop()
        partial.pop()
        update()
        return
    }

    partial[partial.length - 1] = partial[partial.length - 1].slice(0, -1)
    update()
})

division.addEventListener("click", () => {
    partial.push("/")
    partial.push("")
    update()
})

mult.addEventListener("click", () => {
    partial.push("x")
    partial.push("")
    update()
})

minus.addEventListener("click", () => {
    partial.push("-")
    partial.push("")
    update()
})

plus.addEventListener("click", () => {
    partial.push("+")
    partial.push("")
    update()
})

invert.addEventListener("click", () => {
    if (partial[partial.length - 1].startsWith("-")){
        partial[partial.length - 1] = partial[partial.length - 1].replace("-", "")

    }

    else {
        partial[partial.length - 1] = "-" + partial[partial.length - 1]
    }

    update()
})

equal.addEventListener("click", () => {
    for (let i in partial) {
        if (!isNaN(partial[i])) partial[i] = Number(partial[i])
    }

    while (partial.length > 1) {
        for (let sig of partial) {
            let i = partial.indexOf(sig)

            if (sig == "x") {
                partial.splice(i+2, 0 ,partial[i-1] * partial[i + 1])
                partial.splice(i-1, 3)
                continue
            }

            if (sig == "/") {
                partial.splice(i+2, 0 ,partial[i-1] / partial[i + 1])
                partial.splice(i-1, 3)
                continue
            }
        }
    }
    update()
})
