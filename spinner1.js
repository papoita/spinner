/** @format */

//process.stdout.write("hello from spinner1.js... \rheyyy\n");

//const spinner = function (turns) {
//for (let i = 0; i < turns; i++) {
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1000);

//spinner(1);
setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 1700);
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 2000);
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1000);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 1700);
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 2000);
// 	}
// };
