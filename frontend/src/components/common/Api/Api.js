const API =
  process.env.NODE_ENV === "production"
    ? `https://binge-slacktime-backend.onrender.com/shows`
    : `http://localhost:3002/shows`;

export default API;
