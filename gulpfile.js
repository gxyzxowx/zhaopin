/*
 * @Date         : 2020-03-11 11:55:40
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-05-12 14:54:31
 * @FilePath     : \07wx_zhaopin\gulpfile.js
 */
// require('babel-polyfill');     //es6新API
const { src, dest, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const del = require('del');
// 引入后，plugins.uglify = require('gulp-uglify')
const plugins = require('gulp-load-plugins')();
var rev = require('gulp-rev');//给合成的文件加MD5戳
// 压缩js uglifyjs
function js(cb) {
  console.log('this is js scripts task');
  // 源文件
  src('./js/src/*.js')
    .pipe(plugins.babel(
      {
        presets: ['es2015']
      }
    ))
    // 管道送入下一个环节：混淆JS代码
    .pipe(plugins.uglify())
    // 管道送入下一环节：输出dest（指定目标文件） 到dist目录
    .pipe(dest('./js/dist'))
    .pipe(reload({ stream: true }));
  // 把传入的callback再执行一下，相当于告诉gulp方法已经执行完毕
  cb();
}

//合并vue.min.js,rem.js,wr.js,生成mixin.js 公共文件
function concat(cb) {
  src('./script/use/*.js')
    .pipe(plugins.concat('mixin.js'))/*合并成一个新文件*/
    // 管道送入下一个环节：混淆JS代码
    .pipe(plugins.uglify())
    .pipe(dest('./script'));
  cb()
}
// 对scss/less编译，压缩，输出css文件
function css(cb) {
  src('./style/scss/*.scss')
    .pipe(plugins.sass({ outputStyle: 'expanded ' }))
    // .pipe(plugins.sass({outputStyle: 'compressed'}))
    .pipe(plugins.autoprefixer({
      cascade: false, //是否美化属性值 默认：true 像这样：
      //-webkit-transform: rotate(45deg);
      //        transform: rotate(45deg);
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(dest('./style/css'))
    .pipe(reload({ stream: true }));
  cb();
}

// 打包
function build(cb) {
  src('./index.html')
    .pipe(plugins.usemin({
      js: [plugins.uglify(), rev()],
      css: [rev()]
    }))
    .pipe(dest('./dist'))
  // .pipe(reload({ stream: true}));
  cb()
}

// 监听这些文件的变化
function watcher() {
  // watch('./*.html');
  watch('js/src/*.js', js);
  // watch('script/use/*.js', concat);
  watch('style/scss/*.scss', css);
}


// 删除dist目录中的内容
function clean(cb) {
  del('./dist');
  cb();
}


// server任务
function serve(cb) {
  browserSync.init({
    serve: {
      baseDir: './'
    }
  });
  cb();
}
exports.style = css;
exports.scripts = js;
exports.clean = clean;
exports.build = build;
//合并文件 为mixin.js
exports.concat = concat;
exports.default = series([
  // concat, //合成mixin.js
  // clean,
  js,   // uglify + babel
  css,  // Sass转css + 自动前缀
  // serve, //浏览器自动刷新
  watcher
]);