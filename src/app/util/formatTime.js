function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  let amorpm = date.getHours() > 12 ? "PM" : "AM";
  const time = `${date.getHours()}:${date.getMinutes()} ${amorpm}`;

  return time;
}

export default formatTime;
