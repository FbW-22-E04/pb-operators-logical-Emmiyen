const isDogBetter = true;
const isCatBetter = false;
console.log(isDogBetter);
console.log(isCatBetter);

console.log("1a:", isDogBetter && isCatBetter);
console.log("1b:", isDogBetter || isCatBetter);
console.log("1c:", !(isDogBetter && isCatBetter));

const atoms = 3;
const sandGrains = 1; 
const starsInSky = 2;

console.log("3a:", atoms > starsInSky && atoms > sandGrains);

console.log("3b:", atoms !== sandGrains);

console.log("3c:", starsInSky < sandGrains || starsInSky > atoms );

console.log("3d:", atoms === starsInSky || atoms !== sandGrains);

console.log('3e', atoms >= 10 && sandGrains <= 10);

console.log('3f:', atoms * starsInSky > 100 || atoms * sandGrains < 100);

//there is no logic to me, everything sound alien 




