<template>
    <div>
        <h1>Axios Sample</h1>
        <p>学生番号：{{ app.student.number }}</p>
        <p>名前：{{ app.student.name }}</p>
        <ul>
            <li v-for="score in app.student.scores">{{ score }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import Vue from 'vue';

var app = new Vue({
    //el: '#app',
    render: (h) => {
        return h('div');
    },
    data: {
        student: {
            number: 0,
            name: null,
            scores: [],
        },
    },
    created: function() {
        let me = this;
        axios.get('data/test.json')
            .then(function(res) {
                console.log(res);
                me.student = res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    },
});
</script>