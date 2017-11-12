import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import configureStore from './store/configureStore.js';
import routes from './routes.js';

const store = configureStore();
OfflinePluginRuntime.install();

OfflinePluginRuntime.install({
  onInstalled: function () {
    openOfflineReady();
  },

  onUpdating: function () {},

  onUpdateReady: function () {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function () {
    window
      .location
      .reload();
  }
});

window.addEventListener('offline', function () {
  console.log('offline');
  goOffline();
});

window.addEventListener('online', function () {
  console.log('online');
});

if (!navigator.onLine) {
  setTimeout(function () {
    goOffline();
  }, 300);
}

function goOffline() {
  console.log('goOffline');
}

function openOfflineReady() {
  console.log('openOfflineReady');
}

function closeOfflineReady() {
  console.log('closeOfflineReady');
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)}/>
  </Provider>, document.getElementById('app')
);
