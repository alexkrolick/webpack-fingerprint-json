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
const WebpackFingerprint = require("webpack-fingerprint-json");

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

You can provide additional information to also be stored in the resulting file. To do so, add fields to the `json` field of the configuration object.

```js
const WebpackFingerprint = require("webpack-fingerprint-json");

module.exports = {
  plugins: [    
    new WebpackFingerprint({
      filename: path.resolve(__dirname, '../another/folder', 'build.json'), // Custom filepath
      json: {
        build_number: process.env.CI_BUILD_NUMBER, // Custom JSON values
      },
    })
  ]
}
```
