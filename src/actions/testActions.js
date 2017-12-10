import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';

export function testLocalStorage() {
  return function(dispatch) {
    const results = testOfflineStorage();
    console.log(results);
    dispatch({ type: types.TEST_LOCAL_STORAGE, payload: { results: results } });
  }
}

function testOfflineStorage() {
  var results = {};

  results.insertLarge = insertLocalStorageTest(2000, 512);
  results.insertMedium = insertLocalStorageTest(2000, 64);
  results.insertSmall = insertLocalStorageTest(2000, 8);

  results.massInsertLarge = massInsertLocalStorageTest(2000, 512);
  results.massInsertMedium = massInsertLocalStorageTest(2000, 64);
  results.massInsertSmall = massInsertLocalStorageTest(2000, 8);

  results.fetchLarge = fetchLocalStorageTest(2000, 512);
  results.fetchMedium = fetchLocalStorageTest(2000, 64);
  results.fetchSmall = fetchLocalStorageTest(2000, 8);

  results.clear = clearLocalStorageTest(2000, 512);

  return results;
}

function insertLocalStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  var data = getRandomData(numberOfBlocks, sizeOfBlocks);
  
  var start = window.performance.now();
  insertData(data);
  var end = window.performance.now();

  return end - start;
}

function massInsertLocalStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  var data = getRandomData(numberOfBlocks, sizeOfBlocks);

  var start = window.performance.now();
  localStorage.setItem("data", data);
  var end = window.performance.now();

  return end - start;
}

function fetchLocalStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  insertData(getRandomData(numberOfBlocks, sizeOfBlocks));

  var start = window.performance.now();
  for (var i = 0; i < numberOfBlocks; i++) {
    localStorage.getItem(i);
  }
  var end = window.performance.now();

  return end - start;
}

function clearLocalStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  insertData(getRandomData(numberOfBlocks, sizeOfBlocks));

  var start = new Date().getTime();
  for (var i = 0; i < numberOfBlocks; i++) {
    localStorage.removeItem(i);
  }
  var end = new Date().getTime();

  return end - start;
}

function insertData(data) {
  for (var i = 0; i < data.length; i++) {
    localStorage.setItem(i, data[i]);
  }
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
