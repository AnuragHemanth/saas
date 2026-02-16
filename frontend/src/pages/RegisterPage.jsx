import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../lib/api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await api.register({ name, email, password });
      login(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto grid min-h-screen max-w-md place-items-center p-6">
      <form onSubmit={onSubmit} className="w-full rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
        <h1 className="mb-5 text-2xl font-bold">Create Account</h1>

        <label className="mb-2 block text-sm">Name</label>
        <input
          type="text"
          className="mb-4 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="mb-2 block text-sm">Email</label>
        <input
          type="email"
          className="mb-4 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="mb-2 block text-sm">Password</label>
        <input
          type="password"
          className="mb-4 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

        <button
          disabled={loading}
          className="w-full rounded-md bg-emerald-500 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-400 disabled:opacity-60"
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="mt-4 text-sm text-slate-400">
          Already have an account?{' '}
          <Link className="text-emerald-300 hover:text-emerald-200" to="/login">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;
