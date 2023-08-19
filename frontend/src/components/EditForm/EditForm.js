import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const [editShow, setEditShow] = useState({
    name: "",
    num_seasons: "",
    num_episodes: "",
    released_date: "",
    description: "",
    category: "",
    language: "",
    rating: "",
    is_favorite: false,
  });
  let api = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleShow = async () => {
      try {
        let result = await axios.get(`${api}/shows/${id}`);

        setEditShow(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleShow();
  }, [id]);

  function handleOnChange(id, value) {
    setEditShow({ ...editShow, [id]: value });
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    try {
      let result = await axios.put(`${api}/shows/${id}`, editShow);

      const { name } = result.data;

      const updateConfirmation = window.confirm(
        `Are you sure you want to update ${name}?`
      );

      if (!updateConfirmation) {
        return;
      }

      alert(`${name} is updated!`);
      navigate(`/shows/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit</h1>
      <div>
        <form onSubmit={handleEditSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editShow.name}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="num_seasons">Season</label>
            <input
              type="number"
              id="num_seasons"
              name="num_seasons"
              value={editShow.num_seasons}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="num_episode">Episode</label>
            <input
              type="number"
              id="num_episodes"
              name="num_seasons"
              value={editShow.num_episodes}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="released_date"
              name="released_date"
              value={editShow.released_date}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={editShow.description}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={editShow.category}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="language">Language</label>
            <input
              type="text"
              id="language"
              name="language"
              value={editShow.language}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="rating">rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              value={editShow.rating}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="is_favorite">favorite</label>
            <input
              type="checkbox"
              id="is_favorite"
              name="is_favorite"
              checked={editShow.is_favorite}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.checked)
              }
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
