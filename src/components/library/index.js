// 拓展vue原有的功能：全局组件 ， 自定义组件  挂在原型方法
// 这就是插件
// vue2.0插件写法要素：导出一个对象 有install函数，默认传入了vue构造函数，vue基础之上扩展
// vue3.0插件写法要素：导出一个对象 有install函数，默认传入了app应用实例，app基础之上扩展
import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
export default {
  install (app) {
    // 在app上进行扩展 app提供 component directive 函数
    // 如果要挂在原型 app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
