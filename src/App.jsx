import './index.css';

const navLinks = [
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'JPMorgan Chase & Co.',
    location: 'Bangalore, India',
    duration: 'July 2023 – July 2024',
    points: [
      "Engineered and shipped production features including OTP authentication, overdraft protection, and check ordering for Chase's Digital Self Service platform, serving 50M+ users across web and native mobile via JS bridge.",
      'Developed ADA/WCAG-compliant UI components in TypeScript and React, with the same codebase deployed seamlessly across web and hybrid mobile platforms.',
      'Drove unit and integration test coverage to 95%+, reducing production defects and ensuring release stability across quarterly Agile sprints.',
      'Integrated REST APIs into frontend components, partnering with QA and product teams across 35+ Agile sprints to deliver production features with consistent on-time release cadence.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'JPMorgan Chase & Co.',
    location: 'Bangalore, India',
    duration: 'January 2023 – June 2023',
    points: [
      'Implemented responsive, ADA-compliant UI features and REST API integrations for Chase web and mobile platforms as part of the same Digital Self Service team.',
    ],
  },
];

function githubRepoPath(url) {
  const m = String(url).match(/github\.com\/([\w-]+\/[\w.-]+)/);
  return m ? m[1] : '';
}

const projects = [
  {
    title: 'FindLy (Local Multimodal Semantic Search)',
    eyebrow: 'Full-stack product',
    featured: true,
    summary:
      'Full-stack app to index local files and search with text or images: React and TypeScript UI, FastAPI and Redis-backed workers, FAISS and SQLite for vectors and metadata.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Redis', 'FAISS'],
  },
  {
    title: 'Semantic Book Recommender',
    eyebrow: 'Full-stack app',
    summary:
      'Meaning-based book discovery with a TypeScript UI and Python backend: embeddings, similarity search, and a small full-stack surface you can run end to end.',
    tech: ['TypeScript', 'Python', 'Embeddings', 'Semantic search', 'CSS'],
    link: 'https://github.com/shreyasethi23/semantic-book-recommender',
  },
  {
    title: 'Assessing Unintended Memorization in Language Models',
    eyebrow: 'ML research',
    summary:
      'Notebook-driven study of unintended memorization and semantic leakage in language models across training setups, with evaluation and privacy-relevant analysis.',
    tech: ['Python', 'Jupyter', 'NLP', 'Evaluation', 'Privacy'],
    link: 'https://github.com/shreyasethi23/llm-memorization',
  },
  {
    title: 'Bias Detection in Clinical Text (LLMs)',
    eyebrow: 'ML research',
    summary:
      'Clinical NLP and fairness angle: exploring demographic bias in medical text with transformer models and metrics suited to sensitive domains.',
    tech: ['Jupyter', 'Clinical NLP', 'PyTorch', 'Fairness', 'LLMs'],
    link: 'https://github.com/shreyasethi23/Bias-Detection-in-LLMs',
  },
  {
    title: 'Music Genre Transformation (Generative Models)',
    eyebrow: 'ML research',
    summary:
      'Audio ML experiments with deep generative models: genre style transfer, architecture comparisons, and training loops in notebook form.',
    tech: ['Python', 'Jupyter', 'PyTorch', 'Audio ML', 'GANs / VAEs'],
    link: 'https://github.com/shreyasethi23/Music-Genre-Transformation',
  },
  {
    title: 'Medical Assistant Chatbot',
    eyebrow: 'ML / multimodal',
    summary:
      'Multimodal health AI demo: chest X-ray classification together with a medical Q&A style chatbot, tying vision models to language in one workflow.',
    tech: ['Python', 'Jupyter', 'Computer vision', 'NLP', 'Healthcare AI'],
    link: 'https://github.com/shreyasethi23/medical-assistant-chatbot',
  },
  {
    title: 'Portfolio Site (this site)',
    eyebrow: 'This site',
    summary:
      'This portfolio: React, Vite, and plain CSS, deployed on GitHub Pages. Structured sections, responsive layout, and resume download.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'GitHub Pages'],
    link: 'https://github.com/shreyasethi23/shreya-portfolio',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React 19',
      'TypeScript',
      'Vite',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'gsap',
      'Responsive UI Design',
      'Component Architecture',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Python',
      'FastAPI',
      'REST APIs',
      'Redis',
      'SQL',
      'Pydantic',
      'Uvicorn',
      'Asynchronous Worker Queues',
      'BLPOP Queue Model',
      'SQLite',
      'Node.js',
    ],
  },
  {
    title: 'AI / ML',
    items: [
      'PyTorch',
      'NLP and LLMs',
      'Semantic Search',
      'Multimodal Retrieval',
      'FAISS Vector Similarity Search',
      'Embedding Pipelines',
      'NumPy',
      'SQLite',
    ],
  },
  {
    title: 'Testing and Tools',
    items: [
      'Unit Testing',
      'Component Testing',
      'Jest',
      '@testing-library/react',
      'ESLint',
      'Git and GitHub',
    ],
  },
];

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="container nav">
          <a href="#top" className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Shreya Sethi
          </a>
          <nav aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Software and machine learning engineering</p>
              <h1 id="hero-heading">
                Clear interfaces, dependable services, and ML that works in production.
              </h1>
              <p className="hero-lede">
                I care about how software feels to users, how APIs hold up over time, and how models
                are trained, evaluated, and deployed responsibly. My graduate studies in Computer Science
                at USC build on that same focus, with more depth in machine learning and software engineering systems.
              </p>
              <div className="actions">
                <a
                  className="btn primary"
                  href={`${import.meta.env.BASE_URL}Resume_Shreya.pdf`}
                  download
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download resume PDF"
                >
                  Resume
                </a>
                <a
                  className="btn primary"
                  href="https://www.linkedin.com/in/shreyasethi23/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <aside className="code-window code-window--dark" aria-label="Example snippet">
              <div className="code-window-bar">
                <span className="code-window-dot" />
                <span className="code-window-dot" />
                <span className="code-window-dot" />
                <span className="code-window-title">portfolio.tsx</span>
              </div>
              <pre className="code-window-body">
                <span className="cm">// ship, measure, iterate</span>
                {'\n'}
                <span className="kw">const</span> focus = <span className="str">&apos;product + ML&apos;</span>;{'\n'}
                <span className="kw">export</span> <span className="kw">const</span> <span className="fn">build</span>
                {' = () => ({'}
                {'\n  '}
                craft: <span className="str">&apos;accessible UI&apos;</span>,{'\n  '}
                systems: <span className="str">&apos;reliable APIs&apos;</span>
                {'\n});'}
              </pre>
            </aside>
          </div>
        </section>

        <section id="education" className="section alt alt--cool">
          <div className="container">
            <div className="section-head">
              <h2>Education</h2>
            </div>
            <div className="grid two">
              <article className="card">
                <p className="card-meta">Aug 2024 - May 2026</p>
                <h3>University of Southern California</h3>
                <p className="card-sub">MS in Computer Science | GPA: 3.85/4.0</p>
              </article>
              <article className="card">
                <p className="card-meta">Jul 2019 - May 2023</p>
                <h3>Thapar Institute of Engineering and Technology</h3>
                <p className="card-sub">B.E. Electronics and Communication | GPA: 9.07/10</p>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-head section-head--experience">
              <h2>Experience</h2>
              <p className="experience-intro">
                I gravitate toward ownership with guardrails: customer impact first, accessibility
                and testing as habits rather than afterthoughts, and clear collaboration with product
                and QA when tradeoffs show up. At JPMorgan Chase, that translated to end-to-end work
                on Digital Self Service. I built with TypeScript and React across web and hybrid
                mobile, connected UI to services, and released in step with Agile squads as priorities
                shifted. My internship on the same team used a smaller surface but the same bar. It
                sharpened how I approach API-backed work, iteration speed, and what production-ready
                means when compliance and customer trust are non-negotiable.
              </p>
            </div>
            <div className="experience-doc">
              {experiences.map((item) => (
                <article key={`${item.role}-${item.duration}`} className="experience-block">
                  <header className="experience-block-head">
                    <div className="experience-block-primary">
                      <h3 className="experience-role">{item.role}</h3>
                      <p className="experience-company-line">
                        {item.company}{' '}
                        <span className="experience-sep" aria-hidden="true">
                          ·
                        </span>{' '}
                        {item.location}
                      </p>
                    </div>
                    <p className="experience-dates">{item.duration}</p>
                  </header>
                  <ul className="experience-bullets">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section alt alt--sage">
          <div className="container">
            <div className="section-head">
              <h2>Projects</h2>
              <p>
                Highlights from{' '}
                <a href="https://github.com/shreyasethi23" target="_blank" rel="noreferrer">
                  my GitHub
                </a>
                : shipping UIs and services, notebook-backed ML research, and tools like semantic
                search and fairness-focused NLP.
              </p>
            </div>
            <div className="grid two projects-grid">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`card project${project.featured ? ' project--featured' : ''}`}
                >
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="chips">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-foot">
                    {project.link ? (
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open repository ${githubRepoPath(project.link)} on GitHub`}
                      >
                        <span className="project-link-label">GitHub</span>
                        <span className="project-link-path">{githubRepoPath(project.link)}</span>
                      </a>
                    ) : (
                      <p className="project-private">Repository not public</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section alt alt--sage" aria-labelledby="skills-heading">
          <div className="container">
            <div className="section-head">
              <h2 id="skills-heading">Skills</h2>
              <p>
                Tools and technologies I use across interfaces, services, models, and shipping with
                confidence.
              </p>
            </div>
            <div className="grid two skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="card skills-card">
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section alt alt--cool section-contact">
          <div className="container">
            <header className="contact-intro-band">
              <h2>Let&apos;s talk</h2>
              <p className="contact-intro-text">
                Thanks for spending time here. I&apos;m genuinely glad you stopped by. If anything
                resonated or you&apos;d simply like to say hello, I&apos;d love to hear from you. Use
                the links or send a note below; I read everything and reply when I can.
              </p>
            </header>
            <div className="contact-shell">
              <article className="card contact-panel">
                <div className="contact-panel-grid">
                  <div className="contact-panel-col contact-panel-col--links">
                    <p className="contact-kicker">Reach me</p>
                    <ul className="contact-channels" role="list">
                      <li className="contact-channel">
                        <span className="contact-channel-label">Email</span>
                        <a className="contact-channel-value" href="mailto:shreyasethi1.ss@gmail.com">
                          shreyasethi1.ss@gmail.com
                        </a>
                      </li>
                      <li className="contact-channel">
                        <span className="contact-channel-label">LinkedIn</span>
                        <a
                          className="contact-channel-value"
                          href="https://www.linkedin.com/in/shreyasethi23/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          linkedin.com/in/shreyasethi23
                        </a>
                      </li>
                      <li className="contact-channel">
                        <span className="contact-channel-label">GitHub</span>
                        <a
                          className="contact-channel-value"
                          href="https://github.com/shreyasethi23"
                          target="_blank"
                          rel="noreferrer"
                        >
                          github.com/shreyasethi23
                        </a>
                      </li>
                      <li className="contact-channel">
                        <span className="contact-channel-label">Location</span>
                        <span className="contact-channel-static">Los Angeles, CA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-panel-col contact-panel-col--form">
                    <p className="contact-kicker">Write to me</p>
                    <h3 className="contact-panel-form-title">Send a message</h3>
                    <form
                      action="https://formspree.io/f/mqalddzr"
                      method="POST"
                      className="contact-form"
                    >
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />

                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />

                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Say hello, ask something, or leave a note."
                        required
                      />

                      <button type="submit" className="btn primary">
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Shreya Sethi</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
