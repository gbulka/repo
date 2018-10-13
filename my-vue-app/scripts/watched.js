var watchedVm = new Vue({
    el: '#watched-example',
    data: {
        question: '',
        answer: 'Waiting for the question.'
    },
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing';
            this.debouncedGetAnswer();
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)';
                return;
            }
            this.answer = 'Thinking...';
            var vm = this;
            axios.get('https://yesno.wtf/api')
            .then(function(response) {
                vm.answer = _.capitalize(response.data.answer);
            })
            .catch(function(error) {
                vm.answer = 'Error!';
            });
        }
    }
})