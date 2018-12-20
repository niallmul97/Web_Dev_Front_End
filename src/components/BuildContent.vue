<template>
  <div id="hero">
    <div class="ui black inverted center aligned segment">
      <h1 class="vue-title">Builds</h1>
      <p>Browse community created builds</p>
    </div>
    <div class="ui black inverted center-aligned segment">
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
      <v-client-table :columns="columns" :data="builds" :options="options">
        <a slot="vote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="vote(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBuild(props.row._id)"></a>
        <template slot="title" slot-scope="props">
          <b-link :to="{ name: 'BuildContent', params: {buildId: props.row._id}}">
            {{props.row.title}}
          </b-link>
        </template>
      </v-client-table>
    </div>
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
  .hero {
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #0f1011;
  }
</style>
