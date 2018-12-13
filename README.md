#[Vue warn]: Failed to mount component: template or render function not defined. 

### Navigator
**[Folder Structure](###Folder-Structure)**<br>
**[app.js](#app.js)**<br>
**[App.vue](###App.vue)**<br>
*[package.json](#package.json)*<br>
*[index.html](#index.html)*<br>
*[webpack.base.conf.js](#webpack.base.conf.js)*<br>

#### Folder Structure
**[BACK](#Navigator)**


```
root
 |-dist
 |-node_modules
 |-src
 |	|-components
 |	|-pages
 |	|-router
 |	|-app.js
 |	|-App.vue
 |
 |-package.json
 |-webpack.base.conf.js
```

---

#### app.js
**[BACK](#Navigator)**

```javascript
import Vue from 'vue'
import App from './App.vue'
import path from 'path'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

---

#### App.vue
**[BACK](#Navigator)**

```HTML
<template>
    <div>
        <h1>Hello World</h1>
        <button>submit</button>
    </div>
</template>
```

---

#### package.json
**[BACK](#Navigator)**

```json
{
  "name": "vue-webpack_demo",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "element-ui": "^2.4.11",
    "vue": "^2.5.19",
    "vue-router": "^3.0.2",
    "vux": "^2.9.2",
    "vux-loader": "^1.2.9"
  },
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.4",
    "babel-plugin-component": "^1.1.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "css-loader": "^2.0.0",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "vue-loader": "^15.4.2",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.5.19",
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.base.conf.js",
    "dev": "webpack-dev-server --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

---

#### index.html
**[BACK](#Navigator)**

```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Vue Webpack Demo</title>
</head>

<body>
    <div id="app"></div>
    <script type="text/javascript" src="app.bundle.js"></script>
</body>

</html>
```

---

#### webpack.base.conf.js
**[BACK](#Navigator)**

```javascript
const vuxLoader = require('vux-loader')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const webpackConfig = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'vux$': '../node_modules/vux',
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
})
```