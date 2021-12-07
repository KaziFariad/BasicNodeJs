module.exports = (x, y, callBack) => {
  if (x <= 0 || y <= 0) {
    setTimeout(() =>
      callBack(new Error("Rectangle dimensions should be greater than zero: l = "
        + x + ", and b = " + y),
        null),
      2000);
  }
  else
    setTimeout(() => {
      callBack(null, {
        area: () => x * y,
        perimeter: () => 2 * (x + y)
      })
    }, 2000);
}
