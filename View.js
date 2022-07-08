

class View {
  constructor() {

  }
}

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
let i = 0;
const question = (text) =>
new Promise((res, rej) =>
rl.question(text, (answer) => {
res(answer);
})
);
question("как дела\n")
.then((data) => {
i++;
console.log("\nyou said ", data);
})

.then(() => rl.close());



module.exports = View
