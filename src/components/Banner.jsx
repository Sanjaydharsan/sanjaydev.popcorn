import avengers from "../assets/img/avengers.jpg"

function Banner() {
  return (
<div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={avengers}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="banner"
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to transparent"></div>

      {/* Banner content */}
      <div className="relative z-20 h-full flex flex-col left-9 top-[55vh] items-start text-white px-8 max-w-3xl">
        <h1 className="text-4xl md:text-3xl font-extrabold tracking-wide border-l-4 border-red  bg-gradient-to-r from-red via-transparent to transparent ">
          AVENGERS: ENDGAME
        </h1>
        <h3 className="mt-2 text-lg font-medium">
          2019 ‧ Action/Sci-fi ‧ 3h 1m ‧ U/A
        </h3>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          After the devastating events of Infinity War, the Avengers <br />
          assemble once more to reverse Thanos' action and restore <br />
          balance to the universe.
        </p>
        <button className="mt-6 px-6 py-2 bg-red transition rounded-full font-semibold text-white">
          WATCH NOW
        </button>
      </div>
    </div>  )
}

export default Banner