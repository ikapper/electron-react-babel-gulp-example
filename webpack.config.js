module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // メインのJS
    entry: "./renderer/index.jsx",
    // 出力ファイル
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx$/, // 拡張子がjsxで
            exclude: /node_modules/, // node_modulesフォルダ配下でなければ
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}