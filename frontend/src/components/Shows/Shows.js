import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shows() {
  let api = process.env.REACT_APP_API_URL;

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShowsData();
  }, []);

  async function fetchShowsData() {
    try {
      let result = await axios.get(`${api}/shows`);

      setShows(result.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <h1>Shows</h1>
      <div>
        
        <table>
          <tbody>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Rating</th>
            </tr>
            {shows.map((show) => {
              return (
                <tr key={show.id}>
                  <td>{show.category}</td>
                  <td><Link to={`/shows/${show.id}`}>{show.name}</Link></td>
                  <td>{show.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shows;
