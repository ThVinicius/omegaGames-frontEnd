function priceBRL(price) {
  return price.toFixed(2).replace(".", ",");
}

function arithmeticMeanRating(arr) {
  let sum = 0;

  if (arr.length === 0) return sum;

  for (const { value } of arr) {
    sum += value;
  }

  return sum / arr.length;
}

export { priceBRL, arithmeticMeanRating };
