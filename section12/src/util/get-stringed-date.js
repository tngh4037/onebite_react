export const getStringedDate = (targetDate) => {
  // 날짜 객체 -> YYY-MM-DD 형태 문자로 반환
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
