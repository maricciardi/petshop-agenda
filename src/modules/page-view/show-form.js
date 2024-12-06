const form = document.querySelector("form")
const showForm = document.querySelectorAll('.showForm')
const closeForm = document.getElementById("close")

const intro = document.querySelector('#intro')
const agenda = document.querySelector('#agenda')
const buttonArea = document.querySelector('#button-area')
const buttonDesktop = document.querySelector('.desktop-only')

showForm.forEach(function(button) {
    button.addEventListener("click", function() {
        form.style.display = 'block'
        intro.style.filter = 'blur(3px)'
        agenda.style.filter = 'blur(3px)'
        buttonArea.style.filter = 'blur(3px)'
        buttonDesktop.style.display = 'none'
    })
})

closeForm.addEventListener("click", function() {
    form.style.display = 'none'
    intro.style.filter = 'none'
    agenda.style.filter = 'none'
    buttonArea.style.filter = 'none'
    buttonDesktop.style.display = 'block'
})


