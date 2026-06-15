import { useEffect, useState } from 'react';
import logo from './assets/logo.png';

const navItems = [
  ['Home', 'home'],
  ['Challenge', 'challenge'],
  ['Solution', 'solution'],
  ['Dashboard', 'dashboard'],
  ['Roadmap', 'roadmap'],
  ['Value', 'value'],
  ['About Us', 'about-us'],
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
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
};

const challenges = [
  ['car', 'Private vehicle dependency', 'High reliance on cars and motorcycles increases circulation inside the campus core.'],
  ['gate', 'Peak-hour gate congestion', 'Concentrated arrivals create pressure at major campus gates and internal roads.'],
  ['parking', 'Parking pressure', 'Demand clusters around faculties, residential colleges and activity nodes.'],
  ['weather', 'Hilly terrain and tropical weather', 'Heat, rain and slopes reduce willingness to walk or cycle between facilities.'],
  ['data', 'Limited real-time mobility information', 'Users need clearer shuttle, parking and route information to plan reliable trips.'],
];

const solutions = [
  ['parking', 'Gate-based Park & Ride', 'Intercept vehicles at campus edges and connect users to low-carbon internal mobility.'],
  ['shuttle', 'Electric Campus Shuttle', 'Link academic zones, gates, residential colleges, the library and health areas.'],
  ['leaf', 'Pedestrian Green Spine', 'Create shaded, safer and more inclusive walking corridors across priority routes.'],
  ['bike', 'Shared E-Bicycle System', 'Support short trips, slopes and last-mile access through phased e-bike hubs.'],
  ['platform', 'Smart Mobility Platform + Green Miles', 'Unify live mobility data, incentives, feedback, PMIS and carbon reporting.'],
];

const roadmap = [
  ['Years 1-2', 'Pilot & Foundation', 'Validate priority gates, core shuttle routes, early e-bike hubs and dashboard functions.'],
  ['Years 3-5', 'Expansion', 'Scale Park & Ride, Green Spine works, fleet deployment and integrated mobility operations.'],
  ['Years 6-8', 'Digital Optimisation', 'Use PMIS data, demand patterns and Green Miles engagement to tune service quality.'],
  ['Years 9-10', 'Full Ecosystem Operation', 'Operate a mature, measurable and institution-wide low-carbon mobility ecosystem.'],
];

const alignment = [
  ['UM Master Plan 2050', 'Supports connected gates, Park & Ride, pedestrian routes and future-ready campus mobility.'],
  ['UM Sustainability Policy 2021-2030', 'Advances low-carbon mobility, resource efficiency and measurable performance.'],
  ['UM Eco-Campus Blueprint', 'Turns campus sustainability goals into practical access, mobility and user-experience actions.'],
  ['UM Impact Reports / SDGs', 'Provides auditable indicators for SDG 7, 9, 11 and 13 reporting.'],
];

const figures = [
  ['CAPEX', 'RM166.99 million'],
  ['Year 1 OPEX', 'RM7.36 million'],
  ['10-Year TCO PV', 'RM230.03 million'],
  ['Year 1 OPEX Coverage Ratio', '125.0%'],
];

function App() {
  const [isFloatingNav, setIsFloatingNav] = useState(false);

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
                A phased, smart and low-carbon mobility proposal for Universiti Malaya's Carbon Neutral Campus
                2050 vision, connecting gates, shuttles, walkways, e-bikes and real-time decision data.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#solution">
                  Explore the Proposal
                </a>
                <a className="button secondary" href="#dashboard">
                  View Dashboard
                </a>
              </div>
              <div className="hero-stats" aria-label="Proposal highlights">
                <span><strong>5</strong> Mobility layers</span>
                <span><strong>10-year</strong> roadmap</span>
                <span><strong>PMIS</strong> enabled</span>
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
                  <span>SMART CAMPUS</span>
                  <strong>Mobility Hub</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Client Challenge</p>
              <h2>UM needs mobility that works across terrain, weather, gates and daily demand.</h2>
            </div>
            <div className="card-grid five">
              {challenges.map(([icon, title, text]) => (
                <article className="info-card" key={title}>
                  <Icon type={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="section solution-section">
          <div className="container">
            <div className="section-heading wide">
              <p className="eyebrow">Integrated Solution</p>
              <h2>One coordinated smart campus mobility ecosystem, not five separate facilities.</h2>
              <p>
                Park & Ride, electric shuttle service, walking corridors, e-bikes and digital operations are designed
                as connected workstreams with shared data, transfer points and user incentives.
              </p>
            </div>
            <div className="ecosystem">
              {solutions.map(([icon, title, text], index) => (
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
              <p className="eyebrow">Proposal Dashboard</p>
              <h2>Scenario-based mobility intelligence for management decisions.</h2>
              <p>
                This mock dashboard shows how UM could monitor demand, mode shift, energy use, shuttle performance
                and carbon indicators through PMIS and the UM Touch mobility module.
              </p>
            </div>
            <div className="dashboard-panel">
              <div className="dashboard-top">
                <span>Mobility Operations Concept</span>
                <strong>Live Scenario</strong>
              </div>
              <div className="metric-grid">
                <div className="metric-card">
                  <span>Estimated daily users</span>
                  <strong>18,500</strong>
                  <small>students, staff and visitors</small>
                </div>
                <div className="metric-card">
                  <span>Mode shift scenario</span>
                  <strong>22%</strong>
                  <small>from private vehicles</small>
                </div>
                <div className="metric-card">
                  <span>Estimated CO2 savings</span>
                  <strong>426.8 t</strong>
                  <small>CO2e/year at full rollout</small>
                </div>
                <div className="metric-card">
                  <span>Shuttle demand</span>
                  <strong>High</strong>
                  <small>Route 1 peak corridor</small>
                </div>
              </div>
              <div className="monitoring-row">
                <div>
                  <span>Energy and carbon monitoring</span>
                  <strong>586 MWh</strong>
                  <small>estimated annual ecosystem demand</small>
                </div>
                <div className="bars" aria-hidden="true">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '64%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '78%' }} />
                  <span style={{ height: '68%' }} />
                </div>
              </div>
              <p className="dashboard-note">
                Scenario-based estimation for proposal demonstration only. Final values require UM operational data
                validation.
              </p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="section roadmap-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Implementation Roadmap</p>
              <h2>A 10-year path from controlled pilot to full ecosystem operation.</h2>
            </div>
            <div className="timeline">
              {roadmap.map(([years, title, text]) => (
                <article className="timeline-item" key={title}>
                  <span>{years}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
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

        <section id="about-us" className="section company-section">
          <div className="container company-grid">
            <div className="company-profile">
              <img src={logo} alt="Nadi Mobility" />
              <h2>Nadi Mobility Project Management Sdn. Bhd.</h2>
              <p>
                A Malaysian-based project management consultancy specialising in sustainable transport
                infrastructure, smart mobility systems, PMIS integration, stakeholder engagement and sustainability
                reporting.
              </p>
            </div>
            <div className="approach-card">
              <p className="eyebrow">Our Approach</p>
              <div className="approach-grid">
                <span>PMBOK</span>
                <span>PRINCE2</span>
                <span>ISO 21500</span>
                <span>Hybrid/Agile Execution</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Stakeholder Engagement</p>
            <h2>Designed for management, campus users and the project team.</h2>
          </div>
          <div className="engagement-grid">
            <article>
              <h3>UM Management</h3>
              <p>View proposal and dashboard</p>
            </article>
            <article>
              <h3>Students & Staff</h3>
              <p>Submit mobility feedback and join Green Miles pilot</p>
            </article>
            <article>
              <h3>Project Team</h3>
              <p>Track PMIS progress and sustainability indicators</p>
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
