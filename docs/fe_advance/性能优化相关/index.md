> 记录性能优化相关操作

### 1. 使用 gzip 压缩，减少代码体积

### 2. 使用 image-webpack-loader 进行图片压缩

npm yarn 安装的这个插件都是有问题的，尽量使用 cnpm 进行安装

### 3. 依赖按需引入，对于 element-ui 以及 echarts 这种体积较大的库

### 4. 对于 moment.js 这种库，查看有没有功能相同，对应体积占比较小的库进行替换 例如 day.js