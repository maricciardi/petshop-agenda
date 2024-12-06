import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }){
    try {
        //Faz requisição para obter os agendamentos
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //Converte a resposta para JSON
        const data = await response.json()

        //Converte a data selecionada para dayjs (apenas o dia)
        const selectedDate = dayjs(date).startOf('day')

        //Filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule) => {

            //Cria uma data completa com data e hora
            const scheduleDateTime = dayjs(`${schedule.date}T${schedule.hour}`).startOf('day')

            //Compara se a data do agendamento é o mesmo dia que o selecionado
            return selectedDate.isSame(scheduleDateTime, "day")
        }) 
        
        return dailySchedules
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado.")
    }
}

