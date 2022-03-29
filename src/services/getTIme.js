export default function calcTime(time) {
  const timestamp = new Date().getTime();
  const date = new Date(time).getTime();
  const elapsedTime = Math.abs(timestamp - date);
  const diffHours = elapsedTime / (1000 * 60 * 60);

  if (diffHours >= 24) {
    return Math.ceil(diffHours / 24) + " day";
  }
  if (diffHours < 1) {
    return elapsedTime / (1000 * 60) + " minutes";
  } else {
    return Math.round(diffHours) + " hours";
  }
}
