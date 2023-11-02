//Check for no argument passed. Print usage statement and exit if so.
if (process.argv.length < 3) {
  process.stderr.write("Usage: node timer1.js [delay] [delay]...\n");
  process.exit(1);
}

//Function to pass to setTimeout(). Writes an ASCII BEL to standard output.
const sendBell = function () {
  process.stdout.write("\x07");
}

//Holding variable for accumulated delay timer value.
let delay = 0;

/*Iterate over process.argv[] adding delay values to the delay accumulator
 *ensuring each argument is a valid number before adding it; each time around
 *set a timeout for the current value of the delay accumulator*/
for (let i = 2; i <= process.argv.length; i++) {
  if (!isNaN(process.argv[i]) && Number(process.argv[i]) > 0) {
    delay += Number(process.argv[i]);
    setTimeout(sendBell, delay);
  }
}
