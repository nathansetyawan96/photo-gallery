import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 8db61e27dc73b74946a2062209f4796f4295d3cab02a83373d50dc282af5f931'
  }
})
