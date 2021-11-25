export const timeConverter = (unixTimestamp) => {
    const a = new Date(unixTimestamp * 1000);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const month = months[a.getMonth()];
    const date = a.getDate();
    const year = a.getFullYear();

    const time = month + ' ' + date + ', ' + year;
    return time;
}