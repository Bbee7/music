module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 把所有元素的 px 转换为 rem
      // rootValue 转换 px 的基准值
      // 例如一个元素宽度为75 px，则换成 rem 之后为2 rem
      rootValue: 37.5,
      porpList: ['*']
    }
  }
}
