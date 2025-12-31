const colorInput = document.querySelector("input[type=color]")

console.log(colorInput.value)

fetch("https://www.thecolorapi.com/scheme?mode=monochrome&hex=000000")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

function renderColors() {
    let colorHtml = ''
    for (let i = 0; i < 5; i++) {
        colorHtml += `
            <div class="color">
                <p class="color-code">#123456</p>
            </div>
            
        `
    }
    document.querySelector(".colors").innerHTML = colorHtml
}

renderColors()