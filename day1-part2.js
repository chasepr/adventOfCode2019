/*
--- Part Two ---

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

    A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
    At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

*/ 

function calculateFuelRequired(mass) {
  var neededFuel = Math.floor(mass / 3) - 2;
  if (neededFuel <= 0) {
    return 0;
  }

  return neededFuel + calculateFuelRequired(neededFuel);
}

export function validate() {
  const test1 = calculateFuelRequired(14) === 2;
  const test2 = calculateFuelRequired(1969) === 966;
  const test3 = calculateFuelRequired(100756) === 50346;

  if (test1 && test2 && test3) {
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