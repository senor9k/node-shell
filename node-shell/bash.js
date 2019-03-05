// console.log('test')

const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

// Output a prompt
process.stdout.write('prompt >')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  const cmd = input.split(' ')[0]

  if (cmd === 'pwd') {
    pwd()
  } else if (cmd === 'ls') {
    ls()
  } else if (cmd === 'cat') {
    const fileName = input.split(' ')[1]
    cat(fileName)
  } else if (cmd === 'curl') {
    const url = input.split(' ')[1]
    curl(url)
  } else {
    process.stdout.write('You type: ' + cmd)
  }

  process.stdout.write('\nprompt > ')
})
