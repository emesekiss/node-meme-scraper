const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

// 1. **** Access the website (given by the url variable) to retrieve the HTML source code -- using request-promise library

// 2. ***** To find the src within the meme-img class **** (-- allImages variable) I need to use cheerio library

// 3. **** To create a for loop function to download the first 10 images.

const originUrl = 'https://memegen.link/examples';

const imageApiUrl = 'https://api.memegen.link/images';

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on('close', callback);
  });
};

fs.mkdir('./meme', (err) => {
  if (err) {
    console.log(`The 'meme' directory already exists.`);
  } else {
    console.log('New directory successfully created.');
  }
});

request(originUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const allImages = cheerio('.meme-img', body);
  for (let i = 0; i < 10; i++) {
    download(
      imageApiUrl + allImages[i].attribs.src,
      `./meme/${i}.jpg`,
      () => {},
    );
    console.log(`downloaded ${i}.jpg`);
  }
});
