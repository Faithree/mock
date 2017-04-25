<template>
    <div class="panel panel-default table_mt20" v-if="Data">
        <!-- Default panel contents -->
        <div class="panel-heading">news mock</div>
        <!-- Table -->
        <table class="table">
            <tr v-for="item in Data.stories">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.ga_prefix}}</td>
            </tr>
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
                if (res.data.ok === this.isOk) {
                    this.Data = res.data.data
                }
            })
        }
    }

</script>

<style>
    .table_mt20 {
        margin-top: 20px;
    }

</style>
