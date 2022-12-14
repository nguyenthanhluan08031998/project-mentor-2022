module.exports = {
    entry: [
      './src/style.scss'
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: '../dist/style.min.css',
      })
    ]
  };