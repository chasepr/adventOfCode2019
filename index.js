// Import stylesheets
import './style.css';
import * as day1 from './day1-part1';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>View Console</h1>`;

day1.validate();
console.log(day1.runInputs());