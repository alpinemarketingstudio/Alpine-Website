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
import AdminServiceInquiries from './pages/AdminServiceInquiries';
import Photography from './components/Photography'; 
import Graphics from './components/Graphics'; 
import Videography from './components/Videography'; 
import Web from './components/Web'; 
import Digital from './components/Digital'; 


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
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/photography" element={<Photography />} /> 
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/web" element={<Web />} />
        <Route path="/digital" element={<Digital />} />
        
        {/* Admin Routes */}
        <Route path="/dashboard/login" element={<AdminLoginPage />} />
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
        <Route
          path="/dashboard/service-inquiries"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AdminServiceInquiries />
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
