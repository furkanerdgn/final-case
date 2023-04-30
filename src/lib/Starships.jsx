import axios from "axios";

export const fetchStarships = async ({ pageParam = 1, search }) => {
  const { data } = await axios.get(
    `https://swapi.dev/api/starships/?search=${search}&page=${pageParam}`
  );
  return data;
};

export const fetchStarship = async (id) => {
  const { data } = await axios.get(`https://swapi.dev/api/starships/${id}`);
  return data;
};
