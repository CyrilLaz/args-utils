module.exports = () => {
  const readline = require("node:readline");

  const { stdin: input, stdout: output } = require("node:process");

  const rl = readline.createInterface(input, output);
  const randomNumber = (Math.random() * 100).toFixed();

  console.log("Загадано число в диапазоне от 0 до 100");

  const waitNumber = () =>
    new Promise((res) => {
      rl.on("line", (number) => {
        res(number);
      });
    })
      .then((number) => {
        if (Number.isNaN(parseFloat(number))) throw Error();

        switch (number) {
          case randomNumber:
            console.log(`Отгадано число: `, number);
            rl.close();
            break;

          default:
            console.log(number < randomNumber ? "Больше" : "Меньше");
            waitNumber();
            break;
        }
      })
      .catch(() => {
        console.log("Вводите цифру в диапазоне от 0 до 100 ");
        waitNumber();
      });

  waitNumber();
};
