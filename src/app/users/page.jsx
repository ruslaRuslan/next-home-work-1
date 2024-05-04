import axios from "axios";
import "./index.css";
const url = "https://jsonplaceholder.typicode.com/users";
const { data } = await axios.get(url);

export default function index() {
  return (
    <>
      {data.map(({ id, username, address, email }) => {
        return (
          <>
            <div key={id} className="container">
              <h1>{username}</h1>
              <p>{address.city}</p>
              <a href="#">{email}</a>
            </div>
          </>
        );
      })}
    </>
  );
}
