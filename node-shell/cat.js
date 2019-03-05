
const done = require('./done')

module.exports = function (fileName) {

console.log(fileName);

  const fs = require('fs')

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    done(data)
    done('\nprompt > ')
  });

}
