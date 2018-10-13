var filteredArray = new Vue({
    el: '#filtered-array',
    data: {
        segments: [
            { id: 1, seq: 1, type: 'str', description: 'Segment 1, straight'},
            { id: 2, seq: 2, type: 'hc', description: 'Segment 2, curve'},
            { id: 3, seq: 3, type: 'str', description: 'Segment 3, straight'},
            { id: 4, seq: 4, type: 'hc', description: 'Segment 4, curve'},
            { id: 5, seq: 5, type: 'str', description: 'Segment 5, straight '},
        ],
    },
    computed: {
        horizontalCurves: function() {
            return this.segments.filter(function (segment) {
                return segment.type === 'hc';
            });
        },
        straightSegments: function () {
            return this.segments.filter(function (segment) {
                return segment.type === 'str';
            });
        },
    },
    methods: {
        addSegment: function (item) {
            this.segments.push(item);
        }
    }
})