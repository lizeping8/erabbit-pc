<template>
<!-- 顶部通栏 -->
<appNavbar></appNavbar>
<!-- 头部组件 -->
<appHeader></appHeader>
<appHeaderSticky></appHeaderSticky>
<!-- 内容容器 -->
<div class="app-body">
    <router-view></router-view>
</div>
<!-- 底部组件 -->
<appFooter></appFooter>
</template>

<script>
import appNavbar from '@/components/app-navbar.vue'
import appHeader from '@/components/app-header.vue'
import appFooter from '@/components/app-footer.vue'
import appHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    appNavbar,
    appHeader,
    appFooter,
    appHeaderSticky
  },
  // 获取下分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getlist')
    return {}
  }
}
</script>

<style lang="less" scoped>
.app-body{
  min-height: 600px;
}
</style>
