var T = function(id, fn, helpers) {
  fn = function(value) {
    T.channels[id].forEach(function(handlerSet) {
      fn.genHandler(handlerSet)(value);
    });
  };
  Object.keys(helpers = {
    handlerSet: (T.channels[id] = (T.channels[id] || []).concat([[]])).slice(-1)[0],
    genHandler: function(allHandlers) {
      return function(value) {
        (allHandlers[0] || Object)(value, function(value) {
          fn.genHandler(allHandlers.slice(1))(value);
        });
      };
    },
    map: function(handler) {
      fn.handlerSet.push(handler);
      return fn;
    }
  }).map(function(key) {
    fn[key] = helpers[key];
  });
  return fn;
};
T.channels = {};
module.exports = T;
