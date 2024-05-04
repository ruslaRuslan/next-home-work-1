import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

const { data } = await axios.get(url);

export default function index() {
  return (
    <>
      {data.map(({id, username, address, email}) => {
        return (
          <>
            <div key={id}>
              <h1>{username}</h1>
              <p>{address.city}</p>
              <a>{email}</a>
            </div>
          </>
        );
      })}
    </>
  );
}


