<template>
  <div class="hero">
    <div class="ui black inverted center aligned segment">
      <h1 class="vue-title"><i class="fa fa-desktop" style="padding: 3px"></i>Create a build</h1>
      <p>Create a basic build and edit it later from the parts menu</p>
    </div>
    <div class="ui black inverted center aligned segment">
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form v-on:submit.prevent="submit">
            <div class="form-group">
              <label class="form__label">Build Title</label>
              <input class="form__input" v-model.trim="title"/>
            </div>
            <div class="form-group">
              <label class="form__label">User ID</label>
              <input class="form__input" v-model.trim="userId"/>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.cost.$error }">
              <label class="form-control-label" name="cost">Cost (Enter a number between 1 and 5000)</label>
              <input class="form__input" type="number" v-model.trim="cost"/>
            </div>
            <div class="error" v-if="!$v.cost.between">Cost must be between 1 and 5000</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Submit Build</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Build Created!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Constructing Build...</p>
          </form>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import {Vuelidate} from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import BuildService from '@/services/buildservice'
import { required, minLength, between } from 'vuelidate/lib/validators'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuesax)
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  validations: {
    title: {
      required,
      minLength: minLength(5)
    },
    cost: {
      required,
      between: between(1, 5000)
    }
  },
  name: 'CreateBuild',
  data () {
    return {
      messagetitle: 'CreateBuild',
      title: 'Unnamed',
      cpuId: '',
      cpu: '',
      gpuId: '',
      gpu: '',
      ramId: '',
      ram: '',
      storageId: '',
      storage: '',
      osId: '',
      os: '',
      cost: 0,
      upvotes: 0,
      userId: 'Anon',
      submitStatus: null
    }
  },
  methods: {
    submitBuild: function (build) {
      BuildService.postBuild(build)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    submit: function () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          let build = {
            title: this.title,
            cpuId: this.cpuId,
            cpu: this.cpu,
            gpuId: this.gpuId,
            gpu: this.gpu,
            storageId: this.storageId,
            storage: this.storage,
            ramId: this.ramId,
            ram: this.ram,
            osId: this.osId,
            os: this.os,
            cost: this.cost,
            upvotes: this.upvotes,
            userId: this.userId
          }
          this.build = build
          this.submitBuild(this.build)
        }, 500)
      }
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
    width: 100%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
