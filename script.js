function printMessage() {

  var date = new Date();

  var hours = (String(date.getHours()));
  var minutes = (String(date.getMinutes()));
  var seconds = (String(date.getSeconds()));

  var hoursWord = 'часов';
  var minutesWord = 'минут';
  var secondsWord = 'секунд';

  console.clear();

  console.log("Сегодня " +
    date.toLocaleString("ru", { day: 'numeric', month: 'long' }) + ' ' +
    date.getFullYear() + ' года, ' +
    date.toLocaleString("ru", { weekday: 'long' }) + ', ' +
    date.getHours() + ' ' + printHoursWord() + ' ' +
    date.getMinutes() + ' ' + printMinutesWord() + ' ' +
    date.getSeconds() + ' ' + printSecondsWord());

  function getLastSymbol(number) {
    var lastSymbol = number.charAt((number.length) - 1);
    return lastSymbol;
  }

  function printHoursWord() {
    if (getLastSymbol(hours) == 1 && date.getHours() !== 11) {
      hoursWord = 'час';
      return hoursWord;
    } else if ((getLastSymbol(hours) == 2
      || getLastSymbol(hours) == 3
      || getLastSymbol(hours) == 4) && hours.indexOf(1) !== 0) {
      hoursWord = 'часа';
      return hoursWord;
    } else {
      return hoursWord;
    }
  };

  function printMinutesWord() {
    if (getLastSymbol(minutes) == 1 && date.getMinutes() !== 11) {
      minutesWord = 'минута';
      return minutesWord;
    } else if ((getLastSymbol(minutes) == 2
      || getLastSymbol(minutes) == 3
      || getLastSymbol(minutes) == 4) && minutes.indexOf(1) !== 0) {
      minutesWord = 'минуты';
      return minutesWord;
    } else {
      return minutesWord;
    }
  };

  function printSecondsWord() {
    if (getLastSymbol(seconds) == 1 && date.getSeconds() !== 11) {
      secondsWord = 'секунда';
      return secondsWord;
    } else if ((getLastSymbol(seconds) == 2
      || getLastSymbol(seconds) == 3
      || getLastSymbol(seconds) == 4) && seconds.indexOf(1) !== 0) {
      secondsWord = 'секунды';
      return secondsWord;
    } else {
      return secondsWord;
    }
  };
};

setInterval('printMessage()', 1000);
