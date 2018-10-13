Vue.component('todo-item', {
    props: ['todo'],
    template: '<span>{{ todo.text }}</span>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        itemList: [
            { id: 1, text: 'Mouse' },
            { id: 2, text: 'Dog' },
            { id: 3, text: 'Cat' },
        ]
    }
})