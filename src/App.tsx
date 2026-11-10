import { ArrowDown, ArrowRight, ArrowUpRight, CodeXml, Menu, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'Earthly',
    category: 'E-commerce · Concept project',
    description: 'A calmer way to shop consciously, with a little more room to breathe.',
    className: 'earthly',
    label: 'GOOD THINGS, GROWN SLOWLY',
  },
  {
    number: '02',
    name: 'Frame',
    category: 'Editorial · Concept project',
    description: 'An editorial home for photographs, notes, and the stories in between.',
    className: 'frame',
    label: 'A STUDY IN STILLNESS',
  },
  {
    number: '03',
    name: 'Offcut',
    category: 'Web app · Concept project',
    description: 'A playful toolkit for turning small, overlooked ideas into something useful.',
    className: 'offcut',
    label: 'MAKE ROOM FOR THE ROUGH DRAFT',
  },
]

const skills = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Figma']

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
            <p className="eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER & CREATIVE BUILDER</p>
            <h1>
              I make the
              <br />
              internet feel
              <br />
              <span className="highlight">more human.</span>
            </h1>
            <p className="hero-description">
              Hey, I’m David — a developer who cares about the little details that make a big
              difference. I build clear, considered experiences for the web.
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
              <p className="eyebrow">A FEW THINGS I’VE BEEN THINKING ABOUT</p>
              <h2>Selected <span>work.</span></h2>
            </div>
            <p className="section-aside">Curious ideas, carefully made.<br />More to come.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className={`project-art ${project.className}-art`} aria-hidden="true">
                  <span className="project-art-label">{project.label}</span>
                  {project.className === 'earthly' && (
                    <div className="earthly-objects">
                      <span className="earthly-circle" />
                      <span className="earthly-bottle" />
                      <span className="earthly-leaf leaf-one" />
                      <span className="earthly-leaf leaf-two" />
                    </div>
                  )}
                  {project.className === 'frame' && (
                    <div className="frame-window">
                      <span className="frame-sun" />
                      <span className="frame-hill hill-one" />
                      <span className="frame-hill hill-two" />
                      <span className="frame-photo-note">FIG. 01 — SLOW MORNING</span>
                    </div>
                  )}
                  {project.className === 'offcut' && (
                    <div className="offcut-paper">
                      <span className="offcut-star">✳</span>
                      <span className="offcut-note">IDEAS<br />WELCOME.</span>
                      <span className="offcut-scribble">↗</span>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <div className="project-title-line">
                    <span className="project-number">{project.number}</span>
                    <h3>{project.name}</h3>
                    <span className="project-category">{project.category}</span>
                    <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
                  </div>
                  <p>{project.description}</p>
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
            <h2>Good work lives<br />in the <span>details.</span></h2>
            <div className="about-copy">
              <p>
                I’m David, a frontend developer drawn to the space where thoughtful design and
                dependable code meet. I like untangling tricky problems, making useful things,
                and leaving the pixels a little better than I found them.
              </p>
              <p>
                My toolkit includes the modern web fundamentals, a healthy curiosity, and a
                soft spot for the small finishing touches.
              </p>
              <div className="skill-list" aria-label="Tools and technologies">
                {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
              <a className="text-link about-link" href="https://github.com/MulindwaDavid" target="_blank" rel="noreferrer">
                More about my work on GitHub <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section page-gutter" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
              <h2>Let’s make<br />it <span>happen.</span></h2>
              <p className="contact-description">
                Have a project, a question, or just want to say hello? My inbox is open.
              </p>
              <a className="button button-lime" href="mailto:hello@example.com">
                Say hello <ArrowUpRight size={16} aria-hidden="true" />
              </a>
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
