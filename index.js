// Import stylesheets
import './style.css';
import * as day1Part1 from './day1-part1';
import * as day1Part2 from './day1-part2';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>View Console</h1>`;

day1Part1.validate();
console.log(day1Part1.runInputs());

console.log('\nDay 1 - Part 2');
day1Part2.validate();
console.log(day1Part2.runInputs());