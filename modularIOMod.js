var path = require('path');
var fs = require('fs');

module.exports = function (dirName, ext, callback) {

  fs.readdir(dirName, function (err, files) {
    if (err) {
      return callback(err, null);
    }

    var extFiles = [];

    if (ext) {
      extFiles = files.filter(function (file) {
        return path.extname(file) === "." + ext;
      });
    } else {
      extFiles = files;
    }

    callback(null, extFiles);

  });
};
