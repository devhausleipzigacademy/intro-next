import Link from "next/link"
import { MovieModel } from "@/types/movie"
import React from "react"

type Props = {
  movie: MovieModel
  variant: "upcoming" | "now_playing"
}

type Ref = (node?: Element | null | undefined) => void

export const MovieCard = React.forwardRef<Ref, Props>(
  ({ movie, variant }, ref) => (
    <Link
      // @ts-ignore
      ref={ref}
      href={`/movies/${movie.id}`}
      className={`${variant === "upcoming" ? "snap-center" : ""}`}
    >
      <div
        className={
          variant === "upcoming"
            ? "rounded-lg w-[174px] h-[228px] overflow-hidden transform transition duration-500 hover:scale-110"
            : "h-60 transform transition duration-500 hover:scale-110"
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
          }
          alt={movie.id.toString()}
          className="object-cover w-full h-full"
        />
      </div>
    </Link>
  )
)

MovieCard.displayName = "MovieCard"
