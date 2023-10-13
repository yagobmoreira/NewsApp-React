const calcDate = (dateAndHour: string) => {
  const date = dateAndHour.split(' ')[0];
  const hour = dateAndHour.split(' ')[1];
  const dateFormat = date.split('/').reverse().join('-');
  const newsDate = new Date(`${dateFormat}T${hour}-03:00`);
  const dateNow = new Date();

  const diffTime = Math.abs(dateNow.getTime() - newsDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
export default calcDate;
