import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">SaaS Starter</h1>
      <p className="mb-8 text-slate-300">
        React + Tailwind frontend, Express + MongoDB backend, and JWT authentication.
      </p>

      {isAuthenticated ? (
        <>
          <p className="mb-6 text-emerald-300">Welcome back, {user?.name}!</p>
          <Link
            to="/dashboard"
            className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400"
          >
            Go to Dashboard
          </Link>
        </>
      ) : (
        <div className="flex gap-3">
          <Link
            to="/login"
            className="rounded-lg bg-slate-100 px-5 py-3 font-semibold text-slate-900 hover:bg-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg border border-slate-400 px-5 py-3 font-semibold hover:border-slate-200"
          >
            Register
          </Link>
        </div>
      )}
    </main>
  );
};

export default HomePage;
