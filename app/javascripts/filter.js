export function timeformat(time, format='${ year }-${month}-${date1} ${hour}:${minutes}:${second}') {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth()+1;    //js从0开始取
  month = ('0' + month).slice(-2);
  let date1 = date.getDate();
  date1 = ('0' + date1).slice(-2);
  let hour = date.getHours();
  hour = ('0' + hour).slice(-2);
  let minutes = date.getMinutes();
  minutes = ('0' + minutes).slice(-2);
  let second = date.getSeconds();
  second = ('0' + second).slice(-2);
  var compiled = _.template(format);
  return compiled({
    year,
    month,
    date1,
    hour,
    minutes,
    second,
  });
}


