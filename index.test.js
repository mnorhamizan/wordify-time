const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times before 30 mins - 6:15', () => {
    const timeInWords = convertTimeToWords('6:15');
    expect(timeInWords).toBe('quarter past six');
  });

  it('Handles times before 30 mins - 7:13', () => {
    const timeInWords = convertTimeToWords('7:13');
    expect(timeInWords).toBe('thirteen past seven');
  });

  it('Handles times after 30 mins - 7:33', () => {
    const timeInWords = convertTimeToWords('7:33');
    expect(timeInWords).toBe('twenty seven to eight');
  });

  it('Handles times after 30 mins - 5:37', () => {
    const timeInWords = convertTimeToWords('5:37');
    expect(timeInWords).toBe('twenty three to six');
  });
});

// - 2:00 > two o'clock
// - 2:03 > three past two
// - 2:11 > eleven past two
// - 2:15 > quarter past two
// - 2:45 > quarter to two
// - 2:30 > half past two
// - 2:33 > twenty seven to three
// - 2:40 > twenty to three
// - 2:55 > five to three
// - 12:00 > midday
