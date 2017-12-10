import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';

export function testLocalStorage() {
  return function(dispatch) {
  	console.log("Testing started");
  	var results = {};

  	results.insertLarge = insertLocalStorageTest(2000, 512);
	results.insertMedium = insertLocalStorageTest(2000, 64);
  	results.insertSmall = insertLocalStorageTest(2000, 8);

  	results.clear = clearLocalStorageTest(2000, 512);
  	
  	console.log(results);
    dispatch({ type: types.TEST_LOCAL_STORAGE, payload: { results: results } });
  }
}

function insertLocalStorageTest(numberOfBlocks, sizeOfBlocks) {
  var data = getRandomData(numberOfBlocks, sizeOfBlocks);
  
  var start = new Date().getTime();
  for (var i = 0; i < numberOfBlocks; i++) {
    localStorage.setItem(i, data[i]);
  }
  var end = new Date().getTime();

  return end - start;
}

function clearLocalStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();

  var data = getRandomData(numberOfBlocks, sizeOfBlocks);
  for (var i = 0; i < numberOfBlocks; i++) {
    localStorage.setItem(i, data[i]);
  }

  var start = new Date().getTime();
  for (var i = 0; i < numberOfBlocks; i++) {
    localStorage.removeItem(i);
  }
  var end = new Date().getTime();

  return end - start;
}

function getRandomData(numberOfBlocks, sizeOfBlocks) {
  var data = [];
  for (var i = 0; i < numberOfBlocks; i++) {
    data[i] = generateRandomString(sizeOfBlocks);
  }
  return data;
}

function generateRandomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
