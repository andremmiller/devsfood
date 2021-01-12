import axios from 'axios'

const BASE_URL = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategories: async () => {
        const res = await axios.get(`${BASE_URL}/categories`) 
        return res  
    },
    getProducts: async (category, page, search) => {
        let fields = {}

        if(category !== 0) {
            fields.category = category
        }

        if(page > 0) {
            fields.page = page
        }

        if(search !== '') {
            fields.search = search
        }

        let queryString = new URLSearchParams(fields).toString()

        const res = await axios.get(`${BASE_URL}/products?${queryString}`) 
        return res 
    }
}