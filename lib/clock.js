/**
 * translate time to word every 5 minutes.
 *
 * 2:05 -> five past two
 * 2:10 -> ten past two
 * 2:15 -> quarter past two
 * 2:20 -> twenty past two
 * 2:25 -> twenty five past two
 * 2:30 -> half past two
 * 2:35 -> twenty five minutes to three
 * 2:40 -> twenty minutes to three
 * 2:45 -> quarter to three
 * 2:50 -> ten to three
 * 2:55 -> five to three
 * 3:00 -> three o'clock
 */

function Clock() {
  this.rules = {
    minute: {
      0: "o'clock",
      5: "five minutes",
      10: "ten minutes",
      15: "quarter",
      20: "twenty minutes",
      25: "twenty five minutes",
      30: "half"
    },
    hour: {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve"
    },
    position: {
      0: "past",
      1: "to"
    }
  };

}

/**
 * allow other language or configuration
 * @param rules
 */
Clock.prototype.setWords = function (rules) {
  if (rules) {
    this.rules = rules;
  }
};

Clock.prototype.getWordTime = function (hour, minute) {
  if (hour != null && typeof(hour) != "undefined" && minute != null && typeof(minute) != 'undefined') {
    var position = -1;
    if (minute > 30) {
      minute = 60 - minute;
      position = 1;
    } else if (minute == 0) {
      position = 0;
    }

    var word = this.rules.minute[minute];
    var hourSection = this.rules.hour[hour];
    var pastOrTo = this.rules.position[position < 0 ? 0 : position];

    if (word) {
      if (position == -1) {
        return word + " " + pastOrTo + " " + hourSection;
      } else if (position == 0) {
        return hourSection + " " + word;
      } else if (position == 1) {
        return word + " " + pastOrTo + " " + hourSection;
      }
    }
  }
};


var t = new Clock();

console.log(t.getWordTime(5, 0));
console.log(t.getWordTime(5, 5));
console.log(t.getWordTime(5, 10));
console.log(t.getWordTime(5, 15));
console.log(t.getWordTime(5, 20));
console.log(t.getWordTime(5, 25));
console.log(t.getWordTime(5, 30));
console.log(t.getWordTime(5, 35));
console.log(t.getWordTime(5, 40));
console.log(t.getWordTime(5, 45));
console.log(t.getWordTime(5, 50));
console.log(t.getWordTime(5, 55));