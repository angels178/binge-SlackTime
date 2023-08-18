import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Show() {
  const [singleShow, setSingleShow] = useState(null);
  let api = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleShow();
  }, [id]);

  async function fetchSingleShow() {
    try {
      let result = await axios.get(`${api}/shows/${id}`);

      setSingleShow(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deletedSnack = async () => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete "
    );
    if (deleteConfirmation) {
      try {
        let result = await axios.delete(`${api}/shows/${id}`);
        const { name } = result.data;
        alert(`${name} Has Been Deleted!`);
        navigate(`${api}/shows`);
      } catch (error) {
        console.log(error);
      }
    }
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

            <div>
              <p>Name: {singleShow.name}</p>
              <p>Seasons: {singleShow.num_seasons}</p>
              <p>Episodes: {singleShow.num_episodes} </p>
              <p>Date: {singleShow.released_date}</p>
              <p>Description: {singleShow.description}</p>
              <p>category: {singleShow.category}</p>
              <p>language: {singleShow.language}</p>
              <p>rating: {singleShow.rating}</p>
              <p>favorite: {singleShow.is_favorite ? "true" : "false"}</p>
            </div>
            <div>
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
