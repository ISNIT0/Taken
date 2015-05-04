var T = require('./Taken.js');

T('xyz').
  map(function(val, next){val.num = val.num+1;next(val);}).
  map(function(val, next){console.log(val.num, val.val);});

T('xyz')({val:'hi', num:1});


var Test = T().map(function(val){console.log(val)});

Test('hi');
