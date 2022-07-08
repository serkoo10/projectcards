const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const taskInterface = readline.createInterface({ input, output });
const fs = require("fs");
const { log } = require("console");

let i = 0;
let j = 0;
let arr = [];

const info = (m) =>
  new Promise((resolve, reject) => {
    arr = fs.readFile(`./topics/${m}.txt`, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      arr = data.split(",");
      return resolve(arr);
    });
  });

const startquestion = (text) =>
  new Promise((resolve, reject) =>
    taskInterface.question(text, (answer) => {
      if (answer == 1) resolve(1);
      if (answer == 2) resolve(2);
      if (answer == 3) resolve(3);
    })
  );

const question = (text) =>
  new Promise((resolve, reject) =>
    taskInterface.question(text, (answer) => {
      i++;
      resolve(answer);
    })
  );

const answer = (answer) =>
  new Promise((resolve, reject) => {
    i++;
    if (answer.toLowerCase() == arr[i - 1]) {
      j++;
      resolve(console.log("Правильно!"));
    } else {
      resolve(console.log("Неверно, правильный ответ:  " + arr[i - 1]));
    }
  });

class View {
  constructor() {}

  answer() {
    startquestion(
      "Выберете  номер темы:\n 1.Тупые вопросы \n 2.Тупые вопросы похуже \n 3.Тупые вопросы еще хуже\n"
    )
      .then((m) => info(m))
      .then((arr) => {
        return question(`${arr[i]}\n`);
      })
      .then((data) => {
        return answer(data);
      })
      .then(() => {
        return question(`${arr[i]}\n`);
      })
      .then((data) => {
        return answer(data);
      })
      .then(() => {
        return question(`${arr[i]}\n`);
      })
      .then((data) => {
        return answer(data);
      })
      .then(() => {
        return question(`${arr[i]}\n`);
      })
      .then((data) => {
        return answer(data);
      })
      .then(() => {
        return question(`${arr[i]}\n`);
      })
      .then((data) => {
        return answer(data);
      })
      .then(() => {
        if (j == 5) {
          console.log(`Ваши баллы: ${j}`);
          console.log('\r\n _     ___   _         _       _   _     \r\n\\ \\_\/ \/ \/ \\ | | |     \\ \\    \/| | | |\\ | \r\n |_|  \\_\\_\/ \\_\\_\/      \\_\\\/\\\/ |_| |_| \\| \r\n')
          return;
        }
        if (j < 5 && j > 2) {
          console.log(`Ваши баллы: ${j}`);
          console.log('\r\n _     ___   _         _     ___   ___   __   ____ \r\n\\ \\_\/ \/ \/ \\ | | |     | |   \/ \/ \\ \/ \/ \\ ( (` | |_  \r\n |_|  \\_\\_\/ \\_\\_\/     |_|__ \\_\\_\/ \\_\\_\/ _)_) |_|__ \r\n')
          return;
        }
        if (j < 2) {
          console.log(`Ваши баллы: ${j}`);
          console.log('\r\n _     ___   _         _     ___   ___   __   ____ \r\n\\ \\_\/ \/ \/ \\ | | |     | |   \/ \/ \\ \/ \/ \\ ( (` | |_  \r\n |_|  \\_\\_\/ \\_\\_\/     |_|__ \\_\\_\/ \\_\\_\/ _)_) |_|__ \r\n')
          return;
        }
      })
      .then(() => {
        // console.image("")
        taskInterface.close();
      });
  }
}

module.exports = View;
