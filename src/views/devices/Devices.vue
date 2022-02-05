<template>
  <h2>Devices</h2>
  <div v-if="timerDev">
    <button v-on:click="cancelAutoUpdate">Stop refresh</button>
  </div>
  <div v-else>
    <button v-on:click="startAutoUpdate">Start refresh</button>
  </div>

  <div v-if="devices.length" class="devices">
    <div v-for="device in devices" :key="device.serialNumber" class="device">
      <router-link :to="{name: 'DeviceDetail', params: { id: device._id}}">
        <h5>Device SNR: {{device.serialNumber}}</h5>

      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading devices...</p>
  </div>
</template>

<script>
import deviceService from "@/services/device.service";
import DeviceService from "@/services/device.service";
export default {
  data() {

    return {
      devices: [],
      timerDev: null,
    }
  },
  created() {
    this.refresh();
    this.timerDev = setInterval(this.refresh, 100000)
    // console.log(this.timer)
  },
  methods: {
    refresh() {
      DeviceService.getAllDevices()
          // .then((res) => console.log(res.data.measures[0].iaq))
          .then(res => this.devices = res.data)
          // .then(data => console.log(this.measures = data))
          .catch(err => console.log(err.message))
      // console.log(this.measures)
    },
    cancelAutoUpdate() {
      clearInterval(this.timerDev)
      this.timerDev = null
    },
    startAutoUpdate() {
      this.cancelAutoUpdate()
      this.refresh()
      this.timerDev = setInterval(this.refresh, 100000)
      // console.log(this.timer)
    }
    ,
    formatDate: function (value) {
      return DeviceService.formatDate(value);
    }
  },

  // mounted() {
  //   this.refresh()
  // },
  beforeDestroy() {
    this.cancelAutoUpdate();
  }
}
</script>

<style>
.devices div {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.devices div:hover {
  background: #ddd;
}

.device a {
  text-decoration: none;
  color: #444444;
}
.device a:hover {
  text-decoration: none;
  color: #444444;
}
</style>