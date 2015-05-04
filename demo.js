var T = require('./Taken.js');

T('test').
  map(function(val, next){val.num = val.num+1;next(val);}).
  map(function(val, next){console.log(val.num, val.val);next(val)});

T('test').pub({val:'hi', num:1});
