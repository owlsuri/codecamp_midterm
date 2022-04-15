export const getDate = (date) => {
    const newDate = new Date(date)
    const yyyy = newDate.getFullYear()
    const month = newDate.getMonth()+1
    const mm = String(month).padStart(2,"0")    
    const today = newDate.getDate()
    const dd = String(today).padStart(2, "0");
    const hh = ('0' + newDate.getHours()).slice(-2);
    const bb = ('0' + newDate.getMinutes()).slice(-2);

    return `${yyyy}.${mm}.${dd}. ${hh}:${bb}`
}