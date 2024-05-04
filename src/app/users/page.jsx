import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

const { data } = await axios.get(url);

export default function index() {
  return (
    <>
      {data.map((user) => {
        return (
          <>
            <div key={id}>
              <h1>{user.username}</h1>
              <p>{user.address.city}</p>
              <a>{user.email}</a>
            </div>
          </>
        );
      })}
    </>
  );
}
