var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var strings = [];
var count = 0;

function juggle(url) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
      strings.push(data.toString());
      count++;

      if (count < urls.length) {
        juggle(urls[count]);
      } else {
        strings.forEach(function (item) {
          console.log(item);
        });
      }
    }));
  });
}

juggle(urls[0]);
