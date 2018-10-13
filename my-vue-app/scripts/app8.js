var app8 = new Vue({
    el: '#app-8',
    data: {
        message: 'Original message',
    },
    computed: {
        invertedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
}) 