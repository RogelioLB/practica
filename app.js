let button = document.getElementById("button-enviar")
let input = document.getElementById("input-name")
button.addEventListener('click', (e)=> {
    alert(`Tu nombre es ${input.value} `)
})