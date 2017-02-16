const Converter = require('csvtojson').Converter;
const csv = require('csvtojson')
const _ = require('underscore');
const jsonfile = require('jsonfile');

const CHAPTER = '35';
let tempArray = [];
let result = {
  "chapter" : CHAPTER,
  "update" : "2017-02-17",
  "author" : [
    "Phil"
  ],
  "subject" : {},
  "content" : []
};

let tempFuri;
let tempKanji;
let tempOption;
let tempMean;

csv()
.fromFile('./csv/sentence/' + CHAPTER + '.csv')
.on('csv', (csvRow) => {

  if (!csvRow[0]) {
    return;
  }

  if (csvRow[0] == '1furigana') {
    tempFuri = csvRow.slice(1);
  }
  if (csvRow[0] == '2kanji') {
    tempKanji = csvRow.slice(1);
  }
  if (csvRow[0] == '3option') {
    tempOption = csvRow.slice(1);
  }
  if (csvRow[0] == '4mean') {
    tempMean = csvRow[1];
  }

  if (csvRow[0] == '4mean') {
    let characters = [];
    _.each(tempKanji, function(el, index) {

      let obj = {};

      if (el) {
        obj.base = el;


        let furi = tempFuri[index];
        if (furi) {
          obj.ruby = furi;
        }

        let opt = tempOption[index];
        if (opt) {
          if (opt == 'c') {
            obj.color = true;
          }
          if (opt == 'b') {
            obj.bold = true;
          }
        }

        characters.push(obj);
      }
    });

    tempArray.push({
      characters: characters,
      mean: tempMean
    });
  }
})
.on('done', () => {

  result.subject = tempArray[0];
  result.content = tempArray.slice(1);

  jsonfile.writeFile('./dist/sentences/st' + CHAPTER + '.json', result, {spaces: 2}, function(err) {
    console.error(err)
  });
  console.log('end')
})
