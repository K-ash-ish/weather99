function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  let amorpm = date.getHours() > 12 ? "PM" : "AM";
  const time = `${date.getHours()}:${date.getMinutes()} ${amorpm}`;

  return time;
}
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
function formatToUnix(date) {
  const dateArr = date.split("-");
  const timeStamp = Math.floor(
    new Date(`"${dateArr[0]}.${dateArr[1]}.${dateArr[2]}`).getTime() / 1000
  );
  return timeStamp;
}

export { formatTime, formatDate, formatToUnix };
