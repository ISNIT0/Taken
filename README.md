# Taken
Not Your Mother's FRP framework.

A simple, lightweight JavaScript Framework for handling FRP.

## Installation

Include the script:

```html
<script src="/path/to/taken.js"></script>
```

```
npm install taken
```
```javascript
var T = require('taken');
```

## Usage

Channels can be saved globally with 
```javascript
T( *ChannelName* ).map
```
or as a variable with 
```javascript
var ChannelName = T().map
```


Listen to channel:

```javascript
T('xyz').map(function(value){
  console.log(value);
});
```
or
```javascript
var myChannel = T().map(function(value){
  console.log(value);
});
```

Send to channel

```javascript
  T('xyz')('Hello World!');
```
or
```javascript
  myChannel('Hello World!');
```

Listen to multiple channels:

```javascript
T('xyz abc').map(function(value){
  console.log(value);
});
```
or
```javascript
var myChannels = T('xyz abc').map(function(value){
  console.log(value);
});
```

Send to multiple channels:

```javascript
T('xyz abc')('Hello World!');
```
or
```javascript
myChannels('Hello World!');
```


Historic merge:

```javascript
T('xyz zyx').historic(function(xyz, zyx){
  console.log(xyz, zyx);
});

T('xyz')('Hello'); //Hello undefined
T('zyx')('World!'); //Hello World!
T('xyz')('Goodbye'); //Goodbye World!
```

Forwarding to channel:

```javascript
T('merged').map(function(value){
  console.log(value);
});
T('xyz').map(T('merged'));
T('zyx').map(T('merged'));

T('xyz')('Hello'); //Hello
T('zyx')('World!'); //World!
```
or
```javascript
var Merged = T();
  
T('xyz').map(T(Merged));
T('zyx').map(T(Merged));
```

Chaining:

```javascript
T('xyz').map(function(value, next){// value == 0
  next(value + 1); //Next function in chain is called with value passed to next
}).map(function(value, next){// value == 1
  next(value + 1);
}).map(function(value){// value == 2
  console.log(value);
});
```

Filtering:

```javascript
T('xyz').map(function(value, next){
  val<10 && next(value); //If val is less than ten, continue with chain.
}).map(function(value){
  console.log(value); //5
});
```

Intervals:

```javascript
T('xyz').intervals(300);

T('xyz').map(function(){ //Every 300 miliseconds
  console.log(Date.now());
});
```

## Authors

[Joe Reeve](https://github.com/isnit0)
