export type MovieResult = {
  page: number
  results: MovieModel[]
  total_pages: number
  total_results: number
}

export type MovieModel = {
  id: number
  releaseDate: string
  genres: number[]
  poster_path: string
}
