export default function Header() {
  return (
    <header className="site-header">
      <div className="custom-container">
        <div className="header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 1.5rem' }}>
          {/* START-UPS Section */}
          <div className="site-stats left-block">
            <p>
              <span className="title">START-UPS</span>
              <span className="stats">$22.32</span>
            </p>
          </div>

          {/* 7X INNOVATE Home Section */}
          <div className="site-branding">
            <h2 className="site-title">
              <a href="/" rel="home" style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  width="220" 
                  height="130" 
                  src="/images/logo.png" 
                  className="custom-logo" 
                  alt="7x" 
                  decoding="async" 
                  fetchPriority="high"
                />
              </a>
            </h2>
          </div>

          {/* VIRTUAL VCs Section */}
          <div className="site-stats right-block">
            <p>
              <span className="title">VIRTUAL VCs</span>
              <span className="stats">$14.88</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
} 