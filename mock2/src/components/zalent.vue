<template>
  <div class="panel panel-default table_mt20" v-if="Data">
    <!-- Default panel contents -->
    <div class="panel-heading">news mock</div>
    <!-- Table -->
    <table class="table">
      <div v-for="item in Data">
        <td><span> domain :</span>{{item.domain}}</td>
        <br>
        <td><span>id:</span>{{item.id}}</td>  <br>
        <td> <span>paragraph:</span>{{item.paragraph}}</td><br>
        <td><span>sentence:</span>{{item.sentence}}</td><br>
        <td><span>url:</span><a :href="item.url">{{item.url}}</a></td><br>

        <hr>

      </div>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        isOk: 1,
        Data: null
      }
    },
    mounted() {
        this.$http.get('/api/news').then((res) => {
            var arr  = JSON.parse(res.data.data)
            this.Data = arr.categorys
        })
    }
  }

</script>

<style>
  .table_mt20 {
    margin-top: 20px;
  }

</style>
