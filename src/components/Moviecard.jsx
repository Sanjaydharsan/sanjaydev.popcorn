import { CirclePlay } from "lucide-react";

function MovieCard({ movie }) {
  return (
    <div className="w-[160px] h-[260px] text-white cursor-pointer group">
      <div className="relative w-full h-[230px] overflow-hidden rounded-md">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <CirclePlay className="text-white w-8 h-8" />
        </div>
      </div>

      <div className="mt-1 leading-tight">
        <h4 className="font-semibold text-lg group-hover:text-red">{movie.title}</h4>
        <p className="text-gray-300 text-sm font-semibold " >{movie.year} ‧ {movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
