module.exports.optionsCurrent = (yargs) =>
  yargs.options({
    year: {
      alias: "y",
      type: "boolean",
      description: "Текущий год",
    },
    month: {
      alias: "m",
      type: "boolean",
      description: "Текущий месяц",
    },
    date: {
      alias: "d",
      type: "boolean",
      description: "Текущий день",
    },
  });

module.exports.optionsAdd = (yargs) =>
  yargs
    .options({
      year: {
        alias: "y",
        type: "number",
        description: "Добавить год",
      },
      month: {
        alias: "m",
        type: "number",
        description: "Добавить месяц",
      },
      date: {
        alias: "d",
        type: "number",
        description: "Добавить день",
      },
    })
    .check(({ date, month, year }) =>
      date || month || year ? true : Error("Не используется без опций.")
    );

module.exports.optionsSub = (yargs) =>
  yargs
    .options({
      year: {
        alias: "y",
        type: "number",
        description: "Отнять год",
      },
      month: {
        alias: "m",
        type: "number",
        description: "Отнять месяц",
      },
      date: {
        alias: "d",
        type: "number",
        description: "Отнять день",
      },
    })
    .check(({ date, month, year }) =>
      date || month || year ? true : Error("Не используется без опций.")
    );
