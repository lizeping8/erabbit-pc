<template>
<!-- 首页入口（分类加广告） -->
<div class="home-entry">
    <div class="container">
        <!-- 左侧分类 -->
        <homeCategory></homeCategory>
        <!-- 轮播图 -->
        <homeBanner></homeBanner>
    </div>
  <!-- 面板内容 新鲜好物 -->
      <homeNew></homeNew>
  <!-- 面板内容 人气推荐 -->
      <homeHot></homeHot>
  <!-- 面板内容，品牌推荐 -->
      <homeBrand></homeBrand>
  <!-- 面板内容，商品推荐 -->
      <homeProduct></homeProduct>
</div>
</template>

<script>
import homeCategory from './components/home-category.vue'
import homeBanner from './components/home-banner.vue'
import homeNew from './components/home-new.vue'
import homeHot from './components/home-hot.vue'
import homeBrand from './components/home-brand.vue'
import homeProduct from './components/home-product.vue'
export default {
  name: 'HomePage',
  components: {
    homeCategory,
    homeBanner,
    homeNew,
    homeHot,
    homeBrand,
    homeProduct
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>
