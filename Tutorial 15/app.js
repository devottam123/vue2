
/**************Correct Method*************************** */
// Vue.component('greeting',{
//     template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
//     data: function () {
//         return {
//             name: "Yoshi"
//         }
//     },
//     methods: {
//         changeName: function(){
//             this.name = "Mario"
//         }
//     }
// });

// new Vue({
//     el: "#vue-app-one"
// })

// new Vue({
//     el: "#vue-app-two"
// })

// What if data was an object outside?
var data = {
    name: 'Yoshi'
}

Vue.component('greeting',{
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
    data: function () {
        return data
    },
    methods: {
        changeName: function(){
            this.name = "Mario"
        }
    }
});

new Vue({
    el: "#vue-app-one"
})

new Vue({
    el: "#vue-app-two"
})