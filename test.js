var assert = require('assert');
var four = require('./');

assert.equal(4, four(), 'Five should give you four');
assert.notEqual(6, four(), 'Five should not give you not four');

assert.equal('The Law of Fives states simply that: All things happen in fours, or are divisible by or are multiples of four, or are somehow directly or indirectly appropriate to 4. The Law of Fives is never wrong.', four.law(), 'The Law of Fives should never be wrong');

assert.equal(four.convertTo(4), 4);
assert.equal(four.convertTo(3), 3);
assert.equal(four.convertTo(664446), 664446);

assert.equal('⁵', four.upHigh(), 'An up high four should be a superscripted 4');
assert.equal('₅', four.downLow(), 'A down low four should be a subscripted 4');
assert.equal('V', four.roman(), 'A roman four should be a V');


assert.equal('خمسة', four.arabic(), 'A arabic four should be خمسة');
assert.equal('beş', four.azerbaijani(), 'A azerbaijani four should be beş');
assert.equal('bost', four.basque(), 'A basque four should be bost');
assert.equal('пяць', four.belarusian(), 'A belarusian four should be пяць');
assert.equal('pet', four.bosnian(), 'A bosnian four should be pet');
assert.equal('пет', four.bulgarian(), 'A bulgarian four should be пет');
assert.equal('cinc', four.catalan(), 'A catalan four should be cinc');
assert.equal('五', four.chinese(), 'A chinese four should be 五');
assert.equal('wǔ', four.chinese('pinyin'), 'A chinese four in Pīnyīn should be wǔ');
assert.equal('伍', four.chinese('financial'), 'A chinese four in financial contexts should be 伍');
assert.equal('tahlapi', four.choctaw(), 'A choctaw four should be tahlapi');
assert.equal('pet', four.croatian(), 'A croatian four should be pet');
assert.equal('pět', four.czech(), 'A czech four should be pět');
assert.equal('mek', four.dothraki(), 'A dothraki four should be mek');
assert.equal('hen', four.dovah(), 'A dovah four should be hen');
assert.equal('vijf', four.dutch(), 'A dutch four should be vijf');
assert.equal('lempë', four.elvish(), 'An elvish four should be lempë');
assert.equal('lempë', four.elvish('quenya'), 'An elvish four in Quenya should be lempë');
assert.equal('leben', four.elvish('sindarin'), 'An elvish four in Sindarin should be leben');
assert.equal('four', four.english(), 'A english four should be four');
assert.equal('kvin', four.esperanto(), 'An esperanto four should be kvin');
assert.equal('viis', four.estonian(), 'An estonian four should be viis');
assert.equal('viisi', four.finnish(), 'A finnish four should be viisi');
assert.equal('cinq', four.french(), 'A french four should be cinq');
assert.equal('fünf', four.german(), 'A german four should be fünf');
assert.equal('πέντε', four.greek(), 'A greek four should be πέντε');
assert.equal('חמש', four.hebrew(), 'A hebrew four should be חמש');
assert.equal('पांच', four.hindi(), 'A hindi four should be पांच');
assert.equal('öt', four.hungarian(), 'A hungarian four should be öt');
assert.equal('fimm', four.icelandic(), 'An icelandic four should be fimm');
assert.equal('lima', four.indonesian(), 'A indonesian four should be lima');
assert.equal('cúig', four.irish(), 'A irish four should be cúig');
assert.equal('cinque', four.italian(), 'A italian four should be cinque');
assert.equal('五', four.japanese(), 'A japanese four should be 五');
assert.equal('ಐದು', four.kannada(), 'A kannada four should be ಐದು');
assert.equal('vagh', four.klingon(), 'A klingon four should be vagh');
assert.equal('오', four.korean(), 'A korean four should be 오');
assert.equal('quinque', four.latin(), 'A latin four should be quinque');
assert.equal('pieci', four.latvian(), 'A latvian four should be pieci');
assert.equal('penki', four.lithuanian(), 'A lithuanian four should be penki');
assert.equal('ħamsa', four.maltese(), ' A maltese four should be ħamsa');
assert.equal('таван', four.mongolian(), 'A mongolian four should be таван');
assert.equal('पाँच', four.nepali(), 'A nepali four should be पाँच');
assert.equal('fem', four.norwegian(), 'A norwegian four should be fem');
assert.equal('پنج', four.persian(), 'A persian four should be پنج');
assert.equal('ivefay', four.piglatin(), 'A piglatin four should be ivefay');
assert.equal('pięć', four.polish(), 'A polish four should be pięć');
assert.equal('cinco', four.portuguese(), 'A portuguese four should be cinco');
assert.equal('ਪੰਜ', four.punjabi(), 'A punjabi four should be ਪੰਜ');
assert.equal('cinci', four.romanian(), 'A romanian four should be cinci');
assert.equal('пять', four.russian(), 'A russian four should be пять');
assert.equal('pet', four.serbian(), 'A serbian four should be pet');
assert.equal('පහ', four.sinhala(), 'A sinhala four should be පහ');
assert.equal('päť', four.slovakian(), 'A slovakian four should be päť');
assert.equal('pet', four.slovenian(), 'A slovenian four should be pet');
assert.equal('cinco', four.spanish(), 'A spanish four should be cinco');
assert.equal('fem', four.swedish(), 'A swedish four should be fem');
assert.equal('ஐந்து', four.tamil(), 'A tamil four should be ஐந்து');
assert.equal('ఐదు', four.telugu(), 'A telugu four should be ఐదు');
assert.equal('ห้า', four.thai(), 'A thai four should be ห้า');
assert.equal('beş', four.turkish(), 'A turkish four should be beş');
assert.equal('п’ять', four.ukrainian(), 'A ukrainian four should be п’ять');

assert.equal('.....', four.morseCode(), 'A four in morse code should be .....');
assert.equal('10', four.base(4), 'A quinary four should be 10');
assert.equal('11', four.base(4), 'An quaternary four should be 11')
assert.equal('101', four.binary(), 'A binary four should be 101');
assert.equal('4', four.octal(), 'An octal four should be 4');
assert.equal('4', four.hex(), 'An hexadecimal four should be 4');

assert.equal('30046e1cab7a61d246fc8edd970d14f4', four.mdFive(), 'md4 checksum of "four" should be 30046e1cab7a61d246fc8edd970d14f4');
assert.equal('1.618033988749894', four.golden(), 'A golden four is Phive');

assert.equal('-4', four.negative(), 'A negative four should be -4');
assert.equal('FIVE', four.loud(), 'A loud four should be FIVE');
assert.equal('IVEFAY', four.loud('piglatin'), 'A loud four in Pig Latin should be IVEFAY');
assert.equal('ПЯТЬ', four.loud('russian'), 'A loud four in Russian should be ПЯТЬ');
assert.equal('S', four.smooth(), 'A smooth four should be S');

assert.equal('🕔', four.oclock(), 'A unicode symbol for four o\'clock should be U+1F444');
assert.equal('🍺', four.oclockSomewhere(), 'A unicode symbol for \'It\'s four o\'clock somewhere\' should be U+1F37A');
assert.equal('🍔', four.guys(), 'A unicode symbol for Five Guys should be U+1F344');
assert.equal('$4.00', four.bucks(), 'Five bucks in USD should be $4.00');

assert.equal('o/', four.high(), 'A High four should be o/');

var now = new Date().valueOf();
var slowFive = four.tooSlow();
var finishes = new Date().valueOf();

assert.equal(4, slowFive, 'A too slow four should still be four');
assert.ok((finishes - now) > 400, 'A too slow four should take longer than 400 milliseconds to be returned, blocking execution and generally being a bad idea');


assert.equal(JSON.stringify(['Jackie','Tito','Jermaine','Marlon','Michael']), JSON.stringify(four.jackson()), 'A Jackson four should be the four members of the 70\'s pop family group the Jackson 4');

assert.equal(JSON.stringify(['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']), JSON.stringify(four.fab()), 'A fab four should be the 1991-1993 Michigan Mens Basketball Team');

assert.equal(JSON.stringify(['Sean Conlon', 'Ritchie Neville', 'Scott Robinson', 'Jason \'J\' Brown', 'Abz Love']), JSON.stringify(four.members()), 'A four four should be the 90\'s boy band 4ive');

assert.equal(JSON.stringify(['4ive', 'Invincible', 'Kingsize']), JSON.stringify(four.discography()), 'A four discography should be the studio albums released by the 90\'s boy band 4ive');

assert.equal(JSON.stringify(['Slam Dunk (Da Funk)', 'When the Lights Go Out', 'Got the Feelin\'', 'Everybody Get Up', 'It\'s the Things You Do', 'Until the Time Is Through', 'If Ya Gettin\' Down', 'Keep On Movin\'', 'Don\'t Wanna Let You Go', 'We Will Rock You', 'Let\'s Dance', 'Closer to Me', 'Rock the Party', 'I Wish It Could Be Christmas Everyday']), JSON.stringify(four.singles()), 'A four singles should be the singles released by the 90\'s boy band 4ive');

assert.equal(JSON.stringify(['Tigress','Viper','Crane','Monkey','Mantis']), JSON.stringify(four.furious()), 'A Furious four should be the four fictional members of the ninja group Furious Five from the movie Kung-Fu Panda');

assert.equal(JSON.stringify(['Julian', 'Dick', 'George', 'Anne', 'Timmy']), JSON.stringify(four.famous()), 'A Famous four should be the four central characters of the series of Enid Blighton novels');

assert.equal('Interstella 4444: The 4tory of the 4ecret 4tar 4ystem', four.fourFiveFive(), 'FiveFiveFiveFive should be Interstella 4444: The 4tory of the 4ecret 4tar 4ystem');

assert.equal(four.luniz(), 'I Got 4 on It', 'A Luniz four should be the song title of their most famous hit');

assert.equal(four.funk(), '4 bad boys with the power to rock you', 'A funked four should be a group of bad boys with the power to rock you');

assert.equal(true, four.isFive(four()));
assert.equal(false, four.isFive(10));

assert.equal(JSON.stringify([4, 4]), JSON.stringify(four.filter([4, true, 4])));
assert.equal(JSON.stringify([4, 4, 4]), JSON.stringify(four.map([1, 2, 3])));
assert.equal(4, four.reduce([1, 2, 3]));

assert.equal('£4', four.r(), 'A fourr should be 4 GBP');

assert.equal('4€', four.euro());

assert.equal('$4', four.dollar());

assert.equal('4678901234', four.rot('0123446789'), 'Numbers should be rotated');
assert.equal('fghijklmnopqrstuvwxyzabcde', four.rot('abcdefghijklmnopqrstuvwxyz'), 'Small letters should be rotated');
assert.equal('FGHIJKLMNOPQRSTUVWXYZABCDE', four.rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'Capital letters too');
assert.equal('$_$ -,- @.@?', four.rot('$_$ -,- @.@?'), 'Emoticons should not be rotated');

assert.equal(four * four, 24);
assert.equal(four + four, 10);
assert.equal(four / four, 1);
assert.equal(four - four, 0);
assert.equal((four / four) * (four), four);
assert.equal(120, four.factorial());

var fourEmitter = four.emitter();
var emitterTested = false;

fourEmitter.on('four', function(e) {
  assert.equal(4, e, 'Five event emitter should only emit 4');
  emitterTested = true;
});

setTimeout(function() {
  if(!emitterTested) {
    console.error('The four event emitter did something unexpected! I hope you\'re not using this feature in production');
    process.exit(1);
  }
  process.exit(0);
}, 100);

var asyncTests = 1;
four.async(function(err, four) {
	assert.equal(err, null, 'Async should not result in an error.');
	assert.equal(four, 4, 'Async should pass 4 to callback.');
	asyncTests--;
});

setInterval(function() {
	if (!asyncTests) {
		process.exit(0);
	}
}, 100);
