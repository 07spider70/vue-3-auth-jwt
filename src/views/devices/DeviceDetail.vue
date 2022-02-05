<template xmlns="http://www.w3.org/1999/html">
  <h3>Device detail </h3>
  <div v-if="device">
    <div>
      <table class="tableDeviceInfo">
        <tr>
          <th>
            Device SNR
          </th>
          <th>
            {{device.serialNumber}}
          </th>
        </tr>
        <tr>
          <td>
            Registration date
          </td>
          <td>
            {{formatDate(device.registrationDate)}}
          </td>
        </tr>

        <tr>
          <td>
            Board
          </td>
          <td>
            {{device.board.version}}
          </td>
        </tr>

        <tr>
          <td>
            Firmware
          </td>
          <td>
            {{device.firmware.version}}
          </td>
        </tr>

        <tr>
          <td>
            Operating system
          </td>
          <td>
            {{device.os.version}}
          </td>
        </tr>

        <tr>
          <th colspan="2">Place</th>
        </tr>
        <tr>
          <td>
            City
          </td>
          <td>
            {{device.place.city}}
          </td>
        </tr>
        <tr>
          <td>
            ZipCode
          </td>
          <td>
            {{device.place.zipCode}}
          </td>
        </tr>
        <tr>
          <td>
            Company
          </td>
          <td>
            {{device.place.companyName}}
          </td>
        </tr>
      </table>
    </div>

  </div>
  <div v-else>
    <p>Loading device details of {{id}}...</p>
  </div>
</template>

<script>
import DeviceService from "@/services/device.service";
export default {
  props: ['id'],
  data() {
    return {
      device: null
    }
  },
  methods: {
    formatDate: function (value) {
      return DeviceService.formatDate(value);
    }
  },
  mounted() {
    DeviceService.getDeviceById(this.id)
        .then(res => this.device = res.data)
        // .then(res => console.log(res.data))
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
.tableDeviceInfo {
  width: 100%;
  text-align: left;
}



</style>