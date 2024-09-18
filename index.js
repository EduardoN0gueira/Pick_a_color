const btn = document.getElementById("btn")
const colors = ["Red", "Blue", "Yellow", "Purple", "Green", "Black"]
const color = document.querySelector('.color')


btn.addEventListener('click', function (){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]
})

function getRandomColor (){
    return Math.floor(Math.random() * colors.length)
}
