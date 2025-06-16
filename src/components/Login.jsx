
export default function Login({ show, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-transform duration-500 ${show ? "translate-y-4" : "-translate-y-full"
        } min-h-screen bg-transparent flex items-center justify-center`}
    >
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg w-full max-w-md text-white">
        <button onClick={onClose} className="absolute top-2 right-5 text-white">✕</button>
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

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
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-md font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-400">or</div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium p-3 rounded-md hover:bg-gray-200 transition">
            <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
            Sign in with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium p-3 rounded-md hover:bg-gray-200 transition">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
