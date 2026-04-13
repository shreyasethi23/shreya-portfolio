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
    role: 'Software Developer',
    company: 'J.P. Morgan Chase & Co.',
    duration: 'Jul 2023 - Aug 2024',
    points: [
      'Built customer-facing features for the Digital Self Service platform used by 50M+ users.',
      'Developed reusable web components across web and hybrid mobile, reducing duplication by 30%.',
      'Improved reliability through unit and component testing with 95%+ coverage.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'J.P. Morgan Chase & Co.',
    duration: 'Jan 2023 - Jun 2023',
    points: [
      'Implemented UI features for web and mobile journeys with responsive, accessible interactions.',
      'Collaborated in sprint cycles with cross-functional partners to deliver production-ready releases.',
    ],
  },
];

const projects = [
  {
    title: 'FindLy - Local Multimodal Semantic Search',
    summary:
      'Built a full-stack local semantic search application for relevance-ranked retrieval across personal text and image files.',
    tech: ['React 19', 'TypeScript', 'FastAPI', 'Redis', 'FAISS'],
  },
  {
    title: 'Assessing Unintended Memorization in Language Models',
    summary:
      'Evaluates unintended memorization and semantic leakage in language models under multiple training settings.',
    tech: ['NLP', 'LSTM', 'Differential Privacy', 'Evaluation'],
    link: 'https://github.com/shreyasethi23/llm-memorization',
  },
  {
    title: 'Uncovering Bias in Clinical Text with LLMs',
    summary:
      'Fairness-focused LLM analysis project for identifying and mitigating demographic bias in clinical text.',
    tech: ['ClinicalBERT', 'BioGPT', 'PyTorch', 'Fairness Metrics'],
    link: 'https://github.com/shreyasethi23/Bias-Detection-in-LLMs',
  },
  {
    title: 'Music Genre Transformation Using Deep Generative Architectures',
    summary: 'Deep learning based music genre transformation experiments and model comparisons.',
    tech: ['PyTorch', 'Transformers', 'GANs', 'VAEs', 'Audio ML'],
    link: 'https://github.com/shreyasethi23/Music-Genre-Transformation',
  },
  {
    title: 'Personal Portfolio Website',
    summary:
      'A modern React portfolio website showcasing software engineering and machine learning work with responsive UI design.',
    tech: ['React', 'JavaScript', 'Vite', 'CSS'],
    link: 'https://github.com/shreyasethi23/shreya-portfolio',
  },
  {
    title: 'Semantic Book Recommender',
    summary: 'Semantic recommendation system project for finding books based on meaning-aware search.',
    tech: ['Semantic Search', 'Embeddings', 'Recommendation System'],
    link: 'https://github.com/shreyasethi23/semantic-book-recommender',
  },
  {
    title: 'Medical Assistant Chatbot',
    summary: 'Combines chest X-ray image classification with a medical question-answering chatbot.',
    tech: ['Healthcare AI', 'Computer Vision', 'NLP', 'Chatbot'],
    link: 'https://github.com/shreyasethi23/medical-assistant-chatbot',
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
          <a href="#" className="logo">Shreya Sethi</a>
          <nav>
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

      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-a" />
          <div className="hero-glow hero-glow-b" />
          <div className="container">
            <article className="hero-card simple-hero">
              <p className="kicker">Open to SWE and MLE opportunities</p>
              <h1>Software Engineer with frontend and machine learning experience.</h1>
              <p>
                I have worked on customer-facing product features at J.P. Morgan and built applied
                ML projects in fairness, privacy, and generative AI while pursuing my MS in
                Computer Science at USC.
              </p>
              <div className="actions">
                <a
                  className="btn primary"
                  href={`${import.meta.env.BASE_URL}Shreya_Sethi_Resume.pdf`}
                  download
                  target="_blank"
                  rel="noreferrer"
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
                <a
                  className="btn primary"
                  href="https://github.com/shreyasethi23"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="section alt">
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
                <p className="card-sub">
                  B.E. Electronics and Communication | GPA: 9.07/10
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Experience</h2>
              <p>Production engineering work with measurable customer and platform impact.</p>
            </div>
            <div className="grid two">
              {experiences.map((item) => (
                <article key={`${item.role}-${item.duration}`} className="card timeline-card">
                  <p className="card-meta">{item.duration}</p>
                  <h3>{item.role}</h3>
                  <p className="card-sub">{item.company}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>Projects</h2>
            </div>
            <div className="grid two">
              {projects.map((project) => (
                <article key={project.title} className="card project">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="chips">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View code
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Skills</h2>
            </div>
            <div className="grid two skill-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="card skill-card">
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

        <section id="contact" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Contact</h2>
            </div>
            <div className="contact-shell">
              <article className="card contact-card">
                <p className="contact-kicker">Let&apos;s connect</p>
                <h3>Open to SWE and MLE opportunities</h3>
                <p>
                  I am looking for product-driven teams where I can contribute across frontend
                  engineering and machine learning systems.
                </p>
                <div className="contact-methods">
                  <p>
                    <span>Email</span>
                    <a href="mailto:shreyasethi1.ss@gmail.com">shreyasethi1.ss@gmail.com</a>
                  </p>
                  <p>
                    <span>LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/shreyasethi23/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      shreyasethi23
                    </a>
                  </p>
                  <p>
                    <span>Location</span>
                    <strong>Los Angeles, CA</strong>
                  </p>
                </div>
              </article>

              <form action="https://formspree.io/f/mqalddzr" method="POST" className="card contact-form">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about the role or collaboration."
                  required
                />

                <button type="submit" className="btn primary">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Shreya Sethi</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
