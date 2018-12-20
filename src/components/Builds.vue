<template>
  <div id="app1">
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
</template>

<script>
import BuildService from '@/services/buildservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Builds',
  data () {
    return {
      sortable: ['upvotes'],
      props: ['_id'],
      messagetitle: ' Builds ',
      builds: [],
      errors: [],
      columns: ['title', 'userId', 'cpu', 'gpu', 'cost', 'upvotes', 'vote', 'remove'],
      options: {
        headings: {
          title: 'Title',
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
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }

  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
