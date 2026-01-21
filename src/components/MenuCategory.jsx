import { motion as Motion } from 'framer-motion';
import MenuItem from './MenuItem';

const MenuCategory = ({ title, items, id }) => {
    return (
        <section id={id} className="menu-category py-5 scroll-margin-top">
            <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-5"
            >
                <h2 className="display-5 text-uppercase mb-4 ps-4 border-start border-5 border-primary category-title">
                    {title}
                </h2>
            </Motion.div>

            <div className="row g-4">
                {items.map((item) => (
                    <div key={item.id} className="col-lg-6">
                        <MenuItem item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuCategory;
