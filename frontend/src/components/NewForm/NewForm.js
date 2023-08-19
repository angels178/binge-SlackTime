import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newShow.name}
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
                value={newShow.num_seasons}
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
                value={newShow.num_episodes}
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
                value={newShow.released_date}
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
                value={newShow.description}
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
                value={newShow.category}
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
                value={newShow.language}
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
                value={newShow.rating}
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
                checked={newShow.is_favorite}
                onChange={(event) =>
                  handleOnChange(event.target.id, event.target.checked)
                }
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewForm;