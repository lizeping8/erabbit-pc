<template>
    <div class="home-skeleton">
        <div v-for="i in 4" :key="i" class="item" :style="{backgroundColor:bg}">
        <xtxSkeleton animated bg="#e3e3e3" width="306px" height="306px"></xtxSkeleton>
        <xtxSkeleton animated bg="#e3e3e3" width="246px" height="24px"></xtxSkeleton>
        <xtxSkeleton animated bg="#e3e3e3" width="120px" height="24px"></xtxSkeleton>
        </div>
    </div>
</template>

<script>
import xtxSkeleton from '@/components/library/xtx-skeleton.vue'
export default {
  name: 'HomeSkeleton',
  props: {
    bg: {
      type: String,
      default: '#fff'
    }
  },
  components: {
    xtxSkeleton
  },
  setup () {
    return {}
  }
}
</script>

<style scoped lang='less'>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton{
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>
