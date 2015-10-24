# koa-mirror

A koa server whose response body is the same as the request body. Useful for testing client libs.

## Example

``` js
var assert = require('assert');
var app = require('koa-mirror');
var request = require('supertest');
var Client = require('your-client');
var port = 3000;
var client = new Client(`http://localhost:${port}`);

describe('Client', function() {
  before(function(done) {
    app.listen(port, done);
  });

  it('should work', function (done) {
    var body = { name: 'Travis' };
    client.create(body, function(err, res) {
      assert.deepEqual(body, res.body);
      done();
    });
  });
});
```

## Install

``` sh
npm install koa-mirror
```

## License

MIT
