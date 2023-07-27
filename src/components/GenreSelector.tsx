"use client"

import { useGenreStore } from "@/stores/genres"
import { GenreIcon } from "./GenreIcon"

export function GenreSelector() {
  const { genres, homePageGenres, selectedGenres, selectGenre } =
    useGenreStore()

  return (
    <div className="flex justify-between mt-4">
      {homePageGenres.map((g, idx) => (
        <GenreIcon
          icon={genres[g].icon}
          genre={g}
          key={idx}
          isSelected={genres[g].isSelected}
          onClick={() => selectGenre(g, true)}
        />
      ))}
    </div>
  )
}
