import { GenreSelector } from "@/components/GenreSelector"
import MovieSlider from "@/components/MovieSlider"
import { SearchInput } from "@/components/SearchInput"
import UserInfo from "@/components/UserInfo"
import { getMovies } from "@/data/movies"
import { useGenreStore } from "@/stores/genres"
import prisma from "@/utils/db"
import Link from "next/link"
import { HiChevronRight } from "react-icons/hi"

export default async function Home() {
  const movies = await getMovies()

  return (
    <section className="flex flex-col gap-y-6">
      <UserInfo />
      <SearchInput />
      <div>
        <div className="flex justify-between items-center">
          <p className="text-white-dimmed font-700 text-l">Genre</p>
          <div className=" flex text-yellow/50 text-s  font-500 gap-3 items-center">
            <Link href={"/genres"}>See All</Link>
            <HiChevronRight className="w-4 h-4" />
          </div>
        </div>
        <GenreSelector />
      </div>
      <div>
        <h3 className="text-white text-l font-700 mb-4">Upcoming Movies</h3>
        <MovieSlider movies={movies.results} />
      </div>
    </section>
  )
}
