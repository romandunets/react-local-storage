import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import * as dataGenerator from '../helpers/dataGenerator';
import Timer from '../helpers/timer';

export function testLocalStorage() {
  return function(dispatch) {
    const results = testOfflineStorage();
    dispatch({ type: types.TEST_LOCAL_STORAGE, payload: { results: results } });
  }
}

function testOfflineStorage() {
  var results = [];

  results.push(benchmark(insertOfflineStorageTest, "Insert one by one", [2000], [512, 64, 8]));
  results.push(benchmark(massInsertOfflineStorageTest, "Mass insert", [2000], [512, 64, 8]));
  results.push(benchmark(fetchOfflineStorageTest, "Fetch one by one", [2000], [512, 64, 8]));
  results.push(benchmark(clearOfflineStorageTest, "Clear one by one", [2000], [512, 64, 8]));
  results.push(benchmark(massClearOfflineStorageTest, "Mass clear", [2000], [512, 64, 8]));

  return results;
}

function benchmark(handler, description, numbersOfBlocks, sizesOfBlocks) {
  var results = {
    description: description + " " + numbersOfBlocks + " blocks of data",
    headers: sizesOfBlocks,
    data:[]
  };

  for (let numberOfBlock of numbersOfBlocks) {
    for (let sizeOfBlocks of sizesOfBlocks) {
      results.data.push(handler(numberOfBlock, sizeOfBlocks));
    }
  }

  return results;
}

function insertOfflineStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  var data = dataGenerator.getRandomData(numberOfBlocks, sizeOfBlocks);

  let timer = new Timer();
  insertData(data);
  return timer.getTimeElapsed();
}

function massInsertOfflineStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  var data = dataGenerator.getRandomData(numberOfBlocks, sizeOfBlocks);

  let timer = new Timer();
  localStorage.setItem("data", data);
  return timer.getTimeElapsed();
}

function fetchOfflineStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  insertData(dataGenerator.getRandomData(numberOfBlocks, sizeOfBlocks));

  let timer = new Timer();
  for (var i = 0; i < numberOfBlocks.length; i++) {
    localStorage.getItem(i);
  }
  return timer.getTimeElapsed();
}

function clearOfflineStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  insertData(dataGenerator.getRandomData(numberOfBlocks, sizeOfBlocks));

  let timer = new Timer();
  for (var i = 0; i < numberOfBlocks; i++) {
    localStorage.removeItem(i);
  }
  return timer.getTimeElapsed();
}

function massClearOfflineStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  insertData(dataGenerator.getRandomData(numberOfBlocks, sizeOfBlocks));

  let timer = new Timer();
  localStorage.clear();
  return timer.getTimeElapsed();
}

function insertData(data) {
  for (var i = 0; i < data.length; i++) {
    localStorage.setItem(i, data[i]);
  }
}
