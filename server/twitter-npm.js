const twit = require('twitter');
const twitter = new twit({
  consumer_key: '75EJ6L7OIFeC3sYhO0YUDX7qa',
  consumer_secret: 'fvwu0UAAVYMk7onzOdew14nqj8QbdS0XuGlsAlRReqVHvdVRZ4',
  access_token_key: '949848603522039808-i4esEowB0UcQy6rgzXyHVhCrEzWegQ7',
  access_token_secret: 'GBxIDkIHREOzQEnClIfTbSzTqIV6rnjfP7lJxMGZnjO9c'
});

const count = 0;
const util = require('util');

twitter.stream('filter', {track: 'love'}, (stream) => {
  stream.on('data', (data) => {
    console.log(util.inspect(data));
    stream.destroy();
    process.exit(0);
  });
  stream.on('error', function(error) {
    console.log('You have an error!');
    throw error;
  });

});
