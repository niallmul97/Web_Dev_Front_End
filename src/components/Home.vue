<template>
  <div class="hero">
    <div class="ui black inverted center aligned segment">
      <h1 class="vue-title">PC Builder Web App</h1>
    </div>
    <div class="ui black inverted center-aligned segment">
      <p class="lead">Building your own PC and need ideas on where to get started?</p>
      <p>Explore our components, which cover systems for all use-cases and budgets,</p>
      <p> or create your own and share it with our community.</p>
      <p>Just click <a href ="/builds#/builds">here</a> to go browse the community created builds.</p>
    </div>
    <div class="ui black inverted center-aligned segment">
      <p class="lead">Have a look at the top rated build!</p>
      <v-client-table :columns="columns" :data="build" :options="options">
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
      build: [],
      columns: ['_id', 'title', 'cpu', 'gpu', 'ram', 'storage', 'os', 'cost'],
      errors: []
    }
  },
  created () {
    this.loadHighestBuild()
  },
  methods: {
    loadHighestBuild: function () {
      BuildService.highestBuild()
        .then(response => {
          // JSON responses are automatically parsed.
          this.build.push(response.data)
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

<style>
  .hero {
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #0f1011;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
