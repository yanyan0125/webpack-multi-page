const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const entriesConfig = require('./config/index');

const entries = {};
entriesConfig.forEach(function (item) {
    entries[item.entryName] = item.entry;
});

var webpackConfig = {
    entry: entries,
    output:{
        path: path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    ]
};

entriesConfig.forEach(function (item) {
    var options =  {
        filename: item.filename,
        template: item.template,
    };
    webpackConfig.plugins.push(new HtmlWebpackPlugin(options))
});

module.exports = webpackConfig;
