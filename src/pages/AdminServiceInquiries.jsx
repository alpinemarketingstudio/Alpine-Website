import React, { useEffect, useState, useMemo } from 'react';

const ITEMS_PER_PAGE = 6;

const AdminServiceInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    fetch('http://127.0.0.1:8000/api/service-inquiry/list/', {
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
        setInquiries(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load service inquiries.');
        setLoading(false);
      });
  }, []);

  const filteredInquiries = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return inquiries.filter(i => {
      return (
        i.full_name.toLowerCase().includes(lowerSearch) ||
        i.email.toLowerCase().includes(lowerSearch) ||
        (i.phone && i.phone.toLowerCase().includes(lowerSearch)) ||
        i.service_category.toLowerCase().includes(lowerSearch) ||
        i.plan_title.toLowerCase().includes(lowerSearch) ||
        (i.message && i.message.toLowerCase().includes(lowerSearch))
      );
    });
  }, [inquiries, search]);

  const paginatedInquiries = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredInquiries.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredInquiries, page]);

  const totalPages = Math.ceil(filteredInquiries.length / ITEMS_PER_PAGE);

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
      const res = await fetch(`http://127.0.0.1:8000/api/service-inquiry/delete/${deleteId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token}`,
        },
      });

      if (res.ok) {
        setInquiries(prev => prev.filter(i => i.id !== deleteId));
        closeDeleteModal();
      } else {
        alert('Failed to delete the inquiry.');
      }
    } catch (err) {
      alert('Error deleting inquiry.');
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
          📩 Service Inquiries
        </h2>
      </div>

      <div className="mb-4">
        <input
          type="search"
          className="form-control shadow-sm rounded-pill border-0 px-4 py-3"
          placeholder="🔍 Search by name, email, phone, category, plan, or message..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
          aria-label="Search service inquiries"
          style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
        />
      </div>

      {paginatedInquiries.length === 0 ? (
        <p className="text-center fst-italic mt-5 text-muted">No service inquiries found.</p>
      ) : (
        <div className="table-responsive shadow rounded-4">
          <table className="table table-hover align-middle mb-0 bg-white rounded-4">
            <thead className="table-primary rounded-4">
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service Category</th>
                <th>Plan Title</th>
                <th>Message</th>
                <th>Date Submitted</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInquiries.map(inquiry => (
                <tr key={inquiry.id}>
                  <td>{inquiry.full_name}</td>
                  <td>{inquiry.email}</td>
                  <td>{inquiry.phone || 'N/A'}</td>
                  <td>{inquiry.service_category}</td>
                  <td>{inquiry.plan_title}</td>
                  <td style={{ whiteSpace: 'pre-wrap', maxWidth: '300px' }}>{inquiry.message || '-'}</td>
                  <td>{new Date(inquiry.submitted_at).toLocaleDateString()}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger rounded-pill"
                      onClick={() => openDeleteModal(inquiry.id)}
                      aria-label={`Delete inquiry from ${inquiry.full_name}`}
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
                Are you sure you want to permanently delete this inquiry?
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

export default AdminServiceInquiries;
