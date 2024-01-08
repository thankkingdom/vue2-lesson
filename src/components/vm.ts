import axios from 'axios';
import Vue from 'vue';
import { iItem } from './AxiosSample2.vue';

export var vm = new Vue({
//el: "#axios-sample2",
render: function (h) {
return h('div');
},
data: {
items: (Array<iItem>)
},
created: function () {
let me = this;
axios.get('data/items.json')
.then(function (res) {
//me.items = res.data.items;
let items: Array<iItem> = [];
for (var i = 0; i < Array(res.data.items).length; i++) {
items.push(res.data.items[i]);
}
me.items = items;
})
.catch(function (err) {
console.log(err);
});
}
});
