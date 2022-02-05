<template>
  <h2>Measures</h2>
  <div v-if="timer">
  <button v-on:click="cancelAutoUpdate">Stop refresh</button>
  </div>
  <div v-else>
    <button v-on:click="startAutoUpdate">Start refresh</button>
  </div>

    <div v-if="measures.length" class="measures">
    <div v-for="measure in measures" :key="measure._id" class="measure">
      <router-link :to="{name: 'MeasureDetail', params: { id: measure._id}}">
      <h5>Time: {{formatDate(measure.createdAt) }}</h5>
        <p>
          Device SNR: {{measure.device.serialNumber}}
          <br>
        <span v-bind:style="styleObject">IAQ: {{iaqColorChange(measure.iaq)}}</span>
        </p>


      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading measures...</p>
  </div>
</template>

<script>
import MeasureService from "@/services/measure.service";
export default {
  data() {

    return {
      measures: [],
      styleObject: {
        color: 'red'
      },
      timer: null,
    }
  },
  created() {
    this.refresh();
    this.timer = setInterval(this.refresh, 5000)
    // console.log(this.timer)
  },
  methods: {
    refresh() {
      MeasureService.getAllMeasures()
          // .then((res) => console.log(res.data.measures[0].iaq))
          .then(res => this.measures = res.data.measures)
          // .then(data => console.log(this.measures = data))
          .catch(err => console.log(err.message))
      // console.log(this.measures)
    },
    cancelAutoUpdate() {
      clearInterval(this.timer)
      this.timer = null
    },
    startAutoUpdate() {
      this.cancelAutoUpdate()
      this.refresh()
      this.timer = setInterval(this.refresh, 5000)
      // console.log(this.timer)
    }
    ,
    formatDate: function (value) {
      return MeasureService.formatDate(value);
    },
    iaqColorChange(value) {
      this.styleObject.color = MeasureService.iaqColorChange(value)
      return value
    }
  },

  // mounted() {
  //   this.refresh()
  // },
  beforeDestroy() {
    this.cancelAutoUpdate();
  },
  unmounted() {
    this.cancelAutoUpdate();
  }
}
</script>

<style>
.measures div {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.measures div:hover {
  background: #ddd;
}

.measure a {
  text-decoration: none;
  color: #444444;
}
.measure a:hover {
  text-decoration: none;
  color: #444442;
}
</style>