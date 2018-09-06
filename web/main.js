var app = new Vue({
    el: '#app',
    data: {
      cyrillicName: '',
      transliteratedName: ''
    },
    methods: {
      transliterate: function () {
        this.transliteratedName = this.cyrillicName
      }
    }
  })