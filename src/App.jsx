import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import umTouchNetwork from './assets/um-touch-network.jpg';
import umTouchJourney from './assets/um-touch-journey.jpg';
import umTouchGreenMiles from './assets/um-touch-green-miles.jpg';

const navItems = [
  ['Home', 'home'],
  ['About us', 'about-us'],
  ['Services', 'services'],
  ['Strategy Map', 'strategy-map'],
  ['Project', 'project'],
  ['Engagement', 'engagement'],
  ['Contact', 'contact'],
];

const Icon = ({ type }) => {
  const icons = {
    car: <><path d="M4 14h16l-2.3-5.3A3 3 0 0 0 15 7H9a3 3 0 0 0-2.7 1.7L4 14Z" /><path d="M6 14v3M18 14v3M7.5 17h.01M16.5 17h.01" /></>,
    gate: <><path d="M5 20V8l7-4 7 4v12" /><path d="M9 20v-7h6v7M7 10h10" /></>,
    parking: <><rect x="6" y="4" width="12" height="16" rx="3" /><path d="M10 17V8h3.2a2.7 2.7 0 1 1 0 5.4H10" /></>,
    data: <><path d="M5 5v14h14" /><path d="M8 15l3-4 3 2 4-6" /></>,
    shuttle: <><rect x="5" y="5" width="14" height="13" rx="3" /><path d="M8 9h8M8 13h8M8 20h.01M16 20h.01" /></>,
    bike: <><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /><path d="M9 17l3-7h2l3 7M12 10H9M13 13H9" /></>,
    leaf: <><path d="M19 4C10 4 5 9 5 18c7 0 12-5 14-14Z" /><path d="M5 18c4-5 7-8 12-10" /></>,
    platform: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M8 9h8M8 13h4M8 17h6" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a3 3 0 0 0-2-2.8M16 3.2a4 4 0 0 1 0 7.6" /></>,
    alert: <><path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4M12 17h.01" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
};

const services = [
  ['data', 'Smart Mobility Master Planning', 'Campus mobility strategy, route planning, Park & Ride and active mobility integration.'],
  ['platform', 'Project Management Office / PMO', 'Governance, schedule, cost, scope, quality, risk and reporting control.'],
  ['data', 'PMIS & Dashboard Integration', 'Progress tracking, cost dashboards, risk registers and sustainability indicators.'],
  ['shuttle', 'Sustainable Transport Infrastructure', 'Electric shuttle support, e-bike hubs, pedestrian corridors, charging and interchange facilities.'],
  ['users', 'Stakeholder Engagement & Change Management', 'Surveys, pilot feedback, engagement portal, Green Miles incentives and communication strategy.'],
  ['leaf', 'Sustainability & Carbon Performance Reporting', 'Energy use, ridership, carbon savings, SDG-linked reporting and social value indicators.'],
];

const strategyItems = [
  ['Financial Value', 'Cost-effective green mobility delivery, 10-year TCO planning and sustainability financing readiness.'],
  ['Stakeholder Value', 'Improved campus accessibility, safer user experience and transparent stakeholder communication.'],
  ['Internal Process Excellence', 'PMO coordination, PMIS monitoring, procurement control, risk and change governance.'],
  ['Learning & Growth', 'Smart mobility capability, green technology adaptation, carbon tracking and Malaysian campus knowledge.'],
];

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
  ['UM Master Plan 2050', 'Campus gate enhancement, Park & Ride, pedestrian routes and future-ready connectivity.'],
  ['UM Sustainability Policy 2021-2030', 'Low-carbon mobility, resource efficiency and measurable performance.'],
  ['UM Eco-Campus Blueprint', 'Practical transport alternatives for a campus-scale sustainability programme.'],
  ['UM Impact Reports / SDGs', 'Data for SDG 7, SDG 9, SDG 11 and SDG 13 reporting.'],
];

const figures = [
  ['CAPEX', 'RM166.99 million'],
  ['Year 1 OPEX', 'RM7.36 million'],
  ['10-Year TCO PV', 'RM230.03 million'],
  ['Year 1 OPEX Coverage Ratio', '125.0%'],
];

const featuredTabs = [
  ['layers', '5', 'integrated layers'],
  ['pmis', 'PMIS', 'monitored'],
  ['value', '10-year', 'value view'],
];

const layerSnapshot = [
  ['Park & Ride', 'Gate interception', 72],
  ['E-Shuttle', 'Campus circulation', 68],
  ['Green Spine', 'Walkability spine', 61],
  ['E-Bicycle', 'Last-mile access', 56],
  ['UM Touch + PMIS', 'Digital control layer', 76],
];

const valueSnapshot = [
  ['Financial control', 'TCO and OPEX visibility', 'RM230.03m PV'],
  ['Carbon value', 'Mode shift and lower emissions', '426.8t CO2e/yr'],
  ['User value', 'Access, wait time and inclusion', '82% target'],
  ['Institutional value', 'SDG and reputation evidence', '4 SDG links'],
];

function App() {
  const [isFloatingNav, setIsFloatingNav] = useState(false);
  const [activeLayer, setActiveLayer] = useState(layers[0]);
  const [activeFeaturedTab, setActiveFeaturedTab] = useState('pmis');
  const [liveTick, setLiveTick] = useState(0);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLiveTick((value) => value + 1);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const livePmisMetrics = [
    ['Progress', `${38 + (liveTick % 6)}%`, 62 + ((liveTick * 5) % 22)],
    ['Ridership', `${12.8 + ((liveTick % 5) * 0.3).toFixed(1)}k`, 48 + ((liveTick * 7) % 26)],
    ['CO2 saved', `${2.4 + ((liveTick % 4) * 0.2).toFixed(1)}t`, 54 + ((liveTick * 6) % 24)],
    ['Open issues', `${17 - (liveTick % 4)}`, 38 + ((liveTick * 4) % 18)],
  ];
  const liveBars = [42, 58, 51, 66, 72, 63, 78, 69, 84, 76].map((value, index) =>
    Math.min(92, value + ((liveTick + index) % 5) * 2),
  );

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
              <p className="eyebrow">Malaysian smart mobility project management consultancy</p>
              <h1>Nadi Mobility Project Management Sdn. Bhd.</h1>
              <p className="hero-tagline">Plan Smart. Move Green. Deliver Sustainably.</p>
              <p className="hero-subtitle">
                We deliver sustainable transport infrastructure, smart mobility systems and low-carbon campus
                transformation programmes for future-ready communities.
              </p>
              <div className="hero-actions expanded">
                <a className="button primary" href="#about-us">Explore Our Company</a>
                <a className="button secondary" href="#strategy-map">View Strategy Map</a>
                <a className="button secondary" href="#project">Featured Project: UM Green Mobility</a>
              </div>
            </div>

            <div className="featured-project-card">
              <p className="eyebrow">Featured Project</p>
              <h2>UM Zero-Emission Smart Campus Mobility Ecosystem</h2>
              <p>
                A phased, smart and low-carbon proposal for Universiti Malaya's Carbon Neutral Campus 2050 direction.
              </p>
              <div className="hero-stats">
                {featuredTabs.map(([id, lead, label]) => (
                  <button
                    className={`hero-stat-tab${activeFeaturedTab === id ? ' active' : ''}`}
                    type="button"
                    key={id}
                    onClick={() => setActiveFeaturedTab(id)}
                  >
                    <strong>{lead}</strong> {label}
                  </button>
                ))}
              </div>
              <div className="featured-insight-panel">
                {activeFeaturedTab === 'layers' && (
                  <div className="layer-snapshot" aria-label="Five integrated project layers">
                    {layerSnapshot.map(([name, role, score], index) => (
                      <div className="snapshot-row" key={name}>
                        <span className="snapshot-index">0{index + 1}</span>
                        <div>
                          <strong>{name}</strong>
                          <small>{role}</small>
                        </div>
                        <span className="snapshot-meter" style={{ '--meter': `${score}%` }}>
                          <i />
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeFeaturedTab === 'pmis' && (
                  <div className="pmis-live-preview" aria-label="Live PMIS dashboard prototype">
                    <div className="live-preview-top">
                      <span><i /> Live PMIS prototype</span>
                      <strong>Auto-refresh</strong>
                    </div>
                    <div className="live-preview-grid">
                      {livePmisMetrics.map(([label, value, level]) => (
                        <div className="live-tile" key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                          <em style={{ '--level': `${level}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="live-chart" aria-hidden="true">
                      {liveBars.map((height, index) => (
                        <span key={`${height}-${index}`} style={{ '--height': `${height}%` }} />
                      ))}
                    </div>
                  </div>
                )}

                {activeFeaturedTab === 'value' && (
                  <div className="value-snapshot" aria-label="Ten-year value view">
                    {valueSnapshot.map(([name, text, value]) => (
                      <div className="value-row" key={name}>
                        <div>
                          <strong>{name}</strong>
                          <small>{text}</small>
                        </div>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="section company-section">
          <div className="container about-grid">
            {[
              ['Who We Are', 'Nadi Mobility is a Malaysian-based project management consultancy focused on sustainable transport infrastructure, smart mobility systems and low-carbon campus development.'],
              ['What Nadi Means', 'Nadi means pulse - connecting people, places and performance through smarter green mobility.'],
              ['Vision', 'To become a trusted Malaysian project management consultancy for future-ready sustainable mobility delivery.'],
              ['Mission', 'To plan, manage and deliver mobility solutions that improve accessibility, reduce carbon impact and create measurable stakeholder value.'],
            ].map(([title, text]) => (
              <article className="info-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="container capability-strip">
            <span>Local Malaysian Context</span>
            <span>Green Mobility Expertise</span>
            <span>Smart Campus Integration</span>
            <span>Stakeholder Engagement</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Services</p>
              <h2>Professional services for sustainable mobility delivery.</h2>
            </div>
            <div className="services-grid">
              {services.map(([icon, title, text]) => (
                <article className="solution-card" key={title}>
                  <Icon type={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="strategy-map" className="section strategy-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Corporate Strategy Map</p>
              <h2>Balanced-scorecard delivery logic from financial discipline to sustainable outcomes.</h2>
            </div>
            <div className="strategy-map">
              {strategyItems.map(([title, text], index) => (
                <article className="strategy-layer" key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
              <div className="strategy-outcome">
                Strategic Outcome: Future-ready, low-carbon and digitally enabled campus mobility ecosystem.
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="section project-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Featured Project Portal</p>
              <h2>UM Zero-Emission Smart Campus Mobility Ecosystem</h2>
              <p>
                The UM project is presented as a full proposal portal with project overview, ecosystem design, UM Touch
                module concept, PMIS dashboard and commercial value evidence.
              </p>
            </div>
            <nav className="project-subnav" aria-label="UM project sections">
              <a href="#project-overview">Project Overview</a>
              <a href="#mobility-ecosystem">Mobility Ecosystem</a>
              <a href="#um-touch">UM Touch Module</a>
              <a href="#dashboard">Dashboard</a>
              <a href="#value">Value</a>
            </nav>

            <div id="project-overview" className="project-panel project-overview">
              <div>
                <p className="eyebrow">Project Overview</p>
                <h3>From campus mobility pressure to a phased smart mobility programme.</h3>
                <p>
                  UM faces private vehicle dependency, peak-hour gate congestion, parking pressure, hilly terrain,
                  tropical weather and limited real-time mobility information. Nadi's proposal responds through
                  stage-gated implementation, PMO governance, PMIS monitoring and low-carbon transport alternatives.
                </p>
              </div>
              <div className="project-facts">
                <span>Campus-edge vehicle interception</span>
                <span>Electric shuttle network</span>
                <span>Green Spine and e-bike access</span>
                <span>UM Touch + PMIS data layer</span>
              </div>
            </div>

            <div id="mobility-ecosystem" className="project-panel">
              <div className="section-heading wide">
                <p className="eyebrow">Mobility Ecosystem</p>
                <h3>Five connected system layers forming one campus mobility ecosystem.</h3>
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
                      {activeLayer.points.map((point) => <span key={point}>{point}</span>)}
                    </div>
                  </article>
                </div>
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

            <div id="um-touch" className="project-panel touch-module">
              <div className="touch-copy">
                <p className="eyebrow">Digital Smart Platform</p>
                <h3>UM Touch Mobility Module</h3>
                <p>
                  A concept user interface for real-time shuttle tracking, Park & Ride availability, route intelligence,
                  Green Miles, carbon savings and stakeholder feedback.
                </p>
                <div className="touch-features">
                  <span>Live Tracking</span>
                  <span>Route Intelligence</span>
                  <span>Low-Carbon Mobility</span>
                  <span>Integrated Experience</span>
                </div>
              </div>
              <div className="touch-screens" aria-label="UM Touch Mobility Module app screen concepts">
                <figure className="touch-screen-card">
                  <img src={umTouchJourney} alt="UM Touch journey planning and Green Miles screen" />
                  <figcaption>Journey Planning</figcaption>
                </figure>
                <figure className="touch-screen-card featured-screen">
                  <img src={umTouchNetwork} alt="UM Touch campus shuttle network screen" />
                  <figcaption>Campus Network</figcaption>
                </figure>
                <figure className="touch-screen-card">
                  <img src={umTouchGreenMiles} alt="UM Touch Green Miles low-carbon impact screen" />
                  <figcaption>Green Miles Impact</figcaption>
                </figure>
              </div>
            </div>

            <div id="dashboard" className="project-panel dashboard-layout">
              <div className="section-heading dashboard-copy">
                <p className="eyebrow">PMIS / Sustainability Dashboard</p>
                <h3>Data-driven monitoring for delivery, operations, finance and sustainability.</h3>
                <p className="dashboard-note standalone">
                  Real-time monitoring concept with live-updating prototype indicators. Scenario data for proposal
                  demonstration only.
                </p>
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
              </div>
            </div>

            <div id="value" className="project-panel value-layout">
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

        <section id="engagement" className="section portal-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Engagement</p>
              <h2>Stakeholder Engagement Portal</h2>
              <p>A prototype engagement interface for UM students, staff, visitors and project teams.</p>
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
                <label>User group<select defaultValue="student"><option>Student</option><option>Staff</option><option>Visitor</option><option>UM Management</option></select></label>
                <label>Feedback type<select defaultValue="shuttle"><option>Shuttle service issue</option><option>Park & Ride feedback</option><option>E-bike / walking route feedback</option><option>General proposal feedback</option></select></label>
                <label>Message<textarea placeholder="Describe your issue, suggestion or route experience..." /></label>
                <button className="button primary" type="button">Submit Feedback</button>
                <small>Prototype only - no data is submitted in this version.</small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Contact Nadi Mobility for proposal review, dashboard demonstration and stakeholder pilot planning.</h2>
          </div>
          <div className="engagement-grid">
            <article><h3>Email</h3><p>24215346@siswa.um.edu.my</p></article>
            <article><h3>Project Inquiry</h3><p>Request UM proposal discussion or dashboard walkthrough.</p></article>
            <article><h3>Stakeholder Feedback</h3><p>Use the Engagement portal to submit user mobility input.</p></article>
          </div>
          <div className="footer-bottom">
            <span>Nadi Mobility</span>
            <span>Plan Smart. Move Green. Deliver Sustainably.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
