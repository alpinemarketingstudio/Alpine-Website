import React, { useEffect } from 'react';
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
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "it,de", // Italian and German only
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
