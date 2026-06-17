import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import referenceAbout from './assets/nadi-reference-about.webp';
import referenceExpertise from './assets/nadi-reference-expertise.webp';
import referenceHero from './assets/nadi-reference-hero.webp';
import referenceSustainability from './assets/nadi-reference-sustainability.webp';
import referenceStakeholders from './assets/nadi-reference-stakeholders.webp';
import umTouchNetwork from './assets/um-touch-network.jpg';
import umTouchJourney from './assets/um-touch-journey.jpg';
import umTouchGreenMiles from './assets/um-touch-green-miles.jpg';

const navItems = [
  ['Home', '/'],
  ['About us', '/about-us'],
  ['Services', '/services'],
  ['Strategy Map', '/strategy-map'],
  ['Project', '/project'],
  ['Engagement', '/engagement'],
  ['Contact', '/contact'],
];

const pageTitles = new Set(navItems.map(([, path]) => path));

const getPageFromLocation = () => {
  const path = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
  return pageTitles.has(path) ? path : '/';
};

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

const companyPrinciples = [
  ['Clarity before activity', 'Define outcomes, decision rights, scope and evidence needs before implementation pressure increases.'],
  ['Evidence over assumption', 'Use PMIS, dashboard indicators, baseline validation and structured feedback to support decisions.'],
  ['Integration over silos', 'Coordinate infrastructure, operations, digital systems, sustainability and user adoption as one programme.'],
  ['Value over volume', 'Evaluate mobility investment through financial, social, accessibility, carbon and institutional value.'],
];

const deliverySteps = [
  ['Frame', 'Align needs, campus constraints, stakeholders, project objectives and Carbon Neutral Campus 2050 direction.'],
  ['Mobilise', 'Set governance, schedule, cost controls, PMIS information flow, risk registers and engagement channels.'],
  ['Deliver', 'Coordinate Park & Ride, shuttle, Green Spine, e-bike, UM Touch and PMIS work packages.'],
  ['Monitor', 'Track ridership, carbon reduction, energy, user feedback, cost performance, risks and benefits evidence.'],
];

const sustainabilityLenses = [
  ['Environmental', 'Carbon reduction, energy demand, mode shift, campus air quality and climate-responsive travel.'],
  ['Social', 'Accessibility, safety, user comfort, inclusion, staff and student experience.'],
  ['Operational', 'Service reliability, asset uptime, data visibility, maintenance and PMIS governance.'],
  ['Economic', 'CAPEX discipline, OPEX coverage, whole-life value and public infrastructure benefits.'],
];

const stakeholderGroups = [
  ['UM Management', 'Proposal review, investment logic, delivery governance and dashboard evidence.'],
  ['Students & Staff', 'Daily mobility feedback, Green Miles participation and service issue reporting.'],
  ['Visitors', 'Park & Ride access, wayfinding, shuttle information and campus arrival experience.'],
  ['Project Team', 'PMIS progress, risk status, issue logs, sustainability indicators and stakeholder actions.'],
];

const PageVisual = ({ image, label, title, stats = [] }) => (
  <aside className="page-visual-card" aria-label={title}>
    <img src={image} alt="" />
    <div className="page-visual-overlay">
      <p className="eyebrow">{label}</p>
      <h3>{title}</h3>
      <div className="page-visual-stats">
        {stats.map(([value, text]) => (
          <span key={`${value}-${text}`}>
            <strong>{value}</strong>
            {text}
          </span>
        ))}
      </div>
    </div>
  </aside>
);

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromLocation);
  const [activeLayer, setActiveLayer] = useState(layers[0]);
  const [activeFeaturedTab, setActiveFeaturedTab] = useState('pmis');
  const [liveTick, setLiveTick] = useState(0);

  const navigate = (path, hash = '') => {
    const nextPath = pageTitles.has(path) ? path : '/';
    window.history.pushState({}, '', `${nextPath}${hash ? `#${hash}` : ''}`);
    setCurrentPage(nextPath);
    window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  };

  useEffect(() => {
    const syncPage = () => setCurrentPage(getPageFromLocation());

    window.addEventListener('popstate', syncPage);

    return () => {
      window.removeEventListener('popstate', syncPage);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [currentPage]);

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

  const NavLink = ({ path, children, className = '' }) => (
    <a
      className={className || (currentPage === path ? 'active' : '')}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        navigate(path);
      }}
    >
      {children}
    </a>
  );

  const ProjectSubLink = ({ target, children }) => (
    <a
      href={`/project#${target}`}
      onClick={(event) => {
        event.preventDefault();
        navigate('/project', target);
      }}
    >
      {children}
    </a>
  );

  const FeaturedProjectCard = () => (
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
  );

  const HomePage = () => (
    <>
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
              <NavLink path="/about-us" className="button primary">Explore Our Company</NavLink>
              <NavLink path="/strategy-map" className="button secondary">View Strategy Map</NavLink>
              <NavLink path="/project" className="button secondary">Featured Project: UM Green Mobility</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Why Nadi</p>
            <h2>Infrastructure moves people. Good management moves infrastructure.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Campus mobility transformation is not a single asset. It is a connected system of parking, shuttle
              operations, pedestrian comfort, digital information, user behaviour, funding and public trust.
            </p>
            <p>
              Nadi Mobility brings those moving parts into one governed programme, helping clients make decisions,
              manage interfaces and measure outcomes that endure.
            </p>
            <NavLink path="/about-us" className="text-link">Discover our approach</NavLink>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-heading wide">
            <p className="eyebrow">What we do</p>
            <h2>Project leadership across the mobility lifecycle.</h2>
          </div>
          <div className="services-grid">
            {services.slice(0, 6).map(([icon, title, text], index) => (
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

      <section className="section split-cta-section">
        <div className="container split-cta-grid">
          <article className="dark-feature">
            <p className="eyebrow">Sustainability by design</p>
            <h2>Beyond low carbon. Built for real campus use.</h2>
            <p>
              Sustainable mobility succeeds when the full journey becomes reliable, safe, comfortable and legible.
              The UM proposal connects low-carbon assets with PMIS monitoring and stakeholder feedback.
            </p>
            <NavLink path="/services" className="button secondary">Explore service capability</NavLink>
          </article>
          <article className="light-feature">
            <p className="eyebrow">Featured Project</p>
            <h2>UM Zero-Emission Smart Campus Mobility Ecosystem</h2>
            <p>
              A phased proposal integrating Park & Ride, electric shuttle, Green Spine, e-bike access, UM Touch and
              PMIS monitoring for UM's Carbon Neutral Campus 2050 direction.
            </p>
            <NavLink path="/project" className="button primary">Open project portal</NavLink>
          </article>
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <>
      <section id="about-us" className="section company-section page-section">
        <div className="container page-hero page-hero-with-visual">
          <div>
            <p className="eyebrow">About us</p>
            <h1>The management discipline behind better movement.</h1>
            <p>
              Nadi Mobility is a Malaysian-based project management consultancy focused on sustainable transport
              infrastructure, smart mobility systems and low-carbon campus development.
            </p>
          </div>
          <PageVisual
            image={referenceAbout}
            label="Company role"
            title="Independent project management for connected low-carbon mobility."
            stats={[['PMO', 'governance'], ['PMIS', 'evidence'], ['MY', 'context']]}
          />
        </div>
        <div className="container about-grid">
          {[
            ['Who We Are', 'A project management consultancy supporting sustainable transport infrastructure, smart mobility systems and campus transformation programmes.'],
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
      </section>

      <section className="section section--mist">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Our purpose</p>
            <h2>To turn mobility ambition into infrastructure that earns trust.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Nadi sits at the centre of complex transport programmes, connecting strategy with delivery, organisations
              with decisions and investment with the people it serves.
            </p>
            <p>
              For the UM proposal, that role means coordinating mobility infrastructure, PMIS monitoring, stakeholder
              engagement, sustainability reporting and phased implementation governance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading wide">
            <p className="eyebrow">Our principles</p>
            <h2>How we show up in complex, public-facing programmes.</h2>
          </div>
          <div className="principle-grid">
            {companyPrinciples.map(([title, text], index) => (
              <article className="principle-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container capability-strip">
          <span>Local Malaysian Context</span>
          <span>Green Mobility Expertise</span>
          <span>Smart Campus Integration</span>
          <span>Stakeholder Engagement</span>
        </div>
      </section>
    </>
  );

  const ServicesPage = () => (
    <>
      <section id="services" className="section page-section">
        <div className="container page-hero page-hero-with-visual">
          <div>
            <p className="eyebrow">Services</p>
            <h1>One programme view across every moving part.</h1>
            <p>
              We integrate the management disciplines needed to keep sustainable mobility programmes aligned from early
              definition through delivery and monitoring.
            </p>
          </div>
          <PageVisual
            image={referenceSustainability}
            label="Delivery lifecycle"
            title="Strategy, governance, delivery integration and measured outcomes."
            stats={[['06', 'services'], ['04', 'delivery phases'], ['PMIS', 'controls']]}
          />
        </div>
        <div className="container services-grid">
          {services.map(([icon, title, text]) => (
            <article className="solution-card" key={title}>
              <Icon type={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-heading wide">
            <p className="eyebrow">How we work</p>
            <h2>Adaptive where learning matters. Controlled where certainty matters.</h2>
          </div>
          <div className="process-grid">
            {deliverySteps.map(([title, text], index) => (
              <article className="process-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-cta-grid">
          <article className="light-feature">
            <p className="eyebrow">Where we focus</p>
            <h2>Connected campus transport systems.</h2>
            <div className="focus-list">
              <span>Park & Ride hubs</span>
              <span>Electric shuttle networks</span>
              <span>Pedestrian Green Spine</span>
              <span>Shared e-bike systems</span>
              <span>Smart mobility platforms</span>
              <span>PMIS and dashboard monitoring</span>
            </div>
          </article>
          <article className="dark-feature">
            <p className="eyebrow">Delivery standard</p>
            <h2>PMBOK + PRINCE2 + ISO 21500 + Hybrid/Agile Execution.</h2>
            <p>
              The UM project uses stage-gated planning with enough agility to refine operations, user feedback and
              data-driven monitoring during pilot and expansion phases.
            </p>
          </article>
        </div>
      </section>
    </>
  );

  const StrategyPage = () => (
    <>
      <section id="strategy-map" className="section strategy-section page-section">
        <div className="container page-hero simple-dark-hero strategy-simple-hero">
          <div>
            <p className="eyebrow">Corporate Strategy Map</p>
            <h1>A clear line from what we build to the impact we create.</h1>
            <p>
              The strategy map connects Nadi's capability development with project delivery excellence, stakeholder value
              and long-term sustainable mobility outcomes.
            </p>
          </div>
        </div>
        <div className="container strategy-map">
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
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-heading wide">
            <p className="eyebrow">Strategic logic</p>
            <h2>Objectives and indicative measures.</h2>
          </div>
          <div className="principle-grid">
            {[
              ['Foundational capability', 'Project talent, digital controls, knowledge capture, integrity and safety.'],
              ['Internal excellence', 'Governance quality, risk maturity, reporting discipline and ESG integration.'],
              ['Stakeholder value', 'Milestone reliability, issue resolution, user confidence and benefits evidence.'],
              ['Strategic outcomes', 'Trusted market position, durable partnerships and low-carbon contribution.'],
            ].map(([title, text], index) => (
              <article className="principle-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-cta-section">
        <div className="container split-cta-grid">
          <article className="dark-feature">
            <p className="eyebrow">Three strategic pillars</p>
            <h2>Trusted delivery, sustainable systems and Malaysian campus knowledge.</h2>
            <p>
              For the UM proposal, these pillars translate into governed implementation, low-carbon mobility assets,
              PMIS-enabled evidence and stakeholder engagement.
            </p>
          </article>
          <article className="light-feature">
            <p className="eyebrow">Featured evidence</p>
            <h2>Strategy becomes real through project controls.</h2>
            <p>
              Project progress, CAPEX/OPEX, ridership, Park & Ride usage, e-bike trips, energy consumption, carbon
              reduction, satisfaction, risks and issue logs are monitored as part of the PMIS concept.
            </p>
          </article>
        </div>
      </section>
    </>
  );

  const ProjectPage = () => (
    <section id="project" className="section project-section page-section">
      <div className="container">
        <div className="page-hero page-hero-with-visual project-title-hero generated-project-hero">
          <div>
            <p className="eyebrow">Featured Project Portal</p>
            <h1>UM Zero-Emission Smart Campus Mobility Ecosystem</h1>
            <p>
              The UM project is presented as a full proposal portal with project overview, ecosystem design, UM Touch
              module concept, PMIS dashboard and commercial value evidence.
            </p>
          </div>
          <div className="project-hero-graphic" aria-hidden="true">
            <span className="campus-grid-line line-a" />
            <span className="campus-grid-line line-b" />
            <span className="campus-grid-line line-c" />
            <span className="campus-node node-a">P+R</span>
            <span className="campus-node node-b">EV</span>
            <span className="campus-node node-c">PMIS</span>
            <span className="campus-node node-d">CO2</span>
            <span className="campus-core-mark">UM</span>
          </div>
        </div>
        <nav className="project-subnav" aria-label="UM project sections">
          <ProjectSubLink target="project-overview">Project Overview</ProjectSubLink>
          <ProjectSubLink target="mobility-ecosystem">Mobility Ecosystem</ProjectSubLink>
          <ProjectSubLink target="um-touch">UM Touch Module</ProjectSubLink>
          <ProjectSubLink target="dashboard">Dashboard</ProjectSubLink>
          <ProjectSubLink target="value">Value</ProjectSubLink>
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
  );

  const EngagementPage = () => (
    <>
      <section id="engagement" className="section portal-section page-section">
        <div className="container page-hero page-hero-with-visual">
          <div>
            <p className="eyebrow">Engagement</p>
            <h1>Better projects begin with better conversations.</h1>
            <p>
              The stakeholder portal is a proposal prototype for UM students, staff, visitors, management and the project
              team to submit feedback, report issues and track engagement themes.
            </p>
          </div>
          <PageVisual
            image={referenceStakeholders}
            label="Stakeholder portal"
            title="Structured feedback routes for users, management and project teams."
            stats={[['04', 'groups'], ['06', 'functions'], ['PMIS', 'loop']]}
          />
        </div>
        <div className="container stakeholder-grid">
          {stakeholderGroups.map(([title, text], index) => (
            <article className="stakeholder-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-heading wide">
            <p className="eyebrow">Engagement portal functions</p>
            <h2>Prototype routes for useful participation.</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-heading wide">
            <p className="eyebrow">Our engagement model</p>
            <h2>Listen. Make sense. Close the loop.</h2>
          </div>
          <div className="process-grid">
            {[
              ['Map', 'Identify affected stakeholders, mobility needs, decision points and feedback channels.'],
              ['Engage', 'Use surveys, issue reports, pilot communications and Green Miles participation to collect input.'],
              ['Integrate', 'Translate feedback into PMIS issue logs, risk actions and route or service considerations.'],
              ['Respond', 'Communicate what was heard, what changed and why decisions were made.'],
            ].map(([title, text], index) => (
              <article className="process-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const ContactPage = () => (
    <section id="contact" className="section page-section contact-section">
      <div className="container contact-layout">
        <div className="page-hero">
          <div className="contact-visual-strip simple-contact-hero">
            <div>
              <p className="eyebrow">Contact</p>
              <h1>Let's move the conversation forward.</h1>
              <p>
                Contact Nadi Mobility for proposal review, dashboard demonstration and stakeholder pilot planning.
              </p>
            </div>
          </div>
          <div className="contact-cards">
            <article><span>Email</span><strong>24215346@siswa.um.edu.my</strong></article>
            <article><span>Location</span><strong>Kuala Lumpur, Malaysia</strong></article>
            <article><span>Focus</span><strong>Malaysia campus mobility and low-carbon transport programmes</strong></article>
          </div>
        </div>
        <form className="feedback-prototype contact-form">
          <p className="eyebrow">Prototype enquiry form</p>
          <label>Full name<input type="text" placeholder="Your name" /></label>
          <label>Organisation<input type="text" placeholder="University / team / organisation" /></label>
          <label>Email address<input type="email" placeholder="name@example.com" /></label>
          <label>Stakeholder group<select defaultValue="UM Management"><option>UM Management</option><option>Student or staff</option><option>Project team</option><option>Delivery partner</option><option>Other</option></select></label>
          <label>How can we help?<textarea placeholder="Tell us which proposal, dashboard or engagement item you want to discuss..." /></label>
          <button className="button primary" type="button">Submit enquiry</button>
          <small>Prototype only - no data is submitted in this version.</small>
        </form>
      </div>
    </section>
  );

  const pages = {
    '/': <HomePage />,
    '/about-us': <AboutPage />,
    '/services': <ServicesPage />,
    '/strategy-map': <StrategyPage />,
    '/project': <ProjectPage />,
    '/engagement': <EngagementPage />,
    '/contact': <ContactPage />,
  };

  return (
    <div className="site-shell">
      <header className="nav">
        <a
          className="brand"
          href="/"
          aria-label="Nadi Mobility home"
          onClick={(event) => {
            event.preventDefault();
            navigate('/');
          }}
        >
          <img src={logo} alt="Nadi Mobility" />
          <span className="brand-fallback">NADI MOBILITY</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([item, path]) => (
            <a
              key={path}
              className={currentPage === path ? 'active' : ''}
              href={path}
              onClick={(event) => {
                event.preventDefault();
                navigate(path);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className={`page-main${currentPage === '/' ? ' home-main' : ''}`}>
        {pages[currentPage] || pages['/']}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logo} alt="Nadi Mobility" />
              <p>Project clarity for the next generation of movement.</p>
            </div>
            <div className="footer-column">
              <h3>Explore</h3>
              <NavLink path="/about-us">About</NavLink>
              <NavLink path="/services">Services</NavLink>
              <NavLink path="/strategy-map">Strategy map</NavLink>
              <NavLink path="/project">UM project portal</NavLink>
            </div>
            <div className="footer-column">
              <h3>Engage</h3>
              <NavLink path="/engagement">Stakeholder engagement</NavLink>
              <NavLink path="/services">Sustainability delivery</NavLink>
              <NavLink path="/contact">Contact</NavLink>
            </div>
            <div className="footer-column">
              <h3>Location</h3>
              <p>Kuala Lumpur<br />Malaysia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Nadi Mobility Project Management Sdn. Bhd.</span>
            <span>Independent thinking. Accountable delivery.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
