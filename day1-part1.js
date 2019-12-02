/*
--- Day 1: The Tyranny of the Rocket Equation ---

Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
*/

function calculateFuelRequired(mass) {
  return Math.floor(mass / 3) - 2;
}

export function validate() {
  const test1 = calculateFuelRequired(12) === 2;
  const test2 = calculateFuelRequired(14) === 2;
  const test3 = calculateFuelRequired(1969) === 654;
  const test4 = calculateFuelRequired(100756) === 33583;

  if (test1 && test2 && test3&& test4) {
    console.log('Passes');
  } else {
    console.log('Test Failure');
  }
}

export function runInputs() {
  const inputs = [
  80590,
  86055,
  92321,
  131464,
  73326,
  144607,
  124438,
  72589,
  96471,
  65712,
  107909,
  141197,
  131589,
  149356,
  53254,
  54742,
  94498,
  79631,
  146271,
  72983,
  59687,
  50571,
  89527,
  72175,
  72089,
  57808,
  143395,
  74329,
  109760,
  91254,
  79220,
  131610,
  74277,
  144080,
  107992,
  93817,
  112252,
  81157,
  74618,
  55479,
  66420,
  50055,
  53864,
  75143,
  131285,
  135352,
  63103,
  133893,
  142154,
  144706,
  128280,
  92891,
  61066,
  116696,
  132323,
  74805,
  75160,
  76285,
  114280,
  124461,
  86605,
  55868,
  117886,
  57035,
  125382,
  96755,
  50218,
  123795,
  141878,
  147718,
  65396,
  76043,
  53013,
  60583,
  140754,
  86844,
  99086,
  125917,
  139895,
  60719,
  76850,
  99552,
  130115,
  76143,
  113743,
  99243,
  132678,
  130983,
  137577,
  133118,
  70662,
  102478,
  132083,
  92287,
  147977,
  60584,
  91031,
  59910,
  147595,
  145263
];
  let output = 0;
  for (const input of inputs) {
    output += calculateFuelRequired(input);
  }
  return output;
}