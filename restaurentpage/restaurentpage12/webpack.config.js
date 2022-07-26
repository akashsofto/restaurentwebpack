const path = require('path');


module.exports = {

    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    //loader
    module: {
  
      rules: [
  
        {
  
          test: /\.css$/,
  
          use: ["style-loader", "css-loader"],
  
        },
  
        {
  
          test: /\.html$/,
  
          use: ["html-loader"],
  
        },
  
        {
  
          test: /\.(svg|png|jpg|gif|jpeg)$/,
  
          use: {
  
            loader: "file-loader",
  
            options: {
  
              name: "[name].[hash].[ext]",
  
              outputPath: "imgs",
  
            },
  
          },
  
        },
  
      ],
  
    },
  
  };