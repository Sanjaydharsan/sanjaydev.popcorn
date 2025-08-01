import Banner from "../components/Banner"
import { topratedmovies, popularMovies, marvelMovies, dcMovies, sciFiMovies } from "../assets/Movies";
import MovieCard from "../components/Moviecard";
function Home() {
  return (
    <div className="bg-black w-full h-full pb-5">
      <Banner />
      <div className="px-16 py-16">
        <h2 className="text-white text-xl font-bold p-2 mb-10 border-red  bg-gradient-to-r from-red via-transparent to transparent">POPULAR MOVIES</h2>
        <div className="grid grid-cols-5 place-items-center">
          {popularMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <div className="px-16 py-16">
        <h2 className="text-white text-xl font-bold p-2 mb-10 border-red  bg-gradient-to-r from-red via-transparent to transparent">TOP RATED MOVIES</h2>
        <div className="grid grid-cols-5 place-items-center">
          {topratedmovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <div className="px-16 py-16">
        <h2 className="text-white text-xl font-bold p-2 mb-10 border-red  bg-gradient-to-r from-red via-transparent to transparent">MARVEL INFINTY SAGA</h2>
        <div className="grid grid-cols-5 place-items-center">
          {marvelMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <div className="px-16 py-16">
        <h2 className="text-white text-xl font-bold p-2 mb-10 border-red  bg-gradient-to-r from-red via-transparent to transparent">DC COMICS</h2>
        <div className="grid grid-cols-5 place-items-center">
          {dcMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <div className="px-16 py-16">
        <h2 className="text-white text-xl font-bold p-2 mb-10 border-red  bg-gradient-to-r from-red via-transparent to transparent">SCI-FI MOVIES</h2>
        <div className="grid grid-cols-5 place-items-center">
          {sciFiMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
