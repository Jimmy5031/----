import { useEffect, useState } from 'react';
import logo from './assets/logo.png';

const navItems = [
  ['Home', 'home'],
  ['About Nadi', 'about-nadi'],
  ['Project Overview', 'project-overview'],
  ['Mobility Ecosystem', 'mobility-ecosystem'],
  ['Dashboard', 'dashboard'],
  ['Stakeholder Portal', 'stakeholder-portal'],
  ['Value', 'value'],
  ['Contact', 'contact'],
];

const Icon = ({ type }) => {
  const icons = {
    car: (
      <>
        <path d="M4 14h16l-2.3-5.3A3 3 0 0 0 15 7H9a3 3 0 0 0-2.7 1.7L4 14Z" />
        <path d="M6 14v3M18 14v3M7.5 17h.01M16.5 17h.01" />
      </>
    ),
    gate: (
      <>
        <path d="M5 20V8l7-4 7 4v12" />
        <path d="M9 20v-7h6v7M7 10h10" />
      </>
    ),
    parking: (
      <>
        <rect x="6" y="4" width="12" height="16" rx="3" />
        <path d="M10 17V8h3.2a2.7 2.7 0 1 1 0 5.4H10" />
      </>
    ),
    weather: (
      <>
        <path d="M8 15a4 4 0 0 1 .8-7.9A5.6 5.6 0 0 1 19 10.3 3.5 3.5 0 0 1 18 17H8Z" />
        <path d="M9 20h.01M13 20h.01M17 20h.01" />
      </>
    ),
    data: (
      <>
        <path d="M5 5v14h14" />
        <path d="M8 15l3-4 3 2 4-6" />
      </>
    ),
    shuttle: (
      <>
        <rect x="5" y="5" width="14" height="13" rx="3" />
        <path d="M8 9h8M8 13h8M8 20h.01M16 20h.01" />
      </>
    ),
    bike: (
      <>
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path d="M9 17l3-7h2l3 7M12 10H9M13 13H9" />
      </>
    ),
    leaf: (
      <>
        <path d="M19 4C10 4 5 9 5 18c7 0 12-5 14-14Z" />
        <path d="M5 18c4-5 7-8 12-10" />
      </>
    ),
    platform: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M8 9h8M8 13h4M8 17h6" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a3 3 0 0 0-2-2.8M16 3.2a4 4 0 0 1 0 7.6" />
      </>
    ),
    alert: (
      <>
        <path d="M12 3 2.8 19h18.4L12 3Z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
};

const layers = [
  {
    id: 'park',
    icon: 'parking',
    title: 'Gate-Based Park & Ride Mobility Hubs',
    short: 'Intercept vehicles at campus gates before they enter the core.',
    visual: 'Gate edge',
    focus: 'Vehicle interception + transfer comfort',
    points: ['Smart parking availability', 'Shuttle waiting areas', 'EV-ready bays', 'Access control and CCTV'],
  },
  {
    id: 'shuttle',
    icon: 'shuttle',
    title: 'Electric Campus Shuttle Network',
    short: 'Connect gates, academic clusters, residential colleges and the health zone.',
    visual: 'Route spine',
    focus: 'Reliable internal circulation',
    points: ['Three-route pilot logic', 'Live vehicle position', 'Peak frequency monitoring', 'Charging uptime data'],
  },
  {
    id: 'green',
    icon: 'leaf',
    title: 'Green Spine and Pedestrian Eco-Corridors',
    short: 'Improve walkability through shaded, safer and more inclusive corridors.',
    visual: 'Green corridor',
    focus: 'Comfortable low-carbon short trips',
    points: ['Shade and rain protection', 'Lighting and wayfinding', 'OKU accessibility', 'Low-impact landscape routing'],
  },
  {
    id: 'bike',
    icon: 'bike',
    title: 'Shared E-Bicycle System',
    short: 'Support hilly terrain, first-mile/last-mile trips and campus short-distance access.',
    visual: 'Last mile',
    focus: 'Flexible active mobility',
    points: ['Phased e-bike deployment', 'Docking and charging hubs', 'Geofenced parking', 'Maintenance and safety records'],
  },
  {
    id: 'pmis',
    icon: 'platform',
    title: 'Smart Mobility Platform and PMIS',
    short: 'Unify UM Touch mobility functions, Green Miles, operations data and sustainability reporting.',
    visual: 'Data layer',
    focus: 'Evidence-based project control',
    points: ['UM Touch mobility module', 'PMIS issue and risk logs', 'Carbon dashboard', 'User feedback loop'],
  },
];

const ecosystemCards = [
  ['parking', 'Park & Ride', 'Campus-edge parking hubs reduce private vehicle movement in the academic core.'],
  ['shuttle', 'Electric Shuttle', 'Zero-emission shuttle services connect high-demand campus zones.'],
  ['leaf', 'Green Spine', 'Pedestrian corridors improve shade, accessibility, safety and wayfinding.'],
  ['bike', 'E-Bicycle System', 'Shared e-bikes help users move across slopes and short campus distances.'],
  ['platform', 'UM Touch + PMIS', 'Digital mobility, Green Miles, operations monitoring and sustainability data work together.'],
];

const dashboardMetrics = [
  ['Project progress', '38%', 'Pilot preparation and package validation'],
  ['CAPEX / OPEX monitoring', 'RM7.36m', 'Year 1 operating estimate tracked'],
  ['Shuttle ridership', '12.8k', 'sample weekly boardings'],
  ['Park & Ride usage', '64%', 'sample peak occupancy'],
  ['E-bike trips', '2.4k', 'sample monthly active trips'],
  ['Energy consumption', '586 MWh', 'estimated annual ecosystem demand'],
  ['Carbon reduction', '426.8 t', 'CO2e/year at full rollout'],
  ['User satisfaction', '82%', 'sample satisfactory-or-better rating'],
  ['Risk status', 'Medium', 'open risks monitored by PMIS'],
  ['Issue log', '17 open', 'service and infrastructure items'],
];

const portalItems = [
  ['data', 'Project updates', 'Latest pilot milestones, procurement gates and PMIS status notes.'],
  ['users', 'User feedback form', 'Collect student, staff and visitor mobility experience input.'],
  ['alert', 'Shuttle service issue report', 'Report waiting time, crowding, delay or stop condition issues.'],
  ['parking', 'Park & Ride feedback', 'Submit parking access, transfer comfort and wayfinding comments.'],
  ['bike', 'E-bike / walking route feedback', 'Flag route gaps, safety concerns, docking issues and Green Spine needs.'],
  ['mail', 'FAQ & contact team', 'Provide proposal FAQs and contact Nadi Mobility project team.'],
];

const alignment = [
  ['UM Master Plan 2050', 'Supports campus gate enhancement, Park & Ride, pedestrian routes and future-ready connectivity.'],
  ['UM Sustainability Policy 2021-2030', 'Advances low-carbon mobility, resource efficiency and measurable performance.'],
  ['UM Eco-Campus Blueprint', 'Turns transport alternatives into a practical campus-scale implementation package.'],
  ['UM Impact Reports / SDGs', 'Provides data for SDG 7, SDG 9, SDG 11 and SDG 13 reporting.'],
];

const figures = [
  ['CAPEX', 'RM166.99 million'],
  ['Year 1 OPEX', 'RM7.36 million'],
  ['10-Year TCO PV', 'RM230.03 million'],
  ['Year 1 OPEX Coverage Ratio', '125.0%'],
];

function App() {
  const [isFloatingNav, setIsFloatingNav] = useState(false);
  const [activeLayer, setActiveLayer] = useState(layers[0]);

  useEffect(() => {
    const updateNavState = () => {
      const triggerPoint = Math.max(420, window.innerHeight * 0.72);
      setIsFloatingNav(window.scrollY > triggerPoint);
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState);

    return () => {
      window.removeEventListener('scroll', updateNavState);
      window.removeEventListener('resize', updateNavState);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className={`nav${isFloatingNav ? ' is-floating' : ''}`}>
        <a className="brand" href="#home" aria-label="Nadi Mobility home">
          <img src={logo} alt="Nadi Mobility" />
          <span className="brand-fallback">NADI MOBILITY</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([item, target]) => (
            <a key={target} href={`#${target}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">Nadi Mobility Project Management Sdn. Bhd.</p>
              <h1>UM Zero-Emission Smart Campus Mobility Ecosystem</h1>
              <p className="hero-subtitle">
                Building a smarter, greener and more connected UM campus through Park & Ride, electric shuttle,
                Green Spine, e-bike integration and PMIS monitoring.
              </p>
              <div className="hero-actions expanded">
                <a className="button primary" href="#project-overview">
                  View Proposal
                </a>
                <a className="button secondary" href="#dashboard">
                  View Mobility Dashboard
                </a>
                <a className="button secondary" href="#mobility-ecosystem">
                  Explore UM Touch Mobility Module
                </a>
                <a className="button secondary" href="#stakeholder-portal">
                  Submit Feedback
                </a>
              </div>
              <div className="hero-stats" aria-label="Proposal highlights">
                <span><strong>5</strong> system layers</span>
                <span><strong>10-year</strong> roadmap</span>
                <span><strong>PMIS</strong> monitoring</span>
              </div>
            </div>

            <div className="campus-visual" aria-label="Smart campus mobility concept visual">
              <div className="visual-orbit orbit-a" />
              <div className="visual-orbit orbit-b" />
              <div className="route-map">
                <span className="node n1"><Icon type="parking" /></span>
                <span className="node n2"><Icon type="shuttle" /></span>
                <span className="node n3"><Icon type="bike" /></span>
                <span className="node n4"><Icon type="leaf" /></span>
                <span className="node n5"><Icon type="platform" /></span>
                <div className="campus-core">
                  <span>UM TOUCH + PMIS</span>
                  <strong>Smart Mobility Core</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-nadi" className="section company-section">
          <div className="container company-grid">
            <div className="company-profile">
              <img src={logo} alt="Nadi Mobility" />
              <p className="eyebrow">About Nadi</p>
              <h2>Nadi Mobility Project Management Sdn. Bhd.</h2>
              <p>
                A Malaysian-based project management consultancy positioned to deliver sustainable transport
                infrastructure, smart mobility systems, PMIS integration, stakeholder engagement and sustainability
                reporting for complex campus environments.
              </p>
              <p>
                For the UM proposal, Nadi Mobility acts as the project integrator: translating campus mobility
                challenges into a phased, procurable and monitorable low-carbon mobility programme.
              </p>
            </div>
            <div className="approach-card">
              <p className="eyebrow">Our Delivery Capability</p>
              <div className="approach-grid">
                <span>PMBOK controls</span>
                <span>PRINCE2 stage gates</span>
                <span>ISO 21500 alignment</span>
                <span>Hybrid / Agile digital delivery</span>
              </div>
              <div className="why-card">
                <h3>Why Nadi Mobility?</h3>
                <p>
                  We combine local Malaysian operating context, green mobility expertise, smart campus integration and
                  stakeholder-facing delivery discipline in one accountable proposal team.
                </p>
              </div>
            </div>
          </div>
          <div className="container capability-strip" aria-label="Nadi Mobility capability tags">
            <span>Local Malaysian Context</span>
            <span>Green Mobility Expertise</span>
            <span>Smart Campus Integration</span>
            <span>Stakeholder Engagement</span>
          </div>
        </section>

        <section id="project-overview" className="section overview-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Project Overview</p>
              <h2>Five connected system layers forming one smart campus mobility programme.</h2>
              <p>
                Click each layer to view how infrastructure, service operations, user experience and PMIS data connect
                into a single proposal-stage ecosystem.
              </p>
            </div>

            <div className="layer-showcase">
              <div className="layer-tabs" role="tablist" aria-label="Project system layers">
                {layers.map((layer) => (
                  <button
                    className={`layer-tab${activeLayer.id === layer.id ? ' active' : ''}`}
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(layer)}
                  >
                    <Icon type={layer.icon} />
                    <span>{layer.title}</span>
                  </button>
                ))}
              </div>

              <div className="layer-stage">
                <div className={`layer-visual ${activeLayer.id}`}>
                  <div className="layer-ring ring-one" />
                  <div className="layer-ring ring-two" />
                  <div className="layer-label">
                    <span>{activeLayer.visual}</span>
                    <strong>{activeLayer.focus}</strong>
                  </div>
                  <i className="pulse-dot dot-a" />
                  <i className="pulse-dot dot-b" />
                  <i className="pulse-dot dot-c" />
                </div>
                <article className="layer-detail">
                  <p className="eyebrow">Active Layer</p>
                  <h3>{activeLayer.title}</h3>
                  <p>{activeLayer.short}</p>
                  <div className="layer-points">
                    {activeLayer.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="mobility-ecosystem" className="section solution-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Mobility Ecosystem</p>
              <h2>Physical assets, UM Touch functions and PMIS reporting are designed as one operating system.</h2>
              <p>
                The ecosystem is intended to guide transfer decisions, service reliability, Green Miles engagement,
                issue reporting and sustainability monitoring.
              </p>
            </div>
            <div className="ecosystem">
              {ecosystemCards.map(([icon, title, text], index) => (
                <article className="solution-card" key={title}>
                  <span className="step">{String(index + 1).padStart(2, '0')}</span>
                  <Icon type={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="section">
          <div className="container dashboard-layout">
            <div className="section-heading dashboard-copy">
              <p className="eyebrow">PMIS / Sustainability Dashboard</p>
              <h2>Data-driven monitoring for delivery, operations, finance and sustainability.</h2>
              <p>
                The existing dashboard has been upgraded into a PMIS and sustainability monitoring concept, because the
                proposal needs evidence-based performance control rather than a second duplicated dashboard section.
              </p>
              <p className="dashboard-note standalone">Prototype dashboard for proposal demonstration only.</p>
            </div>
            <div className="dashboard-panel expanded-dashboard">
              <div className="dashboard-top">
                <span>UM Mobility PMIS Concept</span>
                <strong>Prototype Data</strong>
              </div>
              <div className="metric-grid dashboard-metrics">
                {dashboardMetrics.map(([label, value, note]) => (
                  <div className="metric-card" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                    <small>{note}</small>
                  </div>
                ))}
              </div>
              <div className="monitoring-row">
                <div>
                  <span>Energy and carbon monitoring</span>
                  <strong>Live PMIS feed concept</strong>
                  <small>kWh, avoided vehicle trips, CO2e, issue status and user feedback linked for decision gates.</small>
                </div>
                <div className="bars" aria-hidden="true">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '64%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '78%' }} />
                  <span style={{ height: '68%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stakeholder-portal" className="section portal-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Stakeholder Portal</p>
              <h2>A prototype engagement portal for UM students, staff, visitors and project governance teams.</h2>
              <p>
                This section is designed to look like a usable service portal, even before real backend workflows are
                connected.
              </p>
            </div>
            <div className="portal-layout">
              <div className="portal-grid">
                {portalItems.map(([icon, title, text]) => (
                  <article className="portal-card" key={title}>
                    <Icon type={icon} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <form className="feedback-prototype">
                <p className="eyebrow">Prototype Feedback Form</p>
                <label>
                  User group
                  <select defaultValue="student">
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="visitor">Visitor</option>
                    <option value="management">UM Management</option>
                  </select>
                </label>
                <label>
                  Feedback type
                  <select defaultValue="shuttle">
                    <option value="shuttle">Shuttle service issue</option>
                    <option value="park">Park & Ride feedback</option>
                    <option value="bike">E-bike / walking route feedback</option>
                    <option value="general">General proposal feedback</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea placeholder="Describe your issue, suggestion or route experience..." />
                </label>
                <button className="button primary" type="button">Submit Feedback</button>
                <small>Prototype only - no data is submitted in this version.</small>
              </form>
            </div>
          </div>
        </section>

        <section id="value" className="section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Strategic and Commercial Value</p>
              <h2>Public campus infrastructure value beyond direct financial profit.</h2>
              <p>
                The project combines financial discipline, social value, sustainability reporting, accessibility and
                institutional reputation into one managed mobility programme.
              </p>
            </div>
            <div className="value-layout">
              <div className="alignment-grid">
                {alignment.map(([title, text]) => (
                  <article className="alignment-card" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <div className="figure-panel">
                {figures.map(([label, value]) => (
                  <div className="figure" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Engage Nadi Mobility for proposal review, dashboard demonstration and stakeholder pilot planning.</h2>
          </div>
          <div className="engagement-grid">
            <article>
              <h3>UM Management</h3>
              <p>View proposal, dashboard and stage-gate decision evidence.</p>
            </article>
            <article>
              <h3>Students & Staff</h3>
              <p>Submit mobility feedback and join the Green Miles pilot.</p>
            </article>
            <article>
              <h3>Project Team</h3>
              <p>Track PMIS progress, issue logs and sustainability indicators.</p>
            </article>
          </div>
          <div className="footer-bottom">
            <span>Nadi Mobility</span>
            <span>Building smarter mobility. Creating sustainable impact.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
