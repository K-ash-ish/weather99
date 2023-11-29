function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default formatDate;
