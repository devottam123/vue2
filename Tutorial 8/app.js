new Vue({
    el: "#vue-app",
    data: {
        name: "",
        age: ""
    },
    methods: {
        logName: function () {
            console.log('You Entered your name');
        },
        logAge: function () {
            console.log('You Entered your age');
        }
    }
})