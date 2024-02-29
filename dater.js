/**
 * @callback fn
 * @param {{ year?:number, month?:number, date?:number}}
 * @return {string}
 */
/**
 * @param {{year?:boolean, month?:boolean, date?:boolean}}
 * @return {string}
 */

module.exports.current = ({ date, month, year } = {}) => {
  const nowDate = new Date();
  switch (true) {
    case date:
      return nowDate.getDate();
    case month:
      return nowDate.getMonth() + 1;
    case year:
      return nowDate.getFullYear();
    default:
      return nowDate.toISOString();
  }
};

/** @type {fn} */
module.exports.add = ({ date = 0, month = 0, year = 0 }) => {
  const nowDate = new Date();

  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();
  const nowDay = nowDate.getDate();

  return new Date(
    nowDate.setFullYear(nowYear + year, nowMonth + month, nowDay + date)
  ).toISOString();
};

/** @type {fn} */
module.exports.sub = ({ date = 0, month = 0, year = 0 }) => {
  const nowDate = new Date();

  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();
  const nowDay = nowDate.getDate();

  return new Date(
    nowDate.setFullYear(nowYear - year, nowMonth - month, nowDay - date)
  ).toISOString();
};
