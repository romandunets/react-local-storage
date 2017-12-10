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
