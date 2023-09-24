import { error } from "@sveltejs/kit";
import config from "../../../../config.json";
import { films } from "../../../data-local";

const edition = config.EDITION;

export function load({ params, url }) {
  const [name, city] = params.data.split("/");
  const film = films[edition].find(
    (film) =>
      new RegExp(name).test(film.redirect) &&
      film.cities.find((item) => item.city === city)
  );

  if (!film) {
    throw error(404, `Not found: ${url.pathname}`);
  }

  return { film, city, url };
}
