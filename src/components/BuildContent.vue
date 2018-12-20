<template>
  <div id="app1">
    <table class="ui celled table">
      <thead>
      <tr><th>Title</th>
        <th>User</th>
        <th>CPU</th>
        <th>GPU</th>
        <th>RAM</th>
        <th>Storage</th>
        <th>OS</th>
      </tr></thead>
      <tbody>
      <tr>
        <td data-label="Title">{{build.title}}</td>
        <td data-label="User">{{build.userId}}</td>
        <td data-label="CPU">{{build.cpu}}</td>
        <td data-label="GPU">{{build.gpu}}</td>
        <td data-label="RAM">{{build.ram}}</td>
        <td data-label="Storage">{{build.storage}}</td>
        <td data-label="OS">{{build.os}}</td>
      </tr>
      </tbody>
    </table>
    <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editBuild(props.row._id)"></a>
  </div>
</template>

<script>

import BuildService from '@/services/buildservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'BuildContent',
  data () {
    return {
      messagetitle: ' Build Content ',
      build: null,
      errors: []
    }
  },
  created () {
    this.loadParts()
  },
  methods: {
    loadParts: function () {
      BuildService.fetchBuild(this.$route.params.buildId)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
          this.build = response.data[0]
          console.log(this.build)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
