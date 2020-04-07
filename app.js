//nodemon giúp hk phải stop rồi run lại, chỉ cần ctrl + s sẽ chạy luôn
const http = require('http');

const config = require('./MineModule/config');
const helpers = require('./MineModule/helper');

http.createServer(helpers.onRequest).listen(config.port);