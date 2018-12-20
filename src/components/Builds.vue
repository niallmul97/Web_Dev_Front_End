<template>
  <div class="hero">
    <div class="ui black inverted center aligned segment">
      <h1 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>Builds</h1>
      <p>Browse community created builds</p>
    </div>
    <div class="ui black inverted center-aligned segment">
      <v-client-table :columns="columns" :data="builds" :options="options">
        <a slot="vote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="vote(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBuild(props.row._id)"></a>
        <template slot="title" slot-scope="props">
          <b-link @click="popupActivo=true;  loadParts(props.row._id)">
            {{props.row.title}}
          </b-link>
          <vs-popup class="holamundo"  title="Build" :active.sync="popupActivo">
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
          </vs-popup>
        </template>
      </v-client-table>
    </div>
    </div>
</template>

<script>
import BuildService from '@/services/buildservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Builds',
  data () {
    return {
      sortable: ['upvotes'],
      popupActivo: false,
      props: ['_id'],
      messagetitle: ' Builds ',
      build: [],
      builds: [],
      errors: [],
      columns: ['title', '_id', 'cpu', 'gpu', 'cost', 'upvotes', 'vote', 'remove'],
      options: {
        headings: {
          title: 'Title',
          _id: 'ID',
          userId: 'User',
          cost: 'Cost',
          upvotes: 'Upvotes',
          cpu: 'CPU',
          gpu: 'GPU',
          vote: 'vote',
          remove: 'Remove'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadBuilds()
  },
  methods: {
    loadBuilds: function () {
      BuildService.fetchBuilds()
        .then(response => {
          this.builds = response.data
          console.log(this.builds)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    vote: function (id) {
      console.log(id)
      BuildService.upvoteBuild(id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteBuild: function (id) {
      BuildService.deleteBuild(id)
        .then(response => {
          this.loadBuilds()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    loadParts: function (id) {
      BuildService.fetchBuild(id)
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
