function filterForcast(data) {
  const uniqueDatesMap = {};
  data?.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!uniqueDatesMap[date]) {
      uniqueDatesMap[date] = item;
    }
  });

  const uniqueForecasts = Object.values(uniqueDatesMap).slice(0, 5);
  return uniqueForecasts;
}
export function filterForcastByDate(data, date) {
  return data?.list?.find((forcastDt) => {
    return forcastDt.dt_txt.split(" ")[0].split("-")[2] >= date;
  });
}

export default filterForcast;
