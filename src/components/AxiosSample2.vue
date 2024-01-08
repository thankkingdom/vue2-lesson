<template>
    <div>
        <h1>Axios Sample2</h1>
        <table border="1">
            <tr>
                <th>製品名</th>
                <th>著者</th>
                <th>価格</th>
                <th>残り</th>
            </tr>
            <tr v-for="item in vm.items"
                v-bind:key="item.id"
                v-bind:class="{soldout: item.stock == 0}"
            >
                <td>{{ item.name }}</td>
                <td>{{ item.author }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.stock }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import Vue from 'vue';
import client from '@/api/client';

interface iItem {
    id: number,
    stock: number,
    name: string,
    auther: string,
    price: number,
}

var vm = new Vue({
    //el: "#axios-sample2",
    render: function (h){
        return h('div');
    },
    data: {
        items: Array<iItem>
    },
    created: function() {
        let me = this;
        //axios.get('data/items.json')
        client.get('data/items.json')
            .then(function(res) {
                me.items = res.data.items;
                //let items: Array<iItem> = [];
                //for(var i=0; i<Array(res.data.items).length; i++) {
                //    items.push(res.data.items[i]);
                //}
                //me.items = items;
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});
</script>

<style>
.soldout {
    color: gray;
    text-decoration: line-through;
}
</style>