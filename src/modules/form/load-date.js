import dayjs from "dayjs"

document.addEventListener("DOMContentLoaded", function() {
    const selectedDate = document.getElementById("date")
    const scheduledDate = document.getElementById("date-scheduled")
    const scheduledHour = document.getElementById("hour-scheduled")

    //Data atual
    const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
    //Horário atual
    const inputNow = dayjs(new Date()).format("HH:mm")

    //Carrega data atual na página
    selectedDate.value = inputToday

    //Carrega data e hora atual no form
    scheduledDate.value = inputToday
    scheduledHour.value = inputNow
    //Define data e hora mínima como hoje
    scheduledDate.min = inputToday
    scheduledHour.min = inputNow


    //Para permitir mais horários conforme a data selecionada
    function adjustHourLimits() {
        const newScheduledDate = dayjs(scheduledDate.value)

        //Se a data selecionada for hoje, hora mínima será hora atual
        if (newScheduledDate.isSame(dayjs(), "day")) {
            scheduledHour.min = inputNow
        } else {
            //Se for um dia futuro pode qualquer hora
            scheduledHour.removeAttribute("min")
        }
    }

    //Adiciona evento na data selecionada
    scheduledDate.addEventListener("change", adjustHourLimits)

    adjustHourLimits()
})
