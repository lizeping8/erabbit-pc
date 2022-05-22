<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a @click="toggle(-1)" href="javascript:;" :class="{disabled: index === 0}" class="iconfont icon-angle-left prev"></a>
      <a @click="toggle(1)" href="javascript:;" :class="{disabled: index === 1}" class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="target">
      <ul v-if="brands.length" class="list" :style="{transform:`translateX(${-index*1240}px)`}" >
        <li v-for="i in brands" :key="i">
          <RouterLink to="/">
            <img :src="i.picture" alt="">
          </RouterLink>
        </li>
      </ul>
      <div v-else class="skeleton">
          <xtx-skeleton animated class="item" v-for="i in 5" :key="i" bg="#e4e4e4" width="240px" height="305px"></xtx-skeleton>
      </div>
    </div>
  </HomePanel>
</template>

<script>
import { findBrand } from '@/api/home'
import { ref } from 'vue'
import HomePanel from './home-panel'
import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeBrand',
  components: { HomePanel, XtxSkeleton },
  setup () {
    //   获取数据 数据懒加载
    //  注意 useLazyData传的是api函数  传值需要自己写函数
    const { target, result } = useLazyData(() => findBrand(10))

    // 点击上一张 点击下一张
    const index = ref(0)
    const toggle = (step) => {
      const newIndex = step + index.value
      if (newIndex < 0 || newIndex > 1) return
      index.value = newIndex
    }

    return { brands: result, toggle, index, target }
  }
}

</script>

<style scoped lang='less'>
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
  .skeleton {
    width: 100%;
    display: flex;
    .item {
      margin-right: 10px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
</style>
