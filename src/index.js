//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var ReactDOM = require('react-dom'),
    React = require('react'),
    Container = require('./container'),
    GameManager = require('./game_manager'),
    KeyboardInputManager = require('./keyboard_input_manager'),
    HTMLActuator = require('./html_actuator'),
    LocalStorageManager = require('./local_storage_manager');

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    ReactDOM.render(<Container size="4" startTiles="2" />, document.getElementById('root'));
    // new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});


// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
