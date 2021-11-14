/** @format */
/** @format */

const spinner = function(animationCharacter) {
  //const spinner = function (turns) {
  let time = 0;
  let turns = animationCharacter.length;
  for (let i = 0; i < turns; i++) {
    setTimeout(() => {
      process.stdout.write(animationCharacter[i]);
    }, time);
    time = time + 200;
  }
};

let animationCharacter = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
];

spinner(animationCharacter);
