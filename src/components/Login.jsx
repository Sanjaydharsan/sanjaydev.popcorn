export default function Login({ show, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-transform duration-500 ${show ? "translate-y-4" : "-translate-y-full"
        } min-h-screen bg-transparent flex items-center justify-center`}
    >
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg w-full max-w-md text-white relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-white text-2xl">✕</button>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-2">Welcome</h2>
          <p className="text-sm text-gray-200">Sign in to continue  <span className="text-red-600 font-medium">Popcorn</span></p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded-md font-medium"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
