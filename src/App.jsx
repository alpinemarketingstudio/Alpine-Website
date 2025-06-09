import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardLayout from './pages/DashboardLayout';
import AdminContacts from './pages/AdminContacts';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/dashboard/login" replace />;
}

function Layout({ children }) {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      {children}
      {!isDashboardRoute && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Layout>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<HomePage />} />

        {/* Dashboard login route (public) */}
        <Route path="/dashboard/login" element={<AdminLoginPage />} />

        {/* Redirect /dashboard to login if no token */}
        <Route
          path="/dashboard"
          element={
            localStorage.getItem('adminToken') ? (
              <Navigate to="/dashboard/home" replace />
            ) : (
              <Navigate to="/dashboard/login" replace />
            )
          }
        />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/home"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/contact-messages"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AdminContacts />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
