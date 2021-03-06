exports.register = function(server, options, next) {

  // Wait 10 seconds for existing connections to close then exit.
  var stop = function() {
    server.root.stop({
      timeout: 10 * 1000
    }, function() {
        process.exit();
      });
  };
  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
