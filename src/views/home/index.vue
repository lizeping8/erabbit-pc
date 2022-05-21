<template>
<!-- 首页入口（分类加广告） -->
<div class="home-entry">
    <div class="container">
        <!-- 左侧分类 -->
        <homeCategory></homeCategory>
        <!-- 轮播图 -->
        <homeBanner></homeBanner>
    </div>
    <div>
      <homePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱"></homePanel>
    </div>
</div>
<!-- 新鲜好物 -->
<!-- 人气推荐 -->
</template>

<script>
import homeCategory from './components/home-category.vue'
import homeBanner from './components/home-banner.vue'
import homePanel from './components/home-panel.vue'
export default {
  name: 'HomePage',
  components: {
    homeCategory,
    homeBanner,
    homePanel
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
