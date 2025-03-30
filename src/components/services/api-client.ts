import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b36d00cbefd8460aa8b7b6ba90906392'
    }
})