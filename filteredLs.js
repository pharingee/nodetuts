var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], function (err, files) {
  if (err) throw err;
  var extFiles = []
  if (process.argv[3]) {
    extFiles = files.filter(function (file) {
      return path.extname(file) == "." + process.argv[3];
    });
  }else {
    extFiles = files
  }

  extFiles.forEach(function (file) {
    console.log(file);
  });
});
