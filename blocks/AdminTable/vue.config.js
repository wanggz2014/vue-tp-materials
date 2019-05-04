module.exports = {
  outputDir: 'build',
  publicPath: './',
  //关闭SourceMap
  productionSourceMap: false,
  runtimeCompiler:true,
  chainWebpack: (config) => {
    config
      .entryPoints.clear()
      .end()
      .entry('index')
      .add('./demo/index')
      .end()
      .output
      .filename('[name].bundle.js');

    config
      .plugin('html')
      .tap((args) => {
        args[0].template = './demo/index.html';
        args[0].minify=false;
        return args;
      });

      //去除代码压缩
      config
        .optimization
        .minimize(false);
      
      //去除预加载
      config.plugins.delete('prefetch');
  },
};
