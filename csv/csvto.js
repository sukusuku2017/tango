const Converter = require('csvtojson').Converter;
const _ = require('underscore');
const jsonfile = require('jsonfile');

let resultArray = [];

let tempFuriArray;
let tempWordArray;

const csv = require('csvtojson')
csv()
.fromFile('./csv/test.csv')
.on('csv',(csvRow)=>{

  if (!csvRow[0]) {
    return;
  }

  if (csvRow[0] == '후리가나') {
    tempFuriArray = csvRow;
  }

  if (csvRow[0] == '단어') {
    console.log('====== 단어 라인 ======');
    tempWordArray = [];
    let newWord;

    _.each(csvRow, function(element, index) {

      if (element == '단어') {

        newWord = {
          characters: []
        };

      } else {

        if (element) {
          newWord.characters.push({
            base: element
          });
        }

        if (!element || index == csvRow.length - 1) {
          if (newWord) {
            tempWordArray.push( _.clone(newWord) );
            newWord = null;
          }
        }
      }
    });
  }

  if (csvRow[0] == '한자') {

    let word;
    let indexWord = 0;
    let indexCharacters = 0;

    _.each(csvRow, function(element, index) {

      if (element == '한자') {
        word = tempWordArray[indexWord];
        indexWord++;
        indexCharacters = 0;
      } else {
        if (element) {
          word['characters'][indexCharacters]['mean'] = element;

          word['characters'][indexCharacters]['ruby'] = tempFuriArray[index];

        }
        indexCharacters++;
      }

    });
  }


  if (csvRow[0] == '의미') {

    let word;
    let indexWord = 0;

    _.each(csvRow, function(element, index) {

      if (element == '의미') {
        word = tempWordArray[indexWord];
      } else {
        if (element) {
          word['mean'] = element;
          indexWord++;
        }
      }

    });

    if (tempWordArray.length) {
      console.log(JSON.stringify(tempWordArray));
      resultArray = resultArray.concat(tempWordArray);
    }
  }

})
.on('done',()=>{

  let result = {
    "chapter" : "ch01",
    "update" : "2017-01-19",
    "author" : [
      "Phil"
    ],
    "content" : resultArray
  }

  jsonfile.writeFile('./csv/test.json', result, {spaces: 2}, function(err) {
    console.error(err)
  });
  console.log('end')
})