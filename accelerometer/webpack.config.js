module.exports = {
    // メインとなるJavaScriptファイル
    entry: './src/main.js',

    // ファイルの出力先設定
    output: {
        // ディレクトリ名
        path: `${__dirname}/`,
        // ファイル名
        filename: './dist/bundle.js'
    }
};
