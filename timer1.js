const args = process.argv;

const alarmFunction = function (args) {
  if (args.length === 0) {
    return;
  }
  for (let time of args) {
    if (time >= 0 && time !== NaN) {
      setTimeout(() => {
        console.log(time);
        process.stdout.write('\x07')
      }, time * 1000);
    }
  }
}

alarmFunction(args)
