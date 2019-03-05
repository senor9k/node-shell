
const done = require('./done')

module.exports = function () {
  done(process.cwd())
  // process.stdout.write(process.cwd())
  // process.stdout.write('\nprompt > ')
}
