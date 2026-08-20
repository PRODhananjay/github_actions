import './App.css';

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <div className="cube-icon"></div>
            <span>Cuber Security</span>
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="btn-primary">Get Protected</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              Next-Gen
              <br />
              Security Solutions
            </h1>

            <p>
              Advanced threat protection powered by intelligent cube-based
              encryption algorithms. Your data deserves military-grade
              security.
            </p>

            <div className="cta-group">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="security-cube"></div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat-card">
            <h3>99.9%</h3>
            <p>Threat Detection Rate</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Live Monitoring</p>
          </div>

          <div className="stat-card">
            <h3>50K+</h3>
            <p>Protected Clients</p>
          </div>

          <div className="stat-card">
            <h3>0.01ms</h3>
            <p>Response Time</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Security Services</h2>
            <p>Comprehensive protection for every digital asset</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🔒</div>
              <h3>Encryption Hub</h3>
              <p>
                Military-grade AES-256 encryption with quantum-resistant
                algorithms for maximum data protection.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">🛡️</div>
              <h3>Threat Defense</h3>
              <p>
                AI-powered real-time threat detection blocking malware,
                ransomware, and zero-day exploits.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">🌐</div>
              <h3>Network Security</h3>
              <p>
                Complete network perimeter protection with intrusion prevention
                and traffic analysis.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">☁️</div>
              <h3>Cloud Protection</h3>
              <p>
                Secure cloud infrastructure with end-to-end encryption and
                access control systems.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">📱</div>
              <h3>Mobile Security</h3>
              <p>
                Protect mobile devices with advanced anti-theft and secure
                browsing capabilities.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">⚖️</div>
              <h3>Compliance</h3>
              <p>
                Audit-ready compliance reporting for GDPR, HIPAA, SOC2 and
                industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="about">
        <div className="container">
          <div className="feature-split">
            <div className="feature-text">
              <h2>Why Choose Cuber Security?</h2>

              <p>
                We combine cutting-edge cryptography with intuitive interfaces
                to deliver enterprise-grade security accessible to everyone.
              </p>

              <ul className="feature-list">
                <li>
                  <span>✓</span> Zero-knowledge architecture
                </li>

                <li>
                  <span>✓</span> End-to-end encryption
                </li>

                <li>
                  <span>✓</span> Multi-factor authentication
                </li>

                <li>
                  <span>✓</span> Regular security audits
                </li>

                <li>
                  <span>✓</span> 24/7 expert support
                </li>
              </ul>

              <button className="btn-primary">Learn More</button>
            </div>

            <div className="feature-visual">
              <div className="tech-diagram">
                <div className="node node-1"></div>
                <div className="node node-2"></div>
                <div className="node node-3"></div>

                <div className="connection c-1"></div>
                <div className="connection c-2"></div>
                <div className="connection c-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-box">
            <h2>Ready to Secure Your Digital Future?</h2>

            <p>
              Join thousands of businesses trusting Cuber Security for their
              protection needs.
            </p>

            <form className="contact-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
              />

              <button type="submit" className="btn-primary">
                Get Started
              </button>
            </form>

            <p className="trust-badge">
              Trusted by Fortune 500 companies worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Cuber Security</h4>
              <p>
                Advanced cybersecurity solutions for the modern digital world.
              </p>
            </div>

            <div className="footer-section">
              <h4>Product</h4>

              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>

              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>

              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2024 Cuber Security. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;