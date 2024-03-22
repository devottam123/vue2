new Vue({
    el: "#vue-app",
    data: {
        output: "Your fav food"
    },
    methods: {
        readRefs: function () {
            console.log(this.$refs)
            // console.log(this.$refs.Input.value)
            // this.output = this.$refs.Input.value
            console.log(this.$refs.test.innerText)
        }
    }, 
})