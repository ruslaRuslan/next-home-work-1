import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/users/'

export default async function index({
    params}){
        const {data} = await axios.get(url + params.id)
        return <>isdifadecinin adi {data.username}</>
    }