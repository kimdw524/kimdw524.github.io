export const formatDate = (time: string) => {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDate = day < 10 ? '0' + day : day;

  return `${year}년 ${formattedMonth}월 ${formattedDate}일`;
};
