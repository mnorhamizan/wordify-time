// # Pair Programming exercise

const ONE_TO_NINETEEN = ['zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'];

const TENTHS = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty'];

function getHoursWordify(hours) {
  return ONE_TO_NINETEEN[hours];
}

function getMinutesWordify(minutes) {
  if (minutes === 30) return 'half';
  if (minutes === 15) return 'quarter';
  if (minutes === 45) return 'quarter';

  if (minutes > 20) {
    return `${TENTHS[Math.floor(minutes / 10)]} ${ONE_TO_NINETEEN[minutes % 10]}`;
  }
  return `${ONE_TO_NINETEEN[minutes]}`;
}

/**
 * expecting time to be a string in the format like '8:15' or '12:30'
 *
 * @param {*} time - String
 * @returns wordified time - String
 */
function convertTimeToWords(time) {
  if (time === '0:00') return 'midnight';
  if (time === '12:00') return 'midday';

  const hours = Number(time.split(':')[0]);
  const minutes = Number(time.split(':')[1]);

  if (minutes === 0) return `${getHoursWordify(hours)} o'clock`;

  if (minutes > 30) {
    return `${getMinutesWordify(60 - minutes)} to ${getHoursWordify(hours + 1)}`;
  }
  return `${getMinutesWordify(minutes)} past ${getHoursWordify(hours)}`;
}

module.exports = { convertTimeToWords };
