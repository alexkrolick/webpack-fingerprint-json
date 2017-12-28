const path = require('path');
const fs = require('fs');

function WebpackFingerprint(opts) {
  opts = opts || {};
  this.opts = Object.assign({
    filename: "fingerprint.json",
    json: {},
  }, opts);
}

WebpackFingerprint.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('done', function(data) {
    const stats = Object.assign({}, {
      date: new Date(),
    }, self.opts.json);

    fs.writeFile(self.opts.filename, JSON.stringify(stats, null, 2), function(err) {
      if(err) console.warn("Unable to write fingerprint file", err);
    })
  });
};

module.exports = WebpackFingerprint;
