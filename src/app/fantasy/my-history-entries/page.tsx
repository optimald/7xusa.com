import Link from 'next/link'

export default function VVCLeaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Alex Chen", portfolio: "$142,850", gains: "+28.5%", avatar: "/images/avatars/835/646e8179ee078-bpfull.jpg" },
    { rank: 2, name: "Sarah Johnson", portfolio: "$138,420", gains: "+25.2%", avatar: "/images/avatars/834/6467bab7009a1-bpfull.png" },
    { rank: 3, name: "Mike Rodriguez", portfolio: "$134,670", gains: "+22.1%", avatar: "/images/avatars/263/61b02e63ef190-bpfull.png" },
    { rank: 4, name: "Emily Davis", portfolio: "$129,340", gains: "+19.8%", avatar: "/images/avatars/274/63298fa62879b-bpfull.jpg" },
    { rank: 5, name: "James Wilson", portfolio: "$126,890", gains: "+18.3%", avatar: "/images/avatars/826/6436c78c44ead-bpfull.jpg" },
    { rank: 6, name: "Lisa Thompson", portfolio: "$124,560", gains: "+17.1%", avatar: "/images/avatars/419/62b4e92b14994-bpfull.png" },
    { rank: 7, name: "David Brown", portfolio: "$122,340", gains: "+15.9%", avatar: "/images/avatars/636/633b0d532c64e-bpfull.jpg" },
    { rank: 8, name: "Jennifer Lee", portfolio: "$119,780", gains: "+14.2%", avatar: "/images/avatars/776/63b6d81391768-bpfull.png" },
    { rank: 9, name: "Robert Garcia", portfolio: "$117,450", gains: "+12.8%", avatar: "/images/avatars/649/63487a609c95d-bpfull.png" },
    { rank: 10, name: "Amanda White", portfolio: "$115,230", gains: "+11.6%", avatar: "/images/avatars/405/629e08f4281ed-bpfull.png" }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#122B46',
        color: 'white',
        padding: '2rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              <img 
                src="/images/logo.png" 
                alt="7x Logo" 
                style={{ width: '120px', height: 'auto' }}
              />
            </Link>
            <div style={{ textAlign: 'right' }}>
              <h1 style={{ 
                fontSize: '28px',
                fontWeight: '700',
                margin: '0',
                marginBottom: '0.25rem'
              }}>
                vVC Leaderboard
              </h1>
              <p style={{ 
                fontSize: '16px',
                margin: '0',
                opacity: '0.8'
              }}>
                Top Virtual Venture Capitalists
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #E7E9EC',
        padding: '1rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-around',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#007CFF' }}>$14.88</div>
            <div style={{ fontSize: '14px', color: '#4D5C6D' }}>Current VC Value</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#28a745' }}>847</div>
            <div style={{ fontSize: '14px', color: '#4D5C6D' }}>Active Players</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#ff6b35' }}>$2.4M</div>
            <div style={{ fontSize: '14px', color: '#4D5C6D' }}>Total Portfolio Value</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#6f42c1' }}>156</div>
            <div style={{ fontSize: '14px', color: '#4D5C6D' }}>Active Startups</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Trophy Section */}
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            color: '#122B46',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            🏆 Hall of Fame
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Top 3 Podium */}
            {leaderboardData.slice(0, 3).map((player, index) => (
              <div key={player.rank} style={{
                textAlign: 'center',
                order: index === 0 ? 2 : index === 1 ? 1 : 3
              }}>
                <div style={{
                  width: index === 0 ? '80px' : '70px',
                  height: index === 0 ? '80px' : '70px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 1rem auto',
                  border: index === 0 ? '3px solid #ffd700' : index === 1 ? '3px solid #c0c0c0' : '3px solid #cd7f32'
                }}>
                  <img 
                    src={player.avatar} 
                    alt={player.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  fontSize: index === 0 ? '32px' : '24px',
                  marginBottom: '0.5rem'
                }}>
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                </div>
                <div style={{ fontWeight: '700', color: '#122B46', marginBottom: '0.25rem' }}>
                  {player.name}
                </div>
                <div style={{ color: '#007CFF', fontWeight: '600' }}>
                  {player.portfolio}
                </div>
                <div style={{ color: '#28a745', fontSize: '14px' }}>
                  {player.gains}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            backgroundColor: '#007CFF',
            color: 'white',
            padding: '1rem 1.5rem',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            Full Leaderboard
          </div>
          
          <div style={{ padding: '0' }}>
            {leaderboardData.map((player, index) => (
              <div key={player.rank} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                borderBottom: index < leaderboardData.length - 1 ? '1px solid #E7E9EC' : 'none',
                backgroundColor: index < 3 ? '#f8f9fa' : 'white'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: index < 3 ? '#007CFF' : '#4D5C6D',
                  minWidth: '40px'
                }}>
                  #{player.rank}
                </div>
                
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 1rem',
                  border: '2px solid #E7E9EC'
                }}>
                  <img 
                    src={player.avatar} 
                    alt={player.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', color: '#122B46', marginBottom: '0.25rem' }}>
                    {player.name}
                  </div>
                  <div style={{ fontSize: '14px', color: '#4D5C6D' }}>
                    Virtual Venture Capitalist
                  </div>
                </div>
                
                <div style={{ textAlign: 'right' }}>
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    color: '#122B46',
                    marginBottom: '0.25rem'
                  }}>
                    {player.portfolio}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#28a745', 
                    fontWeight: '600'
                  }}>
                    {player.gains}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div style={{
          backgroundColor: '#007CFF',
          borderRadius: '12px',
          padding: '2rem',
          marginTop: '2rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ 
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Think you can make it to the top?
          </h3>
          <p style={{ 
            fontSize: '16px',
            marginBottom: '1.5rem',
            opacity: '0.9'
          }}>
            Join the Virtual VC Game and compete with the best investors
          </p>
          <Link 
            href="/login"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#007CFF',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.2s'
            }}
          >
            Start Playing
          </Link>
        </div>
      </main>
    </div>
  )
}