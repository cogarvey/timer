const args = process.argv;


for (let time of args) {
  setTimeout(() => {
    console.log(time);
    process.stdout.write('\x07')
  }, time * 1000);
}
