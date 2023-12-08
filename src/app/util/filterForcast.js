function filterForcast(data) {
  const uniqueDatesMap = {};
  data?.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!uniqueDatesMap[date]) {
      uniqueDatesMap[date] = item;
    }
  });

  const uniqueForecasts = Object.values(uniqueDatesMap).slice(1, 6);
  return uniqueForecasts;
}

export default filterForcast;
