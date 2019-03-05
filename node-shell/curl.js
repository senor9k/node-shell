
const done = require('./done')

module.exports = function (url) {

  const request = require('request')
  // console.log(url);

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    done('\nprompt > ')
  });

}
