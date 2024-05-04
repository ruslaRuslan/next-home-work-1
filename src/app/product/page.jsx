import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

const {data} = await axios.get(url)