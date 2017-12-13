export function getRandomData(numberOfBlocks, sizeOfBlocks) {
  var data = [];
  for (var i = 0; i < numberOfBlocks; i++) {
    data[i] = generateRandomString(sizeOfBlocks);
  }
  return data;
}

export function generateRandomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function getRandomSetOfKeys(number) {
  var keys = [];
  for (var i = 0; i < number; i++) {
    keys[i] = getRandomNumber(0, number);
  }
  return keys;
}

export function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
