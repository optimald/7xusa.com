import Link from 'next/link'

export default function Information() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#007CFF',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            <img 
              src="/images/logo.png" 
              alt="7x Logo" 
              style={{ width: '150px', height: 'auto', marginBottom: '1rem' }}
            />
          </Link>
          <h1 style={{ 
            fontSize: '32px',
            fontWeight: '700',
            margin: '0'
          }}>
            Information & FAQ
          </h1>
          <p style={{ 
            fontSize: '18px',
            margin: '0.5rem 0 0 0',
            opacity: '0.9'
          }}>
            Everything you need to know about 7x Innovation Champions
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* About Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            color: '#122B46',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            About 7x Innovation Champions
          </h2>
          <div style={{ 
            backgroundColor: '#FBFBFC',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <p style={{ 
              color: '#4D5C6D',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              7x Innovation Champions is a virtual venture capitalist platform that connects innovative startups with forward-thinking investors. Our mission is to accelerate innovation by providing a platform where entrepreneurs can showcase their ventures and compete for investment opportunities.
            </p>
            <p style={{ 
              color: '#4D5C6D',
              fontSize: '16px',
              lineHeight: '1.6',
              margin: '0'
            }}>
              Through our unique Virtual VC Game, participants can experience the thrill of venture capitalism while supporting real startups that are changing the world.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 style={{ 
            color: '#122B46',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '2rem'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* FAQ Item 1 */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #E7E9EC',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                What is the Virtual VC Game?
              </h3>
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0'
              }}>
                The Virtual VC Game is an interactive platform where players act as virtual venture capitalists, evaluating and investing in real startups. Players receive virtual currency to make investment decisions and compete on leaderboards based on their portfolio performance.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #E7E9EC',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                How do I join as a startup?
              </h3>
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Startups can apply to be featured on our platform by creating a profile with their business information, pitch deck, and founding team details. Our team reviews applications and selects companies that demonstrate innovation and growth potential.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #E7E9EC',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                What are the current startup and VC values?
              </h3>
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Currently, startups are valued at $22.32 and virtual VCs at $14.88. These values are updated based on market performance, user engagement, and platform activity.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #E7E9EC',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                How does the leaderboard work?
              </h3>
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0'
              }}>
                The vVC Leaderboard ranks players based on their virtual portfolio performance, including returns on investments, timing of decisions, and overall strategy. Top performers gain recognition and may receive real investment opportunities.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #E7E9EC',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                What is 7xTV?
              </h3>
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0'
              }}>
                7xTV is our streaming platform featuring startup pitches, investor interviews, educational content about entrepreneurship, and live coverage of pitch competitions and demo days.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#007CFF',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            color: 'white',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Still have questions?
          </h2>
          <p style={{ 
            color: 'white',
            fontSize: '16px',
            marginBottom: '1.5rem',
            opacity: '0.9'
          }}>
            Contact our team for more information about 7x Innovation Champions
          </p>
          <Link 
            href="/login"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#007CFF',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            Get Started
          </Link>
        </section>
      </main>
    </div>
  )
}