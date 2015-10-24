var mirror = require('.');
var request = require('supertest');
var assert = require('assert');

describe('koa-mirror', function() {
  it('should work', function (done) {
    var body = { name: 'Travis' };
    request(mirror.listen())
      .post('/test')
      .send(body)
      .end(function(err, res) {
        assert.equal(err, null);
        assert.deepEqual(res.body, body);
        done();
      });
  });
});
