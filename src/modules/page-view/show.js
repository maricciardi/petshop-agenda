//Seleciona as sessões manhã, tarde e noite
const periodMorning = document.getElementById("morning-list")
const periodAfternoon = document.getElementById("afternoon-list")
const periodNight = document.getElementById("night-list")

export function schedulesShow({ dailySchedules }){
    try {
        //Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //Organiza os agendamentos por data e hora
        const appointments = dailySchedules

        appointments.sort((a,b) => {
            //Compara data
            const dateA = new Date(a.date)
            const dateB = new Date(b.date)
            if (dateA < dateB) return -1
            if (dateA > dateB) return 1

            //Se data é igual, compara hora
            const [hourA, minuteA] = a.hour.split(":").map(num => parseInt(num, 10))
            const [hourB, minuteB] = b.hour.split(":").map(num => parseInt(num, 10))
            if (hourA < hourB) return -1
            if (hourA > hourB) return 1

            //Se hora é igual, compara minuto
            return minuteA - minuteB
        })

        //Renderiza os agendamentos por período
        appointments.forEach((schedule) => {
            const item = document.createElement("li")

            //Adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id)

            //Cria linha do item
            const itemLine = document.createElement("div")
            itemLine.classList.add("line2")

            //Cria a div com 3 colunas
            const div = document.createElement("div")
            div.classList.add("col-3")
                //Coluna 1
                const timeScheduled = document.createElement("div")
                timeScheduled.classList.add("time-scheduled")
                const time = document.createElement("p")
                time.textContent = schedule.hour
                const petName = document.createElement("p")
                petName.textContent = `${schedule.pet} `
                const owner = document.createElement("span")
                owner.textContent = `/ ${schedule.name}`
                petName.append(owner)
                timeScheduled.append(time)
                timeScheduled.append(petName)

                //Coluna 2
                const toDo = document.createElement("div")
                toDo.classList.add("to-do")
                const description = document.createElement("p")
                description.textContent = schedule.descriptionText
                toDo.append(description)

                //Coluna 3
                const remove = document.createElement("div")
                remove.classList.add("remove")
                const removeText = document.createElement("p")
                removeText.textContent = "Remover agendamento"
                remove.append(removeText)

                div.append(timeScheduled)
                div.append(toDo)
                div.append(remove)

            //Adiciona a linha e div
            item.append(itemLine)
            item.append(div)

            //Obtém somente a hora
            const hour = parseInt(schedule.hour.split(":")[0], 10) 

            //Renderiza o agendamento na sessão (manhã, tarde ou noite)
            if(hour < 12){
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour < 18){
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
        })

    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}