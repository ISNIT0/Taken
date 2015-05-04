var T = function(ids, fn, helpers, handlers) {
  ids = (ids || '').split(' ');
  ids.forEach(function(id) {
    (T.channels[id] = (T.channels[id] || []).concat([handlers = handlers || []]))
  });
  fn = function(value) {
    ids.forEach(function(id) {
      T.channels[id].forEach(function(handlerSet) {
        fn.genHandler(handlerSet)(value);
      });
    });
  };
  Object.keys(helpers = {
    genHandler: function(allHandlers) {
      return function(value) {
        (allHandlers[0] || Object)(value, function(value) {
          fn.genHandler(allHandlers.slice(1))(value);
        });
      };
    },
    map: function(handler) {
      handlers.push(handler);
      return fn;
    },
    combine: function(callback) {
      var tmp = function(value, index) {
        this.array = this.array||[];
        this.array[index] = value;
        callback.apply({}, this.array);
      };
      ids.forEach(function(id, index) {
        (T.channels[id] = T.channels[id] || []).push([function(value) {
          tmp(value, index);
        }]);
      });
    }
  }).map(function(key) {
    fn[key] = helpers[key];
  });
  return fn;
};
T.channels = {};
module.exports = T;
