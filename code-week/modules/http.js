const httpGET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();

  return data;
};

const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGMzMjJiYWQ4ZWUzMWQ0NjRjMjUyMTc4YjJjYTRhYiIsInN1YiI6IjY1NjRlMjc3YTM1YzhlMDBhYjhjYzlkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ib5bljI2Qgoeik7-6XO-LJ47GIaRLeqJfrfd2tlwFV4";

export { httpGET };
