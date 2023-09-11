import { error } from "@sveltejs/kit";
import { films } from "../../../data-local/2022/films.js";

export function load({ params, url }) {
  const [name, city] = params.data.split("/");
  const film = films.find(
    (film) =>
      new RegExp(name).test(film.redirect) &&
      film.cities.find((item) => item.city === city)
  );

  if (!film) {
    throw error(404, `Not found: ${url.pathname}`);
  }

  return { film, city, url };
}
