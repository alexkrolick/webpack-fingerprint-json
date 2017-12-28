Webpack Fingerprint Plugin
====================

Writes a JSON file with build metadata

Based on [Webpack Fingerprint](https://www.npmjs.com/package/webpack-fingerprint) but without traversing package dependencies

```
$ npm install --save webpack-fingerprint-json
```

## Examples

### Basic

```js
var WebpackFingerprint = require("webpack-fingerprint");

module.exports = {
  plugins: [    
    new WebpackFingerprint({
      filename: "fingerprint.json" // Default
    })
  ]
}
```

Will produce a file called `fingerprint.json` with following info:

```js
{
  "date": "2017-09-17T15:56:50.468Z",
}
```

### Custom information

You can provide additional information to also be stored in the resulting file. To do so, add additional fields to the configuration object.

```js
var WebpackFingerprint = require("webpack-fingerprint");

module.exports = {
  plugins: [    
    new WebpackFingerprint({
      build_number: process.env.CI_BUILD_NUMBER
    })
  ]
}
```
