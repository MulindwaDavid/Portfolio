import { ArrowDown, ArrowRight, ArrowUpRight, CodeXml, Menu, Smartphone, Wrench, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'Kear Phone Service Center',
    category: 'Electronics shop management system',
    description:
      'A management system for an electronics repair and retail shop—built around the day-to-day needs of the business.',
    className: 'shop',
    label: 'REPAIRS · PARTS · RETAIL',
    href: 'https://kearphoneservicecenter.com/',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'MySQL', 'Figma']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="David Mulindwa, home" onClick={closeMenu}>
          david<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-gutter" id="home">
          <div className="hero-copy">
            <p className="hero-name">David Mulindwa</p>
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · PRODUCT-MINDED BUILDER</p>
            <h1>
              <span className="headline-line">I build software</span>
              <span className="headline-line">that makes real</span>
              <span className="headline-line highlight">work easier.</span>
            </h1>
            <p className="hero-description">
              I’m David, a software engineer who builds practical tools for real businesses —
              like the electronics shop management system I made for Kear Phone Service Center.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#work">
                Explore my work <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a className="text-link" href="#about">
                A bit about me <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration with David's initials" role="img">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-sticker">BUILD<br />WITH<br />INTENTION <ArrowUpRight size={18} /></div>
            <span className="art-initials">DM</span>
            <span className="art-caption">DESIGN-MINDED<br />DEVELOPMENT</span>
            <span className="art-star" aria-hidden="true">✳</span>
          </div>

          <a className="scroll-cue" href="#work">
            SCROLL TO EXPLORE <span />
          </a>
        </section>

        <section className="work-section page-gutter" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ONE REAL BUSINESS. ONE USEFUL TOOL.</p>
              <h2>Built for <span>real life.</span></h2>
            </div>
            <p className="section-aside">A live electronics shop<br />management system.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className={`project-art ${project.className}-art`} aria-hidden="true">
                  <span className="project-art-label">{project.label}</span>
                  {project.className === 'shop' && (
                    <div className="shop-graphic">
                      <div className="shop-mark" aria-hidden="true">
                        <Smartphone size={42} strokeWidth={1.2} />
                        <Wrench size={20} strokeWidth={1.5} />
                      </div>
                      <div className="shop-brand">KEAR PHONE <span>SERVICE CENTER</span></div>
                      <div className="shop-rule" />
                      <div className="shop-offerings">
                        <span>REPAIRS</span>
                        <span>PARTS</span>
                        <span>RETAIL</span>
                      </div>
                      <span className="shop-graphic-note">BUILT FOR THE DAY-TO-DAY</span>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <div className="project-title-line">
                    <span className="project-number">{project.number}</span>
                    <h3>{project.name}</h3>
                    <span className="project-category">{project.category}</span>
                    <a
                      className="project-arrow"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} in a new tab`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <a className="text-link project-link" href={project.href} target="_blank" rel="noreferrer">
                    Open the live project <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section page-gutter" id="about">
          <div className="about-topline">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <span className="about-marker">✳ &nbsp; NICE TO MEET YOU</span>
          </div>
          <div className="about-content">
            <h2>Good software<br />makes hard things <span>easier.</span></h2>
            <div className="about-copy">
              <p>
                I’m David, a software engineer who likes seeing the whole picture: what people
                need, how a product feels to use, and what makes it work behind the scenes.
              </p>
              <p>
                I built an electronics shop management system for Kear Phone Service Center.
                It’s the kind of work I enjoy most—solving a real problem with a tool made for
                the people who use it.
              </p>
              <div className="skill-list" aria-label="Tools and technologies">
                {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
              <a className="text-link about-link" href="https://github.com/MulindwaDavid" target="_blank" rel="noreferrer">
                See my code on GitHub <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section page-gutter" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">HAVE A PROJECT IDEA?</p>
              <h2>Let’s make<br />something <span>matter.</span></h2>
              <p className="contact-description">
                Do you have a project idea? I’d love to hear what you’re thinking and help bring it to life.
              </p>
              <a className="button button-lime" href="mailto:davidmulindwa602@gmail.com">
                Tell me about it <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <div className="contact-phones" aria-label="Phone numbers">
                <a
                  className="whatsapp-link"
                  href="https://wa.me/256763617495"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message +256 763 617 495 on WhatsApp"
                >
                  <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" fill="currentColor" />
                    <path
                      d="M7.5 18.2 8.3 15.7a7 7 0 1 1 2.3 1.4l-3.1 1.1Z"
                      fill="none"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M9.3 8.7c.2-.5.5-.5.8-.5h.3c.2 0 .3.1.4.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.2.2-.1.3 0 .5.5.8 1.2 1.5 2.1 1.9.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.3.6c.2.1.3.2.3.4 0 .3-.2 1-.7 1.3-.4.4-1 .6-1.6.5-.6 0-1.5-.3-2.6-.9-1.4-.8-2.4-2.1-2.6-2.3-.2-.3-.8-1-.8-1.8s.4-1.3.6-1.5Z"
                      fill="#fff"
                    />
                  </svg>
                  +256 763 617 495
                </a>
                <a href="tel:+256732481457">+256 732 481 457</a>
              </div>
            </div>
            <div className="contact-decoration" aria-hidden="true">
              <div className="contact-ring ring-one" />
              <div className="contact-ring ring-two" />
              <div className="contact-ring ring-three" />
              <span>GOOD<br />THINGS<br />START HERE</span>
              <ArrowUpRight className="contact-arrow" size={40} strokeWidth={1.2} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-gutter">
        <a className="wordmark" href="#home">david<span>.</span></a>
        <p>Designed with care. Built for the web.</p>
        <div className="footer-links">
          <a href="https://github.com/MulindwaDavid" target="_blank" rel="noreferrer" aria-label="GitHub">
            <CodeXml size={17} /> GitHub
          </a>
          <span>© {new Date().getFullYear()} David Mulindwa</span>
        </div>
      </footer>
    </>
  )
}

export default App
