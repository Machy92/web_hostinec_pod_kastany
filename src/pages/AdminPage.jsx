import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient.js';


function AdminPage() {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const getStatusBadgeClass = (statusName) => {
    switch (statusName) {
      case 'Dokončeno': return 'bg-success';
      case 'Zrušeno': case 'Nedostavil se': return 'bg-danger';
      case 'Potvrzeno': return 'bg-primary';
      case 'Čeká': return 'bg-info text-dark';
      default: return 'bg-secondary';
    }
  };

  const handleStatusChange = async (reservationId, newStatusId) => {
    const newStatusObj = statuses.find(s => s.id === Number(newStatusId));
    const newStatusName = newStatusObj ? newStatusObj.name : 'Neznámý';

    setReservations(currentReservations =>
      currentReservations.map(res =>
        res.id === reservationId
          ? { ...res, status: newStatusName, status_id: Number(newStatusId) }
          : res
      )
    );

    const { error } = await supabase
      .from('reservations')
      .update({ status_id: newStatusId })
      .eq('id', reservationId);

    if (error) {
      console.error("Chyba při aktualizaci:", error);
      setError('Změna stavu se neuložila.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: statusesData, error: statusesError } = await supabase
        .from('reservation_statuses')
        .select('*')
        .order('id');

      if (statusesError) console.error("Chyba stavů:", statusesError);
      else setStatuses(statusesData);

      const { data: resData, error: resError } = await supabase
        .from('reservations')
        .select('*, reservation_statuses(name)')
        .order('created_at', { ascending: false });

      if (resError) {
        setError('Nepodařilo se načíst rezervace.');
      } else {
        const formattedData = resData.map(res => ({
          ...res,
          status: res.reservation_statuses?.name || 'Neznámý',
          status_id: res.status_id
        }));
        setReservations(formattedData);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const pendingCount = useMemo(() => {
    return reservations.filter(res => res.status === 'Čeká').length;
  }, [reservations]);

  const sortedReservations = useMemo(() => {
    return [...reservations].sort((a, b) => {
      if (a.status === 'Čeká' && b.status !== 'Čeká') return -1;
      if (b.status === 'Čeká' && a.status !== 'Čeká') return 1;
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }, [reservations]);

  const displayedReservations = showAll ? sortedReservations : sortedReservations.slice(0, 7);

  if (loading) return <div className="page-container"><p className="text-center">Načítám...</p></div>;
  if (error) return <div className="page-container"><p className="text-center text-danger">{error}</p></div>;

  return (
    <div className="page-container container-fluid px-lg-4" style={{ minHeight: '100vh', color: 'var(--text-primary)' }}>
      <style>
        {`
          .glass-panel {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            box-shadow: var(--glass-shadow);
          }
          .admin-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid var(--glass-border);
            background: var(--card-bg);
          }
          .admin-card:active {
            transform: scale(0.98);
          }
          .status-select {
            background-color: var(--input-bg);
            border-color: var(--input-border);
            color: var(--text-primary) !important;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23C5A572' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
          }
          .text-gold { color: var(--gold-accent) !important; }
          .bg-gold { background-color: var(--gold-accent) !important; color: #000 !important; }
          .border-gold { border-color: var(--gold-accent) !important; }
        `}
      </style>

      <div className="d-flex justify-content-between align-items-center mb-5 pt-4 flex-wrap">
        <div>
          <h6 className="text-gold text-uppercase tracking-wider mb-1" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Hostinec pod Kaštany</h6>
          <h1 className="display-6 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>Administrace</h1>
        </div>
        <button
          className="btn btn-outline-light rounded-pill px-4 mt-3 mt-md-0"
          onClick={handleLogout}
          style={{ borderColor: 'var(--glass-border)', color: 'var(--text-primary)' }}
        >
          <i className="bi bi-box-arrow-right me-2"></i>Odhlásit
        </button>
      </div>

      {pendingCount > 0 && (
        <div className="alert border-0 text-white d-flex align-items-center shadow-sm mb-4" role="alert" style={{ background: 'rgba(197, 165, 114, 0.15)', borderLeft: '4px solid #C5A572' }}>
          <i className="bi bi-bell-fill me-3 text-gold" style={{ fontSize: '1.5rem' }}></i>
          <div>
            K vyřízení čeká <strong>{pendingCount} {pendingCount === 1 ? 'rezervace' : (pendingCount > 1 && pendingCount < 5 ? 'rezervace' : 'rezervací')}</strong>.
          </div>
        </div>
      )}

      {/* Main Panel */}
      <div className="glass-panel rounded-4 overflow-hidden mb-5">

        {reservations.length === 0 ? (
          <div className="text-center p-5">
            <i className="bi bi-calendar-x text-muted mb-3" style={{ fontSize: '3rem' }}></i>
            <p className="text-muted">Zatím zde nejsou žádné rezervace.</p>
          </div>
        ) : (
          <>
            <div className="table-responsive d-none d-md-block">
              <table className="table table-hover mb-0" style={{ backgroundColor: 'transparent', '--bs-table-bg': 'transparent', '--bs-table-hover-bg': 'var(--input-focus-bg)', color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}>
                <thead style={{ background: 'var(--input-bg)', borderBottom: '1px solid var(--glass-border)' }}>
                  <tr>
                    <th className="py-3 ps-4 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: 'none', color: 'var(--text-secondary)' }}>Host</th>
                    <th className="py-3 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: 'none', color: 'var(--text-secondary)' }}>Kontakt</th>
                    <th className="py-3 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: 'none', color: 'var(--text-secondary)' }}>Datum</th>
                    <th className="py-3 text-uppercase text-center" style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: 'none', color: 'var(--text-secondary)' }}>Hostů</th>
                    <th className="py-3 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: 'none', color: 'var(--text-secondary)' }}>Stav</th>
                    <th className="py-3 text-uppercase pe-4" style={{ fontSize: '0.75rem', letterSpacing: '1px', borderBottom: 'none', color: 'var(--text-secondary)' }}>Akce</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedReservations.map((res) => (
                    <tr
                      key={res.id}
                      className="align-middle border-bottom border-secondary"
                      style={{
                        background: res.status === 'Čeká' ? 'rgba(197, 165, 114, 0.05)' : 'transparent',
                        borderColor: 'rgba(255,255,255,0.05)'
                      }}
                    >
                      <td className="ps-4 fw-medium" style={{ color: 'var(--text-primary)' }}>{res.name}</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{res.email}</span>
                          <small style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{res.phone}</small>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex flex-column">
                          <span className="fw-medium" style={{ color: 'var(--text-primary)' }}>{new Date(res.date).toLocaleDateString('cs-CZ')}</span>
                          <small style={{ color: 'var(--text-secondary)' }}>{res.time}</small>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="badge bg-dark rounded-pill border border-secondary fw-normal px-3 py-2">{res.guest_count}</span>
                      </td>
                      <td>
                        <span className={`badge rounded-pill px-3 py-2 fw-medium ${getStatusBadgeClass(res.status)}`} style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                          {res.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="pe-4">
                        <select
                          className="form-select form-select-sm status-select border-secondary shadow-none"
                          value={res.status_id || ''}
                          onChange={(e) => handleStatusChange(res.id, e.target.value)}
                          style={{ minWidth: '140px', cursor: 'pointer' }}
                        >
                          {statuses.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-md-none p-3">
              {displayedReservations.map((res) => (
                <div
                  key={res.id}
                  className="admin-card rounded-4 p-4 mb-3 position-relative overflow-hidden"
                  style={res.status === 'Čeká' ? { borderLeft: '4px solid #C5A572' } : {}}
                >
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{res.name}</h5>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-envelope me-1"></i>{res.email}</div>
                    </div>
                    <span className={`badge rounded-pill px-3 py-2 ${getStatusBadgeClass(res.status)}`}>
                      {res.status}
                    </span>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <small className="d-block text-uppercase" style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Datum</small>
                        <span className="fw-medium" style={{ color: 'var(--text-primary)' }}>{new Date(res.date).toLocaleDateString('cs-CZ')}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <small className="d-block text-uppercase" style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Čas</small>
                        <span className="fw-medium" style={{ color: 'var(--text-primary)' }}>{res.time}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <small className="d-block text-uppercase" style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Hostů</small>
                        <i className="bi bi-people me-1 text-gold"></i>
                        <span className="fw-medium" style={{ color: 'var(--text-primary)' }}>{res.guest_count}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <small className="d-block text-uppercase" style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Telefon</small>
                        <a href={`tel:${res.phone}`} className="text-decoration-none" style={{ color: 'var(--text-primary)' }}>{res.phone}</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="small mb-2 d-block ms-1" style={{ color: 'var(--text-secondary)' }}>Změnit stav rezervace</label>
                    <select
                      className="form-select status-select border-secondary py-3"
                      value={res.status_id || ''}
                      onChange={(e) => handleStatusChange(res.id, e.target.value)}
                      style={{ borderRadius: '12px' }}
                    >
                      {statuses.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {sortedReservations.length > 7 && !showAll && (
          <div className="p-4 text-center border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <button className="btn btn-link text-gold text-decoration-none" onClick={() => setShowAll(true)}>
              Zobrazit starší rezervace <i className="bi bi-chevron-down ms-1"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;