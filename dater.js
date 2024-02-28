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
