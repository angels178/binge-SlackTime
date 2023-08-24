const db = require("../db/dbConfig");

const getAllShows = async () => {
  try {
    const allShows = await db.any(`select * from shows`);

    return allShows;
  } catch (error) {
    return error;
  }
};

const getShowById = async (id) => {
  try {
    const singleShow = await db.any(`select * from shows where id = $1`, id);

    return singleShow;
  } catch (error) {
    return error;
  }
};

const createShow = async (show) => {
  try {
    const createdSnack = await db.one(
      `insert into shows (name, url, num_seasons, num_episodes, released_date, description, category, language, rating, is_favorite) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`,
      [
        show.name,
        show.url,
        show.num_seasons,
        show.num_episodes,
        show.released_date,
        show.description,
        show.category,
        show.language,
        show.rating,
        show.is_favorite,
      ]
    );

    return createdSnack;
  } catch (error) {
    return error;
  }
};

const deleteShowById = async (id) => {
  try {
    const deletedShow = await db.any(
      `DELETE FROM shows WHERE id = $1 RETURNING *`,
      id
    );

    return deletedShow;
  } catch (error) {
    return error;
  }
};

const updateShowById = async (id, show) => {
  try {
    const {
      name,
      url,
      num_seasons,
      num_episodes,
      released_date,
      description,
      category,
      language,
      rating,
      is_favorite,
    } = show;

    const updatedShow = await db.any(
      `update shows set name = $1, url = $2, num_seasons = $3, num_episodes = $4, released_date = $5, description = $6, category = $7, language = $8, rating = $9, is_favorite = $10 where id = $11 returning *`,
      [
        name,
        url,
        num_seasons,
        num_episodes,
        released_date,
        description,
        category,
        language,
        rating,
        is_favorite,
        id,
      ]
    );

    return updatedShow;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllShows,
  getShowById,
  createShow,
  deleteShowById,
  updateShowById,
};
