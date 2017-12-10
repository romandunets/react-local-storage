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
  var numbersOfBlocks = [50, 400, 2000];
  var sizesOfBlocks = [8, 64, 512];

  results.push(benchmark(insertOfflineStorageTest, "Insert one by one blocks of data", numbersOfBlocks, sizesOfBlocks));
  results.push(benchmark(massInsertOfflineStorageTest, "Mass insert of single data block", numbersOfBlocks, sizesOfBlocks));
  results.push(benchmark(fetchOfflineStorageTest, "Fetch one by one blocks of data", numbersOfBlocks, sizesOfBlocks));
  results.push(benchmark(massFetchOfflineStorageTest, "Mass fetch of single data block", numbersOfBlocks, sizesOfBlocks));
  results.push(benchmark(clearOfflineStorageTest, "Clear one by one blocks of data", numbersOfBlocks, sizesOfBlocks));
  results.push(benchmark(massClearOfflineStorageTest, "Mass clear of single data block", numbersOfBlocks, sizesOfBlocks));

  return results;
}

function benchmark(handler, description, numbersOfBlocks, sizesOfBlocks) {
  var results = {
    description: description,
    headers: sizesOfBlocks,
    columns: numbersOfBlocks,
    data:[]
  };

  for (let numberOfBlock of numbersOfBlocks) {
    var dataPerNumberOfBlocks = [];
    for (let sizeOfBlocks of sizesOfBlocks) {
      dataPerNumberOfBlocks.push(handler(numberOfBlock, sizeOfBlocks));
    }
    results.data.push(dataPerNumberOfBlocks);
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

function massFetchOfflineStorageTest(numberOfBlocks, sizeOfBlocks) {
  localStorage.clear();
  localStorage.setItem("data", dataGenerator.getRandomData(numberOfBlocks, sizeOfBlocks));

  let timer = new Timer();
  localStorage.getItem("data");
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
