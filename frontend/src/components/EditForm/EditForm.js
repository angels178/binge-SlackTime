import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css";
import Api from "../common/Api/Api";

function EditForm() {
  const [editShow, setEditShow] = useState({
    name: "",
    url: "",
    num_seasons: "",
    num_episodes: "",
    released_date: "",
    description: "",
    category: "",
    language: "",
    rating: "",
    is_favorite: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleShow = async () => {
      try {
        let result = await axios.get(`${Api}/${id}`);

        const date = new Date(result.data.released_date);
        result.data.released_date = date.toISOString().split("T")[0];

        setEditShow(result.data);
      } catch (error) {
        navigate("/404");
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
      let result = await axios.put(`${Api}/${id}`, editShow);

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
        <form onSubmit={handleEditSubmit} className="edit-container-form">
          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="name">
              <span>Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editShow.name}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
              required
            />
          </div>

          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="url">
              <span>Image Url</span>
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={editShow.url}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.value)
              }
              required
            />
          </div>

          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="num_seasons">
              <span>Season</span>
            </label>
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

          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="num_episode">
              <span>Episode</span>
            </label>
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

          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="date">
              <span>Date</span>
            </label>
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

          <div className="form-group d-flex flex-column mt-4">
            <label htmlFor="description">
              <span>Description</span>
            </label>
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

          <div className="form-group d-flex flex-column mt-4">
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

          <div className="form-group d-flex flex-column mt-4">
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

          <div className="form-group d-flex flex-column mt-4">
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
              required
              type="checkbox"
              id="is_favorite"
              name="is_favorite"
              checked={editShow.is_favorite}
              onChange={(event) =>
                handleOnChange(event.target.id, event.target.checked)
              }
              className="m-2"
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

export default EditForm;
