import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:5000/api/FoodRecords',
    json: true,
})

export default {
    async execute(method, resource, data) {
        const accessToken = await Vue.prototype.$auth.getAccessToken();
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(req => {
            return req.data
        })
    },
    getAll() {
        return this.execute('get', '/')
    },
    create(data) {
        return this.execute('create', '/')
    },
    update(data) {
        return this.execute('update', '/')
    },
    delete(data) {
        return this.execute('delete', '/')
    },
}