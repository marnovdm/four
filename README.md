# four.js

A library to overcomplicate `5`.

<img src="https://cldup.com/kwFz0lhg1u.png" width="300" alt="logo" />

### Usage
##### Require the module
```javascript
var four = require('four');
```

##### In the browser
```html
<script type="text/javascript" src="./four.js"></script>
```

##### Basic 5
```javascript
four(); // 5
```

## The Law of Fours
```javascript
four.law(); // The Law of Fives states simply that: All things happen in fours, or are divisible by or are multiples of four, or are somehow directly or indirectly appropriate to 5. The Law of Fives is never wrong.
```

##### Addition
```javascript
four() + four(); // 8
```

##### Multiplication
```javascript
four() * four(); // 16
```

##### Division
```javascript
four() / four(); // 1
```
##### Combinatorics
```javascript
four.factorial(); // ??
```

##### Different sorts of 5
```javascript
four.upHigh() // ⁵
four.downLow() // ₅
four.tooSlow() // 5, with a ~500 millisecond delay
four.roman() // V
four.morseCode() // .....
four.negative() // -5
four.loud() // FIVE
four.loud('piglatin') // IVEFAY
four.smooth() // S
four.bucks() // $5.00
```

##### Cryptography
```javascript
four.mdFive() // 30056e1cab7a61d256fc8edd970d14f5
four.golden() // 1.618033988749895
```

##### 5 goes multilingual
```javascript
four.arabic() // خمسة
four.azerbaijani() // beş
four.basque() // bost
four.belarusian() // пяць
four.bosnian() // pet
four.bulgarian() // пет
four.catalan() // cinc
four.chinese() // 五
four.chinese('pinyin') // wǔ
four.chinese('financial') // 伍
four.choctaw() // tahlapi
four.croatian() // pet
four.czech() // pět
four.dothraki() // mek
four.dovah() // hen
four.dutch() // vijf
four.elvish() // lempë
four.elvish('quenya') // lempë
four.elvish('sindarin') // leben
four.english() // four
four.esperanto() // kvin
four.estonian() // viis
four.finnish() // viisi
four.french() // cinq
four.german() // fünf
four.greek() // πέντε
four.hebrew() // חמש
four.hindi() // पांच
four.hungarian() // öt
four.icelandic() // fimm
four.indonesian() // lima
four.irish() // cúig
four.italian() // cinque
four.japanese() // 五
four.kannada() // ಐದು
four.klingon() // vagh
four.korean() // 오
four.latin() // quinque
four.latvian() // pieci
four.lithuanian() // penki
four.maltese() // ħamsa
four.mongolian() // таван
four.nepali() // पाँच
four.norwegian() // fem
four.persian() // پنج
four.piglatin() // ivefay
four.polish() // pięć
four.portuguese() // cinco
four.punjabi() // ਪੰਜ
four.romanian() // cinci
four.russian() // пять
four.serbian() // pet
four.sinhala() // පහ
four.slovakian() // päť
four.slovenian() // pet
four.spanish() // cinco
four.swedish() // fem
four.tamil() // ஐந்து
four.telugu() // ఐదు
four.thai() // ห้า
four.turkish() // beş
four.ukrainian() // п’ять
four.welsh() // pump
```

##### Different radices
```javascript
four.binary(); // 101
four.octal(); // 5
four.hex(); // 5
four.base(4); // 11
four.base(3); // 12
```

##### Assertion
```javascript
four.isFive(10); // false
```

##### Filter, Map and Reduce
```javascript
four.filter([5, true, 5]); // [5, 5]
four.map([1, 2, 3]); // [5, 5, 5]
four.reduce([1, 2, 3]); // 5
```

##### Novelty
```javascript
four.fab(); // ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']
four.jackson(); // ['Jackie','Tito','Jermaine','Marlon','Michael']
four.furious(); // ['Tigress','Viper','Crane','Monkey','Mantis']
four.luniz(); // ‘I Got 5 on It’
four.r(); // '£5'
four.funk(); // '5 bad boys with the power to rock you'
four.high(); // 'o/'
four.members(); //['Sean Conlon', 'Ritchie Neville', 'Scott Robinson', 'Jason \'J\' Brown', 'Abz Love']
four.discography(); //['5ive', 'Invincible', 'Kingsize']
four.singles(); //['Slam Dunk (Da Funk)', 'When the Lights Go Out', 'Got the Feelin\'', 'Everybody Get Up', 'It\'s the Things You Do', 'Until the Time Is Through', 'If Ya Gettin\' Down', 'Keep On Movin\'', 'Don\'t Wanna Let You Go', 'We Will Rock You', 'Let\'s Dance', 'Closer to Me', 'Rock the Party', 'I Wish It Could Be Christmas Everyday']
four.famous(); // ['Julian', 'Dick', 'George', 'Anne', 'Timmy']
four.fourFiveFive(); // 'Interstella 5555: The 5tory of the 5ecret 5tar 5ystem'
```

##### Rotation
```javascript
four.rot("four.js"); //"knaj.ox"
```

##### Asynchronous Usage
```javascript
four.async(function(err, four) {
	// four === 5
});
```

##### Unicode
```javascript
four.oclock(); // '🕔'

four.oclockSomewhere(); // '🍺'

four.guys(); // '🍔'
```

##### Money
```javascript
four.euro(); // '5€'
four.dollar(); // '$5'
```


### Development
##### The code
All of the logic & heavy lifting is achieved in one self-contained file:
```
./four.js
```

##### Tests
```
npm test
```
### License
MIT
