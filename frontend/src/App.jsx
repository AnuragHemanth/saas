import { Link, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <nav className="sticky top-0 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3">
          <Link to="/" className="font-bold text-emerald-300">
            SaaS Starter
          </Link>
          <div className="flex gap-3 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white">
              Home
            </Link>
            {isAuthenticated ? (
              <Link to="/dashboard" className="text-slate-300 hover:text-white">
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-slate-300 hover:text-white">
                  Login
                </Link>
                <Link to="/register" className="text-slate-300 hover:text-white">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
