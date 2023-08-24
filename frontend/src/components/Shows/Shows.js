import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shows.css";
import Pagination from "../common/Pagination/Pagination";
import Overlay from "../common/Overlay/Overlay";
import Api from "../common/Api/Api";

function Shows() {
  let api = process.env.REACT_APP_API_URL;

  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage, setShowsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchShowsData();
  }, []);

  async function fetchShowsData() {
    try {
      setIsLoading(true);
      let result = await axios.get(`${Api}`);

      setShows(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const calculateRating = (rating) => {
    if (rating === 5 || rating >= 4) {
      return "😍";
    } else if (rating === "3") {
      return "😑";
    } else if (rating <= 2) {
      return "😴";
    }
  };

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
  const totalPages = Math.ceil(shows.length / showsPerPage);

  return (
    <Overlay isLoading={isLoading}>
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
                {currentShows.map((show) => {
                  const releaseDate = new Date(show.released_date);

                  const releaseYear = releaseDate.getFullYear();
                  return (
                    <tr key={show.id}>
                      <td>{releaseYear}</td>
                      <td>{show.category}</td>
                      <td>
                        <Link to={`/shows/${show.id}`}>{show.name}</Link>
                      </td>
                      <td>{calculateRating(show.rating)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            </table>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default Shows;
