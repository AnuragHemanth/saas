import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col p-6">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="rounded-md border border-slate-600 px-4 py-2 text-sm hover:border-slate-300"
        >
          Logout
        </button>
      </header>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="mb-2 text-sm text-slate-400">Authenticated user</p>
        <p className="text-lg font-semibold">{user?.name}</p>
        <p className="text-slate-300">{user?.email}</p>
      </section>

      <Link to="/" className="mt-6 text-emerald-300 hover:text-emerald-200">
        ← Back to home
      </Link>
    </main>
  );
};

export default DashboardPage;
