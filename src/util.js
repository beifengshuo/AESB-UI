//时间转成时间戳 UTCTime
export const getUTCTime = (now) =>{
    let year = now.getUTCFullYear();
    let month = now.getUTCMonth();
    let date = now.getUTCDate();
    let hours = now.getUTCHours();
    let minutes = now.getMinutes();
    let seconds = now.getUTCSeconds();
    let ms = now.getUTCMilliseconds(); 
    return Date.UTC(year, month, date, hours, minutes, seconds, ms);
}
