import React from 'react';
import './App.css';
import nails1 from './images/nails1.jpg';
import nails2 from './images/nails2.jpg';
import nails3 from './images/nails3.jpg';
import nails4 from './images/nails4.jpg';

const manicure = [
  //Manicures
  { name: 'Manicure Treatment', price: '', desc: '', isSectionHeading: true },
  { name: 'CLASSIC MANICURE', price: '$25', desc: 'Includes: hand soak, cuticle tidying and removal, hand shaping, hand massage with lotion, hot towel, and your choice of regular color' },
  { name: 'DELUXE MANICURE', price: '$35', desc: 'Includes: hand soak, cuticle tidying and removal, hand shaping, wrap your hand with mask for silky smooth hand treatment, hot towel, and your choice of regular color' },
  // Acrylic Nails
  { name: 'Acrylic Nails', price: '', desc: '', isSectionHeading: true },
  { name: 'FULL SET REGULAR POLISH', price: '$45+'},
  { name: 'FIL IN REGULAR POLISH', price: '$35+'},
  { name: 'FULL SET GEL POLISH', price: '$50+'},
  { name: 'FILL IN GEL POLISH', price: '$40+' },
  { name: 'FULL SET POWDER COLOR', price: '$55+' },
  { name: 'FILL IN POWDER  COLOR', price: '$45+' },
  { name: 'FULL SET PINK & WHITE', price: '$65+' },
  { name: 'FILL IN PINK & WHITE', price: '$45+' },
  { name: 'FULL SET OMBRE PINK & WHITE', price: '$65+' },
  { name: 'FULL SET OMBRE COLOR', price: '$65+' },
  { name: 'FILL IN OMBRE', price: '$45+' },
  // Gel Nails
  { name: 'Gel Nails', price: '', desc: '', isSectionHeading: true },
  { name: 'GEL COLOR WITH MANICURE', price: '$35'},
  { name: 'GEL FRENCH TIP WITH MANICURE', price: '$40'},
  { name: 'GEL COLOR CHANGE', price: '$25'},
  { name: 'GEL FRENCH TIP CHANGE', price: '$30' },
  // Dipping Power Nails
  { name: 'Dipping Power Nails', price: '', desc: '', isSectionHeading: true },
  { name: 'DIPPING COLOR', price: '$40+'},
  { name: 'DIPPING FRENCH TIP', price: '$50+'},
  { name: 'DIPPING OMBRE', price: '$55+'},
  // Addons
  { name: 'ADDITIONAL SERVICES', price: '', desc: '', isSectionHeading: true },
  { name: 'NAILS POLISH CHANGE', price: '$12', isAddon: true },
  { name: 'TOE NAILS POLISH CHANGE', price: '$15', isAddon: true },
  { name: 'SOAK OFF ACRYLIC WITHOUT SERVICES', price: '$15', isAddon: true },
  { name: 'SOAK OFF GEL & DIP POWDER', price: '$10', isAddon: true },
  { name: 'NAILS REPAIR', price: '$5+', isAddon: true },
];

const pedicures = [
  //Pedicures
  { name: 'BASIC PEDICURE', price: '$30', desc: 'Includes: nail trimming and shaping, buffing, cuticle grooming, callus treatment, lotion massage, and your choice of polish color.' },
  { name: 'SPA PEDICURE', price: '$35', desc: 'Includes: nail trimming and shaping, buffing, cuticle grooming, callus treatment, sugar scrub, lotion massage, hot towel, and your choice of polish.' },
  { name: 'DELUXE SPA PEDICURE', price: '$40', desc: 'Includes: The spa pedicure mask, hot towels wrap, and your choice of sugar scrub scents, light massage.' },
  { name: 'LUXURY PEDICURE', price: '$45', desc: 'Includes: trimming, file and shaping of nails, cuticle care buffing, callus treatment, exfoliating sugar scrub, mask, double massage, followed by a hot towel wrap.' },
  { name: 'ULTIMATE SPA PEDICURE', price: '$55', desc: 'Includes: trimming, file and shaping of nails, cuticle care buffing, callus treatment, exfoliating sugar scrub, mask, followed by a hot towel wrap, paraffin wax treatment, TRIPLE massage.' },
  { name: 'SIGNATURE PEDICURE', price: '$65', desc: 'Includes: trimming, file and shaping of nails, cuticle care buffing, callus treatment, exfoliating sugar scrub, mask, TRIPLE massage, followed by a hot towel wrap, JELLY treatment, PARAFIN WAX treatment, HOT STONE treatment.'},
  // Addons
  { name: 'ADDITIONAL SERVICES', price: '', desc: '', isSectionHeading: true },
  { name: 'PARAFFIN TREATMENT', price: '$10', isAddon: true },
  { name: 'JELLY TREATMENT', price: '$12', isAddon: true },
  { name: 'HOT STONE TREATMENT', price: '$15', isAddon: true },
  //other things
  { name: ' ', price: ' ', isAddon: true },
  { name: 'GEL POLISH CHANGE FOR NAILS', price: '$25', isAddon: true },
  { name: 'GEL POLISH CHANGE FOR TOES', price: '$25', isAddon: true },
  { name: 'POLISH CHANGE FOR TOES', price: '$15', isAddon: true },
  { name: 'ACRYLIC NAILS SOAK OFF', price: '$15', isAddon: true },
  { name: 'BASIC DESIGN NAILS & TOES', price: '$5+', isAddon: true },

  { name: 'NAILS REPAIR', price: '$5+', isAddon: true },
];

const waxing = [
  { name: 'EYEBROW WAX', price: '$15' },
  { name: 'UPPER LIP', price: '$10' },
  { name: 'CHIN', price: '$15' },
  { name: 'FULL FACE', price: '$40+' },
  { name: 'CHEST', price: '$40+' },
  { name: 'BACK', price: '$60+' },
  { name: 'FULL ARMS', price: '$45+' },
  { name: 'UNDER ARMS', price: '$30+' },
  { name: 'HALF LEGS', price: '$40+' },
  { name: 'FULL LEGS', price: '$55+' },
];

const techs = [
  {
    name: 'Sophie',
    desc: 'More than 15+ years helping people feel beautiful',
  },
  {
    name: 'Coco',
    desc: 'More than 10+ years bringing smiles and beauty to your nails',
  },
];

const gallery = [
  nails1,
  nails2,
  nails3,
  nails4,
];

function ServiceSection({ title, items }) {
  return (
    <div className="qn-service-vertical-block">
      <h3 className="qn-service-vertical-title">{title}</h3>
      <ul className="qn-service-list">
        {items.map((d, i) => (
          d.isSectionHeading ? (
            <li key={i} className="qn-service-section-heading">{d.name}</li>
          ) : d.isAddon ? (
            <li key={i} className="qn-service-item qn-service-addon">
              <div className="qn-service-row">
                <span className="qn-service-name">{d.name}</span>
                {d.price && <span className="qn-service-price">{d.price}</span>}
              </div>
              {d.desc && <div className="qn-service-desc">{d.desc}</div>}
            </li>
          ) : (
            <li key={i} className="qn-service-item">
              <div className="qn-service-row">
                <span className="qn-service-name">{d.name}</span>
                {d.price && <span className="qn-service-price">{d.price}</span>}
              </div>
              {d.desc && <div className="qn-service-desc">{d.desc}</div>}
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="qn-app">
      <header className="qn-header">
        <h1 className="qn-title">Queens Nails Spa</h1>
        <p className="qn-tagline">Pamper yourself. You deserve it. <span className="qn-heart">&#10084;</span></p>
      </header>
      <section className="qn-contact">
        <p>Visit us at <b>2122 N Roan St, Johnson City, TN 37601</b> <span className="qn-walkin">(Walk-in Welcome!)</span></p>
        <p>Or call us at <a href="tel:4236100019" className="qn-phone">423-610-0019</a></p>
      </section>
      <nav className="qn-services">
        <h2 className="qn-services-headline">Queens Services</h2>
        <div className="qn-services-vertical-list">
          <ServiceSection title="Manicure" items={manicure} />
          <ServiceSection title="Pedicures" items={pedicures} />
          <ServiceSection title="Waxing" items={waxing} />
        </div>
      </nav>
      <section className="qn-techs">
        <h2>Meet Your Nails Tech</h2>
        <div className="qn-tech-list">
          {techs.map((t) => (
            <div key={t.name} className="qn-tech">
              <div className="qn-tech-name">{t.name}</div>
              <div className="qn-tech-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="qn-gallery">
        <h2>Similar Nails We've Done</h2>
        <div className="qn-gallery-list">
          {gallery.map((img, idx) => (
            <img src={img} alt={`Nail sample ${idx + 1}`} key={img} className="qn-gallery-img" />
          ))}
        </div>
      </section>
      <section className="qn-follow">
        <h2>Follow us:</h2>
        <div className="qn-follow-list">
          <a href="https://www.facebook.com/Citynailsjc/" target="_blank" rel="noopener noreferrer" className="qn-follow-link">Facebook: @Citynailsjc</a><br />
          <a href="https://www.instagram.com/queen.nails.spa.johnsoncity/?hl=en" target="_blank" rel="noopener noreferrer" className="qn-follow-link">Instagram: @queen.nails.spa.johnsoncity</a>
        </div>
      </section>
      <footer className="qn-footer">
        <span>© {new Date().getFullYear()} Queens Nails Spa</span>
      </footer>
    </div>
  );
}

export default App;