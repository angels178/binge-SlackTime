import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewForm.css";

function NewForm() {
  const [newShow, setNewShow] = useState({
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
  const navigate = useNavigate();

  function handleOnChange(id, value) {
    setNewShow({ ...newShow, [id]: value });

    if (id === "num_seasons") {
      if (value === "") {
        setNewShow({ ...newShow, num_seasons: "" });
      } else {
        setNewShow({ ...newShow, num_seasons: Number(value) });
      }
    } else {
      setNewShow({ ...newShow, [id]: value });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let result = await axios.post(`${api}/shows`, newShow);
      console.log(result.data);

      alert(`${newShow.name} is added!`);
      navigate(`/shows/${result.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>New Show</h1>

      <div>
        <form onSubmit={handleSubmit} className="new-container-form">
          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="name">
              <span>Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newShow.name}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
              required
            />
          </div>

          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="url">
              <span>Image</span>
            </label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Image url only"
              value={newShow.url}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
              required
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="num_seasons">
              <span>Season</span>
            </label>
            <input
              type="number"
              id="num_seasons"
              name="num_seasons"
              value={newShow.num_seasons}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="num_episode">
              <span>Episode</span>
            </label>
            <input
              type="number"
              id="num_episodes"
              name="num_seasons"
              value={newShow.num_episodes}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="date">
              <span>Date</span>
            </label>
            <input
              type="date"
              id="released_date"
              name="released_date"
              value={newShow.released_date}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="description">
              <span>Description</span>
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={newShow.description}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="category">
              <span>Category</span>
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={newShow.category}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="language">
              <span>Language</span>
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={newShow.language}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div className="form-group d-flex flex-column">
            <label htmlFor="rating">
              <span>Rating</span>
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              value={newShow.rating}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="is_favorite">
              <span>Favorite</span>
            </label>
            <input
              required
              type="checkbox"
              id="is_favorite"
              name="is_favorite"
              checked={newShow.is_favorite}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.checked)
              }
              className="ms-2"
            />
          </div>

          <button type="submit" className="offset-5 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewForm;
