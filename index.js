var koa = require('koa');
var bodyparser = require('koa-bodyparser');

var app = new koa();
app.use(bodyparser());
app.use(function*(ctx) {
  this.body = this.request.body;
});

module.exports = app;
