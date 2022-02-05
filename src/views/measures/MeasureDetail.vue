<template>
  <h3>Measure detail </h3>
  <div v-if="measure">
    <h5> Created: {{formatDate(measure.createdAt)}}</h5>
    <router-link class="deviceLink" :to="{name: 'DeviceDetail', params: { id: measure.device._id}}">
      <p >Device: {{measure.device.serialNumber}}</p>
    </router-link>
    <table class="tableMeasures">
      <tr>
        <td>
          The measure iaq
        </td>
        <td v-bind:style="styleObject">
          {{iaqColorChange(measure.iaq.toFixed(2))}}
        </td>
      </tr>

      <tr>
        <td>
          The measure iaq acc
        </td>
        <td>
          {{measure.iaq_acc.toFixed(0)}}
        </td>
      </tr>

      <tr>
        <td>
          The measure CO2 equivalent
        </td>
        <td>
          {{measure.co2_equivalent.toFixed(2)}} ppm
        </td>
      </tr>

      <tr>
        <td>
          The measure breath VOC equivalent
        </td>
        <td>
          {{measure.breath_voc_equivalent.toFixed(2)}} ppm
        </td>
      </tr>

      <tr>
        <td>
          The measure temperature
        </td>
        <td>
          {{measure.temperature.toFixed(2)}} °C
        </td>
      </tr>

      <tr>
        <td>
          The measure humidity
        </td>
        <td>
          {{measure.humidity.toFixed(2)}} %
        </td>
      </tr>

    </table>

  </div>
  <div v-else>
    <p>Loading measure details of {{id}}...</p>
  </div>
</template>

<script>
import MeasureService from "@/services/measure.service";
export default {
  props: ['id'],
  data() {
    return {
      measure: null,
      styleObject: {
        color: 'red'
      },
    }
  },
  methods: {
    formatDate(value) {
      return MeasureService.formatDate(value);
    },

    iaqColorChange(value) {
      this.styleObject.color = MeasureService.iaqColorChange(value)
      return value
    }
  },
  mounted() {
    MeasureService.getMeasureById(this.id)
      .then(res => this.measure = res.data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

th,td {
  padding: 15px;
}
tr {
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background: #ddd;
}
.tableMeasures {
  width: 100%;
}

.deviceLink {
  text-decoration: none;
}

.deviceLink:hover {
  text-decoration: none;
}


</style>