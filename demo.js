var T = require('./Taken.js');

T('xyz').
  map(function(val, next){val.num = val.num+1;next(val);}).
  map(function(val, next){console.log(val.num, val.val);});

//T('zyx').map(function(val){console.log(val.val+' World!')});

T('xyz zyx')({val:'hi', num:1});

var Test = T().map(function(val){console.log(val)});

Test('hi');


T('xyz zyx').historic(function(xyz, zyx){
  console.log(xyz, zyx)
});
T('xyz')('Hi');
T('zyx')('Joe');


T('merged').map(function(value){
  console.log(value);
});
T('xyz').map(T('merged'));
T('zyx').map(T('merged'));



/*
T('intervals').map(console.log);
T('intervals').intervals(300);
*/

/*
  $('.myButton').click(Test);
  $('.myButton').on('click', T('xyz'));
*/
