'use strict';
var path = require('path');
var ejs = require('ejs');
var fs = require('fs');
var ejs = require('ejs');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var srcDir = path.resolve(__dirname, '../app/javascripts/');
var env = process.env.NODE_ENV;
var domain = require('./domain.' +env + '.js');
// 入口文件 && 模板
var tmplFiles = ['index'];
var entryFiles = [path.join(srcDir, 'index.js')];
var entries = function() {
    var  map = {}
    entryFiles.forEach(function(filePath) {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      var fileArray = [];
      fileArray.push(filePath);
      map[filename] = fileArray;
    });
    return map;
};
var entriPath = entries();
var pluginList = [];
var jsOutputName = '';
pluginList.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
);
pluginList.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
pluginList.push(
  new AssetsPlugin({
    filename: 'assets.json',
	  processOutput: function (assets) {
      tmplFiles.forEach(function(fp) {
        var srcpath = path.join(__dirname, '../app/' + fp +'.html');
        var distpath = path.join(__dirname, '../dist/' + fp +'.html');
        // 读取文件
        fs.readFile(srcpath,'utf-8',function(err,data){
          var htmlStr = ejs.render(data, {
            isdebug: false,
            assetshash: assets[fp].js
          });
          fs.writeFile(distpath,htmlStr,function(err){
            if(!err)
              console.log("写入成功！")
          });
        });
      });
	  }
	})
);

jsOutputName = '[name]_[hash:8].js';
module.exports = {
  entry: entriPath,
  output: {
    path: path.resolve(__dirname, '../dist/jsmin/'),
    // 主要用于code spling, 静态资源域名地址
    publicPath: domain.cdn,
    filename: jsOutputName,
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /(node_modules|bower_components)/
      }, {
        test:  /\.(png|jpg)$/,
        loader: 'url?limit=25000',
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, "../node_modules"),
    alias: {
      'vue':path.join(__dirname, "../node_modules/vue/dist/vue.js"),
      'vuerouter':path.join(__dirname, "../node_modules/vue-router/dist/vue-router.js"),
      'vuex':path.join(__dirname, "../node_modules/vuex/dist/vuex.js"),
      'vue-resource':path.join(__dirname, "../node_modules/vue-resource/dist/vue-resource.js"),
    }
  },
  resolveLoader: {
    root: path.join(__dirname, "../node_modules"),
  },
  vue: {
    postcss: [
      require('postcss-cssnext')(),
      require('postcss-nesting')(),
      require('postcss-bem')({
        defaultNamespace: undefined, // default namespace to use, none by default
        style: 'bem', // suit or bem, suit by default,
        separators: {
          'modifier': '-' // overwrite any default separator for chosen style
        },
        shortcuts: {
          'component': 'b',
          'modifier': 'm' //override at-rule name
        }
      }),
    ]
  },
  plugins: pluginList
};
