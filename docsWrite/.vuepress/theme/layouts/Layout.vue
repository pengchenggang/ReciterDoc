<template>
  <parentLayout>
    <template #sidebar-top>
      <div class="sidebartopads">
        <div style="font-size:12px; margin-bottom:1rem;">特别赞助商</div>
        <div><img :src="$site.base + 'assets/img/vscodeAds.png'"
               width="220" /></div>
      </div>
    </template>
  </parentLayout>
</template>
<script>
import parentLayout from './parentLayout.vue'
export default {
  name: 'layoutIndex',
  components: {
    parentLayout,
    // BuySellAds
  }
}
</script>
<style lang="stylus">
.sidebartopads {
  padding: 1.25rem 1.5rem 0 1.25rem;
}

/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #dddee1;
}

::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #f8f8f9;
}
</style>