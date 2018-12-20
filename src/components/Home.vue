<template>
  <div class="hero">
    <h1 class="vue-title">PC Builder Web App</h1>

    <table align="left">
      <tr>
        <td>
          <p class="lead">Building your own PC and need ideas on where to get started?
          <p>Explore our components, which cover systems for all use-cases and budgets,</p>
          <p> or create your own and share it with our community.</p>
          <p>Just click <a href ="/builds#/builds">here</a> to go browse the community created builds.</p>
        </td>
        <td>
          <img src="../assets/homer.gif" alt="description here" />
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
