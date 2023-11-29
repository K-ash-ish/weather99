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

export { formatTime, formatDate };
