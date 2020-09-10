const fs = require('fs');
const request = require('request');

// This function creates a new directory named 'meme', if it already exists it shows error. source : https://coderrocketfuel.com/article/create-a-new-directory-in-node-js

fs.mkdir('./meme', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('New directory successfully created.');
  }
});

//***** This downloads an image from the links given by an array  ********/

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on('close', callback);
  });
};

let allImageUrl = [
  `https://api.memegen.link/images/bender/your_text/goes_here.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/tenguy/your_text/goes_here.jpg?preview=true&watermark=none`,
  `https://memegen.link/afraid/i_don't_know_what_this_meme_is_for/and_at_this_point_i'm_too_afraid_to_ask.jpg?preview=true&watermark=none&share=true`,
  `https://api.memegen.link/images/apcr/your_text/goes_here.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/older/it's_an_older_meme_sir/but_it_checks_out.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/aag/_/aliens.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/atis/and_then_i_said/the_exam_will_only_contain_what_we've_covered_in_lectures.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/tried/at_least/you_tried.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/biw/gets_iced_coffee/in_the_winter.jpg?preview=true&watermark=none`,
  `https://api.memegen.link/images/stew/_/baby,_you've_got_a_stew_going!.jpg?preview=true&watermark=none`,
];
let arrImageNames = [
  './meme/1.jpg',
  './meme/2.jpg',
  './meme/3.jpg',
  './meme/4.jpg',
  './meme/5.jpg',
  './meme/6.jpg',
  './meme/7.jpg',
  './meme/8.jpg',
  './meme/9.jpg',
  './meme/10.jpg',
];

for (i = 0; i < 10; i++) {
  download(allImageUrl[i], arrImageNames[i], () => {});
}
