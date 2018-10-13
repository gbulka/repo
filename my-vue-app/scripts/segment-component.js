Vue.component('segment-component', {
    props: ['segment'],
    template: '<span>ID: {{segment.id}}, SeqNo: {{segment.seq}}, Description: {{segment.description}}</span>'
})
