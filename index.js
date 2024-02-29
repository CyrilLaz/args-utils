#!/usr/bin/env node
"use strict";
const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

const dater = require("./dater");
const guessNumber = require("./guess-number");
const { optionsCurrent, optionsAdd, optionsSub } = require("./options");

yargs(hideBin(process.argv))
  .scriptName("my-date")
  .usage("$0", 'Игрa "Загадай число"', {}, () => {
    guessNumber();
  })
  .command({
    command: "current",
    description: "Текущая дата и время в формате ISO.",
    builder: optionsCurrent,
    handler: (argv) => {
      console.log(dater.current(argv));
    },
  })
  .command({
    command: "add",
    description: "Получать будущие даты в формате ISO.",
    builder: optionsAdd,
    handler: (argv) => {
      console.log(dater.add(argv));
    },
  })
  .command({
    command: "sub",
    description: "Получать прошлые даты в формате ISO.",
    builder: optionsSub,
    handler: (argv) => {
      console.log(dater.sub(argv));
    },
  })
  .strict()
  .version(false)
  .parse();
