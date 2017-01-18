

Vue.use(window['vue-easy-toast'].default)
var app = new Vue({
  data: function() {
    return {
      duration: 3000,
      mode: 'override',
      horizontalPosition: 'left',
      verticalPosition: 'top',
      transition: 'fade',
      defalutClass: '',
      customClass: '.et-wrapper.my-class { \n\
        background-color: red;\n}',
      message: 'How are <strong>you</strong> <i>doing</i>?',
    }
  },
  methods: {
    toast: function() {
      this.$toast(this.message, {
        duration: this.duration,
        mode: this.mode,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        transition: this.transition,
        className: [ this.defaultClass, 'my-class'],
      })
    }
  }
})

app.$mount('#app')
