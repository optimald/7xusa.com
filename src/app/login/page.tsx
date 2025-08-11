'use client'

export default function Login() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img 
            src="/images/logo.png" 
            alt="7x Logo" 
            style={{ width: '150px', height: 'auto' }}
          />
          <h1 style={{ 
            color: '#122B46',
            fontSize: '24px',
            fontWeight: '700',
            marginTop: '1rem',
            marginBottom: '0.5rem'
          }}>
            Welcome Back
          </h1>
          <p style={{ color: '#4D5C6D' }}>
            Sign in to access your 7x account
          </p>
        </div>

        <form style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '0.5rem',
              color: '#122B46',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              Email
            </label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #E7E9EC',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your email"
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '0.5rem',
              color: '#122B46',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              Password
            </label>
            <input
              type="password"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #E7E9EC',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007CFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            className="login-submit-btn"
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: 'center' }}>
          <a 
            href="#" 
            style={{ 
              color: '#007CFF',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            Forgot your password?
          </a>
        </div>

        <div style={{ 
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#FBFBFC',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: '0',
            color: '#4D5C6D',
            fontSize: '14px'
          }}>
            New to 7x? <a href="#" style={{ color: '#007CFF', textDecoration: 'none' }}>Create an account</a>
          </p>
        </div>
      </div>
    </div>
  )
}