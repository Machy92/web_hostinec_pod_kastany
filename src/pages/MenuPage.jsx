import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-scroll';
import MenuCategory from '../components/MenuCategory';
import woltLogo from '../assets/Wolt-removebg-preview.png';
import foodoraLogo from '../assets/Foodora-removebg-preview.png';

const allergenKey = [
  { id: 1, name: 'Obiloviny obsahující lepek' },
  { id: 2, name: 'Korýši a výrobky z nich' },
  { id: 3, name: 'Vejce a výrobky z nich' },
  { id: 4, name: 'Ryby a výrobky z nich' },
  { id: 5, name: 'Podzemnice olejná (arašídy)' },
  { id: 6, name: 'Sójové boby (sója)' },
  { id: 7, name: 'Mléko a výrobky z něj' },
  { id: 8, name: 'Skořápkové plody (ořechy)' },
  { id: 9, name: 'Celer a výrobky z něj' },
  { id: 10, name: 'Hořčice a výrobky z ní' },
  { id: 11, name: 'Sezamová semena (sezam)' },
  { id: 12, name: 'Oxid siřičitý a siřičitany' },
  { id: 13, name: 'Vlčí bob (lupina)' },
  { id: 14, name: 'Měkkýši a výrobky z nich' }
];

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*, categories(name)')
        .order('id');

      if (error) {
        setError('Nepodařilo se načíst menu.');
        console.error("Chyba při načítání menu:", error);
      } else {
        const formattedData = data.map(item => ({
          ...item,
          category: item.categories?.name || 'Ostatní'
        }));
        setMenuItems(formattedData);
      }
      setLoading(false);
    };

    fetchMenu();
  }, []);

  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  };

  if (loading) return (
    <div className="page-container text-center pt-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}></div>
        <p className="text-muted fs-5">Načítám chutě...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="page-container text-center pt-5 text-danger d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div>
        <i className="bi bi-exclamation-triangle display-1 mb-3"></i>
        <h3>Ups! Něco se pokazilo.</h3>
        <p className="lead">{error}</p>
      </div>
    </div>
  );

  const groupedMenu = groupByCategory(menuItems);
  const categoryOrder = ['Burgery', 'Smažené speciality', 'Chuťovky k pivu', 'Přílohy a Omáčky', 'Pivo', 'Nealko nápoje'];

  const sortedCategories = Object.keys(groupedMenu).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div>
      <div className="menu-hero d-flex align-items-center justify-content-center text-center">
        <div className="container" style={{ zIndex: 2 }}>
          <Motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-1 fw-bold font-heading text-uppercase mb-3" style={{ color: '#f8f9fa', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
              Jídelní lístek
            </h1>
            <p className="lead fs-4 mb-0" style={{ color: '#e0e0e0', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
              Poctivá kuchyně z čerstvých surovin
            </p>
            <div className="d-flex justify-content-center mt-4">
              <hr className="w-25 opacity-100 border-3" style={{ borderColor: '#f8f9fa' }} />
            </div>

            <div className="mt-4 d-flex justify-content-center align-items-center gap-4">
              <a href="https://wolt.com/cs/cze/usti-nad-labem/restaurant/hostinec-pod-kastany" target="_blank" rel="noopener noreferrer" className="delivery-link transition-transform hover-scale">
                <img src={woltLogo} alt="Wolt" style={{ height: '50px', width: 'auto' }} />
              </a>
              <a href="https://www.foodora.cz/restaurant/h1bx/hostinec-pod-kastany" target="_blank" rel="noopener noreferrer" className="delivery-link transition-transform hover-scale">
                <img src={foodoraLogo} alt="Foodora" style={{ height: '50px', width: 'auto' }} />
              </a>
            </div>
          </Motion.div>
        </div>
      </div>

      <div className="sticky-category-nav" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container d-flex justify-content-start overflow-auto">
          {sortedCategories.map((category, index) => (
            <Link
              key={index}
              to={`category-${index}`}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="category-nav-link"
              activeClass="active"
              style={{ color: 'var(--text-primary)' }}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="container py-5">
        {sortedCategories.map((category, index) => (
          <MenuCategory
            key={index}
            id={`category-${index}`}
            title={category}
            items={groupedMenu[category]}
          />
        ))}

        {menuItems.length === 0 && (
          <div className="text-center py-5" style={{ color: 'var(--text-secondary)' }}>
            <p>Zatím zde nejsou žádné položky.</p>
          </div>
        )}

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 pt-5 border-top border-opacity-25"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <h3 className="allergen-legend-title h4 mb-4 font-heading" style={{ color: 'var(--text-primary)' }}>
            <i className="bi bi-info-circle-fill me-2"></i>
            Seznam alergenů
          </h3>
          <div className="row g-3">
            {allergenKey.map(allergen => (
              <div key={allergen.id} className="col-md-6 col-lg-4">
                <div className="d-flex align-items-center">
                  <span className="allergen-badge" style={{ background: 'var(--gold-accent)', color: '#000' }}>{allergen.id}</span>
                  <span className="small" style={{ color: 'var(--text-secondary)' }}>{allergen.name}</span>
                </div>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </div>
  );
}

export default MenuPage;