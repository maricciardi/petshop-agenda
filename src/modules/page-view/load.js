import { scheduleFetchByDay } from "../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import dayjs from "dayjs"

//Função para buscar os agendamentos do dia
export async function schedulesDay(selectedDate) {
    //Verifica se selectedDate existe
    if(selectedDate) {
        //Adiciona o ouvinte de evento change para o input de data
        selectedDate.addEventListener('change', async function() {
    
            //Captura o valor do input de data
            const date = selectedDate.value
                
            //Busca os agendamentos na API 
            const dailySchedules = await scheduleFetchByDay({ date })
            console.log(date)
            console.log(dailySchedules)

            //Mostra os agendamentos na página
            schedulesShow({ dailySchedules })
        })
    } else {
        //Se elemento de data nao encontrado
        const date = dayjs(new Date()).format("YYYY-MM-DD")
        
        // Busca os agendamentos na API
        scheduleFetchByDay({ date }).then(dailySchedules => {
            console.log(date)
            console.log(dailySchedules);
            
            // Mostra os agendamentos na página
            schedulesShow({ dailySchedules });
        })
    }
}

//Função executada quando o DOM for carregado
document.addEventListener("DOMContentLoaded", async function() {
    let selectedDate = document.getElementById("date")

    const date = selectedDate.value
    console.log(`data de inicio: ${date}`)

    //Busca os agendamentos na API 
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)
    
    schedulesDay(selectedDate)

    //Mostra os agendamentos na página
    schedulesShow({ dailySchedules })
})




