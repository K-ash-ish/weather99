function toDegreesMinutesAndSeconds(coordinate) {
  let absolute = Math.abs(coordinate);
  let degrees = Math.floor(absolute);
  let minutesNotTruncated = (absolute - degrees) * 60;
  let minutes = Math.floor(minutesNotTruncated);
  let seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return `${degrees}°${minutes}'${seconds}"`;
}
function formatCoordinates(lat = 0, lng = 0) {
  let latitude = toDegreesMinutesAndSeconds(lat);
  let latitudeCardinal = lat >= 0 ? "N" : "S";

  let longitude = toDegreesMinutesAndSeconds(lng);
  let longitudeCardinal = lng >= 0 ? "E" : "W";
  return `${latitude}${latitudeCardinal} & ${longitude}${longitudeCardinal}`;
}

export default formatCoordinates;
