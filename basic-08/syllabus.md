# Basic 08

### Section 1 - 30

* Install webpack & dependencies

```
npm i -D webpack  webpack-cli webpack-dev-server  typescript ts-loader webpack-md5-hash extract-text-webpack-plugin@next webpack-md5-hash clean-webpack-plugin node-sass sass-loader css-loader postcss-loader 


```

#### postcss.config.js

```
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}
```


