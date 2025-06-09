import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/dashboard/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#1f2937',
          color: '#fff',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Push logout to bottom
        }}
      >
        <div>
          <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Admin Panel</h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <NavLink
              to="/dashboard/home"
              end
              style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            >
              🏠 Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/contact-messages"
              style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            >
              📬 Contact Messages
            </NavLink>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            marginTop: '2rem',
            backgroundColor: '#ef4444', // Tailwind red-500
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#b91c1c')} // red-700 on hover
          onMouseLeave={e => (e.target.style.backgroundColor = '#ef4444')}
        >
          🔒 Logout
        </button>
      </div>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '2rem' }}>{children}</main>
    </div>
  );
}

const linkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: '#374151',
  transition: 'background 0.2s',
  fontWeight: '500',
};

const activeLinkStyle = {
  ...linkStyle,
  backgroundColor: '#2563eb', // Tailwind's blue-600
  color: 'white',
  fontWeight: '700',
};
