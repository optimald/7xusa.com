import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import ProfileCards from '@/components/ProfileCards'
import Footer from '@/components/Footer'
import SponsorLogos from '@/components/SponsorLogos'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="main-layout">
      {/* Green Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="main-content">
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Header */}
          <Header />
          
          {/* Sponsor Logos */}
          <SponsorLogos />
          
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {/* Search and Sign In */}
            <SearchBar />
            
            {/* Profile Cards */}
            <ProfileCards />
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
} 