'use strict';

// 生产环境配置
// =================================
module.exports = {
  port:     process.env.PORT || 8100,
  mongo: {
    uri: 'mongodb://localhost/julian',
    options: {
      user:'user',          //生产环境用户名
      pass:'pass'           //生产环境密码
    }
  }
};
