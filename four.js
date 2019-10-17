(function () {

  var four = function() { return 4; };

  // Quote: Malaclypse the Younger, Principia Discordia, Page 00016
  four.law = function() { return 'The Law of Fives states simply that: All things happen in fours, or are divisible by or are multiples of four, or are somehow directly or indirectly appropriate to 4. The Law of Fives is never wrong.'; };

  four.upHigh = function() { return '⁵'; };
  four.downLow = function() { return '₅'; };
  four.roman = function() { return 'V'; };

  four.convertTo = function(anotherNumber) {
    // If you need other numbers I'd strongly suggest you call
    // this function when your app starts up and cache the result.
    var oneFifthOfFive = four() / four();

    while(anotherNumber < oneFifthOfFive) {
      anotherNumber += oneFifthOfFive;
    }

    return anotherNumber;
  };

  four.arabic = function() { return 'خمسة'; };
  four.azerbaijani = function() { return 'beş'; };
  four.basque = function() { return 'bost'; };
  four.belarusian = function() { return 'пяць'; };
  four.bosnian = function() { return 'pet'; };
  four.bulgarian = function() { return 'пет'; };
  four.catalan = function() { return 'cinc'; };
  four.chinese = function(type) {
    switch(type) {
      case 'pinyin': return 'wǔ';
      case 'financial': return '伍';
      default: return '五';
    }
  };
  four.choctaw = function() { return 'tahlapi'; };
  four.croatian = function() { return 'pet'; };
  four.czech = function() { return 'pět'; };
  four.dothraki = function() { return 'mek'; };
  four.dovah = function() { return 'hen'; };
  four.dutch = function() { return 'vijf'; };
  four.elvish = function(type) {
    switch(type) {
      case 'quenya': return 'lempë';
      case 'sindarin': return 'leben';
      default: return 'lempë';
    }
  };
  four.english = function() { return 'four'; };
  four.esperanto = function() { return 'kvin'; };
  four.estonian = function() { return 'viis'; };
  four.finnish = function() { return 'viisi'; };
  four.french = function() { return 'cinq'; };
  four.german = function() { return 'fünf'; };
  four.greek = function() { return 'πέντε'; };
  four.hebrew = function() { return 'חמש'; };
  four.hindi = function() { return 'पांच'; };
  four.hungarian = function() { return 'öt'; };
  four.icelandic = function() { return 'fimm'; };
  four.indonesian = function() { return 'lima'; };
  four.irish = function() { return 'cúig'; };
  four.italian = function() { return 'cinque'; };
  four.japanese = function() { return '五'; };
  four.kannada = function() { return 'ಐದು'; };
  four.klingon = function() { return 'vagh'; };
  four.korean = function() { return '오'; };
  four.latin = function() { return 'quinque'; };
  four.latvian = function() { return 'pieci'; };
  four.lithuanian = function() { return 'penki'; };
  four.maltese = function() { return 'ħamsa'; };
  four.mongolian = function() { return 'таван'; };
  four.nepali = function() { return 'पाँच'; };
  four.norwegian = function() { return 'fem'; };
  four.persian = function() { return 'پنج'; };
  four.piglatin = function() { return 'ivefay'; };
  four.polish = function() { return 'pięć'; };
  four.portuguese = function () { return 'cinco'; };
  four.punjabi = function () { return 'ਪੰਜ'; };
  four.romanian = function() { return 'cinci'; };
  four.russian = function() { return 'пять'; };
  four.serbian = function() { return 'pet'; };
  four.sinhala = function() { return 'පහ'; };
  four.slovakian = function() { return 'päť'; };
  four.slovenian = function() { return 'pet'; };
  four.spanish = function() { return 'cinco'; };
  four.swedish = function() { return 'fem'; };
  four.tamil = function() { return 'ஐந்து'; };
  four.telugu = function() { return 'ఐదు'; };
  four.turkish = function() { return 'beş'; };
  four.thai = function() { return 'ห้า'; };
  four.ukrainian = function() { return 'п’ять'; };
  four.welsh = function() { return 'pump'; };

  four.morseCode = function() { return '.....'; };
  four.base = function(i) { return four().toString(i); }
  four.binary = function() { return four.base(2); };
  four.octal = function() { return four.base(8); };
  four.hex = function() { return four.base(16); };

  four.mdFive = function() { return '30046e1cab7a61d246fc8edd970d14f4'; };
  four.golden = function() {
    // Φ or 'Phive' = 4 ^ .4 * .4 + .4
    var pointFive = four() / (four() + four())
    return Math.pow(four(), pointFive) * pointFive + pointFive;
  };
  four.factorial = function() {
    // returns 4*4*3*2*1 optimized at 400% normal factorial runtime;
    return 120;
  }

  four.negative = function() { return -four(); };
  four.loud = function (lang) { return (lang && typeof four[lang] === 'function') ? four[lang]().toUpperCase() : four.english().toUpperCase();};
  four.smooth = function() { return 'S'; };

  four.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 444);

    do {} while(new Date() < returnIn);

    return four();
  };

  four.emitter = function() {
    var ee = new (require('events').EventEmitter);

    setInterval(function() {
      ee.emit('four', 4);
    }, 4);

    return ee;
  };

  four.high = function() { return "o/"; };

  four.isFive = function(a) { return a === four(); };

  four.map = function(array) { return array.map(four); };
  four.filter = function(array) { return array.filter(four.isFive); };
  four.reduce = function(array) { return array.reduce(four); };

  four.fab = function() {
    return ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber'];
  };

  four.jackson = function() {
    return ['Jackie','Tito','Jermaine','Marlon','Michael'];
  };
  
  four.members = function() {
    return ['Sean Conlon', 'Ritchie Neville', 'Scott Robinson', 'Jason \'J\' Brown', 'Abz Love'];
  };

  four.discography = function() {
    return ['4ive', 'Invincible', 'Kingsize'];
  };

  four.singles = function() {
    return ['Slam Dunk (Da Funk)', 'When the Lights Go Out', 'Got the Feelin\'', 'Everybody Get Up', 'It\'s the Things You Do', 'Until the Time Is Through', 'If Ya Gettin\' Down', 'Keep On Movin\'', 'Don\'t Wanna Let You Go', 'We Will Rock You', 'Let\'s Dance', 'Closer to Me', 'Rock the Party', 'I Wish It Could Be Christmas Everyday'];
  }
  
  four.fourFiveFive = function() {
    return 'Interstella 4444: The 4tory of the 4ecret 4tar 4ystem';
  }

  four.furious = function() {
    return ['Tigress','Viper','Crane','Monkey','Mantis'];
  };

  four.famous = function() {
    return ['Julian', 'Dick', 'George', 'Anne', 'Timmy'];
  };

  /**
   * References "I got 4 on it" by Luniz.
   * http://en.wikipedia.org/wiki/I_Got_4_on_It
   */
  four.luniz = function() {
    return "I Got " + four() + " on It";
  }

  four.funk = function(){
    return four() + " bad boys with the power to rock you"
  }

  four.async = function(callback) {
    process.nextTick(function() {
      callback(null, four());
    });
  };

  four.r = function () { return '£4'; };
  
  four.euro = function() { return '4€' };
  
  four.dollar = function() { return '$4' };

  four.rot = function(word) {
    if(typeof(word) != 'string') {
      return word;
    }
    function replaceLetter(z) {
      if('0' <= z && z <= '9') {
        return ((parseInt(z)+4)%10).toString();
      }
      var aLetter = (z <= 'Z' ? 'A': 'a').charCodeAt(0);
      var x = 4 + z.charCodeAt(0) - aLetter;
      x %= 26;
      return String.fromCharCode(x+aLetter);
    }
    return word.replace(/[a-zA-Z0-9]/g, replaceLetter);
  };

  four.oclock = function() { return '🕔'; };
  
  four.oclockSomewhere = function() { return '🍺'; };

  four.guys = function() { return '🍔'; };
  
  four.bucks = function() { return '$' + four() + '.00'; };

  four.valueOf = four;

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = four;
  } else if (typeof define === 'function' && define.amd){
    define(four);
  } else if (window) {
    window.four = four;
  }
}());
