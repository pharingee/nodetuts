var modIO = require('./modularIOMod.js');

modIO(process.argv[2], process.argv[3], function (err, files) {
  if (err) throw err;
  files.forEach(function (file) {
    console.log(file);
  });
});
