<template>
  <div class="app">
    <div class="text-center">
      <router-link to="/news">
        <button type="button" class="btn  btn-default">news</button>
      </router-link>
      <router-link to="/dailies">
        <button type="button" class="btn  btn-default">dailies</button>
      </router-link>
      <router-link to="/zalent">
        <button type="button" class="btn  btn-default">zalent</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {}
        },
    }

</script>

<style>
  .app {
    max-width: 600px;
    margin: 40px auto;
  }

  .app a {
    margin: 0 10px;
  }

  .router-link-active button:focus {
    background: #286090;
    color: #fff;
  }

  .router-link-active button {
    background: #286090;
    color: #fff;
  }

</style>
