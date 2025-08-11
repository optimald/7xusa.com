import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <Link href="/login">
            <i className="fa fa-user-plus"></i>
            Invite a Friend
          </Link>
        </li>
        
        <li>
          <Link href="/login">
            <i className="fa fa-desktop"></i>
            7xTV
          </Link>
        </li>
        
        <li>
          <Link href="/login" className="virtual-vc-highlight">
            <i className="fa fa-gamepad"></i>
            <div>
              <div>Virtual Venture Capitalist</div>
              <div style={{ fontSize: '12px', opacity: 0.9 }}>PLAY THE GAME</div>
            </div>
          </Link>
        </li>
        
        <li>
          <Link href="/fantasy/my-history-entries">
            <i className="fa fa-medal"></i>
            vVC Leaderboard
          </Link>
        </li>
        
        <li>
          <Link href="/login">
            <i className="fa fa-graduation-cap"></i>
            Learn from Pros
          </Link>
        </li>
        
        <li>
          <Link href="/7xinformation">
            <i className="fa fa-info"></i>
            Information FAQ
          </Link>
        </li>
      </ul>
    </nav>
  )
}