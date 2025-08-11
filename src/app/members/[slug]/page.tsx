import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample member data - in a real app this would come from a database
const members = {
  'june': {
    id: 835,
    name: "June Zhu",
    title: "Founder & CEO",
    company: "MindEase",
    description: "Revolutionary Mental health mobile app to quickly and effectively help people with anxiety, depression and low self-esteem",
    image: "/images/avatars/835/646e8179ee078-bpfull.jpg",
    fullBio: "June Zhu is a passionate entrepreneur and mental health advocate who founded MindEase to address the growing mental health crisis. With a background in psychology and technology, June combines evidence-based therapeutic techniques with cutting-edge mobile technology to create accessible mental health solutions.",
    achievements: [
      "500K+ app downloads in first year",
      "Featured in TechCrunch as 'App of the Month'",
      "Mental Health Innovation Award 2023",
      "Former Google Product Manager"
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/junezhu",
      twitter: "https://twitter.com/junezhu_ceo"
    },
    fundingGoal: "$2.5M Series A",
    currentFunding: "$750K"
  },
  'caseyp': {
    id: 834,
    name: "Casey Pehrson",
    title: "Founder & CTO",
    company: "AudioSport",
    description: "We design and make Near Ear Audio systems for outdoor recreational athletes.",
    image: "/images/avatars/834/6467bab7009a1-bpfull.png",
    fullBio: "Casey Pehrson is an audio engineering expert and outdoor enthusiast who created AudioSport to solve the challenge of safe audio for athletes. With over 10 years of experience in audio technology and a passion for outdoor sports, Casey developed innovative near-ear audio systems that don't compromise safety.",
    achievements: [
      "10+ patents in audio technology",
      "Former Bose Senior Engineer",
      "Olympic Training Center partnerships",
      "REI Innovation Partner"
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/caseypehrson",
      twitter: "https://twitter.com/caseyp_audio"
    },
    fundingGoal: "$1.8M Seed Round",
    currentFunding: "$450K"
  },
  'dezi': {
    id: 263,
    name: "Desiree Blanchard",
    title: "Founder & Master Stylist",
    company: "Mobile Glam",
    description: "I will bring the salon to you, and you can have amazing hair anywhere anytime (except after 7pm). Whether it be dimensional blonde, dark chocolate brown or a fun haircut I can do it.",
    image: "/images/avatars/263/61b02e63ef190-bpfull.png",
    fullBio: "Desiree Blanchard is a master stylist with over 15 years of experience in high-end salons. She founded Mobile Glam to make professional hair services accessible to busy professionals and those with mobility challenges. Her mobile salon concept has revolutionized convenience in beauty services.",
    achievements: [
      "1000+ satisfied mobile clients",
      "Featured in Vogue's 'Beauty Innovators'",
      "Cosmetology Instructor Certification",
      "5-star rating across all platforms"
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/desireeblanchard",
      instagram: "https://instagram.com/mobileglam_dezi"
    },
    fundingGoal: "$500K Growth Capital",
    currentFunding: "$150K"
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function MemberProfile({ params }: PageProps) {
  const member = members[params.slug as keyof typeof members]
  
  if (!member) {
    notFound()
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #E7E9EC',
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ color: '#007CFF', textDecoration: 'none' }}>
              <img 
                src="/images/logo.png" 
                alt="7x Logo" 
                style={{ width: '120px', height: 'auto' }}
              />
            </Link>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link 
                href="/"
                style={{
                  color: '#4D5C6D',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                ← Back to Startups
              </Link>
              <Link 
                href="/login"
                style={{
                  backgroundColor: '#007CFF',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Invest
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          {/* Left Column - Profile Info */}
          <div>
            {/* Profile Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 1.5rem auto',
                border: '4px solid #007CFF'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              <h1 style={{
                color: '#122B46',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                {member.name}
              </h1>
              
              <p style={{
                color: '#007CFF',
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '0.25rem'
              }}>
                {member.title}
              </p>
              
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                marginBottom: '1.5rem'
              }}>
                {member.company}
              </p>

              {/* Social Links */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {member.socialMedia.linkedin && (
                  <a 
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#0077b5',
                      color: 'white',
                      borderRadius: '50%',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                {member.socialMedia.twitter && (
                  <a 
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#1da1f2',
                      color: 'white',
                      borderRadius: '50%',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {member.socialMedia.instagram && (
                  <a 
                    href={member.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#e4405f',
                      color: 'white',
                      borderRadius: '50%',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>

            {/* Funding Status */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                Funding Status
              </h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#4D5C6D', fontSize: '14px' }}>Goal</span>
                  <span style={{ color: '#122B46', fontWeight: '600' }}>{member.fundingGoal}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#4D5C6D', fontSize: '14px' }}>Raised</span>
                  <span style={{ color: '#28a745', fontWeight: '600' }}>{member.currentFunding}</span>
                </div>
              </div>

              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#E7E9EC',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '30%', // This would be calculated based on actual funding
                  height: '100%',
                  backgroundColor: '#28a745'
                }}></div>
              </div>

              <button style={{
                width: '100%',
                backgroundColor: '#007CFF',
                color: 'white',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Invest in {member.company}
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            {/* Company Description */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{
                color: '#122B46',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                About {member.company}
              </h2>
              
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {member.description}
              </p>
              
              <p style={{
                color: '#4D5C6D',
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                {member.fullBio}
              </p>
            </div>

            {/* Achievements */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                color: '#122B46',
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Key Achievements
              </h3>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {member.achievements.map((achievement, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    backgroundColor: '#FBFBFC',
                    borderRadius: '8px',
                    border: '1px solid #E7E9EC'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#007CFF',
                      borderRadius: '50%',
                      marginRight: '1rem'
                    }}></div>
                    <span style={{
                      color: '#122B46',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}