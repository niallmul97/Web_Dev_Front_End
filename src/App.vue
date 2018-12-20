<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/logo.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">PC Builder Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#">
            <p id="menuItem">
              <i class="fa fa-home" style="padding: 5px"> Home</i>
            </p>
          </b-nav-item>
          <b-nav-item to="/Builds">
            <p id="menuItem">
              <i class="fa fa-list" style="padding: 5px"> Builds</i>
            </p>
          </b-nav-item>
          <b-nav-item to="/Parts">
            <p id="menuItem">
              <i class="fa fa-desktop" style="padding: 5px"> Parts</i>
            </p>
          </b-nav-item>
          <b-nav-item to="/createBuild">
            <p id="menuItem">
              <i class="fa fa-wrench" style="padding: 5px"> Create a Build</i>
            </p>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login">
            <p id="menuItem">
              <i class="fa fa-sign-in" style="padding: 5px"> Login </i>
            </p>
          </b-nav-item>
          <b-nav-item to="/logout">
            <p id="menuItem">
              <i class="fa fa-sign-out" style="padding: 5px"> Logout </i>
            </p>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#menuItem {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: ghostwhite;
}
</style>
