// type DateType = {
//   year: number;
//   month: number;
//   day: number;
// };

const calcDate = (dateAndHour: string) => {
  const date = dateAndHour.split(' ')[0];
  const hour = dateAndHour.split(' ')[1];

  const newDateObj = {
    day: Number(date.split('/')[0]),
    month: Number(date.split('/')[1]),
    year: Number(date.split('/')[2]),
    HH: Number(hour.split(':')[0]),
    mm: Number(hour.split(':')[1]),
    ss: Number(hour.split(':')[2]),
  };

  // console.log(newDateObj.HH);
  const dateObj = new Date(
    newDateObj.year,
    newDateObj.month,
    newDateObj.day,
    newDateObj.HH,
    newDateObj.mm,
    newDateObj.ss,
  );
  // console.log(dateObj);
  const dateNow = new Date();
  // console.log(dateNow.getTime());
  // console.log(dateNow);
  const timeDiff = Math.abs(dateNow.getTime() - dateObj.getTime());
  // console.log(timeDiff);

  // const year = dateObj.getFullYear();
  // const month = dateObj.getMonth() + 1;
  // const day = dateObj.getDate();
  // const hour = dateObj.getHours();
  // const minute = dateObj.getMinutes();
  // const second = dateObj.getSeconds();
  // const result = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
  // return result;
};
export default calcDate;
