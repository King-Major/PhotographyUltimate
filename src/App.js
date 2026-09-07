import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Crown, Instagram, Menu, Sparkles, X } from 'lucide-react';
import one from './asset/one.webp';
import two from './asset/UCS_9550re.webp';
import three from './asset/three.webp';
import four from './asset/four.webp';
import five from './asset/five.webp';
import six from './asset/six.webp';
import seven from './asset/seven.webp';
import eight from './asset/eight.webp';
import nine from './asset/nine.webp';
import ten from './asset/ten.webp';
import hero from './asset/download.webp';

const instagramProfile = 'https://www.instagram.com/ultimateconcept01/';
const instagramPosts = [
  { image: seven, title: 'Portraits', handle: '@ultimateconcept01' },
  { image: two, title: 'Celebrations', handle: '@ultimateconcept01' },
  { image: three, title: 'Editorial', handle: '@ultimateconcept01' },
  { image: four, title: 'New beginnings', handle: '@ultimateconcept01' },
  { image: five, title: 'Personal brand', handle: '@ultimateconcept01' },
  { image: eight, title: 'Fashion stories', handle: '@ultimateconcept01' },
  { image: one, title: 'The details', handle: '@ultimateconcept01' },
  { image: six, title: 'In the moment', handle: '@ultimateconcept01' },
  { image: nine, title: 'Quiet light', handle: '@ultimateconcept01' },
  { image: ten, title: 'Newborn', handle: '@ultimateconcept01' },
];
const services = ['Portraits', 'Weddings', 'Brand stories', 'Newborns', 'Events', 'Modelling'];

function App() {
  const [activePost, setActivePost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActivePost(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main className="site-shell">
      <header className="site-header"><a className="brand" href="#top" aria-label="Ultimate Concept home"><span className="brand-mark"><Crown size={20} strokeWidth={1.8} /></span><span>ULTIMATE <b>CONCEPT</b></span></a><nav className="desktop-nav" aria-label="Primary navigation"><a href="#gallery">Gallery</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="header-link" href={instagramProfile} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a><button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><Menu size={22} /></button>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a href={instagramProfile} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></nav>}</header>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><Sparkles size={14} /> Sokoto, Nigeria / Est. 2018</p><h1>Stories worth<br /><em>remembering.</em></h1><p className="hero-intro">Photography for people, brands, and seasons that deserve to be seen beautifully.</p><div className="hero-actions"><a className="button button-dark" href="#gallery">Explore the gallery <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Book a session</a></div></div><div className="hero-portrait"><img src={hero} alt="Ultimate Concept photographer at work" fetchPriority="high" /><span className="portrait-note">The art of seeing<br /><b>what others miss.</b></span></div><div className="hero-stamp"><Crown size={22} /><span>ULTIMATE<br />CONCEPT</span></div></section>
      <section className="intro-band reveal" id="about"><p className="section-kicker">A visual studio with a point of view</p><div className="intro-grid"><h2>Every frame<br /><em>has a feeling.</em></h2><p>We make photographs with warmth, intention, and a little bit of soul. From quiet portraits to full-scale celebrations, Ultimate Concept turns your real moments into images you will want to keep close.</p></div><div className="service-list">{services.map((service, index) => <span key={service}><small>0{index + 1}</small>{service}</span>)}</div></section>
      <section className="gallery-section reveal" id="gallery"><div className="section-heading"><div><p className="section-kicker">Selected work</p><h2>From the <em>gallery</em></h2></div><a className="instagram-link" href={instagramProfile} target="_blank" rel="noreferrer"><Instagram size={17} /> See more on Instagram <ArrowUpRight size={15} /></a></div><div className="gallery-grid">{instagramPosts.map((post, index) => <button className={`gallery-item gallery-item-${index + 1} reveal reveal-${index % 2 === 0 ? 'left' : 'right'}`} type="button" onClick={() => setActivePost(post)} key={post.title}><img src={post.image} alt={post.title} loading={index < 3 ? 'eager' : 'lazy'} decoding="async" /><span className="gallery-overlay"><span>{post.title}<small>{post.handle}</small></span><ArrowUpRight size={19} /></span></button>)}</div></section>
      <footer id="contact" className="site-footer reveal"><div><p className="section-kicker">Start a conversation</p><h2>Let’s make something<br /><em>worth keeping.</em></h2></div><div className="footer-details"><a className="button button-light" href="mailto:princestepha@gmail.com">Get in touch <ArrowUpRight size={17} /></a><a href={instagramProfile} target="_blank" rel="noreferrer">@ultimateconcept01</a><a href="tel:+2348106838587">+(234) 810-683-8587</a><span>Sokoto, Sokoto State</span></div><div className="copyright">© {new Date().getFullYear()} Ultimate Concept Photography <span>Made for meaningful moments.</span></div></footer>
      {activePost && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${activePost.title} gallery image`} onClick={() => setActivePost(null)}><div className="lightbox-card" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" type="button" onClick={() => setActivePost(null)} aria-label="Close image viewer"><X size={22} /></button><div className="lightbox-image"><img src={activePost.image} alt={activePost.title} /></div><div className="lightbox-details"><p className="section-kicker">Ultimate Concept / Selected work</p><h2>{activePost.title}</h2><p>{activePost.handle}</p><a className="button button-light" href={instagramProfile} target="_blank" rel="noreferrer"><Instagram size={17} /> View on Instagram <ArrowUpRight size={16} /></a></div></div></div>}
    </main>
  );
}

export default App;