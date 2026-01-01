const colorPicker = document.getElementById("color-picker")
const hex = document.getElementById("color-hex")
const mode = document.getElementById("mode")
let colors = []

colorPicker.addEventListener('submit', (e) => {
    e.preventDefault()

    const colorPickerForm = new FormData(colorPicker)

    const colorHex = colorPickerForm.get("color-hex")
    const mode = colorPickerForm.get("mode")
    
    fetchColors(mode, colorHex.substring(1))
})

function fetchColors(mode, hex) {
    colors = []
    fetch(`https://www.thecolorapi.com/scheme?mode=${mode}&hex=${hex}`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach((color) => colors.push(color.hex.value))
            renderColors()
        })
}

function renderColors() {
    let colorHtml = ''
    colors.forEach((color) => {
        colorHtml += `
            <div class="color" data-color=${color} style="background-color: ${color};">
                <p class="color-code">${color}</p>
            </div>
        `
    })
    document.querySelector(".colors").innerHTML = colorHtml
}

fetchColors(mode.value, hex.value.substring(1))