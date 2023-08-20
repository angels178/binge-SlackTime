import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shows.css";

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
      <div className="shows-container">
        <div className="shows-container-table">
          <table id="shows">
            <tbody>
              <tr>
                <th>Year</th>
                <th>Category</th>
                <th>Name</th>
                <th>Rating</th>
              </tr>
              {shows.map((show) => {
                const releaseDate = new Date(show.released_date);

                const releaseYear = releaseDate.getFullYear();
                return (
                  <tr key={show.id}>
                    <td>{releaseYear}</td>
                    <td>{show.category}</td>
                    <td>
                      <Link to={`/shows/${show.id}`}>{show.name}</Link>
                    </td>
                    <td>{show.rating}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Shows;
