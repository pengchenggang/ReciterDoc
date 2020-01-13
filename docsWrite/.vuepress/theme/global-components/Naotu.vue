<template>
  <div class="naotuClassTopDefault"
       :class="{'naotuClassTop':naotuClass}">
    <div :id="'km'+id"
         :class="{naotuClass}"
         style="height:500px;"></div>
    <Button @click="quanpingHandle"
            :class="{'naotuButtonClass2':naotuClass}"
            class="naotuButtonClass">{{naotuClass ? '恢复' : '全屏'}}</Button>
  </div>
</template>

<script>
// https://segmentfault.com/a/1190000020496127?utm_source=tag-newest
import kity from 'kity'
import kityminder from 'kityminder-core'
export default {
  name: 'Naotu',
  props: {
    kityData: {
      type: String,
      default: ''
    }
  },
  components: {},
  data () {
    return {
      id: Math.random().toString().replace('.', ''),
      naotuClass: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    quanpingHandle () {
      this.naotuClass = !this.naotuClass
    },
    init () {
      console.info('kity', kity, kityminder)
      console.info(`this.$refs['minder-container']`, this.$refs)
      this.km = new window.kityminder.Minder({
        renderTo: '#km' + this.id //'#minder-container'
      });
      this.km.importJson(JSON.parse(this.kityData));
    }
  },
  filters: {},
  created () { },
  activated () { },
  mounted () {
    this.init()
  },
  beforeDestroy () { }
}
</script>

<style>
.naotuClassTopDefault {
  position: relative;
}
.naotuClassTop {
  position: fixed !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1003;
}
.naotuButtonClass2 {
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
  left: unset !important;
  bottom: unset !important;
}
.naotuButtonClass {
  z-index: 1001;
  position: absolute;
  /* left: 698px; */
  /* top: -23px; */
  right: 0;
  bottom: 0;
}
.naotuClass {
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100% !important;
  width: 100%;
}
</style>
