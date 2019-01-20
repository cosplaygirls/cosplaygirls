const cosplaygirls = require('./cosplaygirls.json');

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(cosplaygirls),
  });
};
