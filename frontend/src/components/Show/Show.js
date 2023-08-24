import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Show.css";
import Api from "../common/Api/Api";

function Show() {
  const [singleShow, setSingleShow] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleShow();
  }, [id]);

  async function fetchSingleShow() {
    try {
      let result = await axios.get(`${Api}/${id}`);

      setSingleShow(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deletedSnack = async () => {
    const deleteConfirmation = window.confirm(
      `Are you sure you want to delete ${singleShow.name}?`
    );

    if (deleteConfirmation) {
      try {
        await axios.delete(`${Api}/${id}`);

        alert(`${singleShow.name} Has Been Deleted!`);
        navigate("/shows");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const releasedDate = () => {
    let date = singleShow.released_date;
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return formattedDate;
  };

  return (
    <div>
      <h1>Show</h1>
      <div>
        {singleShow && (
          <div>
            <div>
              <img src={singleShow.url} alt={singleShow.name} height="500px" />
            </div>

            <div className="show-container">
              <p><span>Name:</span> {singleShow.name}</p>
              <p><span>Seasons:</span> {singleShow.num_seasons}</p>
              <p><span>Episodes:</span> {singleShow.num_episodes} </p>
              <p><span>Date:</span> {releasedDate()}</p>
              <p><span>Description:</span> {singleShow.description}</p>
              <p><span>Category:</span> {singleShow.category}</p>
              <p><span>Language:</span> {singleShow.language}</p>
              <p><span>Rating:</span> {singleShow.rating}</p>
              <p><span>Favorite:</span> {singleShow.is_favorite ? "⭐️" : "❌"}</p>
            </div>
            <div className="show-buttons">
              <button onClick={() => navigate("/shows")}>Back</button>
              <button onClick={() => navigate(`/shows/${id}/edit`)}>
                Edit
              </button>
              <button onClick={() => deletedSnack()}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Show;
