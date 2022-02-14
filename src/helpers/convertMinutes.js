export const time = [];
for (let x = 15; x <= 255; x = x + 15) {
  time.push(x);
}

export const timeConvert = (min) => {
  const num = min;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if (rhours === 0) {
    return rminutes + 'min';
  }
  if (rminutes === 0) {
    return rhours + 'h';
  } else {
    return rhours + 'h:' + rminutes + 'min';
  }
};
