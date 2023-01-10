import axios from 'axios'

export default axios.create({
    baseURL:"https://avanexa.in/brandmax/api/",
    headers: {'X-Custom-Header': 'foobar'}
})