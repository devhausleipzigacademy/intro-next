import { MovieResult } from "@/types/movie"
import axios from "axios"

export async function getMovies(): Promise<MovieResult> {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=0be126323ec3cb62353aea3b8ff71936`
    )
    .then((res) => res.data)
}

export async function getMoviesByPage({ pageParam = 1 }) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?page=${pageParam}&limit=4&api_key=0be126323ec3cb62353aea3b8ff71936`
    )
    .then((res) => res.data)
}
