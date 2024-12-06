import { scheduleNew } from "../services/schedule-new.js"

const form = document.querySelector("form")
const ownerName = document.getElementById("owner-name")
const petName = document.getElementById("pet-name")
const description = document.getElementById("description")
const dateSelected = document.getElementById("date-scheduled")
const hourSelected = document.getElementById("hour-scheduled")

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        //Recupera nome do tutor
        const name = ownerName.value.trim()
        if(!name) {
            return alert("Informe o nome do tutor!")
        }
        //Recupera nome do pet
        const pet = petName.value.trim()
        if(!pet) {
            return alert("Informe o nome do pet!")
        }

        //Recupera descrição
        const descriptionText = description.value.trim()

        //Recupera data
        const date = dateSelected.value

        //Recupera hora
        const hour = hourSelected.value

        //Gera um ID
        const id = new Date().getTime()

        console.log(`
        id: ${id},
        cliente: ${name}, 
        nome do pet: ${pet},
        descrição: ${descriptionText},
        data: ${date},
        horario: ${hour}`)

        //Faz o agendamento
        await scheduleNew({
            id,
            name,
            pet,
            descriptionText,
            date,
            hour
        })

        form.reset()
        
        
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}