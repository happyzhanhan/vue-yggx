# vue-yggx
new

### 1.安装node.js
* 官网下载[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* 然后下一步下一步--finish
* 检测PATH环境变量是否配置了Node.js，点击开始=》运行=》输入"cmd" => 输入命令"path"
* 命令查看安装是否成功，查看版本：
```
node -version
```

### 2.安装npm
因为node已经集成了npm，直接查看版本：
```
npm -v
```
想要升级：
```
npm install npm -g
```

### 3.安装webpack
```
npm install -g webpack
```

### 4.安装vue
```
npm i -g vue-cli
```

### 5.创建项目
```
mkdir my-project && cd my-project
```

### 6.初始化包
```
vue init webpack
```

### 7.安装饿了嘛组件
```
npm i && npm i element-ui
```

### 8.中间报错根据提示安装依赖peer,

```
npm install sass sass-loader node-sass -D -save
```
我喜欢用scss开发，我安装了预处理器，这样我的".vue"文件里就可以用scss了
```
<style lang="scss">
a{
  b{
    c{
      color:red;
    }
  }
}
</style>
```

### 9.预览
```
npm run dev
```

### 10.打包上传服务器

```
npm run build
```
生成dist文件夹，仅上传这个就可以了。其中的坑出现服务器无法显示页面，主要原因更改：
config文件夹里的index.js配置中的assetsPublicPath : / 为 assetsPublicPath: 'XXXXXXX/dist/',



