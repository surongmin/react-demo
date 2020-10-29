module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          // 字面量的具体内容显示出来
          shouldExtractLiteralValuesFromEnum: true,
          // 过滤掉本身的属性 只显示自己定义的
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }
            return true
          }
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
