<template>
  <div>
    <div class="hero">
      <div class="ui black inverted center aligned segment">
        <h1 class="vue-title"><i class="fa fa-wrench" style="padding: 3px"></i>Parts</h1>
        <p>Browse parts and add them to builds</p>
      </div>
      <div class="ui black inverted center aligned segment">
        <form v-on:submit.prevent="submit">
          <div class="form-group">
            <label class="form__label">Part ID</label>
            <input class="form__input" v-model.trim="partId"/>
          </div>
          <div class="form-group">
            <b-form-select v-model="selected" :options="options" class="mb-3" />
            <div>Selected: <strong>{{ selected }}</strong></div>
          </div>
          <div class="form-group">
            <b-form-select v-model="choice" :options="buildIds" class="mb-3" />
            <div>Selected: <strong>{{ choice }}</strong></div>
          </div>
          <p>
            <button class="btn btn-primary btn1" type="submit">Add to Build</button>
          </p>
        </form>
      </div>
      <div class="ui black inverted center aligned segment">
        <v-client-table :columns="columns" :data="parts" :options="options">
        </v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
import PartService from '@/services/partservice'
import BuildService from '@/services/buildservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import {Vuelidate} from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(Vuesax)
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Parts',
  data () {
    return {
      popupActivo: false,
      selected: null,
      choice: null,
      submitStatus: null,
      messagetitle: ' Parts ',
      partId: '',
      parts: [],
      errors: [],
      buildIds: [],
      columns: ['_id', 'title', 'type'],
      builds: [],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'CPU' },
        { value: 'b', text: 'GPU' },
        { value: 'c', text: 'RAM' },
        { value: 'd', text: 'Storage' },
        { value: 'e', text: 'OS' }
      ]
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadParts()
    this.loadBuilds()
  },
  methods: {
    loadParts: function () {
      PartService.fetchParts()
        .then(response => {
          // JSON responses are automatically parsed.
          this.parts = response.data
          console.log(this.parts)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    loadBuilds: function () {
      BuildService.fetchBuilds()
        .then(response => {
          this.builds = response.data
          for (let i = 0; i < this.builds.length; i++) {
            this.buildIds.push(this.builds[i]._id)
          }
          console.log(this.buildIds)
          console.log(this.builds)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateBuild: function (id, partId, partType) {
      if (partType === 'a') {
        BuildService.putCPU(id, partId)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      } else if (partType === 'b') {
        BuildService.putGPU(id, partId)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      } else if (partType === 'c') {
        BuildService.putRAM(id, partId)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      } else if (partType === 'd') {
        BuildService.putStorage(id, partId)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      } else if (partType === 'e') {
        BuildService.putOS(id, partId)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    },
    submit: function () {
      console.log('submit!')
      let partId = this.partId
      console.log(partId)
      let id = this.choice
      console.log(id)
      let partType = this.selected
      console.log(partType)
      this.updateBuild(id, partId, partType)
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

  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
