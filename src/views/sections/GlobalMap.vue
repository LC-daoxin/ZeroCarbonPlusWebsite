<template>
  <base-section
    id="GlobalMap"
    space="0"
  >
    <div
      ref="map"
      class="map"
    />
  </base-section>
</template>

<script>
  import '@/assets/json/world_new.js'
  import * as echarts from 'echarts'
  export default {
    name: 'GlobalMap',
    data() {
      return {
        data: [], // 坐标点数据
        myChart: null,
      }
    },
    watch: {
      '$i18n.locale'(val) {
        this.initEMap()
      },
    },
    mounted() {
      this.initEMap()
    },
    methods: {
      initEMap() {
        const globalMap = [
          {
            name: this.$t('city.beijing'),
            value: [116.28, 39.54, 10],
          },
          {
            name: this.$t('city.shanghai'),
            value: [121.4648, 31.2891, 7],
          },
          {
            name: '香港',
            value: [114.195466, 22.282751, 7],
          },
          {
            name: '纽黑文',
            value: [-72.32802, 41.90932, 7], // [-72.92802, 41.30932, 7], 真实坐标
          },
          {
            name: '巴尔的摩',
            value: [-77.67, 38.57, 7], // [-76.37, 39.17, 7], 真实坐标
          },
          {
            name: '纽约',
            value: [-74.0059731, 40.7143528, 7],
          },
          {
            name: this.$t('city.puchong'),
            value: [101.42, 3.08, 7],
          },
          {
            name: '斯德哥尔摩',
            value: [18, 59.23, 7],
          },
          {
            name: '阿姆斯特丹',
            value: [4.52, 52.21, 7],
          },
          {
            name: '克拉科夫',
            value: [19.55, 50.03, 7],
          },
          {
            name: '约克',
            value: [-1.05339, 53.94494, 7],
          },
          {
            name: '剑桥',
            value: [0.071854, 52.121921, 7],
          },
          {
            name: '伦敦',
            value: [0.15, 51.3, 7],
          },
        ]
        // const that = this
        this.myChart = echarts.init(this.$refs.map) // 获得容器所在位置
        window.onresize = this.myChart.resize
        const series = []
        series.push({
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            // 涟漪特效
            period: 4, // 动画时间，值越小速度越快
            brushType: 'stroke', // 波纹绘制方式 stroke, fill
            scale: 4, // 波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: 'right', // 显示位置
              offset: [5, 0], // 偏移设置
              formatter: '{b}', // 圆环显示文字
            },
            emphasis: {
              show: true,
            },
          },
          symbol: 'circle',
          symbolSize: function (val) {
            return val[2] // 圆环大小
          },
          data: globalMap,
        })
        console.log(series)
        const option = {
          backgroundColor: '#044161',
          // 悬浮提示
          // tooltip: {
          //   trigger: 'item',
          //   backgroundColor: '#1540a1',
          //   borderColor: '#FFFFCC',
          //   showDelay: 0,
          //   hideDelay: 0,
          //   // enterable: true,
          //   transitionDuration: 0,
          //   // extraCssText: "z-index:100",formatter
          //   formatter: function (params, ticket, callback) {
          //     // 根据业务自己拓展要显示的内容
          //     var res = ''
          //     var name = params.name
          //     // var value = params.value[params.seriesIndex + 1]
          //     res =
          //       "<span style='color:#fff;'>" +
          //       name.toString().split(' ')[0] +
          //       '</span><br/>爬虫：' +
          //       name.toString().split(' ')[1]
          //     return res
          //   },
          // },
          visualMap: {
            // 图例值控制
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            show: false,
            calculable: true,
            // color: ["#0bc7f3"],
            color: ['orangered', 'yellow', 'lightskyblue'],
          },
          geo: {
            map: 'world',
            label: {
              emphasis: {
                show: false,
              },
            },
            roam: false, // 是否允许缩放
            layoutCenter: ['50%', '50%'], // 地图位置
            layoutSize: '180%',
            itemStyle: {
              normal: {
                color: '#004a81', // 地图背景色
                // color: ['orangered','yellow','lightskyblue']
                borderColor: '#019fd4', // 省市边界线
              },
              emphasis: {
                color: 'rgba(0, 74, 129, .2)', // 悬浮背景
              },
            },
          },
          series: series,
        }
        this.myChart.setOption(option)
      },
    },
  }
</script>

<style lang="sass" scoped>
.map
  width: 100%
  height: 80vh
</style>
