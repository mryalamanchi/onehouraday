
const path = require('path');
console.log(__dirname);

module.exports = {
    //webpack configurations details
    entry: './frontend/src/app.js',
    output:{
        //path is the absolute path on your machine where
        //you want to output that web pack file
        //joining absolute path with the local path to the public folder
        path:path.join(__dirname,'frontend','public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
          {
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
          },
          {
            test:/\.s?css$/,
            use:[
                  "style-loader",
                  "css-loader",
                  "sass-loader"
            ]
           },
           {
             test:/\.(png|jpg)$/,
             use:[{
               loader:'url-loader',
               options:{limit:1000}
             }]
           }
       ],
    },

    devtool: 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname,'frontend', 'public')
      },
  };
