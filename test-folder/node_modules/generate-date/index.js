function getDay(dayNumber)  {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNumber];
}

const getDates = (numberOfDays) => {
    let today = new Date();
    let dates = [];

    if (typeof !numberOfDays==="number") {
        return [{ result:"Input shoud by type of number"}];
    }
    for (let index = 0; index < 90; index++) {
        let futureDate = new Date();
        futureDate.setDate(today.getDate() + index);
        dates.push({
            id: index,
            date: futureDate.getDate().toLocaleString(),
            day: getDay(futureDate.getDay())
        });
    }
    return dates;
}

module.exports = getDates;