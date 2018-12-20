<template>
  <div id="app">
    <div id="menuItem">
      <b-navbar toggleable="md" type="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <img src="./assets/logo.png" class="img-circle" style="padding: 5px">
        <b-navbar-brand to="/" id="menuItem">PC Builder Web App</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/#">
              <i class="fa fa-home" style="padding: 5px"> Home</i>
            </b-nav-item>
            <b-nav-item to="/Builds">
              <i class="fa fa-list" style="padding: 5px"> Builds</i>
            </b-nav-item>
            <b-nav-item to="/Parts">
              <i class="fa fa-desktop" style="padding: 5px"> Parts</i>
            </b-nav-item>
            <b-nav-item to="/createBuild">
              <i class="fa fa-wrench" style="padding: 5px"> Create a Build</i>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #e6e6e6;
  background-color: #0f1011;
}
#menuItem {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  text-align: left;
  color: #e6e6e6;
  background-color: #1b1c1d;
}
</style>
