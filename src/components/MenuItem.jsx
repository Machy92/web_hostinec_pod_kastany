import { motion as Motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  return (
    <Motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-100"
    >
      <div className="menu-item-card h-100 p-4 rounded-3 position-relative overflow-hidden">
        <div className="menu-item-content position-relative z-1">
          <div className="d-flex justify-content-between align-items-baseline border-bottom border-secondary pb-3 mb-3">
            <h4 className="mb-0 h5 fw-bold font-heading" style={{ color: 'var(--text-primary)' }}>{item.name}</h4>
            <span className="price-tag fs-5 fw-bold text-nowrap ms-3">{item.price}</span>
          </div>

          <p className="text-muted mb-3 fst-italic small description-text">
            {item.description}
          </p>

          {item.allergens && (
            <div className="mt-auto pt-2 border-top border-secondary border-opacity-25">
              <small className="text-secondary d-flex align-items-center" style={{ fontSize: '0.75rem' }}>
                <i className="bi bi-info-circle me-2 text-primary opacity-75"></i>
                <span className="text-truncate">Alergeny: {item.allergens}</span>
              </small>
            </div>
          )}
        </div>

        <div className="hover-glow position-absolute top-0 start-0 w-100 h-100 opacity-0 transition-opacity"></div>
      </div>
    </Motion.div>
  );
};

export default MenuItem;
