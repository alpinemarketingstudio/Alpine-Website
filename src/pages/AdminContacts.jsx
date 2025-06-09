import React, { useEffect, useState, useMemo } from 'react';

const ITEMS_PER_PAGE = 6;

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    fetch('http://127.0.0.1:8000/api/contact/', {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load contact messages.');
        setLoading(false);
      });
  }, []);

  const filteredContacts = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return contacts.filter(c => {
      const fullName = `${c.first_name} ${c.last_name}`.toLowerCase();
      return (
        fullName.includes(lowerSearch) ||
        (c.email && c.email.toLowerCase().includes(lowerSearch)) ||
        (c.message && c.message.toLowerCase().includes(lowerSearch)) ||
        (c.phone && c.phone.toLowerCase().includes(lowerSearch))
      );
    });
  }, [contacts, search]);

  const paginatedContacts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredContacts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredContacts, page]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteId(null);
    setShowModal(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const token = localStorage.getItem('adminToken');

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/contact/${deleteId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setContacts(prev => prev.filter(c => c.id !== deleteId));
        closeDeleteModal();
      } else {
        alert('Failed to delete the message.');
      }
    } catch (err) {
      alert('Error deleting message.');
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
        <div className="spinner-border text-primary" role="status" aria-label="Loading">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center mt-4">{error}</p>;
  }

  return (
    <div className="container py-5" style={{ maxWidth: '1000px' }}>
      <div className="mb-4 p-4 bg-gradient rounded-4 shadow text-white text-center" style={{ background: '#0d6efd' }}>
        <h2 className="mb-0 fw-bold display-6">
          📥 Contact Messages
        </h2>
      </div>

      <div className="mb-4">
        <input
          type="search"
          className="form-control shadow-sm rounded-pill border-0 px-4 py-3"
          placeholder="🔍 Search name, email, phone, or message..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
          aria-label="Search contacts"
          style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
        />
      </div>

      {paginatedContacts.length === 0 ? (
        <p className="text-center fst-italic mt-5 text-muted">No contact messages found.</p>
      ) : (
        <div className="table-responsive shadow rounded-4">
          <table className="table table-hover align-middle mb-0 bg-white rounded-4">
            <thead className="table-primary rounded-4">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedContacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.first_name} {contact.last_name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone ? `${contact.country_code} ${contact.phone}` : 'N/A'}</td>
                  <td style={{ whiteSpace: 'pre-wrap', maxWidth: '300px' }}>{contact.message}</td>
                  <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger rounded-pill"
                      onClick={() => openDeleteModal(contact.id)}
                      aria-label={`Delete message from ${contact.first_name}`}
                      title="Delete"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <nav className="mt-4" aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link rounded-pill"
                onClick={() => setPage(p => Math.max(p - 1, 1))}
              >
                « Prev
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                <button
                  className="page-link rounded-pill"
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link rounded-pill"
                onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              >
                Next »
              </button>
            </li>
          </ul>
        </nav>
      )}

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeDeleteModal}
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header bg-danger text-white border-0">
                <h5 className="modal-title">🗑 Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeDeleteModal}
                />
              </div>
              <div className="modal-body fs-5">
                Are you sure you want to permanently delete this message?
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-outline-secondary" onClick={closeDeleteModal}>Cancel</button>
                <button className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
